import { STEPS, OPTIONS } from "./constants";

export type Step = typeof STEPS[number];
export type Option = {
  id: string;
  title: string;
  description: string;
  image: string;
};

export type StepSelection = {
  [K in Step]?: string;
};

export type PlanData = {
  currentStep: Step;
  selections: StepSelection;
};
