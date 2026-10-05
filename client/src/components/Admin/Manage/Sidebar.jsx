import { Box, List, ListItemButton } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../Hooks/useAuth";

export default function Sidebar() {
  const navigate = useNavigate();
  const { logout } = useAuth();
  return (
    <>
      <Box sx={{ minHeight: "100vh", width: "250px", bgcolor: "red" }}>
        <List>
          <ListItemButton onClick={() => navigate("/admin")}>
            Dashbaord
          </ListItemButton>
          <ListItemButton onClick={() => navigate("manage/users")}>
            Manage User
          </ListItemButton>
          <ListItemButton>Manage Products</ListItemButton>
          <ListItemButton>Manage Categories</ListItemButton>
          <ListItemButton>Manage Message</ListItemButton>
          <ListItemButton>Manage Profile</ListItemButton>
          <ListItemButton onClick={() => logout()}>Logout</ListItemButton>
        </List>
      </Box>
    </>
  );
}
