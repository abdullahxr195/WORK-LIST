import Job from "../models/jobs.Model.js";



export const getAllJobs = async (res , req) =>{

    try {
    const jobs = await Job.find().populate("catId" , "name")
    if (jobs.length) {
      return res.status(200).json({ message: "No jobs yet", Jobs: [] });
    }

    return res.status(200).json({ message: "jobs succesffuly", jobs });
  } catch (error) {
    return res.status(500).json({ message: "internal server error" });
  }



}