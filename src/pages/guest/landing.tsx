import { TextEffect } from '@/components/ui/text-effect';
import { Tilt } from '@/components/ui/tilt';
import { HeroHeader } from '@/components/header';
import HeroSection from '@/components/hero-section';
import { Spotlight } from '@/components/ui/spotlight';
import Features from '@/components/ui/features';
import ContentSection from '@/components/ui/content';
function LandingPage() {

  return (
    <>
      <Spotlight
        className='from-blue-800 via-blue-600 to-blue-400 blur-xl dark:from-blue-900 dark:via-blue-500 dark:to-blue-900'
        size={64}
      />
      <HeroHeader/>
      <HeroSection/>
      <Features/>
      <ContentSection/>
    </>
  )
}

export default LandingPage