import { pgTable, text, serial, integer } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const plans = pgTable("plans", {
  id: serial("id").primaryKey(),
  currentStep: text("current_step").notNull(),
  selectedBreakfast: text("selected_breakfast"),
  selectedLunch: text("selected_lunch"),
  selectedSnack: text("selected_snack"),
  selectedDinner: text("selected_dinner"),
  selectedMorningActivity: text("selected_morning_activity"),
  selectedAfternoonActivity: text("selected_afternoon_activity"),
});

export const insertPlanSchema = createInsertSchema(plans).pick({
  currentStep: true,
  selectedBreakfast: true,
  selectedLunch: true,
  selectedSnack: true,
  selectedDinner: true,
  selectedMorningActivity: true,
  selectedAfternoonActivity: true,
});

export type InsertPlan = z.infer<typeof insertPlanSchema>;
export type Plan = typeof plans.$inferSelect;
