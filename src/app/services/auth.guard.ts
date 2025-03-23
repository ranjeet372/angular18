import { Inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {

  const router = Inject(Router);
  const loggedUser = localStorage.getItem('loginUser');
  if (loggedUser != null) {
    return true;
  }
  else {
    router.navigateByUrl('login');
    return false;
  }

};
