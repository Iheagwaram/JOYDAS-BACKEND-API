const {createUser, fetchAllUsers} = require("../service/user/user");

const createUserController = async (req, res) => {
    try {
        const newUser = await createUser(req.body);
        res.status(201).json({data: newUser, message:`New user created sucessfully`, status: true})
    } catch (error) {
        res.status(500).json({data: error.message, message: `Failed to create a user`, status: true})
    }
}

const fetchAllUsersController = async (req, res) => {
    try {
        const users = await fetchAllUsers();
        res.status(201).json({data: users, message: `Fetched users succesfully`, status:true})
    } catch (error) {
        res.status(500).json({data: error.message, message: `Failed to fetch users`, status: true})
    }
}
module.exports = {createUserController, fetchAllUsersController}