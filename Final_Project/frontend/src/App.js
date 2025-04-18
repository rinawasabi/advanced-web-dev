import React, { useState, useEffect } from "react";
import "./styles/App.css";
import CustomNavbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Container } from "react-bootstrap";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

// Importing pages
import Home from "./pages/Home";
import AddRecipe from "./pages/AddRecipe";
import RecipeDetail from "./pages/RecipeDetail";
import MyRecipes from "./pages/MyRecipes";
import Login from "./pages/Login";
import About from "./pages/About";
import EditRecipe from "./pages/EditRecipe";

// Wrapper to use `useLocation()` inside Router
function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}

function App() {
  const [recipes, setRecipes] = useState([]);
  const location = useLocation();
  const isLoginPage = location.pathname === "/";
  const currentUser = JSON.parse(localStorage.getItem("user"));

  // Fetch all recipes from backend
  useEffect(() => {
    fetch("http://localhost:3001/api/recipes")
      .then((res) => res.json())
      .then((data) => {
        // Convert snake_case from backend to camelCase for frontend
        const formatted = data.map((r) => ({
          ...r,
          userAdded: r.user_added,
          userId: r.user_id,
        }));
        setRecipes(formatted);
      })
      .catch((error) => console.error("Error fetching recipes:", error));
  }, []);

  return (
    <div className="app-container">
      {/* Show header unless on login page */}
      {!isLoginPage && <CustomNavbar currentUser={currentUser} />}

      {/* Main content */}
      <div className="main-content">
        <Container className="mt-5">
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/home" element={<Home recipes={recipes} />} />
            <Route path="/add" element={<AddRecipe recipes={recipes} setRecipes={setRecipes} />} />
            <Route path="/recipe/:id" element={<RecipeDetail recipes={recipes} setRecipes={setRecipes} />} />
            <Route path="/my" element={<MyRecipes recipes={recipes} />} />
            <Route path="/about" element={<About />} />
            <Route path="/edit/:id" element={<EditRecipe recipes={recipes} setRecipes={setRecipes} />} />
          </Routes>
        </Container>
      </div>

      {!isLoginPage && <Footer />}
    </div>
  );

}

export default AppWrapper;
