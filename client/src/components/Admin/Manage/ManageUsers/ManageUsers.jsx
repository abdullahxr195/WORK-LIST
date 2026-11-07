import {
  Box,
  Button,
  Container,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography,
} from "@mui/material";
import { useUsers } from "../../../../Hooks/useUsers";
import { useEffect, useState } from "react";
import ConfirmModal from "../../confirm/ConfirmModal";

export default function ManageUsers() {
  const { fetchAllUsers, users, deletUserById, updateUsers } = useUsers();

  useEffect(() => {
    fetchAllUsers();
  }, []);
  /////////////////////////////////////////////////////////////////////////
  const [openModal, setOpenModal] = useState(false);
  /////////////////////////////////////////////////////////////////////////
  const [selectedIdtoDelete, setSelectedIdtoDelete] = useState(null);
  /////////////////////////////////////////////////////////////////////////
  const handleClose = () => {
    setOpenModal(!openModal);
    setSelectedIdtoDelete(null);
  };
  /////////////////////////////////////////////////////////////////////////
  const [selectedIdtoUpdate, setSelectedIdtoUpdate] = useState(null);
  /////////////////////////////////////////////////////////////////////////
  const handleConfiem = () => {
    deletUserById(selectedIdtoDelete);
    setOpenModal(false);
  };
  /////////////////////////////////////////////////////////////////////////
  const [newData, setNewData] = useState({
    name: "",
    email:"",
    role:"",
  });
  /////////////////////////////////////////////////////////////////////////
  const hanleSaveEdits = () => {
    updateUsers(selectedIdtoUpdate, newData);
    setSelectedIdtoUpdate(null);
  };
  /////////////////////////////////////////////////////////////////////////
  return (
    <>
      <Box sx={{ my: 3, mx: 2 , flexDirection: "row"}}>
        <Typography>Manage Users </Typography>
        <TableContainer component={Paper}>
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
                const selctedUse = user._id == selectedIdtoUpdate;
                return (
                  <TableRow key={user._id}>
                    <TableCell>{idx + 1}</TableCell>
                    <TableCell>
                      {selctedUse ? (
                        <TextField
                          label="Name"
                          value={newData.name}
                          onChange={(e) =>
                            setNewData({ ...newData, name: e.target.value })
                          }
                        />
                      ) : (
                        user.name
                      )}
                    </TableCell>
                     <TableCell>
                      {selctedUse ? (
                        <TextField
                          label="email"
                          value={newData.email}
                          onChange={(e) =>
                            setNewData({ ...newData, email: e.target.value })
                          }
                        />
                      ) : (
                        user.email
                      )}
                      </TableCell>
                    <TableCell>
                      {selctedUse ? (
                        <TextField
                          label="role"
                          value={newData.role}
                          onChange={(e) =>
                            setNewData({ ...newData, role: e.target.value })
                          }
                        />
                      ) : (
                        user.role
                      )}
                      </TableCell>
                    <TableCell>
                      {user.phoneNumber || "No Phone Number"}
                    </TableCell>
                    <TableCell>
                      {new Date(user.createdAt).toLocaleString()}
                    </TableCell>
                    <TableCell>
                      {new Date(user.updatedAt).toLocaleString()}
                    </TableCell>
                    <TableCell>
                      {selctedUse ? (
                        <>
                          <Button onClick={() => hanleSaveEdits()}>Save</Button>
                          <Button onClick={() => setSelectedIdtoUpdate(null)}>
                            Cancel
                          </Button>
                        </>
                      ) : (
                        <Button onClick={() => setSelectedIdtoUpdate(user._id)}>
                          Edit
                        </Button>
                      )}
                      <Button
                        onClick={() => (
                          setOpenModal(!openModal),
                          deletUserById(user._id)
                        )}
                      >
                        Delete
                      </Button>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>

      <ConfirmModal
        open={openModal}
        onclose={handleClose}
        onconfirm={handleConfiem}
      />
    </>
  );
}
