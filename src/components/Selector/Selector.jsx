import React from 'react';
import Select from 'react-select';

function Selector({ options, selected, className, classNamePrefix }) {
  return (
    <Select
      options={options}
      className={className}
      classNamePrefix={classNamePrefix}
      defaultValue={selected}
    />
  );
}

export default Selector;
