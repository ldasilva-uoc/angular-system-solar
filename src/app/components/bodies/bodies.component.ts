import { Component, OnInit } from '@angular/core';
import { Body } from 'src/app/models/body.interface';
import { BodiesService } from 'src/app/services/bodies.service';

@Component({
  selector: 'app-bodies',
  templateUrl: './bodies.component.html',
  styleUrls: ['./bodies.component.css']
})
export class BodiesComponent implements OnInit {

  bodies: Body[];


  constructor(private bodyService: BodiesService) { }

  ngOnInit(): void {
    this.bodyService.getAllBodies().subscribe(bodies => {
     // console.log(Object.entries(bodies)[0][1]);
      this.bodies=  Object.values(bodies)[0];
     // this.bodies= this.bodies.filter(body => body.isPlanet);
      this.bodies.map(body => body.img= this.selectImage(body.id))
      
    })
  }

  selectImage(id:string): string{
    switch(id)
    {
      case "uranus":
        return '../../../assets/image/urano.png';
      case 'neptune':
        return '../../../assets/image/neptuno.png';
      case 'jupiter':
        return '../../../assets/image/jupiteR.png';
      case 'mars':
        return '../../../assets/image/marte.png';
      case 'mercure':
        return '../../../assets/image/mercurY.png';
      case 'saturne':
        return '../../../assets/image/saturno.png';
      case 'terre':
        return '../../../assets/image/Tierra.png';
      case 'venus':
        return '../../../assets/image/VENUS.png';
      default:
        return '../../../assets/image/noplanet.png'

    }
  }

}
