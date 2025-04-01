# Project phase 1 - Definition and planning

## Backgound story of the project - Makunote
This application is a simple recipe sharing platform where everyone can easily share and discover everyday recipes.

I enjoy cooking and thought it would be meaningful and fun to create an application that allows people to share their favorite recipes. I often wished I had this kind of simple recipe-sharing application. 

The *"Maku"* means "flavor" in Finnish, and *note* comes from the idea of collecting recipes and cooking ideas. Together, it represents a shared space to store and discover the flavors of everyday life.


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

**Needs:**
- A community space focused on meaningful recipe exchange rather than flashy presentation.
- A place to discover new and interesting recipes from other home cooks.
- The ability to write detailed instructions and notes for each dish when sharing.

**Pain Points:**
- Struggles to find a simple website that shows clear contents of recipes.
- Does not like apps that look too trendy or overloaded with ads and videos.
- Wants an app that focuses more on quality and clarity, less on social media features.


## 2. Use Cases and User Flows
### 1. Log in as a User

**User:** Any user

**Trigger:** User opens the application for the first time and is prompted to enter their name.

**Process:**
- The user is greeted with a login screen asking for their name.
- They enter their name (e.g., “Aki”) and click **“Start Cooking!”**.
- The app saves the name in `localStorage`, so they will not need to re-enter it on their next visit.

**Outcome:**  
The user can successfully start using the application.

### 2. View Recipes

**User:** Any logged-in user

**Trigger:** User opens the homepage or clicks on a recipe card

**Process:**
- The user opens the app and immediately sees a grid of recipe cards on the homepage.
- Each card shows a title and preview of the recipe.
- Curious about one, the user clicks on a card.
- The user is taken to a detail page showing the full title, list of ingredients, and step-by-step instructions.

**Outcome:** 
The user can browse all available recipes and view full details of any selected one.

### 3. Add a New Recipe
**User:** Any logged-in user

**Trigger:** User clicks the "Add Recipe" button on the homepage and detailed recipe pages.

**Process:**
- The user wants to share a new recipe and clicks the "Add Recipe" button.
- The app navigates to a blank form with fields for title, ingredients, and steps.
- The user fills out the form with their recipe details.
- When ready, they click the "Submit" button.
- The user is redirected to the homepage, where their newly added recipe now appears in the list.

**Outcome:** The new recipe is added and shown on the homepage.

### 4. Edit Own Recipe
**User:** The user who created the recipe

**Trigger:** User opens the recipe detail page and sees their own post

**Process:**
- The user navigates to a recipe they previously submitted.
- The app checks if the logged-in user's name matches the recipe's author.
- If it's a match:
  - The user sees “Edit” and “Delete” buttons.
  - **Edit:**
    - The user clicks “Edit” and is taken to a form pre-filled with the recipe's current content.
    - They make changes and click “Save.”
    - The updated content is displayed on the detail page.
  - **Delete:**
    - The user clicks “Delete” and confirms the action in a dialog.
    - The app redirects them back to the homepage, and the recipe is no longer listed.

**Outcome:**  
The recipe’s creator successfully edit or delete their own post.

### 5. Filter Own Recipes

**User:** Any logged-in user

**Trigger:** User interacts with the homepage using "My Recipes" button

**Process:**
- The user opens the homepage and sees a grid of all public recipes.
- When the user click the **My Recipes** button there, the list only show recipes created by the current user.

**Outcome:**
- The user can easily switch between viewing all shared recipes and just their own posts.

## 3. UI Prototypes
### Prototype Objectives
The UI prototype focused on creating a visual outline of the application’s layout and overall look and feel.  
Visual styling and components will later be implemented using React and CSS.

Before building the actual application, I created a prototype to:
- Explore the visual style and color scheme of the app
- Define the basic layout of the homepage, recipe detail, and form pages
- Communicate the core concept and user interface structure before development

### Prototype Development

