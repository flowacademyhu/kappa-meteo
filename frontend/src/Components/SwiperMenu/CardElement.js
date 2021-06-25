import { IconContext } from 'react-icons';

export default function CardElement({ text, Icon }) {
  return (
    <>
      <div className="card">
        {Icon && (
          <IconContext.Provider value={{ color: '#c54b3c' }}>
            {<Icon size={200} />}
          </IconContext.Provider>
        )}
        <div className="card-footer">
          <h3>{text}</h3>
        </div>
      </div>
    </>
  );
}
