import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user: { id: string, name: string };

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    // retrieve from path params using snapshot
    this.user = {
      id: this.route.snapshot.params['id'],
      name: this.route.snapshot.params['name']
    }

    // retrieve params using subscribe
    // whenever activated route change, the update will be displayed by below
    this.route.params.subscribe((params:Params)=>{
      this.user={
        id:params['id'],
        name:params['name']
      }
    })
  }



}
