export default function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/30">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-lg text-secondary-foreground max-w-2xl mx-auto">
            Passionate about building scalable applications and innovative solutions 
            that make a real impact in the world of technology.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Personal Info */}
          <div className="animate-slide-in-left">
            <h3 className="text-2xl font-semibold mb-6">Background & Passion</h3>
            <div className="space-y-4 text-secondary-foreground leading-relaxed">
              <p>
                I&apos;m a dedicated Java Full-Stack Developer with over 2 years of professional experience 
                building enterprise-level applications. My expertise spans across the entire development 
                stack, from robust backend services with Spring Boot to modern frontend applications 
                with React and Next.js.
              </p>
              <p>
                What sets me apart is my passion for integrating cutting-edge AI technologies into 
                traditional business applications. I&apos;ve successfully implemented RAG systems, 
                chatbots, and AI-powered automation solutions that have delivered significant value 
                to clients and reduced operational costs.
              </p>
              <p>
                I thrive in challenging environments where I can take ownership of complete projects, 
                from initial planning and architecture to deployment and maintenance. My experience 
                includes working with cloud platforms (AWS, Azure, GCP), implementing CI/CD pipelines, 
                and ensuring high-quality code through comprehensive testing strategies.
              </p>
            </div>
          </div>

          {/* Education & Certifications */}
          <div className="animate-slide-in-right">
            <h3 className="text-2xl font-semibold mb-6">Education & Growth</h3>
            
            {/* Education */}
            <div className="bg-card border border-border rounded-xl p-6 mb-6">
              <h4 className="font-semibold text-lg mb-2">B.Tech in Computer Science and Engineering</h4>
              <p className="text-secondary-foreground mb-2">CGPA: 7.12</p>
              <p className="text-sm text-secondary-foreground">
                Strong foundation in computer science fundamentals, algorithms, 
                data structures, and software engineering principles.
              </p>
            </div>

            {/* Certification */}
            <div className="bg-card border border-border rounded-xl p-6 mb-6">
              <h4 className="font-semibold text-lg mb-2">Full-Stack Java Development</h4>
              <p className="text-secondary-foreground mb-2">Simplilearn | Sept 2022 - March 2023</p>
              <p className="text-sm text-secondary-foreground">
                Comprehensive program covering Java, Spring Boot, Angular, databases, 
                and modern development practices.
              </p>
            </div>

            {/* Professional Values */}
            <div className="bg-primary/5 border border-primary/20 rounded-xl p-6">
              <h4 className="font-semibold text-lg mb-4 text-primary">Core Values</h4>
              <ul className="space-y-2 text-secondary-foreground text-sm">
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                  <span>Continuous learning and staying updated with latest technologies</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                  <span>Writing clean, maintainable, and well-documented code</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                  <span>Collaborative teamwork and effective communication</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                  <span>Delivering solutions that create real business value</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Current Focus */}
        <div className="mt-16 text-center animate-fade-in-up">
          <div className="bg-card border border-border rounded-xl p-8">
            <h3 className="text-2xl font-semibold mb-4">Current Focus</h3>
            <p className="text-secondary-foreground mb-6 max-w-3xl mx-auto">
              I&apos;m currently expanding my expertise in cloud-native architectures, microservices, 
              and advanced AI integrations. Always excited to work on projects that push the 
              boundaries of what&apos;s possible with modern technology.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <span className="px-4 py-2 bg-primary/10 text-primary rounded-full font-medium">
                Microservices Architecture
              </span>
              <span className="px-4 py-2 bg-accent/10 text-accent rounded-full font-medium">
                Advanced AI Integration
              </span>
              <span className="px-4 py-2 bg-secondary text-secondary-foreground rounded-full font-medium">
                Cloud-Native Solutions
              </span>
              <span className="px-4 py-2 bg-primary/10 text-primary rounded-full font-medium">
                DevOps & Automation
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}