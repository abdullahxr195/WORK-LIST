import { Box, Typography } from "@mui/material";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";
import Header from "../../Layout/Header";

export default function AdminLayout() {
  return <>
  
  <Box sx={{ display: "flex", flexDirection: "row",gap:3,justifyContent:"space-between" }}>
        <Box sx={{ flex: "1" }}>
          <Sidebar />
        </Box>

          
        <Box sx={{ flex: "6" }}>
          <Header/>
            <Outlet/>
       
        </Box>
      </Box>
  
  
  
  
  
  </>;
}
