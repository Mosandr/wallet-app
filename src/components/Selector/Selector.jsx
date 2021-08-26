import React from 'react';
import Select from 'react-select';

function Selector({ options, selected }) {
  return (
    <Select
      options={options}
      className="react-select-container"
      classNamePrefix="react-select"
      defaultValue={selected}
    />
  );
}

export default Selector;
