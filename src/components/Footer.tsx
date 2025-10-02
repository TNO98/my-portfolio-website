import { FiHeart } from 'react-icons/fi';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-card">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2 text-secondary-foreground">
            <span>© {currentYear} Malay Sarkar. Made with</span>
            <FiHeart size={16} className="text-red-500" />
            <span>using Next.js & TypeScript</span>
          </div>
          
          <div className="flex items-center gap-6 text-sm text-secondary-foreground">
            <a 
              href="#about" 
              className="hover:text-primary transition-colors"
            >
              About
            </a>
            <a 
              href="#projects" 
              className="hover:text-primary transition-colors"
            >
              Projects
            </a>
            <a 
              href="#contact" 
              className="hover:text-primary transition-colors"
            >
              Contact
            </a>
          </div>
        </div>
        
        <div className="mt-6 pt-6 border-t border-border text-center text-sm text-secondary-foreground">
          <p>
            Java Full-Stack Developer specializing in Spring Boot, React/Next.js, and AI integrations. 
            Open to new opportunities and collaborations.
          </p>
        </div>
      </div>
    </footer>
  );
}