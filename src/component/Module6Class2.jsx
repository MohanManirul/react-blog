import React, { useState, useMemo } from "react";

const Module6Class2 = () => {

    const [searchTerm, setSearchTerm] = useState("");
    const [items] = useState([
      "apple",
      "banana",
      "cherry",
      "date",
      "elderberry",
      "fig",
      "grape",
    ]);
  
    // Expensive computation
    const filteredItems = useMemo(() => {
      console.log("Filtering items...");
      return items.filter((item) => item.toLowerCase().includes(searchTerm.toLowerCase()));
    }, [searchTerm, items]);

    
    return (
        <div>
            <p>Module 6 Class 2</p>
            <input
                type="text"
                placeholder="Search items..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <ul>
                {filteredItems.map((item, index) => (
                <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    );
};

export default Module6Class2;