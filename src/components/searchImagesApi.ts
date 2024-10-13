import axios from "axios";
import { Image } from "./App/App.types";

const accessKey = "LvonyJIUqq_C4DM92O1-SXSOzMcmquVzGSZR1JHVNp8";

interface UnsplashApiResponse {
  results: Image[];
  total_pages: number;
}

interface SearchImagesResponse {
  images: Image[];
  totalPages: number;
}

export default async function searchPhotos(
  topic: string,
  page: number
): Promise<SearchImagesResponse> {
  const response = await axios.get<UnsplashApiResponse>(
    "https://api.unsplash.com/search/photos",
    {
      headers: {
        Authorization: `Client-ID ${accessKey}`,
      },
      params: {
        query: topic,
        page,
        per_page: 12,
      },
    }
  );
  return {
    images: response.data.results,
    totalPages: response.data.total_pages,
  };
}
