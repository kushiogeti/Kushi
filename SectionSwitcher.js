import React from 'react';

function SectionSwitcher({ setCurrentProject }) {
  return (
    <div className="section-switcher">
      <button onClick={() => setCurrentProject('Academic and Research')}>
        Academic and Research
      </button>
      <button onClick={() => setCurrentProject('Work')}>Work</button>
    </div>
  );
}

export default SectionSwitcher;