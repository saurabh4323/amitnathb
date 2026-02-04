"use client";

import HeaderB from "../components/landing/HeaderB";
import HeroB from "../components/landing/HeroB";
import ProblemSection from "../components/landing/ProblemSection";
import CoachSection from "../components/landing/CoachSection";
import SolutionSection from "../components/landing/SolutionSection";
import AgendaSection from "../components/landing/AgendaSection";
import InvestmentSection from "../components/landing/InvestmentSection";
import TestimonialsB from "../components/landing/TestimonialsB";
import FinalCTAB from "../components/landing/FinalCTAB";
import FAQSection from "../components/landing/FAQSection";
import Footer from "../components/landing/Footer";
import RegistrationForm from "../components/landing/RegistrationForm";

export default function Home() {
  const scrollToRegistration = () => {
    const element = document.getElementById('register');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <main className="min-h-screen bg-slate-950">
      <HeaderB />

      <HeroB onRegister={scrollToRegistration} />

      <ProblemSection />

      <CoachSection />

      <SolutionSection />

      <AgendaSection />

      <InvestmentSection />

      <TestimonialsB />

      {/* Embedded Registration Centerpiece (Using Version A Form Pattern) */}
      <section id="register" className="pt-4 pb-12 bg-slate-950 relative overflow-hidden border-t border-white/5">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-amber-500/5 blur-[120px] rounded-full pointer-events-none" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <div className="space-y-3">
              <h2 className="text-4xl md:text-5xl font-normal text-white leading-[0.9] uppercase tracking-tight">
                Claim your seat <br />
                <span className="text-amber-500 italic">At the table.</span>
              </h2>
              <p className="text-base md:text-lg text-slate-400 max-w-2xl mx-auto font-light leading-relaxed">
                Join the Global CXO Summit 2026. One registration for the entire 7-day immersion.
              </p>
            </div>

            <div className="flex justify-center">
              <RegistrationForm />
            </div>
          </div>
        </div>
      </section>

      <FinalCTAB onRegister={scrollToRegistration} />

      <FAQSection />

      <div className="border-t border-white/5 bg-slate-950">
        <Footer />
      </div>
    </main>
  );
}
