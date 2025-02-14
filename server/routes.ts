import type { Express } from "express";
import { createServer } from "http";
import { storage } from "./storage";
import { insertPlanSchema } from "@shared/schema";

export function registerRoutes(app: Express) {
  app.post("/api/plans", async (req, res) => {
    const parsed = insertPlanSchema.safeParse(req.body);
    if (!parsed.success) {
      return res.status(400).json({ error: parsed.error });
    }
    const plan = await storage.createPlan(parsed.data);
    res.json(plan);
  });

  app.get("/api/plans/:id", async (req, res) => {
    const plan = await storage.getPlan(Number(req.params.id));
    if (!plan) {
      return res.status(404).json({ error: "Plan not found" });
    }
    res.json(plan);
  });

  app.patch("/api/plans/:id", async (req, res) => {
    try {
      const plan = await storage.updatePlan(Number(req.params.id), req.body);
      res.json(plan);
    } catch (error) {
      res.status(404).json({ error: "Plan not found" });
    }
  });

  return createServer(app);
}
