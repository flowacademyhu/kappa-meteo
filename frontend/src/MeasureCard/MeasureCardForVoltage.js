export default function MeasureCardForVoltage({
    titleText,
    text,
    text1,
    text2,
    footerText,
    lastData,
    unit,
    voltage1,
    voltage2
  }) {
    return (
      <div>
        <div className="card-body">
          <h5 className="card-title">{titleText}</h5>
          <h3 className="card-text">
            {text} {unit}
          </h3>
        </div>
        <ul class="list-group list-group-flush">
        <li class="list-group-item">
          {text1} {voltage1} {unit}
        </li>
        <li class="list-group-item">
          {text2} {voltage2} {unit}
        </li>
        </ul>
        <div className="card-footer">
          <p>
            {lastData} {footerText}
          </p>
        </div>
      </div>
    );
  }
  