import { useState } from "react";
import { useJobs } from "../../Hooks/useJobs";
import { useCategories } from "../../Hooks/useCategories";

import {
  Box,
  Button,
  Divider,
  FormControl,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  TextField,
  Typography,
} from "@mui/material";

export default function AddJob() {
  const { jobs, createJob } = useJobs();
  const { categories } = useCategories();
  const [openForm, setOpenForm] = useState(false);
  const [jobData, setJobData] = useState({
    manager_name: "",
    time: "",
    salary: "",
    manager_number: "",
    location: "",
    age: "",
    experience: "",
    number_employees: "",
    catId: "",
  });

  const handleAddJob = () => {
    createJob(jobData);
    setOpenForm(false);
    console.log(jobData);
  };

  return (
    <>
      <Box>
        <Box>
          <Divider sx={{ textAlign: "center", width: "100%" }}>
            <Typography
              variant="h3"
              sx={{ textAlign: "center", p: 5, color: "black" }}
            >
              Find Your Next Opportunity
            </Typography>
          </Divider>

          <Button
            sx={{ bgcolor: "DarkBlue", color: "White" }}
            onClick={() => setOpenForm(!openForm)}
          >
            {openForm ? "Cancel" : "+ Add Job"}
          </Button>
        </Box>

        {openForm && (
          <Box>
            <Paper sx={{ bgcolor: "AliceBlue", p: 4, display: "flex" }}>
              <TextField
                label="manager_name"
                value={jobData.manager_name}
                onChange={(e) =>
                  setJobData({ ...jobData, manager_name: e.target.value })
                }
              />
              <TextField
                label="time"
                value={jobData.time}
                onChange={(e) =>
                  setJobData({ ...jobData, time: e.target.value })
                }
              />
              <TextField
                label="salary"
                value={jobData.salary}
                onChange={(e) =>
                  setJobData({ ...jobData, salary: e.target.value })
                }
              />
              <TextField
                label="manager_number"
                value={jobData.manager_number}
                onChange={(e) =>
                  setJobData({ ...jobData, manager_number: e.target.value })
                }
              />
              <TextField
                label="location"
                value={jobData.location}
                onChange={(e) =>
                  setJobData({ ...jobData, location: e.target.value })
                }
              />
              <TextField
                label="age"
                value={jobData.age}
                onChange={(e) =>
                  setJobData({ ...jobData, age: e.target.value })
                }
              />
              <TextField
                label="experience"
                value={jobData.experience}
                onChange={(e) =>
                  setJobData({ ...jobData, experience: e.target.value })
                }
              />
              <TextField
                label="number_employees"
                value={jobData.number_employees}
                onChange={(e) =>
                  setJobData({ ...jobData, number_employees: e.target.value })
                }
              />

              <FormControl>
                <InputLabel id="category">category</InputLabel>
                <Select
                  labelId="category"
                  value={jobData.catId}
                  onChange={(e) =>
                    setJobData({ ...jobData, catId: e.target.value })
                  }
                >
                  {categories.map((cat) => (
                    <MenuItem value={cat._id}>{cat.name}</MenuItem>
                  ))}
                </Select>
              </FormControl>

              <Button onClick={() => handleAddJob()}>Add</Button>
            </Paper>
          </Box>
        )}
      </Box>
    </>
  );
}
