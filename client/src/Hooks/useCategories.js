import { useEffect } from "react";
import { useState } from "react";
import { api } from "../api";
import toast from "react-hot-toast";

export const useCategories = () => {
  const [categories, setCategories] = useState([]);

  const fetchAllCategories = async () => {
    try {
      const res = await api.get("/all_categories");
      console.log(res);
      setCategories(res.data.categories);
    } catch (error) {
      toast.error(error.response.data.message || "something went wrong");
    }
  };

  const createCategory = async (categoryData) => {
    try {
      const res = await api.post("/create-category", categoryData);
      toast.success("job added successfully");
      fetchAllCategories();
    } catch (error) {
      toast.error(error?.response?.data?.message || "something went wrong");
    }
  };



  const deletCategoryById = async (id) => {
    try {
      const res = await api.delete(`/category/${id}`);
      toast.success(res.data.message);
      fetchAllCategories();
    } catch (error) {
      toast.error(error?.response?.data?.message || " some thing went wrong");
      return;
    }
  };




  useEffect(() => {
    fetchAllCategories();
  }, []);
  return { categories, createCategory ,deletCategoryById};
};
