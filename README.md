# RedBeret – SaaS Launch Platform

Welcome to RedBeret, your complete platform for launching and managing SaaS products with speed and flexibility.

> Last deployment: 2024-03-19

## Project Info

**Live URL:** [https://redberet.github.io/saas-launch-pad-kit](https://redberet.github.io/saas-launch-pad-kit)

## Getting Started

To run RedBeret locally, make sure you have Node.js and npm installed. We recommend using [nvm](https://github.com/nvm-sh/nvm#installing-and-updating) for easy Node.js management.

### Local Development

```sh
# 1. Clone the repository
git clone https://github.com/RedBeret/saas-launch-pad-kit.git

# 2. Navigate to the project directory
cd saas-launch-pad-kit

# 3. Install dependencies
npm install

# 4. Start the development server
npm run dev
```

The app will be available at [http://localhost:3000](http://localhost:3000) by default.

### Building for Production

```sh
# Build the project
npm run build

# Preview the production build locally
npm run preview
```

### GitHub Pages Deployment

This project is configured to deploy to GitHub Pages. The deployment is handled automatically through GitHub Actions.

1. Push your changes to the `main` branch
2. GitHub Actions will automatically build and deploy to GitHub Pages
3. Your site will be available at `https://redberet.github.io/saas-launch-pad-kit`
4. A `404.html` page in the `public` folder ensures client-side routing works when refreshing pages

To manually trigger a deployment:
1. Go to the [Actions tab](https://github.com/RedBeret/saas-launch-pad-kit/actions)
2. Select the "Deploy to GitHub Pages" workflow
3. Click "Run workflow"

### Technologies Used

- **Vite** – Fast build tool
- **TypeScript** – Type-safe JavaScript
- **React** – UI library
- **shadcn-ui** – UI components
- **Tailwind CSS** – Utility-first CSS

## Development

- Use your favorite IDE (VSCode recommended)
- Edit files in the `src/` directory for components, pages, and logic
- Styles are managed with Tailwind CSS

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

For questions or support, please contact the RedBeret team or open an issue on GitHub.
