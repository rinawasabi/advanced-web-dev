# Project phase 1 - Definition and planning

## Backgound story of the project - Makunote
This application is a simple recipe sharing platform where everyone can easily share and discover everyday recipes.

Upon developing this application, there were several reasons why I decided to implement this project.

I wanted to improve my understanding of full-stack development, especially using Node.js, SQLite, and React.

I also enjoy cooking and thought it would be meaningful and fun to create an application that allows people to share their favorite recipes. I often wished I had this kind of simple recipe-sharing appication. 

Th*"Maku"* means "flavor" in Finnish, and *note* comes from the idea of collecting recipes and cooking ideas. Together, it represents a shared space to store and discover the flavors of everyday life.


## 1. User Personas

### Persona 1: University student living alone - "Aki"

**Age**: 24

**Occupation:** 3rd-year IT engineering student at Centria UAS

**Place of residence:** Kokkola, Finland (Originally from Japan)

**Personality:** Self-paced and likes to save money. He cooks his own meals every day and prefers simple, budget-friendly solutions.

**Behavior:**
- Frequently searches for food names + “recipe” on his smartphone.
- Enjoys browsing through other people's cooking ideas and saving the ones he wants to try later.
- Occasionally posts his own quick and affordable recipes to help others in similar situations.

**Needs:**
- Wants to find quick and simple recipes shared by others who also live alone.
- Likes to share his own cooking ideas to help fellow students on a budget.
- The ability to explore and learn from other people’s recipe ideas.

**Pain Points:**
- Struggles to find relatable, simple recipes online that fit his lifestyle as a busy student.
- Wants a space where people share realistic, budget-friendly meals, not fancy dishes.
- Wishes he could easily collect and return to useful recipes shared by others like him.


### Persona 2: Family-oriented housewife - "Teija"

**Age:** 43

**Occupation:** Full-time housewife (has 3 children)

**Place of residence:** Kokkola, Finland

**Personality:** Kind, nurturing, and highly family-oriented. She enjoys cooking for her family and values practicality in daily life.

**Behavior:**
- Keeps recipes in old notebooks and even sticky notes.
- Occasionally explores cooking blogs and recipe websites for ideas for kids’ lunches or seasonal dishes.
- Although she is not tech-savvy, she tries to use digital tools to make her cooking life easier.
- Browses through recipes shared by other parents when looking for new meal ideas for her children.
  
**Needs:**
- Recipes for quick, family-friendly meals that can be prepared on busy days.
- A space where she can share her cooking ideas with others.
- A simple and intuitive app interface, since she is not very confident with technology.

**Pain Points:**
- Finds it time-consuming to look through large, complex recipe sites that are not designed for busy parents.
- Wants a welcoming space where home cooks can exchange practical, everyday recipes, not professional chef content.
- Needs a simple, intuitive interface to easily browse and contribute recipes without feeling overwhelmed.

### Persona 3: Hobby Cook cooking - "Pekka"

**Age:** 57

**Occupation:** Senior employee at Elisa Oy 

**Place of residence:** Tampere, Finland

**Personality:** Calm, detail-oriented, and enjoys quiet hobbies like gardening and cooking. Cooking is a way to relax after work and often experiments with new techniques or international dishes.

**Behavior:**
- Cooks several times a week, especially on weekends.
- Regularly explores recipes posted by other home cooks, especially ones with creative twists or cultural variety.
- Sometimes shares his dishes on Facebook or sends recipes to friends by email.
- Enjoys reflecting on and comparing different versions of the same dish shared by others.

**Needs:**
- A community space focused on meaningful recipe exchange rather than flashy presentation.
- A place to discover new and interesting recipes from other home cooks.
- The ability to write detailed instructions and notes for each dish when sharing.

**Pain Points:**
- Struggles to find a simple website that shows clear contents of recipes.
- Does not like apps that look too trendy or overloaded with ads and videos.
- Wants an app that focuses more on quality and clarity, less on social media features.


## 2. Use Cases and User Flows

### 1. View All Recipes

**User:** Any user 

**Trigger:** User opens the homepage or clicks the "Home" menu on other pages

**Process:**
- The system sends a `GET /api/recipes` request to the backend.
- All available recipes are retrieved from the database.
- The recipes are displayed as a card view.
- The user can scroll through the recipes and click on one and view more details.

**Outcome:** The user sees all existing recipes and can choose one to explore further.

