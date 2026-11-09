import {
  AppBar,
  Box,
  MenuItem,
  MenuList,
  Toolbar,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../Hooks/useAuth";
import { useEffect } from "react";
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
export default function Header() {
  const navigate = useNavigate();
  const { currentUser, logout, authMe } = useAuth();
  useEffect(() => {
    authMe();
  }, []);
  return (
    <>
      <AppBar position="sticky" sx={{ bgcolor: "#12346A" }}>
        <Toolbar
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
            p: 2,
          }}
        >
       
          <Typography variant="h4"><BusinessCenterIcon sx={{fontSize:50,mb:-1}}/> WORK LIST</Typography>
          <Box>
            <MenuList
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                gap: 6,
              }}
            >
              <MenuItem sx={{bgcolor:"DarkBlue",borderRadius:1}} onClick={() => navigate("/Job-Page")}>Jobs</MenuItem>
            
                
              
              <MenuItem sx={{bgcolor:"DarkBlue",borderRadius:1}} onClick={() => navigate("/about")}>About</MenuItem>

              {!currentUser || Object.keys(currentUser).length === 0 ? (
                <>
                  <MenuItem sx={{bgcolor:"DarkBlue",borderRadius:1,gap:"20px"}} onClick={() => navigate("/register")}>
                    Register
                  </MenuItem>
                  <MenuItem sx={{bgcolor:"DarkBlue",borderRadius:1}} onClick={() => navigate("/login")}>Login</MenuItem>
                </>
              ) : (
                <>
                  <MenuItem sx={{bgcolor:"DarkBlue",borderRadius:1}} onClick={() => logout()}>Logout</MenuItem>
                </>
              )}
              <AccountCircleIcon sx={{ml:60,fontSize:40, color:"FloralWhite"}} onClick={() => navigate("/profile")}/>
            </MenuList>
            
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
}
