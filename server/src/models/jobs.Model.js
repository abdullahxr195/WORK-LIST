import mongoose from "mongoose";

const jobsSchema = new mongoose.Schema(
  {
    manager_name: {
      type: String,
      required: true,
    },

    time: {
      type: String,
      required: true,
    },

    salary: {
      type: Number,
    },

    manager_number: {
      type: String,
      required: true,
    },

    location: {
      type: String,
      required: true,
    },

    age: {
      type: String,
    },

    experience: {
      type: String,
    },

    number_employees: {
      type: Number,
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

const Job = mongoose.model("Jobs", jobsSchema);
export default Job;
