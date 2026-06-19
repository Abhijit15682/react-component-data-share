type SelectedMessageProps = {
  selected: string;
};

export default function SelectedMessage({ selected }: SelectedMessageProps) {
  const message = selected
    ? `Selected checkbox: ${selected === 'optionA' ? 'Option A' : 'Option B'}`
    : 'No option selected yet.';

  return (
    <div className="selected-message">
      <h2>Selection status</h2>
      <p>{message}</p>
    </div>
  );
}
