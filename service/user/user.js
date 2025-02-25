const mongoose = require("mongoose");
const User = require("../../models/user/user");

const createUser = async (userObj) => {
    try {
        const newUser = await User.create(userObj);
        return newUser;
    } catch (error) {
        console.error("Error creating user:", error);
        throw error;  
    }
};

const fetchAllUsers = async () => {
    try {
        const users = await User.find();
        return users;
    } catch (error) {
        console.error("Error fetching users:", error);
        throw error;
    }
};

module.exports = { createUser, fetchAllUsers };
