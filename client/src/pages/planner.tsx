import { useEffect, useState } from "react";
import { useLocation } from "wouter";
import { Card, CardContent } from "@/components/ui/card";
import { BufferScreen } from "@/components/buffer-screen";
import { Button } from "@/components/ui/button";
import { PlanStep } from "@/components/plan-step";
import { ProgressBar } from "@/components/progress-bar";
import { STEPS, STEP_TITLES } from "@/lib/constants";
import type { PlanData, Step, StepSelection } from "@/lib/types";
import { useToast } from "@/hooks/use-toast";

const STORAGE_KEY = "valentine_plan";

export default function Planner() {
  const [, setLocation] = useLocation();
  const { toast } = useToast();
  const [planData, setPlanData] = useState<PlanData>(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored
      ? JSON.parse(stored)
      : { currentStep: STEPS[0], selections: {} };
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(planData));
  }, [planData]);

  const [showBuffer, setShowBuffer] = useState(false);
  const [nextStep, setNextStep] = useState<Step | null>(null);

  const handleContinue = () => {
    if (nextStep) {
      setPlanData({
        currentStep: nextStep,
        selections: planData.selections,
      });
      setShowBuffer(false);
      setNextStep(null);
    }
  };

  const handleSelect = (optionId: string) => {
    const currentIndex = STEPS.indexOf(planData.currentStep);
    const selections: StepSelection = {
      ...planData.selections,
      [planData.currentStep]: optionId,
    };

    if (currentIndex === STEPS.length - 1) {
      setLocation("/completion");
      return;
    }

    const next = STEPS[currentIndex + 1];
    setNextStep(next);
    setShowBuffer(true);
    setPlanData(prev => ({
      ...prev,
      selections,
    }));

    toast({
      title: "Selection confirmed!",
      description: "Get ready for the next activity...",
    });
  };

  if (showBuffer && nextStep) {
    return <BufferScreen nextStep={nextStep} onContinue={handleContinue} />;
  }

  return (
    <div className="min-h-screen bg-background p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-end mb-4">
          <Button 
            variant="outline" 
            onClick={() => {
              localStorage.removeItem(STORAGE_KEY);
              setPlanData({ currentStep: STEPS[0], selections: {} });
            }}
          >
            Reset Progress
          </Button>
        </div>
        <ProgressBar currentStep={planData.currentStep} />
        <div className="mt-8">
          <PlanStep
            step={planData.currentStep}
            onSelect={handleSelect}
          />
        </div>
      </div>
    </div>
  );
}