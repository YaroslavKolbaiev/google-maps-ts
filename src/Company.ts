import { faker } from '@faker-js/faker';

export class Company {
  companyName: string;
  catchPhrase: string;
  location: {
    lat: number;
    long: number;
  };

  constructor() {
    this.companyName = faker.company.name();
    this.catchPhrase = faker.company.catchPhrase();
    this.location = {
      lat: faker.location.latitude(),
      long: faker.location.longitude(),
    };
  }

  markerContent(): string {
    return `Company Name: ${this.companyName}`;
  }
}
