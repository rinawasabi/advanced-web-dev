import { useState } from "react";
import { Row, Col, Form } from "react-bootstrap";
import RecipeCard from "../components/RecipeCard";

// Home component that displays a list of recipes as cards
function Home({ recipes }) {
  // State to store the current search input
  const [searchQuery, setSearchQuery] = useState("");

  // Filter the recipes based on search input (case-insensitive)
  const filteredRecipes = recipes.filter((recipe) =>
    recipe.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    recipe.ingredients.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      {/* Search input field */}
      <Form.Control
        type="text"
        placeholder="Search by title or ingredients"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        size="sm"
        className="search-bar"
      />

      {/* Display filtered recipes in a responsive grid */}
      <Row xs={1} md={3} className="g-4 mt-3">
        {filteredRecipes.map((recipe) => (
          <Col key={recipe.id}>
            <RecipeCard recipe={recipe} />
          </Col>
        ))}
      </Row>
    </>
  );
}

export default Home;
