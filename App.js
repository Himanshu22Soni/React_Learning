import React from "react";
import ReactDOM from "react-dom/client";

//H1 element created using React element
const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Namaste Himanshu ❤️"
);

//H1 element created using JSX
const jsxHeading = <h1 id="heading">Namaste Himanshu from JSX ❤️</h1>;
const NestedElements = () => (
  <div id="heading" className="head">
    <h1>Namaste Himanshu ❤️</h1>
    <h2>Namaste Himanshu from JSX ❤️</h2>
  </div>
);

//Functional Component
const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        {/* Logo */}
        <div className="logo">Namaste Himanshu ❤️</div>

        {/* Search Bar */}
        <div className="search-bar">
          <input type="text" placeholder="Search..." className="search-input" />
        </div>

        {/* User Icon */}
        <div className="user-icon">🙎‍♂️</div>
      </div>
    </header>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(heading);
// root.render(nestedElements);
root.render(<Header />);
