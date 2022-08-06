import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { ClientDTO } from 'src/app/clients/pages/list-clients/interface';
import { ClientServiceService } from 'src/app/clients/services/client-service.service';
import { MessageConfirmComponent } from 'src/app/dialog/message-confirm/message-confirm.component';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {
@ViewChild(MatPaginator) paginator!: MatPaginator;
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  listEmployed: ClientDTO[] = [];  
  dataSource: any

  constructor( public dialog: MatDialog , private clientServiceService:ClientServiceService, public snackBar:MatSnackBar, private aRoute:ActivatedRoute ) { }

  ngOnInit(): void {
    let val
    console.log(this.aRoute.snapshot.queryParams)
    
    
    this.cargarEmpleados()
  }  

  cargarEmpleados(){
    this.listEmployed = this.clientServiceService.getClients()
    this.dataSource  = new MatTableDataSource(this.listEmployed)
  }

   ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }


  deletePerson(index:number){
    const dialogRef  = this.dialog.open(MessageConfirmComponent,{
      width:'350px',
      data:{ mensaje: "Está seguro que desea eliminar el empleado"  }
    });
    dialogRef.afterClosed().subscribe(result =>{
      if(result === 'Aceptar'){
        this.clientServiceService.deleteClient(index)
        this.cargarEmpleados();
        this.snackBar.open('El empleado fue eliminado con exito!','',{
          duration:3000
        });
      }
    })

  }

  applyFilter(event: Event) {
  const filterValue = (event.target as HTMLInputElement).value;
  this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
