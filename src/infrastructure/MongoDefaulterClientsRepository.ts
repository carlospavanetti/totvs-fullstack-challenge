import mongoConnection from "./MongoConnection";

import {
  DefaulterClient,
  DefaulterClientsRepository,
} from "../domain/DefaulterClient";

export default class MongoDefaulterClientsRepository
  implements DefaulterClientsRepository {
  constructor(private connection = mongoConnection) {}

  async all(): Promise<DefaulterClient[]> {
    const { client, database } = await this.connection;
    const collection = client.db(database).collection("defaulter-clients");
    return collection
      .aggregate([
        {
          $project: {
            name: 1,
            defaults: 1,
            totalDefault: { $sum: "$defaults.value" },
            firstDefaultDate: { $min: "$defaults.date" },
          },
        },
      ])
      .toArray();
  }

  async insert(document) {
    const { client, database } = await this.connection;
    const collection = client.db(database).collection("defaulter-clients");
    return collection.insertOne(document);
  }

  async close() {
    const { client } = await this.connection;
    client.close();
  }
}
