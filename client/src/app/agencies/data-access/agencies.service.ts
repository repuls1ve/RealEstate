import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { map, Observable, timer } from 'rxjs'
import { Agency, MockAgency } from 'src/app/shared/models/agency.model'
import { environment } from 'src/environments/environment'

@Injectable({
  providedIn: 'root'
})
export class AgenciesService {
  private readonly baseURL = environment.baseURL

  constructor(http: HttpClient) {}
  
  public getAgencies(quantity: number): Observable<Agency[]> {
    return timer(2700).pipe(
      map(() => Array(quantity).fill(MockAgency))
    )
  }
}