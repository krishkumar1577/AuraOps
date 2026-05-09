"use client";

import { useState } from "react";
import RollingButton from "../ui/RollingButton";

interface EarlySignupBarProps {
  onSignup?: (email: string) => void;
}

export function EarlySignupBar({ onSignup }: EarlySignupBarProps) {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsLoading(true);
    try {
      if (onSignup) {
        onSignup(email);
      }
      setEmail("");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section
      className="w-screen bg-canvas pb-16 pt-8 px-8"
      style={{ backgroundImage: 'linear-gradient(135deg, rgba(255, 159, 252, 0.05), rgba(82, 39, 255, 0.05))' }}
    >
      <div className="max-w-5xl mx-auto">
        <div className="rounded-3xl border border-hairline bg-surface-1/80 px-6 py-8 shadow-[0_0_0_1px_rgba(255,255,255,0.02)] sm:px-10 sm:py-10">
          {/* Main Content Container */}
          <div className="text-center mb-8">
            {/* Headline */}
            <h2 className="display-md mb-4 text-white leading-tight">
              Ready to Deploy?
            </h2>

            {/* Subheading */}
            <p className="body-lg text-ink-muted mb-2">
              Join 16 founders already using AuraOps
            </p>
          </div>

          {/* Email Input + Button */}
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 justify-center mb-6 max-w-2xl mx-auto">
            <input
              type="email"
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={isLoading}
              className="flex-1 px-6 py-4 bg-surface-2 border border-hairline rounded-lg text-white placeholder-white/35 focus:outline-none focus:border-primary/40 focus:ring-2 focus:ring-primary/15 transition-all duration-200 disabled:opacity-50"
              required
            />
            <RollingButton
              label={isLoading ? "Sending..." : "Claim Your Founder Spot"}
              variant="primary"
              disabled={isLoading}
              className="sm:w-auto"
            />
          </form>

          {/* Trust Message */}
          <div className="text-center space-y-2">
            <p className="body-sm text-ink-muted">
              ✓ No credit card required
            </p>
            <p className="caption text-ink-subtle">
              Limited founder spots: 40 remaining
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
