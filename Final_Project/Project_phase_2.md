# Project phase 2 - Basic structure and main functionalities
In this section, the foundational setup and core functionalities of the Makunote recipe-sharing application are described.
The goal of this phase was to implement the basic function for the application. This includes integrating the frontend, backend, and database, as well as implementing key interactions such as CRUD operations.

## 1. Environment
The following development environment was used to implement the Makunote web application.
- **Frontend Framework**: React (via Create React App)
- **Backend Platform**: Node.js with Express (version v20.17.0)
- **Database**: PostgreSQL
- **Hosting / Deployment**: Entire application is hosted on Microsoft Azure
- **Package Manager**: npm (version 10.8.2)

## 2. Backend
The backend was built using Node.js with the Express.js framework. It provides a RESTful API to handle recipe data stored in a PostgreSQL database.

### Implemented API Endpoints
- `GET /api/recipes` – Fetches all recipes from the database.
- `POST /api/recipes` – Adds a new recipe. Accepts data such as title, image URL, ingredients, instructions, and user info.
- `PUT /api/recipes/:id` – Updates an existing recipe. Only accessible from the frontend if the user is the owner.
- `DELETE /api/recipes/:id` – Deletes a recipe. A confirmation popup is shown before deletion.

The backend uses the **pg** library for PostgreSQL connection pooling, and **CORS** is enabled for local development.
Full authentication is not implemented. All user identification is based on localStorage and sent manually via request bodies.

## 3. Frontend
The frontend is built using **React** with **React-Bootstrap** and custom **CSS files** for styling. Functional components and hooks like `useState`, `useEffect`, and `useNavigate` are used to handle user interactions and data flow.

### Page Structure
- **Login page** – A simple login form that stores the user in localStorage.
- **Home page** – Displays all recipes as responsive cards.
- **My Recipes page** – Filters and shows only the recipes created by the current user.
- **Recipe Detail page** – Displays a single recipe in full detail (ingredients, instructions, etc).
- **Add Recipe page** – Contains a form to submit a new recipe.
- **Edit Recipe page** – Shows a pre-filled form for editing your own recipe.
- **About page** – Introduces the Makunote application.

### Layout & Styling Features
- A reusable **Navbar** component allows easy navigation across pages.
- Page transitions and routing are handled using **react-router-dom**.
- **Conditional rendering** is used to show `Edit` and `Delete` buttons only to the recipe owner.
- The UI uses a mix of
  - **React-Bootstrap components** (e.g., `<Container>`, `<Form>`, `<Row>`, `<Col>`)
  - **Custom CSS files** stored under `styles/`, such as
    - `App.css` – Global layout and typography
    - `AddRecipe.css` – Custom styles for form layout
    - `RecipeDetail.css` – Styling for the detailed recipe view
    - `Navbar.css` – Custom navbar fonts and colors

This combination ensures consistent, responsive design while allowing for personalized styling across different parts of the app.

## 4. Database
The backend is connected to a **PostgreSQL** database hosted on **Microsoft Azure**. All database operations are handled via the `pg` Node.js library using parameterized SQL queries to prevent SQL injection.

The database schema was designed and modified using **pgAdmin 4**, which also allowed running test queries and verifying data during development.

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

- Recipes are fetched using SQL queries in the backend, such as `SELECT * FROM recipes ORDER BY id DESC`.
- All data manipulation (add, edit, delete) is performed using parameterized queries like `INSERT INTO ... VALUES ($1, $2, ...)` for security.
- In the future, this schema can be extended to include other features like user accounts, comments, ratings, or recipe tags.

## 5. Basic structure and architecture 
The architecture follows a classic separation of concerns between frontend, backend, and database layers.  
The directory structure is organized to keep pages, components and styles modular and maintainable. <br />
### Frontend
Components are modularly separated into pages/ and components/ directories.

<pre> <code> 
``` 
  src/
  ├── components/     # Reusable UI components (RecipeCard & Navibar)
  ├── pages/          # View-level components (e.g., AddRecipe, RecipeDetail)
  ├── styles/         # Custom CSS files
  ├── App.js          # Top-level layout and routing
  └── index.js        # Entry point of the React app
``` </code> </pre>

