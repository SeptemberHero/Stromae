import express from "express"

//import Room from "../models/Room.js";
//import { createError } from "../utils/error.js";
import { getAllRooms, createRoom, updateRoom ,deleteRoom, getRoom} from "../controllers/room.js";
import {verifyAdmin} from "../utils/verifyToken.js"
const router = express.Router();

//CREATE
router.post("/:hotelid", createRoom)


//UPDATE
//UPDATE uses PUT method
router.put("/:id", verifyAdmin, updateRoom);



//DELETE
router.delete("/:id", verifyAdmin, deleteRoom);

//GET

router.get("/:id", verifyAdmin, getRoom)

//GET ALL

router.get("/", verifyAdmin, getAllRooms);





export default router
