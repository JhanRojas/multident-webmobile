export const speak = (text: string) => {
  const enabled = localStorage.getItem('voiceReading') === 'true';
  if (!enabled) {
    console.log('Voice reading disabled');
    return;
  }

  if (!window.speechSynthesis) {
    console.log('Speech synthesis no soportado');
    return;
  }

  window.speechSynthesis.cancel();

  const utterance = new SpeechSynthesisUtterance(text);

  const language = localStorage.getItem('language') || 'es';

  utterance.lang = language === 'en' ? 'en-US' : 'es-ES';

  utterance.rate = 1;
  utterance.pitch = 1;
  utterance.volume = 1;

  const voices = window.speechSynthesis.getVoices();
  console.log(voices);

  if (voices.length > 0) {
    const selectedVoice = voices.find((voice) =>
      voice.lang.includes(language === 'en' ? 'en' : 'es')
    );
    if (selectedVoice) {
      utterance.voice = selectedVoice;
    }
  }

  window.speechSynthesis.speak(utterance);
};
