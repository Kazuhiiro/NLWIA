import axios from "axios"

export const server = axios.create({
    //Setar a URL do servidor
    baseURL: "https://localhost:3333",
})