import {
  Box,
  Button,
  Divider,
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
import { useCategories } from "../../../../Hooks/useCategories";
import AddCategory from "./AddCategory";
import { useState } from "react";
import ConfirmModal from "../../confirm/ConfirmModal";

export default function ManageCategory() {
  /////////////////////////////////////////////////////////////////////////
  const { categories, deletCategoryById } = useCategories();
  console.log(categories);
  //////////////////////////////////////////////////////////////////////////
  const [openModal, setOpenModal] = useState(false);
  /////////////////////////////////////////////////////////////////////////
  const [selectedIdtoDelete, setSelectedIdtoDelete] = useState(null);
  ////////////////////////////////////////////////////////////////////////
  const [selectedIdtoUpdate, setSelectedIdtoUpdate] = useState(null);
  /////////////////////////////////////////////////////////////////////////
  const handleClose = () => {
    setOpenModal(!openModal);
    setSelectedIdtoDelete(null);
  };
  /////////////////////////////////////////////////////////////////////////
  const handleConfiem = () => {
    deletCategoryById(selectedIdtoDelete);
    setOpenModal(false);
  };
  /////////////////////////////////////////////////////////////////////////
  const hanleSaveEdits = ({ name }) => {};
  /////////////////////////////////////////////////////////////////////////
  return (
    <>
      <Box sx={{ my: 3, mx: 2 }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
            my: 4,
          }}
        >
          <Typography>Manage Category </Typography>
          {/* <Button>Add Category</Button> */}
          <AddCategory />
        </Box>

        <Divider sx={{ textAlign: "center", width: "60%" }} />
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Id</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Created At</TableCell>
                <TableCell>Update At</TableCell>
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {categories.map((cat, idx) => {
                const selctedCat = cat._id == selectedIdtoUpdate;
                return (
                  <TableRow key={cat._id}>
                    <TableCell>{idx + 1}</TableCell>

                    <TableCell>
                      {selctedCat ? (
                        <TextField label="Name" value={cat.name} />
                      ) : (
                        cat.name
                      )}
                    </TableCell>

                    <TableCell>
                      {new Date(cat.createdAt).toLocaleDateString}
                    </TableCell>
                    <TableCell>
                      {new Date(cat.updatedAt).toLocaleDateString}
                    </TableCell>
                    <TableCell>
                      {selctedCat ? (
                        <>
                          <Button onClick={() => hanleSaveEdits()}>Save</Button>
                          <Button onClick={() => setSelectedIdtoUpdate(null)}>
                            Cancel
                          </Button>
                        </>
                      ) : (
                        <Button onClick={() => setSelectedIdtoUpdate(cat._id)}>
                          Edit
                        </Button>
                      )}
                      <Button
                        onClick={() => (
                          setOpenModal(!openModal),
                          setSelectedIdtoDelete(cat._id)
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
