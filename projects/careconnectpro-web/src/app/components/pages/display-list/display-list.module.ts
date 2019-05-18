// Modules
import { NgModule } from "@angular/core";
import { DisplayListComponent } from "./display-list.component";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { TableModule } from "primeng/components/table/table";
import { DataTableModule } from "primeng/primeng";

@NgModule({
  declarations: [DisplayListComponent],
  imports: [RouterModule, CommonModule, DataTableModule, TableModule],
  exports: [DisplayListComponent],
  providers: []
})
export class DisplayListModule {}
