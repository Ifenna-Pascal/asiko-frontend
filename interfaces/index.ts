import React from "react";

export interface IUser {
  img: string | null | undefined;
  username: string | null | undefined;
  name: string | null | undefined;
}

export interface IPost extends IUser {
  postImg?: string;
  content: string;
  time: string;
}

export interface IModal {
  modal: boolean;
  setModal?: any;
}

export interface User {
  firstName: string;
  lastName: string;
  profileUrl: string;
  email: string;
}

export interface IPostModal {
  closeModal: () => void;
  togglePostModal: () => void;
  addPostModal: Boolean;
}
