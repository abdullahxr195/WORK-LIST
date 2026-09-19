import { Double } from "bson";
import { types } from "mime-types";
import mongoose from "mongoose";

const jobsSchema = new mongoose.Schema(
  {
    manager_name: {
      type: String,
      required: true,
    },

    time: {
      type: Number,
      required: true,
    },

    salary: {
      type: Number,
    },

    shift: {
      type: String,
      required: true,
    },

    manager_number: {
      type: Number,
      required: true,
    },

    location: {
      type: String,
      required: true,
    },

    age: {
      type: Number,
    },

    experience: {
      type: String,
    },
  },

  { timestamps: true },
);

const Jobs = mongoose.model("Jobs", jobsSchema);
export default Jobs;
