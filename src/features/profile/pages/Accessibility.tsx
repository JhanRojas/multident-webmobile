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
  const t = translations[language as keyof typeof translations];

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/profile" text={t.backText} />
          </IonButtons>
          <IonTitle>Accesibilidad</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList inset>
          <IonItem>
            <IonLabel>Modo oscuro</IonLabel>
            <IonToggle
              slot="end"
              checked={darkMode}
              onIonChange={(e) => toggleDarkMode(e.detail.checked)}
            />
          </IonItem>
          <IonItem>
            <IonLabel>Tamaño de texto</IonLabel>
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
            <IonLabel>Alto contraste</IonLabel>
            <IonToggle
              slot="end"
              checked={highContrast}
              onIonChange={(e) => toggleHighContrast(e.detail.checked)}
            />
          </IonItem>
          <IonItem>
            <IonLabel>Lectura por voz</IonLabel>
            <IonToggle
              slot="end"
              checked={voiceReading}
              onIonChange={(e) => toggleVoiceReading(e.detail.checked)}
            />
          </IonItem>
          <IonItem>
            <IonLabel>Idioma</IonLabel>
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
            <IonLabel>Reducir animaciones</IonLabel>
            <IonToggle
              slot="end"
              checked={reduceMotion}
              onIonChange={(e) => toggleReduceMotion(e.detail.checked)}
            />
          </IonItem>
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Accessibility;
