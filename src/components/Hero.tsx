import { FiGithub, FiLinkedin, FiMail, FiPhone, FiMapPin, FiDownload } from 'react-icons/fi';
import { SiSpring, SiReact, SiNextdotjs, SiPostgresql } from 'react-icons/si';
import { FaJava } from 'react-icons/fa';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center pt-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="animate-fade-in-up">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Hi, I&apos;m{' '}
              <span className="gradient-text">Malay Sarkar</span>
            </h1>
            <h2 className="text-xl sm:text-2xl lg:text-3xl text-secondary-foreground mb-6">
              Java Full-Stack Developer
            </h2>
            <p className="text-lg text-secondary-foreground mb-8 leading-relaxed max-w-2xl">
              Detail-oriented Java Full-Stack developer skilled in Spring Boot, React/Next.js, 
              PostgreSQL, and AI integrations, plus CI/CD and containerized deployments across 
              AWS, Azure, and GCP.
            </p>

            {/* Contact Info */}
            <div className="flex flex-wrap gap-4 mb-8">
              <a 
                href="tel:+919635573845" 
                className="flex items-center gap-2 text-secondary-foreground hover:text-primary transition-colors"
              >
                <FiPhone size={16} />
                +91-9635573845
              </a>
              <a 
                href="mailto:malaysircar@gmail.com" 
                className="flex items-center gap-2 text-secondary-foreground hover:text-primary transition-colors"
              >
                <FiMail size={16} />
                malaysircar@gmail.com
              </a>
              <span className="flex items-center gap-2 text-secondary-foreground">
                <FiMapPin size={16} />
                Kolkata, India
              </span>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4 mb-8">
              <a
                href="#contact"
                className="bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors duration-200"
              >
                Get In Touch
              </a>
              <a
                href="#projects"
                className="border border-border px-6 py-3 rounded-lg font-medium hover:bg-secondary transition-colors duration-200"
              >
                View Projects
              </a>
              <a
                // href="/Malay_Sarkar_CV.pdf"
                 href="#"
                download="Malay_Sarkar_CV.pdf"
                className="flex items-center gap-2 border border-border px-6 py-3 rounded-lg font-medium hover:bg-secondary transition-colors duration-200"
              >
                <FiDownload size={16} />
                Download CV
              </a>
            </div>

            {/* Social Links */}
            <div className="flex gap-4">
              <a
                href="https://github.com/TNO98"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 border border-border rounded-lg hover:bg-secondary transition-colors duration-200"
                aria-label="GitHub Profile"
              >
                <FiGithub size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/malay-sarkar-216b8b284/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 border border-border rounded-lg hover:bg-secondary transition-colors duration-200"
                aria-label="LinkedIn Profile"
              >
                <FiLinkedin size={20} />
              </a>
            </div>
          </div>

          {/* Tech Stack Showcase */}
          <div className="animate-slide-in-right">
            <div className="relative">
              <div className="bg-card border border-border rounded-2xl p-8 shadow-lg">
                <h3 className="text-xl font-semibold mb-6 text-center">Primary Tech Stack</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
                  <div className="flex flex-col items-center p-4 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors duration-200">
                    <FaJava size={40} className="text-[#ED8B00] mb-2" />
                    <span className="text-sm font-medium">Java 17</span>
                  </div>
                  <div className="flex flex-col items-center p-4 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors duration-200">
                    <SiSpring size={40} className="text-[#6DB33F] mb-2" />
                    <span className="text-sm font-medium">Spring Boot</span>
                  </div>
                  <div className="flex flex-col items-center p-4 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors duration-200">
                    <SiReact size={40} className="text-[#61DAFB] mb-2" />
                    <span className="text-sm font-medium">React</span>
                  </div>
                  <div className="flex flex-col items-center p-4 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors duration-200">
                    <SiNextdotjs size={40} className="text-foreground mb-2" />
                    <span className="text-sm font-medium">Next.js</span>
                  </div>
                  <div className="flex flex-col items-center p-4 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors duration-200">
                    <SiPostgresql size={40} className="text-[#336791] mb-2" />
                    <span className="text-sm font-medium">PostgreSQL</span>
                  </div>
                  <div className="flex flex-col items-center p-4 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors duration-200">
                    <div className="w-10 h-10 bg-gradient-to-r from-primary to-accent rounded-lg flex items-center justify-center mb-2">
                      <span className="text-white text-sm font-bold">AI</span>
                    </div>
                    <span className="text-sm font-medium">AI Integration</span>
                  </div>
                </div>
              </div>
              
              {/* Floating decorative elements */}
              <div className="absolute -z-10 top-4 left-4 w-20 h-20 bg-primary/10 rounded-full blur-xl"></div>
              <div className="absolute -z-10 bottom-4 right-4 w-16 h-16 bg-accent/10 rounded-full blur-xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}