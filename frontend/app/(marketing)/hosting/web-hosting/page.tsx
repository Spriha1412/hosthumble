"use client"
import WebHosting from "@/components/hosting/hosting-web-hosting"
import Pricing from '@/components/Pricing'
import Footer from '@/components/Footer'
import MigrationSection from "@/components/MigrationSection"
import IncludedFeatures from "@/components/features"
import TrustBadge from "@/components/TrustComponent"

const WebHostingPage = () => {
  return (
    <>
      <WebHosting />
      <TrustBadge/>
      <Pricing/>
      <IncludedFeatures/>
      <MigrationSection/>
      <Footer />
    </>
  )
}

export default WebHostingPage
