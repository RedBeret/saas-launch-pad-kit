
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { CheckIcon } from "lucide-react";

export interface PricingPlan {
  id: string;
  name: string;
  description: string;
  price: {
    monthly: number;
    annually: number;
  };
  features: string[];
  popular?: boolean;
  buttonText?: string;
}

interface PricingCardProps {
  plan: PricingPlan;
  interval: 'monthly' | 'annually';
  onSelectPlan: (planId: string) => void;
  className?: string;
  currentPlan?: string;
}

const PricingCard = ({ 
  plan, 
  interval, 
  onSelectPlan,
  className,
  currentPlan
}: PricingCardProps) => {
  const isCurrentPlan = currentPlan === plan.id;
  const price = interval === 'monthly' ? plan.price.monthly : plan.price.annually;
  
  return (
    <Card className={cn(
      "flex flex-col",
      plan.popular && "border-primary shadow-md",
      className
    )}>
      {plan.popular && (
        <div className="bg-primary text-primary-foreground text-xs font-semibold uppercase tracking-wider py-1 px-3 w-fit rounded-r-full mt-4 ml-0">
          Popular
        </div>
      )}
      
      <CardHeader>
        <CardTitle>{plan.name}</CardTitle>
        <CardDescription>{plan.description}</CardDescription>
      </CardHeader>
      
      <CardContent className="flex-grow">
        <div className="flex items-baseline mb-6">
          <span className="text-3xl font-bold">${price}</span>
          <span className="text-sm text-muted-foreground ml-1">/{interval === 'monthly' ? 'month' : 'year'}</span>
        </div>
        
        <ul className="space-y-3">
          {plan.features.map((feature, i) => (
            <li key={i} className="flex items-start">
              <CheckIcon className="h-5 w-5 text-primary shrink-0 mr-2" />
              <span className="text-sm">{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      
      <CardFooter className="pt-4">
        <Button
          className="w-full"
          variant={isCurrentPlan ? "outline" : "default"}
          onClick={() => onSelectPlan(plan.id)}
          disabled={isCurrentPlan}
        >
          {isCurrentPlan ? "Current Plan" : plan.buttonText || "Get Started"}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default PricingCard;
