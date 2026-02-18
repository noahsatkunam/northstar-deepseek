import { ReactNode } from "react";

interface PageHeroProps {
  title: string;
  description?: string;
  children?: ReactNode;
}

export function PageHero({ title, description, children }: PageHeroProps) {
  return (
    <section
      className="relative overflow-hidden hero-grid-pattern py-16 md:py-24"
      style={{ background: 'linear-gradient(160deg, hsl(214 52% 8%) 0%, hsl(210 50% 11%) 60%, hsl(214 52% 8%) 100%)' }}
    >
      {/* Subtle radial glows */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div
          className="absolute -top-20 left-1/3 h-80 w-80 rounded-full blur-[100px] opacity-[0.07]"
          style={{ background: 'hsl(19 63% 47%)' }}
        />
        <div
          className="absolute bottom-0 right-1/4 h-64 w-64 rounded-full blur-[80px] opacity-[0.05]"
          style={{ background: 'hsl(197 60% 35%)' }}
        />
      </div>

      <div className="container relative z-10 mx-auto px-4 lg:px-8" style={{ maxWidth: '1200px' }}>
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-3xl font-bold tracking-tight text-white md:text-4xl lg:text-5xl">
            {title}
          </h1>
          {description && (
            <p className="mt-4 text-lg leading-relaxed" style={{ color: '#b0bec5' }}>
              {description}
            </p>
          )}
          {children && <div className="mt-8">{children}</div>}
        </div>
      </div>

      {/* Bottom border glow */}
      <div
        className="absolute bottom-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, hsl(197 40% 22%), transparent)' }}
      />
    </section>
  );
}
