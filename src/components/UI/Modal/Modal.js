import React, {useEffect} from 'react'
import classes from './Modal.css'
import Backdrop from '../Backdrop/Backdrop'

const Modal = (props) => {

    useEffect(()=>{}, [props.show]);

    return(
        <>
            <Backdrop show={props.show} modalCloser={props.modalCloser}/>
            <div
                style={{
                    transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
                    opacity: props.show ? 1 : 0,
                    visibility: props.show ? 'visible' : 'hidden'
                }}
                className={classes.Modal}
            >
                {props.children}
            </div>
        </>
    )
};

export default Modal