import { DBInstance } from "../../loaders/database";

export const getPets = async (req, res, next) => {
  try {
    const petsCollection = await (
      await DBInstance.getInstance()
    ).getCollection("petStoreApi");

    const resData = await petsCollection.find().toArray();
    res.status(200).json({ status: true, message: resData });
    next();
  } catch (err) {
    res.status(err.statusCode || 500).json({
      success: false,
      message: err.message || "❌ Unknown Error Occurred!!",
    });
  }
};
