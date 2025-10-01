# Image Express

<p align="center">
  A modern, user-friendly web application for classifying images using a custom-trained Convolutional Neural Network (CNN).
</p>

---

## Project Description

Image Express is a fun and interactive web application designed to classify images of characters from **two fictional universes**: Pokémon and Thomas the Tank Engine.  

The app uses a **client-server architecture** for smooth performance:  

1. The user selects the character set they want to classify.  
2. They upload an image from their local device through a clean **SolidJS interface**.  
3. The frontend sends the image to a **Python backend server**, which processes it and feeds it into a **CNN model**.  
4. The classification result is sent back to the frontend and displayed to the user.  

This design ensures **scalability, easy maintenance, and potential for future expansion**.

---

## Project Features & Functionalities

### User-Facing Features
- **Category Selection:** Users choose whether to classify a Pokémon or a Thomas the Tank Engine character.  
- **Interactive Image Upload:** Drag-and-drop or file-picker interface for easy image upload (.jpg, .png, etc.).  
- **Real-Time Classification:** Quick feedback displaying the classification result prominently.

### Backend & Machine Learning Core
- **Image Classification CNN:** Trained on extensive datasets for high-accuracy predictions.  
- **RESTful API:** Enables seamless communication between SolidJS frontend and Python backend.  
- **Image Preprocessing:** Automatic resizing, normalization, and formatting for CNN compatibility.

---

## Use Case & Vision

- **Entertainment & Engagement:** Fun app for fans to test or learn character names.  
- **Educational Extension:** Can be extended as a learning tool for species, objects, or characters, or as the basis for a trivia game.

---

<p align="center">
  <b>Built with:</b> SolidJS (Frontend) | Python & CNN (Backend)
</p>
