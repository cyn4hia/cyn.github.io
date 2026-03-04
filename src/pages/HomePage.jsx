import { useState, useEffect } from "react";
import NavButton from "../components/NavButton";
import images from "../assets/images";

export default function HomePage({ onNavigate }) {
  const [heroVis, setHeroVis] = useState(false);
  const [titleVis, setTitleVis] = useState(false);
  const [subVis, setSubVis] = useState(false);

  useEffect(() => {
    setTimeout(() => setHeroVis(true), 200);
    setTimeout(() => setTitleVis(true), 500);
    setTimeout(() => setSubVis(true), 900);
  }, []);

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        padding: 20,
        background: "#fff",
        overflow: "hidden",
      }}
    >
    {/* ── title ── */}
    <div
      style={{
        position: "relative",
        width: "clamp(480px, 65vw, 820px)",
        height: "clamp(380px, 50vw, 600px)",
        opacity: heroVis ? 1 : 0,
        transform: heroVis ? "scale(1)" : "scale(0.92)",
        transition: "all 1.2s cubic-bezier(0.22,1,0.36,1)",
      }}
    >
      {/* left of stem */}
      <span
        style={{
          position: "absolute",
          bottom: "77%",
          left: "35%",
          fontFamily: "var(--font-display)",
          fontSize: "clamp(52px, 7vw, 88px)",
          fontWeight: 300,
          color: "var(--text-main)",
          lineHeight: 1,
          zIndex: 2,
          opacity: titleVis ? 1 : 0,
          transition: "opacity 0.8s ease",
        }}
      >
        Cindy
      </span>

      {/* "s" — right of stem */}
      <span
        style={{
          position: "absolute",
          bottom: "77%",
          right: "28%",
          fontFamily: "var(--font-display)",
          fontSize: "clamp(52px, 7vw, 88px)",
          fontWeight: 300,
          color: "var(--text-main)",
          lineHeight: 1,
          zIndex: 2,
          opacity: titleVis ? 1 : 0,
          transition: "opacity 0.8s ease",
        }}
      >
        s
      </span>

      {/* Grape bunch — large, overlapping title & subtitle */}
      <img
        src={images.bunch}
        alt="Green grapes"
        style={{
          position: "absolute",
          bottom: "10%",
          left: "50%",
          transform: "translateX(-50%)",
          width: "clamp(500px, 42vw, 700px)",
          height: "auto",
          zIndex: 1,
          animation: "gentle-float 6s ease-in-out infinite",
        }}
      />

      {/*the grape leaf which is ' */}
      <img
        src={images.leaf}
        alt="Grape leaf"
        style={{
          position: "absolute",
          bottom: "80%",
          left: "66%",
          transform: "translateX(-50%)",
          width: "clamp(50px, 42vw, 100px)",
          height: "auto",
          zIndex: 1,
          animation: "gentle-float 6s ease-in-out infinite",
        }}
      />

      {/* "green grapes." + "personal web" — lower-right overlap */}
      <div
        style={{
          position: "absolute",
          bottom: "22%",
          right: "25%",
          zIndex: 2,
          textAlign: "left",
          opacity: subVis ? 1 : 0,
          transform: subVis ? "translateY(0)" : "translateY(15px)",
          transition: "all 0.9s cubic-bezier(0.22,1,0.36,1)",
        }}
      >
        <h2
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(30px, 4vw, 52px)",
            fontWeight: 300,
            color: "var(--text-main)",
          }}
        >
          green grapes.
        </h2>
      {/*personal web text */}
      </div>
            <div
        style={{
          position: "absolute",
          bottom: "19%",
          right: "45%",
          zIndex: 2,
          textAlign: "left",
          opacity: subVis ? 1 : 0,
          transform: subVis ? "translateY(0)" : "translateY(15px)",
          transition: "all 0.9s cubic-bezier(0.22,1,0.36,1)",
        }}
      >
        <p
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "clamp(12px, 1.3vw, 16px)",
            color: "var(--text-light)",
            letterSpacing: 2,
            marginTop: 1,
          }}
        >
          personal web
        </p>
      </div>
    </div>
      {/* nav */}
      <nav
        style={{
          display: "flex",
          gap: "clamp(0px, 2vw, 100px)",
          marginTop: 0,
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        <NavButton
          label="Sweet"
          subtitle="Projects"
          imgSrc={images.sweet}
          imgW={60}
          imgH={60}
          onClick={() => onNavigate("projects")}
          delay={1200}
        />
        <NavButton
          label="Crunchy"
          subtitle="About Me"
          imgSrc={images.crunchy}
          imgW={75}
          imgH={62}
          onClick={() => onNavigate("about")}
          delay={1400}
        />
        <NavButton
          label="Cold"
          subtitle="Interests"
          imgSrc={images.cold}
          imgW={60}
          imgH={60}
          onClick={() => onNavigate("interests")}
          delay={1600}
        />
      </nav>
    </div>
  );
}
