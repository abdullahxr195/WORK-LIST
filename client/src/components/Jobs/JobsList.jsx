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
      <Container sx={{ my: 3  ,width:"50%",}}>
        <Grid>
          {jobs.map((job) => (
            <Grid >
              <Card
                sx={{
                 
                 maxHeight:700,
                 maxWidth:800,
                  borderRadius: 3,
                  boxShadow: 3,
                  padding: 2,
                  margin: 2,
                  marginTop:15
                }}
              >
                <CardContent >
                  <Typography sx={{display:"flex" ,mb:3,bgcolor:"LimeGreen" ,borderRadius:2}} variant="h5">Manager Name: {job.manager_name}</Typography>
                   <Divider />
                  <Typography sx={{display:"flex",}} variant="h5">Salary:{job.salary}</Typography>
                  <Typography sx={{display:"flex" , marginLeft:53}} variant="h5">Time:{job.time}</Typography>
                  <Typography sx={{display:"flex"}} variant="h5">Manager Number:{job.manager_number}</Typography>
                  <Typography sx={{display:"flex", marginLeft:53}} variant="h5">Location:{job.location}</Typography>
                  <Typography sx={{display:"flex"}} variant="h5">Age:{job.age}</Typography>
                  <Typography sx={{display:"flex", marginLeft:53}} variant="h5">Experience:{job.experience}</Typography>
                  <Typography sx={{display:"flex"}} variant="h5">
                    Number Employees:{job.number_employees}
                  </Typography>

                  <Divider />
                  <Typography  variant="h4">Category:{job.catId?.name}</Typography>
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
