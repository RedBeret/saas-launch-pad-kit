
import React, { useState } from 'react';
import PricingCard, { PricingPlan } from './PricingCard';
import { Button } from "@/components/ui/button";

const pricingPlans: PricingPlan[] = [
  {
    id: 'free',
    name: 'Free',
    description: 'Perfect for trying out the platform',
    price: {
      monthly: 0,
      annually: 0
    },
    features: [
      'Up to 3 projects',
      'Up to 1,000 records',
      'Basic analytics',
      'Community support',
      '1 team member'
    ]
  },
  {
    id: 'pro',
    name: 'Pro',
    description: 'For professionals and growing teams',
    price: {
      monthly: 29,
      annually: 290
    },
    features: [
      'Unlimited projects',
      'Up to 50,000 records',
      'Advanced analytics',
      'Priority support',
      'Up to 5 team members',
      'API access',
      'Custom domains'
    ],
    popular: true
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    description: 'For organizations with advanced needs',
    price: {
      monthly: 99,
      annually: 990
    },
    features: [
      'Unlimited everything',
      'Enterprise analytics',
      'Dedicated support',
      'Unlimited team members',
      'Advanced security',
      'Custom integrations',
      'SLA guarantees',
      'Dedicated environment'
    ],
    buttonText: 'Contact Sales'
  }
];

interface PricingSectionProps {
  currentPlan?: string;
}

const PricingSection = ({ currentPlan }: PricingSectionProps) => {
  const [interval, setInterval] = useState<'monthly' | 'annually'>('monthly');
  
  const handleSelectPlan = (planId: string) => {
    console.log(`Selected plan: ${planId}`);
    // Implement subscription logic
  };
  
  return (
    <section className="py-16 container">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h2 className="text-3xl font-bold mb-4">Simple, transparent pricing</h2>
        <p className="text-lg text-muted-foreground mb-8">
          Choose the plan that's right for you and start building your SaaS today.
        </p>
        
        <div className="inline-flex items-center bg-muted p-1 rounded-lg mb-8">
          <Button
            variant={interval === 'monthly' ? 'default' : 'ghost'}
            size="sm"
            onClick={() => setInterval('monthly')}
            className="rounded-md"
          >
            Monthly
          </Button>
          <Button
            variant={interval === 'annually' ? 'default' : 'ghost'}
            size="sm"
            onClick={() => setInterval('annually')}
            className="rounded-md"
          >
            Annually
            <span className="ml-1.5 text-xs bg-primary/20 text-primary rounded-full px-2 py-0.5">
              Save 20%
            </span>
          </Button>
        </div>
      </div>
      
      <div className="grid md:grid-cols-3 gap-8">
        {pricingPlans.map((plan) => (
          <PricingCard
            key={plan.id}
            plan={plan}
            interval={interval}
            onSelectPlan={handleSelectPlan}
            currentPlan={currentPlan}
          />
        ))}
      </div>
    </section>
  );
};

export default PricingSection;
