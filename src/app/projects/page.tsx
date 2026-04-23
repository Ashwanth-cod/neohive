"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const projects = [
  {
    title: "Web Dudes",
    description:
      "Make websites in mere days at a fraction of the price. Bringing modern web development to everyone.",
    color: "#0d6efd",
    href: "https://webdudes.neohive.in",
  },
  {
    title: "Craftly - Coming Soon",
    description: "App & Web Design Platform built for creators and innovators.",
    color: "#fd1d0d",
  },
  {
    title: "ENG - Coming Soon",
    description:
      "English Native Grammar — a human-first programming language designed to code in plain English.",
    color: "#fdd10d",
  },
];

export default function ProjectsPage() {
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
            Our Projects
          </h1>
          <p style={{ fontSize: "1.2rem", marginTop: "16px", opacity: 0.85 }}>
            A showcase of the innovations built by NeoHive
          </p>
        </div>
      </header>

      {/* Projects Grid */}
      <section id="projects" style={{ padding: "80px 20px" }}>
        <div style={{ maxWidth: "1140px", margin: "0 auto" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "24px",
            }}
          >
            {projects.map((project) => (
              <div
                key={project.title}
                style={{
                  display: "block",
                  borderRadius: "18px",
                  padding: "30px",
                  backgroundColor: project.color,
                  color: "#fff",
                  cursor: project.href ? "pointer" : "default",
                  transition: "transform 0.3s, box-shadow 0.3s",
                }}
                onClick={() => {
                  if (project.href) window.open(project.href, "_blank");
                }}
                onMouseEnter={(e: React.MouseEvent<HTMLDivElement>) => {
                  if (project.href) {
                    e.currentTarget.style.transform = "scale(1.02)";
                    e.currentTarget.style.boxShadow =
                      "0 8px 30px rgba(0,0,0,0.2)";
                  }
                }}
                onMouseLeave={(e: React.MouseEvent<HTMLDivElement>) => {
                  e.currentTarget.style.transform = "scale(1)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                <h4 style={{ fontWeight: 700, marginBottom: "12px" }}>
                  {project.title}
                </h4>
                <p style={{ lineHeight: 1.6, opacity: 0.92, margin: 0 }}>
                  {project.description}
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
