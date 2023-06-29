import { Router } from "express";

export const router = Router();

// List Category
router.get("/categories", (req, res) => res.send("OK"));

// Create Cartegory
router.post("/categories", (req, res) => res.send("OK"));

// List Products
router.get("/products", (req, res) => res.send("OK"));

// Create Products
router.post("/products", (req, res) => res.send("OK"));

// Gey Products BY category
router.get("/categories/:categoryId/products", (req, res) => res.send("OK"));

// List Orders
router.get("/orders", (req, res) => res.send("OK"));

// Create Orders
router.post("/orders", (req, res) => res.send("OK"));

// Change orders status
router.patch("/orders/:orderId", (req, res) => res.send("OK"));

// Delete/cancel orders
router.delete("/orders/:orderId", (req, res) => res.send("OK"));
