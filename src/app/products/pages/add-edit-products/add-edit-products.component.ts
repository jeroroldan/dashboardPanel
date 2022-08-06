import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { ClientDTO } from 'src/app/clients/pages/list-clients/interface';
import { ClientServiceService } from 'src/app/clients/services/client-service.service';

@Component({
  selector: 'app-add-edit-products',
  templateUrl: './add-edit-products.component.html',
  styleUrls: ['./add-edit-products.component.scss']
})
export class AddEditProductsComponent implements OnInit {
action:string = 'Crear';
  idClient:any;
  assignId: number = 0;
  @ViewChild('txtInput') txtInput! : ElementRef;
  time:number = 0
  
  myForm : FormGroup = this.fb.group({
    name:['',[Validators.maxLength(16),Validators.required]],
    adress:['',Validators.required]
  }) 

  constructor( private fb:FormBuilder ,private render: Renderer2, private clientService:ClientServiceService,public snackBar:MatSnackBar,
   private aRoute:ActivatedRoute,private route:Router, ) { 
    const idParam = 'id'
    this.idClient = this.aRoute.snapshot.params[ idParam ]
  }

  ngAfterViewInit(): void {}

  ngOnInit(): void {
    if(this.idClient !== undefined){
      this.action = 'Editar';
      this.showClient()
    }
    this.assignId = this.idClient
    if(this.idClient === undefined){
      this.assignId = this.clientService.getClients().length 
    }
  }

  onSubmit(){
    const client:ClientDTO = {
      id:this.assignId,
      name:this.myForm.get('name')?.value,
      adress:this.myForm.get('adress')?.value
    }
    if(this.idClient !== undefined){
      this.editClient(client);
       this.snackBar.open('El empleado fue editado con exito!','',{
          duration:3000
        });
    }else{
      this.clientService.addClient(client);
       this.snackBar.open('El empleado fue agregado con exito!','',{
          duration:3000
        });
    }
    this.route.navigate(['/clients/clients'],)
  }

  addClient(){

  }

  showClient(){
    const clientEdit:ClientDTO = this.clientService.getClient(this.idClient)
      this.myForm.get('name')?.setValue(clientEdit['name']) 
      this.myForm.get('adress')?.setValue(clientEdit['adress']) 
  }

  editClient(clients:ClientDTO){
    this.clientService.editClient(clients,this.idClient)
  }

}
