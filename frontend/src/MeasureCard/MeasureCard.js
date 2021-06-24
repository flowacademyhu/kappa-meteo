import { IconContext } from 'react-icons';

export default function MeasureCard({
  titleText,
  text,
  footerText,
  unit,
  Icon,
}) {
  return (
    <div className="zoom">
      <div className="card">
        <IconContext.Provider value={{ color: '#c54b3c' }}>
          {<Icon size={100} />}
        </IconContext.Provider>
        <div className="card-body">
          <h5 className="card-title">{titleText}</h5>
          <h3 className="card-text">
            {text} {unit}
          </h3>
        </div>
        <div className="card-footer">
          <p>
            Utolsó mért adat:
            <br />
            {footerText}
          </p>
        </div>
      </div>
    </div>
  );
}
