import express from "express"
import { getAllJobs } from "../controller/jobs.Controller"


const router = express.Router()

router.get("//all_jobs" , getAllJobs)

export default router