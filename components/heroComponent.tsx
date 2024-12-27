export function HeroSection() {
  return (
    <section className="bg-white text-black py-6 px-6 w-full h-48">
      <div>
        <h1
          className="mt-0 mb-0 mx-auto"
          style={{
            fontFamily: "Inter, sans-serif",
            fontWeight: 600,
            fontSize: "60px",
            textAlign: "center",
            marginBottom: "-16px",
          }}
        > Pokémon Browser
        </h1>
        <h2
          className="mt-0 mb-0 mx-auto"
          style={{
            fontFamily: "Inter, sans-serif",
            fontWeight: 600,
            fontSize: "30px",
            textAlign: "center",
            color: "#71717A",
          }}
        > Search and find Pokémon
        </h2>
      </div>
    </section>
  );
}