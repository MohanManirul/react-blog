import React from "react";

function MyComponent({ isEnabled }) {
  return (
    <div>
      <h3>Child Component</h3>
      {isEnabled ? <p>Enabled: ✅</p> : <p>Disabled: ❌</p>}
    </div>
  );
}

export default MyComponent;
