import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "About Us – NeoHive Technologies",
  description:
    "NeoHive Technologies is a student-driven innovation hub founded with the mission of merging creativity with future-ready technology.",
  openGraph: {
    title: "About Us – NeoHive Technologies",
    description:
      "Where creativity transforms into innovation. Learn about our mission, beliefs, and team.",
    url: "https://neohive.in/about",
    siteName: "NeoHive Technologies",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us – NeoHive Technologies",
    description: "Where creativity transforms into innovation.",
  },
};

const beliefs = [
  "Technology should enhance creativity — not restrict it.",
  "Every project deserves thoughtful design and strong engineering.",
  "Innovation comes from curiosity, learning, and exploration.",
  "Young minds can build powerful, world-changing solutions.",
];

export default function AboutPage() {
  return (
    <>
      <Navbar />

      {/* Header */}
      <header
        style={{
          paddingTop: "160px",
          paddingBottom: "100px",
          textAlign: "center",
          background: "linear-gradient(135deg, var(--accent), transparent)",
        }}
      >
        <div style={{ maxWidth: "800px", margin: "0 auto", padding: "0 20px" }}>
          <h1
            style={{ fontWeight: 700, fontSize: "clamp(1.8rem, 4vw, 2.8rem)" }}
          >
            About NeoHive Technologies
          </h1>
          <p style={{ fontSize: "1.2rem", marginTop: "16px", opacity: 0.85 }}>
            Where creativity transforms into innovation.
          </p>
        </div>
      </header>

      {/* Content */}
      <section style={{ padding: "80px 20px" }}>
        <div
          style={{
            maxWidth: "800px",
            margin: "0 auto",
            display: "flex",
            flexDirection: "column",
            gap: "48px",
          }}
        >
          {/* Who We Are */}
          <div>
            <h2 style={sectionTitleStyle}>Who We Are</h2>
            <div style={infoBlockStyle}>
              <p style={{ lineHeight: 1.8, margin: 0 }}>
                NeoHive Technologies is a student-driven innovation hub founded
                with the mission of merging creativity with future-ready
                technology. From modern web solutions to robotics, 
                we build meaningful tools and experiences that solve
                real-world challenges and empower creators.
              </p>
            </div>
          </div>

          {/* Mission */}
          <div>
            <h2 style={sectionTitleStyle}>Our Mission</h2>
            <div style={infoBlockStyle}>
              <p style={{ lineHeight: 1.8, margin: 0 }}>
                To make technology simple, intuitive, and accessible — helping
                individuals and businesses bring ideas to life with speed,
                precision, and creativity.
              </p>
            </div>
          </div>

          {/* Beliefs */}
          <div>
            <h2 style={sectionTitleStyle}>What We Believe</h2>
            <ul
              style={{
                paddingLeft: "20px",
                lineHeight: 2,
                margin: 0,
                color: "var(--muted)",
              }}
            >
              {beliefs.map((belief) => (
                <li key={belief}>{belief}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

const sectionTitleStyle: React.CSSProperties = {
  fontWeight: 700,
  fontSize: "1.5rem",
  marginBottom: "16px",
  paddingBottom: "8px",
  borderBottom: "4px solid var(--accent)",
  display: "inline-block",
};

const infoBlockStyle: React.CSSProperties = {
  borderLeft: "4px solid var(--accent)",
  padding: "20px 25px",
  borderRadius: "8px",
  backgroundColor: "#f8f9fa",
};
