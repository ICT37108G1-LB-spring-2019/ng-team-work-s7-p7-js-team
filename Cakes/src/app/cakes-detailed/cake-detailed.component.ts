import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {RequestService} from '../request.service'
@Component({
  selector: 'app-laptops-detailed',
  templateUrl: './cake-detailed.component.html',
  styleUrls: ['cake-detailed.component.css']
})
export class CakesDetailedComponent implements OnInit {
id;


constructor(private route:ActivatedRoute,private ser:RequestService) {
this.route.params.subscribe(params => {
this.id = params['id']
});


  }

ngOnInit() {

}}
