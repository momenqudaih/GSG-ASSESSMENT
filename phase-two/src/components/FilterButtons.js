import React from 'react';

function FilterButtons({categories, onFilter}) {
    return (
        <div className="filter-section">
            {categories.map((category) => (
                <button key={category} onClick={() => onFilter(category)}>
                    {category}
                </button>
            ))}
        </div>
    );
}

export default FilterButtons;
