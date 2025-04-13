# Project phase 2 - Basic structure and main functionalities
In this section, we describe the foundational setup and core functionalities of the Makunote recipe-sharing application, implemented during Phase 2 of development.
The goal of this phase was to implement the basic function for the application. This includes integrating the frontend, backend, and database, as well as implementing key interactions such as recipe CRUD operations.


## 1. Environment
The following development environment was used to implement the Makunote web application.
- **Operating System**: macOS (Sonoma)
- **Code Editor**: Visual Studio Code
- **Frontend Framework**: React (via Create React App)
- **Backend Platform**: Node.js with Express (version v20.17.0)
- **Package Manager**: npm (version 10.8.2)
- **Browser**: Google Chrome (for testing)

## 2. Backend
The backend was built using Node.js with the Express.js framework. It provides a RESTful API to handle recipe data stored in a PostgreSQL database.
Implemented API Endpoints:
### Implemented API Endpoints:
- `GET /api/recipes` – Fetches all recipes from the database.
- `POST /api/recipes` – Adds a new recipe. Accepts data such as title, image URL, ingredients, instructions, and user info.
- `PUT /api/recipes/:id` – Updates an existing recipe. Only accessible from the frontend if the user is the owner.
- `DELETE /api/recipes/:id` – Deletes a recipe. A confirmation popup is shown before deletion.

The backend uses the **pg** library for PostgreSQL connection pooling, and **CORS** is enabled for local development.
For Phase 2, full authentication is not implemented. All user identification is based on localStorage and sent manually via request bodies.



## 3. Frontend
The frontend is built using **React** with **React-Bootstrap** for styling. Functional components and hooks like `useState`, `useEffect`, and `useNavigate` are used extensively.

### Page Structure:
- **Home page** – Displays all recipes using responsive cards.
- **My Recipes page** – Filters and shows only the current user's recipes.
- **Recipe Detail page** – Full view with ingredients and instructions.
- **Add Recipe page** – A form for submitting new recipes.
- **Edit Recipe page** – A pre-filled form for updating user's own recipe.
- **Login page** – A minimal login screen that saves user info to localStorage.

### Layout Features:
- A global **Navbar** component enables navigation between pages.
- Routing is handled by **react-router-dom**, and route protection is simulated via simple checks.
- Conditional rendering is used to show **Edit/Delete** buttons only when the current user matches the recipe’s creator.


## 4. Database
The backend is connected to a PostgreSQL database hosted on Microsoft Azure.
Recipe table schema includes: id, title, image, ingredients, instructions, userAdded, and userId. Table schema was edited with pgAdmin 4.


### Table Schema: `recipes`

| Column       | Type     | Description                            |
|--------------|----------|----------------------------------------|
| id           | SERIAL   | Primary key                            |
| title        | TEXT     | Name of the recipe                     |
| image        | TEXT     | URL of the recipe image                |
| ingredients  | TEXT     | Multiline list of ingredients          |
| instructions | TEXT     | Step-by-step cooking instructions      |
| user_added   | BOOLEAN  | Indicates if the recipe was user-made  |
| user_id      | INTEGER  | ID of the user who added the recipe    |

> Data is accessed using **parameterized SQL queries** to prevent SQL injection.




## 5. Basic structure and architecture 
The architecture follows a classic separation of concerns between frontend, backend, and database layers.  
The directory structure is organized to keep pages, components, and styles modular and maintainable.<br />
Frontend: Built with React, using functional components and hooks. Components are modularly separated into pages/ and components/ directories.

<pre> <code> 
  ``` 
  src/
  ├── components/     # Reusable UI components (e.g., RecipeCard)
  ├── pages/          # View-level components (e.g., AddRecipe, RecipeDetail)
  ├── styles/         # Custom CSS files
  ├── App.js          # Top-level layout and routing
  └── index.js        # Entry point of the React app
  ``` </code> </pre>

## 6. Functionalities
Based on the planned use cases, the functionalities below were implemented.

- **Login via localStorage**: A basic user login is simulated by storing a username and ID in localStorage.
- **View all recipes**: All recipes from the database are shown as responsive cards.
- **Recipe detail view**: Recipes can be opened in a detailed view showing full ingredients and instructions.
- **View my recipes**: Logged-in users can view only the recipes they have submitted.
- **Add a recipe**: A structured form allows users to input title, image URL, ingredients, and instructions. Required fields are validated.
- **Delete recipe**: If the recipe was added by the user, a "Delete this recipe" button appears. SweetAlert2 is used to show a confirmation popup.
- **Search a recipe**: (Planned) A search bar will be implemented to filter recipes by title or ingredients.

## 7. Code quality and documentation

- Components are written with a clear structure with comments in each block.
- File naming is consistent and descriptive.
- The component hierarchy flows from `App.js` (top-level) into `pages/` and `components/`, making the routing and data flow easy to trace.
- Project is version-controlled using Git and published to GitHub.
- Common concerns such as navigation, state lifting, and user interactions are kept separate and clearly organized.


## 8. Testing and error handling

- **Error handling**: Basic `try/catch` blocks and `.catch()` handlers are used for `fetch` requests. Error logs are shown in the console.
- **Form validation**: The recipe form uses HTML `required` attributes and simple logic to prevent empty submissions.
- **User feedback**: SweetAlert2 provides a friendly confirmation popup for deletions. Error messages will be enhanced in future phases.NOT YET
- **Planned testing tools**: In future phases, unit testing (Vitest) and end-to-end testing (Playwright or Cypress) are planned. Load testing with k6 is also being considered.

## 9. User interface and interaction

- Focused on clear and user-friendly UI and UX. As described in the user personas, simplicity was prioritized for casual and busy users.
- Layout is clean, with intuitive card-based recipe display.
- Color contrast and accessibility are being considered (plan to use tools like Lighthouse for audits).
- **Design theme**: The UI follows a warm and casual style, using soft background tones like `#f6f0e8` (a creamy beige) to reduce visual strain and create a cozy atmosphere.
- **Typography**: Readable and friendly fonts were selected (e.g., Quicksand or Nunito), helping to create an approachable feel for users of all ages.
- **Layout**: Cards and sections are consistently spaced with large touch targets for clarity and mobile-friendliness. Recipe cards are displayed in a clean grid, with images and titles centered for balance.

### Login UX

Special care was taken in designing the login page to ensure a smooth and welcoming user experience:
- Users are greeted by a large, centered logo to establish the brand image.
- Pressing **Enter** also triggers login, supporting keyboard-friendly navigation.
- Error feedback is shown instantly if the name field is left empty, improving clarity.
- A visually styled button with hover effects makes interaction feel responsive and enjoyable.
