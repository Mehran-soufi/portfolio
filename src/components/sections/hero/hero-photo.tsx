export function HeroPhoto() {
  return (
    <div className="relative w-full max-w-sm">
      {/* Sunset glow */}
      <div
        aria-hidden="true"
        className="absolute -inset-8 -z-10 rounded-full bg-linear-to-br from-sunset-purple/20 via-sunset-pink/15 to-sunset-orange/20 blur-3xl"
      />

      {/* Photo frame */}
      <div className="relative aspect-4/5 overflow-hidden rounded-3xl border border-white/10 bg-linear-to-br from-sunset-purple/20 via-card to-sunset-orange/10 shadow-2xl shadow-black/20">
        {/* Placeholder */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <div className="mx-auto mb-4 flex size-20 items-center justify-center rounded-full bg-linear-to-br from-sunset-purple/20 via-sunset-pink/20 to-sunset-orange/20">
              <span className="text-3xl">MS</span>
            </div>

            <p className="text-sm font-medium text-muted-foreground">
              Your photo
            </p>
          </div>
        </div>

        {/* Sunset overlay */}
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-linear-to-t from-sunset-purple/20 via-transparent to-sunset-orange/10"
        />
      </div>
    </div>
  );
}