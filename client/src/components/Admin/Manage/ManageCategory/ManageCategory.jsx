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
import AddCategory from "./AddCategory";

export default function ManageCategory() {
   const { categories } = useCategories();
   console.log(categories)
  return (
    <>
      <Box sx={{my:3 , mx:2}}>
        <Box sx={{display:"flex" ,flexDirection:"row" , justifyContent:"space-around",my:4}}>
          <Typography>Manage Category </Typography>
          {/* <Button>Add Category</Button> */}
          <AddCategory/>
        </Box>

        <Divider sx={{ textAlign: "center", width: "60%" }} />
        <TableContainer>
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
                return (
                  <TableRow key={cat._id}>
                    <TableCell>{idx + 1}</TableCell>
                    <TableCell>{cat.name}</TableCell>
                   
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
