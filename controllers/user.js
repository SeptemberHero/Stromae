import User from "../models/Users.js"
export const createUser = async(req,res,next)=>{
     
    const newUser = new User(req.body)

    try { 
         const savedUser = await newUser.save()
         res.status(200).json(savedUser)

    } catch (err) {
        res.status(500).json(err)
        
    }
    
}

export const updateUser = async(req,res,next)=>{
    
    try { 
        const updatedUser = await User.findByIdAndUpdate(
           req.params.id, 
           {$set: req.body},
           {new : true})
        res.status(200).json(updatedUser);

   } catch (err) {
       res.status(500).json(err)
       
   }
}   

export const deleteUser = async(req, res,next) =>{
    try { 
        await User.findByIdAndDelete(
           req.params.id, )
        res.status(200).json("User has deleted");

   } catch (err) {
       res.status(500).json(err)
       
   }
}


export const getUser = async(req, res,next) =>{
    try { 
         const User = await User.findById(
            req.params.id, )
         res.status(200).json(User);

    } catch (err) {
        res.status(500).json(err)
        
    }
};


export const getAllUsers = async(req, res, next) =>{


    
    
    try { 
         const users = await User.find()
         res.status(200).json(users);

    } catch (err) {
        next(err)
        
    }
};
