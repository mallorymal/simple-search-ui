import axios from 'axios';
import { AnimeData, FetchAnimeResponse } from '../model/anime.model';
import { APIResponse } from '../model/api.model';

const ANIME_LIST_LIMIT = 20;

const instanceAxios = axios.create({
  baseURL: `${process.env.REACT_APP_API_ENDPOINT}`,
  timeout: 1000,
});

export const fetchAnime = async (
  query: string,
  limit = ANIME_LIST_LIMIT,
  offset = 0
): Promise<APIResponse<FetchAnimeResponse>> => {
  if (query.trim() === '') return { response: { data: [] }, error: null };
  try {
    const response = await instanceAxios.get(
      `/anime?q=${query.trim()}&limit=${limit}&offset=${offset}`
    );
    const data = response.data as FetchAnimeResponse;
    return { response: data, error: null };
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return { response: { data: [] }, error: { details: error.message } };
    } else {
      return {
        response: { data: [] },
        error: { details: 'An unexpected error occurred' },
      };
    }
  }
};

export const fetchAnimeById = async (id: string): Promise<APIResponse<AnimeData | null>> => {
  try {
    const response = await instanceAxios.get(`/anime/${id}?fields=synopsis`);
    const data = response.data as AnimeData;
    return { response: data, error: null };
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return { response: null, error: { details: error.message } };
    } else {
      return {
        response: null,
        error: { details: 'An unexpected error occurred' },
      };
    }
  }
};
