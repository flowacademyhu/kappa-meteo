const Loader = () => (
  <div className="row align-items center">
    <button className="btn btn-success" type="button" disabled>
      <span
        className="spinner-grow spinner-grow-sm"
        role="status"
        aria-hidden="true"
      ></span>
      A többi állomás betöltése folyamatban...
    </button>
  </div>
);

export default Loader;
