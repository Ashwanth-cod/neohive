"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import React from "react";

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
    href: "#",
  },
  {
    title: "ENG - Coming Soon",
    description:
      "English Native Grammar — a human-first programming language designed to code in plain English.",
    color: "#fdd10d",
    href: "#",
  },
];

const services = [
  {
    icon: "",
    title: "Custom Web Solutions",
    description:
      "Building responsive, high-performance websites and dynamic web applications with modern tech stacks like React and Next.js.",
  },
  {
    icon: "",
    title: "Mobile App Development",
    description:
      "Crafting native-feeling mobile experiences for iOS and Android, focusing on seamless UX and robust functionality.",
  },
  {
    icon: "",
    title: "Tech support",
    description: "Listen, analyize and solve any software related problems",
  },
];

export default function HomePage() {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <section
        id="home"
        style={{
          paddingTop: "180px",
          paddingBottom: "120px",
          textAlign: "center",
          background: "linear-gradient(135deg, var(--accent), transparent)",
          borderBottom: "1px solid rgba(0,0,0,0.08)",
        }}
      >
        <div style={{ maxWidth: "800px", margin: "0 auto", padding: "0 20px" }}>
          <h1 style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", fontWeight: 700 }}>
            NeoHive Technologies
          </h1>
          <p style={{ fontSize: "1.25rem", marginTop: "16px", opacity: 0.85 }}>
            For the betterment of creativity.
          </p>
          <a
            href="#projects"
            style={{
              display: "inline-block",
              marginTop: "32px",
              padding: "14px 32px",
              backgroundColor: "var(--accent)",
              color: "#fff",
              borderRadius: "8px",
              fontWeight: 600,
              fontSize: "1rem",
              transition: "opacity 0.2s",
            }}
            onMouseEnter={(e: React.MouseEvent<HTMLAnchorElement>) => {
              e.currentTarget.style.opacity = "0.85";
            }}
            onMouseLeave={(e: React.MouseEvent<HTMLAnchorElement>) => {
              e.currentTarget.style.opacity = "1";
            }}
          >
            Explore Our Work
          </a>
        </div>
      </section>

      {/* About */}
      <section id="about" style={{ padding: "80px 20px" }}>
        <div
          style={{ maxWidth: "1140px", margin: "0 auto", textAlign: "center" }}
        >
          <h2 style={{ fontWeight: 700, marginBottom: "24px" }}>About Us</h2>
          <p
            style={{
              maxWidth: "700px",
              margin: "0 auto",
              lineHeight: 1.7,
              color: "var(--muted)",
            }}
          >
            NeoHive Technologies is a student-led start-up focused on merging
            creativity with technology. We craft experiences across web, app,
            and robotics — empowering ideas to become reality.
          </p>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" style={{ padding: "80px 20px" }}>
        <div style={{ maxWidth: "1140px", margin: "0 auto" }}>
          <h2
            style={{
              fontWeight: 700,
              textAlign: "center",
              marginBottom: "40px",
            }}
          >
            Our Projects
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "24px",
            }}
          >
            {projects.map((project) => (
              <a
                key={project.title}
                href={project.href}
                target={project.href !== "#" ? "_blank" : undefined}
                rel={project.href !== "#" ? "noopener noreferrer" : undefined}
                style={{
                  display: "block",
                  borderRadius: "18px",
                  padding: "30px",
                  backgroundColor: project.color,
                  color: "#fff",
                  transition: "transform 0.3s, box-shadow 0.3s",
                  textDecoration: "none",
                }}
                onMouseEnter={(e: React.MouseEvent<HTMLAnchorElement>) => {
                  e.currentTarget.style.transform = "scale(1.02)";
                  e.currentTarget.style.boxShadow =
                    "0 8px 30px rgba(0,0,0,0.2)";
                }}
                onMouseLeave={(e: React.MouseEvent<HTMLAnchorElement>) => {
                  e.currentTarget.style.transform = "scale(1)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                <h4 style={{ fontWeight: 700, marginBottom: "12px" }}>
                  {project.title}
                </h4>
                <p style={{ lineHeight: 1.6, opacity: 0.92 }}>
                  {project.description}
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section
        id="services"
        style={{ padding: "80px 20px", backgroundColor: "#f8f9fa" }}
      >
        <div style={{ maxWidth: "1140px", margin: "0 auto" }}>
          <h2
            style={{
              fontWeight: 700,
              textAlign: "center",
              marginBottom: "48px",
            }}
          >
            Our Core Services
          </h2>
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
                  borderRadius: "18px",
                  padding: "36px 30px",
                  textAlign: "center",
                  border: "1px solid var(--accent)",
                  backgroundColor: "#fff",
                  transition: "transform 0.3s, box-shadow 0.3s",
                }}
                onMouseEnter={(e: React.MouseEvent<HTMLDivElement>) => {
                  e.currentTarget.style.transform = "scale(1.02)";
                  e.currentTarget.style.boxShadow =
                    "0 0 20px rgba(13, 110, 253, 0.25)";
                }}
                onMouseLeave={(e: React.MouseEvent<HTMLDivElement>) => {
                  e.currentTarget.style.transform = "scale(1)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                <div
                  style={{
                    fontSize: "2.5rem",
                    marginBottom: "16px",
                    color: "var(--accent)",
                  }}
                >
                  {service.icon}
                </div>
                <h3
                  style={{
                    fontWeight: 700,
                    fontSize: "1.1rem",
                    marginBottom: "12px",
                  }}
                >
                  {service.title}
                </h3>
                <p style={{ color: "var(--muted)", lineHeight: 1.7 }}>
                  {service.description}
                </p>
              </div>
            ))}
          </div>

          <div style={{ textAlign: "center", marginTop: "48px" }}>
            <a
              href="#"
              style={{
                display: "inline-block",
                padding: "14px 32px",
                border: "2px solid var(--accent)",
                color: "var(--accent)",
                borderRadius: "8px",
                fontWeight: 600,
                fontSize: "1rem",
                transition: "background 0.2s, color 0.2s",
              }}
              onMouseEnter={(e: React.MouseEvent<HTMLAnchorElement>) => {
                e.currentTarget.style.backgroundColor = "var(--accent)";
                e.currentTarget.style.color = "#fff";
              }}
              onMouseLeave={(e: React.MouseEvent<HTMLAnchorElement>) => {
                e.currentTarget.style.backgroundColor = "transparent";
                e.currentTarget.style.color = "var(--accent)";
              }}
            >
              Get in Touch for a Project
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
