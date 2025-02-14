import { plans, type Plan, type InsertPlan } from "@shared/schema";

export interface IStorage {
  getPlan(id: number): Promise<Plan | undefined>;
  createPlan(plan: InsertPlan): Promise<Plan>;
  updatePlan(id: number, plan: Partial<InsertPlan>): Promise<Plan>;
}

export class MemStorage implements IStorage {
  private plans: Map<number, Plan>;
  currentId: number;

  constructor() {
    this.plans = new Map();
    this.currentId = 1;
  }

  async getPlan(id: number): Promise<Plan | undefined> {
    return this.plans.get(id);
  }

  async createPlan(insertPlan: InsertPlan): Promise<Plan> {
    const id = this.currentId++;
    const plan: Plan = { id, ...insertPlan };
    this.plans.set(id, plan);
    return plan;
  }

  async updatePlan(id: number, updates: Partial<InsertPlan>): Promise<Plan> {
    const existing = await this.getPlan(id);
    if (!existing) {
      throw new Error("Plan not found");
    }
    const updated = { ...existing, ...updates };
    this.plans.set(id, updated);
    return updated;
  }
}

export const storage = new MemStorage();
