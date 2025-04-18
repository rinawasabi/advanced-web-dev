import React, { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import RecipeCard from "../components/RecipeCard";
import "../styles/MyRecipes.css";

function MyRecipes() {
  const currentUser = JSON.parse(localStorage.getItem("user"));
  const [myRecipes, setMyRecipes] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch all recipes and filter only the ones added by the current user
  useEffect(() => {
    const fetchMyRecipes = async () => {
      try {
        const res = await fetch("https://makunote-backend-rina.azurewebsites.net/api/recipes");
        const data = await res.json();
        const filtered = data.filter(
          (recipe) => recipe.user_id === Number(currentUser?.id)
        );
        setMyRecipes(filtered);
        setLoading(false);
      } catch (err) {
        console.error("Failed to load recipes:", err);
        setLoading(false);
      }
    };

    fetchMyRecipes();
  }, [currentUser]);

  if (loading) return <p>Loading your recipes...</p>;

  return (
    <div className="main-content">
      {/* Page title */}
      <h2 className="mb-4">📒 My Recipes</h2>

      {/* If no recipes found, show fallback message */}
      {myRecipes.length === 0 ? (
        <div style={{ minHeight: "50vh" }}>
          <p>You haven’t added any recipes yet.</p>
        </div>
      ) : (
        // If recipes exist, show them in a responsive grid

        <Row xs={1} md={3} className="g-4">
          {myRecipes.map((recipe) => (
            <Col key={recipe.id}>
              <RecipeCard recipe={recipe} />
            </Col>
          ))}
        </Row>
      )}
    </div>
  );
}

export default MyRecipes;


