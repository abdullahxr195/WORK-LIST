import {
  Box,
  Button,
  Divider,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { useCategories } from "../../../../Hooks/useCategories";

export default function ManageCategory() {
   const { categories } = useCategories();
  return (
    <>
      <Box>
        <Box>
          <Typography>Manage Category </Typography>
          <Button>Add Category</Button>
        </Box>

        <Divider sx={{ textAlign: "center", width: "60%" }} />
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Id</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Description</TableCell>
                <TableCell>Created At</TableCell>
                <TableCell>Update At</TableCell>
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {categories.map((cat, idx) => {
                return (
                  <TableRow key={cat._id}>
                    <TableCell>{cat.name}</TableCell>
                    <TableCell>{cat.descriprion}</TableCell>
                    <TableCell>
                      {new Date(cat.createdAt).toLocaleDateString}
                    </TableCell>
                    <TableCell>
                      {new Date(cat.updatedAt).toLocaleDateString}
                    </TableCell>
                    <TableCell>
                      <Button>Edit</Button>
                      <Button>Delete</Button>
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
