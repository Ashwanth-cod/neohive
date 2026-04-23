"use client";

import Image from "next/image";
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const team = [
  {
    name: "Ashwanth S",
    role: "Founder & Lead Developer",
    bio: `Passionate about and creates full-stack development, and building scalable digital solutions. more info in ashwanths.in`,
    image:
      "https://res.cloudinary.com/dps8vnfxr/image/upload/q_auto/f_auto/v1776970927/OIP_akaefb.webp",
    github: "https://github.com/Ashwanth-cod",
    linkedin: "#",
    instagram: "https://www.instagram.com/ashcodever/",
  },  
];

const linkStyle: React.CSSProperties = {
  color: "var(--accent)",
  fontWeight: 700,
  fontSize: "0.85rem",
  textDecoration: "none",
  border: "1px solid var(--accent)",
  borderRadius: "6px",
  padding: "4px 10px",
};

export default function TeamPage() {
  return (
    <>
      <Navbar />

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
            Meet Our Team
          </h1>
          <p style={{ fontSize: "1.2rem", marginTop: "16px", opacity: 0.85 }}>
            The minds engineering the future of innovation.
          </p>
        </div>
      </header>

      <section style={{ padding: "80px 20px" }}>
        <div style={{ maxWidth: "1140px", margin: "0 auto" }}>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: "24px",
            }}
          >
            {team.map((member) => (
              <div
                key={member.name}
                style={{
                  width: "300px",
                  borderRadius: "18px",
                  padding: "32px 24px",
                  backgroundColor: "#fff",
                  border: "1px solid var(--accent)",
                  textAlign: "center",
                  boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
                  transition: "transform 0.3s, box-shadow 0.3s",
                }}
                onMouseEnter={(e: React.MouseEvent<HTMLDivElement>) => {
                  e.currentTarget.style.transform = "translateY(-8px)";
                  e.currentTarget.style.boxShadow =
                    "0 14px 28px rgba(0,0,0,0.12)";
                }}
                onMouseLeave={(e: React.MouseEvent<HTMLDivElement>) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow =
                    "0 2px 12px rgba(0,0,0,0.06)";
                }}
              >
                <Image
                  src={member.image}
                  alt={member.name}
                  width={130}
                  height={130}
                  style={{
                    borderRadius: "50%",
                    objectFit: "cover",
                    border: "4px solid var(--accent)",
                    marginBottom: "16px",
                  }}
                />
                <h4 style={{ fontWeight: 700, margin: "0 0 4px" }}>
                  {member.name}
                </h4>
                <p
                  style={{
                    color: "var(--muted)",
                    marginBottom: "8px",
                    fontSize: "0.95rem",
                  }}
                >
                  {member.role}
                </p>
                <p
                  style={{ fontSize: "0.9rem", lineHeight: 1.6, color: "#444" }}
                >
                  {member.bio}
                </p>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    gap: "12px",
                    marginTop: "16px",
                  }}
                >
                  <a
                    href={member.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={linkStyle}
                  >
                    GH
                  </a>
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={linkStyle}
                  >
                    LI
                  </a>
                  <a
                    href={member.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={linkStyle}
                  >
                    IG
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
