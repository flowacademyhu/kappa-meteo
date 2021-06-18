export default function MeasureCardForSM({
  titleText,
  text1,
  text2,
  text3,
  //text4,
  data1,
  data2,
  data3,
  //data4,
  footerText,
  lastData,
  unit,
}) {
  return (
    <div>
      <div class="card-body">
        <h5 class="card-title">{titleText}</h5>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">
          {text1} {data1} {unit}
        </li>
        <li class="list-group-item">
          {text2} {data2} {unit}
        </li>
        <li class="list-group-item">
          {text3} {data3} {unit}
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
