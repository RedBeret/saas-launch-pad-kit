import React from 'react';
import MainLayout from '../components/layout/MainLayout';
import PricingSection from '../components/subscription/PricingSection';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Home = () => {
  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="py-20 md:py-32 hero-gradient">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-white">
                SaaS Starter Kit
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl text-white/80">
                Launch your SaaS product in record time. Everything you need to start building your next big idea.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 pt-4">
                <Link to="/signup">
                  <Button size="lg" className="bg-white text-saas-700 hover:bg-white/90">
                    Get Started
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link to="/docs">
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                    View Documentation
                  </Button>
                </Link>
              </div>
            </div>
            <div className="mx-auto lg:ml-auto">
              <div className="glass-panel p-4 md:p-8">
                <img
                  src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7"
                  alt="Dashboard Preview"
                  className="rounded-md shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24 bg-slate-50 dark:bg-slate-900">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Everything You Need to Launch Fast</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Stop reinventing the wheel. Our starter kit gives you all the essential features so you can focus on what matters.
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="p-6 bg-background rounded-lg shadow-sm border">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                  <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"></path>
                  <path d="M12 8L12 16"></path>
                  <path d="M8 12L16 12"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Authentication</h3>
              <p className="text-muted-foreground">
                Complete user authentication system with login, signup, password reset, and social logins.
              </p>
            </div>
            
            {/* Feature 2 */}
            <div className="p-6 bg-background rounded-lg shadow-sm border">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                  <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Subscription Billing</h3>
              <p className="text-muted-foreground">
                Integrated Stripe payment processing for one-time payments and recurring subscriptions.
              </p>
            </div>
            
            {/* Feature 3 */}
            <div className="p-6 bg-background rounded-lg shadow-sm border">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Team Management</h3>
              <p className="text-muted-foreground">
                Multi-tenant architecture with team-based permissions and role management.
              </p>
            </div>
            
            {/* Feature 4 */}
            <div className="p-6 bg-background rounded-lg shadow-sm border">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                  <path d="M20 7h-9"></path>
                  <path d="M14 17H5"></path>
                  <circle cx="17" cy="17" r="3"></circle>
                  <circle cx="7" cy="7" r="3"></circle>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Admin Dashboard</h3>
              <p className="text-muted-foreground">
                Complete admin panel with user management, analytics, and content administration.
              </p>
            </div>
            
            {/* Feature 5 */}
            <div className="p-6 bg-background rounded-lg shadow-sm border">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                  <rect width="18" height="18" x="3" y="3" rx="2" ry="2"></rect>
                  <line x1="3" x2="21" y1="9" y2="9"></line>
                  <line x1="9" x2="9" y1="21" y2="9"></line>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">CRUD Module</h3>
              <p className="text-muted-foreground">
                Ready-to-go example module with create, read, update, and delete functionality.
              </p>
            </div>
            
            {/* Feature 6 */}
            <div className="p-6 bg-background rounded-lg shadow-sm border">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                  <line x1="16.5" x2="7.5" y1="9.4" y2="4.21"></line>
                  <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                  <polyline points="3.29 7 12 12 20.71 7"></polyline>
                  <line x1="12" x2="12" y1="22" y2="12"></line>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Modern Stack</h3>
              <p className="text-muted-foreground">
                Built with React, Tailwind CSS, TypeScript, and other modern technologies.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Why Developers Love It</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Trusted by indie hackers, startups, and developers worldwide to launch SaaS products quickly.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="p-6 bg-muted rounded-lg">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 rounded-full bg-primary/20 text-primary flex items-center justify-center font-bold mr-3">
                  JD
                </div>
                <div>
                  <h4 className="font-semibold">John Doe</h4>
                  <p className="text-sm text-muted-foreground">Indie Hacker</p>
                </div>
              </div>
              <p className="text-muted-foreground">
                "This starter kit saved me weeks of development time. I was able to launch my MVP in just two days and start collecting feedback from real users."
              </p>
            </div>
            
            {/* Testimonial 2 */}
            <div className="p-6 bg-muted rounded-lg">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 rounded-full bg-primary/20 text-primary flex items-center justify-center font-bold mr-3">
                  AS
                </div>
                <div>
                  <h4 className="font-semibold">Amy Smith</h4>
                  <p className="text-sm text-muted-foreground">Frontend Developer</p>
                </div>
              </div>
              <p className="text-muted-foreground">
                "The authentication and billing systems work flawlessly out of the box. I was able to focus on building my unique features instead."
              </p>
            </div>
            
            {/* Testimonial 3 */}
            <div className="p-6 bg-muted rounded-lg">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 rounded-full bg-primary/20 text-primary flex items-center justify-center font-bold mr-3">
                  MT
                </div>
                <div>
                  <h4 className="font-semibold">Mark Thompson</h4>
                  <p className="text-sm text-muted-foreground">Startup Founder</p>
                </div>
              </div>
              <p className="text-muted-foreground">
                "We launched our entire product on top of this starter kit and now have paying customers. Best investment we've made so far."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <PricingSection />
      
      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-slate-50 dark:bg-slate-900">
        <div className="container px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Ready to Build Your SaaS?</h2>
            <p className="text-muted-foreground text-lg mb-8">
              Join hundreds of developers who are shipping faster with SaaS in a Day.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/signup">
                <Button size="lg">
                  Get Started For Free
                </Button>
              </Link>
              <Link to="/docs">
                <Button size="lg" variant="outline">
                  Read Documentation
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default Home;
