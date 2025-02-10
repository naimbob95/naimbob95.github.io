# Minimalist Web CV

This project is a personal portfolio website built with Astro. It showcases sections including About, Experience, Education, Skills, and Certificates.

## Project Structure

- **src/components/sections/** – Contains individual sections:
  - About.astro
  - Experience.astro
  - Education.astro
  - Skill.astro
  - Certificate.astro
- **src/components/Home.astro** – The main page component that imports and renders the above sections.
- **public/** – Static assets such as images.
- **src/assets/** – Additional media assets.
- **README.md** – Project overview and instructions.


## Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/naimbob95/naimbob95.github.io.git
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the development server:
   ```bash
   npm run dev
   ```
4. Open your browser and navigate to `http://localhost:3000` to view the website.

## Build

To build the production-ready version, run:
```bash
npm run build
```


## To change the user information in the project

Update the relevant information in **src/userInformations.ts** for:
- userProfile
- experienceItems
- educationItems
- skillItem
- certificateItems

**Update Profile Image**: Replace the existing image at `src/assets/profile.jpg` with your own. If your image has a different format or filename, adjust the import path in `src/userInformations.ts` accordingly:

```typescript
import ProfileImage from './assets/your-image-filename.jpg';
```

## Deploy the website to github pages
1. Make sure the repo in github name is your-username.github.io

2.  Change the **site** in astro.config.mjs file to includes the your github pages url
```javascript
export default defineConfig({
  site: 'https://your-username.github.io'
});
```
2.  Add, commit, and push your changes to the main branch of your GitHub repository:
```bash
git add .
git commit -m "Set up GitHub Pages deployment"
git push origin main
   ```
3. Configure GitHub Pages:

- Navigate to your repository on GitHub.
- Go to Settings > Pages.
- Under "Build and deployment", ensure the source is set to the gh-pages branch (this is managed by the deployment action).

can refer this for github pages deployment:

- [Deploy your Astro Site to GitHub Pages](https://docs.astro.build/en/guides/deploy/github/)
- [Github Pages Quickstart](https://docs.github.com/en/pages/quickstart)


## Additional Information

- The project uses Astro along with components and utilities for UI consistency.
- Common scripts and styles are managed within the individual components.
- For further customization, modify the respective section components in the `src/components/sections/` folder.
