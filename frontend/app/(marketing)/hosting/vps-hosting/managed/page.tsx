"use client"

import Pricing from '@/components/Pricing'
import Footer from '@/components/Footer'
import VPSHostingManaged from '@/components/hosting/hosting-vps-managed-hosting'
import IncludedFeatures from '@/components/features'
import MigrationSection from '@/components/MigrationSection'
import TrustBadge from '@/components/TrustComponent'

const WebHostingPage = () => {
  return (
    <>
      <VPSHostingManaged />
      <TrustBadge/>
      <Pricing/>
      <IncludedFeatures/>
      <MigrationSection/>
      <Footer />
    </>
  )
}

export default WebHostingPage
