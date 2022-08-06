import { AfterContentInit, AfterViewInit, Component, ElementRef, OnDestroy, OnInit, Output, Renderer2, ViewChild, EventEmitter } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';
import { ClientServiceService } from '../../services/client-service.service';
import { ClientDTO } from '../list-clients/interface';
import { routes } from '../../clients-routing.module';
import { clients } from '../../interfaces/clients';
import { MatSnackBar } from '@angular/material/snack-bar';
import { filter, map,tap } from 'rxjs/operators';





@Component({
  selector: 'app-add-clients',
  templateUrl: './add-clients.component.html',
  styleUrls: ['./add-clients.component.scss']
})
export class AddClientsComponent implements OnInit ,  AfterViewInit, OnDestroy {
  @Output() dataSend:EventEmitter<any> = new EventEmitter<any>()
  action:string = 'Crear';
  idClient:any;
  assignId: number = 0;
  @ViewChild('txtInput') txtInput! : ElementRef;
  time:number = 0;
 

  
  myForm : FormGroup = this.fb.group({
    name:['',[Validators.maxLength(16),Validators.required]],
    adress:['',Validators.required]
  }) 

  constructor( private fb:FormBuilder ,private render: Renderer2, private clientService:ClientServiceService,public snackBar:MatSnackBar,
   private aRoute:ActivatedRoute,private route:Router, ) { 
    const idParam = 'id'
    this.idClient = this.aRoute.snapshot.params[ idParam ]
  }
  ngOnDestroy(): void {
    
  }

  ngAfterViewInit(): void {}

  ngOnInit(): void {
    this.clientService.users$.subscribe(val =>{
      console.log(val)
    })
    if(this.idClient !== undefined){
      this.action = 'Editar';
      this.showClient()
    }
    this.assignId = this.idClient
    if(this.idClient === undefined){
      this.assignId = this.clientService.getClients().length 
    }
    this.getUserPlaceHolder()
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


  getUserPlaceHolder(){
    this.clientService.getUsersHolder().pipe(
      map(item => item.map(val =>(
        {
          value:val.id,
          name:val.name,
          company:val.company.bs
        }
      )))
    ).
    subscribe(data =>{
      this.dataSend.emit(data)
    })
      
  }

  sendObject(data:any){
    console.log(data,'soy la data en el otro componente')
  }

}


