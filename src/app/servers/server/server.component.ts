import { Component, OnInit } from '@angular/core';

import { ServersService } from '../servers.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  server: {id: number, name: string, status: string};

  constructor(private serversService: ServersService, private route:ActivatedRoute, private router:Router) { }

  ngOnInit() {
    // use + to convert string to integer
    // executed on component init
    const id = +this.route.snapshot.params['id'];
    this.server = this.serversService.getServer(id);
    
    // after component init if we want to reload by id then use subscriber.
    this.route.params.subscribe((params:Params)=>{
      this.server = this.serversService.getServer(+params['id']);
    })
  }

  onEdit()
  {
    // let allowedEdit='0';
    // if(this.server.id === 3)
    // {
    //   allowedEdit='1';
    // }
    this.router.navigate(['edit'], {relativeTo:this.route, queryParamsHandling:'preserve'});

  }

}
