import { Meta } from '@storybook/react';
import { useState } from 'react';
import MultiSelect from './MultiSelect';

export default {
  title: 'Components/MultiSelect',
  component: MultiSelect,
  parameters: {
    layout: 'centered',
  },
} as Meta;

const options = [
  { label: '해당없음', value: 'grapes' },
  { label: '전문개인투자자', value: 'mango' },
  { label: '개인전문투자자', value: 'strawberry' },
  { label: '적격전문투자자', value: 'strawberry2' },
];

export const Example = () => {
  const [selected, setSelected] = useState([]);

  return (
    <div>
      <h1>자격증 유/무</h1>
      <pre>{JSON.stringify(selected, null, 2)}</pre>
      <MultiSelect
        disableSearch
        options={options}
        value={selected}
        hasSelectAll={false}
        onChange={setSelected}
        labelledBy="자격증을 선택해주세요"
        overrideStrings={{
          selectSomeItems: '자격증을 선택해주세요',
        }}
        ClearSelectedIcon={null}
        direction="top"
        isCheckboxShowing={false}
        closeOnChangedValue={true}
      />
    </div>
  );
};
