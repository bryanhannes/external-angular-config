import { Component, inject } from '@angular/core';
import { Environment } from './app-config/environment';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <div>Environment: {{ environment.environment }}</div>
    <div>Random Variable: {{ environment.randomVariable }}</div>
  `,
})
export class AppComponent {
  public readonly environment = inject(Environment);
}
