# Project phase 2 - Basic structure and main functionalities
In this section, 

## 1. Environment
The following development environment was used to implement the Makunote web application.
- **Operating System**: macOS (Sonoma)
- **Code Editor**: Visual Studio Code
- **Frontend Framework**: React (via Create React App)
- **Backend Platform**: Node.js with Express (version v20.17.0)
- **Package Manager**: npm (version 10.8.2)
- **Browser**: Google Chrome (for testing)

## 2. Backend
---For now---
A basic Express server was set up and runs on port 3001.
A route GET /api/recipes was implemented to fetch recipe data.

## 3. Frontend

- **Styling Framework**: Bootstrap via React-Bootstrap components.

for now
- **Page Structure**: Includes Home page, All Recipes view, and My Recipes view.
Implemented responsive layout using Bootstrap's grid system (<Row>, <Col>).
A tab-like view switch between All Recipes and My Recipes was implemented.

## 4. Database

- Database Platform: PostgreSQL, hosted on Microsoft Azure.
Recipe table schema includes: id, title, image, ingredients, instructions, userAdded, and userId. Table schema was edited with pgAdmin 4. 



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
- **Search a recipe**: ...

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
