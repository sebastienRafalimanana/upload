## Tools and Technologies

### 1. [Vite](https://vitejs.dev/)

Vite is a fast and lightweight build tool and development server designed for modern JavaScript projects. It supports various frameworks and libraries, including React.

To create a new Vite project, use the following command:

```bash
yarn create vite my-project --template react-ts
```

### 2. [Mantine UI Library](https://mantine.dev/)

Mantine is a modern and lightweight UI library for React. It offers a set of customizable and accessible components to help you build beautiful and functional user interfaces.

To use Mantine, first install it via yarn:

```bash
yarn add @mantine/core @mantine/hooks @mantine/form @mantine/dates dayjs @mantine/notifications @mantine/prism @mantine/tiptap @tabler/icons-react @tiptap/react @tiptap/extension-link @tiptap/starter-kit @mantine/dropzone @mantine/carousel embla-carousel-react @mantine/spotlight @mantine/modals @mantine/nprogress @emotion/react
```

### 3. [React Router](https://reactrouter.com/en/main)

React Router is a popular library for handling routing in React applications. It provides a declarative way to define routes and navigation within your app.

To install React Router, use the following command:

```bash
yarn add react-router-dom
```

### 4. [Redux Toolkit](https://redux-toolkit.js.org/)

Redux Toolkit is the official recommended way to write Redux logic. It simplifies the process of managing state in your application and includes utilities for creating reducers and actions.

To add Redux Toolkit to your project, run:

```bash
yarn add @reduxjs/toolkit react-redux
```

### 5. [Prettier](https://prettier.io/)

Prettier is a code formatter that helps maintain a consistent code style across your project. It automatically formats your code for you, saving time and reducing code review friction.

To integrate Prettier into your project, add the following devDependencies:

```bash
yarn add --dev prettier
```

#### Configuration file

create a file named `.prettierrc` in the root of the project and add the following code.

```bash
{
    "tabWidth": 4,
    "semi": false,
    "trailingComma": "es5",
    "singleQuote": true
}
``````

### 6. [Fontsource](https://fontsource.org/)

Fontsource is a simple way to self-host open-source fonts in your projects. It allows you to easily include custom fonts without relying on external services.

```bash
yarn add @fontsource-variable/plus-jakarta-sans
```

### 7. [Phosphor Icons](https://phosphoricons.com/)

Phosphor Icons is a comprehensive set of icons designed for modern web applications. It offers a wide variety of icons that can be easily integrated into your project.

```bash
yarn add @phosphor-icons/react
```

### 8. [Module Federation](https://github.com/originjs/vite-plugin-federation)

Module Federation is a powerful feature that allows you to share code between multiple projects, enabling seamless integration and code reuse.

```bash
yarn add -D @originjs/vite-plugin-federation
```

#### Configuration

```ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from '@originjs/vite-plugin-federation'
import path from 'path'

export default defineConfig({
    plugins: [
        react(),
        federation({
            name: 'my-module',
            filename: 'remoteEntry.js',
            exposes: {
                './MyButton': './src/MyButton.vue',
            },
            shared: ['react', 'react-dom'],
        }),
    ],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src/'),
        },
    },
})
```

#### Usage inside app

```ts
// dynamic import
const myNewButton = React.lazy(() => import('remote/myNewButton'))

// static import
import myNewButton from 'remote/myNewButton'
```

## Folder Structure

This boilerplate follows a common folder structure to organize your project:

- `core`: Contains core utility functions and configurations for your application.
- `components`: Houses reusable React components built with Mantine or custom components.
- `routes`: Includes React Router configurations and route-related components.
- `features`: Contains Redux slices and state management related to different features of your application.
- `utils`: Contains additional utility functions that don't belong to the `core`.
- `lib`: A place to store external libraries or shared code.
- `public`: This folder contains static assets that should be served as-is, like images or fonts.

Feel free to customize and expand this folder structure according to your project's needs.

## Launching the Project

To start your project with Vite, use the following scripts:

```bash
# Install project dependencies
yarn install

# Start the development server
yarn dev
```

Remember to adapt and add more scripts as needed based on your specific project requirements.

Happy coding! 🚀
