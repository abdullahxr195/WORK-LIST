import { useParams } from "react-router-dom";

import { useEffect } from "react";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Divider,
  Typography,
} from "@mui/material";
import ViewList from "../Jobs/JobsList.jsx"
import Header from "../Layout/Header.jsx";
import { useJobs } from "../../Hooks/useJobs.js";

export default function ViewJob() {
  const { jobId } = useParams();

  const { job, fetchjobById } = useJobs();
  useEffect(() => {
    fetchjobById(jobId);
  }, [jobId]);
  console.log(job);
  return (
    <>
    <Header/>
      <Card>
        
        <CardMedia
          component={"img"}
          src=""
        ></CardMedia>

        <CardContent>
          <Typography>{job.manager_name}</Typography>
          <Typography>{job.catId?.time}</Typography>
          <Typography>{job.catId?.salary}</Typography>
          <Typography>{job.location}</Typography>
          <Typography>{job.manager_number} </Typography>
          <Typography>{job.age} </Typography>
          <Typography>{job.experience} </Typography>
          <Typography>{job.number_employees} </Typography>
          
          <Divider />
           <ViewList/>
        </CardContent>

      </Card>
      
    </>
  );
}
