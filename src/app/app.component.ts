import { Component } from '@angular/core';
import { UserService } from './_services/user.service';
import { faSignOutAlt, faLanguage, faUser, faUsers, faSignInAlt, faUserPlus, faLock, faBars } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
  collapse = typeof window !== 'undefined' && window.localStorage && localStorage.getItem('sidebar.collapse')
    ? localStorage.getItem('sidebar.collapse') === 'true'
    : false;
  faSignOutAlt = faSignOutAlt;
  faSignInAlt = faSignInAlt;
  faLanguage = faLanguage;
  faUser = faUser;
  faUserPlus = faUserPlus;
  faUsers = faUsers;
  faLock = faLock;
  faBars = faBars;
  authorizedNavItems = [
    {
      title: 'User list',
      path: '/user/list',
      icon: this.faUsers,
    },
    {
      title: 'User profile',
      path: '/user/profile',
      icon: this.faUser,
    },
  ];
  unauthorizedNavItems = [
    {
      path: '/sign-in',
      title: 'Sign In',
      icon: this.faSignInAlt,
    },
    {
      title: 'Sign up',
      path: '/sign-up',
      icon: this.faUserPlus,
    },
    {
      title: 'Restore password',
      path: '/restore-password',
      icon: this.faLock,
    },
  ];
  constructor (
    public userService: UserService,
    public router: Router,
  ) {

  }

  toggleCollapse() {
    if (typeof window !== 'undefined' && window.localStorage) {
      window.localStorage.setItem('sidebar.collapse', `${!this.collapse}`);
    }
    this.collapse = !this.collapse;
  }

  getEmail() {
    return this.userService.isLoggedIn() && !!this.userService.data ? this.userService.data.email : 'Unauthorized';
  }

  getNavItems() {
    return this.userService.isLoggedIn() ? this.authorizedNavItems : this.unauthorizedNavItems;
  }

  logout() {
    this.userService.logout();
    this.router.navigate(['/']);
  }
}
