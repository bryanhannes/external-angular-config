export class Environment {
  public readonly environment: string = '';
  public readonly randomVariable: string = '';

  public populate(config: Record<string, unknown>): void {
    this.setProperties(config);
  }

  private setProperties(keyValueObject: Record<string, unknown>) {
    Object.keys(keyValueObject || []).forEach((key: string) => {
      if (this.isPropertyAllowed(key)) {
        // @ts-ignore
        this[key] = keyValueObject[key];
      }
    });
  }

  private isPropertyAllowed(propertyName: string): boolean {
    // @ts-ignore
    return this.hasOwnProperty(propertyName) && typeof this[propertyName] !== 'function';
  }
}
