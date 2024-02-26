import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-small-card',
  templateUrl: './small-card.component.html',
  styleUrl: './small-card.component.css'
})
export class SmallCardComponent implements OnInit {
  
  @Input()
  photoCover:string = "https://t.ctcdn.com.br/9KZ0WLOfJFYa4ZYBsjQ82Gpa6dM=/640x360/smart/i821523.png";
  @Input()
  cardTitle:string = "Saiu a nova versão do Angular"

  constructor(){}

  ngOnInit(): void {
    
  }

}
