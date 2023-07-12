import { faker } from '@faker-js/faker';

export class User {
  name: string;
  location: {
    lat: number;
    long: number;
  };

  constructor() {
    this.name = faker.person.firstName();
    this.location = {
      lat: faker.location.latitude(),
      long: faker.location.longitude(),
    };
  }

  markerContent(): string {
    return `User Name: ${this.name}`;
  }
}
