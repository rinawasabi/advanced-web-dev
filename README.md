* This repository contains the coursework for the 'Advanced Web Development' course at Centria University of Applied Sciences.


# Final Project: Makunote - Recipe Sharing Web Application

Makunote is a simple recipe-sharing web application developed as a final project for the Advanced Web Development course. The application allows users to browse, add, edit, deletえ and search recipes in a clean and user-friendly interface.

## Project Overview

The purpose of Makunote is to provide a lightweight platform where users can store, organize, and discover everyday recipes. The application is designed for casual users such as students, home cooks and beginner cooks who want a simple way to manage and share recipes.

## Main Features

* View all shared recipes
* Add a new recipe
* View recipe details
* Edit and delete own recipes
* Filter only own recipes
* Search recipes by title or ingredients
* Lightweight login using localStorage

## Technologies Used

* React
* React Router
* CSS
* Node.js
* Express
* PostgreSQL
* Azure App Service
* Vitest
* Playwright
* k6

## Technical Summary

The application follows a full-stack architecture with a React frontend, Node.js and Express backend, and PostgreSQL database hosted on Azure. The frontend communicates with the backend through REST API endpoints. User identification is handled with localStorage, and recipe ownership is used to control edit and delete permissions.

## Testing

The application was tested using unit testing, end-to-end testing, load testing, and user testing. Vitest was used for testing frontend logic, Playwright was used for browser-based user flows, and k6 was used for backend load testing. User testing was also conducted to check usability and identify possible UI improvements.
