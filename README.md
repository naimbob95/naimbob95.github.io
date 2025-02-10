# naimbob95.github.io

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

## To Use the Project

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

## Additional Information

- The project uses Astro along with components and utilities for UI consistency.
- Common scripts and styles are managed within the individual components.
- For further customization, modify the respective section components in the `src/components/sections/` folder.
