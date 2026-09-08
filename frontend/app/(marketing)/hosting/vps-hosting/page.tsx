"use client"
import Pricing from '@/components/Pricing'
import Footer from '@/components/Footer'
import VPSHosting from "@/components/hosting/hosting-vps-hosting"
import IncludedFeatures from '@/components/features'
import MigrationSection from '@/components/MigrationSection'
import TrustBadge from '@/components/TrustComponent'

const WebHostingPage = () => {
  return (
    <>
      <VPSHosting />
      <TrustBadge/>
      <Pricing/>
      <IncludedFeatures/>
      <MigrationSection/>
      <Footer />
    </>
  )
}

export default WebHostingPage
