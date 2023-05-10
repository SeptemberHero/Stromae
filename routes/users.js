import express from "express"

import { getAllUsers, /*createUser*/updateUser ,deleteUser, getUser} from "../controllers/user.js";
import {verifyToken} from "../utils/verifyToken.js"
import {verifyUser} from "../utils/verifyToken.js"
import {verifyAdmin} from "../utils/verifyToken.js"
const router = express.Router();


//CREATE
/*router.get("/checkauthentication", verifyToken, (req,res,next)=>{
    res.send("hello user, you are logged in")
})

router.get("/checkuser/:id", verifyUser, (req,res,next)=>{
    res.send("hello user, you are logged in and you can delete your account")
})

router.get("/checkadmin/:id", verifyAdmin, (req,res,next)=>{
    res.send("hello admin, you are logged in and you can delete your account")
})*/



//UPDATE
//UPDATE uses PUT method
router.put("/:id", verifyUser, updateUser);


//DELETE
router.delete("/:id",verifyUser, deleteUser);

//GET

router.get("/:id", verifyUser, getUser)

//GET ALL

router.get("/", verifyAdmin, getAllUsers);



export default router
