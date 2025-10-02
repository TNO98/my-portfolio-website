# Malay Sarkar - Portfolio Website

A professional single-page portfolio website for Malay Sarkar, a Java Full-Stack Developer specializing in Spring Boot, React/Next.js, PostgreSQL, and AI integrations.

## 🚀 Features

- **Modern Design**: Clean, professional design with dark/light theme support
- **Responsive**: Fully responsive design that works on all devices
- **Performance Optimized**: Built with Next.js 15 and optimized for speed
- **Professional Content**: Complete portfolio showcasing:
  - Hero section with tech stack
  - About section with background and values
  - Skills organized by categories
  - Professional experience with detailed achievements
  - Featured projects with live links
  - Contact form with validation
- **Tech Stack Highlights**: 
  - Java 17, Spring Boot, React/Next.js
  - PostgreSQL, Docker, AWS/Azure/GCP
  - AI integrations and automation solutions

## 🛠️ Built With

- **Framework**: Next.js 15 with TypeScript
- **Styling**: Tailwind CSS with custom CSS variables
- **Icons**: React Icons (Feather Icons, Simple Icons)
- **Fonts**: Inter (sans-serif) & JetBrains Mono (monospace)
- **Deployment**: Optimized for Vercel

## 🏃‍♂️ Getting Started

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd my-portfolio-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
src/
├── app/
│   ├── globals.css          # Global styles and CSS variables
│   ├── layout.tsx           # Root layout with fonts and metadata
│   └── page.tsx             # Main page component
├── components/
│   ├── Header.tsx           # Navigation and theme toggle
│   ├── Hero.tsx             # Hero section with tech showcase
│   ├── About.tsx            # About section
│   ├── Skills.tsx           # Technical skills grid
│   ├── Experience.tsx       # Professional experience timeline
│   ├── Projects.tsx         # Featured projects showcase
│   ├── Contact.tsx          # Contact form and information
│   └── Footer.tsx           # Footer component
└── assets/
    └── Malay_Sarkar_CV.md   # CV content source
```

## 🎨 Design Features

- **Dark/Light Theme**: Automatic system preference detection with manual toggle
- **Smooth Animations**: CSS animations for better user experience
- **Professional Color Scheme**: Carefully chosen colors for readability and professionalism
- **Typography**: Professional fonts optimized for readability
- **Accessibility**: Proper semantic HTML and ARIA labels

## 🚀 Deployment

The application is optimized for deployment on Vercel:

```bash
npm run build
npm run start
```

## 📝 Content Management

All professional content is sourced from `src/assets/Malay_Sarkar_CV.md` and structured into:
- Personal information and contact details
- Professional experience and achievements
- Technical skills and expertise
- Featured projects and accomplishments
- Education and certifications

## 📱 Responsive Design

- **Desktop**: Full layout with sidebar navigation
- **Tablet**: Adapted layout with hamburger menu
- **Mobile**: Single-column layout optimized for small screens

## 🔧 Customization

To customize for your own portfolio:
1. Update content in `src/assets/` with your CV
2. Modify personal information in components
3. Update color scheme in `globals.css`
4. Replace project information and links
5. Update metadata in `layout.tsx`

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
