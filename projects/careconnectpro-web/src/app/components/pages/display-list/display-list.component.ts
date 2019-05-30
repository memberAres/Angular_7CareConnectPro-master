import { Component, OnInit, Input } from "@angular/core";
import { Router } from "@angular/router";

import {
  PhysicianService,
  EmployeeService,
  VendorService,
  PatientInTakeService
} from "service-lib";
import {
  EmployeeSummary,
  Physician,
  Vendor,
  APIUrls,
  Patient,
  PatientHeader
} from "model-lib";

@Component({
  selector: "app-display-list",
  templateUrl: "./display-list.component.html",
  styleUrls: ["./display-list.component.css"]
})
export class DisplayListComponent implements OnInit {
  @Input() lists;
  @Input() imguser1;
  @Input() type;
  cols: any[];
  constructor(
    public employeeService: EmployeeService,
    private physicianService: PhysicianService,
    private vendorService: VendorService,
    public intakeService: PatientInTakeService,
    public router: Router
  ) {}

  ngOnInit() {
    console.log(this.lists);
    this.physicianService.physician.isActive = true;
    this.cols = [
      { field: "photoName", header: "Useriamge" },
      { field: "firstName", header: "Firstname" },
      { field: "lastName", header: "Lastname" },
      { field: "jobTitle", header: "Occupation" }
    ];
  }

  getEmployeeImg(imgName: any): any {
    let imgUrl: any;

    if (imgName != undefined && imgName != "") {
      imgUrl = APIUrls.GetImageEmployee + "/" + imgName;
    } else {
      imgUrl = this.imguser1;
    }
    return imgUrl;
  }

  getPhysicianImg(imgName: any): any {
    let imgUrl: any;

    if (imgName != undefined && imgName != "") {
      imgUrl = APIUrls.GetImagePhysician + "/" + imgName;
    } else {
      imgUrl = this.imguser1;
    }
    return imgUrl;
  }

  getVendorImg(imgName: any): any {
    let imgUrl: any;

    if (imgName != undefined && imgName != "") {
      imgUrl = APIUrls.GetImageVendor + "/" + imgName;
    } else {
      imgUrl = this.imguser1;
    }
    return imgUrl;
  }

  getPatientImg(imgName: string) {
    let imgUrl: any;

    if (imgName != undefined && imgName != "") {
      imgUrl = APIUrls.GetImagePatient + "/" + imgName;
    } else {
      imgUrl = this.imguser1;
    }
    return imgUrl;
  }

  onRowSelectEmployee(col) {
    console.log(col);
    this.employeeService.isNewEmployee = false;
    this.employeeService.employee = this.cloneEmployee(col);
    this.router.navigate(["/home/personnel/employee/detail"]);
  }

  cloneEmployee(a: EmployeeSummary): EmployeeSummary {
    let employee: EmployeeSummary = {};
    let y: any = a;
    for (let prop in a) {
      employee[prop] = y[prop];
    }
    return employee;
  }

  onRowSelectPhysician(l) {
    this.physicianService.isNewPhysician = false;
    this.physicianService.physician = this.clonePhysician(l);
    this.router.navigate(["/home/personnel/physician/detail"]);
  }

  private clonePhysician(a: Physician): Physician {
    let physician: Physician = {};
    let y: any = a;
    for (let prop in a) {
      physician[prop] = y[prop];
    }
    return physician;
  }

  onRowSelectVendor(l) {
    this.vendorService.isNewVendor = false;
    this.vendorService.vendor = this.cloneVendor(l);
    this.router.navigate(["/home/personnel/vendor/detail"]);
  }

  private cloneVendor(a: Vendor): Vendor {
    let vendor: Vendor = {};
    let y: any = a;
    for (let prop in a) {
      vendor[prop] = y[prop];
    }
    return vendor;
  }

  onRowSelectPatient(l) {
    this.intakeService.updateIsNewPatient(false);
    let patient: Patient = {};
    patient.id = l.id;
    this.intakeService.updatePatient(patient);
    this.router.navigate(["/home/patient/detail"]);
  }
}
