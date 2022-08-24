import { Anime } from '../models';

export const SAVE_ANIME_LIST = 'SAVE_ANIME_LIST';
export const ADD_TO_COLLECTION = 'ADD_TO_COLLECTION';
export const UPDATE_TO_COLLECTION = 'UPDATE_TO_COLLECTION';
export const REMOVE_FROM_COLLECTION = 'REMOVE_FROM_COLLECTION';
export const ADD_COLLECTION = 'ADD_COLLECTION';
export const REMOVE_COLLECTION = 'REMOVE_COLLECTION';
export const SAVE_PAGE_INFO = 'SAVE_PAGE_INFO';

export const saveAnimeList = (data: Array<Anime>) => {
  return {
    type: SAVE_ANIME_LIST,
    payload: { data },
  };
};

export const addToCollection = (data: Anime) => {
  return {
    type: ADD_TO_COLLECTION,
    payload: { data },
  };
};

export const updateToCollection = (data: Array<Anime>) => {
  return {
    type: UPDATE_TO_COLLECTION,
    payload: { data },
  };
};

export const removeFromCollection = (id: number) => {
  return {
    type: REMOVE_FROM_COLLECTION,
    payload: {
      id,
    },
  };
};

export const addCollectiopn = (name: string) => {
  return {
    type: ADD_COLLECTION,
    payload: {
      name,
    },
  };
};

export const removeCollection = (name: string) => {
  return {
    type: REMOVE_COLLECTION,
    payload: {
      name,
    },
  };
};

export const savePageInfo = (data: { currentPage: number }) => {
  return {
    type: SAVE_PAGE_INFO,
    payload: {
      data,
    },
  };
};
