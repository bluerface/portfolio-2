export const data = [

// ------------------------- Northcoders Projects -----------------------------

  {
    title: 'Northcoders',
    description: 'Projects completed while working on the Northcoders course',
    projects: [
      {
        imageSmall: '#',
        imageBanner: '#',
        title: 'Northcoders Nutshell',
        slug: 'nc-nutshell',
        description: 'A student portal app developed as our final Team project at Northcoders.',
        longDescription: `
A student portal SPA, developed as our final Team project at Northcoders.

## The concept

Our app is a student portal designed for use by future northcoder students and tutors.

It is designed as a ‘single source of truth’ for the course, to allow students to access all their needed resources in one place.  Importantly, to reduce cognitive overheads, resources will be curated and well organised to promote easy access.

The key features will be a timetable view that gathers all resources for a particular sprint or lecture in one place, and a resource collection view (bookmarks) that groups resources by topic, and can be filtered by importance (eg core vs further reading)

Other features may involve slack integration, task tracking and communication tools.

## Technologies Used

* React
* Redux
* React Router
* Amazon s3 client-side upload
* Material-ui
* React-big-calendar
* Markdown parsing
* mocha / chai

## Details
Repo;
https://github.com/bluerface/public-nc-nutshell-front

Demo;
https://northcoders-nutshell.herokuapp.com/

    `
      },
      {
        imageSmall: '#',
        imageBanner: '#',
        title: 'Northcoder News',
        slug: 'nc-news',
        description: 'A Reddit style news site demonstrating a REST API, React-redux and authentication',
        longDescription: `
A Reddit style news site demonstrating a REST API, React-redux and authentication

Repos;
API: https://github.com/bluerface/public-nc-news-front
Front: https://github.com/bluerface/public-nc-news-api

Demos;
API: https://zl-northcoders-news-api.herokuapp.com/api
Front: https://zl-northcoders-news.herokuapp.com

## Technologies Used

#### Frontend
* React
* Redux
* React Router
* Redux Form
* Bulma css framework

#### Backend
* Express
* Mongodb/mongoose
* REST / CRUD API
* Passport (jwt & local)
* Mocha / chai`
      },
      {
        imageSmall: '#',
        imageBanner: '#',
        title: 'Trello Clone',
        slug: 'trello-clone',
        description: 'A Trello clone demonstrating Css and vanilla React',
        longDescription: `
A Trello clone demonstrating Css and vanilla React

Repo;
https://github.com/bluerface/public-nc-trello-clone

Demo;
https://trello-clone-zlawrence.herokuapp.com/

## Technologies Used

* React
* Bulma css framework
* Font-Awesome
* Css3`
      },
      {
        imageSmall: '#',
        imageBanner: '#',
        title: 'Pieminister Clone',
        slug: 'nc-pieminister',
        description: 'A Css clone of the pieminister website',
        longDescription: `

Northcoders optional css exercise, mocking up the pieminister website.

The Original site;
http://www.pieminister.co.uk/

Repo;
https://github.com/bluerface/pieminister-css-exercise

Demo;
https://bluerface.github.io/pieminister-css-exercise/

## Technologies Used
* Html
* Css
`
      }
    ]
  },

// ------------------------- Personal Projects -----------------------------

  {
    title: 'Personal',
    description: 'Projects I worked on before/after attending Northcoders',
    projects: [
      {
        imageSmall: '#',
        imageBanner: '#',
        title: 'Portfolio',
        slug: 'portfolio',
        description: 'This site you are on now',
        longDescription: `
This site you are on now!

Repo;
https://github.com/bluerface/portfolio-2

Demo;
You are already here

## Technologies Used
* React
* React-router
* Css transitions
* Responsive design
* Markdown parsing
        `
      },
      {
        imageSmall: '#',
        imageBanner: '#',
        title: 'Snaks',
        slug: 'snaks1',
        description: 'A fun little game I made in JavaScript, where you must survive in a dessert full of Snaks.',
        longDescription: `
A fun little game I made in JavaScript, where you must survive in a dessert full of Snaks. Watch out for the traps!

## Technologies Used:

* Html5
* Css3
* JavaScript
* Git
* Tiled (map creation software)

Repo;
https://github.com/bluerface/Silly-Javascript-Game

Demo;
http://bluerface.github.io/Silly-Javascript-Game/game.html
        `
      },
      {
        imageSmall: '#',
        imageBanner: '#',
        title: 'Pigs in the woods',
        slug: 'pigs-in-the-woods',
        description: 'A site I am working on for the \'Pigs in the woods\' pig rescue center in Huddersfield',
        longDescription: `
A website I am developing in coordination with the 'Pigs in the Woods' pig rescue center near Huddersfield.

Repo;
https://github.com/bluerface/PigsInTheWoods

Demo;
https://bluerface.github.io/PigsInTheWoods/

## Technologies Used
* Css
* Html
* jQuery
* slabtext plugin
        `
      },
      {
        imageSmall: '#',
        imageBanner: '#',
        title: 'jQuery Quiz',
        slug: 'jquery-quiz',
        description: 'Simple quiz using jQuery, completed as an excercise for the Northcoders Precourse',
        longDescription: `
Simple quiz using jQuery, completed as an excercise for the Northcoders Precourse

Repo;
https://github.com/bluerface/precourse-week-5

Demo;
https://bluerface.github.io/precourse-week-5/
`
      },
      {
        imageSmall: '#',
        imageBanner: '#',
        title: 'Responsive Layout',
        slug: 'responsive-layout',
        description: 'A page demonstrating a responsive css layout and lightbox',
        longDescription: `
A page demonstrating a responsive css layout and lightbox

Repo;
https://github.com/bluerface/precourse-week-3

Demo;
https://bluerface.github.io/precourse-week-3/index.html

## Technologies Used;
* Html
* Css
* jQuery
        `
      }
    ]
  },

// ------------------------- Yet undetermined section -------------------------

//   {
//     title: 'Other Things',
//     description: 'Projects I projected while I projected',
//     projects: [
//       {
//         imageSmall: '#',
//         imageBanner: '#',
//         title: 'Placeholder',
//         slug: 'placeholder',
//         description: 'Placeholder',
//         longDescription: `
// Placeholder
//         `
//       }
//     ]
//   }
];

import flatten from './flatten';
export const bySlug = flatten(data);
