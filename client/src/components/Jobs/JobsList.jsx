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
export default function jobsList() {
  const navigate = useNavigate();
  const { jobs } = useJobs();
  console.log(jobs);
  return (
    <>
      <Header />
      <Typography>Job</Typography>
      <Container sx={{ my: 3 }}>
        <Grid container spacing={4}>
          {jobs.map((job) => (
            <Grid sx={{ p: 2, m: 2 }}>
              key = {job._id}
              <Card>
                <CardMedia
                  component={"img"}
                  src="https://i.pinimg.com/1200x/78/67/3a/78673a9eb989b8782c5e83b707d231f1.jpg"
                />
                <CardContent>
                  <Typography>{job.catId?.name}</Typography>
                  <Typography>${job.price}</Typography>
                  <Typography>{job.stock} left</Typography>
                  <Divider />
                  <Typography>
                    {job.descriprion || "no avilable descriprion"}
                  </Typography>
                </CardContent>
                <CardActions>Buy</CardActions>
                <CardActions
                  onClick={() => handleViewjob(`/job/$(prdId)`)}
                >
                  View
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
}
