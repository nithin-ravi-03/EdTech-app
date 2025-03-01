// src/data/courseContent/advancedJQuery.js
export const advancedJQuery = {
    title: "Advanced jQuery",
    lessons: [
      {
        id: 1,
        title: "jQuery Fundamentals Review",
        content: "A quick review of jQuery fundamentals including selectors, DOM manipulation, and event handling.",
        quiz: [
          {
            question: "What is the correct way to select an element with ID 'myElement' in jQuery?",
            options: ["$('myElement')", "$(#myElement)", "$('#myElement')", "$('.myElement')"],
            answer: "$('#myElement')"
          }
        ]
      },
      {
        id: 2,
        title: "jQuery Event Delegation",
        content: "Learn how to use event delegation to handle events on dynamically created elements.",
        quiz: [
          {
            question: "Which method is best for event delegation in jQuery?",
            options: [".click()", ".on()", ".bind()", ".live()"],
            answer: ".on()"
          }
        ]
      },
      {
        id: 3,
        title: "Custom Events",
        content: "Create and trigger custom events to improve code organization and component communication.",
        quiz: [
          {
            question: "How do you trigger a custom event in jQuery?",
            options: ["$.event()", "$.trigger()", "$(element).trigger()", "$(element).event()"],
            answer: "$(element).trigger()"
          }
        ]
      },
      {
        id: 4,
        title: "jQuery Plugin Development",
        content: "Learn how to create reusable jQuery plugins using the jQuery.fn object.",
        quiz: [
          {
            question: "How do you start creating a jQuery plugin?",
            options: ["jQuery.plugin = function(){}", "$.fn.myPlugin = function(){}", "new jQuery.plugin()", "jQuery.extend()"],
            answer: "$.fn.myPlugin = function(){}"
          }
        ]
      },
      {
        id: 5,
        title: "jQuery Animation Techniques",
        content: "Master advanced animation techniques using jQuery's animation methods and the animate() function.",
        quiz: [
          {
            question: "Which jQuery method allows you to create custom animations?",
            options: [".css()", ".effect()", ".animate()", ".transition()"],
            answer: ".animate()"
          }
        ]
      },
      {
        id: 6,
        title: "jQuery and AJAX",
        content: "Explore advanced AJAX techniques with jQuery including promises, error handling, and caching.",
        quiz: [
          {
            question: "Which jQuery method is used for most AJAX requests?",
            options: ["$.ajax()", "$.get()", "$.post()", "$.fetch()"],
            answer: "$.ajax()"
          }
        ]
      },
      {
        id: 7,
        title: "jQuery Deferred Objects",
        content: "Learn how to use jQuery's Deferred objects for asynchronous programming and managing callbacks.",
        quiz: [
          {
            question: "Which method creates a new Deferred object in jQuery?",
            options: ["$.promise()", "$.deferred()", "$.Deferred()", "$.async()"],
            answer: "$.Deferred()"
          }
        ]
      },
      {
        id: 8,
        title: "jQuery Performance Optimization",
        content: "Implement techniques to improve jQuery performance including caching selectors and minimizing DOM manipulations.",
        quiz: [
          {
            question: "What is the performance benefit of caching jQuery selectors?",
            options: ["Reduces memory usage", "Reduces DOM queries", "Increases animation speed", "Improves CSS rendering"],
            answer: "Reduces DOM queries"
          }
        ]
      },
      {
        id: 9,
        title: "jQuery and Forms",
        content: "Master advanced form handling with jQuery including validation, serialization, and AJAX submissions.",
        quiz: [
          {
            question: "Which jQuery method serializes form data to a string?",
            options: [".formData()", ".serialize()", ".stringify()", ".toJSON()"],
            answer: ".serialize()"
          }
        ]
      },
      {
        id: 10,
        title: "jQuery UI Widgets",
        content: "Learn how to use and customize jQuery UI widgets like datepickers, dialogs, and sliders.",
        quiz: [
          {
            question: "How do you initialize a jQuery UI datepicker?",
            options: ["$('#date').datePicker()", "$('#date').datepicker()", "$('#date').calendar()", "$('#date').date()"],
            answer: "$('#date').datepicker()"
          }
        ]
      },
      {
        id: 11,
        title: "jQuery UI Interactions",
        content: "Implement advanced user interactions with jQuery UI including draggable, droppable, and sortable behaviors.",
        quiz: [
          {
            question: "Which jQuery UI interaction allows users to rearrange elements?",
            options: ["Draggable", "Droppable", "Sortable", "Resizable"],
            answer: "Sortable"
          }
        ]
      },
      {
        id: 12,
        title: "jQuery Mobile",
        content: "Explore jQuery Mobile for building responsive web applications optimized for mobile devices.",
        quiz: [
          {
            question: "What is the purpose of jQuery Mobile?",
            options: ["Creating native mobile apps", "Building mobile-friendly websites", "Compiling JavaScript to mobile code", "Converting websites to apps"],
            answer: "Building mobile-friendly websites"
          }
        ]
      },
      {
        id: 13,
        title: "jQuery and Modern JavaScript",
        content: "Learn how to integrate jQuery with modern JavaScript frameworks and libraries like React and Vue.",
        quiz: [
          {
            question: "What's the best way to use jQuery with React?",
            options: ["Use jQuery for everything", "Avoid jQuery completely", "Use jQuery only for DOM manipulation outside React components", "Rewrite jQuery as React components"],
            answer: "Use jQuery only for DOM manipulation outside React components"
          }
        ]
      },
      {
        id: 14,
        title: "Testing jQuery Code",
        content: "Implement testing strategies for jQuery code using tools like QUnit and Jest.",
        quiz: [
          {
            question: "Which testing framework was created specifically for jQuery?",
            options: ["Jest", "Mocha", "QUnit", "Jasmine"],
            answer: "QUnit"
          }
        ]
      },
      {
        id: 15,
        title: "jQuery Best Practices",
        content: "Master best practices for writing maintainable, efficient jQuery code in modern web applications.",
        quiz: [
          {
            question: "Which is a best practice when using jQuery?",
            options: ["Always use the latest version", "Use inline event handlers", "Cache frequently used selectors", "Manipulate the DOM frequently"],
            answer: "Cache frequently used selectors"
          }
        ]
      }
    ]
  };