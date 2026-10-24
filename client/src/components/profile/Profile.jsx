import { useEffect } from "react";
import {useAuth} from "../../Hooks/useAuth"
import { Box, Button, Container, Paper, Typography } from "@mui/material";

export default function profile() {
  const { currentUser, authMe } = useAuth();
 
  useEffect(() => {
    authMe();
  }, []);

  return (
    <>
      <Container sx={{my:3}}>
        <Typography variant="h3">Profile</Typography>
        <Box>
          <Paper elevation={4} sx={{my:3 , p:4, textAlign:"center"}}>
            <Typography>NAME:{currentUser?.name}</Typography>
            <Typography>EMAIL:{currentUser?.email}</Typography>
            <Typography>ROLE:{currentUser?.role}</Typography>
            <Button variant="contained">Edit</Button>
          </Paper>
        </Box>
      </Container>
    </>
  );
}
