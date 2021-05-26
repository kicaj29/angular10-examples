import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanLoad, Route, Router, RouterStateSnapshot, UrlSegment, UrlTree } from "@angular/router";
import { Observable } from "rxjs";

@Injectable()
export class CanLoadService implements CanLoad  {

  constructor(private router: Router) {

  }

  canLoad(route: Route, segments: UrlSegment[]): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    // return this.router.parseUrl('/resolver-guard/ups');
    console.log('[CanLoadService]: canLoad');
    return true;
  }

}
