import BackButton from "../components/BackButton";
import FadeIn from "../components/FadeIn";
import PageHeader from "../components/PageHeader";
import InterestCard from "../components/InterestCard";
import images from "../assets/images";

export default function InterestsPage({ onBack }) {
  return (
    <div style={{ minHeight: "100vh", background: "#fff", padding: "80px 40px 60px" }}>
      <BackButton onClick={onBack} />

      <div style={{ maxWidth: 800, margin: "0 auto" }}>
        <FadeIn delay={200}>
          <PageHeader
            title="Cold"
            subtitle="Interests"
            imgSrc={images.cold}
            imgW={40}
            imgH={40}
          />
        </FadeIn>
      </div>
    </div>
  );
}
