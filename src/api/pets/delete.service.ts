import { ObjectID } from "mongodb";
import { DBInstance } from "../../loaders/database";

export const deletePets = async (req, res, next) => {
  try {
    const petsCollection = await (
      await DBInstance.getInstance()
    ).getCollection("petStoreApi");

    await petsCollection.deleteOne({
      _id: new ObjectID(req.params.id),
    });

    res.status(200).json({
      status: true,
      message: `object of id ${req.params.id} is deleted`,
    });
    next();
  } catch (err) {
    res.status(err.statusCode || 500).json({
      success: false,
      message: err.message || "❌ Unknown Error Occurred!!",
    });
  }
};
