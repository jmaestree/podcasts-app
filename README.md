# Podcasts app

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

- 📔 [Available scripts](#📔-available-scripts)
- 📂 [Directory overview](#📂-directory-overview)

## Available scripts

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm run start:pro`

Runs the app in the production mode (executing the app built on `/build` folder).\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

> NOTE: This command should be executed after running the `npm run build` command

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\

## 📂 Directory overview

```bash
├── [+] public/                       # Static and public files
├── [+] src/
│    ├── /api                           # Contain interfaces, DTO's and services used for retrieving data from API's
│    ├── /components                    # Components of the app
│    ├── /routes                        # Contains router configuration and routes/screens
│    ├── /utils                         # Utilities shared accross the app
│    ├── index.css                      # Styles of the app
│    └── index.tsx                      # Main entry point of the app
├── .gitignore                        # Git ignore config
├── .prettierrc.js                    # Prettier config
├── package.json
├── README.md                         # Inception
├── tailwind.config.js                # Tailwind config
└── tsconfig.json                     # Typescript config
```
