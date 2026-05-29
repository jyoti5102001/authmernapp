const mongoose = require('mongoose');

const mongoURI = process.env.MONGODB_URI ;

mongoose.connect(mongoURI)
    .then(() => {
        console.log('MongoDB Connected successfully');
    })
    .catch((err) => {
        console.error('Error connecting to MongoDB:', err);
    });

