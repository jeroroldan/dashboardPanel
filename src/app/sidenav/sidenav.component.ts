import { Component, OnInit } from '@angular/core';


interface sidenav{
  path:string,
  name:string
}

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  sidenav:sidenav[] = [
    {
      path:'clients/clients',
      name:'Clientes'
    },
    {
      path:'products/products',
      name:'Products'
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
