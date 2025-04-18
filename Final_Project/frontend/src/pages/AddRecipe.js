import React, { useState } from "react";
import { Form, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "../styles/AddRecipe.css";

function AddRecipe({ setRecipes }) {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [instructions, setInstructions] = useState("");

  const currentUser = JSON.parse(localStorage.getItem("user"));
  const navigate = useNavigate();

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    const newRecipe = {
      title,
      image,
      ingredients,
      instructions,
      userAdded: true,
      userId: currentUser?.id,
    };

    fetch("http://localhost:3001/api/recipes", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newRecipe),
    })
      .then((res) => res.json())
      .then(() => {
        fetch("http://localhost:3001/api/recipes")
          .then((res) => res.json())
          .then((updatedRecipes) => {
            const formatted = updatedRecipes.map((r) => ({
              ...r,
              userAdded: r.user_added,
              userId: r.user_id,
            }));

            setRecipes(formatted);
            setTitle("");
            setImage("");
            setIngredients("");
            setInstructions("");
            navigate("/home");
          });

      })
      .catch((error) => console.error("Error saving recipe:", error));
  };

  return (
    <Container className="add-recipe-container">
      <h2>📝 Add New Recipe</h2>
      <Form onSubmit={handleSubmit}>
        {/* Title */}
        <Form.Group>
          <Form.Label className="form-label">
            Recipe name <span className="required-asterisk">*</span>
          </Form.Label>
          <Form.Control
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            className="form-control"
          />
        </Form.Group>

        {/* Image URL */}
        <Form.Group>
          <Form.Label className="form-label">Image URL</Form.Label>
          <Form.Control
            type="text"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            className="form-control"
          />
        </Form.Group>

        {/* Ingredients */}
        <Form.Group>
          <Form.Label className="form-label">
            Ingredients <span className="required-asterisk">*</span>
          </Form.Label>
          <Form.Control
            as="textarea"
            name="ingredients"
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            className="form-control ingredients-textarea"
            required
            placeholder={`e.g.\n- 2 eggs\n- 1 cup milk\n- 1 tbsp sugar`}
          />
        </Form.Group>

        {/* Instructions */}
        <Form.Group>
          <Form.Label className="form-label">
            Instructions <span className="required-asterisk">*</span>
          </Form.Label>
          <Form.Control
            as="textarea"
            name="instructions"
            value={instructions}
            onChange={(e) => setInstructions(e.target.value)}
            className="form-control instructions-textarea"
            required
            placeholder={`e.g.\n1. Preheat oven to 180°C\n2. Mix ingredients\n3. Bake for 30 minutes`}
          />
        </Form.Group>

        {/* Buttons */}
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

export default AddRecipe;
