import React from 'react'

import Logo from '../../Logo/Logo'
import NavigationItems from '../NavigationItems/NavigationItems'
import BackDrop from '../../Backdrop/Backdrop'
import classes from './SideDrawer.css'

const sideDrawer = (props) => {
    let attachedClasses = [classes.SideDrawer, classes.Close];
    if(props.show){
        attachedClasses = [classes.SideDrawer, classes.Open];
    }

    return (
        <>
            <BackDrop show={props.show} modalCloser={props.closed}/>
            <div className={attachedClasses.join(' ')}>
                <Logo height="auto"/>
                <nav>
                    <NavigationItems/>
                </nav>
            </div>
        </>
    );
};

export default sideDrawer;