import { Box, List, ListItemButton } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../Hooks/useAuth";
import HomeSharpIcon from '@mui/icons-material/HomeSharp';
import LogoutIcon from "@mui/icons-material/Logout";
import CategoryIcon from '@mui/icons-material/Category';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import InfoIcon from '@mui/icons-material/Info';

export default function Sidebar() {
  const navigate = useNavigate();
  const { logout } = useAuth();
  return (
    <>
      <Box
        sx={{
          height: "100vh",
          width: "250px",
          bgcolor: "#00263A",
          display: "flex",
          flexDirection: "row",
          position: "fixed",
        }}
      >
        <List>
          <ListItemButton onClick={() => navigate("/admin/dashbord")}>
            <HomeSharpIcon />
            Dashbaord
          </ListItemButton>
          <ListItemButton onClick={() => navigate("manage/users")}>
            <ManageAccountsIcon/>Manage User
          </ListItemButton>
          <ListItemButton onClick={() => navigate("manage/category")}>
          <CategoryIcon/>  Manage Categories
          </ListItemButton>

          {/* <ListItemButton onClick={() => navigate("/profile")}>
          <AccountCircleIcon/>  Profile
          </ListItemButton> */}


          <ListItemButton onClick={() => navigate("/about")}>
          <InfoIcon/>  About
          </ListItemButton>


          <ListItemButton onClick={() => logout()}>
            {" "}
            <LogoutIcon /> Logout
          </ListItemButton>
        </List>
      </Box>
    </>
  );
}
