import { AboutSection } from "@/components/AboutSection";
import { ContactSection } from "@/components/ContactSection";
import { Divider } from "@/components/Divider";
import { Footer } from "@/components/Footer";
import { ProfileSection } from "@/components/ProfileSection";
import { ProjectSection } from "@/components/ProjectSection";
import { ToastContainer } from "react-toastify";

export default async function Home() {
  return (
    <main className="my-24">
      <ProfileSection />
      <Divider />
      <AboutSection />
      <Divider />
      <ProjectSection />
      <Divider />
      <ContactSection />
      <Divider />
      <Footer />
      <ToastContainer theme="dark" bodyClassName="text-sm" />
    </main>
  );
}
