import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  public nodes = [
    {
      label: 'Dashboard',
      urlSlug: '/dashboard',
      iconClass: 'bi bi-speedometer2'
    },
    {
      label: 'Notifications',
      urlSlug: '/notifications',
      iconClass: 'bi bi-bell'
    },
    {
      label: 'Profiles',
      urlSlug: '/profiles',
      iconClass: 'bi bi-layers',
    },
    {
      label: 'Settings',
      urlSlug: '/settings',
      iconClass: 'bi bi-gear'
    },
    {
      label: 'Logout',
      urlSlug: '/logout',
      iconClass: 'bi bi-box-arrow-left'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

  public isActive(urlSlug: string): boolean{
    if (location.pathname === urlSlug) {
      return true
    } else {
      return false
    }
  }

}
