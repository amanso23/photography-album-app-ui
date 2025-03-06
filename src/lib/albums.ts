import type { Album } from "../types";  // Cambié Playlist a Album
import { backgrounds } from "./backgrounds";

export const albums: Album[] = [
  {
    id: 1,
    tag: "Urban",
    title: "Once Lights",
    artist: "John Doe",
    cover: "https://plus.unsplash.com/premium_photo-1678982286887-e2285e766130?q=80&w=2003&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Imagen de ciudad nocturna
    background: backgrounds.nebula,
    description: "A collection of urban night photography showcasing the city's vibrant lights. From quiet streets to bustling neon-lit avenues, these images capture the essence and energy of the metropolis after dark.",
    gallery: [  
      {
        id: 1,
        title: "City Lights", // Título de la imagen
        cover: "https://plus.unsplash.com/premium_photo-1678982286887-e2285e766130?q=80&w=2003&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      },
      {
        id: 2,
        title: "Moonlit Alley", // Título de la imagen
        cover: "https://plus.unsplash.com/premium_photo-1678982286887-e2285e766130?q=80&w=2003&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // Imagen de luna sobre callejón
      },
      {
        id: 3,
        title: "City Under Stars", // Título de la imagen
        cover: "https://plus.unsplash.com/premium_photo-1678982286887-e2285e766130?q=80&w=2003&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // Imagen de ciudad bajo estrellas
      },
      {
        id: 4,
        title: "Moonlit Alley", // Título de la imagen
        cover: "https://plus.unsplash.com/premium_photo-1678982286887-e2285e766130?q=80&w=2003&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // Imagen de luna sobre callejón
      },
      {
        id: 5,
        title: "City Under Stars", // Título de la imagen
        cover: "https://plus.unsplash.com/premium_photo-1678982286887-e2285e766130?q=80&w=2003&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // Imagen de ciudad bajo estrellas
      },
      {
        id: 6,
        title: "Moonlit Alley", // Título de la imagen
        cover: "https://plus.unsplash.com/premium_photo-1678982286887-e2285e766130?q=80&w=2003&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // Imagen de luna sobre callejón
      },
      {
        id: 7,
        title: "Moonlit Alley", // Título de la imagen
        cover: "https://plus.unsplash.com/premium_photo-1678982286887-e2285e766130?q=80&w=2003&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // Imagen de luna sobre callejón
      },
      {
        id: 8,
        title: "Moonlit Alley", // Título de la imagen
        cover: "https://plus.unsplash.com/premium_photo-1678982286887-e2285e766130?q=80&w=2003&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // Imagen de luna sobre callejón
      },
      {
        id: 9,
        title: "Moonlit Alley", // Título de la imagen
        cover: "https://plus.unsplash.com/premium_photo-1678982286887-e2285e766130?q=80&w=2003&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // Imagen de luna sobre callejón
      },
      {
        id: 10,
        title: "Moonlit Alley", // Título de la imagen
        cover: "https://plus.unsplash.com/premium_photo-1678982286887-e2285e766130?q=80&w=2003&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // Imagen de luna sobre callejón
      },
      {
        id: 11,
        title: "Moonlit Alley", // Título de la imagen
        cover: "https://plus.unsplash.com/premium_photo-1678982286887-e2285e766130?q=80&w=2003&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // Imagen de luna sobre callejón
      },
      {
        id: 12,
        title: "Moonlit Alley", // Título de la imagen
        cover: "https://plus.unsplash.com/premium_photo-1678982286887-e2285e766130?q=80&w=2003&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // Imagen de luna sobre callejón
      },
      {
        id: 13,
        title: "Moonlit Alley", // Título de la imagen
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
    description: "A collection of abstract paintings featuring bold, vibrant colors. Each piece explores dynamic forms, textures, and the energy of color.",
    gallery: [
      {
        id: 1,
        title: "Colorful Abstract", // Título de la imagen
        cover: "https://images.unsplash.com/photo-1507692812060-98338d07aca3?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // Imagen de colores brillantes
      },
      {
        id: 2,
        title: "Abstract Patterns", // Título de la imagen
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
    description: "A collection of futuristic images that delve into the unknown, blending imagination, technology, and the mysteries of what lies ahead.",
    gallery: [
      {
        id: 1,
        title: "Future City", // Título de la imagen
        cover: "https://images.unsplash.com/photo-1507692812060-98338d07aca3?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // Imagen de luces futuristas en ciudad
      },
      {
        id: 2,
        title: "Digital World", // Título de la imagen
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
    description: "A collection of nature photographs captured during the golden hour, showcasing warm, soft light that enhances the beauty of landscapes and wildlife.",
    gallery: [
      {
        id: 1,
        title: "Tranquil Lake", // Título de la imagen
        cover: "https://images.unsplash.com/photo-1669050589643-a06e01d7391e?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // Imagen de paisaje tranquilo
      },
      {
        id: 2,
        title: "Misty Forest", // Título de la imagen
        cover: "https://images.unsplash.com/photo-1669050589643-a06e01d7391e?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // Imagen de niebla en el bosque
      },
      {
        id: 3,
        title: "Misty Forest", // Título de la imagen
        cover: "https://images.unsplash.com/photo-1669050589643-a06e01d7391e?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // Imagen de niebla en el bosque
      },
      {
        id: 4,
        title: "Misty Forest", // Título de la imagen
        cover: "https://images.unsplash.com/photo-1669050589643-a06e01d7391e?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // Imagen de niebla en el bosque
      },
      {
        id: 5,
        title: "Misty Forest", // Título de la imagen
        cover: "https://images.unsplash.com/photo-1669050589643-a06e01d7391e?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // Imagen de niebla en el bosque
      },
      {
        id: 6,
        title: "Misty Forest", // Título de la imagen
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
    description: "A collection of conceptual images that capture the beauty of nature through creative perspectives, symbolism, and artistic expression.",
    gallery: [
      {
        id: 1,
        title: "Emerald Lake", // Título de la imagen
        cover: "https://plus.unsplash.com/premium_photo-1739198752532-589131618390?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // Imagen de lago tranquilo
      },
      {
        id: 2,
        title: "Golden Light", // Título de la imagen
        cover: "https://plus.unsplash.com/premium_photo-1739198752532-589131618390?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // Imagen de luz dorada entre montañas
      }
    ]
  },
  
  
];
