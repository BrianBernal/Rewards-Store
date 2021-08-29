import "./modal.scss";

function Modal({
  show = false,
  type = "success", // or "error"
  message = "successful message example 5px 2px 2px #999999; 5px 2px 2px #999999; 5px 2px 2px #999999;",
  okCallback = () => {},
}) {
  if (!show) return null;
  return (
    <div className="bg-modal">
      <div className="modal" type={type}>
        <span className="emoji">{type === "success" ? "🤩" : "😕"}</span>
        <h3 className="title">{type === "success" ? "Success!" : "Error"}</h3>
        <span>{message}</span>
        <button type={type} className="ok-button" onClick={okCallback}>
          Got it!
        </button>
      </div>
    </div>
  );
}

export default Modal;
