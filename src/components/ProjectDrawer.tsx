import React, { useEffect, useState } from "react";
import type { Project } from "../data/projects";

interface ProjectDrawerProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function ProjectDrawer({ project, isOpen, onClose }: ProjectDrawerProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setMounted(true);
      setCurrentImageIndex(0);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      const timer = setTimeout(() => setMounted(false), 350);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  if (!mounted || !project) return null;

  const slides = project.images ?? [];

  return (
    <>
      {/* Backdrop */}
      <div
        onClick={onClose}
        style={{
          position: "fixed",
          inset: 0,
          background: "rgba(0,0,0,0.6)",
          zIndex: 9998,
          opacity: isOpen ? 1 : 0,
          transition: "opacity 0.3s ease",
        }}
      />

      {/* Drawer */}
      <div
        style={{
          position: "fixed",
          right: 0,
          top: 0,
          height: "100%",
          width: "100%",
          maxWidth: "480px",
          background: "#EBEBEB",
          zIndex: 9999,
          overflowY: "auto",
          padding: "56px 40px 80px",
          transform: isOpen ? "translateX(0)" : "translateX(100%)",
          transition: "transform 0.35s cubic-bezier(0.32, 0.72, 0, 1)",
          color: "#0A0A0A",
        }}
      >
        {/* Header */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 32 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <div
              style={{
                width: 44,
                height: 44,
                borderRadius: 8,
                background: "#0A0A0A",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#fff",
                fontWeight: 700,
                fontSize: 14,
                letterSpacing: "0.05em",
                flexShrink: 0,
              }}
            >
              {project.title
                .split(" ")
                .filter(Boolean)
                .slice(0, 2)
                .map((w) => w[0].toUpperCase())
                .join("")}
            </div>
            <h2 style={{ fontSize: 22, fontWeight: 500, letterSpacing: "-0.02em", margin: 0 }}>
              {project.title}
            </h2>
          </div>
          <button
            onClick={onClose}
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "rgba(10,10,10,0.5)",
              padding: 0,
            }}
          >
            CLOSE
          </button>
        </div>

        {/* Image carousel */}
        <div style={{ width: "100%", borderRadius: 10, overflow: "hidden" }}>
          <div
            style={{
              display: "flex",
              transform: `translateX(-${currentImageIndex * 100}%)`,
              transition: "transform 0.5s ease",
            }}
          >
            {slides.length > 0 ? (
              slides.map((img, idx) => (
                <div key={idx} style={{ width: "100%", flexShrink: 0 }}>
                  <img
                    src={img}
                    alt={`${project.title} — ${idx + 1}`}
                    style={{ width: "100%", height: "auto", display: "block", borderRadius: 10 }}
                  />
                </div>
              ))
            ) : (
              <div
                style={{
                  width: "100%",
                  flexShrink: 0,
                  height: 220,
                  background: "rgba(0,0,0,0.08)",
                  borderRadius: 10,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <span style={{ opacity: 0.3, fontSize: 12, letterSpacing: "0.1em", textTransform: "uppercase" }}>No image</span>
              </div>
            )}
          </div>
        </div>

        {/* Carousel controls */}
        {slides.length > 1 && (
          <div style={{ display: "flex", justifyContent: "flex-end", gap: 8, marginTop: 12 }}>
            <button
              onClick={() => setCurrentImageIndex((i) => (i - 1 + slides.length) % slides.length)}
              style={arrowBtn}
            >
              ←
            </button>
            <button
              onClick={() => setCurrentImageIndex((i) => (i + 1) % slides.length)}
              style={arrowBtn}
            >
              →
            </button>
          </div>
        )}

        {/* Content */}
        <div style={{ display: "flex", flexDirection: "column", gap: 28, marginTop: 36 }}>

          {/* Category pill */}
          <span
            style={{
              display: "inline-block",
              width: "fit-content",
              fontSize: 10,
              fontWeight: 700,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "rgba(10,10,10,0.5)",
              border: "1px solid rgba(10,10,10,0.15)",
              borderRadius: 999,
              padding: "4px 12px",
            }}
          >
            {project.category}
          </span>

          {/* Tagline */}
          <p style={{ fontSize: 20, fontWeight: 500, lineHeight: 1.4, letterSpacing: "-0.02em", margin: 0 }}>
            {project.tagline}
          </p>

          {/* Description */}
          <p style={{ fontSize: 14, lineHeight: 1.7, color: "rgba(10,10,10,0.6)", margin: 0 }}>
            {project.description}
          </p>

          {/* Tags */}
          {project.tags.length > 0 && (
            <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
              {project.tags.map((tag, i) => (
                <span
                  key={i}
                  style={{
                    fontSize: 10,
                    fontWeight: 700,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: "rgba(10,10,10,0.45)",
                    border: "1px solid rgba(10,10,10,0.12)",
                    borderRadius: 3,
                    padding: "4px 10px",
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          {/* Details table */}
          <div
            style={{
              background: "#E0E0E0",
              borderRadius: 6,
              padding: "20px 24px",
              display: "flex",
              flexDirection: "column",
              gap: 16,
            }}
          >
            {[
              { label: "Sector", value: project.sector },
              { label: "Founded", value: project.founded },
              { label: "Stage", value: project.stage },
              { label: "Team", value: project.team },
            ].map(({ label, value }) => (
              <div key={label} style={{ display: "flex", flexDirection: "column", gap: 4, borderBottom: "1px solid rgba(0,0,0,0.08)", paddingBottom: 12 }}>
                <span style={{ fontSize: 9, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(10,10,10,0.4)" }}>
                  {label}
                </span>
                <span style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.04em", textTransform: "uppercase" }}>
                  {value}
                </span>
              </div>
            ))}
          </div>

          {/* Problem */}
          {project.problem && (
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              <span style={{ fontSize: 9, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(10,10,10,0.4)" }}>
                Problem
              </span>
              <div style={{ width: "100%", height: 1, background: "rgba(0,0,0,0.1)" }} />
              <p style={{ fontSize: 16, fontWeight: 500, lineHeight: 1.6, color: "rgba(10,10,10,0.7)", margin: 0 }}>
                {project.problem}
              </p>
            </div>
          )}

          {/* Solution */}
          {project.solution && (
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              <span style={{ fontSize: 9, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(10,10,10,0.4)" }}>
                Solution
              </span>
              <div style={{ width: "100%", height: 1, background: "rgba(0,0,0,0.1)" }} />
              <p style={{ fontSize: 16, fontWeight: 500, lineHeight: 1.6, color: "rgba(10,10,10,0.7)", margin: 0 }}>
                {project.solution}
              </p>
            </div>
          )}

          {/* Website link — shown when URL is set */}
          {project.website && (
            <div style={{ position: "relative", display: "inline-flex", alignItems: "center", justifyContent: "center", padding: 20, width: "fit-content" }}>
              <span style={{ position: "absolute", top: 0, left: 0, width: 8, height: 8, borderTop: "1px solid #0A0A0A", borderLeft: "1px solid #0A0A0A" }} />
              <span style={{ position: "absolute", top: 0, right: 0, width: 8, height: 8, borderTop: "1px solid #0A0A0A", borderRight: "1px solid #0A0A0A" }} />
              <span style={{ position: "absolute", bottom: 0, left: 0, width: 8, height: 8, borderBottom: "1px solid #0A0A0A", borderLeft: "1px solid #0A0A0A" }} />
              <span style={{ position: "absolute", bottom: 0, right: 0, width: 8, height: 8, borderBottom: "1px solid #0A0A0A", borderRight: "1px solid #0A0A0A" }} />
              <a
                href={project.website.startsWith("http") ? project.website : `https://${project.website}`}
                target="_blank"
                rel="noopener noreferrer"
                style={{ fontSize: 13, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#0A0A0A", textDecoration: "none" }}
              >
                {project.website} →
              </a>
            </div>
          )}

        </div>
      </div>
    </>
  );
}

const arrowBtn: React.CSSProperties = {
  width: 36,
  height: 36,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  background: "#E0E0E0",
  border: "none",
  borderRadius: 4,
  cursor: "pointer",
  fontSize: 14,
  color: "rgba(10,10,10,0.6)",
};