The wireframes were first drawn on paper and later created using Figma.  
The goal was to create a simple, user-friendly interface.

The link of the Figma prototype - https://www.figma.com/proto/6EVSQ4YpoGYnLhs6DXirWG/Final-Project-for-Adv-web-course?node-id=31-2&p=f&t=ObDde40iGF31soYy-0&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1

## 4. Information Architecture and Technical Design

### Information Architecture

#### 1. Structure Overview

**Login Page**  
- When the app is opened for the first time, the user is asked to enter their name.  
- The name is saved to `localStorage` and used to track the current user.  
- Once entered, the user is redirected to the homepage.

**Main Page (Home)**  
- Displays all public recipes in a grid card layout.  
- Includes navigation bar with "About", "Add Recipe", "My Recipes", and "Search bar".  
- Users can filter recipes by keyword or view only their own posts using the toggle.

**Recipe Detail Page**  
- Shows full details of a selected recipe (name, ingredients, steps).  
- If the current user is the author, "Edit" and "Delete" buttons appear.  
- Users can navigate back to the homepage or add a new recipe from here.

**Add/Edit Form**  
- A shared page used for both creating and editing recipes.  
- The form includes input fields for recipe title, ingredients, and steps.  
- Includes validation (e.g., required fields) and options to "Save" or "Cancel".

#### 2. Data Flow and User Actions

**User Login**
- When the app loads, it checks `localStorage` for a saved user name.
- If no name is stored, the user is asked to enter one on the login page.
- The name is saved in `localStorage` and used as the recipe author name.

**Recipe Creation**
- Users fill in a form with recipe data (title, ingredients, instructions).
- The app includes the current user's name as the `author` field.
- A `POST` request sends the data to the backend, which stores it in the PostgreSQL database.
- On successful submission, the new recipe appears on the homepage.

**View Recipe**
- When a recipe card is clicked, a `GET` request fetches the full recipe data from the backend.
- The recipe detail page displays the full content (title, ingredients, steps).

**Edit/Delete Recipe**
- If the `author` of the recipe matches the current user, "Edit" and "Delete" buttons are shown.
- **Edit:** Sends a `PUT` request with updated data.
- **Delete:** Sends a `DELETE` request to remove the recipe.
- Both actions update the database and redirect the user appropriately.

#### 3. User Permission and Access Control
- Makunote uses a lightweight login system based on username input saved in `localStorage`.
- When a user creates a recipe, their name is stored in the `author` field.
- Edit and delete permissions are restricted to recipes where `recipe.author === currentUser`.
- This approach allows basic ownership control without requiring full authentication.
- In future versions, a proper user account system (e.g., sign-up/login with authentication) can be introduced for enhanced security and personalization.


### Technical Design

#### 1. System Overview

**Frontend**
- **Framework**: React.js  
- **Styling**: CSS (manual styling with Flexbox/Grid)  
- **Routing**: React Router DOM for navigation between pages  
- **Form Handling**: useState for state management + basic form validation  
- **API Communication**: Fetch API is used to send and receive data from the backend  

**Backend**
- **Platform**: Node.js with Express  
- **Database**: PostgreSQL (hosted on Azure using Azure Database for PostgreSQL)  

**API Integration**
- The application uses a RESTful API to connect the React frontend with the Node.js + PostgreSQL backend.  
- All backend services, including the API and database, are deployed on Azure using Azure App Service.  
- The API supports full CRUD operations and data retrieval by ID.

**Endpoints**
- `GET /api/recipes` – Fetch all recipes  
- `GET /api/recipes/:id` – Fetch a specific recipe by ID  
- `POST /api/recipes` – Add a new recipe  
- `PUT /api/recipes/:id` – Update an existing recipe  
- `DELETE /api/recipes/:id` – Delete a recipe  


