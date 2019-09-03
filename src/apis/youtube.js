import axios from "axios";

const KEY = "AIzaSyBBSOlNJVX7muqbDkKMT0ZDM8YvtxggJUE";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY
  }
});
