class Default {
  date: Date;
  value: number;

  constructor(date: Date, value: number) {
    this.date = date;
    this.value = value;
  }
}

export class DefaulterClient {
  name: string;
  defaults: Default[] = [];
  firstDefaultDate!: Date;
  totalDefault: number = 0;

  constructor(names: string) {
    this.name = names;
  }
}

export interface DefaulterClientsRepository {
  all(): Promise<DefaulterClient[]>;
}
