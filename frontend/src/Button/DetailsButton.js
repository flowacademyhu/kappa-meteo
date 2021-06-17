export default function DetailsButton({ type, onClick, text }) {
  return (
    <button className={type} onClick={onClick}>
      {text}
    </button>
  );
}