### Backend  
Backend is structured to separate the database configuration and API logic.
The backend uses Express.js to serve RESTful routes and connects to a PostgreSQL database via `pg`. 
All recipe-related API endpoints (GET, POST, PUT, DELETE) are defined in `server.js`.

<pre> <code> 
``` 
backend/
├── db.js           # PostgreSQL connection setup using pg
├── server.js       # Main Express server and route definitions
└── package.json    # Backend dependencies and scripts
``` </code> </pre>

## 6. Functionalities
Based on the 5 planned use cases, the functionalities below were implemented.
1. **Login via localStorage**: A basic user login is simulated by storing a username and ID in localStorage.
2. **View recipes**:
   - **Recipe list**: All recipes from the database are shown as responsive cards.
   - **Recipe detail view**: Recipes can be opened in a detailed view showing full ingredients and instructions.
3. **Filter my recipes**: Logged-in users can view only the recipes they have submitted.
4. **Edit a recipe**:
   - **Edit**: A structured form allows users to input title, image URL, ingredients, and instructions.
   - **Delete**: Required fields are validated.If the recipe was added by the user, a "Delete this recipe" button appears. SweetAlert2 is used to show a confirmation popup.
5.  **Search a recipe**: A search bar on the homepage filters recipes by title or ingredients.

## 7. Code quality and documentation
- Components are written with a clear structure with comments in each block.
- File naming is consistent and descriptive.
- The component hierarchy flows from `App.js` (top-level) into `pages/` and `components/`, making the routing and data flow easy to trace.
- Common concerns such as navigation, state lifting, and user interactions are kept separate and clearly organized.

## 8. Testing and error handling
- **Error handling**: Basic `try/catch` blocks and `.catch()` handlers are used for `fetch` requests. Error logs are shown in the console.
- **Form validation**: The recipe form uses HTML `required` attributes and simple logic to prevent empty submissions.
- **User feedback**: SweetAlert2 provides a friendly confirmation popup for deletions.
- **Testing tools**: Unit testing, end-to-end testing and load testing were implemented. In addition to automated testing tools, all key functionalities were manually tested during development, and debugging was performed accordingly.

## 9. Testing Strategy
The application was tested using three approaches to ensure quality and reliability.
### Unit Testing 
- **Tool**: Vitest
- **Scope**: Frontend logic such as filtering, form validation.
- **Example**:
  - `filterRecipes()` function was tested to ensure it filters by title or ingredients.
- **Location**: `src/tests/filterRecipes.test.js`

### End-to-End Testing
- **Tool**: Playwright
- **Scope**: User flow testing – logging in, adding a recipe, viewing detail, editing, and deleting.
- **Test Ideas**:
A user can successfully log in with a name.
A recipe can be added with all required fields.
Deletion shows a confirmation popup and removes the item.

### Load Testing
- **Tool**: k6
- **aaa**: Test /api/recipes endpoints under load (GET, POST, DELETE).



## 10. User interface and interaction (UI/UX)
Some of the points that are focused are shown below.
### UI
- **Design theme**: A warm and casual style, using soft background tones like a creamy beige to reduce visual strain and create a cozy atmosphere. Simplicity was prioritized for casual and busy users.
- **Responsive layout**: Layout adjusts fluidly for mobile, tablet, and desktop users.
- **Form design**: Clearly structured fields with labels, spacing, and visual cues for required inputs.
- **Color palette**: Warm and inviting tones (e.g., #f6f0e8 background) promote comfort and readability. Color contrast and accessibility are being considered.
- **Typography**: Uses Quicksand and Poppins for a friendly, modern aesthetic.
- **Recipe cards**: Consistent card-based layout with hover effect and fallback image if no URL is provided.

### UX
- **Keyboard support**: Pressing Enter also triggers login, supporting keyboard-friendly navigation.
- **Instant error feedback**: Error messages appear immediately if the field is left empty, improving clarity.
- **Button interaction**: A visually styled button with hover effects makes interaction feel responsive and enjoyable.
- **Logo navigation**: Clicking the logo navigates back to the home page for quick access.
- **Conditional action buttons**: "Edit" and "Delete" options only appear for recipes created by the logged-in user, avoiding confusion.
