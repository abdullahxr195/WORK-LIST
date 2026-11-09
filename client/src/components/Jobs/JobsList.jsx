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
import GroupsIcon from '@mui/icons-material/Groups';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import CallIcon from '@mui/icons-material/Call';
import AccessTimeTwoToneIcon from '@mui/icons-material/AccessTimeTwoTone';
import FmdGoodTwoToneIcon from '@mui/icons-material/FmdGoodTwoTone';
import AccessibilityNewIcon from '@mui/icons-material/AccessibilityNew';
import StarIcon from '@mui/icons-material/Star';
import PersonIcon from '@mui/icons-material/Person';
import CategoryIcon from '@mui/icons-material/Category';
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
                  <Typography sx={{display:"flex" ,mb:3 ,borderRadius:2}} variant="h5"><PersonIcon sx={{fontSize:35,color:"DarkBlue"}}/>Manager Name: {job.manager_name}</Typography>
                   <Divider />
                  <Typography sx={{display:"flex",}} variant="h5"><MonetizationOnIcon sx={{fontSize:35,color:"DarkBlue"}}/>Salary:{job.salary}</Typography>
                  <Typography sx={{display:"flex" , marginLeft:53}} variant="h5"><AccessTimeTwoToneIcon sx={{fontSize:35,color:"DarkBlue"}}/>Time:{job.time}</Typography>
                  <Typography sx={{display:"flex"}} variant="h5"><CallIcon sx={{fontSize:35,color:"DarkBlue"}}/>Manager Number:{job.manager_number}</Typography>
                  <Typography sx={{display:"flex", marginLeft:53}} variant="h5"><FmdGoodTwoToneIcon sx={{fontSize:35,color:"DarkBlue"}}/>Location:{job.location}</Typography>
                  <Typography sx={{display:"flex"}} variant="h5"><AccessibilityNewIcon sx={{fontSize:35,color:"DarkBlue"}}/>Age:{job.age}</Typography>
                  <Typography sx={{display:"flex", marginLeft:53}} variant="h5"><StarIcon sx={{fontSize:35,color:"DarkBlue"}}/>Experience:{job.experience}</Typography>
                  <Typography sx={{display:"flex"}} variant="h5">
                   <GroupsIcon  sx={{fontSize:35,color:"DarkBlue"}}/> Number Employees:{job.number_employees}
                  </Typography>

                  <Divider />
                  <Typography  variant="h4"><CategoryIcon sx={{fontSize:35,color:"DarkBlue"}}/>Category:{job.catId?.name}</Typography>
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
