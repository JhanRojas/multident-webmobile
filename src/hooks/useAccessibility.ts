import { useState, useEffect } from 'react';

export const useAccessibility = () => {
  // States
  const [darkMode, setDarkMode] = useState(false);
  const [fontSize, setFontSize] = useState(16);
  const [highContrast, setHighContrast] = useState(false);
  const [language, setLanguage] = useState('es');

  const [reduceMotion, setReduceMotion] = useState(false);

  const [voiceReading, setVoiceReading] = useState(false);

  // DARK MODE

  const toggleDarkMode = (enabled: boolean) => {
    document.documentElement.classList.toggle('ion-palette-dark', enabled);

    localStorage.setItem('darkMode', JSON.stringify(enabled));

    setDarkMode(enabled);
  };

  // FONT SIZE

  const changeFontSize = (size: number) => {
    document.documentElement.style.setProperty('--app-font-size', `${size}px`);

    localStorage.setItem('fontSize', size.toString());

    setFontSize(size);
  };

  // HIGH CONTRAST

  const toggleHighContrast = (enabled: boolean) => {
    document.documentElement.classList.toggle('high-contrast', enabled);

    localStorage.setItem('highContrast', JSON.stringify(enabled));

    setHighContrast(enabled);
  };

  // LANGUAGE

  const changeLanguage = (value: string) => {
    localStorage.setItem('language', value);

    setLanguage(value);
  };

  // REDUCE MOTION

  const toggleReduceMotion = (enabled: boolean) => {
    document.documentElement.classList.toggle('reduce-motion', enabled);

    localStorage.setItem('reduceMotion', JSON.stringify(enabled));

    setReduceMotion(enabled);

    window.location.reload();
  };

  // VOICE

  const toggleVoiceReading = (enabled: boolean) => {
    localStorage.setItem('voiceReading', JSON.stringify(enabled));

    setVoiceReading(enabled);
  };

  // LOAD CONFIG

  useEffect(() => {
    // DARK MODE

    const savedDarkMode = localStorage.getItem('darkMode');

    if (savedDarkMode) {
      const parsed = JSON.parse(savedDarkMode);

      document.documentElement.classList.toggle('ion-palette-dark', parsed);

      setDarkMode(parsed);
    }

    // FONT SIZE

    const savedFontSize = localStorage.getItem('fontSize');

    if (savedFontSize) {
      document.documentElement.style.setProperty(
        '--app-font-size',
        `${savedFontSize}px`
      );

      setFontSize(Number(savedFontSize));
    }

    // HIGH CONTRAST

    const savedHighContrast = localStorage.getItem('highContrast');

    if (savedHighContrast) {
      const parsed = JSON.parse(savedHighContrast);

      document.documentElement.classList.toggle('high-contrast', parsed);

      setHighContrast(parsed);
    }

    // LANGUAGE

    const savedLanguage = localStorage.getItem('language');

    if (savedLanguage) {
      setLanguage(savedLanguage);
    }

    // REDUCE MOTION

    const savedReduceMotion = localStorage.getItem('reduceMotion');

    if (savedReduceMotion) {
      const parsed = JSON.parse(savedReduceMotion);

      document.documentElement.classList.toggle('reduce-motion', parsed);

      setReduceMotion(parsed);
    }

    // VOICE

    const savedVoiceReading = localStorage.getItem('voiceReading');

    if (savedVoiceReading) {
      setVoiceReading(JSON.parse(savedVoiceReading));
    }
  }, []);

  return {
    darkMode,
    fontSize,
    highContrast,
    language,
    reduceMotion,
    voiceReading,

    toggleDarkMode,
    changeFontSize,
    toggleHighContrast,
    changeLanguage,
    toggleReduceMotion,
    toggleVoiceReading,
  };
};
