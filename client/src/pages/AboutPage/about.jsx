import { Box, Typography } from "@mui/material";
import Header from "../../components/Layout/Header";

export default function AboutPage() {
  return (
    <>
      <Box>
        <Header />
      
      <Typography variant="h4"sx={{ color:"MidnightBlue" , padding:15}}>
        Work List is a website designed to help reduce unemployment by
        connecting job seekers with companies and employers offering job
        opportunities. It allows users to search for jobs that match their
        skills, qualifications, and interests, and apply for them easily. It
        also helps employers find suitable candidates for their job vacancies.
        Website Vision: To create job opportunities for everyone, reduce
        unemployment, and build a strong connection between job seekers and the
        job market.
      </Typography>
      </Box>
    </>
  );
}
