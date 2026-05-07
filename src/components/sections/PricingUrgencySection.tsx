import RollingButton from "../ui/RollingButton";

const plans = [
  {
    name: "Free",
    price: "$0",
    agents: "1",
    storage: "5GB",
    features: ["1 deployment/month", "Community support"],
    cta: "Start Free",
    highlight: false,
  },
  {
    name: "Pro",
    price: "$29",
    period: "/month",
    agents: "Unlimited",
    storage: "100GB",
    features: ["Unlimited deployments", "Priority support", "Email support"],
    cta: "Try Pro",
    highlight: true,
    badge: "Most Popular",
  },
  {
    name: "Team",
    price: "$99",
    period: "/month",
    agents: "Unlimited",
    storage: "1TB",
    features: ["3 team seats", "Role-based access", "Audit logs", "SLA"],
    cta: "Contact Sales",
    highlight: false,
  },
  {
    name: "Enterprise",
    price: "Custom",
    agents: "Unlimited",
    storage: "Unlimited",
    features: ["Custom seats", "Dedicated support", "99.9% SLA", "Custom integrations"],
    cta: "Talk to Us",
    highlight: false,
  },
];

export function PricingUrgencySection() {
  return (
    <section className="w-screen bg-black py-24 px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="display-lg mb-4">Simple, Transparent Pricing</h2>
          <p className="subhead text-ink-muted">Start free. Scale as you grow.</p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-4 gap-6 mb-16">
          {plans.map((plan, idx) => (
            <div
              key={idx}
              className={`relative rounded-2xl transition-all duration-300 flex flex-col h-full bg-zinc-900/40 border ${
                plan.highlight
                  ? 'border-zinc-400'
                  : 'border-zinc-800'
              }`}
              style={{
                transform: plan.highlight ? 'translateY(-20px)' : 'translateY(0)',
                boxShadow: plan.highlight ? '0 0 15px rgba(59, 130, 246, 0.2)' : 'none',
                padding: '32px'
              }}
            >
              {/* Badge - Absolutely positioned, doesn't affect layout */}
              {plan.badge && (
                <div 
                  className="absolute left-1/2 -translate-x-1/2 px-4 py-1 text-xs font-bold rounded-full whitespace-nowrap bg-white text-black"
                  style={{
                    top: '-12px'
                  }}
                >
                  {plan.badge}
                </div>
              )}

              {/* Content Container - Flex column layout */}
              <div className="flex flex-col h-full">
                {/* Fixed Height Header Section - Ensures price/specs align across cards */}
                <div className="h-40 mb-6">
                  <h3 className="font-semibold text-lg mb-3 text-white">
                    {plan.name}
                  </h3>
                  
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-white">
                      {plan.price}
                    </span>
                    {plan.period && (
                      <span className="text-sm ml-1 text-zinc-500">
                        {plan.period}
                      </span>
                    )}
                  </div>

                  {/* Specs - Fixed position in header */}
                  <div className="space-y-2">
                    <div className="flex gap-2 text-sm">
                      <span className="text-zinc-500">Agents:</span>
                      <span className="font-semibold text-white">{plan.agents}</span>
                    </div>
                    <div className="flex gap-2 text-sm">
                      <span className="text-zinc-500">Storage:</span>
                      <span className="font-semibold text-white">{plan.storage}</span>
                    </div>
                  </div>
                </div>

                {/* Features - Flex-grow to push button down */}
                <div className="border-t border-zinc-900 pt-6 flex-grow">
                  <ul className="space-y-3">
                    {plan.features.map((feature, featureIdx) => (
                      <li 
                        key={featureIdx} 
                        className="flex items-start gap-2 text-sm text-zinc-400"
                      >
                        <svg 
                          width="16" 
                          height="16" 
                          viewBox="0 0 24 24" 
                          fill="none" 
                          stroke="currentColor" 
                          className="flex-shrink-0 mt-0.5" 
                          style={{ color: 'var(--color-primary)' }}
                        >
                          <path d="M20 6L9 17l-5-5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Button - Locked at bottom */}
                <div className="border-t border-t-zinc-900 pt-6 mt-8">
                  <RollingButton
                    label={plan.cta}
                    variant={plan.highlight ? "primary" : "ghost"}
                    className="w-full"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>


      </div>
    </section>
  )
}
