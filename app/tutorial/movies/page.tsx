import Image from "next/image";

type Movie = {
  id: string;
  primaryTitle: string;
  description: string | null;
  primaryImage: string | null;
  startYear: number | null;
  type: string;
  genres: string[];
};

const fallbackMovies: Movie[] = [
  {
    id: "fallback-1",
    primaryTitle: "The Algorithm Class",
    description: "Dummy movie card untuk contoh fetching data tanpa API key.",
    primaryImage: null,
    startYear: 2026,
    type: "movie",
    genres: ["Education", "Tech"],
  },
  {
    id: "fallback-2",
    primaryTitle: "React State Stories",
    description: "Contoh data lokal saat layanan IMDb tidak tersedia.",
    primaryImage: null,
    startYear: 2025,
    type: "series",
    genres: ["React", "Tutorial"],
  },
  {
    id: "fallback-3",
    primaryTitle: "Next.js Runtime",
    description: "Fallback menjaga halaman tetap bisa dibuka di development.",
    primaryImage: null,
    startYear: 2024,
    type: "short",
    genres: ["Next.js", "Web"],
  },
];

async function getMovies(): Promise<Movie[]> {
  if (!process.env.RAPID_API_KEY) {
    return fallbackMovies;
  }

  try {
    const res = await fetch(
      "https://imdb236.p.rapidapi.com/api/imdb/cast/nm0000138/titles",
      {
        headers: {
          "X-RapidAPI-Key": process.env.RAPID_API_KEY,
          "X-RapidAPI-Host": "imdb236.p.rapidapi.com",
        },
        next: { revalidate: 3600 },
      },
    );

    if (!res.ok) {
      return fallbackMovies;
    }

    const raw = (await res.json()) as Array<Partial<Movie>>;

    return raw.map((movie, index) => ({
      id: movie.id ?? `movie-${index}`,
      primaryTitle: movie.primaryTitle ?? "Untitled",
      description: movie.description ?? null,
      primaryImage: movie.primaryImage ?? null,
      startYear: movie.startYear ?? null,
      type: movie.type ?? "movie",
      genres: movie.genres ?? [],
    }));
  } catch {
    return fallbackMovies;
  }
}

export default async function MoviesPage() {
  const movies = await getMovies();

  return (
    <main className="mx-auto max-w-7xl px-6 py-10">
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight text-white">
          Filmografi
        </h1>
        <p className="mt-1 text-[#A8B0BC]">
          Daftar judul film dari API IMDb, dengan fallback lokal jika API belum
          dikonfigurasi.
        </p>
      </div>

      <section className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {movies.map((movie) => (
          <article
            key={movie.id}
            className="group overflow-hidden border border-white/[0.06] bg-[#141619] transition hover:border-white/[0.12] hover:-translate-y-1 duration-500"
          >
            <div className="relative aspect-[2/3] bg-[#0D0E10]">
              {movie.primaryImage ? (
                <Image
                  src={movie.primaryImage}
                  alt={movie.primaryTitle}
                  fill
                  unoptimized
                  sizes="(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 20vw"
                  className="object-cover transition-transform group-hover:scale-105"
                />
              ) : (
                <div className="absolute inset-0 flex items-center justify-center px-4 text-center text-sm font-semibold text-[#A8B0BC]/30">
                  No Image
                </div>
              )}

              <span className="absolute left-2 top-2 bg-black/70 px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.1em] text-[#A8B0BC]">
                {movie.type.toUpperCase()}
              </span>
            </div>

            <div className="space-y-2 p-4">
              <h2 className="line-clamp-2 font-semibold leading-tight text-white">
                {movie.primaryTitle}
              </h2>
              <p className="line-clamp-2 text-[13px] text-[#A8B0BC]">
                {movie.description ?? "Deskripsi tidak tersedia."}
              </p>
              <div className="flex items-center justify-between pt-1 text-[12px] text-[#A8B0BC]/50">
                <span>{movie.startYear ?? "-"}</span>
              </div>
              {movie.genres.length > 0 && (
                <div className="flex flex-wrap gap-1 pt-2">
                  {movie.genres.slice(0, 3).map((genre) => (
                    <span
                      key={genre}
                      className="px-2 py-0.5 text-[10px] font-medium text-[#1C69D4] border border-[#1C69D4]/30 bg-[#1C69D4]/10"
                    >
                      {genre}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}
