import { Injectable } from '@angular/core';
import { ClientDTO } from '../pages/list-clients/interface';
import { clients } from '../interfaces/clients';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

interface JsonPlacerHolder{
  address: {street:string, suite:string, city:string, zipcode:string, geo:object}
  company: {name:string, catchPhrase: string, bs:string}
  email: string;
  id: number;
  name: string;
  phone: string;
  username: string;
  website: string;
}

const ELEMENT_DATA:ClientDTO[] = [
  {id: 1, name: 'Hydrogen', adress: 1.0079, },
  {id: 2, name: 'Helium', adress: 4.0026 },
  {id: 3, name: 'Lithium', adress: 6.941 },
  {id: 4, name: 'Beryllium', adress: 9.0122 },
  {id: 5, name: 'Boron', adress: 10.811 },
  {id: 6, name: 'Carbon', adress: 12.0107 },
  {id: 7, name: 'Nitrogen', adress: 14.0067 },
  {id: 8, name: 'Oxygen', adress: 15.9994 },
  {id: 9, name: 'Fluorine', adress: 18.9984 },
  {id: 10, name: 'Neon', adress: 20.1797, },
];

@Injectable({
  providedIn: 'root'
})
export class ClientServiceService {
  users$:BehaviorSubject<any> = new BehaviorSubject<any>(null) 

constructor( private http:HttpClient ) { }

  getClients(){
    return ELEMENT_DATA
  }

  deleteClient(id:number){
    return ELEMENT_DATA.splice(id,1)
  }

  addClient(client:ClientDTO){
    return ELEMENT_DATA.push(client)
  }

  getClient(index:number){
    return ELEMENT_DATA[index]
  }

  editClient(client:ClientDTO,id:number){
    ELEMENT_DATA[id].name = client.name
    ELEMENT_DATA[id].adress = client.adress
  }


  getUsersHolder(){
    return this.http.get<JsonPlacerHolder[]>('https://jsonplaceholder.typicode.com/users')
  }


}