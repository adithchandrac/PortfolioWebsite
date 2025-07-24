import Container from "./Container";
import HowIBuildSection from "./HowIBuildSection";
import ContactForm from "./ContactForm";

export default function WorkflowAndContactSection() {
  return (
    <section className="w-full bg-black py-20 flex justify-center">
      <div className="relative w-full max-w-4xl rounded-3xl shadow-2xl overflow-hidden">
        <Container>
          <div className="w-full space-y-16">
            <HowIBuildSection />
            <ContactForm />
          </div>
        </Container>
      </div>
    </section>
  );
}