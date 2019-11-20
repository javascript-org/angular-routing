import { Component, OnInit } from '@angular/core';

import { ServersService } from '../servers.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.css']
})
export class EditServerComponent implements OnInit {
  server: { id: number, name: string, status: string };
  serverName = '';
  serverStatus = '';
  editAllowed:boolean=false;
  constructor(private serversService: ServersService, private route: ActivatedRoute) { }

  ngOnInit() {
    // retrive on init from snapshot: queryParams, fragment
    console.log(this.route.snapshot.queryParams);
    console.log(this.route.snapshot.fragment);
    console.log(this.route.queryParams.subscribe((queryParams:Params)=>{
      this.editAllowed = queryParams['allowedEdit'] === '1';
      console.log(queryParams['allowedEdit']);
    }));
    console.log(this.route.fragment.subscribe());
    this.server = this.serversService.getServer(1);
    this.serverName = this.server.name;
    this.serverStatus = this.server.status;
  }

  onUpdateServer() {
    this.serversService.updateServer(this.server.id, { name: this.serverName, status: this.serverStatus });
  }

}
