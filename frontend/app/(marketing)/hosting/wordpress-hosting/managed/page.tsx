"use client"
import Pricing from '@/components/Pricing'
import Footer from '@/components/Footer'
import WordpressHostingManaged from '@/components/hosting/hosting-wordpress-managed'
import IncludedFeatures from '@/components/features'
import MigrationSection from '@/components/MigrationSection'
import TrustBadge from '@/components/TrustComponent'

const WebHostingPage = () => {
  return (
    <>
      <WordpressHostingManaged />
      <TrustBadge/>
      <Pricing/>
      <IncludedFeatures/>
      <MigrationSection/>
      <Footer />
    </>
  )
}

export default WebHostingPage
