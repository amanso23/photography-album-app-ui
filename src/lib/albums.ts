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
      { id: 1, title: "Cold Geometry", cover: "https://plus.unsplash.com/premium_photo-1681426785598-7a2b734181fa?q=80&w=2103&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
      { id: 2, title: "Concrete Silence", cover: "https://images.unsplash.com/photo-1608358372469-08215a6bccf8?q=80&w=1939&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
      { id: 3, title: "Brutalist Dream", cover: "https://images.unsplash.com/photo-1641203212602-ce55421d5d10?q=80&w=2088&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
      { id: 4, title: "Urban Maze", cover: "https://images.unsplash.com/photo-1541351613178-587adbc2631f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
      { id: 5, title: "Shadows & Forms", cover: "https://images.unsplash.com/photo-1631575355322-71bdc42904e0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
      { id: 6, title: "Dimension", cover: "https://images.unsplash.com/photo-1644193809036-2909bb392eb5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" }
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
      { id: 1, title: "Horizon of Light", cover: "https://images.unsplash.com/photo-1553178525-6b73704b4fcf?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
      { id: 2, title: "Muted Tones", cover: "https://images.unsplash.com/photo-1563192504-36ac622196dd?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
      { id: 3, title: "Minimal Essence", cover: "https://images.unsplash.com/photo-1607245795316-eceb7b157ecb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
      { id: 4, title: "Silent Patterns", cover: "https://images.unsplash.com/photo-1579103458977-fbfd8b47b829?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
      { id: 5, title: "Negative Space", cover: "https://images.unsplash.com/photo-1571201674648-b45d1f6cd94a?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" }
    ]
  },
  {
    id: 3,
    title: "Neon Density",
    artist: "Solaris",
    cover: "https://images.unsplash.com/photo-1561901272-531c936c9b85?q=80&w=1995&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
    
    background: backgrounds.deepSpace,
    description: "A study of the modern metropolis—skylines, reflections, and the interplay of artificial light with urban structures.",
    gallery: [
      { id: 1, title: "Glass Towers", cover: "https://images.unsplash.com/photo-1698341286660-03ee9b29980c?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
      { id: 2, title: "Neon Corridors", cover: "https://images.unsplash.com/photo-1698341286246-bca2f2deb7fa?q=80&w=2030&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
      { id: 3, title: "Urban Glow", cover: "https://images.unsplash.com/photo-1506984746905-75dfd340785e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
      { id: 4, title: "Electric Grid", cover: "https://images.unsplash.com/photo-1724763682804-fa73101e0fbe?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
      { id: 5, title: "City Reflections", cover: "https://images.unsplash.com/photo-1698341286105-8c4eba2d3743?q=80&w=2030&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" }
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
      { id: 1, title: "Echo of Machines", cover: "https://images.unsplash.com/photo-1454117096348-e4abbeba002c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", background: backgrounds.auroraBoreal },
      { id: 2, title: "Iron Horizon", cover: "https://images.unsplash.com/photo-1737071371043-761e02b1ef95?q=80&w=2038&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", background: backgrounds.cosmic },
      { id: 3, title: "Steel Web", cover: "https://images.unsplash.com/photo-1626141138092-a20c8debe88b?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", background: backgrounds.emerald },
      { id: 4, title: "Metal Veins", cover: "https://images.unsplash.com/photo-1632516643720-e7f5d7d6ecc9?q=80&w=2022&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", background: backgrounds.ocean },
      { id: 5, title: "Industrial Shadows", cover: "https://images.unsplash.com/photo-1671655135696-ccf6f206d2b9?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", background: backgrounds.deepSpace },
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
      { id: 1, title: "Light Cathedral", cover: "https://plus.unsplash.com/premium_photo-1739198752532-589131618390?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", background: backgrounds.auroraBoreal },
      { id: 2, title: "Synthetic Horizons", cover: "https://plus.unsplash.com/premium_photo-1739198752532-589131618390?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", background: backgrounds.ocean }
    ]
  }
];
