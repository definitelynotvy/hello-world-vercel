import logo from './logo.svg';
import './App.css';

// src/App.js

import ContactForm from "./ContactForm";
import ImageSlider from "./ImageSlider";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ImageSlider />
        <ContactForm />
      </header>
    </div>
  );
}

export default App;

