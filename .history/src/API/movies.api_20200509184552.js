const airplanesAPI = {
  getAirplanes:  async () => {
      const token = localStorage.getItem('token');

      return  await axios.get(`${BASE_URL}/airplane`,
          {
              headers: {
                  "Authorization" : `Bearer ${token}`,
              } })
          .then(function (response) {

              return response.data;
          })
          .catch(function (error) {
              console.log(error);
          });
  }}