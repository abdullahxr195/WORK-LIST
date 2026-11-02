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
      <Container sx={{ my: 3  ,width:"50%",gap:77}}>
        <Grid>
          {jobs.map((job) => (
            <Grid >
              <Card
                sx={{
                 
                  height:370,
                  borderRadius: 3,
                  boxShadow: 3,
                  padding: 2,
                  margin: 2,
                  
                }}
              >
                <CardContent>
                  <Typography variant="h5">Manager Name: {job.manager_name}</Typography>
                  <Typography variant="h5">Salary:{job.salary}</Typography>
                  <Typography variant="h5">Time:{job.time}</Typography>
                  <Typography variant="h5">Manager Number:{job.manager_number}</Typography>
                  <Typography variant="h5">Location:{job.location}</Typography>
                  <Typography variant="h5">Age:{job.age}</Typography>
                  <Typography variant="h5">Experience:{job.experience}</Typography>
                  <Typography variant="h5">
                    Number Employees:{job.number_employees}
                  </Typography>

                  <Divider />
                  <Typography  variant="h4" sx={{m:2}}>Category:{job.catId?.name}</Typography>
                </CardContent>
                <CardActions
                  onClick={() => handleViewjob(`/job/$(prdId)`)}
                ></CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
}
