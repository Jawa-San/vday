import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { OPTIONS, STEP_TITLES } from "@/lib/constants";
import type { Step } from "@/lib/types";

interface PlanStepProps {
  step: Step;
  onSelect: (optionId: string) => void;
}

export function PlanStep({ step, onSelect }: PlanStepProps) {
  const options = OPTIONS[step];

  return (
    <div className="w-full max-w-4xl mx-auto">
      <h2 className="text-2xl font-semibold text-center mb-6">
        {STEP_TITLES[step]}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {options.map((option) => (
          <Card
            key={option.id}
            className="overflow-hidden hover:shadow-lg transition-shadow"
          >
            <div className="aspect-video relative">
              <img
                src={option.image}
                alt={option.title}
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
            <CardContent className="p-4">
              <h3 className="font-semibold mb-2">{option.title}</h3>
              <p className="text-sm text-muted-foreground mb-4">
                {option.description}
              </p>
              <Button
                onClick={() => onSelect(option.id)}
                className="w-full"
                variant="default"
              >
                Select
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
