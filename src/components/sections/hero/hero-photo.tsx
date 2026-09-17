import Image from 'next/image';

export function HeroPhoto() {
  return (
    <div className="relative w-full max-w-sm">
      <div
        aria-hidden="true"
        className="absolute -inset-8 -z-10 rounded-full bg-linear-to-br from-sunset-purple/20 via-sunset-pink/15 to-sunset-orange/20 blur-3xl"
      />

      <div className="relative aspect-4/5 overflow-hidden rounded-3xl border border-white/10 bg-card shadow-2xl shadow-black/20">
        <Image
          src="/images/profile.webp"
          alt="Mehran Soufi"
          fill
          priority
          sizes="(max-width: 1023px) 70vw, 360px"
          className="object-cover"
        />

        <div
          aria-hidden="true"
          className="absolute inset-0 bg-linear-to-t from-sunset-purple/20 via-transparent to-sunset-orange/10"
        />
      </div>
    </div>
  );
}