// src/data/courseContent/realWorldReactJS.js
export const realWorldReactJS = {
    title: "Real World React JS",
    lessons: [
      {
        id: 1,
        title: "Introduction to React",
        content: "React is a JavaScript library for building user interfaces, particularly single-page applications where UI updates are frequent.",
        quiz: [
          {
            question: "What is React primarily used for?",
            options: ["Server-side scripting", "Database management", "Building user interfaces", "Network requests"],
            answer: "Building user interfaces"
          }
        ]
      },
      {
        id: 2,
        title: "Setting Up a React Environment",
        content: "Learn how to set up a React development environment using tools like Create React App, Vite, or Next.js.",
        quiz: [
          {
            question: "Which tool provides a zero-configuration setup for React applications?",
            options: ["Webpack", "Create React App", "Babel", "ESLint"],
            answer: "Create React App"
          }
        ]
      },
      {
        id: 3,
        title: "JSX and React Elements",
        content: "Understand JSX syntax and how React elements are created and rendered to the DOM.",
        quiz: [
          {
            question: "What does JSX ultimately compile to in React?",
            options: ["HTML elements", "JavaScript functions", "React.createElement() calls", "DOM nodes"],
            answer: "React.createElement() calls"
          }
        ]
      },
      {
        id: 4,
        title: "Components and Props",
        content: "Learn about functional and class components, and how to pass data between components using props.",
        quiz: [
          {
            question: "What are props in React?",
            options: ["Internal component state", "Properties passed to components", "HTML attributes", "Event handlers"],
            answer: "Properties passed to components"
          }
        ]
      },
      {
        id: 5,
        title: "State and Lifecycle",
        content: "Explore component state, lifecycle methods, and how to manage dynamic data in your applications.",
        quiz: [
          {
            question: "Which hook is used to add state to a functional component?",
            options: ["useEffect()", "useState()", "useContext()", "useReducer()"],
            answer: "useState()"
          }
        ]
      },
      {
        id: 6,
        title: "Handling Events and Forms",
        content: "Learn how to handle user interactions and form inputs in React applications.",
        quiz: [
          {
            question: "What is the correct way to handle form submission in React?",
            options: ["Using the onSubmit event", "Using the onClick event on a button", "Directly manipulating the DOM", "Adding a default action"],
            answer: "Using the onSubmit event"
          }
        ]
      },
      {
        id: 7,
        title: "Conditional Rendering and Lists",
        content: "Master techniques for conditionally rendering components and working with lists of data.",
        quiz: [
          {
            question: "What property is required when rendering a list of elements in React?",
            options: ["id", "key", "index", "name"],
            answer: "key"
          }
        ]
      },
      {
        id: 8,
        title: "React Hooks in Depth",
        content: "Dive deeper into React Hooks like useEffect, useContext, useReducer, and custom hooks.",
        quiz: [
          {
            question: "What is the primary purpose of useEffect()?",
            options: ["Managing state", "Performing side effects", "Creating refs", "Memoizing values"],
            answer: "Performing side effects"
          }
        ]
      },
      {
        id: 9,
        title: "Context API and Global State",
        content: "Learn how to manage global state and avoid prop drilling using React's Context API.",
        quiz: [
          {
            question: "What problem does Context API solve in React applications?",
            options: ["Performance issues", "Prop drilling", "Component styling", "Server-side rendering"],
            answer: "Prop drilling"
          }
        ]
      },
      {
        id: 10,
        title: "Routing with React Router",
        content: "Implement client-side routing in your React applications using React Router.",
        quiz: [
          {
            question: "Which component is used to define a route in React Router?",
            options: ["<Link>", "<Route>", "<Switch>", "<NavLink>"],
            answer: "<Route>"
          }
        ]
      },
      {
        id: 11,
        title: "API Integration and Data Fetching",
        content: "Learn strategies for fetching data from APIs and handling asynchronous operations in React.",
        quiz: [
          {
            question: "Which hook is commonly used for data fetching in functional components?",
            options: ["useState", "useEffect", "useContext", "useReducer"],
            answer: "useEffect"
          }
        ]
      },
      {
        id: 12,
        title: "State Management with Redux",
        content: "Understand Redux architecture and how to implement it for complex state management in React applications.",
        quiz: [
          {
            question: "What are the three fundamental principles of Redux?",
            options: ["Components, Props, State", "Model, View, Controller", "Single source of truth, State is read-only, Changes are made with pure functions", "Reducers, Actions, Store"],
            answer: "Single source of truth, State is read-only, Changes are made with pure functions"
          }
        ]
      },
      {
        id: 13,
        title: "Performance Optimization",
        content: "Learn techniques to optimize React application performance using memoization, virtualization, and code splitting.",
        quiz: [
          {
            question: "Which hook is used to memoize expensive calculations?",
            options: ["useMemo", "useCallback", "useEffect", "useRef"],
            answer: "useMemo"
          }
        ]
      },
      {
        id: 14,
        title: "Testing React Applications",
        content: "Explore different testing strategies for React components using Jest and React Testing Library.",
        quiz: [
          {
            question: "What is the primary focus of React Testing Library?",
            options: ["Unit testing components", "Testing implementation details", "Testing as a user would interact with components", "Performance testing"],
            answer: "Testing as a user would interact with components"
          }
        ]
      },
      {
        id: 15,
        title: "Deployment and CI/CD",
        content: "Learn how to deploy React applications to production and set up continuous integration and deployment pipelines.",
        quiz: [
          {
            question: "Which of these is NOT a common platform for deploying React applications?",
            options: ["Vercel", "Netlify", "GitHub Pages", "MongoDB Atlas"],
            answer: "MongoDB Atlas"
          }
        ]
      }
    ]
  };
  