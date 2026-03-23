# GameShelf Lab 8 Starter

This is a minimally functional React web app for SEG3125 Lab 8.

Implemented in this build:
- Home page with featured games and featured reviews
- Discover page with quick search
- Game profile page
- Review modal with validation
- My Game Library page
- Local state for reviews and library actions

Next likely step:
- replace page-state navigation with react-router-dom URLs
- connect a real backend in Lab 9

How to test it locally:

cd /Users/alexseiffert/Desktop/SEG3125Lab8/SEG3125_Lab8
npm install
npm run dev

Then open the local URL shown in the terminal, usually:

http://localhost:5173

Do not open index.html directly with Live Server for this project.

## Deploy to GitHub Pages

1. Create a GitHub repository and push this project to it.
2. Run the deploy command:

npm run deploy

3. In GitHub, go to Settings > Pages:
   - Source: Deploy from a branch
   - Branch: gh-pages
   - Folder: / (root)
4. Save. Your site will be published on the GitHub Pages URL shown there.