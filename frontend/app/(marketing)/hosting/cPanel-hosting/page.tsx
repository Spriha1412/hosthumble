"use client"
import Pricing from '@/components/Pricing'
import Footer from '@/components/Footer'
import CPanelHosting from "@/components/hosting/hosting-cPanel"
import IncludedFeatures from '@/components/features'
import MigrationSection from '@/components/MigrationSection'
import TrustBadge from '@/components/TrustComponent'

const WebHostingPage = () => {
  return (
    <>
      <CPanelHosting />
      <TrustBadge/>
      <Pricing/>
      <IncludedFeatures/>
      <MigrationSection/>
      <Footer />
    </>
  )
}

export default WebHostingPage
