import { Layout } from "@/components/layout/Layout";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Server, Shield, Bot, Lightbulb, CheckCircle, ArrowRight, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import { useContactModal } from "@/components/ContactModal";

const serviceCategories = [
  {
    id: "managed-it",
    icon: Server,
    title: "Managed IT Services",
    description: "Comprehensive IT support that keeps your business running smoothly",
    features: [
      "24/7 monitoring and support",
      "Help desk and end-user support",
      "Network management & firewalls",
      "Hardware and software lifecycle management",
      "Vendor management",
      "Cloud infrastructure management",
      "Advanced patching",
      "Tenant backups (M365/cloud)",
      "Endpoint backups",
      "Disaster recovery & backup",
    ],
    cta: "Learn more about Managed IT",
  },
  {
    id: "cybersecurity",
    icon: Shield,
    title: "Cybersecurity & Compliance",
    description: "Protect your business and meet regulatory requirements with confidence",
    features: [
      "EDR/AV (Endpoint Detection & Response)",
      "Ringfencing (application isolation)",
      "SASE/SD-WAN (Secure Access Service Edge)",
      "DNS filtering",
      "Anti-spam, DLP & phishing protection",
      "Mobile device security (MDM)",
      "Dark web monitoring",
      "Training & simulations (security awareness)",
      "CSRA (Cybersecurity Risk Assessment)",
      "Cyberinsurance readiness",
      "HIPAA, SOC 2 & regulatory compliance",
      "Incident response planning",
    ],
    cta: "Strengthen Your Security Posture",
  },
  {
    id: "ai-automation",
    icon: Bot,
    title: "AI & Automation Solutions",
    description: "Leverage intelligent automation to transform your operations",
    features: [
      "Business process automation",
      "AI-powered workflow optimization",
      "Intelligent document processing",
      "Custom automation development",
      "AI strategy consulting",
    ],
    cta: "Explore AI Solutions",
  },
  {
    id: "consulting",
    icon: Lightbulb,
    title: "Strategic IT Consulting",
    description: "Expert guidance to align technology with your business goals",
    features: [
      "vCISO (Virtual Chief Information Security Officer)",
      "Technology roadmap development",
      "IT budgeting and planning",
      "Digital transformation strategy",
      "Infrastructure architecture",
      "M&A technology due diligence",
      "Projects (rebuilds, migrations, etc.)",
    ],
    cta: "Schedule a Strategy Session",
  },
];

