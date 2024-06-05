import { Container } from "./Container";
import { SectionTitle } from "./SectionTitle";
import { ContactForm } from "./ContactForm";

export function ContactSection() {
  return (
    <section>
      <Container>
        <SectionTitle label="Contact Me" />
        <ContactForm />
      </Container>
    </section>
  );
}
