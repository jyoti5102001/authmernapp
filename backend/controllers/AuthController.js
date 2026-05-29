const UserModel = require('../models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const signup = async (req, res) => {
    try {
        const { username, email, password } = req.body;
        const user = await UserModel.findOne({ email });
        if(user){
            return res.status(409).json({message: 'User already exists with this email,you can login instead', success: false});
        }

        const userModel = new UserModel({
            username,
            email,
            password
        });
        userModel.password = await bcrypt.hash(password, 10);
        await userModel.save();
        res.status(201).json({message: 'User created successfully', success: true});
    } catch (error) {
        res.status(500).json({message: 'Error occurred while signing up'});
    }
};

const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await UserModel.findOne({ email });
        if(!user){
            return res.status(404).json({message: 'User not found', success: false});
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if(!isMatch){
            return res.status(401).json({message: 'Invalid credentials', success: false});
        }

        const jwtToken = jwt.sign({email: user.email, _id: user._id}, process.env.JWT_SECRET, {expiresIn: '24h'});
        res.status(200).json({message: 'Login successful', success: true, token: jwtToken,email: user.email, username: user.username});
    } catch (error) {
        res.status(500).json({message: 'Error occurred while logging in'});
    }
};

module.exports = {
    signup,
    login
};
       