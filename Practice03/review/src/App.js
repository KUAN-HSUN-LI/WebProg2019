import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (

      <div class="environment">
        <div class="card">

          <header class="upper-section">
            <div class="text">
              <h1 class="dish-name">Salmon Steak</h1>
              <p class="price">420</p>
            </div>
          </header>

          <section class="lower-section">
            <h2 class="section-title">Ingredient</h2>
            <ul class="ingredients">
              <li class="done">Salmon</li>
              <li class="done">Tomato</li>
              <li class="done">Lemon Juice</li>
              <li>Mustard Sauce</li>
              <li>Green onion</li>
              <li class="done">Asparagus</li>
              <li>Garlic salt</li>
            </ul>
            <small>Grilled Salmon Steaks with Asparagus
                    Dinner from the grill is what summer is all about, the whole family will love this easy and super-healthy meal.
            </small>
          </section>
        </div>
      </div>

    );
  }
}

export default App;
