"use client"

import Pricing from '@/components/Pricing'
import Footer from '@/components/Footer'
import WordpressHosting from "@/components/hosting/hosting-wordpress"
import MigrationSection from '@/components/MigrationSection'
import IncludedFeatures from '@/components/features'
import TrustBadge from '@/components/TrustComponent'

const WebHostingPage = () => {
  return (
    <>
      <WordpressHosting />
      <TrustBadge/>
      <Pricing/>
      <IncludedFeatures/>
      <MigrationSection/>
      <Footer />
    </>
  )
}

export default WebHostingPage
