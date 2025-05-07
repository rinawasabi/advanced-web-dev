# Phase 4 – Project Presentation


## Makunote – A Simple Recipe Sharing App


## Project overview

**The Project’s Purpose**

Makunote is a simple and intuitive recipe-sharing web application designed to help people store, organize and discover everyday recipes. The app provides a lightweight solution for anyone who wants to quickly jot down their favorite meals and explore others’ ideas.

**Target Users**
- Home cooks who want to organize family recipes  
- University students looking for easy meals  
- Hobbyist or beginner cooks seeking inspiration  
- Anyone wanting a personal digital cookbook

**Context**

Many people seek quick and simple ways to manage everyday cooking, but existing apps are often too complex for casual users. Makunote was created as a minimalist and user-friendly platform to store, browse and share personal recipes without unnecessary features.

## Use case summary
The original use cases defined in Phase 1 are <a href="https://github.com/rinawasabi/advanced-web-dev/blob/main/Final_Project/Project_phase_1.md#2-use-cases-and-user-flows" target="_blank">here</a>. Additionally, a 6th function was added to enhance the function of the application.


| Number | Use Case               | Implemented (Yes/No) | Demonstration / Notes                          |
|--------|------------------------|-----------------------|------------------------------------------------|
| 1      | Log in as a User       | Yes                   | Login via localStorage. Demo at 2:45 in the video. |
| 2      | View Recipes           | Yes                   | Recipes shown globally or filtered by user. Demo at 2:45 in the video.    |
| 3      | Add a New Recipe       | Yes                   | Form with validation sends data to backend. Demo at 2:45 in the video. | 
| 4      | Edit Own Recipe        | Yes                   | Update with pre-filled form. Demo at 2:45 in the video. |
| 5      | Filter Own Recipes     | Yes                   | The page shows only the user's entries. Demo at 2:45 in the video. |
| 6      | Search a Recipe        | Yes                   | Filters recipes by title/ingredients. Demo at 2:45 in the video. |



## Technical implementation

**Technologies used**

Makunote is a full-stack web application built with:
- Frontend: React (with React Router), CSS
- Backend: Node.js + Express, REST API
- Database: PostgreSQL hosted on Azure
- Testing: Vitest, Playwright, k6
- Deployment: Azure App Services (frontend & backend)
- The project was assisted by ChatGPT-4o.

**Architectural Decisions**
- **Frontend & backend separation** for modularity and easier deployment.
- **RESTful API** for clear client-server communication.
- **Login via localStorage** to keep authentication lightweight and simple.
- **Azure-hosted PostgreSQL** for reliable, scalable cloud-based data storage.
- **Reusable React components** (e.g., Navbar, RecipeCard) for clean code.
- **Single Page Application** using React Router for smooth navigation.


 **Implementation of Key Features**

- **Local Login**  
  Used `localStorage` to store the username and filter user-specific recipes.
- **Recipe CRUD**  
  Handled with RESTful API routes (`POST`, `GET`, `PUT`, `DELETE`) using Express and PostgreSQL.
- **Recipe Detail View**  
  Linked via React Router. Shows full content with edit/delete options for the owner.
- **View Toggle**  
  React state toggles between "All Recipes" and "My Recipes" based on username match.
- **Search Bar**  
  Uses `recipes.filter()` in React to filter by title or ingredients in real time.


## Development process
### 1. Initial Planning
- Defined the concept.
- Created user personas and use cases.
- Designed UI prototypes using Figma.
- Key Decision: Use cases were designed based on my current skill level. Challenging enough but not too difficult to implement.
- Change: Initially, a real login system was planned, however a simpler localStorage-based method was chosen as full authentication would have been too time-consuming and complex for a beginner.

### 2. Technical Setup
- Initialized the frontend using React.
- Set up the backend with Node.js + Express.
- Configured a PostgreSQL database hosted on Azure.
- Established the basic folder structure and API routes.
- Key Decision: PostgreSQL was chosen because of good compatibility with Azure.
- Change: Originally planned to use SQLite, but switched to PostgreSQL for better Azure integration.

  
### 3. Feature Implementation
- Implemented CRUD operations for recipes.
- Built login functionality.
- Added "My Recipes" view to filter recipes created by the logged-in user.
- Developed a search bar to filter recipes by title or ingredients (available only in "All Recipes" view).
- Applied form validation and basic error handling.
- Key Decision: Prioritized core features to keep the project simple and achievable.
- Change: Tag-based filtering was planned but not implemented due to time constraints.

### 4. Testing
- Wrote unit tests using Vitest.
- Created end-to-end tests with Playwright.
- Performed load testing with k6 to simulate user traffic.
- Key Decision: These testing tools were selected as I had learned about them in the course, and I wanted to try them in a real project.
- Change: Planned to add more unit tests, but focused on core functions instead.

### 5. Deployment & Final Adjustments
- Deployed both frontend and backend to Azure App Services.
- Updated all API endpoints in the frontend to connect with the deployed backend.
- Polished the UI and removed debug/test code.
- Key Decision: Polishing the UI was done according to the user feedback.
- Change: Modified `server.js` to support Azure deployment.


