import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PatientService, Patient } from '../services/patient.service';

@Component({
  selector: 'app-patient-details',
  standalone: true,
  imports: [],
  templateUrl: './patient-details.component.html',
  styleUrl: './patient-details.component.css'
})
export class PatientDetailsComponent implements OnInit {

  private route = inject(ActivatedRoute);
  private patientService = inject(PatientService);

  patient: Patient | undefined;

  ngOnInit() {

    const id = Number(
      this.route.snapshot.paramMap.get('id')
    );

    this.patient = this.patientService
      .patients()
      .find(p => p.id === id);

    console.log('Selected Patient:', this.patient);
  }
}