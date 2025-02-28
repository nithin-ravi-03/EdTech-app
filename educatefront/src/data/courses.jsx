const courses = [
    {
      id: 1,
      title: "JavaScript in Depth",
      description: "Master advanced JavaScript concepts and techniques.",
      category: "Programming",
      level: "Advanced",
      duration: "10 weeks",
      rating: 4.8,
      students: 1245,
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1472&q=80",
      chapters: [
        {
          id: 1,
          title: "Introduction to Advanced JavaScript",
          duration: "1 hour",
          completed: false,
          quiz: {
            questions: [
              {
                id: 1,
                question: "What is a closure in JavaScript?",
                options: ["A function", "A scope", "A variable", "A loop"],
                correctAnswer: "A scope",
              },
              {
                id: 2,
                question: "What is the purpose of 'use strict'?",
                options: ["To enforce stricter type checking", "To enable modern JavaScript features", "To prevent the use of undeclared variables", "To optimize performance"],
                correctAnswer: "To prevent the use of undeclared variables",
              },
            ],
            passed: false,
          },
        },
        {
          id: 2,
          title: "Asynchronous JavaScript",
          duration: "1.5 hours",
          completed: false,
          quiz: {
            questions: [
              {
                id: 1,
                question: "What is a Promise?",
                options: ["A function", "An object representing eventual completion", "A loop", "A variable"],
                correctAnswer: "An object representing eventual completion",
              },
            ],
            passed: false,
          },
        },
      ],
      finalExam: {
        questions: [
          {
            id: 1,
            question: "What is the event loop in JavaScript?",
            options: ["A loop that handles events", "A mechanism to handle asynchronous operations", "A type of function", "A variable"],
            correctAnswer: "A mechanism to handle asynchronous operations",
          },
        ],
        passed: false,
      },
    },
    {
      id: 2,
      title: "Front-End Libraries and Frameworks",
      description: "Explore popular front-end libraries and frameworks for modern web development.",
      category: "Web Development",
      level: "Intermediate",
      duration: "8 weeks",
      rating: 4.6,
      students: 2134,
      image: "https://images.unsplash.com/photo-1593720213428-28a5b9e94613?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      chapters: [
        {
          id: 1,
          title: "Introduction to Front-End Frameworks",
          duration: "1 hour",
          completed: false,
          quiz: {
            questions: [
              {
                id: 1,
                question: "What is a front-end framework?",
                options: ["A server-side technology", "A client-side library for building UIs", "A database system", "A design tool"],
                correctAnswer: "A client-side library for building UIs",
              },
              {
                id: 2,
                question: "Which of these is NOT a front-end framework?",
                options: ["React", "Angular", "Express", "Vue"],
                correctAnswer: "Express",
              },
            ],
            passed: false,
          },
        },
        {
          id: 2,
          title: "React Fundamentals",
          duration: "2 hours",
          completed: false,
          quiz: {
            questions: [
              {
                id: 1,
                question: "What is JSX?",
                options: ["A JavaScript extension", "A programming language", "A CSS framework", "A database"],
                correctAnswer: "A JavaScript extension",
              },
            ],
            passed: false,
          },
        },
      ],
      finalExam: {
        questions: [
          {
            id: 1,
            question: "What is the Virtual DOM?",
            options: ["A real DOM element", "An in-memory representation of the DOM", "A browser feature", "A CSS property"],
            correctAnswer: "An in-memory representation of the DOM",
          },
        ],
        passed: false,
      },
    },
    {
      id: 3,
      title: "Building and Deploying a Web App",
      description: "Learn the complete process of building and deploying scalable web applications.",
      category: "DevOps",
      level: "Intermediate",
      duration: "12 weeks",
      rating: 4.7,
      students: 1832,
      image: "https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      chapters: [
        {
          id: 1,
          title: "Setting Up Your Development Environment",
          duration: "1 hour",
          completed: false,
          quiz: {
            questions: [
              {
                id: 1,
                question: "What is version control?",
                options: ["A way to track code changes", "A deployment strategy", "A programming language", "A database system"],
                correctAnswer: "A way to track code changes",
              },
              {
                id: 2,
                question: "Which of these is NOT a cloud provider?",
                options: ["AWS", "Azure", "GitHub", "Google Cloud"],
                correctAnswer: "GitHub",
              },
            ],
            passed: false,
          },
        },
        {
          id: 2,
          title: "Continuous Integration and Deployment",
          duration: "1.5 hours",
          completed: false,
          quiz: {
            questions: [
              {
                id: 1,
                question: "What is CI/CD?",
                options: ["A programming paradigm", "An automation process for code integration and deployment", "A front-end framework", "A database system"],
                correctAnswer: "An automation process for code integration and deployment",
              },
            ],
            passed: false,
          },
        },
      ],
      finalExam: {
        questions: [
          {
            id: 1,
            question: "What is containerization?",
            options: ["Storing code in containers", "Packaging applications with dependencies", "A deployment strategy", "A version control system"],
            correctAnswer: "Packaging applications with dependencies",
          },
        ],
        passed: false,
      },
    },
    {
      id: 4,
      title: "Advanced jQuery Techniques",
      description: "Master advanced jQuery methods for efficient DOM manipulation and event handling.",
      category: "Web Development",
      level: "Advanced",
      duration: "6 weeks",
      rating: 4.5,
      students: 987,
      image: "https://images.unsplash.com/photo-1579403124614-197f69d8187b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      chapters: [
        {
          id: 1,
          title: "jQuery Advanced Selectors",
          duration: "1 hour",
          completed: false,
          quiz: {
            questions: [
              {
                id: 1,
                question: "What does the '$' symbol represent in jQuery?",
                options: ["A function", "A variable", "An object", "A string"],
                correctAnswer: "A function",
              },
              {
                id: 2,
                question: "Which selector finds all elements with a specific class?",
                options: ["$('#id')", "$('.class')", "$('element')", "$('*')"],
                correctAnswer: "$('.class')",
              },
            ],
            passed: false,
          },
        },
        {
          id: 2,
          title: "Event Delegation and Custom Events",
          duration: "1.5 hours",
          completed: false,
          quiz: {
            questions: [
              {
                id: 1,
                question: "What is event delegation?",
                options: ["Creating custom events", "Attaching events to future elements", "Removing events", "Stopping event propagation"],
                correctAnswer: "Attaching events to future elements",
              },
            ],
            passed: false,
          },
        },
      ],
      finalExam: {
        questions: [
          {
            id: 1,
            question: "What is the difference between .hide() and .remove()?",
            options: [".hide() changes CSS, .remove() removes from DOM", ".hide() is faster, .remove() is slower", ".hide() is permanent, .remove() is temporary", "There is no difference"],
            correctAnswer: ".hide() changes CSS, .remove() removes from DOM",
          },
        ],
        passed: false,
      },
    },
    {
      id: 5,
      title: "Real-World ReactJS Projects",
      description: "Build practical, production-ready applications with React and related technologies.",
      category: "Programming",
      level: "Advanced",
      duration: "14 weeks",
      rating: 4.9,
      students: 2354,
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      chapters: [
        {
          id: 1,
          title: "Setting Up a Production React Environment",
          duration: "1.5 hours",
          completed: false,
          quiz: {
            questions: [
              {
                id: 1,
                question: "What tool is commonly used to create React applications?",
                options: ["React-CLI", "Create React App", "React Builder", "React Starter"],
                correctAnswer: "Create React App",
              },
              {
                id: 2,
                question: "What is Redux used for?",
                options: ["Routing", "State management", "API calls", "Form validation"],
                correctAnswer: "State management",
              },
            ],
            passed: false,
          },
        },
        {
          id: 2,
          title: "Building a Full-Stack React Application",
          duration: "2 hours",
          completed: false,
          quiz: {
            questions: [
              {
                id: 1,
                question: "What is React Router?",
                options: ["A state management library", "A routing library for React", "A UI component library", "A server-side framework"],
                correctAnswer: "A routing library for React",
              },
            ],
            passed: false,
          },
        },
      ],
      finalExam: {
        questions: [
          {
            id: 1,
            question: "What is the purpose of React hooks?",
            options: ["To add state to functional components", "To optimize performance", "To create class components", "To handle server requests"],
            correctAnswer: "To add state to functional components",
          },
        ],
        passed: false,
      },
    },
    {
      id: 6,
      title: "Advanced Flutter Development",
      description: "Master advanced Flutter concepts for building complex, cross-platform mobile applications.",
      category: "Mobile Development",
      level: "Advanced",
      duration: "12 weeks",
      rating: 4.7,
      students: 1654,
      image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      chapters: [
        {
          id: 1,
          title: "Advanced State Management in Flutter",
          duration: "1.5 hours",
          completed: false,
          quiz: {
            questions: [
              {
                id: 1,
                question: "What is Provider in Flutter?",
                options: ["A widget", "A state management solution", "A database", "An animation"],
                correctAnswer: "A state management solution",
              },
              {
                id: 2,
                question: "What is BLoC pattern?",
                options: ["A UI pattern", "A state management pattern", "A navigation pattern", "A database pattern"],
                correctAnswer: "A state management pattern",
              },
            ],
            passed: false,
          },
        },
        {
          id: 2,
          title: "Creating Custom Animations",
          duration: "2 hours",
          completed: false,
          quiz: {
            questions: [
              {
                id: 1,
                question: "What is AnimationController?",
                options: ["A widget", "A class that manages animations", "A database", "A state management solution"],
                correctAnswer: "A class that manages animations",
              },
            ],
            passed: false,
          },
        },
      ],
      finalExam: {
        questions: [
          {
            id: 1,
            question: "What is the difference between StatelessWidget and StatefulWidget?",
            options: ["StatelessWidget is faster", "StatefulWidget can change over time", "StatelessWidget has more features", "There is no difference"],
            correctAnswer: "StatefulWidget can change over time",
          },
        ],
        passed: false,
      },
    }
  ];

  export default courses;