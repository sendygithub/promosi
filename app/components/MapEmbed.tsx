export default function MapEmbed() {
  return (
    <section className="py-20 bg-[#0a0a0a]">
      <div className="container mx-auto px-4 text-center">
        <h2 className="font-serif text-3xl text-[#d4af37] mb-8">
          Lokasi Acara
        </h2>
        <div className="w-full h-[450px] rounded-2xl overflow-hidden border-2 border-[#d4af37]/20 grayscale invert">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15866.416556133983!2d106.6346294!3d-6.1837012!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f8e0259f93f1%3A0x7d01878b27387d8!2sTangerang%2C%20Banten!5e0!3m2!1sid!2sid!4v1710000000000!5m2!1sid!2sid"
            className="w-full h-full"
            loading="lazy"
          ></iframe>
        </div>
        <p className="mt-6 text-[#d4af37]/80">
          Grand Ballroom - Tangerang City
        </p>
      </div>
    </section>
  );
}
