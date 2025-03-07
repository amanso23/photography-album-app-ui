import type { backgrounds } from "./lib/backgrounds";

export interface Album {
    id: number;
    title: string;
    cover: string;
    artist: string;
    background: string;
    gallery: Image[];
    description: string;
  }

  export interface Image {
    id: number;
    title: string;
    cover: string;
    background?: string;
  }


export interface User {
  avatar: string;
  name: string;
  plan: UserPlan
}

export type UserPlan = 
  | "Premium"
  | "Extra"
  | "Essential"
