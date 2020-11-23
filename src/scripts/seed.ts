import faker from "faker";
import MongoDefaulterClientsRepository from "../infrastructure/MongoDefaulterClientsRepository";

const CLIENTS_COUNT = 200;
const MIN_DEFAULTS_COUNT = 1;
const MAX_DEFAULTS_COUNT = 7;
const MIN_DEFAULTS_VALUE = 100;
const MAX_DEFAULTS_VALUE = 15000;

export default async function seed() {
  const clients = Array.apply(0, { length: CLIENTS_COUNT }).map(() => {
    const name = faker.name.findName();
    const defaultsCount = faker.random.number({
      min: MIN_DEFAULTS_COUNT,
      max: MAX_DEFAULTS_COUNT,
    });
    const defaults = Array.apply(0, { length: defaultsCount }).map(() => ({
      value: faker.random.number({
        min: MIN_DEFAULTS_VALUE,
        max: MAX_DEFAULTS_VALUE,
      }),
      date: faker.date.past(),
    }));
    return { name, defaults };
  });

  const repository = new MongoDefaulterClientsRepository();
  try {
    await Promise.all(clients.map((client) => repository.insert(client)));
  } finally {
    repository.close();
  }
}
