import { Router } from "express";
import { createPets } from "./create.service";
import { deletePets } from "./delete.service";
import { getPets } from "./get.service";

const petsRoute = Router();
petsRoute.get("/all", getPets);

petsRoute.post("/create", createPets);

petsRoute.delete("/delete/:id", deletePets);

export default petsRoute;
