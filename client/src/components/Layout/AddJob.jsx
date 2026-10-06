import { useState } from "react";
import { useJobs } from "../../Hooks/useJobs";
import {
  Box,
  Button,
  Divider,
  Paper,
  TextField,
  Typography,
} from "@mui/material";

export default function AddJob() {
  const { jobs, createJob } = useJobs();
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
    setOpenForm(false)
  };
  return (
    <>
      <Box>
        <Box>
          <Button onClick={() => setOpenForm(!openForm)}>
            {openForm ? "Cancel" : "Add Job"}
          </Button>
        </Box>

        <Divider sx={{ textAlign: "center", width: "60%" }} />

        {openForm && (
          <Box>
            <Paper>
              <Typography>Add jobs form</Typography>
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
              <TextField
                label="catId"
                value={jobData.catId}
                onChange={(e) =>
                  setJobData({ ...jobData, catId: e.target.value })
                }
              />



              <Button onClick={() => handleAddJob()}>Add</Button>
            </Paper>
          </Box>
        )}
      </Box>
    </>
  );
}
