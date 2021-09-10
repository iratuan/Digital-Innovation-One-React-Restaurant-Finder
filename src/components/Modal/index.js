import React, { useEffect } from "react";
import Portal from "./Portal";
import { Overlay, Dialog } from "./styles";


const Modal = ({ children, open, onClose }) => {

    useEffect(() => {
        function onEsc(e) {
            if (e.keyCode === 27) onClose();
        }

        window.addEventListener('keydown', onEsc)

        return () => {
            window.removeEventListener('keydown', onEsc);
        }
    }, [onClose]);

    if (!open) return null;

    const handleOnClick = () => {
        onClose();
    }

    const handleDialogClick = (e) => {
        e.stopPropagation()
    }

    return (
        <Portal>
            <Overlay onClick={handleOnClick}>
                <Dialog onClick={handleDialogClick}>{children}</Dialog>
            </Overlay>
        </Portal>);
}

export default Modal;