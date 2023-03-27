import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {AdminProduct} from "./AdminProduct";
import {AdminProductService} from "./admin-product.service";
import {MatPaginator} from "@angular/material/paginator";
import {map, startWith, switchMap} from "rxjs";
import {AdminConfirmDialogComponent} from "../admin-confirm-dialog/admin-confirm-dialog.component";
import {AdminConfirmDialogService} from "../admin-confirm-dialog.service";
import {MatTable} from "@angular/material/table";

@Component({
  selector: 'app-admin-product',
  templateUrl: './admin-product.component.html',
  styleUrls: ['./admin-product.component.css']
})
export class AdminProductComponent implements AfterViewInit {

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  displayedColumns: string[] = ["id", "name", "price", "actions"];
  totalElements: number = 0;
  data: AdminProduct[] = [];
  @ViewChild(MatTable) table!: MatTable<any>;

  constructor(private adminProductService: AdminProductService,
              private dialogService: AdminConfirmDialogService) {
  }

  ngAfterViewInit(): void {
    this.paginator.page.pipe(
      startWith({}),
      switchMap(() => {
        return this.adminProductService.getProducts(this.paginator.pageIndex, this.paginator.pageSize);
      }),
      map(data => {
        this.totalElements = data.totalElements;
        return data.content;
      })
    ).subscribe(data => this.data = data);
  }

  confirmDelete(element: AdminProduct) {
    this.dialogService.openConfirmDialog("Czy na pewno chcesz usunąć ten produkt?")
      .afterClosed()
      .subscribe(result => {
        if (result) {
          this.adminProductService.delete(element.id)
            .subscribe(() => {
              this.data.forEach((value, index) => {
                if (element == value) {
                  this.data.splice(index, 1);
                  this.table.renderRows();
                }
              })
            });
        }
      });
  }

}
