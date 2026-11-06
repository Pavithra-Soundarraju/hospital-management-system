
import { Injectable, signal } from '@angular/core';

export interface Patient {
  id: number;
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
      const stored = JSON.parse(
        localStorage.getItem('patients') || '[]'
      ) as Partial<Patient>[];

      // Find the highest existing ID
      let nextId = Math.max(
        0,
        ...stored.map(patient => patient.id ?? 0)
      ) + 1;

      // Give IDs to old patients that don't have one
      const updated = stored.map(patient => ({
        ...patient,
        id: patient.id ?? nextId++
      })) as Patient[];

      // Save updated patient records
      localStorage.setItem('patients', JSON.stringify(updated));

      return updated;

    } catch {
      return [];
    }
  }

  patients = signal<Patient[]>(this.loadPatients());

  addPatient(patient: Omit<Patient, 'id'>) {

    this.patients.update(current => {

      const newPatient: Patient = {
        ...patient,
        id: Math.max(0, ...current.map(p => p.id)) + 1
      };

      const updated = [...current, newPatient];

      localStorage.setItem(
        'patients',
        JSON.stringify(updated)
      );

      return updated;
    });
  }
}

