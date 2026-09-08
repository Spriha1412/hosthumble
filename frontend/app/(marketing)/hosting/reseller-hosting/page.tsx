"use client"

import Pricing from '@/components/Pricing'
import Footer from '@/components/Footer'
import ResellerHosting from "@/components/hosting/hosting-reseller"
import MigrationSection from '@/components/MigrationSection'
import IncludedFeatures from '@/components/features'
import TrustBadge from '@/components/TrustComponent'

const WebHostingPage = () => {
  return (
    <>
      <ResellerHosting />
      <TrustBadge/>
      <Pricing/>
      <IncludedFeatures/>
      <MigrationSection/>
      <Footer />
    </>
  )
}

export default WebHostingPage
