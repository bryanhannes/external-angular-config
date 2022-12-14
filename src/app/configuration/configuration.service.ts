import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map, Observable, of, tap } from 'rxjs';
import { Environment } from './environment';

@Injectable({
  providedIn: 'root',
})
export class ConfigurationService {
  private readonly environment = inject(Environment);
  private readonly http = inject(HttpClient);

  public loadConfig(): Observable<void> {
    return this.http.get<Record<string, unknown>>('/assets/config/config.json').pipe(
      tap((config: Record<string, unknown>) => this.environment.populate(config)),
      map(() => undefined),
      catchError(() => of(undefined)),
    );
  }
}
