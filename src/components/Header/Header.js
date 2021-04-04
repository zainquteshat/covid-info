import React from 'react';
import {Link} from 'react-router-dom';
import covidLogo from '../../img/coronavirus.svg';
import classes from './Header.module.scss';
// import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';

const Header = () =>{
    return(
        <div className={classes.Header}>
            <Container>
                <div className={classes.HeaderContent}>
                    <div>
                        <Link to="/">
                            <img src={covidLogo} width="70"/>
                        </Link>
                    </div>
                    <ul>
                        <li> <Link to="/">Stats</Link> </li>
                        <li> <Link to="/lists">Lists</Link> </li>
                    </ul>
                </div>
            </Container>
        </div>
    );
}
export default Header;