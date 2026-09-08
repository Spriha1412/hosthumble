"use client"

import Pricing from '@/components/Pricing'
import Footer from '@/components/Footer'
import DedicatedServer from "@/components/hosting/hosting-dedicated-server"
import IncludedFeatures from '@/components/features'
import MigrationSection from '@/components/MigrationSection'
import TrustBadge from '@/components/TrustComponent'

const WebHostingPage = () => {
  return (
    <>
      <DedicatedServer />
      <TrustBadge/>
      <Pricing/>
      <IncludedFeatures/>
      <MigrationSection/>
      <Footer />
    </>
  )
}

export default WebHostingPage
