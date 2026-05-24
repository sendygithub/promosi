type Artikel = {
  id: number;
  judul: string;
  slug: string;
  category: string;
  isi: string;
};

type Product = {
  id: number;
  name: string;
  price: number;
  category: string;
};

const artikelData: Artikel[] = [
  {
    id: 1,
    judul: "Belajar Next.js App Router",
    slug: "belajar-nextjs-app-router",
    category: "tutorial",
    isi: "Contoh artikel dummy untuk halaman tutorial.",
  },
];

const productData: Product[] = [
  { id: 1, name: "Baju Basic", price: 100000, category: "baju" },
  { id: 2, name: "Sepatu Canvas", price: 250000, category: "sepatu" },
];

const prisma = {
  artikel: {
    async findMany() {
      return artikelData;
    },
    async findFirst({ where }: { where: { slug: string } }) {
      return artikelData.find((artikel) => artikel.slug === where.slug) ?? null;
    },
    async create({ data }: { data: Omit<Artikel, "id"> }) {
      const artikel = { id: artikelData.length + 1, ...data };
      artikelData.push(artikel);
      return artikel;
    },
  },
  product: {
    async findMany() {
      return productData;
    },
    async create({ data }: { data: Omit<Product, "id"> }) {
      const product = { id: productData.length + 1, ...data };
      productData.push(product);
      return product;
    },
  },
};

export default prisma;
