import React from 'react';
import './Notify.css';

function Notify({ error, message, setOpenNotify, handleClose }) {
    const close = () => {
        if(handleClose) {
            handleClose();
            setOpenNotify(false)
        } else {
            setOpenNotify(false)
        }
    }
    return (

        <div class="modal is-active show fade modal-noti modal-alert" style={{zIndex:'1000000'}}>
            <div class="modal-dialog modal-noti" role="document" style={{zIndex:'1000000'}}>
                <div class="modal-content" style={{zIndex:'1000000'}}>
                    <span class="close" data-dismiss="modal" onClick={() => setOpenNotify(false)}>x</span>
                    <div class="modal-header">
                        <div class="txt-bold font13">
                            <span class="txt-red">Pizza Home</span> Thông báo
                        </div>
                    </div>
                    <div class="modal-body">
                        <p class="font15"><span>{message}</span></p>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-red align-right" onClick={close}>Ok</button>
                    </div>
                </div>
            </div>
            <div class="modal-backdrop fade under-modal show"></div>
        </div>
    )
}

export default Notify;
