import React, {Component} from 'react'
import classes from './Layout.css'
import Toolbar from '../UI/Navigation/Toolbar/Toolbar'
import SideDrawer from '../UI/Navigation/SideDrawer/SideDrawer'

class Layout extends Component{
    state = {
        showSideDrawer: false
    };

    sideDrawerCloserHandler = () => {
        this.setState({showSideDrawer: false});
    };

    DrawerToggler = () => {
        this.setState({showSideDrawer: !this.state.showSideDrawer});
    };

    render() {
        return(
            <>
                <Toolbar
                    drawerToggle={this.DrawerToggler}
                />
                <SideDrawer
                    show={this.state.showSideDrawer}
                    closed={this.sideDrawerCloserHandler}
                />
                <main className={classes.Content}>
                    {this.props.children}
                </main>
            </>
        )
    };
}

export default Layout