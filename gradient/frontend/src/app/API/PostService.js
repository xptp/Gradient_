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
  getImagesZip: async (id, name) => {
    axios({
      url: `http://127.0.0.1:8000/api/actors/${id}/download`, //your url
      method: "GET",
      responseType: "blob", // important
    }).then((response) => {
      // create file link in browser's memory
      const href = URL.createObjectURL(response.data);
      // create "a" HTML element with href to file & click
      const link = document.createElement("a");
      link.href = href;
      link.setAttribute("download", `${name}.zip`); //or any other extension
      document.body.appendChild(link);
      link.click();

      // clean up "a" element & remove ObjectURL
      document.body.removeChild(link);
      URL.revokeObjectURL(href);
    });
    // return data.data;
  },
};

export default PostService;