### 2. View Detailed Recipes
**User:** Any user

**Trigger:** User clicks on a recipe card

**Process:**
- The system sends a `/api/recipes/:id` to fetch full recipe data.
- The recipe detail page displays all fields (ingredients, steps... etc.)
- The frontend renders a new page showing all of the recipe information

**Outcome:** User can read the full instructions and ingredients.

### 3. Add a New Recipe
**User:** Any user

**Trigger:** User clicks the "Add Recipe" button on the homepage and detailed recipe pages.

**Process:**
- The user is navigated to the recipe creation page.
- A blank form is displayed with input fields for title, ingredients, and steps
- The user fills in the information and submits the form
- A `POST /api/recipes` request is sent to the backend with the new recipe data
- The backend stores the data in the SQLite database
- The user is redirected back to the homepage where the new recipe is now listed

**Outcome:** The new recipe is added and shown on the homepage.

### 4. Edit an Existing Recipe
**User:** Any user 

**Process:**
- The user is navigated to the recipe edit page
- The form is pre-filled with the existing data for the selected recipe
- The user makes changes to one or more fields (e.g., title, ingredients, steps)
- On submission, a `PUT /api/recipes/:id` request is sent with the updated recipe data
- The backend updates the recipe in the SQLite database
- The user is redirected to the updated recipe’s detail page

**Outcome:** The recipe is updated in the database and re-displayed.


### 5. Delete an Existing Recipe
**User:** Any user

**Trigger:** User clicks “Delete” on a recipe detail page

**Process:**
- The app may show a confirmation dialog to prevent accidental deletion
- If the user confirms, a `DELETE /api/recipes/:id` request is sent to the backend
- The backend removes the selected recipe from the SQLite database
- After deletion, the user is redirected back to the homepage
- The deleted recipe no longer appears in the recipe list

**Outcome:**  
The recipe is permanently removed from the database and the user interface.

### 6. Searching for an Existing Recipe
**User:** Any user

**Trigger:** User types a keyword into the search bar on the homepage.

**Process:**
- The application listens to changes in the search input field
- As the user types, the app filters through the list of recipes already loaded from the database
- Only the recipes whose titles include the search term are displayed
- This is done entirely on the frontend using JavaScript (no additional request to the backend)

**Outcome:**  
The user can quickly find recipes what they are looking for.


## 3. UI Prototypes

The UI design was first created as wireframes to define the layout and core features. Visual styling and components will later be implemented using React and CSS.
The link of the Figma prototype - 

## 4. Information Architecture and Technical Design

### Information Architecture

Makunote is a simple recipe-sharing app focused on everyday cooking. The app was designed to feel like a digital “notebook” where users can explore and contribute casual recipes.

#### 1. Structure Overview
**Main Page (Home)**  
- A list of all public recipes.
- Users can view summaries and navigate to full details.
- Includes "Add Recipe," "About" buttons and "Search bar".

**Recipe Detail Page**  
- Shows full instructions and ingredients for one recipe.
- Users can edit or delete it.

**Add/Edit Form**  
- A unified form component used for both creating and updating recipes.
- It includes basic validation and error handling (e.g., required fields).

#### 2. Data Flow and User Actions
**Recipe Creation**
   - Users fill in a form with recipe data (title, ingredients, instructions).
   - The data is sent to the backend via a POST request and saved in SQLite.
   - On submit, the recipe is saved in the SQLite database and shown on the main page.

**View, Edit and Delete Recipe**
   - Users can click a recipe card to view its details (fetched by recipe ID).
   - Edit and delete buttons allow updating or removing the recipe from the database.

#### 3. User permission and access control
- In the current version of Makunote, there is no user authentication or account system.
- All users can create, edit, and delete any recipe. This was intentional to keep the application simple and accessible.
- In the future, user accounts should be introduced.


### Technical Design

#### 1. System Overview

**Frontend**
- **Framework**: React.js
- **Styling**: CSS (manual styling with flex/grid)
- **Routing**: React Router DOM for navigating between pages
- **Form Handling**: useState + basic validation in the form
- **API Communication**: Fetch API to interact with the backend

**Backend**
- **Platform**: Node.js with Express
- **Database**: SQLite, stored locally for lightweight setup
  
**API Integration**
- The application uses a RESTful API to connect the React frontend with the Node.js + SQLite backend.
- The API supports the following operations
- Creating, reading, updating, and deleting recipes
- Fetching data for specific recipes by ID
  
