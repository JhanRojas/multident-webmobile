import { useEffect, useState } from 'react';
import {
  IonPage,
  IonContent,
  IonHeader,
  IonToolbar,
  IonButtons,
  IonBackButton,
  IonTitle,
  IonSearchbar,
  IonList,
  IonItem,
  IonLabel,
  IonAvatar,
} from '@ionic/react';

import { Doctor } from '../../../../models/doctor.model';
import { doctorsMock } from '../../../../mocks/doctors.mock';

const SelectDoctor: React.FC = () => {
  const [searchText, setSearchText] = useState('');
  const [filteredDoctors, setFilteredDoctors] = useState<Doctor[]>(doctorsMock);
  useEffect(() => {
    const filtered = doctorsMock.filter((doctor) => {
      const fullName = `${doctor.firstname} ${doctor.lastname}`;
      return fullName.toLowerCase().includes(searchText.toLowerCase());
    });
    setFilteredDoctors(filtered);
  }, [searchText]);
  return (
    <IonPage>
      <IonHeader translucent>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/appointments/new" />
          </IonButtons>
          <IonTitle>Agendar cita</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonSearchbar
          placeholder="Ingresa el nombre o apellido del médico"
          animated
          value={searchText}
          onIonInput={(e) => setSearchText(e.detail.value!)}
        />
        <IonList inset>
          {filteredDoctors.map((doctor) => (
            <IonItem
              key={doctor.id}
              button
              routerLink="/appointments/doctor/select-specialty"
            >
              <IonAvatar slot="start" style={{ width: '50px', height: '50px' }}>
                <img src={doctor.photo} alt={doctor.firstname} />
              </IonAvatar>
              <IonLabel>
                <h2>
                  {doctor.firstname}
                  <br />
                  {doctor.lastname}
                </h2>
                <p>{doctor.specialty}</p>
              </IonLabel>
            </IonItem>
          ))}
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default SelectDoctor;
