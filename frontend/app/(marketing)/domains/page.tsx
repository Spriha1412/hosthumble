"use client"
import Pricing from '@/components/Pricing'
import Footer from '@/components/Footer'
import Domains from "@/components/domains/Domains"
import MigrationSection from '@/components/MigrationSection'
import IncludedFeatures from '@/components/features'
import TrustBadge from '@/components/TrustComponent'

const WebHostingPage = () => {
  return (
    <>
      <Domains />
      <TrustBadge/>
      <IncludedFeatures/>
      <MigrationSection/>
      <Pricing />
      <Footer />
    </>
  )
}

export default WebHostingPage
