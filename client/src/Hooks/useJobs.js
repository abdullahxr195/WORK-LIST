import toast from "react-hot-toast";
import { useEffect, useState } from "react";

export const useJobs = () => {
  const [jobs, setJobs] = useState({});

  const fetchAllJobs = async () => {
    try {
      const res = await api.get("/all_jobs");
      console.log("response:", res);
      setJobs();
    } catch (error) {
      toast.error("some thing wrong !");
      console.log(error);
      return;
    }
  };

  useEffect(() => {
    fetchAllJobs();
  }, []);

  return { jobs, fetchAllJobs };
};
