
import { Component, inject, OnInit  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PatientService } from '../services/patient.service';
import { ActivatedRoute } from '@angular/router';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-patient',
  standalone: true,
  imports: [CommonModule, FormsModule,RouterLink],
  templateUrl: './patient.component.html',
  styleUrl: './patient.component.css'
})
export class PatientComponent implements OnInit {

  private patientService = inject(PatientService);
  constructor(private route: ActivatedRoute) {}
  patientId: string | null = null;

  ngOnInit() {
  this.patientId = this.route.snapshot.paramMap.get('id');
  console.log('Patient ID:', this.patientId);
}

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

  // Pagination
currentPage = 1;
pageSize = 5;

// Get patients for the current page
get paginatedPatients() {
  const startIndex = (this.currentPage - 1) * this.pageSize;

  return this.patients().slice(
    startIndex,
    startIndex + this.pageSize
  );
}

// Calculate total pages
get totalPages() {
  return Math.ceil(this.patients().length / this.pageSize);
}

// Go to next page
nextPage() {
  if (this.currentPage < this.totalPages) {
    this.currentPage++;
  }
}

// Go to previous page
previousPage() {
  if (this.currentPage > 1) {
    this.currentPage--;
  }
}

// Generate page numbers
get pageNumbers() {
  return Array.from(
    { length: this.totalPages },
    (_, index) => index + 1
  );
}

// Go to selected page
goToPage(page: number) {
  this.currentPage = page;
}

}

