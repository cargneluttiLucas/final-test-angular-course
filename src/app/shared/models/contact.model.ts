export class Contact {
  constructor(
      public id: number,
      public name: string,
      public last_name: string,
      public phone: string,
      public email: string,
      public adressName: string,
      public stateName: string,
      public districtName: string,
      public zipCode: number
  ) {}
}
