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

    number_employees: {
      types: Number,
      required: true,
    },

    catID: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
      required: true,
    },
  },

  { timestamps: true },
);

const Job = await mongoose.model("Jobs", jobsSchema);
export default Job;
