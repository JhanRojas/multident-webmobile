import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonButtons,
  IonBackButton,
  IonContent,
  IonList,
  IonItem,
  IonLabel,
  IonToggle,
  IonRange,
  IonSelect,
  IonSelectOption,
  IonButton,
} from '@ionic/react';

import { translations } from '../../../utils/translations';
import { useAccessibility } from '../../../hooks/useAccessibility';

const Accessibility: React.FC = () => {
  const {
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
  } = useAccessibility();

  const languageSaved = localStorage.getItem('language') || 'es';
  const t = translations[languageSaved as keyof typeof translations];

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/profile" text={t.backText} />
          </IonButtons>
          <IonTitle>{t.accessibilityTitle}</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonList inset>
          <IonItem>
            <IonLabel>{t.darkModeText}</IonLabel>
            <IonToggle
              slot="end"
              checked={darkMode}
              onIonChange={(e) => toggleDarkMode(e.detail.checked)}
            />
          </IonItem>
          <IonItem>
            <IonLabel>{t.textSizeText}</IonLabel>
          </IonItem>
          <IonItem>
            <IonRange
              min={14}
              max={30}
              step={2}
              snaps={true}
              pin={true}
              value={fontSize}
              onIonChange={(e) => changeFontSize(e.detail.value as number)}
            />
          </IonItem>
          <IonItem>
            <IonLabel>{t.highContrastText}</IonLabel>
            <IonToggle
              slot="end"
              checked={highContrast}
              onIonChange={(e) => toggleHighContrast(e.detail.checked)}
            />
          </IonItem>
          <IonItem>
            <IonLabel>{t.voiceReadingText}</IonLabel>
            <IonToggle
              slot="end"
              checked={voiceReading}
              onIonChange={(e) => toggleVoiceReading(e.detail.checked)}
            />
          </IonItem>
          <IonItem>
            <IonLabel>{t.languageText}</IonLabel>
            <IonSelect
              value={language}
              placeholder="Seleccionar"
              onIonChange={(e) => changeLanguage(e.detail.value)}
            >
              <IonSelectOption value="en">Inglés</IonSelectOption>
              <IonSelectOption value="es">Español</IonSelectOption>
              <IonSelectOption value="qu">Quechua</IonSelectOption>
            </IonSelect>
          </IonItem>
          <IonItem>
            <IonLabel>{t.reduceAnimationText}</IonLabel>
            <IonToggle
              slot="end"
              checked={reduceMotion}
              onIonChange={(e) => toggleReduceMotion(e.detail.checked)}
            />
          </IonItem>
        </IonList>
        <IonButton expand="block" className="ion-padding">
          {t.restoreChangesText}
        </IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Accessibility;
