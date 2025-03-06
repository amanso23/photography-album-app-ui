import type { Album } from "../types";  
import { backgrounds } from "./backgrounds";

export const albums: Album[] = [
  {
    id: 1,
    title: "Concrete Realms",
    artist: "Vesper",
    cover: "https://images.unsplash.com/photo-1597589827317-4c6d6e0a90bd?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
    background: backgrounds.nebula,
    description: "A photographic journey into the raw, monolithic beauty of brutalist architecture. Stark lines, heavy concrete, and the poetry of shadows.",
    gallery: [  
      { id: 1, title: "Cold Geometry", cover: "https://images.unsplash.com/photo-1597589827317-4c6d6e0a90bd" },
      { id: 2, title: "Concrete Silence", cover: "https://images.unsplash.com/photo-1597589827317-4c6d6e0a90bd" },
      { id: 3, title: "Brutalist Dream", cover: "https://images.unsplash.com/photo-1597589827317-4c6d6e0a90bd" },
      { id: 4, title: "Urban Maze", cover: "https://images.unsplash.com/photo-1597589827317-4c6d6e0a90bd" },
      { id: 5, title: "Shadows & Forms", cover: "https://images.unsplash.com/photo-1597589827317-4c6d6e0a90bd" }
    ]
  },
  {
    id: 2,
    title: "Void & Form",
    artist: "E. Nova",
    cover: "https://images.unsplash.com/photo-1533158170721-c66e9e3bea2b", 
    background: backgrounds.sunset,
    description: "Exploring the essence of minimalism through photography—geometry, symmetry, and the power of negative space.",
    gallery: [
      { id: 1, title: "Horizon of Light", cover: "https://images.unsplash.com/photo-1533158170721-c66e9e3bea2b" },
      { id: 2, title: "Muted Tones", cover: "https://images.unsplash.com/photo-1533158170721-c66e9e3bea2b" },
      { id: 3, title: "Minimal Essence", cover: "https://images.unsplash.com/photo-1533158170721-c66e9e3bea2b" },
      { id: 4, title: "Silent Patterns", cover: "https://images.unsplash.com/photo-1533158170721-c66e9e3bea2b" },
      { id: 5, title: "Negative Space", cover: "https://images.unsplash.com/photo-1533158170721-c66e9e3bea2b" }
    ]
  },
  {
    id: 3,
    title: "Neon Density",
    artist: "Kelton Solaris",
    cover: "https://images.unsplash.com/photo-1629729802306-2c196af7eef5", 
    background: backgrounds.deepSpace,
    description: "A study of the modern metropolis—skylines, reflections, and the interplay of artificial light with urban structures.",
    gallery: [
      { id: 1, title: "Glass Towers", cover: "https://images.unsplash.com/photo-1629729802306-2c196af7eef5" },
      { id: 2, title: "Neon Corridors", cover: "https://images.unsplash.com/photo-1629729802306-2c196af7eef5" },
      { id: 3, title: "Urban Glow", cover: "https://images.unsplash.com/photo-1629729802306-2c196af7eef5" },
      { id: 4, title: "Electric Grid", cover: "https://images.unsplash.com/photo-1629729802306-2c196af7eef5" },
      { id: 5, title: "City Reflections", cover: "https://images.unsplash.com/photo-1629729802306-2c196af7eef5" }
    ]
  },
  {
    id: 4,
    title: "Steel & Shadow",
    artist: "Morrow",
    cover: "https://images.unsplash.com/photo-1623150502742-6a849aa94be4", 
    background: backgrounds.auroraBoreal,
    description: "A tribute to industrial architecture—bridges, factories, and the intricate dance between steel and shadow.",
    gallery: [
      { id: 1, title: "Echo of Machines", cover: "https://images.unsplash.com/photo-1623150502742-6a849aa94be4" },
      { id: 2, title: "Iron Horizon", cover: "https://images.unsplash.com/photo-1623150502742-6a849aa94be4" },
      { id: 3, title: "Steel Web", cover: "https://images.unsplash.com/photo-1623150502742-6a849aa94be4" },
      { id: 4, title: "Metal Veins", cover: "https://images.unsplash.com/photo-1623150502742-6a849aa94be4" },
      { id: 5, title: "Industrial Shadows", cover: "https://images.unsplash.com/photo-1623150502742-6a849aa94be4" }
    ]
  },
  {
    id: 5,
    title: "Hyper Ocean",
    artist: "Zalik Orion",
    cover: "https://plus.unsplash.com/premium_photo-1739198752532-589131618390?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
    background: backgrounds.emerald,
    description: "A glimpse into futuristic architecture—structures that challenge gravity, redefine form, and stretch the limits of human imagination.",
    gallery: [
      { id: 1, title: "Light Cathedral", cover: "https://plus.unsplash.com/premium_photo-1739198752532-589131618390?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
      { id: 2, title: "Synthetic Horizons", cover: "https://plus.unsplash.com/premium_photo-1739198752532-589131618390?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" }
    ]
  }
];
