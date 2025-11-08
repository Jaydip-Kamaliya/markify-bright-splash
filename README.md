# Markify - Professional Watermarking Tool

A modern, responsive landing page for Markify - a powerful watermarking tool that helps protect your digital content with customizable watermarks.

## Project info

**URL**: https://lovable.dev/projects/b9f5a324-800c-4475-9878-6680ba7c6962

## About Markify

Markify is a watermarking solution designed for photographers, content creators, and businesses who need to protect their digital assets. The application offers both free and pro versions with features including:

- **Batch Processing**: Watermark multiple images at once
- **Custom Watermarks**: Add text or logo watermarks
- **Flexible Positioning**: Place watermarks anywhere on your images
- **Adjustable Opacity**: Control watermark transparency
- **Multiple Export Formats**: Support for various image formats
- **High-Quality Output**: Maintain image quality after watermarking

### Pricing Plans

- **Free Version**: Basic watermarking features for personal use
- **Pro Version**: ₹199 one-time payment for lifetime access with advanced features including:
  - Unlimited batch processing
  - Priority support
  - Custom watermark templates
  - Advanced positioning options
  - Commercial license

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/b9f5a324-800c-4475-9878-6680ba7c6962) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- **Vite**: Fast build tool and development server
- **TypeScript**: Type-safe JavaScript
- **React 18**: Modern React with hooks
- **shadcn-ui**: Beautiful, accessible UI components
- **Tailwind CSS**: Utility-first CSS framework
- **Lucide React**: Icon library
- **React Router DOM**: Client-side routing

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── ui/             # shadcn-ui components
│   ├── Hero.tsx        # Landing page hero section
│   ├── Features.tsx    # Features showcase
│   ├── HowItWorks.tsx  # Step-by-step guide
│   ├── DemoVideo.tsx   # Interactive demo video player
│   ├── PricingCards.tsx # Pricing plans
│   ├── ComparisonTable.tsx # Free vs Pro comparison
│   ├── UseCases.tsx    # Use case examples
│   ├── CTA.tsx         # Call-to-action section
│   └── Footer.tsx      # Page footer
├── pages/              # Page components
│   ├── Index.tsx       # Main landing page
│   ├── FAQ.tsx         # Frequently asked questions
│   ├── PrivacyPolicy.tsx
│   └── TermsOfService.tsx
├── assets/             # Static assets
│   ├── hero-mockup.jpg
│   └── markify-demo.mp4
└── lib/                # Utility functions
```

## How can I deploy this project?

Simply open [Lovable](https://lovable.dev/projects/b9f5a324-800c-4475-9878-6680ba7c6962) and click on Share -> Publish.

## Can I connect a custom domain to my Lovable project?

Yes, you can!

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://docs.lovable.dev/features/custom-domain#custom-domain)
