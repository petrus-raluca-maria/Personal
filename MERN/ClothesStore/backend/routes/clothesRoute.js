import express from "express";
import { Article } from "../models/articleModel.js";

const router = express.Router();

router.get("/", async (request, response) => {
  try {
    const clothes = await Article.find({});
    return response.status(200).json({
      count: clothes.length,
      data: clothes,
    });
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

router.get("/:id", async (request, response) => {
  try {
    const { id } = request.params;

    const article = await Article.findById(id);
    return response.status(200).json(article);
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

router.put("/:id", async (request, response) => {
  try {
    if (
      !request.body.name ||
      !request.body.brand ||
      !request.body.size ||
      !request.body.price ||
      !request.body.type
    ) {
      return response.status(400).send({
        message: " send all required fields",
      });
    }
    const { id } = request.params;
    const result = await Article.findByIdAndUpdate(id, request.body);

    if (!result) {
      return response.status(404).json({
        message: " article not found",
      });
    }
    return response
      .status(200)
      .send({ message: "Article updated SUCCESSFULLY!" });
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

router.post("/", async (request, response) => {
  try {
    if (
      !request.body.name ||
      !request.body.brand ||
      !request.body.size ||
      !request.body.price ||
      !request.body.type
    ) {
      return response.status(400).send({
        message: " send all required fields",
      });
    }

    const newArticle = {
      name: request.body.name,
      brand: request.body.brand,
      size: request.body.size,
      price: request.body.price,
      type: request.body.type,
    };
    const article = await Article.create(newArticle);
    return response.status(201).send(article);
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

router.delete("/:id", async (request, response) => {
  try {
    const { id } = request.params;
    const result = await Article.findByIdAndDelete(id);

    if (!result) {
      return response.status(404).json({
        message: " article not found",
      });
    }
    return response
      .status(200)
      .send({ message: "Article deleted SUCCESSFULLY!" });
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

export default router;
