import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Form, Container } from "react-bootstrap";
import "../styles/AddRecipe.css"; // Reuse AddRecipe form styles

// Component for editing an existing recipe
function EditRecipe({ recipes, setRecipes }) {
  const { id } = useParams(); // Get recipe ID from URL
  const navigate = useNavigate();
  const currentUser = JSON.parse(localStorage.getItem("user")); // Get logged-in user
  const recipeToEdit = recipes.find((r) => r.id === parseInt(id)); // Find recipe by ID

  // State for form fields
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [instructions, setInstructions] = useState("");

  // Filling form with recipe data when loaded
  useEffect(() => {
    if (recipeToEdit) {
      setTitle(recipeToEdit.title);
      setImage(recipeToEdit.image);
      setIngredients(recipeToEdit.ingredients);
      setInstructions(recipeToEdit.instructions);
    }
  }, [recipeToEdit]);

  // Handle update form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    const updatedRecipe = {
      title,
      image,
      ingredients,
      instructions,
      userAdded: true,
      userId: currentUser?.id,
    };

    // Send PUT request to backend
    fetch(`https://makunote-backend-rina.azurewebsites.net/api/recipes/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedRecipe),
    })
      .then((res) => {
        if (!res.ok) throw new Error("Failed to update recipe");
        return res.json();
      })
      .then(() => {
        // Re-fetch recipes and update state
        fetch("https://makunote-backend-rina.azurewebsites.net/api/recipes")
          .then((res) => res.json())
          .then((updatedRecipes) => {
            const formatted = updatedRecipes.map((r) => ({
              ...r,
              userAdded: r.user_added,
              userId: r.user_id,
            }));
            setRecipes(formatted);
            navigate(`/recipe/${id}`); // Navigate back to detail view
          });
      })
      .catch((err) => {
        console.error("Error updating recipe:", err);
        alert("Update failed");
      });
  };

  // Show fallback if recipe not found
  if (!recipeToEdit) {
    return <h2 className="text-center mt-5">Recipe not found</h2>;
  }

  return (
    <Container className="add-recipe-container">
      <h2>✏️ Edit Recipe</h2>
      <Form onSubmit={handleSubmit}>
        {/* Title field */}
        <Form.Group>
          <Form.Label className="form-label">Recipe Title</Form.Label>
          <Form.Control
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            className="form-control"
          />
        </Form.Group>

        {/* Image URL field */}
        <Form.Group>
          <Form.Label className="form-label">Image URL</Form.Label>
          <Form.Control
            type="text"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            className="form-control"
          />
        </Form.Group>

        {/* Ingredients field */}
        <Form.Group>
          <Form.Label className="form-label">Ingredients</Form.Label>
          <Form.Control
            as="textarea"
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            className="form-control ingredients-textarea"
            required
          />
        </Form.Group>

        {/* Instructions field */}
        <Form.Group>
          <Form.Label className="form-label">Instructions</Form.Label>
          <Form.Control
            as="textarea"
            value={instructions}
            onChange={(e) => setInstructions(e.target.value)}
            className="form-control instructions-textarea"
            required
          />
        </Form.Group>

        {/* Form buttons */}
        <div className="form-buttons">
          <button type="button" className="btn-cancel" onClick={() => navigate(-1)}>
            Cancel
          </button>
          <button type="submit" className="btn-submit">
            Save
          </button>
        </div>
      </Form>
    </Container>
  );
}

export default EditRecipe;