## Reflection and future work

**What worked well**
- All planned use cases were successfully implemented.
- The lightweight login system using localStorage worked smoothly and simplified development.
- The React component structure remained clean and easy to maintain throughout the project.
- Getting to know PostgreSQL on Azure was insightful experience.
- No specific problem found in testing.
- The app's UI and UX looks and works as I planned.

**Challenges**

Building an application from scratch independently was a first-time experience, thus the overall journey was not an easy one.  
Some of the main challenges were:
- Deploying both frontend and backend on Azure for the first time
- Rebuilding a new PostgreSQL database on Azure as the original one broke unexpectedly during development
- Fixing layout and styling bugs in the footer and recipe form components
- Debugging CORS and API connection issues between frontend and backend

Despite these challenges, each challenge helped me to learn more about full-stack development and I could cultivate my problem-solving skills.


**Improvement in the future**

A few things that I can improve in the future are:
- Implementing more robust and real login and sign-in function
- Adjusting the UI for responsive design across all devices
- Adding Like and Share functions
- Implementing comment section under the recipe - when others try out the recipe, they can leave the comment


## Work Hours Log
| Date  | Used hours | Subject(s) |  Outcome |
| :---  |     :---:      |     :---:      |     :---:      |
| 26.3.2025 | 1 | Planning the phase 1  | Brainstorming for the project  |
| 26.3.2025 | 2 | Planning the phase 1  | Defining the persona  |
| 27.3.2025 | 2 | Planning the phase 1  | Defining the use cases  |
| 27.3.2025 | 1.5 | Planning the phase 1  | Planning the project schedule  |
| 27.3.2025 | 1.5 | Planning the phase 1  | Defining the use cases |
| 30.3.2025 | 1 | Planning the phase 1  | Defining Information Architecture and Technical Design |
| 31.3.2025 | 2 | Planning the phase 1  | Making the Prototype |
| 31.3.2025 | 1 | Planning the phase 1  | Polishing the Plan |
| 1.4.2025 | 2 | Planning the phase 1  | Polishing the Plan | 
| 1.4.2025 | 2.5 | Implementing the phase 2  | Setting up the environment |
| 1.4.2025 | 1 | Implementing the phase 2  | Creating the Homepage |
| 2.4.2025 | 1 | Implementing the phase 2  | Creating the Add Recipe page (frontend) |
| 3.4.2025 | 1 | Implementing the phase 2  | Connecting the Azure PostgreSQL with Node.js (backend) |
| 3.4.2025 | 1.5 | Implementing the phase 2  | Setting the table for the database with pgAdmin |
| 6.4.2025 | 2 | Implementing the phase 2  | Modeling the Login page |
| 7.4.2025 | 2 | Implementing the phase 2  | Modeling the Recipe cards and add recipe form |  
| 7.4.2025 | 1 | Implementing the phase 2  | Adding the deleting function |
| 7.4.2025 | 1 | Implementing the phase 2  | Implemementing UI of recipe detail page |
| 8.4.2025 | 1 | Implementing the phase 2  | Trobleshooting the error of Azure db |  
| 8.4.2025 | 2.5 | Implementing the phase 2  | Implementing the search function and enhancing the home page |
| 10.4.2025 | 2 | Implementing the phase 2  | Implementing the edit function |
| 13.4.2025 | 2 | Implementing the phase 2  | Debugging My Recipe function |
| 13.4.2025 | 1 | Implementing the phase 2  | Organzing the code |
| 14.4.2025 | 2 | Implementing the phase 2  | Documentation on GitHub |
| 14.4.2025 | 1.5 | Implementing the phase 2  | Organzing the code continued |
| 15.4.2025 | 1 | Implementing the phase 2  | Implementing footer | 
| 15.4.2025 | 1 | Implementing the phase 2  | Documentation on GitHub |
| 15.4.2025 | 1 | Implementing the phase 2  | Debugging the login system |
| 16.4.2025 | 2 | Implementing the phase 2  | Documentation on GitHub | 
| 16.4.2025 | 1 | Implementing the phase 2  | Implementing confirmation message function | 
| 16.4.2025 | 1.5 | Implementing the phase 2  | Debugging the footer | 
| 18.4.2025 | 1 | Implementing the phase 2  | Enhancing the About page | 
| 18.4.2025 | 3.5 | Implementing the phase 2  | Testing & Documenting the test reports | 
| 18.4.2025 | 3 | Implementing the phase 2  | Uplaoding the app on Github and Azure | 
| 19.4.2025 | 2 | Implementing the phase 2  | Documentation on GitHub | 
| 30.4.2025 | 2 | Implementing the phase 4  | Documentation on GitHub | 
| 6.5.2025 | 2 | Implementing the phase 4  | Updating the documents on GitHub | 
| 7.5.2025 | 2 | Implementing the phase 4  | Updating the documents on GitHub | 
| 7.5.2025 | 2 | Implementing the phase 4  | Preparing the presentation script | 
| **Total**  | **63h** |   |  | 


## Presentation link
The link of the presentation about this application is [here]().
