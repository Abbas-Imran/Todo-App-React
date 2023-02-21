function Model(props) {
  return (
    <div className="modal">
      <p>Are you Sure?</p>
      <button className="btn btn--alt" onClick={props.onCancel}>Cancel</button>
      <button className="btn" onClick={props.onConfirm}>Confirm</button>
    </div>
  );
}

export default Model;