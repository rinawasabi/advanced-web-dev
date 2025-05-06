# Phase 4 – Project Presentation


## Makunote – A Simple Recipe Sharing Notebook App


## Project overview

**The Project’s Purpose**

Makunote is a simple and intuitive recipe-sharing web application designed to help people store, organize and discover everyday recipes. The app provides a lightweight solution for home cooks, students and anyone who wants to quickly jot down their favorite meals and explore others’ cooking ideas.

**Target Users**
- Home cooks who want to store and organize family recipes
- University students looking for easy everyday meals
- Hobbyist or beginner cooks who want inspiration from others
- Anyone who wants a personal digital cookbook

**Context**


## Use case summary

The original use cases defined in Phase 1 are <a href="https://github.com/rinawasabi/advanced-web-dev/blob/main/Final_Project/Project_phase_1.md#2-use-cases-and-user-flows" target="_blank">here</a>. Additionally, the 6th function was added to enhance the function of the application.




| Number | Use Case               | Implemented (Yes/No) | Demonstration / Notes                          |
|--------|------------------------|-----------------------|------------------------------------------------|
| 1      | Log in as a User       | Yes                   | Implemented using secure session handling. Demo at 2:45 in the video. |
| 2      | View recipes           | Yes                   | Recipes can be viewed globally or filtered by user. Demo at 2:45 in the video.    |
| 3      | Add a New Recipe       | Yes                   | Form with validation sends data to backend. Demo at 2:45 in the video. | 
| 4      | Edit Own Recipe        | Yes                   | Recipes can be updated with pre-filled form. Demo at 2:45 in the video. |
| 5      | Filter Own Recipes     | Yes                   | The page shows only the user's entries. Demo at 2:45 in the video. |
| 6      | Search a recipe        | Yes                   | Search bar filters recipes by title/ingredients. Demo at 2:45 in the video. |



## Technical implementation

**Technologies used**

Makunote is a full-stack web application built with:
- Frontend: React (with React Router), CSS
- Backend: Node.js + Express, REST API
- Database: PostgreSQL hosted on Azure
- Testing: Vitest, Playwright, k6
- Deployment: Azure App Services (frontend & backend)

**Architectural Decisions**


**Implementation of key features**



## Development process
The project was originally planned to be in four phases; however, Phase 2 and 3 were put together. 

- **Phase 1 – Planning**: Defined user personas and five key use cases (login, view, add, edit, filter/search recipes). Created wireframes using Figma and outlined the tech stack.
- **Phase 2 & 3 – Implementation**: Set up the React frontend and Node.js backend. Connected to an Azure PostgreSQL database and implemented full CRUD functionality for recipes. Added unit and end-to-end testing. Load tested the API. 
- **Phase 4 – Presentation**:  Prepared the GitHub documentation and presentation materials.

Throughout the development, I kept the app simple and focused on usability. One key decision was using localStorage instead of full authentication to reduce complexity while still supporting user-specific filtering.


## Reflection and future work

**What worked well**
- All planned use cases were successfully implemented.
- The lightweight login system using localStorage worked smoothly and simplified development.
- The React component structure remained clean and easy to maintain throughout the project.
- Getting to know PostgreSQL on Azure was insightful experience.
- No specific problem found in testing.
- The app's UI and UX looks and works as I planned.
- Version control with GitHub made tracking changes and organizing phases efficient.



**Challenges**

Building an application from scratch independently was a first-time experience, thus the overall journey was not an easy one.  
Some of the main challenges were
- Deploying both frontend and backend on Azure for the first time
- Rebuilding a new PostgreSQL database on Azure as the original one broke unexpectedly during development
- Fixing layout and styling bugs in the footer and recipe form components
- Debugging CORS and API connection issues between frontend and backend

Despite these challenges, each challenge helped me to learn more about full-stack development and I could cultivate my problem-solving skills.


**Improvement in the future**

- Implementing more robust and real login and signin function
- Adjusting the UI for responsive design across devices
- Implementing Like and Share functions


## Work Hours Log

copy from the logbook



## Presentation link

The link of the presentation about this application is [here]().
