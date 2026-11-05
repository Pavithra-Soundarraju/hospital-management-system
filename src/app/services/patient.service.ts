
import { Injectable, signal } from '@angular/core';

export interface Patient {
  patientName: string;
  admittedDate: string;
  room: string;
  concern: string;
  doctor: string;
  status: string;
  contact: string;
}

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  private loadPatients(): Patient[] {
    try {
      return JSON.parse(
        localStorage.getItem('patients') || '[]'
      ) as Patient[];
    } catch {
      return [];
    }
  }

  patients = signal<Patient[]>(this.loadPatients());

  addPatient(patient: Patient) {

    this.patients.update(current => {

      const updated = [...current, patient];

      localStorage.setItem(
        'patients',
        JSON.stringify(updated)
      );

      return updated;
    });
  }
}
