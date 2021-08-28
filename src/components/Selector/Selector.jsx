import React from 'react';
import Select from 'react-select';

function Selector({ options, selected, className, classNamePrefix, onChange }) {
  return (
    <Select
      options={options}
      className={className}
      classNamePrefix={classNamePrefix}
      defaultValue={selected}
      onChange={e => onChange(e)}
    />
  );
}

export default Selector;
