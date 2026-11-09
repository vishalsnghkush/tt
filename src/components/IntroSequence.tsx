import React, { useCallback, useEffect, useRef, useState } from 'react';

interface IntroSequenceProps {
  onComplete: () => void;
}

const GREETINGS = [
  { text: 'नमस्कार', language: 'Hindi' },
  { text: 'Hello', language: 'English' },
  { text: 'Bonjour', language: 'French' },
  { text: 'Hola', language: 'Spanish' },
  { text: 'வணக்கம்', language: 'Tamil' },
  { text: 'Namaste', language: 'Universal' },
];

export const IntroSequence: React.FC<IntroSequenceProps> = ({ onComplete }) => {
  const [phase, setPhase] = useState<'greetings' | 'portrait' | 'handoff'>('greetings');
  const [greetingIndex, setGreetingIndex] = useState(0);
  const [leaving, setLeaving] = useState(false);
  const [handoffStyle, setHandoffStyle] = useState<React.CSSProperties>({});
  const [nameHandoffStyle, setNameHandoffStyle] = useState<React.CSSProperties>({});
  const portraitRef = useRef<HTMLDivElement>(null);
  const nameRef = useRef<HTMLHeadingElement>(null);
  const completedRef = useRef(false);

  const complete = useCallback(() => {
    if (completedRef.current) return;

    completedRef.current = true;
    setLeaving(true);
    window.setTimeout(onComplete, 750);
  }, [onComplete]);

  const startHandoff = useCallback(() => {
    const avatarTarget = document.querySelector<HTMLElement>('[data-intro-avatar-target]');
    const nameTarget = document.querySelector<HTMLElement>('[data-intro-name-target]');
    const portrait = portraitRef.current;
    const name = nameRef.current;

    if (!avatarTarget || !nameTarget || !portrait || !name) {
      setPhase('handoff');
      return;
    }

    const avatarRect = avatarTarget.getBoundingClientRect();
    const portraitRect = portrait.getBoundingClientRect();
    const targetNameRect = nameTarget.getBoundingClientRect();
    const nameRect = name.getBoundingClientRect();

    setHandoffStyle({
      transform: `translate(${avatarRect.left + avatarRect.width / 2 - (portraitRect.left + portraitRect.width / 2)}px, ${avatarRect.top + avatarRect.height / 2 - (portraitRect.top + portraitRect.height / 2)}px) scale(${avatarRect.width / portraitRect.width})`,
    });
    setNameHandoffStyle({
      transform: `translate(${targetNameRect.left + targetNameRect.width / 2 - (nameRect.left + nameRect.width / 2)}px, ${targetNameRect.top + targetNameRect.height / 2 - (nameRect.top + nameRect.height / 2)}px) scale(${Math.min(targetNameRect.width / nameRect.width, 1)})`,
    });
    setPhase('handoff');
  }, []);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) {
      setPhase('portrait');
      const reducedTimer = window.setTimeout(complete, 900);
      return () => window.clearTimeout(reducedTimer);
    }

    const greetingTimer = window.setInterval(() => {
      setGreetingIndex((current) => (current + 1) % GREETINGS.length);
    }, 520);

    const portraitTimer = window.setTimeout(() => setPhase('portrait'), 2700);
    const handoffTimer = window.setTimeout(startHandoff, 4000);
    const completeTimer = window.setTimeout(complete, 5600);

    return () => {
      window.clearInterval(greetingTimer);
      window.clearTimeout(portraitTimer);
      window.clearTimeout(handoffTimer);
      window.clearTimeout(completeTimer);
    };
  }, [complete, startHandoff]);

  const greeting = GREETINGS[greetingIndex];

  return (
    <div
      className={`intro-sequence ${phase !== 'greetings' ? 'intro-sequence--portrait' : ''} ${phase === 'handoff' ? 'intro-sequence--handoff' : ''} ${leaving ? 'intro-sequence--leaving' : ''}`}
      role="dialog"
      aria-label="Welcome animation"
      aria-live="polite"
    >
      {phase === 'greetings' ? (
        <div className="intro-greetings" key={greeting.text}>
          <span className="intro-greeting-dot" aria-hidden="true" />
          <p className="intro-word" aria-label={`${greeting.language}: ${greeting.text}`}>
            {greeting.text}
          </p>
          <span className="intro-greeting-line" aria-hidden="true" />
        </div>
      ) : (
        <div className="intro-portrait-stage">
          <div className="intro-portrait-halo" aria-hidden="true" />
          <div ref={portraitRef} className="intro-portrait-frame" style={handoffStyle}>
            <img src="/New_avatar_.jpeg" alt="Aditi Malviya" />
          </div>
          <div className="intro-portrait-copy" style={nameHandoffStyle}>
            <h1 ref={nameRef}>Aditi Malviya</h1>
          </div>
        </div>
      )}

      {phase === 'greetings' && (
        <button type="button" className="intro-skip" onClick={complete}>
          Skip intro <span aria-hidden="true">↗</span>
        </button>
      )}
    </div>
  );
};
