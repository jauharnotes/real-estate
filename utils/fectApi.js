import axios from "axios";

export const baseUrl = "https://bayut.p.rapidapi.com";

export const fetchApi = async (url) => {
  const { data } = await axios.get(url, {
    headers: {
      "x-rapidapi-host": "bayut.p.rapidapi.com",
      "x-rapidapi-key": "488cc0d04amshcc13a1d9f19dbd7p19fd89jsnee17b007d40d",
    },
  });

  return data;
};
