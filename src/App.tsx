import { useState, type ReactNode } from 'react'

// Types
interface FormData {
  vehicle: string
  vehicleYear: string
  currentGVM: string
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
        <span className="text-[#E7E515] font-black text-xl sm:text-2xl tracking-tight">GVM</span>
        <div className="text-white text-[8px] sm:text-[9px] leading-[1.1] font-medium tracking-wide">
          <div>UPGRADES</div>
          <div>AUSTRALIA</div>
        </div>
      </div>
      <button
        onClick={scrollToForm}
        className="bg-[#E7E515] text-[#1A1348] font-bold px-4 sm:px-6 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm hover:brightness-105 transition-all"
      >
        CONTACT US
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
            Find a GVM Upgrade<br />
            Installer in 60 Seconds
          </h1>
          <p className="text-white/75 text-sm sm:text-base leading-relaxed mb-7 max-w-md">
            Connect with experienced GVM upgrade installers in your local area. Submit your details and a suitable installer will contact you within 24 hours to discuss your vehicle and requirements.
          </p>
          <button
            onClick={scrollToForm}
            className="bg-[#E7E515] text-[#1A1348] font-bold px-6 py-3 rounded-full text-sm hover:brightness-105 transition-all inline-flex items-center gap-2"
          >
            FIND INSTALLER
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
              number="150+"
              title="Local Installer Network."
              subtitle="Matched by location across Australia."
            />
            <StatCard
              icon="truck"
              number="5,000+"
              title="GVM Upgrade Specialists."
              subtitle="Passenger & commercial vehicles."
            />
            <StatCard
              icon="shield"
              number="100%"
              title="Installer-led compliance."
              subtitle="Requirements confirmed directly."
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
    truck: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
        <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
        <path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H11a1 1 0 001-1v-1h3.05a2.5 2.5 0 014.9 0H20a1 1 0 001-1v-5a1 1 0 00-.293-.707l-4-4A1 1 0 0016 3h-5a1 1 0 00-1 1v1H3zm12 0h2.586L20 6.414V8h-5V4z" />
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
    vehicle: '',
    vehicleYear: '',
    currentGVM: '',
    location: '',
    contactDetails: { name: '', email: '', phone: '' }
  })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const totalSteps = 5

  const vehicles = [
    'Toyota LandCruiser 200 Series',
    'Toyota LandCruiser 300 Series',
    'Toyota Hilux',
    'Toyota Prado',
    'Ford Ranger',
    'Ford Everest',
    'Nissan Patrol',
    'Nissan Navara',
    'Mitsubishi Triton',
    'Mitsubishi Pajero Sport',
    'Isuzu D-Max',
    'Isuzu MU-X',
    'Mazda BT-50',
    'Other'
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
      case 1: return formData.vehicle !== ''
      case 2: return formData.vehicleYear !== ''
      case 3: return formData.currentGVM !== ''
      case 4: return formData.location !== ''
      case 5: return formData.contactDetails.name && formData.contactDetails.email && formData.contactDetails.phone
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
              A local GVM specialist will contact you within 24 hours to discuss your {formData.vehicle} upgrade options.
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
          <h2 className="text-xl sm:text-2xl font-bold text-[#1A1348] mb-1">Find a local GVM installer</h2>
          <p className="text-gray-500 text-sm mb-6">
            Takes 60 seconds. A local expert will contact you within 24 hours.
          </p>

          {/* Progress */}
          <div className="flex items-center justify-between mb-6 pb-5 border-b border-gray-100">
            <span className="text-xs text-gray-400 font-medium">Question {step} of {totalSteps}</span>
            <div className="flex gap-1.5">
              {Array.from({ length: totalSteps }).map((_, i) => (
                <div
                  key={i}
                  className={`w-8 h-1.5 rounded-full transition-colors ${
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
                  What vehicle do you need a GVM upgrade for?
                </label>
                <select
                  value={formData.vehicle}
                  onChange={(e) => setFormData({ ...formData, vehicle: e.target.value })}
                  className="w-full p-3.5 pr-10 border border-gray-200 rounded-xl text-[#1A1348] text-sm focus:outline-none focus:ring-2 focus:ring-[#E7E515]/50 focus:border-[#E7E515] bg-white"
                >
                  <option value="">Select your vehicle</option>
                  {vehicles.map((v) => <option key={v} value={v}>{v}</option>)}
                </select>
              </div>
            )}

            {step === 2 && (
              <div>
                <label className="block text-[#1A1348] text-sm font-medium mb-3">
                  What year is your vehicle?
                </label>
                <select
                  value={formData.vehicleYear}
                  onChange={(e) => setFormData({ ...formData, vehicleYear: e.target.value })}
                  className="w-full p-3.5 pr-10 border border-gray-200 rounded-xl text-[#1A1348] text-sm focus:outline-none focus:ring-2 focus:ring-[#E7E515]/50 focus:border-[#E7E515] bg-white"
                >
                  <option value="">Select year</option>
                  {Array.from({ length: 25 }, (_, i) => 2025 - i).map((y) =>
                    <option key={y} value={y}>{y}</option>
                  )}
                </select>
              </div>
            )}

            {step === 3 && (
              <div>
                <label className="block text-[#1A1348] text-sm font-medium mb-3">
                  What's your current GVM?
                </label>
                <select
                  value={formData.currentGVM}
                  onChange={(e) => setFormData({ ...formData, currentGVM: e.target.value })}
                  className="w-full p-3.5 pr-10 border border-gray-200 rounded-xl text-[#1A1348] text-sm focus:outline-none focus:ring-2 focus:ring-[#E7E515]/50 focus:border-[#E7E515] bg-white"
                >
                  <option value="">Select GVM</option>
                  {["I don't know", "Under 3,000 kg", "3,000 - 3,500 kg", "3,500 - 4,000 kg", "4,000 - 4,500 kg", "Over 4,500 kg"].map((g) =>
                    <option key={g} value={g}>{g}</option>
                  )}
                </select>
              </div>
            )}

            {step === 4 && (
              <div>
                <label className="block text-[#1A1348] text-sm font-medium mb-3">
                  Where are you located?
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

            {step === 5 && (
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
                className="px-6 py-3.5 border border-gray-200 text-[#1A1348] font-semibold rounded-full text-sm hover:bg-gray-50 transition-colors"
              >
                Back
              </button>
            )}
            <button
              onClick={handleNext}
              disabled={!canProceed()}
              className={`flex-1 py-3.5 rounded-full font-bold text-sm flex items-center justify-center gap-2 transition-all ${
                canProceed()
                  ? 'bg-[#E7E515] text-[#1A1348] hover:brightness-105'
                  : 'bg-gray-200 text-gray-400 cursor-not-allowed'
              }`}
            >
              {step === totalSteps ? 'SUBMIT' : 'CONTINUE'}
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
    { number: 1, badge: '60 seconds', title: 'Tell us about your vehicle', description: 'Complete the 60-second form with your vehicle details.' },
    { number: 2, badge: '24 hours', title: 'Speak with a local GVM specialist', description: 'A local GVM installer will reach out to assess your vehicle and next steps.' },
    { number: 3, badge: '2-4 weeks', title: 'Become compliant and capable', description: 'Compare your options and choose the best GVM solution to safely and legally carry your load.' }
  ]

  return (
    <section className="bg-white py-16 sm:py-20 px-4 sm:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10 sm:mb-14">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#1A1348] mb-2">How It Works</h2>
          <p className="text-gray-500 text-sm">Get your GVM upgrade sorted in three simple steps</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {steps.map((step) => (
            <div key={step.number}>
              {/* Image Placeholder */}
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-5 bg-gradient-to-br from-gray-200 to-gray-300">
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg className="w-12 h-12 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                    <path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H11a1 1 0 001-1v-1h3.05a2.5 2.5 0 014.9 0H20a1 1 0 001-1v-5a1 1 0 00-.293-.707l-4-4A1 1 0 0016 3h-5a1 1 0 00-1 1v1H3zm12 0h2.586L20 6.414V8h-5V4z" />
                  </svg>
                </div>
                <div className="absolute top-3 right-3 bg-[#E7E515] text-[#1A1348] text-[10px] font-bold px-2.5 py-1 rounded-full">
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

// Why GVM Section
function WhyGVMSection() {
  const features = [
    {
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
        </svg>
      ),
      title: 'Compliance-aware',
      description: 'We connect you with installers who understand engineering, certification, and state-based registration requirements relevant to GVM upgrades.'
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
          <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
        </svg>
      ),
      title: 'Nationwide installer network',
      description: 'Access a broad network of GVM specialists across Australia, supporting both pre-registration and post-registration upgrades.'
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
        </svg>
      ),
      title: 'Total transparency',
      description: "You're connected directly with installers, so you can ask the right questions and decide what works for your vehicle — no pressure, no middleman."
    }
  ]

  return (
    <section className="bg-[#F3EBD9] py-16 sm:py-20 px-4 sm:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10 sm:mb-14">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#1A1348] mb-2">Why GVM Upgrades Australia?</h2>
          <p className="text-gray-500 text-sm">A simpler way to connect with the right GVM installer</p>
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
    { question: 'How much does a GVM upgrade typically cost?', answer: 'GVM upgrade costs vary depending on your vehicle and the type of upgrade required. Typical costs range from $2,000 to $8,000+ including engineering certification and compliance.' },
    { question: 'Are GVM upgrades legal in Australia?', answer: 'Yes, GVM upgrades are legal in Australia when performed by certified installers and approved by a qualified engineer.' },
    { question: 'How long does the process take?', answer: 'The typical GVM upgrade process takes 2-4 weeks from initial consultation to completion.' },
    { question: 'Will my insurance cover the vehicle?', answer: "Most insurance providers will cover vehicles with properly certified GVM upgrades. It's important to notify your insurer of the modification." },
    { question: "What does 'ADR Compliant' mean?", answer: 'ADR stands for Australian Design Rules. An ADR-compliant GVM upgrade means the modification meets federal safety standards.' }
  ]

  const scrollToForm = () => {
    document.getElementById('form-section')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="bg-white py-16 sm:py-20 px-4 sm:px-8">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#1A1348] mb-2">Common Questions</h2>
          <p className="text-gray-500 text-sm">Everything you need to know about GVM upgrades</p>
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
            className="bg-[#E7E515] text-[#1A1348] font-bold px-8 py-3.5 rounded-full text-sm hover:brightness-105 transition-all inline-flex items-center gap-2"
          >
            FIND AN INSTALLER
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
          Ready to upgrade your vehicle?
        </h2>
        <p className="text-white/60 text-sm mb-8 max-w-md mx-auto">
          Get connected with a local GVM installer to discuss the right setup for your vehicle and move forward.
        </p>
        <button
          onClick={scrollToForm}
          className="bg-[#E7E515] text-[#1A1348] font-bold px-8 py-3.5 rounded-full text-sm hover:brightness-105 transition-all inline-flex items-center gap-2"
        >
          FIND AN INSTALLER
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
      <WhyGVMSection />
      <FAQSection />
      <FinalCTASection />
    </div>
  )
}

export default App
