import axios from "axios";

export const instance = axios.create({
  baseURL: 'https://api.escuelajs.co/api/v1',
  headers: {
    'Content-Type': 'application/json'
  }
})
