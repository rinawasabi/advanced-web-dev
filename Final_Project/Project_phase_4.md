# Phase 4 – Project Presentation


## Makunote – A Simple Recipe Sharing Notebook App


## Project overview

**The Project’s Purpose**

Makunote is a simple and intuitive recipe-sharing web application designed to help people store, organize, and discover everyday recipes. The app provides a lightweight solution for home cooks, students, and anyone who wants to quickly jot down their favorite meals and explore others’ cooking ideas.
The app development focused on a platform that encourages sharing simple, practical meals—especially for busy individuals who cook regularly.

**Target Users**
- Home cooks who want to store and organize family recipes
- University students looking for easy everyday meals
- Hobbyist or beginner cooks who want inspiration from others
- Anyone who wants a personal digital cookbook

**Context**


## Use case summary

The original use cases defined in Phase 1 are [here](https://github.com/rinawasabi/advanced-web-dev/blob/main/Final_Project/Project_phase_1.md#2-use-cases-and-user-flows). Additionally, the 6th function was added to enhance the function of the application.


| Number | Use Case               | Implemented (Yes/No) | Demonstration / Notes                          |
|--------|------------------------|-----------------------|------------------------------------------------|
| 1      | Log in as a User       | Yes                   | Implemented using secure session handling. Demo at 2:45 in the video. |
| 2      | View recipes           | Yes                   | Recipes can be viewed globally or filtered by user. Demo at 2:45 in the video.    |
| 3      | Add a New Recipe       | Yes                   | Form with validation sends data to backend. Demo at 2:45 in the video. | 
| 4      | Edit Own Recipe        | Yes                   | Recipes can be updated with pre-filled form. Demo at 2:45 in the video. |
| 5      | Filter Own Recipes     | Yes                   | The page shows only the user's entries. Demo at 2:45 in the video. |
| 6      | Search a recipe        | Yes                   | Search bar filters recipes by title/ingredients. Demo at 2:45 in the video. |




## Technical implementation

_Describe technologies used, architectural decisions, and how key features were implemented._



## Development process
## Development Process

The project was developed in four phases:

- **Phase 1 – Planning**: Defined user personas and five key use cases (login, view, add, edit, filter/search recipes). Created wireframes using Figma and outlined the tech stack.
- **Phase 2 – Core Features**: Set up the React frontend and Node.js backend. Connected to an Azure PostgreSQL database and implemented full CRUD functionality for recipes.
- **Phase 3 – Testing and Enhancements**: Added unit and end-to-end testing. Load tested the API. Also added a search bar and "My Recipes" filtering.
- **Phase 4 – Presentation**: Finalized UI, cleaned up the codebase, removed debug code, and prepared the GitHub documentation and presentation materials.

Throughout the development, I kept the app simple and focused on usability. One key decision was using localStorage instead of full authentication to reduce complexity while still supporting user-specific filtering.





## Reflection and future work

**What worked well**


**Challenges**

Building an application from scratch independently was a first-time experience, thus the overall journey was not an easy one.  
Some of the main challenges were:
- Deploying both frontend and backend on Azure for the first time
- The databes on Azure broke once and had to build a new one
- Fixing layout and styling bugs in the footer and recipe form components
- Debugging CORS and API connection issues between frontend and backend
- Adjusting the UI for responsive design across devices
- Designing a working database schema that supports filtering, user-specific recipes, and editing features

Despite these challenges, each challenge helped me to learn more about full-stack development and I could cultivate my problem-solving skills.


**Improvement in the future**



## Work Hours Log

copy from the logbook



## Presentation link

The link of the presentation about this application is [here]().
