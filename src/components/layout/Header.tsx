
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";
import { Menu } from "lucide-react";

const Header = () => {
  const isMobile = useIsMobile();
  const [menuOpen, setMenuOpen] = React.useState(false);

  return (
    <header className="w-full border-b border-border bg-background/90 backdrop-blur-md fixed top-0 z-50">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-6">
          <Link to="/" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-md hero-gradient flex items-center justify-center">
              <span className="font-bold text-white">S</span>
            </div>
            <span className="font-bold text-xl">SaaS Kit</span>
          </Link>
          
          {!isMobile && (
            <nav className="hidden md:flex items-center gap-6">
              <Link to="/features" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                Features
              </Link>
              <Link to="/pricing" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                Pricing
              </Link>
              <Link to="/docs" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                Documentation
              </Link>
            </nav>
          )}
        </div>
        
        <div className="flex items-center gap-4">
          <Link to="/login">
            <Button variant="ghost" size="sm">
              Log In
            </Button>
          </Link>
          <Link to="/signup">
            <Button size="sm">
              Get Started
            </Button>
          </Link>
          
          {isMobile && (
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Menu"
            >
              <Menu className="h-5 w-5" />
            </Button>
          )}
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMobile && menuOpen && (
        <div className="container py-4 border-t border-border animate-fade-in">
          <nav className="flex flex-col space-y-4">
            <Link 
              to="/features" 
              className="px-4 py-2 text-sm font-medium rounded-md hover:bg-accent"
              onClick={() => setMenuOpen(false)}
            >
              Features
            </Link>
            <Link 
              to="/pricing" 
              className="px-4 py-2 text-sm font-medium rounded-md hover:bg-accent"
              onClick={() => setMenuOpen(false)}
            >
              Pricing
            </Link>
            <Link 
              to="/docs" 
              className="px-4 py-2 text-sm font-medium rounded-md hover:bg-accent"
              onClick={() => setMenuOpen(false)}
            >
              Documentation
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
