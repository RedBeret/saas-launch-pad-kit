
import React from 'react';
import MainLayout from '../components/layout/MainLayout';
import PricingSection from '../components/subscription/PricingSection';

const Pricing = () => {
  return (
    <MainLayout>
      <div className="py-16 container text-center">
        <h1 className="text-4xl font-extrabold mb-4">Simple, Transparent Pricing</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Choose the plan that's right for you. All plans include a 14-day free trial.
        </p>
      </div>
      
      <PricingSection />
      
      <section className="py-16 bg-muted">
        <div className="container">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                  <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"></path>
                  <path d="M8 12L11 15L16 9"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold">No Credit Card Required</h3>
              <p className="text-muted-foreground">
                Start your free trial without providing any payment details.
              </p>
            </div>
            
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                  <path d="M19 5L5 19"></path>
                  <path d="M5 5L19 19"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold">Cancel Anytime</h3>
              <p className="text-muted-foreground">
                No long-term contracts or commitments. Cancel your subscription any time.
              </p>
            </div>
            
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                  <path d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"></path>
                  <path d="M12 7L12 12L15 15"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold">24/7 Support</h3>
              <p className="text-muted-foreground">
                Our support team is available 24/7 to help you with any issues.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16">
        <div className="container">
          <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="space-y-2">
              <h3 className="text-xl font-semibold">Can I change my plan later?</h3>
              <p className="text-muted-foreground">
                Yes, you can upgrade or downgrade your plan at any time. Changes take effect at the start of the next billing cycle.
              </p>
            </div>
            
            <div className="space-y-2">
              <h3 className="text-xl font-semibold">How does the free trial work?</h3>
              <p className="text-muted-foreground">
                Your free trial gives you full access to all features for 14 days. No credit card is required during the trial period.
              </p>
            </div>
            
            <div className="space-y-2">
              <h3 className="text-xl font-semibold">Do you offer discounts?</h3>
              <p className="text-muted-foreground">
                We offer discounts for annual billing, as well as special pricing for startups and non-profit organizations.
              </p>
            </div>
            
            <div className="space-y-2">
              <h3 className="text-xl font-semibold">What payment methods do you accept?</h3>
              <p className="text-muted-foreground">
                We accept all major credit cards, PayPal, and bank transfers for annual plans.
              </p>
            </div>
            
            <div className="space-y-2">
              <h3 className="text-xl font-semibold">Can I get a refund?</h3>
              <p className="text-muted-foreground">
                We offer a 30-day money-back guarantee. If you're not satisfied with our service, contact support for a full refund.
              </p>
            </div>
            
            <div className="space-y-2">
              <h3 className="text-xl font-semibold">Do you have an enterprise plan?</h3>
              <p className="text-muted-foreground">
                Yes, our Enterprise plan includes custom features, dedicated support, and flexible billing options. Contact sales for details.
              </p>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default Pricing;
