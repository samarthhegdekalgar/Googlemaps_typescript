import faker from "faker";
import { Mappable } from "./customMap";

export class Company implements Mappable {
  companyName: string;
  catchPhrase: string;
  location: {
    lat: number;
    lng: number;
  };
  color: "red";

  constructor() {
    this.companyName = faker.company.companyName();
    this.catchPhrase = faker.company.catchPhrase();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude())
    };
  }

  markerContent(): string {
    return `
    <div>
      <h1>Company Name: ${this.companyName}</h3>
      <h3>Catchphrase: ${this.catchPhrase}</h1>
    </div>
    `;
  }
}
