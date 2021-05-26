import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanLoad, Route, RouterStateSnapshot, UrlSegment, UrlTree } from "@angular/router";
import { Observable } from "rxjs";

@Injectable()
export class CanLoadService implements CanLoad  {

  canLoad(route: Route, segments: UrlSegment[]): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    console.log('[CanLoadService]: canLoad');
    return true;
  }

}
