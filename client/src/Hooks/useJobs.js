import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { api } from "../api.js";

export const useJobs = () => {
  const [jobs, setjobs] = useState([]);
  const [job, setjob] = useState({});
  const fetchAlljobs = async () => {
    try {
      const res = await api.get("/all_jobs");

      setjobs(res.data.jobs);
    } catch (error) {
      toast.error(error?.response?.data?.message || "something went wrong");

      return;
    }
  };

  const fetchjobById = async (jobId) => {
    try {
      const res = await api.get(`/job/${jobId}`);
      setjob(res.data.job);
      toast.success("res.data.message");
    } catch (error) {
      toast.error(error?.response?.data?.message || "something went wrong");

      return;
    }
  };

  const createJob = async (jobData) => {
    try {
         const res = await api.post ("/create_Job"  , jobData)
          toast.success("job added successfully")
          fetchAlljobs();
    } catch (error) {
      toast.error(error?.response?.data?.message || "something went wrong");
    }
  };

  useEffect(() => {
    fetchAlljobs();
  }, []);

  return { jobs, job, fetchjobById ,createJob};
};
