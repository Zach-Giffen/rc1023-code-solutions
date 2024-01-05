interface DirectionProps {
  onClick: () => void;
}

export function NextButton({ onClick }: DirectionProps) {
  return <button onClick={onClick}>Next</button>;
}
