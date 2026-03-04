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
    </div>
  );
}
