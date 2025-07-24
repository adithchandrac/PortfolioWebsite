import Container from "./Container";
import HowIBuildSection from "./HowIBuildSection";
import ContactForm from "./ContactForm";
import Particles from "@/blocks/Backgrounds/Particles/Particles";

export default function WorkflowAndContactSection() {
  return (
    <section className="w-full bg-black py-20 flex justify-center">
      <div className="relative w-full max-w-4xl rounded-3xl shadow-2xl overflow-hidden border border-white/20">
        {/* Particles background */}
        <div className="absolute inset-0 w-full h-full pointer-events-none select-none z-0">
          <Particles
            particleColors={['#ffffff', '#ffffff']}
            particleCount={200}
            particleSpread={10}
            speed={0.1}
            particleBaseSize={100}
            moveParticlesOnHover={true}
            alphaParticles={false}
            disableRotation={false}
          />
        </div>
        <Container>
          <div className="w-full space-y-16 relative z-10">
            <HowIBuildSection />
            <ContactForm />
          </div>
        </Container>
      </div>
    </section>
  );
}