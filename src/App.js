import { useState } from "react";

function App() {
  // ---- state -------------------------------------------------
  const [pepperoniIsChecked, setPepperoniIsChecked] = useState(false);

  // ---- handler -----------------------------------------------
  const togglePepperoni = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPepperoniIsChecked(e.target.checked);
  };

  // ---- render ------------------------------------------------
  return (
    <div>
      <h1>Select Pizza Toppings</h1>

      {/* checkbox + label */}
      <input
        type="checkbox"
        id="pepperoni"
        checked={pepperoniIsChecked}
        aria-checked={pepperoniIsChecked}
        onChange={togglePepperoni}
      />
      <label htmlFor="pepperoni">Add pepperoni</label>

      {/* toppings list */}
      <h2>Your Toppings:</h2>
      <ul>
        <li>Cheese</li>
        {pepperoniIsChecked && <li>Pepperoni</li>}
      </ul>
    </div>
  );
}

export default App;