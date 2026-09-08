"use client"
import Pricing from '@/components/Pricing'
import Footer from '@/components/Footer'
import BusinessEmail from "@/components/businessEmail/businessEmail"
import MigrationSection from '@/components/MigrationSection'
import IncludedFeatures from '@/components/features'
import TrustBadge from '@/components/TrustComponent'

const WebHostingPage = () => {
  return (
    <>
      <BusinessEmail />
      <TrustBadge/>
      <IncludedFeatures/>
      <MigrationSection/>
      <Pricing />
      <Footer />
    </>
  )
}

export default WebHostingPage
