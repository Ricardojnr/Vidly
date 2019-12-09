import httpService from "./httpService";
import { apiUrl } from "../config.json";

export function getGenres() {
  return httpService.get(apiUrl + "/genres");
}

export function getGenre(genreId) {
  return httpService.get(apiUrl + `${"/" + genreId}`);
}
