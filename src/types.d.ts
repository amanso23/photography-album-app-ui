import type { backgrounds } from "./lib/backgrounds";

export interface Album {
    id: number;
    tag: Tag;
    title: string;
    cover: string;
    artist: string;
    background: string;
    gallery: Image[];
    description: string;
  }

  export interface Image {
    id: number;
    cover: string;
  }

  export type Tag = 
  | 'Urban'
  | 'Abstract'
  | 'Nature'
  | 'Futuristic'
  | 'Anime'
  | 'Vintage'
  | 'Black & White'
  | 'Minimalist'
  | 'Landscape'
  | 'Cosmic'
  | 'Portraits'
  | 'Street Photography'
  | 'Architecture'
  | 'Still Life'
  | 'Conceptual'
  | 'Wildlife'
  | 'Artistic'
  | 'Retro'
  | 'Surreal'
  | 'Scenic'
  | 'Candid'
  | 'Night Photography'
  | 'Underwater'
  | 'Macro'
  | 'Fantasy';


export interface User {
  avatar: string;
  name: string;
  plan: UserPlan
}

export type UserPlan = 
  | "Premium"
  | "Extra"
  | "Essential"
