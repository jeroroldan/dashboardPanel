import { Directive, ElementRef, Input, OnChanges, OnInit, Renderer2, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[error-msg]'
})
export class ErrorMsgDirective implements OnInit,  OnChanges {

  htmlElement: ElementRef<HTMLElement>
  // @Input() color:string = 'red';

  @Input() set color(valor: string){
    this.htmlElement.nativeElement.style.color = valor
  }

  @Input() message : string = 'es requerido';


  constructor( private el:ElementRef<HTMLElement> , private render:Renderer2) {
    this.htmlElement = el; 
   
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
    
  }
  ngOnInit(): void {
    this.setColor();
    this.setMessage()
  }

  setColor():void{
   const color = "#xxxxxx".replace(/x/g, y=>(Math.random()*16|0).toString(16));
   this.color =color;
  }

  setMessage(){
    this.htmlElement.nativeElement.innerText = this.message
    
  }

}
