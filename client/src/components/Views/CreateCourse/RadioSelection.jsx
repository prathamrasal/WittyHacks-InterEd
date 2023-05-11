import { FormControlLabel, Radio, RadioGroup } from '@mui/material';
import React from 'react';

const RadioSelection = ({ options,label }) => {
  return (
    <div>
      <div className="text-base w-full font-[500] mb-3">{label}</div>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
      >
        {options?.map((item) => (
          <div className="py-1 px-3 mr-5 bg-gray-200 rounded-md">
            <FormControlLabel
              value={item?.value}
              control={<Radio />}
              label={item?.label}
            />
          </div>
        ))}
      </RadioGroup>
    </div>
  );
};

export default RadioSelection;
