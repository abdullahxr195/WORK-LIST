import {
  Box,
  Button,
  Container,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { useUsers } from "../../../../Hooks/useUsers";

export default function ManageUsers() {
  const { fetchAllUsers, users } = useUsers();
  return (
    <>
      <Box sx={{my:3 , mx:2}}>
        <Typography>Manage Users </Typography>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Id</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Role</TableCell>
                <TableCell>Phone Number</TableCell>
                <TableCell>Created At</TableCell>
                <TableCell>Update At</TableCell>
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {users.map((user, idx) => {
                return (
                  <TableRow key={user._id}>
                    <TableCell>{idx + 1}</TableCell>
                    <TableCell>{user.name}</TableCell>
                    <TableCell>{user.email}</TableCell>
                    <TableCell>{user.role}</TableCell>
                    <TableCell>{user.phoneNumber || "No Phone Number"}</TableCell>
                    <TableCell>{new Date(user.createdAt).toLocaleString()}</TableCell>
                    <TableCell>{new Date(user.updatedAt).toLocaleString()}</TableCell>
                    <TableCell>
                      <Button>Edit</Button>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </>
  );
}
