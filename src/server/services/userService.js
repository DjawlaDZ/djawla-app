// TO DO

// 1- GET USERS
// 2- GET USER (BY ID)
// 3- MODIFY USER
// 4- DELETE USER

const userModel = require('../../models/userSchema') 

const getUsers = async (res) => {   
    try {
        const users = await userModel.find()
        return users
    } catch (error) {
        console.log(error)
        res.status(500).json({message:"failed to get the users"});
    }    
}

const getUserDetail = async (id, res) => {
    try {
        const user = await userModel.findById(id)
        return user
    } catch (error) {
        console.log(error)
        res.status(500).json({message:"failed to get the user"});
    }    
}


const updateUser = async (id, data, res) => { // id + request body 
    try {
        const user = await userModel.findByIdAndUpdate(id, data, {"new":true})
        await user.save()
        return user
    } catch (error) {
        console.log(error)
        res.status(500).json({message:error.message});
        }
    
    
}
const deleteUser = async (id, res) => {
    try {
        const user = await userModel.findByIdAndDelete(id)
        return user
    } catch {
        res.status(500).json({message:error.message});
    }
    
}

module.exports = {getUsers, updateUser, deleteUser, getUserDetail}