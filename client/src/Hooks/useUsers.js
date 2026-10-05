import { useState } from "react"
import toast from "react-hot-toast"
import { api } from "../api"


export const useUsers = () => {

const [users , setUsers] = useState([])

const fetchAllUsers = async () => {

    try {
        const res = await api.get("/users")
    } catch (error) {
        toast.error(error?.response?.data?.message || " some thing went wrong")
        return;
    }

}


return{fetchAllUsers , users}

}







