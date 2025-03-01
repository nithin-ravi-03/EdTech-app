// src/data/courseContent/buildingWebApp.js
export const buildingWebApp = {
    title: "Building Web Applications",
    lessons: [
      {
        id: 1,
        title: "Introduction to Web Applications",
        content: "Web applications are interactive programs that run on web browsers and provide functionality beyond static websites.",
        quiz: [
          {
            question: "What distinguishes a web application from a static website?",
            options: ["Visual design", "Interactivity", "Number of pages", "Loading speed"],
            answer: "Interactivity"
          }
        ]
      },
      {
        id: 2,
        title: "Planning Your Web Application",
        content: "Learn how to plan your web application by defining requirements, user stories, and creating wireframes.",
        quiz: [
          {
            question: "What should you create first when planning a web application?",
            options: ["Code structure", "Visual design", "Requirements document", "Database schema"],
            answer: "Requirements document"
          }
        ]
      },
      {
        id: 3,
        title: "Frontend Architecture",
        content: "Explore different frontend architectures including MVC, component-based, and micro-frontends.",
        quiz: [
          {
            question: "Which architecture pattern separates data, user interface, and control logic?",
            options: ["MVC", "REST", "CRUD", "ORM"],
            answer: "MVC"
          }
        ]
      },
      {
        id: 4,
        title: "Backend Architecture",
        content: "Learn about backend architectures including monolithic, microservices, and serverless approaches.",
        quiz: [
          {
            question: "Which architecture breaks an application into small, independent services?",
            options: ["Monolithic", "Microservices", "Layered", "Event-driven"],
            answer: "Microservices"
          }
        ]
      },
      {
        id: 5,
        title: "Database Design",
        content: "Understand how to design efficient database schemas for web applications using relational or NoSQL databases.",
        quiz: [
          {
            question: "What is normalization in database design?",
            options: ["Increasing data redundancy", "Organizing data to reduce redundancy", "Converting to NoSQL format", "Optimizing query speed"],
            answer: "Organizing data to reduce redundancy"
          }
        ]
      },
      {
        id: 6,
        title: "Authentication and Authorization",
        content: "Implement secure user authentication and role-based authorization in your web applications.",
        quiz: [
          {
            question: "What is the difference between authentication and authorization?",
            options: ["They are the same thing", "Authentication verifies identity, authorization determines permissions", "Authentication is for admins, authorization is for users", "Authentication is on the client, authorization is on the server"],
            answer: "Authentication verifies identity, authorization determines permissions"
          }
        ]
      },
      {
        id: 7,
        title: "RESTful API Design",
        content: "Learn how to design and implement RESTful APIs for communication between frontend and backend.",
        quiz: [
          {
            question: "Which HTTP method should be used to update a resource in a RESTful API?",
            options: ["GET", "POST", "PUT", "DELETE"],
            answer: "PUT"
          }
        ]
      },
      {
        id: 8,
        title: "State Management",
        content: "Explore different state management approaches for complex web applications.",
        quiz: [
          {
            question: "What is Redux primarily used for?",
            options: ["DOM manipulation", "State management", "Routing", "API requests"],
            answer: "State management"
          }
        ]
      },
      {
        id: 9,
        title: "Responsive Design",
        content: "Implement responsive design techniques to ensure your web application works well on all devices.",
        quiz: [
          {
            question: "What CSS feature is essential for responsive design?",
            options: ["Floats", "Media queries", "Absolute positioning", "z-index"],
            answer: "Media queries"
          }
        ]
      },
      {
        id: 10,
        title: "Accessibility",
        content: "Learn how to make your web applications accessible to all users, including those with disabilities.",
        quiz: [
          {
            question: "What does WCAG stand for?",
            options: ["Web Content Accessibility Guidelines", "World Computer Access Group", "Web Coding and Access Guidance", "Website Compliance and Accessibility Goals"],
            answer: "Web Content Accessibility Guidelines"
          }
        ]
      },
      {
        id: 11,
        title: "Testing Web Applications",
        content: "Understand different testing strategies including unit testing, integration testing, and end-to-end testing.",
        quiz: [
          {
            question: "Which testing type verifies that individual parts of code work as expected?",
            options: ["Unit testing", "Integration testing", "End-to-end testing", "Stress testing"],
            answer: "Unit testing"
          }
        ]
      },
      {
        id: 12,
        title: "Performance Optimization",
        content: "Implement techniques to optimize the performance of your web application for better user experience.",
        quiz: [
          {
            question: "Which technique reduces the number of HTTP requests?",
            options: ["Code splitting", "Lazy loading", "Bundling resources", "Server-side rendering"],
            answer: "Bundling resources"
          }
        ]
      },
      {
        id: 13,
        title: "Deployment Strategies",
        content: "Learn different deployment strategies including continuous integration, continuous deployment, and blue-green deployments.",
        quiz: [
          {
            question: "What is the benefit of blue-green deployment?",
            options: ["Faster build times", "Zero downtime deployment", "Better version control", "Lower server costs"],
            answer: "Zero downtime deployment"
          }
        ]
      },
      {
        id: 14,
        title: "Monitoring and Analytics",
        content: "Implement monitoring and analytics tools to track performance, errors, and user behavior in your web application.",
        quiz: [
          {
            question: "What type of data does Google Analytics primarily collect?",
            options: ["Server performance", "User behavior", "Code quality", "Database queries"],
            answer: "User behavior"
          }
        ]
      },
      {
        id: 15,
        title: "Security Best Practices",
        content: "Learn essential security best practices to protect your web application from common vulnerabilities.",
        quiz: [
          {
            question: "What is CSRF in web security?",
            options: ["Cross-Site Request Forgery", "Client-Side Request Filtering", "Cross-Site Resource Fetching", "Content Security Risk Factor"],
            answer: "Cross-Site Request Forgery"
          }
        ]
      }
    ]
  };