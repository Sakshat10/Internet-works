"use client";

import { PresentationProvider } from "@/components/presentation-provider";
import { ProgressIndicator } from "@/components/ui/progress-indicator";
import { HeroSection } from "@/components/sections/hero-section";
import { WhatIsInternetSection } from "@/components/sections/what-is-internet-section";
import { HistoryTimelineSection } from "@/components/sections/history-timeline-section";
import { WorldNetworkSection } from "@/components/sections/world-network-section";
import { InternetComponentsSection } from "@/components/sections/internet-components-section";
import { IPAddressSection } from "@/components/sections/ip-address-section";
import { GoogleJourneySection } from "@/components/sections/google-journey-section";
import { MessageSendingSection } from "@/components/sections/message-sending-section";
import { PacketsSection } from "@/components/sections/packets-section";
import { EncryptionSection } from "@/components/sections/encryption-section";
import { CompleteJourneySection } from "@/components/sections/complete-journey-section";
import { QuizSection } from "@/components/sections/quiz-section";
import { usePresentationMode } from "@/components/presentation-provider";

function PageContent() {
  const { currentSection } = usePresentationMode();

  return (
    <>
      {/* Progress Indicator */}
      <ProgressIndicator current={currentSection + 1} total={12} />
      
      {/* Sections */}
      <HeroSection />
      <WhatIsInternetSection />
      <HistoryTimelineSection />
      <WorldNetworkSection />
      <InternetComponentsSection />
      <IPAddressSection />
      <GoogleJourneySection />
      <MessageSendingSection />
      <PacketsSection />
      <EncryptionSection />
      <CompleteJourneySection />
      <QuizSection />

      {/* Footer */}
      <footer className="bg-[#0B1020] border-t border-white/5 py-8 text-center">
        <p className="text-muted-foreground text-sm">
          Made with ❤️ for learning how the Internet works
        </p>
        <p className="text-muted-foreground text-xs mt-2 opacity-60">
          An interactive educational experience for students
        </p>
      </footer>
    </>
  );
}

export default function Home() {
  return (
    <PresentationProvider totalSections={12}>
      <main className="relative">
        <PageContent />
      </main>
    </PresentationProvider>
  );
}
