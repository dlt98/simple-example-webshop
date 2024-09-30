# Project Overview: React + TypeScript + Vite

This project is a web application built using React, TypeScript, and Vite. It is a simple demonstration of a web shop

## Table of Contents

- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Dependencies](#dependencies)
- [ESLint Configuration](#eslint-configuration)
- [Scripts](#scripts)
- [Styling](#styling)
- [Components](#components)
- [API Integration](#api-integration)
- [Hooks](#hooks)
- [Utilities](#utilities)

## Getting Started

To get started with the project, clone the repository and install the dependencies:

```bash
git clone <repository-url>
cd <project-directory>
npm install
```

After installing the dependencies, you can run the development server:

```bash
npm run dev
```

This will start the Vite development server, and you can view the application in your browser at `http://localhost:5173`.

## Project Structure

The project is organized into several directories:

- `src/`: Contains all the source code for the application.
  - `components/`: Contains reusable React components.
  - `hooks/`: Custom React hooks for managing state and side effects.
  - `api/`: API routes and functions for data fetching.
  - `types/`: TypeScript interfaces and types.
  - `utils/`: Utility functions.
  - `assets/`: Static assets like images and icons.
  - `constants/`: Constant values used in the app.

## Dependencies

The project uses several dependencies to enhance functionality:

- **React**: The core library for building user interfaces.
- **TypeScript**: A superset of JavaScript that adds static typing.
- **Vite**: A fast build tool and development server.
- **React Query**: For data fetching and state management.
- **Tailwind CSS**: A utility-first CSS framework for styling.
- **ESLint**: A tool for identifying and fixing problems in JavaScript code.
- **Prettier**: A code formatter for maintaining consistent code style.

## ESLint Configuration

The project includes a comprehensive ESLint configuration to enforce coding standards and best practices. The ESLint rules are defined in the `eslint.config.js` file, and the configuration is set up to work with TypeScript and React.

To run ESLint, use the following command:

```bash
npm run lint
```

## Scripts

The following scripts are available in the `package.json` file:

- `dev`: Starts the development server.
- `build`: Builds the application for production.
- `lint`: Runs ESLint to check for code quality issues.
- `preview`: Previews the production build.
- `format`: Formats the code using Prettier.

## Styling

The project uses Tailwind CSS for styling. The styles are defined in the `src/index.css` file, which imports Tailwind's base, components, and utilities. Custom styles can be added within the `@layer` directive in the same file.

## Components

The application is built using reusable components located in the `src/components/` directory. Each component is responsible for a specific part of the UI and can be composed together to create complex layouts.

### Example Component

Here is an example of a simple component:

```typescript
import { ReactNode } from "react";

interface IProps {
  children: ReactNode;
}

export const Layout = ({ children }: IProps) => {
  return (
    <div className="container mx-auto p-4">
      {children}
    </div>
  );
};
```

## API Integration

The project includes an API layer located in the `src/api/` directory. This layer handles all data fetching and communication with the backend. The API routes are defined in separate files for better organization.

## Hooks

Custom hooks are defined in the `src/hooks/` directory. These hooks encapsulate logic for managing state and side effects, making it easier to reuse across components.

### Example Hook

Here is an example of a custom hook:

```typescript
import { useState, useEffect } from "react";

export const useFetchData = (url: string) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(url);
      const result = await response.json();
      setData(result);
      setLoading(false);
    };

    fetchData();
  }, [url]);

  return { data, loading };
};
```

## Utilities

Utility functions are located in the `src/utils/` directory. These functions provide common functionality that can be reused throughout the application.
