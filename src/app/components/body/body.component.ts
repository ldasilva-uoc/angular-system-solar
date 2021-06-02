import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Body } from 'src/app/models/body.interface';
import { BodiesService } from 'src/app/services/bodies.service';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  body: Body;

  constructor(
    private bodiesService: BodiesService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    const indentifier: string = this.activatedRoute.snapshot.paramMap.get('id')!
    this.bodiesService.getBodyById(indentifier).subscribe(body => {
      if(!body){
        return this.router.navigateByUrl('/');
      }
      this.body = body;
      console.log(this.body );
      this.body.img = this.selectImage(this.body.id)
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
