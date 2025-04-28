import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2, Star } from "lucide-react";

export default function ProSubscription() {
  return (
    <div className="container mx-auto py-16 px-4">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Unlock Unlimited AI with <span className="text-primary">24Hour‑AI Pro</span></h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          The ultimate subscription for professionals and teams who need persistent, high-powered AI at their fingertips. No more time limits, no more lost work—just premium features, priority access, and peace of mind.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {/* Pro Features Card */}
        <Card className="p-6 border-2 border-primary/40 shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Star className="text-yellow-400" />
              <span>Pro Features</span>
              <Badge className="ml-2" variant="outline">Persistent</Badge>
              <Badge variant="outline">Premium</Badge>
            </CardTitle>
            <CardDescription className="mt-2 text-base text-muted-foreground">
              Everything you need for serious, uninterrupted work.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4 mt-4">
            {[
              "Persistent chat history across all devices",
              "Access to top-tier models: GPT-4o, Mistral-Large, Gemini 1.5",
              "Higher token budgets for longer, deeper chats",
              "JSONL export for all your conversations",
              "Priority support & premium uptime SLA",
              "Business-ready: Designed for SMBs and professionals"
            ].map((feature, i) => (
              <div key={i} className="flex items-start">
                <CheckCircle2 className="mr-2 h-5 w-5 text-primary shrink-0" />
                <span>{feature}</span>
              </div>
            ))}
          </CardContent>
          <CardFooter className="flex flex-col gap-2 mt-4">
            <Button className="w-full text-lg font-semibold" size="lg">
              Start Pro for $50/mo
            </Button>
            <span className="text-xs text-muted-foreground text-center">
              30-day money-back guarantee. Cancel anytime.
            </span>
          </CardFooter>
        </Card>

        {/* Who is Pro for? Card */}
        <Card className="p-6">
          <CardHeader>
            <CardTitle>Who is Pro for?</CardTitle>
            <CardDescription>
              <span className="font-medium">Perfect for:</span>
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4 mt-2">
            <div className="flex flex-wrap gap-2 mb-2">
              <Badge variant="secondary">Small Businesses</Badge>
              <Badge variant="secondary">Professionals</Badge>
              <Badge variant="secondary">Power Users</Badge>
              <Badge variant="secondary">Teams</Badge>
            </div>
            <ul className="list-disc ml-6 text-base">
              <li>Anyone who needs reliable, persistent AI for daily workflows</li>
              <li>Users who want to save hours every week with advanced tools</li>
              <li>Businesses seeking secure, compliant, and premium AI access</li>
            </ul>
            <div className="mt-4 text-muted-foreground text-sm">
              <strong>Still on the fence?</strong> Try a <span className="underline">24h Pass</span> for $1 or a <span className="underline">Reasoning Pass</span> for $5—upgrade to Pro anytime for unlimited access.
            </div>
          </CardContent>
          <CardFooter>
            <span className="text-xs text-muted-foreground">All subscriptions managed securely via Square. Auth by Clerk.</span>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
