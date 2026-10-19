import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Divider,
  Grid,
  Typography,
} from "@mui/material";

import Header from "../Layout/Header";
import { useNavigate } from "react-router-dom";
import { useJobs } from "../../Hooks/useJobs";
import DisplayCategories from "../Categories/DisplayCategories";
export default function jobsList() {
  const navigate = useNavigate();
  const { jobs } = useJobs();
  console.log(jobs);
  return (
    <>
    
     
      <Container sx={{ my: 3 }}>
        <Grid container spacing={4}>
          {jobs.map((job) => (
            <Grid sx={{ p: 2, m: 2 }}>
              key = {job._id}
              <Card>
                <CardContent>
                  <Typography>{job. manager_name}</Typography>
                  <Typography>{job.salary}</Typography>
                  <Typography>{job.time}</Typography>
                  <Typography>{job.manager_number}</Typography>
                  <Typography>{job.location}</Typography>
                  <Typography>{job.age}</Typography>
                  <Typography>{job.experience}</Typography>
                  <Typography>{job.number_employees}</Typography>
                  
                  <Divider />
                  <Typography>
                    {job.catId?.name || "no avilable descriprion"}
                  </Typography>
                </CardContent>
                <CardActions
                  onClick={() => handleViewjob(`/job/$(prdId)`)}
                >
            
                </CardActions>
              </Card>
            </Grid>
           
          ))}
          
        </Grid>
      </Container>
    </>
  );
}
