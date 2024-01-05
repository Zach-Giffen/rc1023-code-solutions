interface IndicatorsProps {
  items: RotatingBannerProps['items'];
  currentIndex: number;
  onClick: () => void;
}
export function Indicators({ items, currentIndex, onClick }: IndicatorsProps) {
  console.log('items from indicator', items);
  return (
    <>
      {items.map((item, index) => (
        <button
          key={index}
          style={{ backgroundColor: currentIndex === index ? 'lightblue' : '' }}
          onClick={() => onClick(index)}>
          {index}
        </button>
      ))}
    </>
  );
}
