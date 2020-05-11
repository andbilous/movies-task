import axios from "axios";

import { BASE_URL } from "./config";

const moviesAPI = {
  getMovies: async () => {
    return await axios
      .get(`${BASE_URL}/movies`, {})
      .then(function(response) {
        console.log(response)
        return response;
      })
      .catch(function(error) {
        console.log(error);
      });
  }
};

export default moviesAPI;
