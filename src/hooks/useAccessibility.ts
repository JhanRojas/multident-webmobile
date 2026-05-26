import { useState, useEffect } from 'react';

export const useAccessibility = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [fontSize, setFontSize] = useState(16);
  const [highContrast, setHighContrast] = useState(false);
  const [language, setLanguage] = useState('es');
  const [reduceMotion, setReduceMotion] = useState(false);
  const [voiceReading, setVoiceReading] = useState(false);

  const toggleDarkMode = (enabled: boolean) => {
    document.documentElement.classList.toggle('ion-palette-dark', enabled);
    localStorage.setItem('darkMode', JSON.stringify(enabled));
    setDarkMode(enabled);
  };

  const changeFontSize = (size: number) => {
    document.documentElement.style.setProperty('--app-font-size', `${size}px`);
    localStorage.setItem('fontSize', size.toString());
    setFontSize(size);
  };

  const toggleHighContrast = (enabled: boolean) => {
    document.documentElement.classList.toggle('high-contrast', enabled);
    localStorage.setItem('highContrast', JSON.stringify(enabled));
    setHighContrast(enabled);
  };

  const changeLanguage = (value: string) => {
    localStorage.setItem('language', value);
    setLanguage(value);
  };

  const toggleReduceMotion = (enabled: boolean) => {
    document.documentElement.classList.toggle('reduce-motion', enabled);
    localStorage.setItem('reduceMotion', JSON.stringify(enabled));
    setReduceMotion(enabled);
    window.location.reload();
  };

  const toggleVoiceReading = (enabled: boolean) => {
    localStorage.setItem('voiceReading', JSON.stringify(enabled));
    setVoiceReading(enabled);
  };

  useEffect(() => {
    const savedDarkMode = localStorage.getItem('darkMode');
    const savedFontSize = localStorage.getItem('fontSize');
    const savedHighContrast = localStorage.getItem('highContrast');
    const savedVoiceReading = localStorage.getItem('voiceReading');
    const savedLanguage = localStorage.getItem('language');
    const savedReduceMotion = localStorage.getItem('reduceMotion');

    if (savedDarkMode) {
      const parsed = JSON.parse(savedDarkMode);
      document.documentElement.classList.toggle('ion-palette-dark', parsed);
      setDarkMode(parsed);
    }

    if (savedFontSize) {
      document.documentElement.style.setProperty(
        '--app-font-size',
        `${savedFontSize}px`
      );
      setFontSize(Number(savedFontSize));
    }

    if (savedHighContrast) {
      const parsed = JSON.parse(savedHighContrast);
      document.documentElement.classList.toggle('high-contrast', parsed);
      setHighContrast(parsed);
    }

    if (savedVoiceReading) {
      setVoiceReading(JSON.parse(savedVoiceReading));
    }

    if (savedLanguage) {
      setLanguage(savedLanguage);
    }

    if (savedReduceMotion) {
      const parsed = JSON.parse(savedReduceMotion);
      document.documentElement.classList.toggle('reduce-motion', parsed);
      setReduceMotion(parsed);
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
