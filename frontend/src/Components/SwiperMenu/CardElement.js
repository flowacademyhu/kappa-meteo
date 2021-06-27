import { IconContext } from 'react-icons';

export default function CardElement({ text, Icon, descript }) {
  return (
    <>
      <div className="card">
        {Icon && (
          <IconContext.Provider value={{ color: '#c54b3c' }}>
            {<Icon size={200} />}
          </IconContext.Provider>
        )}
        <h3>{text}</h3>
        <div className="card-footer">
          <p class="title">{descript}</p>
        </div>
      </div>
    </>
  );
}
