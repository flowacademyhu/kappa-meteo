export default function MeasureCard({ titleText, text, footerText, lastData }) {
  return (
    <div>
      <div className="card-body">
        <h5 className="card-title">{titleText}</h5>
        <h3 className="card-text">{text}</h3>
      </div>
      <div className="card-footer">
        <p>
          {lastData} {footerText}
        </p>
      </div>
    </div>
  );
}
