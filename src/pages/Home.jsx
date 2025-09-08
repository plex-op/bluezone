import {
  AboutSection,
  ContactSection,
  HeroSection,
  PropertiesSection,
  QueriesSection,
} from "../sections";

const Home = () => {
  return (
    <main className="overflow-x-hidden">
      <>
        {/* ✅ Primary Meta */}
        <title>Bluezone Realty | Modern Homes & Real Estate Solutions</title>
        <meta
          name="title"
          content="Bluezone Realty | Modern Homes & Real Estate Solutions"
        />
        <meta
          name="description"
          content="Bluezone Realty builds modern, high-quality homes designed for comfort, style, and long-term value. Discover your dream home or investment opportunity today."
        />
        <meta
          name="keywords"
          content="Bluezone Realty, real estate, modern homes, houses for sale, property investment, buy home, luxury homes, trusted builders"
        />
        <meta name="author" content="Bluezone Realty" />
        <meta name="robots" content="index, follow" />

        {/* ✅ Open Graph (for Facebook, Instagram, LinkedIn, Website previews) */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.bluezonerealty.in/" />
        <meta
          property="og:title"
          content="Bluezone Realty | Modern Homes & Real Estate Solutions"
        />
        <meta
          property="og:description"
          content="At Bluezone Realty, we believe a home is more than just walls and a roof — it’s the foundation of your future. Explore modern, high-quality houses built for today’s families."
        />
        <meta
          property="og:image"
          content="https://ik.imagekit.io/bluezonerealty/landingpage/images/villa-in-mudichur/630235257O-1754651679423.jpg"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="Bluezone Realty" />
        <meta property="og:locale" content="en_IN" />
      </>

      <HeroSection />
      <AboutSection />
      <PropertiesSection />
      <ContactSection />
      <QueriesSection />
    </main>
  );
};

export default Home;
