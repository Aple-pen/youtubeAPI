import axios from "axios";

class Youtube {
  constructor(key) {
    this.key = key;
    this.youtube = axios.create({
      baseURL: "https://www.googleapis.com/youtube/v3",
      params: { key: key },
    });
  }
  async mostPopular() {
    const response = await this.youtube.get("videos", {
      params: {
        part: "snippet",
        chart: "mostPopular",
        maxResults: 25,
      },
    });
    return response.data.items;

  }

  async search(query) {
    const response = await this.youtube.get("search", {
      params: {
        part: "snippet",
        maxResult: 25,
        q: `${query}`,
      },
    });
    return response.data.items;

  }
}

export default Youtube;
