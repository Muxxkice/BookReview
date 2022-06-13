import { AxiosRequestConfig, AxiosResponse, AxiosError } from "axios";

export type BookType = {
  id: string;
  title: string;
  url: string;
  detail: string;
  review: string;
  reviewer: string;
  isMine: boolean;
};
export type ResponseBookType = {
  id: string;
  title: string;
  url: string;
  detail: string;
  review: string;
  reviewer: string;
  isMine: boolean;
  length: number;
};

export type APIBookResponseType = {
  data: {
    id: string;
    title: string;
    url: string;
    detail: string;
    review: string;
    reviewer: string;
  }
  length: number;
};
export type Length = {
  length: number;
};
export type EditBookType = {
  title: string;
  url: string;
  detail: string;
  review: string;
};

export type UserType = {
  name: string;
  email: string;
  password: string;
};

export type TokenType = {
  data: {
    token: string;
  };
};

