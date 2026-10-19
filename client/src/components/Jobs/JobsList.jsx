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
    
     
      <Container sx={{ my: 3 }}>
        <Grid container spacing={4}>
          {jobs.map((job) => (
            <Grid sx={{ p: 2, m: 2 }}>
              key = {job._id}
              <Card>
                <CardContent>
                  <Typography>{job.name}</Typography>
                  <Typography>${job.descriprion}</Typography>
                  <Divider />
                  <Typography>
                    {job.descriprion || "no avilable descriprion"}
                  </Typography>
                </CardContent>
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
