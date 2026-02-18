import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Wrench } from "lucide-react";
import { useContactModal } from "@/components/ContactModal";
import { cn } from "@/lib/utils";

const navigation = [
  { name: "Home", href: "/", isTool: false },
  { name: "Services", href: "/services", isTool: false },
  { name: "Compliance", href: "/compliance", isTool: false },
  { name: "About", href: "/about", isTool: false },
  { name: "Blog", href: "/blog", isTool: false },
  { name: "Webinars", href: "/webinars", isTool: false },
  { name: "Security Check", href: "/security-check", isTool: true },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const { openModal } = useContactModal();

  const isActive = (href: string) => {
    if (href === "/") return location.pathname === "/";
    return location.pathname.startsWith(href);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <>
      <header
        className={cn(
          "sticky top-0 z-50 w-full transition-all duration-300",
          isScrolled
            ? "bg-navy-dark/90 backdrop-blur-xl border-b border-teal-border/40 shadow-[0_4px_24px_hsl(214_52%_3%/0.5)] py-2"
            : "bg-navy-dark/80 backdrop-blur-sm py-1"
        )}
        style={{ backgroundColor: isScrolled ? 'rgba(8,16,32,0.92)' : 'rgba(10,18,36,0.85)' }}
      >
        <nav className="container mx-auto flex h-16 items-center justify-between px-4 lg:px-8" style={{ maxWidth: '1200px' }}>
          {/* Logo */}
          <Link to="/" className="flex items-center group flex-shrink-0">
            <img
              src="/logos/northstar-logo.png"
              alt="NorthStar Technology Group"
              className="h-[9.6rem] w-auto transition-all duration-300 group-hover:scale-[1.03]"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-0.5 lg:flex">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={cn(
                  "px-3 py-2 transition-colors rounded-md relative",
                  "label-caps tracking-wider",
                  item.isTool
                    ? cn(
                        "flex items-center gap-1.5",
                        "border border-teal-border/50 hover:border-teal-DEFAULT/60",
                        "text-teal-light hover:text-teal-light",
                        "bg-teal-dark/10 hover:bg-teal-dark/20",
                        isActive(item.href) ? "border-teal-DEFAULT/60 bg-teal-dark/20" : ""
                      )
                    : cn(
                        "text-[#b0bec5] hover:text-white",
                        "after:absolute after:bottom-0 after:left-3 after:right-3 after:h-[2px]",
                        "after:bg-primary after:origin-left after:scale-x-0",
                        "after:transition-transform after:duration-200",
                        "hover:after:scale-x-100",
                        isActive(item.href)
                          ? "text-white after:scale-x-100"
                          : ""
                      )
                )}
              >
                {item.isTool && <Wrench className="h-3 w-3" />}
                {item.name}
              </Link>
            ))}
          </div>

          {/* Desktop CTA - Orange pill */}
          <div className="hidden lg:flex">
            <button
              onClick={openModal}
              className="orange-pill text-sm"
            >
              Contact Us
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className="lg:hidden p-2 text-[#b0bec5] hover:text-white rounded-md transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </nav>
      </header>

      {/* Mobile Navigation Overlay */}
      <div
        className={cn(
          "fixed inset-0 z-40 lg:hidden transition-all duration-300 ease-out",
          mobileMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        )}
        style={{ background: 'rgba(5, 10, 24, 0.75)', backdropFilter: 'blur(8px)' }}
        onClick={() => setMobileMenuOpen(false)}
      />

      {/* Mobile Navigation Slide-in Panel */}
      <div
        className={cn(
          "fixed top-0 right-0 z-50 h-full w-[280px] max-w-[85vw] lg:hidden transition-transform duration-300 ease-out",
          "border-l border-teal-border/40",
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
        style={{ backgroundColor: 'hsl(210 50% 10%)' }}
      >
        {/* Mobile Menu Header */}
        <div className="flex items-center justify-between h-16 px-4 border-b border-teal-border/30">
          <span className="label-caps tracking-widest text-[#b0bec5]">Navigation</span>
          <button
            type="button"
            className="p-2 text-[#b0bec5] hover:text-white rounded-md transition-colors"
            onClick={() => setMobileMenuOpen(false)}
            aria-label="Close menu"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        {/* Mobile Menu Content */}
        <div className="flex flex-col h-[calc(100%-4rem)] overflow-y-auto">
          <div className="flex-1 px-4 py-4 space-y-1">
            {navigation.map((item, index) => (
              <Link
                key={item.name}
                to={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={cn(
                  "flex items-center gap-2 px-3 py-3 rounded-md",
                  "label-caps transition-all duration-150",
                  "active:scale-[0.98] active:transition-none",
                  mobileMenuOpen ? "animate-fade-in-up" : "opacity-0",
                  item.isTool
                    ? cn(
                        "border border-teal-border/50",
                        "text-teal-light bg-teal-dark/10",
                        isActive(item.href) ? "border-teal-DEFAULT/60" : ""
                      )
                    : cn(
                        "relative border-l-2",
                        isActive(item.href)
                          ? "text-white border-primary bg-primary/5"
                          : "text-[#b0bec5] hover:text-white border-transparent hover:border-primary/40 hover:bg-white/5"
                      )
                )}
                style={{ animationDelay: mobileMenuOpen ? `${index * 60}ms` : '0ms' }}
              >
                {item.isTool && <Wrench className="h-3.5 w-3.5" />}
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Footer with CTA */}
          <div className="p-4 border-t border-teal-border/30">
            <button
              className="orange-pill w-full text-center text-sm"
              onClick={() => {
                setMobileMenuOpen(false);
                openModal();
              }}
            >
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
