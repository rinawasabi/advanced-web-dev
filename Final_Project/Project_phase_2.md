# Project phase 2 - Basic structure and main functionalities
In this section, 

## 1. Environment

The following development environment was used to implement the Makunote web application:

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
Recipe table schema includes: id, title, image, ingredients, instructions, userAdded, and userId.
Table schema was edited with pgAdmin 4. 



## 5. Basic structure and architecture 
The architecture follows a classic separation of concerns between frontend, backend, and database layers.<br />

Frontend: Built with React, using functional components and hooks. Components are modularly separated into pages/ and components/ directories.

## 6. Functionalities

Add something

## 7. Code quality and documentation

The code hierarchy was like App.js is the parent and from there, pages and components were ...

## 8. Testing and error handling

Add something

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
