/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { relationshipData } from './data/relationshipData';
import { CustomCursor } from './components/CustomCursor';
import { OpeningCurtain } from './components/OpeningCurtain';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { LoveCounter } from './components/LoveCounter';
import { Timeline } from './components/Timeline';
import { ThingsILove } from './components/ThingsILove';
import { MemoryGallery } from './components/MemoryGallery';
import { IfLoveWere } from './components/IfLoveWere';
import { MusicPlayerSection } from './components/MusicPlayerSection';
import { LoveLetter } from './components/LoveLetter';
import { OpenWhen } from './components/OpenWhen';
import { RelationshipQuiz } from './components/RelationshipQuiz';
import { ReasonsScroll } from './components/ReasonsScroll';
import { VideoMemory } from './components/VideoMemory';
import { FinalSection } from './components/FinalSection';
import { Footer } from './components/Footer';
import { SurpriseModal } from './components/SurpriseModal';
import { SecretEasterEggModal } from './components/SecretEasterEggModal';
import { CustomizationGuideModal } from './components/CustomizationGuideModal';
import { FloatingMusicWidget } from './components/FloatingMusicWidget';

export default function App() {
  const [hasEnteredSite, setHasEnteredSite] = useState(false);
  const [isSurpriseOpen, setIsSurpriseOpen] = useState(false);
  const [isSecretOpen, setIsSecretOpen] = useState(false);
  const [isGuideOpen, setIsGuideOpen] = useState(false);

  const data = relationshipData;

  return (
    <div className="relative min-h-screen bg-zinc-950 text-stone-100 selection:bg-rose-900/60 selection:text-rose-100 font-sans-clean overflow-x-hidden">
      {/* Desktop subtle custom cursor */}
      <CustomCursor />

      {/* Opening curtain screen for the initial surprise entrance */}
      {!hasEnteredSite && (
        <OpeningCurtain
          boyfriendName={data.boyfriendName}
          onOpen={() => setHasEnteredSite(true)}
          audioUrl={data.song.audioUrl}
        />
      )}

      {/* Main website content */}
      <div
        className={`transition-opacity duration-1000 ${
          hasEnteredSite ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Navigation Bar */}
        <Navigation
          boyfriendName={data.boyfriendName}
          myName={data.myName}
          onOpenSecret={() => setIsSecretOpen(true)}
          onOpenGuide={() => setIsGuideOpen(true)}
          onTriggerSurprise={() => setIsSurpriseOpen(true)}
          audioUrl={data.song.audioUrl}
        />

        <main>
          {/* 1. Hero Section */}
          <Hero
            headline={data.hero.mainHeadline}
            subtitle={data.hero.mainSubtitle}
            scrollIndicatorText={data.hero.scrollIndicatorText}
            heroImageCaption={data.hero.heroImageCaption}
            boyfriendName={data.boyfriendName}
          />

          {/* 2. Live Relationship Counter */}
          <LoveCounter
            startDateStr={data.relationshipStartDate}
            patchUpDateStr={data.patchUpDate}
          />

          {/* 3. Our Story / Timeline */}
          <Timeline events={data.timeline} />

          {/* 4. Things I Love About You */}
          <ThingsILove cards={data.thingsILove} />

          {/* 5. September 12 Pictures Gallery */}
          <MemoryGallery
            sep12Info={data.sep12Gallery}
          />

          {/* 6. "If Our Love Were..." Flip Cards */}
          <IfLoveWere items={data.ifOurLoveWere} />

          {/* 7. Dedicated Music Section */}
          <MusicPlayerSection song={data.song} />

          {/* 8. Sealed Love Letter */}
          <LoveLetter letter={data.loveLetter} />

          {/* 9. Open When... Comfort Letters */}
          <OpenWhen messages={data.openWhenMessages} />

          {/* 10. Mini Game — "How Well Do You Know Us?" */}
          <RelationshipQuiz quiz={data.quiz} />

          {/* 12. Reasons I Choose You */}
          <ReasonsScroll reasons={data.reasonsIChooseYou} />

          {/* 13. Optional Video Memory Section (disabled per user request) */}
          <VideoMemory video={data.videoMemory} />

          {/* 14. Final Cinematic Section */}
          <FinalSection
            heading={data.finalSection.heading}
            paragraphs={data.finalSection.paragraphs}
            signature={data.finalSection.signature}
            onTriggerSurprise={() => setIsSurpriseOpen(true)}
            surpriseButtonLabel={data.surprise.buttonLabel}
          />
        </main>

        {/* Footer */}
        <Footer
          myName={data.myName}
          boyfriendName={data.boyfriendName}
          onOpenGuide={() => setIsGuideOpen(true)}
          onOpenSecret={() => setIsSecretOpen(true)}
        />

        {/* Floating audio control widget */}
        <FloatingMusicWidget
          songTitle={data.song.title}
          artist={data.song.artist}
          audioUrl={data.song.audioUrl}
        />

        {/* Modals */}
        <SurpriseModal
          isOpen={isSurpriseOpen}
          onClose={() => setIsSurpriseOpen(false)}
          boyfriendName={data.boyfriendName}
          surpriseData={data.surprise}
        />

        <SecretEasterEggModal
          isOpen={isSecretOpen}
          onClose={() => setIsSecretOpen(false)}
          secret={data.secretEasterEgg}
        />

        <CustomizationGuideModal
          isOpen={isGuideOpen}
          onClose={() => setIsGuideOpen(false)}
        />
      </div>
    </div>
  );
}
