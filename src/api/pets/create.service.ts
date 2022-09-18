import { DBInstance } from "../../loaders/database";

export const createPets = async (req, res, next) => {
  try {
    const petsCollection = await (
      await DBInstance.getInstance()
    ).getCollection("petStoreApi");

    const data = {
      name: req.body.name,
      owner: req.body.owner,
      age: req.body.age,
      type: req.body.type,
      gender: req.body.gender,
    };

    const resData = (await petsCollection.insertOne(data)).insertedId;
    res.status(200).json({ status: true, message: resData });
    next();
  } catch (err) {
    res.status(err.statusCode || 500).json({
      success: false,
      message: err.message || "❌ Unknown Error Occurred!!",
    });
  }
};
