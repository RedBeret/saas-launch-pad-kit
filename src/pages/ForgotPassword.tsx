
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import MainLayout from '../components/layout/MainLayout';
import AuthForm from '../components/auth/AuthForm';
import { toast } from '@/components/ui/use-toast';

const ForgotPassword = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | undefined>();
  const [emailSent, setEmailSent] = useState(false);
  
  const handleReset = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(undefined);
    setIsLoading(true);
    
    // Get form data
    const formData = new FormData(e.currentTarget);
    const email = formData.get('email') as string;
    
    try {
      // Simulate password reset
      console.log('Sending password reset email to:', email);
      
      // Fake delay to simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Show success
      setEmailSent(true);
      toast({
        title: "Reset link sent",
        description: "Check your inbox for password reset instructions",
      });
    } catch (err) {
      setError('Failed to send reset email. Please try again.');
      setIsLoading(false);
    }
  };
  
  return (
    <MainLayout showFooter={false}>
      <div className="flex min-h-[calc(100vh-64px)] items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-md">
          <Link to="/" className="flex items-center justify-center mb-8">
            <div className="h-8 w-8 rounded-md hero-gradient flex items-center justify-center">
              <span className="font-bold text-white">S</span>
            </div>
            <span className="ml-2 font-bold text-xl">SaaS Kit</span>
          </Link>
          
          {emailSent ? (
            <div className="bg-white p-8 rounded-lg shadow-sm border">
              <h2 className="text-2xl font-bold mb-4">Check Your Email</h2>
              <p className="text-muted-foreground mb-6">
                We've sent a password reset link to your email address. Please check your inbox.
              </p>
              <div className="flex flex-col space-y-4">
                <Link to="/login" className="text-primary hover:underline text-center">
                  Return to login
                </Link>
              </div>
            </div>
          ) : (
            <AuthForm
              type="reset"
              onSubmit={handleReset}
              isLoading={isLoading}
              error={error}
            />
          )}
        </div>
      </div>
    </MainLayout>
  );
};

export default ForgotPassword;
