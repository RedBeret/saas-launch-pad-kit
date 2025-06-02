
import React from 'react';
import MainLayout from '../components/layout/MainLayout';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle, BarChart, Users, Shield, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const FeatureCard = ({ icon, title, description }: { 
  icon: React.ReactNode, 
  title: string, 
  description: string 
}) => (
  <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-100 dark:border-gray-700 hover:shadow-lg transition-shadow">
    <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center mb-4">
      {icon}
    </div>
    <h3 className="text-lg font-semibold mb-2">{title}</h3>
    <p className="text-muted-foreground">{description}</p>
  </div>
);

const FeatureSection = ({ 
  title, 
  subtitle, 
  imageUrl, 
  features, 
  reverse = false 
}: { 
  title: string, 
  subtitle: string, 
  imageUrl: string, 
  features: string[],
  reverse?: boolean 
}) => (
  <div className={`grid md:grid-cols-2 gap-8 items-center ${reverse ? 'md:flex-row-reverse' : ''}`}>
    <div>
      <h2 className="text-2xl font-bold mb-4">{title}</h2>
      <p className="text-lg text-muted-foreground mb-6">{subtitle}</p>
      <ul className="space-y-3">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
    </div>
    <div className={`${reverse ? 'md:order-first' : ''}`}>
      <img 
        src={imageUrl} 
        alt={title} 
        className="rounded-lg shadow-md w-full h-auto object-cover"
      />
    </div>
  </div>
);

const Features = () => {
  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-primary/10 to-primary/5">
        <div className="container text-center max-w-3xl">
          <h1 className="text-4xl font-extrabold mb-6">Powerful Features for Your SaaS</h1>
          <p className="text-xl text-muted-foreground mb-8">
            Everything you need to build, launch, and scale your software business in one platform.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" asChild>
              <Link to="/pricing">Get Started</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link to="/dashboard">View Demo</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Core Features Grid */}
      <section className="py-16 container">
        <h2 className="text-3xl font-bold text-center mb-12">Core Platform Features</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard 
            icon={<Shield className="h-5 w-5 text-primary" />}
            title="User Authentication" 
            description="Secure authentication with email/password, social logins, and two-factor authentication options."
          />
          <FeatureCard 
            icon={<Users className="h-5 w-5 text-primary" />}
            title="Team Collaboration" 
            description="Invite team members, assign roles, and manage permissions for seamless collaboration."
          />
          <FeatureCard 
            icon={<BarChart className="h-5 w-5 text-primary" />}
            title="Analytics Dashboard" 
            description="Real-time insights and comprehensive analytics to track your business metrics."
          />
          <FeatureCard 
            icon={<Zap className="h-5 w-5 text-primary" />}
            title="Performance Optimization" 
            description="Lightning-fast performance with optimized code and efficient resource management."
          />
          <FeatureCard 
            icon={<CheckCircle className="h-5 w-5 text-primary" />}
            title="Multi-tenant Architecture" 
            description="Securely manage multiple organizations with isolated data and configurations."
          />
          <FeatureCard 
            icon={<ArrowRight className="h-5 w-5 text-primary" />}
            title="Workflow Automation" 
            description="Automate repetitive tasks and streamline your business processes."
          />
        </div>
      </section>

      {/* Detailed Feature Sections */}
      <section className="py-16 bg-muted">
        <div className="container space-y-24">
          <FeatureSection 
            title="Project Management Made Easy" 
            subtitle="Organize your work efficiently with our intuitive project management tools."
            imageUrl="/placeholder.svg"
            features={[
              "Create and manage unlimited projects",
              "Assign tasks and track progress in real-time",
              "Collaborate with your team through comments",
              "Customize workflows to match your process",
              "Set priorities and deadlines for better organization"
            ]}
          />
          
          <FeatureSection 
            title="Secure User Management" 
            subtitle="Manage your team and customers with enterprise-grade security."
            imageUrl="/placeholder.svg"
            features={[
              "Role-based access control for granular permissions",
              "Secure authentication with multi-factor options",
              "User activity logs and audit trails",
              "Self-service user management portal",
              "SSO integration with popular providers"
            ]}
            reverse={true}
          />
          
          <FeatureSection 
            title="Seamless Subscription Management" 
            subtitle="Handle billing and subscriptions without the headache."
            imageUrl="/placeholder.svg"
            features={[
              "Multiple subscription tiers with feature gating",
              "Automated billing and invoice generation",
              "Prorated upgrades and downgrades",
              "Trial periods with automated conversion",
              "Revenue analytics and subscription metrics"
            ]}
          />
        </div>
      </section>

      {/* Integration Section */}
      <section className="py-16 container">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-bold mb-4">Integrations & API</h2>
          <p className="text-lg text-muted-foreground">
            Connect with your favorite tools and extend functionality through our developer-friendly API.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center p-6">
            <div className="h-16 w-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
              </svg>
            </div>
            <h3 className="text-lg font-semibold mb-2">Powerful REST API</h3>
            <p className="text-muted-foreground">
              Access all platform features through our comprehensive REST API.
            </p>
          </div>
          
          <div className="text-center p-6">
            <div className="h-16 w-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                <circle cx="12" cy="12" r="10"></circle>
                <path d="M12 8v8"></path>
                <path d="M8 12h8"></path>
              </svg>
            </div>
            <h3 className="text-lg font-semibold mb-2">Third-Party Integrations</h3>
            <p className="text-muted-foreground">
              Connect with Slack, Google Workspace, Microsoft 365, and more.
            </p>
          </div>
          
          <div className="text-center p-6">
            <div className="h-16 w-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                <line x1="3" y1="9" x2="21" y2="9"></line>
                <line x1="9" y1="21" x2="9" y2="9"></line>
              </svg>
            </div>
            <h3 className="text-lg font-semibold mb-2">Webhooks</h3>
            <p className="text-muted-foreground">
              Real-time event notifications to keep your systems in sync.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container text-center max-w-3xl">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl mb-8">
            Join thousands of businesses already using our platform to grow and succeed.
          </p>
          <Button size="lg" variant="secondary" asChild className="mr-4">
            <Link to="/signup">Sign Up Free</Link>
          </Button>
          <Button size="lg" variant="outline" className="bg-transparent" asChild>
            <Link to="/pricing">View Plans</Link>
          </Button>
        </div>
      </section>
    </MainLayout>
  );
};

export default Features;
