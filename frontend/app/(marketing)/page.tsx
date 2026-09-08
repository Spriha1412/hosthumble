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
    <TrustBadge/>
    <Pricing/>
    <IncludedFeatures/>
    <MigrationSection/>
    <FAQAndCTA/>
    <Footer/>
    </>
  )
}

export default page