import type { Album } from "../types";  // Cambié Playlist a Album
import { backgrounds } from "./backgrounds";

export const albums: Album[] = [
  {
    id: 1,
    tag: "Urban", // Nuevo tag relacionado con estilo urbano
    title: "Once Lights",
    artist: "John Doe",  // Fotógrafo urbano o creador de la colección
    cover: "https://plus.unsplash.com/premium_photo-1678982286887-e2285e766130?q=80&w=2003&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Imagen de ciudad nocturna
    background: backgrounds.nebula,
    images: [  // Renombrado de "songs" a "images"
      {
        id: 1,
        title: "Starlit Avenue",
        artist: "Jane Smith",
        cover: "https://plus.unsplash.com/premium_photo-1678982286887-e2285e766130?q=80&w=2003&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // Imagen de ciudad bajo estrellas
      },
      {
        id: 2,
        title: "Moonlit Walk",
        artist: "Robert Brown",
        cover: "https://plus.unsplash.com/premium_photo-1678982286887-e2285e766130?q=80&w=2003&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // Imagen de luna sobre callejón
      },
      {
        id: 3,
        title: "Starlit Avenue",
        artist: "Jane Smith",
        cover: "https://plus.unsplash.com/premium_photo-1678982286887-e2285e766130?q=80&w=2003&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // Imagen de ciudad bajo estrellas
      },
      {
        id: 4,
        title: "Moonlit Walk",
        artist: "Robert Brown",
        cover: "https://plus.unsplash.com/premium_photo-1678982286887-e2285e766130?q=80&w=2003&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // Imagen de luna sobre callejón
      },
      {
        id: 5,
        title: "Starlit Avenue",
        artist: "Jane Smith",
        cover: "https://plus.unsplash.com/premium_photo-1678982286887-e2285e766130?q=80&w=2003&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // Imagen de ciudad bajo estrellas
      },
      {
        id: 6,
        title: "Moonlit Walk",
        artist: "Robert Brown",
        cover: "https://plus.unsplash.com/premium_photo-1678982286887-e2285e766130?q=80&w=2003&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // Imagen de luna sobre callejón
      },
      {
        id: 7,
        title: "Moonlit Walk",
        artist: "Robert Brown",
        cover: "https://plus.unsplash.com/premium_photo-1678982286887-e2285e766130?q=80&w=2003&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // Imagen de luna sobre callejón
      },
      
      
    ]
  },
  {
    id: 2,
    tag: "Abstract", // Tag para estilo abstracto
    title: "Waves of Color",
    artist: "Sara Lee",
    cover: "https://images.unsplash.com/photo-1507692812060-98338d07aca3?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Imagen de pintura abstracta
    background: backgrounds.sunset,
    images: [
      {
        id: 1,
        title: "Vibrant Hues",
        artist: "Mark White",
        cover: "https://images.unsplash.com/photo-1507692812060-98338d07aca3?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // Imagen de colores brillantes
      },
      {
        id: 2,
        title: "Fading Light",
        artist: "Emily Black",
        cover: "https://images.unsplash.com/photo-1507692812060-98338d07aca3?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // Imagen de luz desvaneciéndose
      }
    ]
  },
  {
    id: 3,
    tag: "Futuristic", // Tag para estilo futurista
    title: "Beyond the Horizon",
    artist: "Alex Green",
    cover: "https://images.unsplash.com/photo-1513553404607-988bf2703777?q=80&w=1936&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Imagen futurista de ciudad
    background: backgrounds.deepSpace,
    images: [
      {
        id: 1,
        title: "Neon Dreams",
        artist: "Chris Lee",
        cover: "https://images.unsplash.com/photo-1507692812060-98338d07aca3?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // Imagen de luces futuristas en ciudad
      },
      {
        id: 2,
        title: "Virtual World",
        artist: "Ava White",
        cover: "https://images.unsplash.com/photo-1507692812060-98338d07aca3?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // Imagen de paisaje digital
      }
    ]
  },
  {
    id: 4,
    tag: "Nature", // Tag para estilo natural
    title: "Golden Hour",
    artist: "Michael Brown",
    cover: "https://images.unsplash.com/photo-1669050589643-a06e01d7391e?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Imagen de atardecer dorado
    background: backgrounds.auroraBoreal,
    images: [
      {
        id: 1,
        title: "Serene Landscape",
        artist: "Anna Clark",
        cover: "https://images.unsplash.com/photo-1669050589643-a06e01d7391e?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // Imagen de paisaje tranquilo
      },
      {
        id: 2,
        title: "Misty Forest",
        artist: "Liam Davis",
        cover: "https://images.unsplash.com/photo-1669050589643-a06e01d7391e?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // Imagen de niebla en el bosque
      },
      {
        id: 3,
        title: "Misty Forest",
        artist: "Liam Davis",
        cover: "https://images.unsplash.com/photo-1669050589643-a06e01d7391e?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // Imagen de niebla en el bosque
      },
      {
        id: 4,
        title: "Misty Forest",
        artist: "Liam Davis",
        cover: "https://images.unsplash.com/photo-1669050589643-a06e01d7391e?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // Imagen de niebla en el bosque
      },
      {
        id: 5,
        title: "Misty Forest",
        artist: "Liam Davis",
        cover: "https://images.unsplash.com/photo-1669050589643-a06e01d7391e?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // Imagen de niebla en el bosque
      },
      {
        id: 6,
        title: "Misty Forest",
        artist: "Liam Davis",
        cover: "https://images.unsplash.com/photo-1669050589643-a06e01d7391e?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // Imagen de niebla en el bosque
      }
    ]
  },
  {
    id: 5,
    tag: "Conceptual", // Tag para estilo conceptual
    title: "Emerald Dreams",
    artist: "Olivia Jones",
    cover: "https://plus.unsplash.com/premium_photo-1739198752532-589131618390?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Imagen de naturaleza verde
    background: backgrounds.emerald,
    images: [
      {
        id: 1,
        title: "Tranquil Waters",
        artist: "Lucas Harris",
        cover: "https://plus.unsplash.com/premium_photo-1739198752532-589131618390?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // Imagen de lago tranquilo
      },
      {
        id: 2,
        title: "Golden Light",
        artist: "Sophia Martin",
        cover: "https://plus.unsplash.com/premium_photo-1739198752532-589131618390?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // Imagen de luz dorada entre montañas
      }
    ]
  },
  
];
