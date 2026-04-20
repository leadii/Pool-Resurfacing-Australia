import { useState, type ReactNode } from 'react'

// Types
interface FormData {
  poolType: string
  poolSize: string
  currentCondition: string
  preferredFinish: string
  location: string
  contactDetails: {
    name: string
    email: string
    phone: string
  }
}

// Icons
const CheckIcon = () => (
  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
  </svg>
)

const ChevronDownIcon = ({ isOpen }: { isOpen: boolean }) => (
  <svg
    className={`w-5 h-5 text-[#1A1348] transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
  </svg>
)

const ArrowIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
  </svg>
)

// Header Component
function Header() {
  const scrollToForm = () => {
    document.getElementById('form-section')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header className="bg-[#1A1348] px-4 sm:px-8 lg:px-12 py-4 flex items-center justify-between">
      <div className="flex items-center gap-1">
        <span className="text-[#E7E515] font-black text-xl sm:text-2xl tracking-tight">Pool Resurfacing</span>
        <div className="text-white text-[8px] sm:text-[9px] leading-[1.1] font-medium tracking-wide">
          <div>AUSTRALIA</div>
        </div>
      </div>
      <button
        onClick={scrollToForm}
        className="bg-[#E7E515] text-[#1A1348] font-bold px-4 sm:px-6 py-2 sm:py-2.5 rounded-lg text-xs sm:text-sm hover:brightness-105 transition-all"
      >
        GET QUOTES
      </button>
    </header>
  )
}

// Hero Section
function HeroSection() {
  const scrollToForm = () => {
    document.getElementById('form-section')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="bg-[#1A1348] relative min-h-[500px] sm:min-h-[550px]">
      {/* Background Image with overlay */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `linear-gradient(rgba(26, 19, 72, 0.6), rgba(26, 19, 72, 0.6)), url('/Header.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
          backgroundRepeat: 'no-repeat'
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 pt-12 sm:pt-16 pb-32 sm:pb-40">
        <div className="max-w-xl">
          <h1 className="text-white text-3xl sm:text-4xl lg:text-5xl font-bold leading-[1.15] mb-5">
            Find a Pool Resurfacing<br />
            Specialist in 60 Seconds
          </h1>
          <p className="text-white/75 text-sm sm:text-base leading-relaxed mb-7 max-w-md">
            Connect with experienced pool resurfacing specialists in your local area. Submit your details and a trusted specialist will contact you within 24 hours to discuss your pool and provide a quote.
          </p>
          <button
            onClick={scrollToForm}
            className="bg-[#E7E515] text-[#1A1348] font-bold px-6 py-3 rounded-lg text-sm hover:brightness-105 transition-all inline-flex items-center gap-2"
          >
            GET FREE QUOTES
            <ArrowIcon />
          </button>
        </div>
      </div>

      {/* Stats Cards - positioned at bottom within hero */}
      <div className="absolute bottom-6 sm:bottom-8 left-0 right-0 z-20 px-4 sm:px-8 lg:px-12">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
            <StatCard
              icon="wrench"
              number="100+"
              title="Local Specialist Network"
              subtitle="Matched by location across Australia"
            />
            <StatCard
              icon="pool"
              number="10,000+"
              title="Pools Resurfaced"
              subtitle="All pool types and finishes"
            />
            <StatCard
              icon="shield"
              number="100%"
              title="Free, No-Obligation Quotes"
              subtitle="Compare options before you commit"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

function StatCard({ icon, number, title, subtitle }: {
  icon: string
  number: string
  title: string
  subtitle: string
}) {
  const icons: Record<string, ReactNode> = {
    wrench: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
      </svg>
    ),
    pool: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
      </svg>
    ),
    shield: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
      </svg>
    )
  }

  return (
    <div className="bg-white/20 backdrop-blur-sm border border-white/30 rounded-2xl p-4 sm:p-5 flex items-start gap-3">
      <div className="bg-[#E7E515] p-2.5 rounded-xl text-[#1A1348] shrink-0">
        {icons[icon]}
      </div>
      <div className="min-w-0">
        <div className="text-xl sm:text-2xl font-bold text-white leading-tight">{number}</div>
        <div className="text-xs sm:text-sm font-bold text-white/90 leading-tight mt-0.5">{title}</div>
        <div className="text-[10px] sm:text-xs text-white/70 leading-tight mt-0.5">{subtitle}</div>
      </div>
    </div>
  )
}

