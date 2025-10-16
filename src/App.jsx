import HeroSection from './pages/HeroSection'
import IntegrationDashboard from './pages/IntegrationDashboard'
import LandingPage from './pages/LandingPage'
import WorkflowHero from './pages/WorkflowHero'
import Header from './component/Header'
import ZentreeLanding from './pages/ZentreeLanding'
import TestimonialSection from './pages/TestimonialSection'
import PricingSection from './pages/PricingSection'
import FAQsSection from './pages/FAQsSection'
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
      <TestimonialSection />
      <PricingSection />
      <FAQsSection />
      <ContactCTASection />
      <Footer />
    </div>
  )
}

export default App
