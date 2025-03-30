import React from "react";
import "../assets/style/confirm_modal.css";

function ConfirmModal({
  isOpen = true,
  onClose = () => {
    isOpen = !isOpen;
  },
  title,
  message = `Çıxmaq istədikdən əminmisiniz? <strong><br>Bütün dəyişiklikləriniz silinəcək!</strong>`,
  cancelText = "İmtina",
  confirmText = "Təsdiq",
  onConfirm,
  confirmButtonClass = "confirm-button",
}) {
  if (!isOpen) return null;

  // Modal açıq olanda body scrollunu qadağan etmək
  React.useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  // Modal xaricində klikləndikdə bağlanma
  const handleBackdropClick = (e) => {
    if (e.target.classList.contains("modal-backdrop")) {
      onClose();
    }
  };

  return (
    <div className="modal-backdrop" onClick={handleBackdropClick}>
      <div className="modal">
        <div className="modal-header">
          <h3 className="modal-title">{title}</h3>
        </div>
        <div className="modal-content">
          <div className="modal-content">
            <p
              className="modal-message"
              dangerouslySetInnerHTML={{ __html: message }}
            />
          </div>
        </div>
        <div className="modal-actions">
          <button className="cancel-button" onClick={onClose}>
            {cancelText}
          </button>
          <button
            className={confirmButtonClass}
            onClick={() => {
              onConfirm();
              onClose();
            }}
          >
            {confirmText}
          </button>
        </div>
      </div>
    </div>
  );
}

export default ConfirmModal;
