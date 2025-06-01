import { TextEffect } from '@/components/ui/text-effect';
import { Tilt } from '@/components/ui/tilt';
import { HeroHeader } from '@/components/header';
import HeroSection from '@/components/hero-section';
import { Spotlight } from '@/components/ui/spotlight';
import Features from '@/components/ui/features';
import ContentSection from '@/components/ui/content';
import FooterSection from '@/components/footer';
import { InViewImagesGrid } from '@/components/scroll-view';
import TeamSection from '@/components/team';
import FAQsTwo from '@/components/faq';
import { ModeToggle } from '@/components/mode-toggle';
function LandingPage() {

  return (
    <>
      <Spotlight
        className='from-blue-800 via-blue-600 to-blue-400 blur-xl dark:from-blue-900 dark:via-blue-500 dark:to-blue-900'
        size={64}
      />
      <HeroSection/>
      <Features/>
      <InViewImagesGrid/>
      <TeamSection/>
      <ContentSection/>
      <FAQsTwo/>
      <FooterSection/>
    </>
  )
}

export default LandingPage