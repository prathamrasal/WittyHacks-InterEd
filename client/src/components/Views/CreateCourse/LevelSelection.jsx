import { FormControlLabel, Radio, RadioGroup } from '@mui/material';
import React, { useState } from 'react';

const LEVELS = [
  {
    title: 'All Levels',
    value: 'all',
  },
  {
    title: 'Beginner',
    value: 'beginner',
  },
  {
    title: 'Intermediate',
    value: 'intermediate',
  },
  {
    title: 'Expert',
    value: 'expert',
  },
];

const LevelSelection = ({ className }) => {
  const [selected, setSelected] = useState(LEVELS[0].value);

  return (
    <div className={className}>
      <div className="text-sm font-[600] opacity-80  uppercase">LEVEL</div>
      <RadioGroup
        value={selected}
        onChange={(e, v) => setSelected(v)}
        row
        sx={{ gap: 2 }}
      >
        {LEVELS.map((item) => (
          <div
            className={`${
              item?.value == selected ? ' border-blue-500' : ''
            } px-5 py-1 mt-3 border-[2px] rounded-lg bg-white`}
          >
            <FormControlLabel
              value={item?.value}
              control={<Radio />}
              label={item?.title}
            />
          </div>
        ))}
      </RadioGroup>
    </div>
  );
};

export default LevelSelection;
