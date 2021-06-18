export default function MeasureCard({
  titleText,
  text,
  footerText,
  lastData,
  unit,
}) {
  return (
    <div>
      <div className="card-body">
        <h5 className="card-title">{titleText}</h5>
        <h3 className="card-text">
          {text} {unit}
        </h3>
      </div>
      <div className="card-footer">
        <p>
          {lastData} {footerText}
        </p>
      </div>
    </div>
  );
}
