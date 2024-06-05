import { Container } from "./Container";
import { Socials } from "./Socials";
import { SecondaryButton } from "./SecondaryButton";
import { DownloadIcon } from "./icons/Download";

export function Footer() {
  return (
    <footer>
      <Container className="flex flex-col gap-16">
        <div className="flex justify-between items-center">
          <Socials />

          <a href="/resume.pdf" target="_blank">
            <SecondaryButton icon={<DownloadIcon />}>Resume</SecondaryButton>
          </a>
        </div>
        <div className="flex justify-between items-center text-zinc-500">
          <span>2024 - All rights reserved</span>
          <span>Made with :brain: & :hands:</span>
        </div>
      </Container>
    </footer>
  );
}
