export class AppEnvironment {
  public readonly environment: string = '';
  public readonly randomVariable: string = '';

  constructor(defaults?: Record<string, unknown>) {
    if (defaults) {
      this.setProperties(defaults);
    }
  }

  public populate(config: Record<string, unknown>): void {
    this.setProperties(config);
  }

  private setProperties(keyValueObject: Record<string, unknown>) {
    Object.keys(keyValueObject || []).forEach((key: string) => {
      if (this.isAllowed(key)) {
        // @ts-ignore
        this[key] = keyValueObject;
      }
    });
  }

  private isAllowed(propertyName: string): boolean {
    // @ts-ignore
    return this.hasOwnProperty(propertyName) && typeof this[propertyName] !== 'function';
  }
}
