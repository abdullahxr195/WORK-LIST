import Category from "../models/category.Model.js";
import Job from "../models/jobs.Model.js";

export const getAllJobs = async (req, res) => {
  try {
    const jobs = await Job.find().populate("catId", "manager_name,");
    if (jobs.length) {
      return res.status(200).json({ message: "No jobs yet", Jobs: [] });
    }

    return res.status(200).json({ message: "jobs succesffuly", jobs });
  } catch (error) {
    return res.status(500).json({ message: "internal server error" });
  }
};

export const createJob = async (req, res) => {
  try {
    const {
      manager_name,
      time,
      salary,
      manager_number,
      location,
      age,
      experience,
      number_employees,
      catID,
    } = req.body;

    if (!manager_name) {
      return res
        .status(400)
        .json({ message: "Please put the manager's name " });
    }

    if (!time) {
      return res
        .status(400)
        .json({ message: "Please set the working time period" });
    }

    if (!salary) {
      return res
        .status(400)
        .json({ message: "Please provide the salary due for the job " });
    }

    if (!manager_number) {
      return res
        .status(400)
        .json({ message: "Please put the manager's Number" });
    }

    if (!location) {
      return res.status(400).json({ message: "Please put the location " });
    }

    if (!age) {
      return res
        .status(400)
        .json({ message: "Please set the required age period " });
    }

    if (!number_employees) {
      return res
        .status(400)
        .json({ message: "Please put the number of employees  " });
    }

    if (!catID) {
      return res.status(400).json({ message: "Please put the category name " });
    }

    const isCatExist = await Category.findById({ _id: catID });

    if (!isCatExist) {
      return res.status(400).json({ message: "the selected is not find " });
    }

    const job = await Job.create({
      manager_name,
      time,
      salary,
      manager_number,
      location,
      age,
      experience,
      number_employees,
      catID,
    });

    if (!job) {
      return res.status(400).json({
        message: "An error occurred, please try again at another time",
      });
    }

    return res.status(200).json({ message: " jobs successfully" });
  } catch (error) {
    return res.status(500).json({ message: "internal server error" });
  }
};

export const getJobById = async (req, res) => {
  try {
    const { id } = req.Params;

    if (!id) {
      return res.status(400).json({ message: "No selected item" });
    }

    const job = await Job.findById({ _id: id });

    if (!job) {
      return res.status(400).json({ message: "the job not found" });
    }

    return res.status(200).json({ message: "found", job });
  } catch (error) {
    return res.status(500).json({ message: "internal server error" });
  }
};

export const getJobsByCatId = async (req, res) => {
  try {
    const { catId } = req.Params;

    if (!catId) {
      return res.status(400).json({ message: "no selected item" });
    }

    const jobs = await Job.find({ catId: catId });

    if (jobs.length === 0) {
      return res
        .status(200)
        .json({ message: "this category has no jobs yet", jobs: [] });
    }

    return res.status(200).json({ message: "found", jobs });
  } catch (error) {
    return res.status(500).json({ message: "internal server error" });
  }
};

export const getJobsByName = async (req, res) => {
  try {
    const name = req.body.name;

    const jobs = await Job.find({});

    if (!name) {
      return res.status(200).json({ message: "all job fetched", jobs });
    }

    const jobByName = await Job.find({ name: name });

    if (jobByName.length === 0) {
      return res.status(200).json({ message: "check these results", jobs });
    }

    return res.status(200).json({ message: "gets done", jobs: jobByName });
  } catch (error) {
    return res.status(500).json({ message: "internal server error" });
  }
};

export const deleteJobById = async (req, res) => {
  try {
    const { id } = req.params;

    if (!id) {
      return res.status(400).json({ message: "no selected item" });
    }

    const found = await Job.findByIdAndDelete({ _id: id });
    if (!found) {
      return res.status(404).json({ message: "not found" });
    }
    return res.status(200).json({ message: "deleted successfully" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "internal server error" });
  }
};
