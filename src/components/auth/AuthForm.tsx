
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

interface AuthFormProps {
  type: 'login' | 'signup' | 'reset';
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  isLoading?: boolean;
  error?: string;
}

const AuthForm = ({ type, onSubmit, isLoading = false, error }: AuthFormProps) => {
  const title = type === 'login' 
    ? 'Welcome back' 
    : type === 'signup' 
      ? 'Create an account' 
      : 'Reset your password';
  
  const description = type === 'login' 
    ? 'Enter your credentials to access your account' 
    : type === 'signup' 
      ? 'Enter your information to create your account' 
      : 'Enter your email to receive a password reset link';
  
  const buttonText = type === 'login' 
    ? 'Sign In' 
    : type === 'signup' 
      ? 'Sign Up' 
      : 'Send Reset Link';
  
  const footerText = type === 'login' 
    ? 'Don\'t have an account?' 
    : type === 'signup' 
      ? 'Already have an account?' 
      : 'Remember your password?';
  
  const footerLinkText = type === 'login' 
    ? 'Sign up' 
    : type === 'signup' 
      ? 'Login' 
      : 'Login';
  
  const footerLinkHref = type === 'login' 
    ? '/signup' 
    : '/login';

  return (
    <Card className="w-full max-w-md mx-auto">
      <form onSubmit={onSubmit}>
        <CardHeader>
          <CardTitle className="text-2xl">{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {error && (
            <div className="p-3 rounded-md bg-destructive/10 border border-destructive/30 text-destructive text-sm mb-4">
              {error}
            </div>
          )}
          
          {type !== 'reset' && (
            <>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="your@email.com" required />
              </div>
              
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="password">Password</Label>
                  {type === 'login' && (
                    <Link to="/forgot-password" className="text-xs text-primary hover:underline">
                      Forgot password?
                    </Link>
                  )}
                </div>
                <Input id="password" type="password" required />
              </div>
              
              {type === 'signup' && (
                <div className="space-y-2">
                  <Label htmlFor="confirmPassword">Confirm Password</Label>
                  <Input id="confirmPassword" type="password" required />
                </div>
              )}
            </>
          )}
          
          {type === 'reset' && (
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="your@email.com" required />
            </div>
          )}
          
          <Button type="submit" className="w-full" disabled={isLoading}>
            {isLoading ? 'Loading...' : buttonText}
          </Button>
          
          <div className="relative my-4">
            <div className="absolute inset-0 flex items-center">
              <Separator className="w-full" />
            </div>
            <div className="relative flex justify-center">
              <span className="bg-background px-2 text-xs text-muted-foreground">
                OR CONTINUE WITH
              </span>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <Button variant="outline" type="button" className="w-full">
              <svg className="mr-2 h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
              GitHub
            </Button>
            <Button variant="outline" type="button" className="w-full">
              <svg className="mr-2 h-4 w-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.56 12.25C22.56 11.47 22.49 10.72 22.36 10H12V14.255H17.92C17.665 15.63 16.89 16.795 15.725 17.525V20.335H19.28C21.36 18.42 22.56 15.6 22.56 12.25Z" fill="#4285F4" />
                <path d="M12 23C14.97 23 17.46 22 19.28 20.335L15.725 17.525C14.74 18.165 13.48 18.525 12 18.525C9.13 18.525 6.71 16.61 5.81 14H2.17V16.88C3.98 20.555 7.7 23 12 23Z" fill="#34A853" />
                <path d="M5.81 14C5.585 13.34 5.46 12.635 5.46 11.9C5.46 11.165 5.585 10.46 5.81 9.8V6.92H2.17C1.4 8.455 0.97 10.215 0.97 12C0.97 13.785 1.4 15.545 2.17 17.08L5.81 14Z" fill="#FBBC05" />
                <path d="M12 5.275C13.62 5.275 15.065 5.86 16.185 6.92L19.28 3.825C17.455 2.12 14.97 1 12 1C7.7 1 3.98 3.445 2.17 7.12L5.81 10C6.71 7.39 9.13 5.275 12 5.275Z" fill="#EA4335" />
              </svg>
              Google
            </Button>
          </div>
        </CardContent>
        <CardFooter>
          <p className="text-sm text-center w-full text-muted-foreground">
            {footerText}{" "}
            <Link to={footerLinkHref} className="text-primary hover:underline">
              {footerLinkText}
            </Link>
          </p>
        </CardFooter>
      </form>
    </Card>
  );
};

export default AuthForm;
