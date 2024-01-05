export function Indicators({ items }) {
  return (
    <>
      {items.map((item, index) => (
        <button key={index}>{index}</button>
      ))}
    </>
  );
}
