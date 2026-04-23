import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services – NeoHive Technologies",
  description:
    "Explore the services offered by NeoHive Technologies — web development, app development, robotics, UI/UX design, and AI model training.",
  openGraph: {
    title: "Services – NeoHive Technologies",
    description: "What NeoHive Technologies Offers.",
    url: "https://neohive.in/services",
    siteName: "NeoHive Technologies",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Services – NeoHive Technologies",
    description: "What NeoHive Technologies Offers.",
  },
};

const services = [
  {
    title: "Web Development",
    description:
      "Responsive, lightweight, and optimized websites using modern frameworks.",
    icon: "⌨️",
  },
  {
    title: "App Development",
    description:
      "Cross-platform mobile apps built for performance and user experience.",
    icon: "📱",
  },
  {
    title: "Robotics & Automation",
    description:
      "Custom robotics projects, automation modules, and hardware design.",
    icon: "🤖",
  },
  {
    title: "UI/UX Design",
    description:
      "Clean, intuitive, and modern designs that bring digital experiences to life.",
    icon: "🎨",
  },
  {
    title: "Model Training",
    description:
      "Create custom models for audio, video, and image recognition.",
    icon: "🧠",
  },
];

export default function ServicesPage() {
  return (
    <>
      <Navbar />

      {/* Header */}
      <header
        style={{
          paddingTop: "160px",
          paddingBottom: "80px",
          textAlign: "center",
          background: "linear-gradient(135deg, var(--accent), transparent)",
        }}
      >
        <div style={{ maxWidth: "800px", margin: "0 auto", padding: "0 20px" }}>
          <h1
            style={{ fontWeight: 700, fontSize: "clamp(1.8rem, 4vw, 2.8rem)" }}
          >
            Our Services
          </h1>
          <p style={{ fontSize: "1.2rem", marginTop: "16px", opacity: 0.85 }}>
            What NeoHive Technologies Offers
          </p>
        </div>
      </header>

      {/* Services Grid */}
      <section style={{ padding: "80px 20px" }}>
        <div style={{ maxWidth: "1140px", margin: "0 auto" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "24px",
            }}
          >
            {services.map((service) => (
              <div
                key={service.title}
                style={{
                  borderRadius: "16px",
                  padding: "32px 28px",
                  backgroundColor: "#fff",
                  boxShadow: "0 2px 12px rgba(0,0,0,0.08)",
                  border: "1px solid #eee",
                  display: "flex",
                  flexDirection: "column",
                  gap: "12px",
                }}
              >
                <div style={{ fontSize: "2rem" }}>{service.icon}</div>
                <h4 style={{ fontWeight: 700, margin: 0 }}>{service.title}</h4>
                <p
                  style={{ margin: 0, lineHeight: 1.7, color: "var(--muted)" }}
                >
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
