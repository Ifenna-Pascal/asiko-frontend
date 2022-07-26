import React from "react";

export interface IUser {
  img: string;
  username: string;
  name: string;
}

export interface IPost extends IUser {
  postImg: string;
  content: string;
}