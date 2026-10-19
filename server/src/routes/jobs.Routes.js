import express from "express"
import { createJob, deleteJobById, getAllJobs, getJobById, getJobsByCatId, getJobsByName } from "../controller/jobs.Controller.js"
import { protect } from "../middleware/protect.Middleware.js"


const router = express.Router()

router.get("/all_jobs" , getAllJobs)
router.post("/create_Job" , createJob)
router.get("/category_jobs/:catId" , getJobsByCatId)
router.post("/jobs" , getJobsByName)
router.delete("/job/:id", protect,deleteJobById)
router.get("/job/:id",getJobById)
export default router