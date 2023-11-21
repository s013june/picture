import axios from "axios";

const searchImages = async (term) => {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    headers: {
      Authorization: "Client-ID HXlAdBNcr4wDry5s-K4Yl1pnaFqUQBip1trJwXXYQaw",
    },
    params: {
      query: term,
    },
  });

  return response.data.results;
};

export default searchImages;
