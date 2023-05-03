export class DeliveryPurchaseModel {
  id: number;
  amount: number;
  client: number;
  idUser: number;


  constructor(id: number, amount: number, client: number, idUser: number) {
    this.id = id;
    this.amount = amount;
    this.client = client;
    this.idUser = idUser;
  }
}
