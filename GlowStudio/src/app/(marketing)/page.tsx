import { BookingSection } from "@/features/booking/booking-section";
import { ExperienceSection } from "@/features/experience/experience-section";
import { GallerySection } from "@/features/gallery/gallery-section";
import { HeroSection } from "@/features/hero/hero-section";
import { ServicesSection } from "@/features/services/services-section";
import { VipSection } from "@/features/vip/vip-section";
import { SiteFooter } from "@/shared/components/navigation/site-footer";
import { SiteHeader } from "@/shared/components/navigation/site-header";

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main id="contenido">
        <HeroSection />
        <ServicesSection />
        <GallerySection />
        <ExperienceSection />
        <VipSection />
        <BookingSection />
      </main>
      <SiteFooter />
    </>
  );
}