// Form Section
function FormSection() {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState<FormData>({
    poolType: '',
    poolSize: '',
    currentCondition: '',
    preferredFinish: '',
    location: '',
    contactDetails: { name: '', email: '', phone: '' }
  })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const totalSteps = 6

  const poolTypes = [
    'Concrete',
    'Fibreglass',
    'Vinyl Liner',
    'Not sure'
  ]

  const poolSizes = [
    'Small (under 30,000L)',
    'Medium (30,000-50,000L)',
    'Large (50,000-80,000L)',
    'Extra Large (over 80,000L)',
    'Not sure'
  ]

  const conditions = [
    'Cracked or chipped',
    'Faded or discoloured',
    'Rough or abrasive surface',
    'Stained or marked',
    'Leaking',
    'Multiple issues',
    'Just looking to refresh'
  ]

  const finishes = [
    'Pebblecrete',
    'Fibreglass coating',
    'Pool tiles',
    'Quartz aggregate',
    'Not sure yet'
  ]

  const handleNext = () => {
    if (step < totalSteps) setStep(step + 1)
    else setIsSubmitted(true)
  }

  const handleBack = () => {
    if (step > 1) setStep(step - 1)
  }

  const canProceed = () => {
    switch (step) {
      case 1: return formData.poolType !== ''
      case 2: return formData.poolSize !== ''
      case 3: return formData.currentCondition !== ''
      case 4: return formData.preferredFinish !== ''
      case 5: return formData.location !== ''
      case 6: return formData.contactDetails.name && formData.contactDetails.email && formData.contactDetails.phone
      default: return false
    }
  }

  if (isSubmitted) {
    return (
      <section id="form-section" className="bg-[#F3EBD9] pt-12 sm:pt-16 pb-16 px-4 sm:px-8">
        <div className="max-w-xl mx-auto">
          <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-xl text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-5">
              <CheckIcon />
            </div>
            <h2 className="text-2xl font-bold text-[#1A1348] mb-3">Thank you!</h2>
            <p className="text-gray-600 text-sm">
              A local pool resurfacing specialist will contact you within 24 hours to discuss your {formData.preferredFinish.toLowerCase()} options and provide a quote.
            </p>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="form-section" className="bg-[#F3EBD9] pt-12 sm:pt-16 pb-16 px-4 sm:px-8">
      <div className="max-w-xl mx-auto">
        <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-xl">
          <h2 className="text-xl sm:text-2xl font-bold text-[#1A1348] mb-1">Get free pool resurfacing quotes</h2>
          <p className="text-gray-500 text-sm mb-6">
            Takes 60 seconds. A local specialist will contact you within 24 hours.
          </p>

          {/* Progress */}
          <div className="flex items-center justify-between mb-6 pb-5 border-b border-gray-100">
            <span className="text-xs text-gray-400 font-medium">Question {step} of {totalSteps}</span>
            <div className="flex gap-1.5">
              {Array.from({ length: totalSteps }).map((_, i) => (
                <div
                  key={i}
                  className={`w-6 h-1.5 rounded-full transition-colors ${
                    i + 1 <= step ? 'bg-[#E7E515]' : 'bg-gray-200'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Form Content */}
          <div className="min-h-[140px]">
            {step === 1 && (
              <div>
                <label className="block text-[#1A1348] text-sm font-medium mb-3">
                  What type of pool do you have?
                </label>
                <select
                  value={formData.poolType}
                  onChange={(e) => setFormData({ ...formData, poolType: e.target.value })}
                  className="w-full p-3.5 pr-10 border border-gray-200 rounded-xl text-[#1A1348] text-sm focus:outline-none focus:ring-2 focus:ring-[#E7E515]/50 focus:border-[#E7E515] bg-white"
                >
                  <option value="">Select pool type</option>
                  {poolTypes.map((t) => <option key={t} value={t}>{t}</option>)}
                </select>
              </div>
            )}

            {step === 2 && (
              <div>
                <label className="block text-[#1A1348] text-sm font-medium mb-3">
                  What size is your pool?
                </label>
                <select
                  value={formData.poolSize}
                  onChange={(e) => setFormData({ ...formData, poolSize: e.target.value })}
                  className="w-full p-3.5 pr-10 border border-gray-200 rounded-xl text-[#1A1348] text-sm focus:outline-none focus:ring-2 focus:ring-[#E7E515]/50 focus:border-[#E7E515] bg-white"
                >
                  <option value="">Select pool size</option>
                  {poolSizes.map((s) => <option key={s} value={s}>{s}</option>)}
                </select>
              </div>
            )}

            {step === 3 && (
              <div>
                <label className="block text-[#1A1348] text-sm font-medium mb-3">
                  What's the current condition of your pool surface?
                </label>
                <select
                  value={formData.currentCondition}
                  onChange={(e) => setFormData({ ...formData, currentCondition: e.target.value })}
                  className="w-full p-3.5 pr-10 border border-gray-200 rounded-xl text-[#1A1348] text-sm focus:outline-none focus:ring-2 focus:ring-[#E7E515]/50 focus:border-[#E7E515] bg-white"
                >
                  <option value="">Select condition</option>
                  {conditions.map((c) => <option key={c} value={c}>{c}</option>)}
                </select>
              </div>
            )}

            {step === 4 && (
              <div>
                <label className="block text-[#1A1348] text-sm font-medium mb-3">
                  What resurfacing finish are you interested in?
                </label>
                <select
                  value={formData.preferredFinish}
                  onChange={(e) => setFormData({ ...formData, preferredFinish: e.target.value })}
                  className="w-full p-3.5 pr-10 border border-gray-200 rounded-xl text-[#1A1348] text-sm focus:outline-none focus:ring-2 focus:ring-[#E7E515]/50 focus:border-[#E7E515] bg-white"
                >
                  <option value="">Select finish</option>
                  {finishes.map((f) => <option key={f} value={f}>{f}</option>)}
                </select>
              </div>
            )}

            {step === 5 && (
              <div>
                <label className="block text-[#1A1348] text-sm font-medium mb-3">
                  Where is your pool located?
                </label>
                <select
                  value={formData.location}
                  onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                  className="w-full p-3.5 pr-10 border border-gray-200 rounded-xl text-[#1A1348] text-sm focus:outline-none focus:ring-2 focus:ring-[#E7E515]/50 focus:border-[#E7E515] bg-white"
                >
                  <option value="">Select your state</option>
                  {['New South Wales', 'Victoria', 'Queensland', 'Western Australia', 'South Australia', 'Tasmania', 'Northern Territory', 'ACT'].map((s) =>
                    <option key={s} value={s}>{s}</option>
                  )}
                </select>
              </div>
            )}

            {step === 6 && (
              <div className="space-y-3">
                <label className="block text-[#1A1348] text-sm font-medium mb-3">
                  Your contact details
                </label>
                <input
                  type="text"
                  placeholder="Full name"
                  value={formData.contactDetails.name}
                  onChange={(e) => setFormData({
                    ...formData,
                    contactDetails: { ...formData.contactDetails, name: e.target.value }
                  })}
                  className="w-full p-3.5 border border-gray-200 rounded-xl text-[#1A1348] text-sm focus:outline-none focus:ring-2 focus:ring-[#E7E515]/50 focus:border-[#E7E515]"
                />
                <input
                  type="email"
                  placeholder="Email address"
                  value={formData.contactDetails.email}
                  onChange={(e) => setFormData({
                    ...formData,
                    contactDetails: { ...formData.contactDetails, email: e.target.value }
                  })}
                  className="w-full p-3.5 border border-gray-200 rounded-xl text-[#1A1348] text-sm focus:outline-none focus:ring-2 focus:ring-[#E7E515]/50 focus:border-[#E7E515]"
                />
                <input
                  type="tel"
                  placeholder="Phone number"
                  value={formData.contactDetails.phone}
                  onChange={(e) => setFormData({
                    ...formData,
                    contactDetails: { ...formData.contactDetails, phone: e.target.value }
                  })}
                  className="w-full p-3.5 border border-gray-200 rounded-xl text-[#1A1348] text-sm focus:outline-none focus:ring-2 focus:ring-[#E7E515]/50 focus:border-[#E7E515]"
                />
              </div>
            )}
          </div>

          {/* Buttons */}
          <div className="flex gap-3 mt-6">
            {step > 1 && (
              <button
                onClick={handleBack}
                className="px-6 py-3.5 border border-gray-200 text-[#1A1348] font-semibold rounded-lg text-sm hover:bg-gray-50 transition-colors"
              >
                Back
              </button>
            )}
            <button
              onClick={handleNext}
              disabled={!canProceed()}
              className={`flex-1 py-3.5 rounded-lg font-bold text-sm flex items-center justify-center gap-2 transition-all ${
                canProceed()
                  ? 'bg-[#E7E515] text-[#1A1348] hover:brightness-105'
                  : 'bg-gray-200 text-gray-400 cursor-not-allowed'
              }`}
            >
              {step === totalSteps ? 'GET MY QUOTES' : 'CONTINUE'}
              <ArrowIcon />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

// How It Works Section
function HowItWorksSection() {
  const steps = [
    { number: 1, badge: '60 seconds', title: 'Tell us about your pool', description: 'Complete the 60-second form with your pool details and resurfacing preferences.' },
    { number: 2, badge: '24 hours', title: 'Speak with a local specialist', description: 'A trusted pool resurfacing specialist will contact you to discuss your options and provide a quote.' },
    { number: 3, badge: '1-2 weeks', title: 'Get your pool transformed', description: 'Compare quotes, choose your preferred specialist, and enjoy a beautifully resurfaced pool.' }
  ]

  return (
    <section className="bg-white py-16 sm:py-20 px-4 sm:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10 sm:mb-14">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#1A1348] mb-2">How It Works</h2>
          <p className="text-gray-500 text-sm">Get your pool resurfaced in three simple steps</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {steps.map((step) => (
            <div key={step.number}>
              {/* Image Placeholder */}
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-5 bg-gradient-to-br from-[#1A1348]/10 to-[#1A1348]/20">
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg className="w-12 h-12 text-[#1A1348]/30" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="absolute top-3 right-3 bg-[#E7E515] text-[#1A1348] text-[10px] font-bold px-2.5 py-1 rounded-lg">
                  {step.badge}
                </div>
              </div>

              {/* Content */}
              <div className="flex items-start gap-3">
                <div className="w-7 h-7 bg-[#F3EBD9] rounded-full flex items-center justify-center text-[#1A1348] font-bold text-xs shrink-0">
                  {step.number}
                </div>
                <div>
                  <h3 className="font-bold text-[#1A1348] text-sm mb-1">{step.title}</h3>
                  <p className="text-gray-500 text-xs leading-relaxed">{step.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Why Pool Resurfacing Section
function WhyPoolResurfacingSection() {
  const features = [
    {
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
        </svg>
      ),
      title: 'Vetted specialists only',
      description: 'We connect you with experienced, licensed pool resurfacing professionals who deliver quality workmanship and stand behind their work.'
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
          <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
        </svg>
      ),
      title: 'Australia-wide network',
      description: 'Access our network of pool resurfacing specialists across Australia, from metro areas to regional locations.'
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
        </svg>
      ),
      title: 'Compare before you commit',
      description: "Get quotes and speak with specialists before making any decisions. No pressure, no obligation - just the information you need."
    }
  ]

  return (
    <section className="bg-[#F3EBD9] py-16 sm:py-20 px-4 sm:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10 sm:mb-14">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#1A1348] mb-2">Why Pool Resurfacing Australia?</h2>
          <p className="text-gray-500 text-sm">A simpler way to find the right pool resurfacing specialist</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {features.map((feature, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 sm:p-7">
              <div className="w-11 h-11 bg-[#E7E515]/20 rounded-xl flex items-center justify-center text-[#1A1348] mb-5">
                {feature.icon}
              </div>
              <h3 className="font-bold text-[#1A1348] mb-2">{feature.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// FAQ Section
function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqs = [
    { question: 'How much does pool resurfacing cost?', answer: 'Pool resurfacing costs typically range from $10,000 to $35,000+ depending on pool size, condition, and the finish you choose. Pebblecrete starts around $10,000, while premium quartz aggregate finishes can exceed $30,000 for larger pools.' },
    { question: 'How long does pool resurfacing take?', answer: 'Most pool resurfacing projects take 1-2 weeks from start to finish, depending on the size of your pool and the type of finish. Your specialist will provide a timeline specific to your project.' },
    { question: 'How do I know if my pool needs resurfacing?', answer: 'Common signs include rough or abrasive surfaces, visible cracks or chips, staining that won\'t clean off, fading colour, and water loss from leaks. If your pool surface is more than 10-15 years old, it\'s worth getting an assessment.' },
    { question: 'What resurfacing options are available?', answer: 'The main options are pebblecrete (natural pebble finish), fibreglass coating (smooth, waterproof), ceramic or glass tiles (premium look), and quartz aggregate (luxurious crystal finish). Each has different lifespans, aesthetics, and price points.' },
    { question: 'Is the quote really free?', answer: 'Yes, completely free and no-obligation. Our specialists will assess your pool, discuss your options, and provide a detailed quote at no cost. You\'re under no pressure to proceed.' }
  ]

  const scrollToForm = () => {
    document.getElementById('form-section')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="bg-white py-16 sm:py-20 px-4 sm:px-8">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#1A1348] mb-2">Common Questions</h2>
          <p className="text-gray-500 text-sm">Everything you need to know about pool resurfacing</p>
        </div>

        <div className="space-y-3 mb-10">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-[#F3EBD9] rounded-2xl overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full p-5 text-left flex items-center justify-between gap-4"
              >
                <span className="font-medium text-[#1A1348] text-sm">{faq.question}</span>
                <ChevronDownIcon isOpen={openIndex === index} />
              </button>
              <div className={`overflow-hidden transition-all duration-300 ${openIndex === index ? 'max-h-48' : 'max-h-0'}`}>
                <p className="px-5 pb-5 text-gray-600 text-sm leading-relaxed">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button
            onClick={scrollToForm}
            className="bg-[#E7E515] text-[#1A1348] font-bold px-8 py-3.5 rounded-lg text-sm hover:brightness-105 transition-all inline-flex items-center gap-2"
          >
            GET FREE QUOTES
            <ArrowIcon />
          </button>
        </div>
      </div>
    </section>
  )
}

// Final CTA Section
function FinalCTASection() {
  const scrollToForm = () => {
    document.getElementById('form-section')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="bg-[#1A1348] py-16 sm:py-20 px-4 sm:px-8">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
          Ready to transform your pool?
        </h2>
        <p className="text-white/60 text-sm mb-8 max-w-md mx-auto">
          Get connected with a local pool resurfacing specialist to discuss your options and receive a free, no-obligation quote.
        </p>
        <button
          onClick={scrollToForm}
          className="bg-[#E7E515] text-[#1A1348] font-bold px-8 py-3.5 rounded-lg text-sm hover:brightness-105 transition-all inline-flex items-center gap-2"
        >
          GET FREE QUOTES
          <ArrowIcon />
        </button>
      </div>
    </section>
  )
}

// Main App
function App() {
  return (
    <div className="min-h-screen bg-[#F3EBD9]">
      <Header />
      <HeroSection />
      <FormSection />
      <HowItWorksSection />
      <WhyPoolResurfacingSection />
      <FAQSection />
      <FinalCTASection />
    </div>
  )
}

export default App
