import { Component, OnInit , Input  } from '@angular/core';



@Component({
  selector: 'app-formulaire-inscription',
  templateUrl: './formulaire-inscription.component.html',
  styleUrls: ['./formulaire-inscription.component.css']
})
export class FormulaireInscriptionComponent implements OnInit {
  logo!:string;

  

  ngOnInit() {
    this.logo= './LOGO 5.png'
    
    
  }
}
