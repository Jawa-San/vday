import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { PartyPopper } from "lucide-react";
import { useLocation } from "wouter";

export default function Completion() {
  const [, setLocation] = useLocation();

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <Card className="w-full max-w-lg">
        <CardContent className="pt-6 text-center">
          <PartyPopper className="w-12 h-12 text-primary mx-auto mb-4" />
          <h1 className="text-3xl font-bold mb-4">
            Such wonderful choices you have made on how to spend our Valentine's Day!
          </h1>
          <p className="text-muted-foreground mb-6">
            The night doesn't end after dinner =.=
          https://open.spotify.com/playlist/6zgDIaPAqWRQNliVDhEhfC?si=jRrlrfsqQV-Ad_uQRrzj0w
          <nav></nav>
          //////////////// 
          <nav></nav>This link will come in handy later ...
          </p>
          <Button
            variant="outline"
            onClick={() => setLocation("/")}
            className="w-full md:w-auto"
          >
            I love you
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}