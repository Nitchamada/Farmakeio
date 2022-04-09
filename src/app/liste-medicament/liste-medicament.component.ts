import { Component, OnInit } from '@angular/core';
import { Imedicament } from './medicament';

@Component({
  selector: 'app-liste-medicament',
  templateUrl: './liste-medicament.component.html',
  styleUrls: ['./liste-medicament.component.css']
})
export class ListeMedicamentComponent implements OnInit{
    public title='Liste des médicaments'
    
    public getdate(){
        return new Date();
    }

    public medicaments: Imedicament[]=[
    {
        id: 1,
        nom: "Doliprane",
        image: "../assets/doliprane.jpg",
        description: "Doliprane 1000 mg est un antalgique, antipyrétique à base de paracétamol. Il est indiqué en cas de douleur et/ou fièvre, maux de tête, états grippaux, douleurs dentaires, courbatures, règles douloureuses, douleurs de l'arthrose.",
        prix: 1.000

    },

    {
        id: 2,
        nom: "Efferalgan",
        image: "../assets/efferalgan.png",
        description: "EfferalganOdis 500mg est un antalgique, antipyrétique à base de paracétamol. Il est indiqué en cas de douleur et/ou fièvre maux de tête, états grippaux, douleurs dentaires, courbatures, règles douloureuses, douleurs de l'arthrose.",
        prix: 1.200
    },
    
    {
        id: 3,
        nom: "Dafalgan",
        image: "../assets/dafalgan.jpg",
        description: "Dafalgan est un médicament contenant du paracétamol permettant de traiter la douleur et/ou avec fièvre telles que maux de tête, courbatures, douleurs dentaires, états grippaux et règles douloureuses chez l'adulte et l'enfant.",
        prix: 1.500

    },

    {
        id: 4,
        nom: "Spasfon ",
        image: "../assets/spasfon.jpg",
        description: "Le spasfon est un médicament indiqué dans le traitement syptomatique des douleurs spasmodiques de l'intestin, des voies biliaires, de la vessie et de l'utérus.",
        prix: 1.300

    },

    {
        id: 5,
        nom: "Spedifen",
        image: "../assets/spedifen.jpg",
        description: "Spedifen 400mg contient un anti-inflammatoire non stéroïdien : l'ibuprofène. Il peut être utilisé chez l'adulte et l'enfant de plus de 20 kg notamment, en cas de fièvre et/ou de douleurs comme les maux de tête, les douleurs dentaires...",
        prix: 1.400

    },

    {
        id: 6,
        nom: "Spedifen",
        image: "../assets/spedifen.jpg",
        description: "Spedifen 400mg contient un anti-inflammatoire non stéroïdien : l'ibuprofène. Il peut être utilisé chez l'adulte et l'enfant de plus de 20 kg notamment, en cas de fièvre et/ou de douleurs comme les maux de tête, les douleurs dentaires...",
        prix: 1.400

    },

    {
        id: 5,
        nom: "Spedifen",
        image: "../assets/spedifen.jpg",
        description: "Spedifen 400mg contient un anti-inflammatoire non stéroïdien : l'ibuprofène. Il peut être utilisé chez l'adulte et l'enfant de plus de 20 kg notamment, en cas de fièvre et/ou de douleurs comme les maux de tête, les douleurs dentaires...",
        prix: 1.400

    },

    {
        id: 5,
        nom: "Spedifen",
        image: "../assets/spedifen.jpg",
        description: "Spedifen 400mg contient un anti-inflammatoire non stéroïdien : l'ibuprofène. Il peut être utilisé chez l'adulte et l'enfant de plus de 20 kg notamment, en cas de fièvre et/ou de douleurs comme les maux de tête, les douleurs dentaires...",
        prix: 1.400

    },

    {
        id: 5,
        nom: "Spedifen",
        image: "../assets/spedifen.jpg",
        description: "Spedifen 400mg contient un anti-inflammatoire non stéroïdien : l'ibuprofène. Il peut être utilisé chez l'adulte et l'enfant de plus de 20 kg notamment, en cas de fièvre et/ou de douleurs comme les maux de tête, les douleurs dentaires...",
        prix: 1.400

    },

    {
        id: 5,
        nom: "Spedifen",
        image: "../assets/spedifen.jpg",
        description: "Spedifen 400mg contient un anti-inflammatoire non stéroïdien : l'ibuprofène. Il peut être utilisé chez l'adulte et l'enfant de plus de 20 kg notamment, en cas de fièvre et/ou de douleurs comme les maux de tête, les douleurs dentaires...",
        prix: 1.400

    },

    {
        id: 5,
        nom: "Spedifen",
        image: "../assets/spedifen.jpg",
        description: "Spedifen 400mg contient un anti-inflammatoire non stéroïdien : l'ibuprofène. Il peut être utilisé chez l'adulte et l'enfant de plus de 20 kg notamment, en cas de fièvre et/ou de douleurs comme les maux de tête, les douleurs dentaires...",
        prix: 1.400

    },

    {
        id: 5,
        nom: "Spedifen",
        image: "../assets/spedifen.jpg",
        description: "Spedifen 400mg contient un anti-inflammatoire non stéroïdien : l'ibuprofène. Il peut être utilisé chez l'adulte et l'enfant de plus de 20 kg notamment, en cas de fièvre et/ou de douleurs comme les maux de tête, les douleurs dentaires...",
        prix: 1.400

    },

    {
        id: 5,
        nom: "Spedifen",
        image: "../assets/spedifen.jpg",
        description: "Spedifen 400mg contient un anti-inflammatoire non stéroïdien : l'ibuprofène. Il peut être utilisé chez l'adulte et l'enfant de plus de 20 kg notamment, en cas de fièvre et/ou de douleurs comme les maux de tête, les douleurs dentaires...",
        prix: 1.400

    },

    {
        id: 5,
        nom: "Spedifen",
        image: "../assets/spedifen.jpg",
        description: "Spedifen 400mg contient un anti-inflammatoire non stéroïdien : l'ibuprofène. Il peut être utilisé chez l'adulte et l'enfant de plus de 20 kg notamment, en cas de fièvre et/ou de douleurs comme les maux de tête, les douleurs dentaires...",
        prix: 1.400

    },

    {
        id: 5,
        nom: "Spedifen",
        image: "../assets/spedifen.jpg",
        description: "Spedifen 400mg contient un anti-inflammatoire non stéroïdien : l'ibuprofène. Il peut être utilisé chez l'adulte et l'enfant de plus de 20 kg notamment, en cas de fièvre et/ou de douleurs comme les maux de tête, les douleurs dentaires...",
        prix: 1.400

    },

    {
        id: 5,
        nom: "Spedifen",
        image: "../assets/spedifen.jpg",
        description: "Spedifen 400mg contient un anti-inflammatoire non stéroïdien : l'ibuprofène. Il peut être utilisé chez l'adulte et l'enfant de plus de 20 kg notamment, en cas de fièvre et/ou de douleurs comme les maux de tête, les douleurs dentaires...",
        prix: 1.400

    },

    {
        id: 5,
        nom: "Spedifen",
        image: "../assets/spedifen.jpg",
        description: "Spedifen 400mg contient un anti-inflammatoire non stéroïdien : l'ibuprofène. Il peut être utilisé chez l'adulte et l'enfant de plus de 20 kg notamment, en cas de fièvre et/ou de douleurs comme les maux de tête, les douleurs dentaires...",
        prix: 1.400

    },

    {
        id: 5,
        nom: "Spedifen",
        image: "../assets/spedifen.jpg",
        description: "Spedifen 400mg contient un anti-inflammatoire non stéroïdien : l'ibuprofène. Il peut être utilisé chez l'adulte et l'enfant de plus de 20 kg notamment, en cas de fièvre et/ou de douleurs comme les maux de tête, les douleurs dentaires...",
        prix: 1.400

    },

    {
        id: 5,
        nom: "Spedifen",
        image: "../assets/spedifen.jpg",
        description: "Spedifen 400mg contient un anti-inflammatoire non stéroïdien : l'ibuprofène. Il peut être utilisé chez l'adulte et l'enfant de plus de 20 kg notamment, en cas de fièvre et/ou de douleurs comme les maux de tête, les douleurs dentaires...",
        prix: 1.400

    },

    {
        id: 5,
        nom: "Spedifen",
        image: "../assets/spedifen.jpg",
        description: "Spedifen 400mg contient un anti-inflammatoire non stéroïdien : l'ibuprofène. Il peut être utilisé chez l'adulte et l'enfant de plus de 20 kg notamment, en cas de fièvre et/ou de douleurs comme les maux de tête, les douleurs dentaires...",
        prix: 1.400

    },

    {
        id: 5,
        nom: "Spedifen",
        image: "../assets/spedifen.jpg",
        description: "Spedifen 400mg contient un anti-inflammatoire non stéroïdien : l'ibuprofène. Il peut être utilisé chez l'adulte et l'enfant de plus de 20 kg notamment, en cas de fièvre et/ou de douleurs comme les maux de tête, les douleurs dentaires...",
        prix: 1.400

    },

    {
        id: 5,
        nom: "Spedifen",
        image: "../assets/spedifen.jpg",
        description: "Spedifen 400mg contient un anti-inflammatoire non stéroïdien : l'ibuprofène. Il peut être utilisé chez l'adulte et l'enfant de plus de 20 kg notamment, en cas de fièvre et/ou de douleurs comme les maux de tête, les douleurs dentaires...",
        prix: 1.400

    },

    {
        id: 5,
        nom: "Spedifen",
        image: "../assets/spedifen.jpg",
        description: "Spedifen 400mg contient un anti-inflammatoire non stéroïdien : l'ibuprofène. Il peut être utilisé chez l'adulte et l'enfant de plus de 20 kg notamment, en cas de fièvre et/ou de douleurs comme les maux de tête, les douleurs dentaires...",
        prix: 1.400

    },

    {
        id: 5,
        nom: "Spedifen",
        image: "../assets/spedifen.jpg",
        description: "Spedifen 400mg contient un anti-inflammatoire non stéroïdien : l'ibuprofène. Il peut être utilisé chez l'adulte et l'enfant de plus de 20 kg notamment, en cas de fièvre et/ou de douleurs comme les maux de tête, les douleurs dentaires...",
        prix: 1.400

    },

    {
        id: 5,
        nom: "Spedifen",
        image: "../assets/spedifen.jpg",
        description: "Spedifen 400mg contient un anti-inflammatoire non stéroïdien : l'ibuprofène. Il peut être utilisé chez l'adulte et l'enfant de plus de 20 kg notamment, en cas de fièvre et/ou de douleurs comme les maux de tête, les douleurs dentaires...",
        prix: 1.400

    },

    {
        id: 5,
        nom: "Spedifen",
        image: "../assets/spedifen.jpg",
        description: "Spedifen 400mg contient un anti-inflammatoire non stéroïdien : l'ibuprofène. Il peut être utilisé chez l'adulte et l'enfant de plus de 20 kg notamment, en cas de fièvre et/ou de douleurs comme les maux de tête, les douleurs dentaires...",
        prix: 1.400

    },

    {
        id: 5,
        nom: "Spedifen",
        image: "../assets/spedifen.jpg",
        description: "Spedifen 400mg contient un anti-inflammatoire non stéroïdien : l'ibuprofène. Il peut être utilisé chez l'adulte et l'enfant de plus de 20 kg notamment, en cas de fièvre et/ou de douleurs comme les maux de tête, les douleurs dentaires...",
        prix: 1.400

    },

    {
        id: 5,
        nom: "Spedifen",
        image: "../assets/spedifen.jpg",
        description: "Spedifen 400mg contient un anti-inflammatoire non stéroïdien : l'ibuprofène. Il peut être utilisé chez l'adulte et l'enfant de plus de 20 kg notamment, en cas de fièvre et/ou de douleurs comme les maux de tête, les douleurs dentaires...",
        prix: 1.400

    },

    {
        id: 5,
        nom: "Spedifen",
        image: "../assets/spedifen.jpg",
        description: "Spedifen 400mg contient un anti-inflammatoire non stéroïdien : l'ibuprofène. Il peut être utilisé chez l'adulte et l'enfant de plus de 20 kg notamment, en cas de fièvre et/ou de douleurs comme les maux de tête, les douleurs dentaires...",
        prix: 1.400

    },

    {
        id: 5,
        nom: "Spedifen",
        image: "../assets/spedifen.jpg",
        description: "Spedifen 400mg contient un anti-inflammatoire non stéroïdien : l'ibuprofène. Il peut être utilisé chez l'adulte et l'enfant de plus de 20 kg notamment, en cas de fièvre et/ou de douleurs comme les maux de tête, les douleurs dentaires...",
        prix: 1.400

    },

    {
        id: 5,
        nom: "Spedifen",
        image: "../assets/spedifen.jpg",
        description: "Spedifen 400mg contient un anti-inflammatoire non stéroïdien : l'ibuprofène. Il peut être utilisé chez l'adulte et l'enfant de plus de 20 kg notamment, en cas de fièvre et/ou de douleurs comme les maux de tête, les douleurs dentaires...",
        prix: 1.400

    },

    {
        id: 5,
        nom: "Spedifen",
        image: "../assets/spedifen.jpg",
        description: "Spedifen 400mg contient un anti-inflammatoire non stéroïdien : l'ibuprofène. Il peut être utilisé chez l'adulte et l'enfant de plus de 20 kg notamment, en cas de fièvre et/ou de douleurs comme les maux de tête, les douleurs dentaires...",
        prix: 1.400

    },

    {
        id: 5,
        nom: "Spedifen",
        image: "../assets/spedifen.jpg",
        description: "Spedifen 400mg contient un anti-inflammatoire non stéroïdien : l'ibuprofène. Il peut être utilisé chez l'adulte et l'enfant de plus de 20 kg notamment, en cas de fièvre et/ou de douleurs comme les maux de tête, les douleurs dentaires...",
        prix: 1.400

    },

    {
        id: 5,
        nom: "Spedifen",
        image: "../assets/spedifen.jpg",
        description: "Spedifen 400mg contient un anti-inflammatoire non stéroïdien : l'ibuprofène. Il peut être utilisé chez l'adulte et l'enfant de plus de 20 kg notamment, en cas de fièvre et/ou de douleurs comme les maux de tête, les douleurs dentaires...",
        prix: 1.400

    },

    {
        id: 5,
        nom: "Spedifen",
        image: "../assets/spedifen.jpg",
        description: "Spedifen 400mg contient un anti-inflammatoire non stéroïdien : l'ibuprofène. Il peut être utilisé chez l'adulte et l'enfant de plus de 20 kg notamment, en cas de fièvre et/ou de douleurs comme les maux de tête, les douleurs dentaires...",
        prix: 1.400

    },

    {
        id: 5,
        nom: "Spedifen",
        image: "../assets/spedifen.jpg",
        description: "Spedifen 400mg contient un anti-inflammatoire non stéroïdien : l'ibuprofène. Il peut être utilisé chez l'adulte et l'enfant de plus de 20 kg notamment, en cas de fièvre et/ou de douleurs comme les maux de tête, les douleurs dentaires...",
        prix: 1.400

    },

    {
        id: 5,
        nom: "Spedifen",
        image: "../assets/spedifen.jpg",
        description: "Spedifen 400mg contient un anti-inflammatoire non stéroïdien : l'ibuprofène. Il peut être utilisé chez l'adulte et l'enfant de plus de 20 kg notamment, en cas de fièvre et/ou de douleurs comme les maux de tête, les douleurs dentaires...",
        prix: 1.400

    },

    {
        id: 5,
        nom: "Spedifen",
        image: "../assets/spedifen.jpg",
        description: "Spedifen 400mg contient un anti-inflammatoire non stéroïdien : l'ibuprofène. Il peut être utilisé chez l'adulte et l'enfant de plus de 20 kg notamment, en cas de fièvre et/ou de douleurs comme les maux de tête, les douleurs dentaires...",
        prix: 1.400

    },

    {
        id: 5,
        nom: "Spedifen",
        image: "../assets/spedifen.jpg",
        description: "Spedifen 400mg contient un anti-inflammatoire non stéroïdien : l'ibuprofène. Il peut être utilisé chez l'adulte et l'enfant de plus de 20 kg notamment, en cas de fièvre et/ou de douleurs comme les maux de tête, les douleurs dentaires...",
        prix: 1.400

    },

    {
        id: 5,
        nom: "Spedifen",
        image: "../assets/spedifen.jpg",
        description: "Spedifen 400mg contient un anti-inflammatoire non stéroïdien : l'ibuprofène. Il peut être utilisé chez l'adulte et l'enfant de plus de 20 kg notamment, en cas de fièvre et/ou de douleurs comme les maux de tête, les douleurs dentaires...",
        prix: 1.400

    },

    {
        id: 5,
        nom: "Spedifen",
        image: "../assets/spedifen.jpg",
        description: "Spedifen 400mg contient un anti-inflammatoire non stéroïdien : l'ibuprofène. Il peut être utilisé chez l'adulte et l'enfant de plus de 20 kg notamment, en cas de fièvre et/ou de douleurs comme les maux de tête, les douleurs dentaires...",
        prix: 1.400

    },

    {
        id: 5,
        nom: "Spedifen",
        image: "../assets/spedifen.jpg",
        description: "Spedifen 400mg contient un anti-inflammatoire non stéroïdien : l'ibuprofène. Il peut être utilisé chez l'adulte et l'enfant de plus de 20 kg notamment, en cas de fièvre et/ou de douleurs comme les maux de tête, les douleurs dentaires...",
        prix: 1.400

    },

    {
        id: 5,
        nom: "Spedifen",
        image: "../assets/spedifen.jpg",
        description: "Spedifen 400mg contient un anti-inflammatoire non stéroïdien : l'ibuprofène. Il peut être utilisé chez l'adulte et l'enfant de plus de 20 kg notamment, en cas de fièvre et/ou de douleurs comme les maux de tête, les douleurs dentaires...",
        prix: 1.400

    },

    {
        id: 5,
        nom: "Spedifen",
        image: "../assets/spedifen.jpg",
        description: "Spedifen 400mg contient un anti-inflammatoire non stéroïdien : l'ibuprofène. Il peut être utilisé chez l'adulte et l'enfant de plus de 20 kg notamment, en cas de fièvre et/ou de douleurs comme les maux de tête, les douleurs dentaires...",
        prix: 1.400

    },

    {
        id: 5,
        nom: "Spedifen",
        image: "../assets/spedifen.jpg",
        description: "Spedifen 400mg contient un anti-inflammatoire non stéroïdien : l'ibuprofène. Il peut être utilisé chez l'adulte et l'enfant de plus de 20 kg notamment, en cas de fièvre et/ou de douleurs comme les maux de tête, les douleurs dentaires...",
        prix: 1.400

    },

    {
        id: 5,
        nom: "Spedifen",
        image: "../assets/spedifen.jpg",
        description: "Spedifen 400mg contient un anti-inflammatoire non stéroïdien : l'ibuprofène. Il peut être utilisé chez l'adulte et l'enfant de plus de 20 kg notamment, en cas de fièvre et/ou de douleurs comme les maux de tête, les douleurs dentaires...",
        prix: 1.400

    },

    {
        id: 5,
        nom: "Spedifen",
        image: "../assets/spedifen.jpg",
        description: "Spedifen 400mg contient un anti-inflammatoire non stéroïdien : l'ibuprofène. Il peut être utilisé chez l'adulte et l'enfant de plus de 20 kg notamment, en cas de fièvre et/ou de douleurs comme les maux de tête, les douleurs dentaires...",
        prix: 1.400

    },

    {
        id: 5,
        nom: "Spedifen",
        image: "../assets/spedifen.jpg",
        description: "Spedifen 400mg contient un anti-inflammatoire non stéroïdien : l'ibuprofène. Il peut être utilisé chez l'adulte et l'enfant de plus de 20 kg notamment, en cas de fièvre et/ou de douleurs comme les maux de tête, les douleurs dentaires...",
        prix: 1.400

    },

    {
        id: 5,
        nom: "Spedifen",
        image: "../assets/spedifen.jpg",
        description: "Spedifen 400mg contient un anti-inflammatoire non stéroïdien : l'ibuprofène. Il peut être utilisé chez l'adulte et l'enfant de plus de 20 kg notamment, en cas de fièvre et/ou de douleurs comme les maux de tête, les douleurs dentaires...",
        prix: 1.400

    },

    {
        id: 5,
        nom: "Spedifen",
        image: "../assets/spedifen.jpg",
        description: "Spedifen 400mg contient un anti-inflammatoire non stéroïdien : l'ibuprofène. Il peut être utilisé chez l'adulte et l'enfant de plus de 20 kg notamment, en cas de fièvre et/ou de douleurs comme les maux de tête, les douleurs dentaires...",
        prix: 1.400

    },

    {
        id: 5,
        nom: "Spedifen",
        image: "../assets/spedifen.jpg",
        description: "Spedifen 400mg contient un anti-inflammatoire non stéroïdien : l'ibuprofène. Il peut être utilisé chez l'adulte et l'enfant de plus de 20 kg notamment, en cas de fièvre et/ou de douleurs comme les maux de tête, les douleurs dentaires...",
        prix: 1.400

    },

    {
        id: 5,
        nom: "Spedifen",
        image: "../assets/spedifen.jpg",
        description: "Spedifen 400mg contient un anti-inflammatoire non stéroïdien : l'ibuprofène. Il peut être utilisé chez l'adulte et l'enfant de plus de 20 kg notamment, en cas de fièvre et/ou de douleurs comme les maux de tête, les douleurs dentaires...",
        prix: 1.400

    },

    {
        id: 5,
        nom: "Spedifen",
        image: "../assets/spedifen.jpg",
        description: "Spedifen 400mg contient un anti-inflammatoire non stéroïdien : l'ibuprofène. Il peut être utilisé chez l'adulte et l'enfant de plus de 20 kg notamment, en cas de fièvre et/ou de douleurs comme les maux de tête, les douleurs dentaires...",
        prix: 1.400

    },

    {
        id: 5,
        nom: "Spedifen",
        image: "../assets/spedifen.jpg",
        description: "Spedifen 400mg contient un anti-inflammatoire non stéroïdien : l'ibuprofène. Il peut être utilisé chez l'adulte et l'enfant de plus de 20 kg notamment, en cas de fièvre et/ou de douleurs comme les maux de tête, les douleurs dentaires...",
        prix: 1.400

    },

    {
        id: 5,
        nom: "Spedifen",
        image: "../assets/spedifen.jpg",
        description: "Spedifen 400mg contient un anti-inflammatoire non stéroïdien : l'ibuprofène. Il peut être utilisé chez l'adulte et l'enfant de plus de 20 kg notamment, en cas de fièvre et/ou de douleurs comme les maux de tête, les douleurs dentaires...",
        prix: 1.400

    },

    {
        id: 5,
        nom: "Spedifen",
        image: "../assets/spedifen.jpg",
        description: "Spedifen 400mg contient un anti-inflammatoire non stéroïdien : l'ibuprofène. Il peut être utilisé chez l'adulte et l'enfant de plus de 20 kg notamment, en cas de fièvre et/ou de douleurs comme les maux de tête, les douleurs dentaires...",
        prix: 1.400

    },
];
    public filteredMedicaments: Imedicament[]=[];

    ngOnInit(): void {
        this.filteredMedicaments=this.medicaments;
    }  

    private _medicamentFilter='mot';

    public get medicamentFilter():string {
        return this._medicamentFilter
    }

    public set medicamentFilter(filter:string){
        this.medicamentFilter=filter;
        this.filteredMedicaments=this.medicamentFilter ? this.filterMedicaments (this.medicamentFilter): this.medicaments;
    }

    private filterMedicaments(criteria:string):Imedicament[]{
        criteria=criteria.toLocaleLowerCase();
        const res=this.medicaments.filter(
            (medicament:Imedicament)=> medicament.description.toLocaleLowerCase().indexOf(criteria) !== -1

        );
    return res;
    }
}