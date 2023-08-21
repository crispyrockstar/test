const express=require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const service = {};

service.registerUser=async(req,res,next)=>{
    try {
        const { empno, password } = req.body;
    
        // Check if the username is already taken
        const existingUser = await User.findOne({ empno });
        if (existingUser) {
          return res.status(400).json({ message: 'Employee already exists' });
        }
    
        // Hash the password
        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(password, saltRounds);
    
        // Create a new user in the database
        const newUser = new User({ username, password: hashedPassword });
        await newUser.save();
    
        res.status(201).json({ message: 'User registered successfully' });
      } catch (error) {
        console.error('Error registering user:', error);
        res.status(500).json({ message: 'Server error' });
      }

    
}

module.exports=service;