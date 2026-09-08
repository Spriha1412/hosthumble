import FAQAndCTA from "@/components/FAQAndCTA"
import IncludedFeatures from "@/components/features"
import Footer from "@/components/Footer"
import HeroSection from "@/components/HeroSection"
import MigrationSection from "@/components/MigrationSection"
import Pricing from "@/components/Pricing"
import TrustBadge from "@/components/TrustComponent"

const page = () => {
  
  return (
    <>
    <HeroSection/>
    <div className="relative z-10 mt-8 w-full px-4 sm:px-6 md:mt-10">
      <TrustBadge/>
    </div>
    <Pricing/>
    <IncludedFeatures/>
    <MigrationSection/>
    <FAQAndCTA/>
    <Footer/>
    </>
  )
}

export default page