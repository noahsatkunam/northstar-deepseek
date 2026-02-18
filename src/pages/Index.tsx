import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { AnimatedSection } from "@/components/motion/AnimatedSection";
import { StaggerContainer } from "@/components/motion/StaggerContainer";
import { StaggerItem } from "@/components/motion/StaggerItem";
import { 
  Shield, 
  Server, 
  Bot, 
  ArrowRight, 
  ChevronDown, 
  Heart, 
  Lock, 
  Scale, 
  Building, 
  Rocket, 
  CheckCircle2,
} from "lucide-react";
import { useContactModal } from "@/components/ContactModal";
import inc5000Badge from "@/assets/inc-5000-badge.png";
import soc2Badge from "@/assets/soc2-badge.webp";
import hipaaBadge from "@/assets/hipaa-badge.png";

export default function Index() {
  const { openModal } = useContactModal();

  const scrollToProtectPropel = () => {
    const element = document.getElementById('protect-propel');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Layout>
      {/* SECTION 1 - HERO */}
      <section
        className="relative min-h-[90vh] flex items-center justify-center overflow-hidden hero-grid-pattern py-24 md:py-32 lg:py-36"
        style={{ background: 'linear-gradient(160deg, hsl(214 52% 8%) 0%, hsl(210 50% 11%) 50%, hsl(214 55% 7%) 100%)' }}
      >
        {/* Radial glow overlays */}
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div
            className="absolute -top-32 -left-32 h-[600px] w-[600px] rounded-full blur-[120px] opacity-[0.07]"
            style={{ background: 'hsl(19 63% 47%)' }}
          />
          <div
            className="absolute -bottom-32 -right-32 h-[500px] w-[500px] rounded-full blur-[100px] opacity-[0.06]"
            style={{ background: 'hsl(197 60% 35%)' }}
          />
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[700px] w-[700px] rounded-full blur-[140px] opacity-[0.04]"
            style={{ background: 'hsl(197 60% 35%)' }}
          />
        </div>

        <div className="container relative z-10 mx-auto px-4 lg:px-8" style={{ maxWidth: '1200px' }}>
          <AnimatedSection className="mx-auto max-w-5xl text-center">
            {/* Pre-headline label */}
            <div className="inline-flex items-center gap-2 mb-8">
              <span
                className="label-caps px-4 py-1.5 rounded-full text-[#b0bec5] border"
                style={{ borderColor: 'hsl(197 40% 22%)', background: 'hsl(210 50% 12%)' }}
              >
                Managed IT + Cybersecurity + AI
              </span>
            </div>

            <h1 className="text-4xl font-bold leading-tight tracking-tight text-white md:text-6xl lg:text-7xl mb-8">
              Technology should{" "}
              <span style={{ color: 'hsl(19 63% 55%)' }}>protect</span>{" "}
              your organization and{" "}
              <span style={{ color: 'hsl(19 63% 55%)' }}>propel</span>{" "}
              it into the future.
            </h1>

            <p className="mx-auto max-w-3xl text-lg leading-relaxed mb-10" style={{ color: '#b0bec5' }}>
              We help regulated organizations stay secure, audit-ready, and fully operational, then safely modernize with AI to move faster and scale with confidence.
            </p>

            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-5">
              <button
                onClick={scrollToProtectPropel}
                className="orange-pill px-8 py-3.5 text-base font-semibold w-full sm:w-auto"
                style={{ borderRadius: '20px', fontSize: '1rem', padding: '0.85rem 2.2rem' }}
              >
                See How It Works
              </button>
              <Link to="/risk-assessment" className="w-full sm:w-auto">
                <button
                  className="w-full px-8 py-3.5 text-base font-semibold text-white border transition-all duration-200 hover:-translate-y-1"
                  style={{
                    borderRadius: '20px',
                    borderColor: 'rgba(255,255,255,0.2)',
                    background: 'rgba(255,255,255,0.04)',
                    backdropFilter: 'blur(8px)',
                    fontSize: '1rem',
                    padding: '0.85rem 2.2rem'
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLButtonElement).style.borderColor = 'rgba(255,255,255,0.4)';
                    (e.currentTarget as HTMLButtonElement).style.background = 'rgba(255,255,255,0.08)';
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLButtonElement).style.borderColor = 'rgba(255,255,255,0.2)';
                    (e.currentTarget as HTMLButtonElement).style.background = 'rgba(255,255,255,0.04)';
                  }}
                >
                  Run a Security & AI Readiness Check
                </button>
              </Link>
            </div>
          </AnimatedSection>
        </div>

        {/* Scroll indicator */}
        <div
          className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce-subtle cursor-pointer"
          style={{ opacity: 0.4 }}
          onClick={scrollToProtectPropel}
        >
          <ChevronDown className="h-7 w-7 text-white" />
        </div>
      </section>

      {/* SECTION 2 - BELIEF EXPANSION */}
      <section className="py-24 md:py-28" style={{ background: 'hsl(210 50% 12%)' }}>
        <div className="container mx-auto px-4 lg:px-8" style={{ maxWidth: '1200px' }}>
          <AnimatedSection className="mx-auto max-w-3xl text-center">
            {/* Section label */}
            <p className="label-caps mb-5" style={{ color: 'hsl(19 63% 55%)' }}>
              The Challenge
            </p>
            <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl mb-8">
              Most regulated organizations are being pulled in two directions.
            </h2>
            <div className="text-lg leading-relaxed space-y-4" style={{ color: '#b0bec5' }}>
              <p>
                Cyber risk is rising. Compliance expectations are tightening. And AI is transforming the world faster than most teams can safely adapt.
              </p>
              <p>
                Yet many IT strategies are still reactive: fragmented vendors, constant firefighting, and no clear path forward.
              </p>
              <p>
                We believe organizations entrusted with sensitive data deserve more than survival. They deserve technology that creates stability, confidence, and a future-ready advantage, without adding chaos or complexity.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* SECTION 3 - THE DIFFERENT WAY (HOW) */}
      <section
        id="protect-propel"
        className="py-24 md:py-32 relative overflow-hidden hero-grid-pattern"
        style={{ background: 'hsl(214 52% 8%)' }}
      >
        {/* Subtle background glow */}
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div
            className="absolute top-0 left-1/4 h-96 w-96 rounded-full blur-[100px] opacity-[0.05]"
            style={{ background: 'hsl(19 63% 47%)' }}
          />
          <div
            className="absolute bottom-0 right-1/4 h-96 w-96 rounded-full blur-[100px] opacity-[0.05]"
            style={{ background: 'hsl(197 60% 35%)' }}
          />
        </div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10" style={{ maxWidth: '1200px' }}>
          <AnimatedSection className="mx-auto max-w-3xl text-center mb-16">
            <p className="label-caps mb-4" style={{ color: 'hsl(19 63% 55%)' }}>
              Our Framework
            </p>
            <h2 className="text-3xl font-bold tracking-tight text-white md:text-5xl mb-4">
              A safer path for regulated organizations:{" "}
              <span style={{ color: 'hsl(19 63% 55%)' }}>Protect</span>
              <span className="text-white/30 mx-3">&#x2192;</span>
              <span style={{ color: 'hsl(197 70% 55%)' }}>Propel</span>
              <span className="text-white/50 text-2xl ml-1">&#x2122;</span>
            </h2>
            <p className="text-lg leading-relaxed" style={{ color: '#b0bec5' }}>
              A two-part system that keeps you secure and audit-ready today, then helps you modernize with safe, practical AI.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto relative">
            {/* Connecting Arrow */}
            <div className="hidden md:flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 items-center justify-center h-12 w-12 rounded-full"
              style={{ background: 'hsl(210 50% 14%)', border: '1px solid hsl(197 40% 22%)' }}>
              <ArrowRight className="h-5 w-5" style={{ color: 'hsl(197 60% 48%)' }} />
            </div>

            {/* PROTECT Column */}
            <AnimatedSection
              className="rounded-2xl p-8 lg:p-10 relative overflow-hidden group transition-all duration-300"
              style={{
                background: 'hsl(210 50% 12%)',
                border: '1px solid hsl(197 40% 20%)',
                boxShadow: '0 4px 24px hsl(214 52% 3% / 0.5)',
              }}
            >
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                style={{ boxShadow: 'inset 0 0 0 1px hsl(197 60% 35% / 0.4), 0 0 32px hsl(197 60% 35% / 0.08)' }} />
              <div className="absolute top-0 right-0 p-6 opacity-[0.04] group-hover:opacity-[0.08] transition-opacity">
                <Shield className="h-36 w-36 text-white" />
              </div>
              <div className="flex items-center gap-3 mb-6">
                <div
                  className="h-12 w-12 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ background: 'hsl(19 63% 47% / 0.12)', border: '1px solid hsl(19 63% 47% / 0.35)' }}
                >
                  <Shield className="h-6 w-6" style={{ color: 'hsl(19 63% 55%)' }} />
                </div>
                <h3 className="text-2xl font-bold tracking-widest label-caps" style={{ color: 'hsl(19 63% 55%)', fontSize: '1.1rem', letterSpacing: '0.15em' }}>
                  PROTECT
                </h3>
              </div>
              <ul className="space-y-4">
                {[
                  "Protected from ransomware and breaches",
                  "Audit-ready year-round (HIPAA / CMMC / GLBA)",
                  "Operational uptime you can count on",
                  "24/7 monitoring and response"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 mt-0.5 shrink-0" style={{ color: 'hsl(19 63% 55% / 0.7)' }} />
                    <span className="text-base text-white/85">{item}</span>
                  </li>
                ))}
              </ul>
            </AnimatedSection>

            {/* PROPEL Column */}
            <AnimatedSection
              className="rounded-2xl p-8 lg:p-10 relative overflow-hidden group transition-all duration-300"
              style={{
                background: 'hsl(210 50% 12%)',
                border: '1px solid hsl(197 40% 20%)',
                boxShadow: '0 4px 24px hsl(214 52% 3% / 0.5)',
              }}
              delay={0.15}
            >
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                style={{ boxShadow: 'inset 0 0 0 1px hsl(197 60% 35% / 0.4), 0 0 32px hsl(197 60% 35% / 0.08)' }} />
              <div className="absolute top-0 right-0 p-6 opacity-[0.04] group-hover:opacity-[0.08] transition-opacity">
                <Rocket className="h-36 w-36 text-white" />
              </div>
              <div className="flex items-center gap-3 mb-6">
                <div
                  className="h-12 w-12 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ background: 'hsl(197 60% 35% / 0.12)', border: '1px solid hsl(197 60% 35% / 0.35)' }}
                >
                  <Rocket className="h-6 w-6" style={{ color: 'hsl(197 60% 55%)' }} />
                </div>
                <h3 className="label-caps" style={{ color: 'hsl(197 60% 55%)', fontSize: '1.1rem', letterSpacing: '0.15em' }}>
                  PROPEL
                </h3>
              </div>
              <ul className="space-y-4">
                {[
                  "Secure, compliant AI adoption",
                  "Automation that frees up staff time",
                  "Faster workflows and documentation",
                  "Scale without adding headcount"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 mt-0.5 shrink-0" style={{ color: 'hsl(197 60% 55% / 0.7)' }} />
                    <span className="text-base text-white/85">{item}</span>
                  </li>
                ))}
              </ul>
            </AnimatedSection>
          </div>

          <AnimatedSection className="text-center mt-14">
            <p className="text-lg font-medium italic mb-8" style={{ color: '#b0bec5' }}>
              "Protection is your foundation. Propulsion is your advantage."
            </p>
            <Link to="/risk-assessment" className="hidden sm:inline-block">
              <button className="orange-pill px-8 py-3.5 text-base" style={{ borderRadius: '20px', padding: '0.85rem 2.4rem' }}>
                Assess Your Readiness
              </button>
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* SECTION 4 - WHO IT'S FOR */}
      <section className="py-24 md:py-28" style={{ background: 'hsl(210 50% 12%)' }}>
        <div className="container mx-auto px-4 lg:px-8" style={{ maxWidth: '1200px' }}>
          <AnimatedSection className="mx-auto max-w-3xl text-center mb-16">
            <p className="label-caps mb-4" style={{ color: 'hsl(19 63% 55%)' }}>
              Who We Serve
            </p>
            <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl mb-4">
              Built for organizations that can't afford mistakes.
            </h2>
            <p className="text-lg mb-2" style={{ color: '#b0bec5' }}>
              If security, compliance, and operational confidence matter to your organization, you're in the right place.
            </p>
            <p className="text-base" style={{ color: 'hsl(210 15% 55%)' }}>
              Where audits, downtime, and sensitive data exposure carry real consequences.
            </p>
          </AnimatedSection>

          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              { icon: Heart, label: "Healthcare Organizations", description: "HIPAA-secure systems that protect patient care and reduce audit stress.", link: "/compliance" },
              { icon: Shield, label: "DoD Contractors (CMMC)", description: "CMMC-ready cybersecurity that keeps contracts compliant and assessments smooth.", link: "/services" },
              { icon: Scale, label: "Law Firms & Professional Services", description: "Technology that protects client confidentiality and billable momentum.", link: "/services" },
              { icon: Building, label: "Financial Institutions", description: "Audit-ready security that reduces risk and strengthens client trust.", link: "/services" },
            ].map((industry, i) => (
              <StaggerItem key={i} className="h-full">
                <Link to={industry.link} className="block h-full">
                  <div
                    className="h-full flex flex-col items-center text-center p-7 rounded-xl group transition-all duration-300 cursor-pointer"
                    style={{
                      background: 'hsl(214 52% 10%)',
                      border: '1px solid hsl(197 40% 20%)',
                    }}
                    onMouseEnter={(e) => {
                      const el = e.currentTarget;
                      el.style.borderColor = 'hsl(197 60% 35% / 0.6)';
                      el.style.boxShadow = '0 0 20px hsl(197 60% 35% / 0.1), 0 8px 32px hsl(214 52% 3% / 0.4)';
                      el.style.transform = 'translateY(-3px)';
                    }}
                    onMouseLeave={(e) => {
                      const el = e.currentTarget;
                      el.style.borderColor = 'hsl(197 40% 20%)';
                      el.style.boxShadow = 'none';
                      el.style.transform = 'translateY(0)';
                    }}
                  >
                    <div
                      className="h-14 w-14 rounded-full flex items-center justify-center mb-5 transition-all duration-300 group-hover:scale-110"
                      style={{ background: 'hsl(210 50% 14%)', border: '1px solid hsl(19 63% 47% / 0.3)' }}
                    >
                      <industry.icon className="h-6 w-6" style={{ color: 'hsl(19 63% 55%)' }} />
                    </div>
                    <h3 className="font-semibold text-base text-white mb-2">{industry.label}</h3>
                    <p className="text-sm leading-relaxed" style={{ color: '#b0bec5' }}>{industry.description}</p>
                    <span className="mt-4 inline-flex items-center text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity" style={{ color: 'hsl(19 63% 55%)' }}>
                      Learn more <ArrowRight className="ml-1 h-3 w-3" />
                    </span>
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <div className="text-center mt-10 hidden sm:block">
            <Link to="/risk-assessment">
              <button className="orange-pill px-8 py-3.5 text-base" style={{ borderRadius: '20px', padding: '0.85rem 2.4rem' }}>
                Check Your Security Posture <ArrowRight className="inline ml-2 h-4 w-4" />
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 5 - SERVICES (WHAT) */}
      <section className="py-24 md:py-32 relative hero-grid-pattern" style={{ background: 'hsl(214 52% 8%)' }}>
        <div className="container mx-auto px-4 lg:px-8 relative z-10" style={{ maxWidth: '1200px' }}>
          <AnimatedSection className="mx-auto max-w-3xl text-center mb-16">
            <p className="label-caps mb-4" style={{ color: 'hsl(19 63% 55%)' }}>
              Our Services
            </p>
            <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl mb-4">
              How we help, built for regulated confidence.
            </h2>
            <p className="text-lg leading-relaxed" style={{ color: '#b0bec5' }}>
              Everything you need to stay secure, audit-ready, and prepared for safe AI modernization, under one trusted partner.
            </p>
          </AnimatedSection>

          <StaggerContainer className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                icon: Server,
                title: "Managed IT & Operations",
                subtitle: "Reliable operations, zero surprises.",
                description: "Always-on systems that reduce downtime and keep your organization running smoothly."
              },
              {
                icon: Shield,
                title: "Cybersecurity & Compliance",
                subtitle: "Protection built for audit pressure.",
                description: "24/7 security and compliance-ready controls that keep audits stress-free."
              },
              {
                icon: Bot,
                title: "AI Modernization",
                subtitle: "Practical AI, implemented safely.",
                description: "Automation and productivity gains, with the guardrails regulated teams require."
              }
            ].map((service, i) => (
              <StaggerItem key={i}>
                <div
                  className="flex flex-col items-center text-center p-8 lg:p-10 rounded-2xl group transition-all duration-300 h-full"
                  style={{
                    background: 'hsl(210 50% 12%)',
                    border: '1px solid hsl(197 40% 20%)',
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget;
                    el.style.borderColor = 'hsl(197 60% 35% / 0.5)';
                    el.style.boxShadow = '0 0 24px hsl(197 60% 35% / 0.1), 0 8px 32px hsl(214 52% 3% / 0.4)';
                    el.style.transform = 'translateY(-4px)';
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget;
                    el.style.borderColor = 'hsl(197 40% 20%)';
                    el.style.boxShadow = 'none';
                    el.style.transform = 'translateY(0)';
                  }}
                >
                  <div
                    className="h-16 w-16 rounded-2xl flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110"
                    style={{ background: 'hsl(210 50% 10%)', border: '2px solid hsl(19 63% 47% / 0.35)' }}
                  >
                    <service.icon className="h-8 w-8" style={{ color: 'hsl(19 63% 55%)' }} />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                  <p className="text-sm font-semibold mb-4 label-caps" style={{ color: 'hsl(19 63% 55%)', letterSpacing: '0.08em' }}>
                    {service.subtitle}
                  </p>
                  <p style={{ color: '#b0bec5' }}>{service.description}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-12">
            <Link to="/services">
              <button
                className="px-8 py-3.5 text-base font-semibold text-white border transition-all duration-200 hover:-translate-y-1"
                style={{
                  borderRadius: '20px',
                  borderColor: 'hsl(197 40% 28%)',
                  background: 'transparent',
                  padding: '0.85rem 2.2rem'
                }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.borderColor = 'hsl(197 60% 40%)'; (e.currentTarget as HTMLButtonElement).style.background = 'hsl(197 60% 35% / 0.08)'; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.borderColor = 'hsl(197 40% 28%)'; (e.currentTarget as HTMLButtonElement).style.background = 'transparent'; }}
              >
                Explore All Services <ArrowRight className="inline ml-2 h-4 w-4" />
              </button>
            </Link>
            <Link to="/risk-assessment">
              <button className="orange-pill px-8 py-3.5 text-base" style={{ borderRadius: '20px', padding: '0.85rem 2.2rem' }}>
                Free Security Check <ArrowRight className="inline ml-2 h-4 w-4" />
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 6 - PROOF */}
      <section className="py-24 md:py-28" style={{ background: 'hsl(210 50% 12%)' }}>
        <div className="container mx-auto px-4 lg:px-8" style={{ maxWidth: '1200px' }}>
          <AnimatedSection className="text-center mb-16">
            <p className="label-caps mb-4" style={{ color: 'hsl(19 63% 55%)' }}>
              Trust & Credentials
            </p>
            <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl mb-4">
              Trusted in high-stakes, regulated environments.
            </h2>
            <p className="text-lg mb-12" style={{ color: '#b0bec5' }}>
              Organizations choose NorthStar when cybersecurity, compliance, and uptime can't be left to chance.
            </p>

            {/* Badges */}
            <div
              className="inline-flex items-center justify-center gap-8 mb-6 px-10 py-6 rounded-2xl"
              style={{ background: 'hsl(214 52% 10%)', border: '1px solid hsl(197 40% 20%)' }}
            >
              <img src={inc5000Badge} alt="Inc. 5000" className="h-14 w-auto object-contain" />
              <div className="h-10 w-px" style={{ background: 'hsl(197 40% 22%)' }} />
              <img src={soc2Badge} alt="SOC 2 Type II" className="h-14 w-auto object-contain" />
              <div className="h-10 w-px" style={{ background: 'hsl(197 40% 22%)' }} />
              <img src={hipaaBadge} alt="HIPAA Compliant" className="h-14 w-auto object-contain" />
            </div>

            <p className="text-sm mb-10" style={{ color: 'hsl(210 15% 55%)' }}>
              Back-to-back Inc. 5000 honoree: #3837 (2024) and #2393 (2025) with 178% three-year growth. Founded in 2000, 25+ years of trusted IT partnership.
            </p>

            {/* Testimonial */}
            <div
              className="max-w-2xl mx-auto p-8 rounded-2xl text-left relative"
              style={{
                background: 'hsl(214 52% 10%)',
                border: '1px solid hsl(197 40% 20%)',
                boxShadow: '0 4px 24px hsl(214 52% 3% / 0.4)'
              }}
            >
              {/* Quote mark */}
              <div className="text-6xl font-serif leading-none mb-4 select-none" style={{ color: 'hsl(19 63% 47% / 0.3)' }}>&ldquo;</div>
              <blockquote className="text-lg italic leading-relaxed text-white/80">
                NorthStar gave us the confidence that our security and compliance posture could keep pace with our growth. They don't just manage our IT. They genuinely understand the regulatory pressures we face every day.
              </blockquote>
              <p className="mt-5 text-sm font-semibold" style={{ color: 'hsl(19 63% 55%)' }}>
                IT Director, Healthcare Organization
              </p>
            </div>
          </AnimatedSection>

          {/* Free Tools & Resources */}
          <AnimatedSection className="mt-10">
            <div
              className="flex flex-wrap items-center justify-center gap-5 py-4 px-6 rounded-xl"
              style={{ background: 'hsl(214 52% 10%)', border: '1px solid hsl(197 40% 18%)' }}
            >
              <Link
                to="/dmarc-checker"
                className="inline-flex items-center gap-1.5 font-medium text-sm transition-colors hover:text-white"
                style={{ color: '#b0bec5' }}
                onMouseEnter={(e) => (e.currentTarget as HTMLAnchorElement).style.color = '#fff'}
                onMouseLeave={(e) => (e.currentTarget as HTMLAnchorElement).style.color = '#b0bec5'}
              >
                <Lock className="h-4 w-4" style={{ color: 'hsl(19 63% 55%)' }} />
                Free Phishing Check <ArrowRight className="h-3 w-3 ml-0.5" />
              </Link>
              <span style={{ color: 'hsl(197 40% 22%)' }}>|</span>
              <Link
                to="/webinars"
                className="inline-flex items-center gap-1.5 font-medium text-sm transition-colors"
                style={{ color: '#b0bec5' }}
                onMouseEnter={(e) => (e.currentTarget as HTMLAnchorElement).style.color = '#fff'}
                onMouseLeave={(e) => (e.currentTarget as HTMLAnchorElement).style.color = '#b0bec5'}
              >
                Upcoming Webinars <ArrowRight className="h-3 w-3 ml-0.5" />
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* SECTION 7 - FINAL CTA */}
      <section
        className="relative py-28 md:py-36 overflow-hidden hero-grid-pattern text-center"
        style={{ background: 'linear-gradient(160deg, hsl(214 52% 7%) 0%, hsl(210 50% 10%) 50%, hsl(214 52% 7%) 100%)' }}
      >
        {/* Orange glow */}
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full blur-[120px] opacity-[0.08]"
            style={{ background: 'hsl(19 63% 47%)' }}
          />
        </div>
        <div className="container relative z-10 mx-auto px-4 lg:px-8" style={{ maxWidth: '1200px' }}>
          <AnimatedSection className="mx-auto max-w-3xl">
            <p className="label-caps mb-5" style={{ color: 'hsl(19 63% 55%)' }}>
              Get Started
            </p>
            <h2 className="text-3xl font-bold tracking-tight text-white md:text-5xl mb-6">
              Start with clarity, not a sales pitch.
            </h2>
            <p className="text-xl mb-10 leading-relaxed" style={{ color: '#b0bec5' }}>
              In regulated environments, you don't need more noise. You need to know where you stand. We'll help you understand your security, compliance, and AI readiness, clearly and calmly.
            </p>
            <Link to="/risk-assessment">
              <button
                className="px-10 py-4 text-lg font-bold text-black bg-white rounded-full transition-all duration-200 hover:-translate-y-1"
                style={{ boxShadow: '0 4px 24px rgba(255,255,255,0.15)' }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.boxShadow = '0 8px 32px rgba(255,255,255,0.25)'; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.boxShadow = '0 4px 24px rgba(255,255,255,0.15)'; }}
              >
                Run a Security & AI Readiness Check
              </button>
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
}
