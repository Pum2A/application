# 🧑‍💼 User Management Table with Redux & TypeScript

A **React** application that displays a list of users fetched from an API with real-time search functionality. Built with **Redux Toolkit**, **TypeScript**, and **Tailwind CSS** to ensure robust state management, type safety, and responsive design.

## ✨ Features

- **User Management Table**: Displays user data (name, username, email, and phone).
- **Advanced Filtering**: Real-time search across all fields (name, username, email, phone).
- **State Management with Redux**: Uses Redux Toolkit to manage application state.
- **Type Safety with TypeScript**: Ensures type safety across the application.
- **Responsive Design**: Fully responsive for mobile and desktop screens using Tailwind CSS.

## 🗂️ Project Architecture

The project is organized into the following folders:

- **`/src`**: Contains the main source code.
  - **`/components`**: Holds React components like the `UserTable`.
  - **`/features`**: Contains Redux slices, such as `userSlice.ts`, for managing state.
  - **`/services`**: Handles API requests and interactions with external services.
  - **`/store`**: Redux store configuration.
  - **`/types`**: TypeScript types and interfaces for the application.

## 🛠️ Technologies Used

- **React**: JavaScript library for building user interfaces.
- **Redux Toolkit**: For state management.
- **TypeScript**: Ensures type safety.
- **Tailwind CSS**: For styling the UI.
- **Vite**: Build tool for fast development.
- **JSONPlaceholder**: Mock API to fetch users.
