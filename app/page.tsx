import { HeroSection } from "@/components/hero-section"
import { PrizeSection } from "@/components/prize-section"
import { CTASection } from "@/components/cta-section"
import { WhatsAppSection } from "@/components/whatsapp-section"
import { Footer } from "@/components/footer"

export default function PresellPage() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <PrizeSection />
      <CTASection />
      <WhatsAppSection />
      <Footer />
    </main>
  )
}
