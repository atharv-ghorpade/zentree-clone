import HeroSection from './pages/HeroSection'
import IntegrationDashboard from './pages/IntegrationDashboard'
import LandingPage from './pages/LandingPage'
import WorkflowHero from './pages/WorkflowHero'
import Header from './component/Header'
import ZentreeLanding from './pages/ZentreeLanding'
import EarningsCalculator from './pages/EarningsCalculator'
import CommunityBenefits from './pages/CommunityBenefits'
import TestimonialSection from './pages/TestimonialSection'
import PricingSection from './pages/PricingSection'
import PlatformSelection from './pages/PlatformSelection'
import FAQsSection from './pages/FAQsSection'
import LaunchCTA from './pages/LaunchCTA'
import ContactCTASection from './pages/ContactCTASection'
import Footer from './component/Footer'

function App() {
  return (
    <div>
      <Header />
      <HeroSection />
      <IntegrationDashboard />
      <LandingPage />
      <WorkflowHero />
      <ZentreeLanding />
      <EarningsCalculator />
      <CommunityBenefits />
      <TestimonialSection />
      <PricingSection />
      <PlatformSelection />
      <LaunchCTA />
      <FAQsSection />
      <ContactCTASection />
      <Footer />
    </div>
  )
}

export default App
