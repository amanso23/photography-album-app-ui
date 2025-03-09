import type { Album } from "../types";
import { backgrounds } from "./backgrounds";

export const albums: Album[] = [
  {
    id: 1,
    title: "Concrete Realms",
    artist: "Vesper",
    cover:
      "https://images.unsplash.com/photo-1597589827317-4c6d6e0a90bd?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    background: backgrounds.nebula,
    description:
      "A photographic journey into the raw, monolithic beauty of brutalist architecture. Stark lines, heavy concrete.",
    gallery: [
      {
        id: 1,
        title: "Cold Geometry",
        cover:
          "https://images.unsplash.com/photo-1548350896-fafc317d3ceb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        source:
          "https://unsplash.com/es/fotos/una-imagen-borrosa-de-un-fondo-de-color-arco-iris-FQ7cRFUU1y0",
      },
      {
        id: 2,
        title: "Concrete Silence",
        cover:
          "https://images.unsplash.com/photo-1608358372469-08215a6bccf8?q=80&w=1939&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        source:
          "https://unsplash.com/es/fotos/ilustracion-de-triangulo-en-blanco-y-negro-ga58UDNdh8A",
      },
      {
        id: 3,
        title: "Brutalist Dream",
        cover:
          "https://images.unsplash.com/photo-1641203212602-ce55421d5d10?q=80&w=2088&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        source:
          "https://unsplash.com/es/fotos/una-vista-de-una-montana-nevada-desde-la-ventana-de-un-avion-wgpRR7eii28",
      },
      {
        id: 4,
        title: "Urban Maze",
        cover:
          "https://images.unsplash.com/photo-1541351613178-587adbc2631f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        source:
          "https://unsplash.com/es/fotos/una-foto-en-blanco-y-negro-de-una-cruz-en-un-edificio-cQZ04knAxpw",
      },
      {
        id: 5,
        title: "Shadows & Forms",
        cover:
          "https://images.unsplash.com/photo-1631575355322-71bdc42904e0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        source:
          "https://unsplash.com/es/fotos/un-primer-plano-de-una-superficie-de-agua-con-luz-solar-brillando-sobre-ella-yx5fAmjwdXc",
      },
      {
        id: 6,
        title: "Dimension",
        cover:
          "https://images.unsplash.com/photo-1644193809036-2909bb392eb5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        source:
          "https://unsplash.com/es/fotos/una-persona-sosteniendo-un-telefono-celular-en-la-mano-_7cEg1znIVU",
      },
    ],
  },
  {
    id: 2,
    title: "Void & Form",
    artist: "E. Nova",
    cover: "https://images.unsplash.com/photo-1533158170721-c66e9e3bea2b",
    background: backgrounds.sunset,
    description:
      "Exploring the essence of minimalism through photography, symmetry.",
    gallery: [
      {
        id: 1,
        title: "Horizon of Light",
        cover:
          "https://images.unsplash.com/photo-1553178525-6b73704b4fcf?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        source:
          "https://unsplash.com/es/fotos/foto-abstracta-en-escala-de-grises-del-edificio-bHfUtXiFkAI",
      },
      {
        id: 2,
        title: "Muted Tones",
        cover:
          "https://images.unsplash.com/photo-1563192504-36ac622196dd?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        source:
          "https://unsplash.com/es/fotos/pila-de-bloques-grises-X6dGWWcSdds",
      },
      {
        id: 3,
        title: "Minimal Essence",
        cover:
          "https://images.unsplash.com/photo-1607245795316-eceb7b157ecb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        source:
          "https://unsplash.com/es/fotos/foto-en-escala-de-grises-de-edificios-de-hormigon-Z77kU39cmj4",
      },
      {
        id: 4,
        title: "Silent Patterns",
        cover:
          "https://images.unsplash.com/photo-1579103458977-fbfd8b47b829?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        source:
          "https://unsplash.com/es/fotos/muro-de-hormigon-durante-el-dia-ZKh_ASyIXeU",
      },
      {
        id: 5,
        title: "Negative Space",
        cover:
          "https://images.unsplash.com/photo-1494768788897-7fdaa00de2a1?q=80&w=1638&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        source:
          "https://unsplash.com/es/fotos/fotografia-aerea-en-escala-de-grises-de-edificios-WQTwsgq_mxg",
      },
    ],
  },
  {
    id: 3,
    title: "Retro Etéreo",
    artist: "Wes Anderson",
    cover:
      "https://images.unsplash.com/photo-1561901272-531c936c9b85?q=80&w=1995&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

    background: backgrounds.deepSpace,
    description:
      "A whimsical collection of vibrant, symmetrical scenes that tell unique stories.",
    gallery: [
      {
        id: 1,
        title: "Bottom Right",
        cover:
          "https://images.unsplash.com/photo-1698341286660-03ee9b29980c?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        source:
          "https://unsplash.com/es/fotos/un-edificio-amarillo-con-un-cielo-azul-de-fondo-sbodNgfIxPc",
      },
      {
        id: 2,
        title: "non-symetric",
        cover:
          "https://images.unsplash.com/photo-1698341286246-bca2f2deb7fa?q=80&w=2030&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        source:
          "https://unsplash.com/es/fotos/un-alto-edificio-naranja-sentado-al-lado-de-un-alto-edificio-blanco-Tv7xvzDfSMU",
      },
      {
        id: 3,
        title: "Urban Glow",
        cover:
          "https://images.unsplash.com/photo-1506984746905-75dfd340785e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        source:
          "https://unsplash.com/es/fotos/un-edificio-alto-con-un-letrero-en-la-parte-superior-R3mnA0s-EBA",
      },
      {
        id: 4,
        title: "Beach Day",
        cover:
          "https://images.unsplash.com/photo-1724763682804-fa73101e0fbe?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        source:
          "https://unsplash.com/es/fotos/un-hombre-sentado-en-una-playa-bajo-dos-sombrillas-d_xWyPSV1aU",
      },
      {
        id: 5,
        title: "Happy Days",
        cover:
          "https://images.unsplash.com/photo-1698341286105-8c4eba2d3743?q=80&w=2030&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        source:
          "https://unsplash.com/es/fotos/una-noria-sentada-junto-a-una-noria-sApNQvMzyRo",
      },
    ],
  },
  {
    id: 4,
    title: "Steel & Shadow",
    artist: "Morrow",
    cover: "https://images.unsplash.com/photo-1623150502742-6a849aa94be4",

    background: backgrounds.auroraBoreal,
    description:
      "A tribute to industrial architecture—bridges, factories, and the intricate dance between steel and shadow.",
    gallery: [
      {
        id: 1,
        title: "Echo of Machines",
        cover:
          "https://images.unsplash.com/photo-1454117096348-e4abbeba002c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        source:
          "https://unsplash.com/es/fotos/una-foto-en-blanco-y-negro-de-una-pared-_JBKdviweXI",
      },
      {
        id: 2,
        title: "Iron Horizon",
        cover:
          "https://images.unsplash.com/photo-1737071371043-761e02b1ef95?q=80&w=2038&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        source:
          "https://unsplash.com/es/fotos/una-escultura-de-vidrio-de-la-cabeza-de-una-persona-sobre-un-fondo-negro-QNVh6QXPXLk",
      },
      {
        id: 3,
        title: "Steel Web",
        cover:
          "https://images.unsplash.com/photo-1626141138092-a20c8debe88b?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        source:
          "https://unsplash.com/es/fotos/arte-abstracto-purpura-y-azul-R2_8h2oo8wU",
      },
      {
        id: 4,
        title: "Metal Veins",
        cover:
          "https://images.unsplash.com/photo-1632516643720-e7f5d7d6ecc9?q=80&w=2022&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        source:
          "https://unsplash.com/es/fotos/un-fondo-azul-y-rosa-con-un-objeto-circular-en-el-medio-vqTWfa4DjEk",
      },
      {
        id: 5,
        title: "Sfere",
        cover:
          "https://images.unsplash.com/photo-1671655135696-ccf6f206d2b9?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        source:
          "https://unsplash.com/es/fotos/un-primer-plano-de-un-fondo-negro-con-un-color-borroso-nyeqmCQvbls",
      },
    ],
  },
  {
    id: 5,
    title: "Vietnam Tour",
    artist: "Thrung Nhan Tran",
    cover:
      "https://images.unsplash.com/photo-1617814137443-c66dbffd5c4f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    background: backgrounds.emerald,
    description:
      "A visual journey through the vibrant essence of Vietnam: serene landscapes and traditional architecture.",
    gallery: [
      {
        id: 1,
        title: "Vietnam Police",
        cover:
          "https://images.unsplash.com/photo-1617813884752-54618acb4b94?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        source:
          "https://unsplash.com/es/fotos/hombre-con-camisa-blanca-de-manga-larga-y-sombrero-negro-de-pie-junto-a-la-motocicleta-6TWYNizHNYI",
      },
      {
        id: 2,
        title: "Soc Trang Monk",
        cover:
          "https://images.unsplash.com/photo-1622772589435-2475735085e2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        source:
          "https://unsplash.com/es/fotos/hombre-de-rojo-thobe-de-pie-cerca-de-un-edificio-de-hormigon-amarillo-durante-el-dia-4AN3QOAzrpI",
      },
      {
        id: 3,
        title: "Green Vietnam",
        cover:
          "https://images.unsplash.com/photo-1604325099517-d9ff3c837c3c?q=80&w=1936&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        source:
          "https://unsplash.com/es/fotos/hombre-en-camisa-de-manga-larga-a-rayas-azules-y-blancas-sentado-en-un-banco-de-madera-marron-GFeIKOJNPJY",
      },
    ],
  },
];
