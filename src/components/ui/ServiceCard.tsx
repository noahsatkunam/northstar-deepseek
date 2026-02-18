import * as React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, type LucideIcon } from "lucide-react";

import { cn } from "@/lib/utils";

export interface ServiceCardProps extends React.HTMLAttributes<HTMLDivElement> {
  icon: LucideIcon;
  title: string;
  description: string;
  href?: string;
  ctaText?: string;
}

const ServiceCard = React.forwardRef<HTMLDivElement, ServiceCardProps>(
  ({ className, icon: Icon, title, description, href, ctaText = "Learn more", ...props }, ref) => {
    const ctaContent = (
      <span
        className="mt-4 inline-flex items-center text-sm font-semibold transition-colors group-hover:gap-2"
        style={{ color: 'hsl(19 63% 55%)', gap: '0.25rem' }}
      >
        {ctaText}
        <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
      </span>
    );

    return (
      <div
        ref={ref}
        className={cn("group p-6 rounded-xl transition-all duration-300 cursor-default", className)}
        style={{
          background: 'hsl(210 50% 12%)',
          border: '1px solid hsl(197 40% 20%)',
          boxShadow: '0 4px 16px hsl(214 52% 3% / 0.4)',
        }}
        onMouseEnter={(e) => {
          const el = e.currentTarget;
          el.style.borderColor = 'hsl(197 60% 35% / 0.55)';
          el.style.boxShadow = '0 0 20px hsl(197 60% 35% / 0.1), 0 8px 32px hsl(214 52% 3% / 0.5)';
          el.style.transform = 'translateY(-3px)';
        }}
        onMouseLeave={(e) => {
          const el = e.currentTarget;
          el.style.borderColor = 'hsl(197 40% 20%)';
          el.style.boxShadow = '0 4px 16px hsl(214 52% 3% / 0.4)';
          el.style.transform = 'translateY(0)';
        }}
        {...props}
      >
        <div
          className="flex h-12 w-12 items-center justify-center rounded-xl transition-transform duration-200 group-hover:scale-110"
          style={{
            background: 'hsl(210 50% 10%)',
            border: '2px solid hsl(19 63% 47% / 0.35)',
          }}
        >
          <Icon className="h-6 w-6" style={{ color: 'hsl(19 63% 55%)' }} />
        </div>
        <h3 className="mt-5 text-lg font-semibold text-white">
          {title}
        </h3>
        <p className="mt-2 text-sm leading-relaxed" style={{ color: '#b0bec5' }}>
          {description}
        </p>
        {href ? (
          <Link to={href}>
            {ctaContent}
          </Link>
        ) : (
          ctaContent
        )}
      </div>
    );
  }
);
ServiceCard.displayName = "ServiceCard";

export { ServiceCard };
