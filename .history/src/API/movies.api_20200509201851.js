import axios from "axios";

import { BASE_URL } from "./config";

const moviesAPI = {
  getMovies: async () => {
    return await axios
      .get(`${BASE_URL}/movies`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      .then(function(response) {
        return response.data;
      })
      .catch(function(error) {
        console.log(error);
      });
  }
};

export default moviesAPI;
