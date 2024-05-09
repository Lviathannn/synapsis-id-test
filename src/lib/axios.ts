import axios from "axios";

export default axios.create({
  baseURL: "https://gorest.co.in/public/v2",
  headers: {
    Accept: "application/json",
    Authorization: `Bearer ${process.env.NEXT_PUBLIC_ACCESS_TOKEN}`,
    "Content-Type": "application/json",
  },
});
