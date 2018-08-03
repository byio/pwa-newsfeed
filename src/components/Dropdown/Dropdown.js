import React from 'react';

const Dropdown = ({
  sources,
  selectedSource,
}) => {

  const renderSources = () => {
    if (sources === undefined) {
      return null;
    }
    return sources.map(source => {
      return (
        <option
          key={source.id}
          value={source.id}
        >
          {source.name}
        </option>
      );
    });
  }

  return (
    <div className="dropdown">
      <select
        value={selectedSource}
      >
        <option value=""> - NEWS SOURCES - </option>
        {renderSources()}
      </select>
    </div>
  );

};

export default Dropdown;
