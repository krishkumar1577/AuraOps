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
    <section className="w-screen bg-gradient-to-r from-primary via-primary to-primary-hover py-10 px-8">
      <div className="max-w-5xl mx-auto">
        {/* Main Content Container */}
        <div className="text-center mb-8">
          {/* Headline */}
          <h2 className="display-md mb-4 text-white leading-tight">
            Ready to Deploy?
          </h2>

          {/* Subheading */}
          <p className="body-lg text-white/90 mb-2">
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
            className="flex-1 px-6 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-white/40 focus:ring-2 focus:ring-white/20 transition-all duration-200 disabled:opacity-50"
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
          <p className="body-sm text-white/80">
            ✓ No credit card required
          </p>
          <p className="caption text-white/70">
            Limited founder spots: 40 remaining
          </p>
        </div>
      </div>
    </section>
  );
}
