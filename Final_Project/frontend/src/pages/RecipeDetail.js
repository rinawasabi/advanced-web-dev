import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';
import "../styles/RecipeDetail.css";

function RecipeDetail({ recipes, setRecipes }) {
  const { id } = useParams();
  const navigate = useNavigate();

  // Get current user from localStorage
  const currentUser = JSON.parse(localStorage.getItem("user"));

  // Find the recipe by ID
  const recipe = recipes.find((r) => r.id === parseInt(id));

  // Check if the logged-in user is the owner
  const isOwner = recipe && currentUser && recipe.userId === currentUser.id;

  // Delete the recipe if confirmed
  const handleDelete = () => {
    Swal.fire({
      title: 'Delete this recipe?',
      text: "You won't be able to recover it later!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#f97316',
      cancelButtonColor: '#b2e2d2',
      confirmButtonText: 'Yes, delete',
      cancelButtonText: 'Cancel',
      background: '#fffaf0', 
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://makunote-backend-rina.azurewebsites.net/api/recipes/${id}`, {
          method: "DELETE",
        })
          .then((res) => {
            if (!res.ok) throw new Error("Failed to delete recipe");
  
            const updatedRecipes = recipes.filter((r) => r.id !== parseInt(id));
            setRecipes(updatedRecipes);
  
            Swal.fire({
              title: 'Deleted!',
              text: 'Your recipe has been removed.',
              icon: 'success',
              confirmButtonColor: '#f97316',
              background: '#fffaf0',
            });
  
            navigate("/home");
          })
          .catch((error) => {
            console.error("Error deleting recipe:", error);
            Swal.fire({
              title: 'Error',
              text: 'Failed to delete the recipe.',
              icon: 'error',
              confirmButtonColor: '#f97316',
              background: '#fffaf0',
            });
          });
      }
    });
  };

  // Show fallback if recipe not found
  if (!recipe) {
    return <h2 className="text-center mt-5">Recipe not found</h2>;
  }

  return (
    <div className="recipe-detail-container">
      {/* Back button */}
      <button className="btn-back" onClick={() => navigate("/home")}>
        ← Back
      </button>

      {/* Title */}
      <h2 className="text-center mb-4">{recipe.title}</h2>

      {/* Image */}
      <img
        src={recipe.image || "/fallback.png"}
        alt={recipe.title}
        className="recipe-detail-image"
        onError={(e) => {
          e.target.onerror = null;
          e.target.src = "/fallback.png";
        }}
      />

      {/* Ingredients */}
      {recipe.ingredients && (
        <>
          <h4 className="recipe-section-title">Ingredients</h4>
          <p style={{ whiteSpace: "pre-line" }}>{recipe.ingredients}</p>
        </>
      )}

      {/* Instructions */}
      {recipe.instructions && (
        <>
          <h4 className="recipe-section-title">Instructions</h4>
          <p style={{ whiteSpace: "pre-line" }}>{recipe.instructions}</p>
        </>
      )}

      {/* Edit and Delete buttons (only if owner) */}
      {isOwner && (
        <div className="recipe-detail-buttons">
          <button className="btn-edit" onClick={() => navigate(`/edit/${recipe.id}`)}>
            Edit
          </button>
          <button className="btn btn-outline-danger" onClick={handleDelete}>
            Delete
          </button>
        </div>
      )}
    </div>
  );
}

export default RecipeDetail;
