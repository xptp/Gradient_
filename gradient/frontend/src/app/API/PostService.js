import axios from "axios";

const PostService = {
  getAllActors: async () => {
    const data = await axios.get("http://127.0.0.1:8000/api/actors/");
    return data.data;
  },
  getMale: async () => {
    const data = await axios.get("http://127.0.0.1:8000/api/male");
    return data.data;
  },
  getFemale: async () => {
    const data = await axios.get("http://127.0.0.1:8000/api/female");
    return data.data;
  },
  getById: async (id) => {
    const data = await axios.get(`http://127.0.0.1:8000/api/actors/${id}`);
    return data.data;
  },
};

export default PostService;
