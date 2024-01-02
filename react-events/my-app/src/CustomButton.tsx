type Props = {
  text: string;
  color: string;
  onCustomClick: (text: string) => void;
};
export function CustomButton({ text, color, onCustomClick }: Props) {
  function handleClick() {
    onCustomClick(text);
  }

  return (
    <button
      onClick={handleClick}
      style={{
        backgroundColor: color,
      }}>
      {text}
    </button>
  );
}
