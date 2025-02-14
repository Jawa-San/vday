
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { STEP_TITLES } from "@/lib/constants";
import type { Step } from "@/lib/types";

interface BufferScreenProps {
  nextStep: Step;
  onContinue: () => void;
}

export function BufferScreen({ nextStep, onContinue }: BufferScreenProps) {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <Card className="w-full max-w-lg">
        <CardContent className="pt-6 text-center">
          <h2 className="text-2xl font-semibold mb-4">Great choice! That's exactly what I was thinking</h2>
          <p className="text-muted-foreground mb-6">
            Up next: {STEP_TITLES[nextStep]}
          </p>
          <Button
            size="lg"
            onClick={onContinue}
            className="w-full md:w-auto"
          >
            Click after completing current activity
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
