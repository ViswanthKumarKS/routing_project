import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { StorageService } from 'src/app/services/storage.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
})
export class NavbarComponent {
  constructor(private storageservice:StorageService,private router:Router) {}

  logout()
  {
    this.storageservice.removedLoggedUser();
    this.router.navigate(['/signin'],{replaceUrl:true})
  }


}
