import { Progress } from "@/components/ui/progress";
import { STEPS } from "@/lib/constants";
import type { Step } from "@/lib/types";

export function ProgressBar({ currentStep }: { currentStep: Step }) {
  const currentIndex = STEPS.indexOf(currentStep);
  const progress = ((currentIndex + 1) / STEPS.length) * 100;

  return (
    <div className="w-full max-w-xl mx-auto">
      <Progress value={progress} className="h-2" />
      <p className="text-sm text-muted-foreground text-center mt-2">
        Step {currentIndex + 1} of {STEPS.length}
      </p>
    </div>
  );
}
