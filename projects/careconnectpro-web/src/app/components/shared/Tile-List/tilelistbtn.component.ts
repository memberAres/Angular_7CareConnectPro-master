import { Component, OnInit } from "@angular/core";
import {
  AuthService,
  AppHtmlControlService,
  CareConnectLocalStorage,
  EmployeeService,
  MediaService
} from "service-lib";
import { Router } from "@angular/router";
import {
  IdentityAppUser,
  EmployeeSummary,
  AppUserTypeCodes,
  EmployeeAddress,
  UserSession,
  EmployeeProfile,
  AppUserType,
  GenderCode,
  SalaryCode,
  PrefixCode,
  SuffixCode,
  AppRole,
  MediaFile,
  APIUrls,
  Department
} from "model-lib";
import "rxjs/add/operator/finally";
import { SelectItem } from "primeng/api";

@Component({
  selector: "tile-List",
  templateUrl: "./tilelistbtn.component.html",
  styleUrls: ["./tilelistbtn.component.css"]
})
export class TilelistbtnComponent implements OnInit {
  employees: EmployeeSummary[] = [];
  employeeAddress: EmployeeAddress = {};
  appUser: IdentityAppUser = {};
  employeeAddresses: EmployeeAddress[] = [];
  employeeProfile: EmployeeProfile;
  employeeProfiles: EmployeeProfile[] = [];
  appUserTypes: AppUserType[] = [];
  userLogin: IdentityAppUser = {};
  appRoles: AppRole[] = [];
  appRolesSelect: SelectItem[];
  departmentsSelect: SelectItem[];
  employeesSelect: SelectItem[];
  usStateSelect: SelectItem[];
  salaryCodes: SalaryCode[];
  salaryCodesSelect: SelectItem[];
  genderCodes: GenderCode[];
  genderCodesSelect: SelectItem[];
  suffixCodes: SuffixCode[];
  suffixCodesSelect: SelectItem[];
  prefixCodes: PrefixCode[];
  prefixCodesSelect: SelectItem[];
  viewType: SelectItem[];
  activeViewType: string;
  term;

  employeeImg: string;
  employeeImgAltText: string;
  activeEmployeeId: string;
  appUserTypeId: string;
  appUserTypeCode: string = AppUserTypeCodes.Employee;
  identityAppUser: IdentityAppUser;
  dateHired: any;
  dateTerminated: any;
  dateOfBirth: any;
  isLoading: boolean = false;
  profilePics: any[] = [];
  mediaurl: string;
  tempImgFile: string = "";
  fileList: MediaFile = {
    fileName: "",
    filePath: "",
    companyFile: "",
    employeeFile: "",
    physicianFile: "",
    vendorFile: ""
  };
  errorMessage: string;

  sortF: any;
  sortO: any;
  sortO2: any;
  changeSort: any;
  displayDialogEmployee: boolean;
  selectedEmployee: EmployeeSummary;
  isNewEmployee: boolean = false;
  newEmployee: boolean;
  activeCompanyId: string = "";
  states: any[];

  imguser1: any;
  type = "emp";
  userSession: UserSession = {};
  tabView: number = 1;
  tabRef: any;
  constructor(
    public authService: AuthService,
    public router: Router,
    public apphtmlcontrol: AppHtmlControlService,
    public localStore: CareConnectLocalStorage,
    public employeeService: EmployeeService,
    private mediaService: MediaService
  ) {
    this.imguser1 = this.mediaService.defaultUserImage;
  }

  ngOnInit() {
    this.userSession = this.authService.getUserLoggedIn();
    this.activeCompanyId = this.userSession.companyId;
    this.employeeService.employee.isActive = true;
    var a = document.getElementById('a1');
    a.style.color = 'white';
  }
  public Showtile() {
    this.tabView = 1;
    var d1 = document.getElementById("li1");
    d1.style.backgroundColor = '#007ad9';
    var d2 = document.getElementById("li2");
    d2.style.backgroundColor = 'white';
    var a1 = document.getElementById('a1');
    a1.style.color = 'white';
    var a2 = document.getElementById('a2');
    a2.style.color = '#007ad9';
  }
  public Showlist() {
    this.tabView = 2;
    var d1 = document.getElementById("li2");
    d1.style.backgroundColor = '#007ad9';
    var d2 = document.getElementById("li1");
    d2.style.backgroundColor = 'white';
    var a2 = document.getElementById('a2');
    a2.style.color = 'white';
    var a1 = document.getElementById('a1');
    a1.style.color = '#007ad9';
  }
  
}