#### 2. Security and Validation
- CORS is enabled to allow secure communication between the frontend and backend.
- Basic server-side validation is implemented to ensure that required fields (e.g., title, ingredients) are not missing.
- The app uses a lightweight login system with `localStorage` to identify the current user.
- Only the author of a recipe (based on stored name) can edit or delete their own posts.
- In the future, full user authentication and account-based permissions may be introduced to enhance security and enable additional features (e.g., favoriting, comments).


#### 3. Testing Methods
**Unit Testing (Vitest)**
- Using `Vitest` to test frontend components in isolation.
- Example: Testing recipe creation and deletion functionalities to verify UI logic.

**End-to-End Testing (Playwright)**
- Using `Playwright` to simulate real user interactions with the frontend in a browser-like environment.
- Example: Checking that users can add a new recipe via the interface and view it correctly on the homepage.

**Load Testing (k6)**
- Simulating concurrent requests to test the performance of the backend API deployed on Azure.
- Running tests with 50 virtual users (VUs) and over 4000 requests.
- Measuring response time and throughput to ensure stable API handling.

## 5. Project Management and User Testing

### Project Management<br />
This project is implemented solely. As this project has 4 phases, they were divided as follows.
The inital schedule might slightly change as assignments and exams of other courses might interfere.

**Phase 1 - Definition and Planning (Week 13-14)**
- Defining the user personas, use cases and flow of the application.
- Implementing the initial UI design using Figma (wireframes, layout, color scheme).
- Designing information architecture and technical design.
- Planning the overall schedule for the project and user testing of the application.
- Documenting them on GitHub.

**Phase 2 - Basic structure and main functionalities (Week 15-16)**
- Setting up the development environment (React frontend, Node.js backend).
- Setting up the PostgreSQL database on Azure and defining the data schema for recipes (e.g., title, ingredients).
- Developing basic CRUD functionality (create, read, update, delete the recipe).  
- Documenting them on GitHub.

**Phase 3 - Advanced features and optimization (Week 17-18)**
- Enhancing editing and deletion functionality for individual recipes.
- Adding recipe detail view with full content display (ingredients and steps).
- Implementing a search bar to filter recipes by title.
- Implementing lightweight login using localStorage to identify users.
- Displaying a “My Recipes” view that shows only the user’s own posts.
- Enhancing user interface with form validation, basic error handling, and cleaner layout.
- Deploying the full application to Azure (frontend and backend)
- Documenting progress and setup on GitHub.

**Phase 4 - Refinement & Presentation (Week 19-20)**
- Debugging minor issues.
- Checking and verifying the overall functions.
- Improving UI/UX if needed.
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
  - Integrating PostgreSQL for data storage
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
User testing will be conducted to evaluate the usability of Makunote.

**Participants:** 
- 1 classmate and 2 family members with different technology experience.
- Selected based on similarity to the defined user personas.

**Environment:** 
- Depending on the user’s preference, remotely (via screen sharing on Zoom) or face-to-face done.
- The app will be tested on the deployed Azure environment to ensure it works as expected in the actual hosting environment.
- Equipment: A normal laptop with a camera to display the prototype, a charger and a notebook for taking notes.
- Duration: Around 30 minutes, as the website is not highly complex.

**Tasks tested:** 
- Add a new recipe using the form  
- View full details of an existing recipe
- Edit an existing recipe
- Delete a recipe 
- Navigate between pages (Home, Recipe Detail, Add/Edit)
- Try using the search bar and find the recipe

**Method:**
- Each participant will be given basic instructions and asked to use the app independently.
- Observations will be made on how they interacted with the interface and whether they experience any confusion. 
- After testing, short informal interviews will be conducted to gather feedback for improvement and user experience. 

**Scenario:** <br />
Start the meeting - Greetings, and the purpose and tasks are explained. (~5 min)<br />
                               ↓<br />
Implement the tasks - Users complete tasks while being observed by me. (~15 min)<br />
                               ↓<br />
Discussion - Users freely express their opinions about the website’s usability. (~10 min)
