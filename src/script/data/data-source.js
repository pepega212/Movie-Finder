import axios from "axios";

const apiKey = process.env.APIKEY;
const baseUrl = process.env.BASEURL;

class DataSource {
  static async movieList(page = 1) {
    try {
      const response = await axios.get(`${baseUrl}/discover/movie?page=${page}&api_key=${apiKey}`);

      if (response.data.results) {
        return Promise.resolve(response.data.results);
      } else {
        return Promise.reject(`movie not found`);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      return Promise.reject("Failed to fetch data");
    }
  }

  static async searchMovie(q, page = 1) {
    try {
      const response = await axios.get(`${baseUrl}/search/movie?query=${q}&page=${page}&api_key=${apiKey}`);

      if (response.data.results) {
        return Promise.resolve(response.data.results);
      } else {
        return Promise.reject(`${q} is not found`);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      return Promise.reject("Failed to fetch data");
    }
  }
}

export default DataSource;