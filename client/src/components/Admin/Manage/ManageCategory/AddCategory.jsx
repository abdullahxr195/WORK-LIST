import {
  Box,
  Button,
  Divider,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { useCategories } from "../../../../Hooks/useCategories";
import { useState } from "react";

export default function AddCategory() {
  const { categories ,createCategory } = useCategories();

  const [openForm, setOpenForm] = useState(false);
  const [categoryData, setCategoryData] = useState({
    name: "",
    descriprion: "",
  });

  const handleAddJob = () => {
    createCategory(categoryData);
    setOpenForm(false);
  };
  return (
    <>
      <Box>
        <Box>
          <Button onClick={() => setOpenForm(!openForm)}>
            {openForm ? "Cancel" : "Add Category"}
          </Button>
        </Box>

        <Divider sx={{ textAlign: "center", width: "60%" }} />

        {openForm && (
          <Box>
            <Paper>
              <Typography>Add category form</Typography>
              <TextField
                label="name"
                value={categoryData.name}
                onChange={(e) =>
                  setCategoryData({
                    ...categoryData,
                    name: e.target.value,
                  })
                }
              />
              <TextField
                label="descriprion"
                value={categoryData.descriprion}
                onChange={(e) =>
                  setCategoryData({ ...categoryData, descriprion: e.target.value })
                }
              />

              {/* <FormControl>
                <InputLabel id="category">category</InputLabel>
                <Select
                  labelId="category"
                  value={categoryData.catId}
                  onChange={(e) =>
                    setCategoryData({ ...categoryData, catId: e.target.value })
                  }
                >
                  {categories.map((cat) => (
                    <MenuItem value={cat._id}>{cat.name}</MenuItem>
                  ))}
                </Select>
              </FormControl> */}

              <Button onClick={() => handleAddJob()}>Add</Button>
            </Paper>
          </Box>
        )}
      </Box>
    </>
  );
}
