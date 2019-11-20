import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { RedirectComponentComponent } from '../redirect-component/redirect-component.component';
import { HomeComponent } from '../home/home.component';
import { ServersComponent } from '../servers/servers.component';
import { ServerComponent } from '../servers/server/server.component';
import { EditServerComponent } from '../servers/edit-server/edit-server.component';
import { UsersComponent } from '../users/users.component';
import { UserComponent } from '../users/user/user.component';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';


// children for routing . make changes in parent template with router-outlet so that children can be injected.
const routes: Route[] = [
  
  {path:'redirectTo',component:RedirectComponentComponent},
  {path:'somepath',redirectTo:'redirectTo'},
  { path: '', component: HomeComponent },
  {
    path: 'servers', component: ServersComponent, children: [
      { path: ':id', component: ServerComponent },
      { path: ':id/edit', component: EditServerComponent }
    ]
  },
  { path: 'users', component: UsersComponent,children:[
    { path: ':id/:name', component: UserComponent }
  ] },
  // this should be last one else it will execute before all and no component can be deliver to ui
  {path:'**',component:PageNotFoundComponent}


]

@NgModule({
  //  register AppRoutingModule in app module. So you need to export this module from here.
  exports: [RouterModule],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }
