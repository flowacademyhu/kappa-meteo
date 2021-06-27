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
        <h2>{text}</h2>
        <div className="card-footer">
          <p class="title">{descript}</p>
        </div>
      </div>
    </>
  );
}
