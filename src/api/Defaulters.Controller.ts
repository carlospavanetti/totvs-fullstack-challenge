import { Router } from "express";
import MongoDefaulterClientsRepository from "../infrastructure/MongoDefaulterClientsRepository";

const defaultersController = Router();
defaultersController.get("/", async function index(req, res) {
  const repository = new MongoDefaulterClientsRepository();
  const clients = await repository.all();
  res.json(clients);
});

export default defaultersController;
