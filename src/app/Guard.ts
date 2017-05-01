import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from "@angular/router";
import {Injectable} from "@angular/core";
import {DataService} from "app/services/all-data.service";

@Injectable()

export class Guard implements CanActivate {

  constructor(private dataService: DataService) {
      }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    return this.dataService.isLoggined();

  }
}
