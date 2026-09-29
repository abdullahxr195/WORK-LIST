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
import Header from "../Layout/Header";
import { useJobs } from "../../Hooks/useJobs";

export default function ViewJob() {
  const { jobId } = useParams();

  const { job, fetchJobById } = useJobs();
  useEffect(() => {
    fetchJobById(jobId);
  }, [jobId]);
  console.log(job);
  return (
    <>
    <Header/>
      <Card>
        <CardMedia
          component={"img"}
          src="https://i.pinimg.com/736x/e0/3d/e3/e03de3eb9e6b8e6ead7f307afad4f00e.jpg"
        ></CardMedia>

        <CardContent>
          <Typography>{job.manager_name}</Typography>
          <Typography>{job.catId?.time}</Typography>
          <Typography>{job.catId?.salary}</Typography>
          <Typography>${job.location}</Typography>
          <Typography>{job.manager_number} </Typography>
          <Typography>{job.age} </Typography>
          <Typography>{job.experience} </Typography>
          <Typography>{job.number_employees} </Typography>
          <Divider />
        </CardContent>

        <CardActions>
          <Button>View</Button>
        </CardActions>
      </Card>
    </>
  );
}
