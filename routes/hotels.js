import express from "express"
import Hotel from "../models/Hotel.js";
//import { createError } from "../utils/error.js";
import { getAllHotels, createHotel, updateHotel ,deleteHotel, getHotel} from "../controllers/hotel.js";
import {verifyAdmin} from "../utils/verifyToken.js"
const router = express.Router();

//CREATE
router.post("/", createHotel)


//UPDATE
//UPDATE uses PUT method
router.put("/:id", verifyAdmin, updateHotel);



//DELETE
router.delete("/:id", verifyAdmin, deleteHotel);

//GET

router.get("/:id", verifyAdmin, getHotel)

//GET ALL

router.get("/", verifyAdmin, getAllHotels);


export default router;
