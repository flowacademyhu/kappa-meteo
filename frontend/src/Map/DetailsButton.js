export default function DetailsButton({ onClick, text }) {
  return (
    <button className="btn btn-outline-success m-1" onClick={onClick}>
      {text}
    </button>
  );
}
