
import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PatientService } from '../services/patient.service';

@Component({
  selector: 'app-patient',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './patient.component.html',
  styleUrl: './patient.component.css'
})
export class PatientComponent {

  private patientService = inject(PatientService);

  patients = this.patientService.patients;

  selectedTab = 'Hospitalized';
  showAddPatientPanel = false;

  newPatient = {
    patientName: '',
    admittedDate: '',
    room: '',
    concern: '',
    doctor: '',
    status: '',
    contact: ''
  };

  changeTab(tab: string) {
    this.selectedTab = tab;
  }

  openAddPatient() {
    this.showAddPatientPanel = true;
  }

  closePanel() {
    this.showAddPatientPanel = false;
    this.resetForm();
  }

  formValid(): boolean {
    return !!(
      this.newPatient.patientName.trim() &&
      this.newPatient.admittedDate &&
      this.newPatient.room.trim() &&
      this.newPatient.concern.trim() &&
      this.newPatient.doctor.trim() &&
      this.newPatient.status &&
      this.newPatient.contact.trim()
    );
  }

  savePatient() {

    if (!this.formValid()) {
      return;
    }

    this.patientService.addPatient({
      ...this.newPatient
    });

    this.resetForm();
    this.showAddPatientPanel = false;
  }

  resetForm() {
    this.newPatient = {
      patientName: '',
      admittedDate: '',
      room: '',
      concern: '',
      doctor: '',
      status: '',
      contact: ''
    };
  }
}

