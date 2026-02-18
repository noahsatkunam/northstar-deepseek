import { useState } from "react";
import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Linkedin, Facebook, Instagram } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import inc5000Badge from "@/assets/inc-5000-badge.png";
import soc2Badge from "@/assets/soc2-badge.webp";
import hipaaBadge from "@/assets/hipaa-badge.png";
import { useContactModal } from "@/components/ContactModal";

const quickLinks = [
  { name: "Services", href: "/services" },
  { name: "Compliance", href: "/compliance" },
  { name: "About", href: "/about" },
  { name: "Blog", href: "/blog" },
];

const resources = [
  { name: "Webinars", href: "/webinars" },
  { name: "DMARC Tool", href: "/dmarc-checker" },
  { name: "Contact", href: "/about" },
];

export function Footer() {
  const { openModal } = useContactModal();
  const [email, setEmail] = useState("");
  const [subscribeStatus, setSubscribeStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    setSubscribeStatus("idle");
    setErrorMessage("");

    if (!email.trim()) {
      setSubscribeStatus("error");
      setErrorMessage("Please enter your email address");
      return;
    }

    if (!validateEmail(email)) {
      setSubscribeStatus("error");
      setErrorMessage("Please enter a valid email address");
      return;
    }

    setSubscribeStatus("success");
    setEmail("");
  };

  return (
    <footer
      className="relative"
      style={{ background: 'hsl(214 52% 7%)', borderTop: '1px solid hsl(197 40% 18%)' }}
    >
      {/* CTA Band */}
      <section
        className="relative overflow-hidden py-16 md:py-20 hero-grid-pattern"
        style={{ background: 'hsl(214 52% 9%)' }}
      >
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div
            className="absolute left-0 top-1/2 -translate-y-1/2 h-64 w-64 rounded-full blur-[80px] opacity-[0.08]"
            style={{ background: 'hsl(19 63% 47%)' }}
          />
          <div
            className="absolute right-0 top-1/2 -translate-y-1/2 h-64 w-64 rounded-full blur-[80px] opacity-[0.06]"
            style={{ background: 'hsl(197 60% 35%)' }}
          />
        </div>

        <div className="container relative mx-auto px-4 lg:px-8" style={{ maxWidth: '1200px' }}>
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
            <div className="text-center md:text-left">
              <h2 className="text-2xl font-bold tracking-tight text-white md:text-3xl">
                Ready to transform your IT?
              </h2>
              <p className="mt-2" style={{ color: '#b0bec5' }}>
                Let's discuss how we can help your business thrive.
              </p>
            </div>
            <button
              onClick={openModal}
              className="orange-pill px-8 py-3.5 text-base flex-shrink-0"
              style={{ borderRadius: '20px', padding: '0.85rem 2.4rem' }}
            >
              Schedule Consultation
            </button>
          </div>
        </div>
      </section>

      {/* Main Footer Content */}
      <div className="relative" style={{ borderTop: '1px solid hsl(197 40% 16%)' }}>
        <div className="container mx-auto px-4 py-14 lg:px-8" style={{ maxWidth: '1200px' }}>
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
            {/* Company */}
            <div>
              <p className="label-caps mb-5" style={{ color: 'hsl(19 63% 55%)' }}>Company</p>
              <Link to="/" className="flex items-center mb-4">
                <img
                  src="/logos/northstar-logo-white.png"
                  alt="NorthStar Technology Group"
                  className="h-16 w-auto"
                />
              </Link>
              <p className="text-sm leading-relaxed" style={{ color: 'hsl(210 15% 55%)' }}>
                Your trusted partner for managed IT services, cybersecurity, compliance, and AI automation.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <p className="label-caps mb-5" style={{ color: 'hsl(19 63% 55%)' }}>Quick Links</p>
              <ul className="space-y-3">
                {quickLinks.map((item) => (
                  <li key={item.name}>
                    <Link
                      to={item.href}
                      className="text-sm transition-colors"
                      style={{ color: 'hsl(210 15% 55%)' }}
                      onMouseEnter={(e) => (e.currentTarget as HTMLAnchorElement).style.color = '#fff'}
                      onMouseLeave={(e) => (e.currentTarget as HTMLAnchorElement).style.color = 'hsl(210 15% 55%)'}
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources */}
            <div>
              <p className="label-caps mb-5" style={{ color: 'hsl(19 63% 55%)' }}>Resources</p>
              <ul className="space-y-3">
                {resources.map((item) => (
                  <li key={item.name}>
                    <Link
                      to={item.href}
                      className="text-sm transition-colors"
                      style={{ color: 'hsl(210 15% 55%)' }}
                      onMouseEnter={(e) => (e.currentTarget as HTMLAnchorElement).style.color = '#fff'}
                      onMouseLeave={(e) => (e.currentTarget as HTMLAnchorElement).style.color = 'hsl(210 15% 55%)'}
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <p className="label-caps mb-5" style={{ color: 'hsl(19 63% 55%)' }}>Contact</p>
              <ul className="space-y-3">
                <li>
                  <a
                    href="tel:+1-866-337-9096"
                    className="flex items-center gap-2 text-sm transition-colors group"
                    style={{ color: 'hsl(210 15% 55%)' }}
                    onMouseEnter={(e) => (e.currentTarget as HTMLAnchorElement).style.color = '#fff'}
                    onMouseLeave={(e) => (e.currentTarget as HTMLAnchorElement).style.color = 'hsl(210 15% 55%)'}
                  >
                    <Phone className="h-4 w-4 flex-shrink-0" style={{ color: 'hsl(19 63% 47%)' }} />
                    866-337-9096
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:info@northstar-tg.com"
                    className="flex items-center gap-2 text-sm transition-colors"
                    style={{ color: 'hsl(210 15% 55%)' }}
                    onMouseEnter={(e) => (e.currentTarget as HTMLAnchorElement).style.color = '#fff'}
                    onMouseLeave={(e) => (e.currentTarget as HTMLAnchorElement).style.color = 'hsl(210 15% 55%)'}
                  >
                    <Mail className="h-4 w-4 flex-shrink-0" style={{ color: 'hsl(19 63% 47%)' }} />
                    info@northstar-tg.com
                  </a>
                </li>
                <li>
                  <span className="flex items-center gap-2 text-sm" style={{ color: 'hsl(210 15% 55%)' }}>
                    <MapPin className="h-4 w-4 flex-shrink-0" style={{ color: 'hsl(19 63% 47%)' }} />
                    Fargo, ND
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Newsletter Signup */}
          <div className="mt-12 pt-10" style={{ borderTop: '1px solid hsl(197 40% 16%)' }}>
            <div className="mx-auto max-w-md text-center">
              <p className="label-caps mb-2" style={{ color: 'hsl(19 63% 55%)' }}>
                Stay Updated
              </p>
              <p className="text-sm mb-4" style={{ color: '#b0bec5' }}>
                Subscribe to our newsletter for IT insights and updates.
              </p>
              <form onSubmit={handleSubscribe} className="flex gap-2">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (subscribeStatus !== "idle") {
                      setSubscribeStatus("idle");
                      setErrorMessage("");
                    }
                  }}
                  className="flex-1 text-white placeholder:text-white/30"
                  style={{
                    background: 'hsl(210 50% 12%)',
                    border: '1px solid hsl(197 40% 20%)',
                  }}
                  aria-label="Email for newsletter"
                />
                <Button
                  type="submit"
                  className="text-white flex-shrink-0"
                  style={{ background: 'hsl(19 63% 47%)', borderRadius: '0.5rem' }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.background = 'hsl(19 63% 40%)'; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.background = 'hsl(19 63% 47%)'; }}
                >
                  Subscribe
                </Button>
              </form>
              {subscribeStatus === "error" && errorMessage && (
                <p className="mt-2 text-sm text-red-400">{errorMessage}</p>
              )}
              {subscribeStatus === "success" && (
                <p className="mt-2 text-sm" style={{ color: 'hsl(19 63% 60%)' }}>Thank you for subscribing!</p>
              )}
              <div className="mt-4 flex items-center justify-center gap-3 text-xs" style={{ color: 'hsl(210 15% 45%)' }}>
                <Link
                  to="/webinars"
                  className="transition-colors"
                  onMouseEnter={(e) => (e.currentTarget as HTMLAnchorElement).style.color = 'hsl(19 63% 55%)'}
                  onMouseLeave={(e) => (e.currentTarget as HTMLAnchorElement).style.color = 'hsl(210 15% 45%)'}
                >
                  Upcoming Webinars
                </Link>
                <span style={{ color: 'hsl(197 40% 22%)' }}>|</span>
                <Link
                  to="/risk-assessment"
                  className="transition-colors"
                  onMouseEnter={(e) => (e.currentTarget as HTMLAnchorElement).style.color = 'hsl(19 63% 55%)'}
                  onMouseLeave={(e) => (e.currentTarget as HTMLAnchorElement).style.color = 'hsl(210 15% 45%)'}
                >
                  Free Security Check
                </Link>
              </div>
            </div>
          </div>

          {/* Certification Badges */}
          <div className="mt-10 pt-8" style={{ borderTop: '1px solid hsl(197 40% 16%)' }}>
            <div className="flex flex-wrap items-center justify-center gap-8">
              <div className="flex flex-col items-center gap-1.5">
                <img src={inc5000Badge} alt="Inc. 5000" className="h-12 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity" />
                <span className="label-caps text-[9px]" style={{ color: 'hsl(210 15% 45%)' }}>Inc. 5000</span>
              </div>
              <div className="flex flex-col items-center gap-1.5">
                <img src={soc2Badge} alt="SOC 2 Type II" className="h-12 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity" />
                <span className="label-caps text-[9px]" style={{ color: 'hsl(210 15% 45%)' }}>SOC 2 Certified</span>
              </div>
              <div className="flex flex-col items-center gap-1.5">
                <img src={hipaaBadge} alt="HIPAA Compliant" className="h-12 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity" />
                <span className="label-caps text-[9px]" style={{ color: 'hsl(210 15% 45%)' }}>HIPAA Compliant</span>
              </div>
            </div>
          </div>

          {/* Bottom */}
          <div className="mt-8 flex flex-col items-center justify-between gap-4 pt-8 md:flex-row" style={{ borderTop: '1px solid hsl(197 40% 16%)' }}>
            <div className="flex flex-col items-center gap-2 md:flex-row md:gap-4">
              <p className="text-sm" style={{ color: 'hsl(210 15% 45%)' }}>
                &copy; {new Date().getFullYear()} NorthStar Technology Group. All rights reserved.
              </p>
              <div className="flex gap-4">
                <Link
                  to="/privacy-policy"
                  className="text-sm transition-colors"
                  style={{ color: 'hsl(210 15% 45%)' }}
                  onMouseEnter={(e) => (e.currentTarget as HTMLAnchorElement).style.color = '#fff'}
                  onMouseLeave={(e) => (e.currentTarget as HTMLAnchorElement).style.color = 'hsl(210 15% 45%)'}
                >
                  Privacy Policy
                </Link>
                <Link
                  to="/terms-of-service"
                  className="text-sm transition-colors"
                  style={{ color: 'hsl(210 15% 45%)' }}
                  onMouseEnter={(e) => (e.currentTarget as HTMLAnchorElement).style.color = '#fff'}
                  onMouseLeave={(e) => (e.currentTarget as HTMLAnchorElement).style.color = 'hsl(210 15% 45%)'}
                >
                  Terms of Service
                </Link>
              </div>
            </div>
            <div className="flex gap-4">
              <a
                href="https://www.linkedin.com/company/northstar-technology-group"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-all duration-200 hover:-translate-y-1"
                style={{ color: 'hsl(210 15% 45%)' }}
                onMouseEnter={(e) => (e.currentTarget as HTMLAnchorElement).style.color = 'hsl(19 63% 55%)'}
                onMouseLeave={(e) => (e.currentTarget as HTMLAnchorElement).style.color = 'hsl(210 15% 45%)'}
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://twitter.com/NorthstarTG"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-all duration-200 hover:-translate-y-1"
                style={{ color: 'hsl(210 15% 45%)' }}
                onMouseEnter={(e) => (e.currentTarget as HTMLAnchorElement).style.color = 'hsl(19 63% 55%)'}
                onMouseLeave={(e) => (e.currentTarget as HTMLAnchorElement).style.color = 'hsl(210 15% 45%)'}
                aria-label="X (Twitter)"
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </a>
              <a
                href="https://www.facebook.com/NorthStarTG"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-all duration-200 hover:-translate-y-1"
                style={{ color: 'hsl(210 15% 45%)' }}
                onMouseEnter={(e) => (e.currentTarget as HTMLAnchorElement).style.color = 'hsl(19 63% 55%)'}
                onMouseLeave={(e) => (e.currentTarget as HTMLAnchorElement).style.color = 'hsl(210 15% 45%)'}
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://instagram.com/northstartechno"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-all duration-200 hover:-translate-y-1"
                style={{ color: 'hsl(210 15% 45%)' }}
                onMouseEnter={(e) => (e.currentTarget as HTMLAnchorElement).style.color = 'hsl(19 63% 55%)'}
                onMouseLeave={(e) => (e.currentTarget as HTMLAnchorElement).style.color = 'hsl(210 15% 45%)'}
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
