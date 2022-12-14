import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map, Observable, of, tap } from 'rxjs';
import { AppEnvironment } from './app-environment';

@Injectable({
  providedIn: 'root',
})
export class AppConfigService {
  private readonly environment = inject(AppEnvironment);
  private readonly http = inject(HttpClient);

  public loadConfig(): Observable<void> {
    return this.http.get<Record<string, unknown>>('/assets/config/config.json').pipe(
      tap((config: Record<string, unknown>) => this.environment.populate(config)),
      map(() => undefined),
      catchError(() => of(undefined)),
    );
  }
}
