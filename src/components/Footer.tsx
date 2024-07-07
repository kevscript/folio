import { Container } from "./Container";
import { Socials } from "./Socials";
import { SecondaryButton } from "./SecondaryButton";
import { DownloadIcon } from "./icons/Download";

export function Footer() {
  return (
    <footer>
      <Container className="flex flex-col gap-16">
        <div className="flex justify-center gap-4 md:justify-between items-center">
          <Socials />

          <a
            href="/pdf/cv_ostafinski_kevin.pdf"
            target="_blank"
            title="Download CV"
            download="Ostafinski Kévin - CV.pdf"
          >
            <SecondaryButton icon={<DownloadIcon />}>Resume</SecondaryButton>
          </a>
        </div>
        <div className="flex flex-col md:flex-row gap-4 md:justify-between items-center text-zinc-500">
          <span>2024 - All rights reserved</span>
          <span>kevinostafinski@gmail.com</span>
        </div>
      </Container>
    </footer>
  );
}
