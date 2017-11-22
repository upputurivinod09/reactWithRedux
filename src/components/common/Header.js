import React,{PropTypes} from 'react';
import { Link, IndexLink } from 'react-router';

const Header = () => {
    return (
      <nav>
        <IndexLink to="/" activeClassName="active">Home</IndexLink>
        {" | "}
        <IndexLink to="/courses" activeClassName="active">Courses</IndexLink>
        {" | "}
        <IndexLink to="/authors" activeClassName="active">Authors</IndexLink>
        {" | "}
        <Link to="/about" activeClassName="active">About</Link>
      </nav>
    );
};

export default Header;
