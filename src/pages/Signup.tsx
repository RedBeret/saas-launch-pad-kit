import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import MainLayout from '../components/layout/MainLayout';
import AuthForm from '../components/auth/AuthForm';

const Signup = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | undefined>();
  
  const handleSignup = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(undefined);
    setIsLoading(true);
    
    // Get form data
    const formData = new FormData(e.currentTarget);
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;
    const confirmPassword = formData.get('confirmPassword') as string;
    
    // Validate passwords match
    if (password !== confirmPassword) {
      setError("Passwords don't match");
      setIsLoading(false);
      return;
    }
    
    try {
      // Simulate signup
      console.log('Signing up with:', { email, password });
      
      // Fake delay to simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Redirect to dashboard (in a real app, this would happen after successful authentication)
      window.location.href = '/dashboard';
    } catch (err) {
      setError('Failed to create account. Please try again.');
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
            <span className="ml-2 font-bold text-xl">SaaS Starter Kit</span>
          </Link>
          
          <AuthForm
            type="signup"
            onSubmit={handleSignup}
            isLoading={isLoading}
            error={error}
          />
        </div>
      </div>
    </MainLayout>
  );
};

export default Signup;
