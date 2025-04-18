import React from "react";
import { Container } from "react-bootstrap";
import "../styles/About.css";

function About() {
  return (
    <Container className="mt-5 about-container">
      <h2>About Makunote</h2>

      {/* Description section with margin */}
      <p className="about-description">
        Makunote is a cozy recipe-sharing platform made for busy people, beginners,
        and home chefs. Whether you're storing your daily meals or exploring
        simple ideas from others, this app is your personal food notebook.
      </p>

      <h4 className="about-heading">How to Use</h4>

      <ul className="about-steps">
        <li className="about-step">📝 Log in with your name</li>
        <li className="about-step">📸 Add your own recipes with images, ingredients, and steps</li>
        <li className="about-step">📒 View all recipes or filter by your own under "My Recipes"</li>
        <li className="about-step">✏️ Edit or delete your posts anytime</li>
      </ul>

      <p className="about-footer">
        Made with ❤️ using React, Node.js, and PostgreSQL on Azure.
      </p>
    </Container>
  );
}

export default About;