export default function Services() {
  const { openModal } = useContactModal();

  return (
    <Layout>
      {/* Hero Section */}
      <section
        className="relative overflow-hidden hero-grid-pattern py-20 md:py-28 lg:py-32"
        style={{ background: 'linear-gradient(160deg, hsl(214 52% 8%) 0%, hsl(210 50% 11%) 50%, hsl(214 52% 8%) 100%)' }}
      >
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div className="absolute -top-24 -left-24 h-96 w-96 rounded-full blur-[120px] opacity-[0.07]" style={{ background: 'hsl(19 63% 47%)' }} />
          <div className="absolute -bottom-24 -right-24 h-96 w-96 rounded-full blur-[100px] opacity-[0.06]" style={{ background: 'hsl(197 60% 35%)' }} />
        </div>

        <div className="container relative z-10 mx-auto px-4 lg:px-8" style={{ maxWidth: '1200px' }}>
          <div className="mx-auto max-w-4xl text-center">
            <p className="label-caps mb-5" style={{ color: 'hsl(19 63% 55%)' }}>What We Offer</p>
            <h1 className="text-4xl font-bold leading-tight tracking-tight text-white md:text-5xl lg:text-6xl">
              Technology Solutions That Drive Your Business Forward
            </h1>
            <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed" style={{ color: '#b0bec5' }}>
              From day-to-day IT support to AI-powered automation, we deliver the expertise you need.
            </p>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce-subtle" style={{ opacity: 0.4 }}>
          <ChevronDown className="h-7 w-7 text-white" />
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, hsl(197 40% 22%), transparent)' }} />
      </section>

      {/* Service Categories */}
      <section className="py-24 md:py-32" style={{ background: 'hsl(214 52% 8%)' }}>
        <div className="container mx-auto px-4 lg:px-8" style={{ maxWidth: '1200px' }}>
          <div className="grid gap-8 lg:grid-cols-2">
            {serviceCategories.map((category, index) => (
              <div
                key={category.id}
                className="group relative overflow-hidden rounded-2xl p-8 md:p-10 transition-all duration-300"
                style={{
                  background: 'hsl(210 50% 12%)',
                  border: '1px solid hsl(197 40% 20%)',
                  boxShadow: '0 4px 16px hsl(214 52% 3% / 0.4)',
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget;
                  el.style.borderColor = 'hsl(197 60% 35% / 0.55)';
                  el.style.boxShadow = '0 0 24px hsl(197 60% 35% / 0.1), 0 8px 32px hsl(214 52% 3% / 0.5)';
                  el.style.transform = 'translateY(-3px)';
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget;
                  el.style.borderColor = 'hsl(197 40% 20%)';
                  el.style.boxShadow = '0 4px 16px hsl(214 52% 3% / 0.4)';
                  el.style.transform = 'translateY(0)';
                }}
              >
                {/* Corner accent glow */}
                <div className="absolute top-0 right-0 -mt-8 -mr-8 h-32 w-32 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" style={{ background: 'hsl(19 63% 47% / 0.08)' }} />

                <div className="relative z-10">
                  <div
                    className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl transition-all duration-200 group-hover:scale-110"
                    style={{ background: 'hsl(210 50% 10%)', border: '2px solid hsl(19 63% 47% / 0.35)' }}
                  >
                    <category.icon className="h-7 w-7" style={{ color: 'hsl(19 63% 55%)' }} />
                  </div>

                  <h3 className="mb-3 text-2xl font-bold text-white">
                    {category.title}
                  </h3>
                  <p className="mb-8 leading-relaxed" style={{ color: '#b0bec5' }}>
                    {category.description}
                  </p>

                  <ul className="mb-8 grid gap-3 sm:grid-cols-2">
                    {category.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2.5 text-sm" style={{ color: 'hsl(210 15% 65%)' }}>
                        <CheckCircle className="mt-0.5 h-4 w-4 shrink-0" style={{ color: 'hsl(19 63% 47% / 0.7)' }} />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-3">
                    <button
                      className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold rounded-full border transition-all duration-200 hover:-translate-y-0.5"
                      style={{ borderColor: 'hsl(197 40% 28%)', color: 'hsl(197 60% 55%)', background: 'transparent' }}
                      onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.borderColor = 'hsl(197 60% 40%)'; (e.currentTarget as HTMLButtonElement).style.background = 'hsl(197 60% 35% / 0.1)'; }}
                      onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.borderColor = 'hsl(197 40% 28%)'; (e.currentTarget as HTMLButtonElement).style.background = 'transparent'; }}
                      onClick={openModal}
                    >
                      {category.cta}
                      <ArrowRight className="h-4 w-4" />
                    </button>
                    {category.id === "cybersecurity" && (
                      <Link to="/risk-assessment">
                        <button
                          className="inline-flex items-center gap-1 text-xs font-medium transition-colors px-3 py-1.5"
                          style={{ color: 'hsl(19 63% 55%)' }}
                          onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.color = 'hsl(19 63% 68%)'; }}
                          onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.color = 'hsl(19 63% 55%)'; }}
                        >
                          Free Security Check <ArrowRight className="h-3 w-3" />
                        </button>
                      </Link>
                    )}
                    {category.id === "cybersecurity" && (
                      <Link to="/compliance">
                        <button
                          className="inline-flex items-center gap-1 text-xs font-medium transition-colors px-3 py-1.5"
                          style={{ color: '#b0bec5' }}
                          onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.color = '#fff'; }}
                          onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.color = '#b0bec5'; }}
                        >
                          Compliance frameworks <ArrowRight className="h-3 w-3" />
                        </button>
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA Section */}
      <section
        className="relative py-24 md:py-32 overflow-hidden hero-grid-pattern text-center"
        style={{ background: 'linear-gradient(160deg, hsl(214 52% 7%) 0%, hsl(210 50% 10%) 50%, hsl(214 52% 7%) 100%)' }}
      >
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full blur-[120px] opacity-[0.07]" style={{ background: 'hsl(19 63% 47%)' }} />
        </div>
        <div className="container relative z-10 mx-auto px-4 lg:px-8" style={{ maxWidth: '1200px' }}>
          <div className="mx-auto max-w-3xl">
            <p className="label-caps mb-5" style={{ color: 'hsl(19 63% 55%)' }}>Get Started</p>
            <h2 className="text-3xl font-bold tracking-tight text-white md:text-5xl mb-6">
              Not Sure Where to Start?
            </h2>
            <p className="text-xl mb-10 leading-relaxed" style={{ color: '#b0bec5' }}>
              Our team will assess your current environment and recommend the right solutions.
            </p>
            <button
              className="px-10 py-4 text-lg font-bold text-black bg-white rounded-full transition-all duration-200 hover:-translate-y-1"
              style={{ boxShadow: '0 4px 24px rgba(255,255,255,0.15)' }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.boxShadow = '0 8px 32px rgba(255,255,255,0.25)'; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.boxShadow = '0 4px 24px rgba(255,255,255,0.15)'; }}
              onClick={openModal}
            >
              Get a Free Assessment
            </button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
