import { Container } from "./Container";
import { Hello } from "./Hello";
import { SectionTitle } from "./SectionTitle";

export function AboutSection() {
  return (
    <section>
      <Container className="flex flex-col gap-16">
        <SectionTitle label="About me" />

        <div className="flex flex-col gap-4 leading-loose">
          <Hello />

          <p>
            I&apos;m Kévin, a <strong>web developer</strong> based in Paris.
            Since 2017 most of my coding journey has been dedicated to the{" "}
            <strong>front-end</strong> side of things, leveraging the power of
            modern tools to build pleasing user experiences. Specializing in{" "}
            <strong>Javascript</strong> & <strong>React</strong> ecosystem.
          </p>

          <p>
            In my spare time, I work on improving my passion project - Gonerank,
            a sport performance rating plateform developed for Lyon&apos;s
            football fans.
          </p>

          <p>
            I&apos;m also an active member of AideEducation, a non-profit
            organization helping students in their educational journey. I&apos;m
            currently in charge of the technical and visual overhaul of their
            website.
          </p>

          <p>
            Looking for an <strong>entry-level</strong> role or an{" "}
            <strong>apprenticeship</strong> in Paris area for 2024!
          </p>
        </div>
      </Container>
    </section>
  );
}
