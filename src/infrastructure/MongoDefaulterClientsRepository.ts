import { Db } from "mongodb";
import mongoConnection from "./MongoConnection";

import {
  DefaulterClient,
  DefaulterClientsRepository,
} from "../domain/DefaulterClient";

export default class MongoDefaulterClientsRepository
  implements DefaulterClientsRepository {
  connection: Promise<Db>;
  constructor() {
    this.connection = mongoConnection;
  }
  async all(): Promise<DefaulterClient[]> {
    const connection = await this.connection;
    const collection = connection.collection("defaulter-clients");
    return collection
      .aggregate([
        {
          $project: {
            name: 1,
            defaults: 1,
            totalDefaults: { $sum: "$defaults.value" },
            firstDefaultDate: { $min: "$defaults.date" },
          },
        },
      ])
      .toArray();
  }
}
