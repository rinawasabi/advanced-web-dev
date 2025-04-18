import React from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./RecipeCard.css";

// Displays a single recipe card
function RecipeCard({ recipe, onDelete }) {
  const placeholderImage = "/fallback.png";

  return (
    <Link
      to={`/recipe/${recipe.id}`} // Go to recipe detail page
      style={{ textDecoration: "none", color: "inherit" }}
    >
      <Card className="recipe-card h-100">
        <div className="recipe-img-wrapper">
          <Card.Img
            src={recipe.image ? recipe.image : placeholderImage}
            alt={recipe.title}
            className="recipe-img"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = placeholderImage;
            }}
          />

          {/* Delete button if handler is provided */}
          {onDelete && (
            <Button
              variant="danger"
              size="sm"
              onClick={(e) => {
                e.preventDefault(); // Prevent navigation on delete
                onDelete(recipe.id);
              }}
              className="delete-btn"
            >
              ×
            </Button>
          )}
        </div>

        <Card.Body className="text-center">
          <Card.Title className="recipe-title">{recipe.title}</Card.Title>
        </Card.Body>
      </Card>
    </Link>
  );
}

export default RecipeCard;
