import React from 'react';
import './Homepage.css'; // Import your CSS file for styling (optional)

function Homepage() {
  return (
    <div className="homepage">
      <header className="header">
        <h1>Welcome to  Cafe</h1>
        <p>Order your delicious food online!</p>
      </header>
      <main className="main">
        <section className="hero">
          <img src="banner.jpg" alt="Cafe banner image" /> {/* Replace with your banner image */}
          <h2>Order your favorite food for delivery or pickup.</h2>
          <button>Browse Menu</button>
        </section>
        <section className="highlights">
          <h2>Why Choose Us?</h2>
          <ul>
            <li>Fresh, high-quality ingredients</li>
            <li>Variety of delicious dishes</li>
            <li>Fast and convenient online ordering</li>
            <li>Friendly and reliable service</li>
          </ul>
        </section>
      </main>
    </div>
  );
}

export default Homepage;
     