**Endpoints**
- `GET /api/recipes` – Get all recipes  
- `GET /api/recipes/:id` – Get one recipe  
- `POST /api/recipes` – Create new recipe  
- `PUT /api/recipes/:id` – Update recipe  
- `DELETE /api/recipes/:id` – Delete recipe

#### 2. Security and Validation
- Enabled CORS for frontend-backend communication
- Simple server-side checks for missing or invalid data
- No authentication in current version (all users can edit/delete all recipes)
- In the future, login functionality could be added to associate recipes with authors

#### 3. Testing Methods
**Unit Testing (Vitest)**
- Using `Vitest` to test frontend components in isolation.
- Example: Testing recipe creation and deletion functionalities to verify UI logic.

**End-to-End Testing (Playwright)**
- Using `Playwright` to simulate real user interactions with the frontend in a browser-like environment.
- Example: Checking that users can add a new recipe via the interface and view it correctly on the homepage.

**Load Testing (k6)**
- Simulating concurrent requests to test server performance under load.
- Running tests with 50 virtual users (VUs) and over 4000 requests.??
- Measuring response time and throughput to ensure stable API handling.??

## 5. Project Management and User Testing

### Project Management

This project is implemented solely. As this project has 4 phases, they were divded as follows.
The inital schedule might slightly change as assignments and exams of other courses might interfare.

**Phase 1 - Definition and Planning (Week 13-14)**
- Defining the user personas, use cases and flow of the application.
- Implementing the initial UI design using Figma (wireframes, layout, color scheme).
- Designing information architecture and technical design.
- Planning the overall schedule for the project and user testing of the application.
- Documenting them on GitHub.

**Phase 2 - Basic structure and main functionalities (Week 15-16)**
- Setting up the development environment (React frontend, Node.js backend).
- Creating the SQLite database and defining the data schema for recipes (e.g., title, ingredients).
- Developing basic CRUD functionality (create, read , update, delete the recipe).  
- Documenting them on GitHub.

**Phase 3 - Advanced features and optimization (Week 17-18)**
- Enhancing editing and deletion functionality for individual recipes.
- Adding recipe detail view with full content display (ingredients and steps).
- Implementing a search bar to filter recipes by title.
- Enhancing user interface with form validation, basic error handling, and cleaner layout.
- Documenting them on GitHub.

**Phase 4 - Refinement & Presentation (Week 19-20)**
- Debugging minor issues.
- Checking and verifying the overall functions.
- Improving UI if possible.
- Preparing materials for the presentation (e.g., demo, README).
- Documenting them on GitHub.

**Tasks**<br />
Here, the tasks involved in this project are presented, categorized into different areas such as frontend, backend, planning, and documentation. These tasks reflect the full-stack development process, from early design to final presentation.

- **Frontend:**
  - Builing UI using React (recipe list, details, form components)
  - Being responsible for UX as well
  - Handling routing, form validation, and responsive design

- **Backend:**
  - Developing REST API with Node.js and Express
  - Integrating SQLite for data storage
  - Defined and managed recipe data schema

- **Planning & Design:**
  - Creating user personas and user flows
  - Designing wireframes and decided on the visual style

- **Testing & Debugging:**
  - Testing all CRUD functionalities
  - Fixing issues related to data flow and user interaction

- **Documentation & Presentation:**
  - Writing project documentation and README
  - Preparing explanation for final presentation


Some of the risks of this project should be noted.
- **Falling behind schedule**:
  There is a risk that the project might fall behind schedule. To mitigate this, I should work as much as possible when I have time. I should also ask for guidance     from the teacher and classmates.
  
- **Overwork**:
  As this project is undertaken entirely solo, there is no possibility to divide the workload, which raises the chance of overworking. To avoid burnout, it is crucial to set firm boundaries between professional responsibilities and personal time, so I can maintain a balance of healthy lifestyle.
  
- **Technical issues**:  
  Since this project uses a full-stack setup (Node.js, SQLite, React), there is a possibility to encounter bugs or limitations, especially when dealing with
  database queries or connecting frontend and backend. 
  To address this matter, I should frequently test each feature and consult peers or search online if necessary.

- **Lack of real user feedback**:  
  As the app is developed individually and not used by actual target users, it might lack real-world usability validation.  
  To minimize this, I will rely on user personas to simulate different needs. If possible, ask classmates to try the app and provide feedback.

### User Testing

