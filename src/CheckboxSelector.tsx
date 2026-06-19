type CheckboxSelectorProps = {
  selected: string;
  onChange: (value: string) => void;
};

const options = [
  { id: 'optionA', label: 'Option A' },
  { id: 'optionB', label: 'Option B' },
];

export default function CheckboxSelector({ selected, onChange }: CheckboxSelectorProps) {
  return (
    <div className="checkbox-selector">
      <h2>Choose an option</h2>
      {options.map((option) => (
        <label key={option.id} className="checkbox-label">
          <input
            type="checkbox"
            checked={selected === option.id}
            onChange={() => onChange(option.id)}
          />
          {option.label}
        </label>
      ))}
    </div>
  );
}
