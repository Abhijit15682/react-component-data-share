type Option = {
  id: string;
  label: string;
};

type CheckboxSelectorProps = {
  options: Option[];
  selected: string;
  onChange: (value: string) => void;
};

export default function CheckboxSelector({ options, selected, onChange }: CheckboxSelectorProps) {
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
