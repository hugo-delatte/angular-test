import {Injectable} from '@angular/core';
import {map, mergeAll, Observable, tap, withLatestFrom} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Comics} from "../../../model/Comics";

@Injectable({
  providedIn: 'root'
})
export class ComicsService {
  public httpClient: HttpClient

  constructor(httpClient: HttpClient) {
    this.httpClient = httpClient;
  }

  public getProduct(): Observable<Comics[]> {
    // Returns Comics without hero names
    return this.httpClient.get<Comics[]>('/assets/data/comics.json')
  }

  public getComicsNamesToHeroNames(): any {
    // Return map of title to heroName
    return this.httpClient.get("/assets/data/hero-names.json");
  }

  public getComicsWithHeroNames$(): Observable<Comics[]> {
    //TODO: Should return comics with heroNames inside
    throw new Error('To implement')
  }
}
