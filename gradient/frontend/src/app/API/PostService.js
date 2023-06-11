import axios from "axios";
import dataJson from "../../global.json";

const host = dataJson.hostTest;

const PostService = {
  getAllActors: async () => {
    const data = await axios.get(`${host}/api/actors/`);
    return data.data;
  },
  getMale: async () => {
    const data = await axios.get(`${host}/api/male`);
    return data.data;
  },
  getFemale: async () => {
    const data = await axios.get(`${host}/api/female`);
    return data.data;
  },
  getById: async (id) => {
    const data = await axios.get(`${host}/api/actors/${id}`);
    console.log(dataJson.host);
    return data.data;
  },
  getImagesZip: async (id, name) => {
    axios({
      url: `${host}/api/actors/${id}/download`, //your url
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
