interface DirectionProps {
  onClick: () => void;
}

export function PrevButton({ onClick }: DirectionProps) {
  return <button onClick={onClick}>Prev</button>;
}
