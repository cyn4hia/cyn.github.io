import BackButton from "../components/BackButton";
import FadeIn from "../components/FadeIn";
import PageHeader from "../components/PageHeader";
import images from "../assets/images";

export default function AboutPage({ onBack }) {
  return (
    <div style={{ minHeight: "100vh", background: "#fff", padding: "80px 40px 60px" }}>
      <BackButton onClick={onBack} />

      <div style={{ maxWidth: 750, margin: "0 auto" }}>
        <FadeIn delay={200}>
          <PageHeader
            title="Crunchy"
            subtitle="About Me"
            imgSrc={images.crunchy}
            imgW={55}
            imgH={40}
          />
        </FadeIn>
      </div>

      <div>
        <img
        src={images.mango}
        alt="mango"
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
      </div>
    </div>
  );
}
