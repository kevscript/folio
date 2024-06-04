import { AboutSection } from "@/components/AboutSection";
import { Divider } from "@/components/Divider";
import { Footer } from "@/components/Footer";
import { ProfileSection } from "@/components/ProfileSection";
import { ProjectSection } from "@/components/ProjectSection";

export default async function Home() {
  return (
    <main className="my-24">
      <ProfileSection />
      <Divider />
      <AboutSection />
      <Divider />
      <ProjectSection />
      <Divider />
      <Footer />
    </main>
  );
}
