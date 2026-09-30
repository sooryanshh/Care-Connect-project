# CareConnect Frontend — Day 1

## Folder structure
01-auth/                  Login and registration
02-management/            Patient and doctor management
03-appointment-ehr/       Appointments, EHR and consultation
04-cpoe-prescription/     CPOE and prescriptions
05-patient-portal/        Patient portal
dashboards/               Patient, Doctor and Admin dashboards
assets/css/common.css     Shared CSS
assets/js/common.js       Shared JavaScript

## How files are connected
Every module HTML file links to the shared stylesheet:
<link rel="stylesheet" href="../assets/css/common.css">
and shared JavaScript:
<script src="../assets/js/common.js"></script>

## Important
This is a Day-1 static prototype. The project specification uses Angular, so after the screen design is approved,
these pages should be converted into Angular components and the JavaScript logic into TypeScript/services.
Spring Boot REST APIs will replace the demo alerts and hard-coded data.
