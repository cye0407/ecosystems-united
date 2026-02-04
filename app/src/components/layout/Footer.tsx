import { Link } from 'react-router-dom';
import { Leaf } from '@phosphor-icons/react';

export function Footer() {
  return (
    <footer className="border-t border-gray-100 bg-gray-50/50 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Powered by */}
          <div className="flex items-center gap-2 text-sm text-gray-400">
            <span>Powered by</span>
            <a 
              href="https://ecosystemsunited.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-gray-500 hover:text-primary transition-colors"
            >
              <Leaf className="w-4 h-4" weight="duotone" />
              <span className="font-medium">Ecosystems United</span>
            </a>
          </div>

          {/* Links */}
          <div className="flex items-center gap-6 text-sm text-gray-400">
            <Link to="/guide" className="hover:text-primary transition-colors">
              Guide
            </Link>
            <a 
              href="https://ecosystemsunited.com/privacy" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors"
            >
              Privacy
            </a>
            <a 
              href="https://ecosystemsunited.com/terms" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors"
            >
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
