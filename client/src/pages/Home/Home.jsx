import { Box, Container, Typography } from "@mui/material";
import Header from "../../components/Layout/Header";

import { useEffect } from "react";
import { useAuth } from "../../Hooks/useAuth";
import Sidebar from "../../components/Admin/Manage/Sidebar";
import { Outlet } from "react-router-dom";

export default function () {
  const { currentUser, authMe } = useAuth();

  useEffect(() => {
    authMe();
  }, []);
  console.log(currentUser);
  return (
    <>
      <Header />
      <Box sx={{ display: "flex", flexDirection: "row" }}>
        <Box sx={{ flex: "1" }}>
          <Sidebar />
        </Box>

        <Box sx={{ flex: "4" }}>
            <Outlet/>
         
        </Box>
      </Box>
  
  
    </>
  );
}
