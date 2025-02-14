import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Heart } from "lucide-react";
import { useLocation } from "wouter";

export default function Home() {
  const [, setLocation] = useLocation();

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <Card className="w-full max-w-lg">
        <CardContent className="pt-6 text-center">
          <Heart className="w-12 h-12 text-primary mx-auto mb-4" />
          <h1 className="text-3xl font-bold mb-4">
            Valentine's Day 2025
          </h1>
          <p className="text-muted-foreground mb-6">
            As a commemoration of our sweet love, we will enjoy a sweet day together. 
            Let's use this web app as a guide for our day.
          </p>
          <Button
            size="lg"
            onClick={() => setLocation("/planner")}
            className="w-full md:w-auto"
          >
            Start the Day
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}