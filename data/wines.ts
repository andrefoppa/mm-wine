export type Wine = {
  id: number;
  name: string;
  producer: string;
  region: string;
  country: string;
  grape: string;
  vintage: number;
  price: number;
  category: "tinto" | "branco" | "espumante" | "rosé";
  badge?: string;
  score: number;
  notes: string[];
  sommelierNote: string;
  image: string;
  body: number;
  tannins: number;
  acidity: number;
  finish: number;
};

export const wines: Wine[] = [
  {
    id: 1,
    name: "Quimera",
    producer: "Achaval Ferrer",
    region: "Mendoza",
    country: "Argentina",
    grape: "Malbec / Cabernet",
    vintage: 2021,
    price: 389,
    category: "tinto",
    badge: "Sommelier",
    score: 97,
    notes: ["Frutas negras", "Especiarias", "Tabaco", "Baunilha", "Chocolate amargo"],
    sommelierNote:
      "Um blend extraordinário que equilibra potência e elegância. Taninos sedosos com longa persistência. Vinho de guarda excepcional.",
    image:
      "https://images.unsplash.com/photo-1553361371-9b22f78e8b1d?w=400&q=90",
    body: 92,
    tannins: 80,
    acidity: 65,
    finish: 95,
  },
  {
    id: 2,
    name: "Tignanello",
    producer: "Antinori",
    region: "Toscana",
    country: "Itália",
    grape: "Sangiovese / Cabernet",
    vintage: 2020,
    price: 890,
    category: "tinto",
    badge: "Destaque",
    score: 98,
    notes: ["Cereja madura", "Couro", "Ervas finas", "Especiarias", "Terra"],
    sommelierNote:
      "Ícone da Supertoscana. Complexidade ímpar, estrutura impecável. Um dos grandes vinhos do mundo disponível agora.",
    image:
      "https://images.unsplash.com/photo-1560148218-1a83060f7b32?w=400&q=90",
    body: 95,
    tannins: 88,
    acidity: 78,
    finish: 98,
  },
  {
    id: 3,
    name: "Pouilly-Fuissé",
    producer: "Louis Jadot",
    region: "Borgonha",
    country: "França",
    grape: "Chardonnay",
    vintage: 2022,
    price: 310,
    category: "branco",
    badge: "Novo",
    score: 93,
    notes: ["Maçã verde", "Baunilha", "Avelã", "Mel", "Flores brancas"],
    sommelierNote:
      "Chardonnay borgonhês clássico. Cremoso sem ser pesado, com mineralidade que o torna viciante. Harmonia perfeita com frutos do mar.",
    image:
      "https://images.unsplash.com/photo-1584916201218-f4242ceb4809?w=400&q=90",
    body: 70,
    tannins: 15,
    acidity: 85,
    finish: 88,
  },
  {
    id: 4,
    name: "Gran Reserva Carménère",
    producer: "Concha y Toro",
    region: "Colchagua Valley",
    country: "Chile",
    grape: "Carménère",
    vintage: 2021,
    price: 189,
    category: "tinto",
    score: 91,
    notes: ["Amora", "Pimenta verde", "Café", "Tabaco"],
    sommelierNote:
      "A uva emblema do Chile na sua melhor expressão. Perfil único com pimenta verde característica e final persistente.",
    image:
      "https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?w=400&q=90",
    body: 82,
    tannins: 72,
    acidity: 70,
    finish: 85,
  },
  {
    id: 5,
    name: "Cava Brut Nature",
    producer: "Gramona",
    region: "Penedès",
    country: "Espanha",
    grape: "Macabeo / Xarel·lo",
    vintage: 2020,
    price: 245,
    category: "espumante",
    badge: "Sommelier",
    score: 94,
    notes: ["Brioche", "Limão siciliano", "Maçã", "Mineral", "Amêndoa"],
    sommelierNote:
      "Cava de altíssimo nível que rivaliza com Champagne. Borbulhas finas, autólise pronunciada. Aperitivo ou harmonização surpreendente.",
    image:
      "https://images.unsplash.com/photo-1621264448270-9ef00e88a935?w=400&q=90",
    body: 55,
    tannins: 10,
    acidity: 90,
    finish: 82,
  },
  {
    id: 6,
    name: "Whispering Angel Rosé",
    producer: "Château d'Esclans",
    region: "Provence",
    country: "França",
    grape: "Grenache / Rolle",
    vintage: 2023,
    price: 290,
    category: "rosé",
    badge: "Exclusivo",
    score: 92,
    notes: ["Pêssego", "Morango", "Flores", "Mineral", "Cítrico"],
    sommelierNote:
      "O rosé mais famoso do mundo não decepcionou em 2023. Cor pálida salmão, boca delicada com frescor irresistível. Verão em cada taça.",
    image:
      "https://images.unsplash.com/photo-1569919659476-f0852f6834b7?w=400&q=90",
    body: 52,
    tannins: 12,
    acidity: 82,
    finish: 80,
  },
];
