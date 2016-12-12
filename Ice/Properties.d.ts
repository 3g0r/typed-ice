import './Ice';

declare module './Ice' {
  namespace Ice {

    export class Properties {
      constructor(args?: string[], defaults?: Properties);

      getProperty(key: string): string;
      setProperty(key: string, value: string): void;
      parse(data: string): void;
    }
  }
}