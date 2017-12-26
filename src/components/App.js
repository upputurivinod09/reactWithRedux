import React, {PropTypes} from 'react';
import { Link, IndexLink } from 'react-router';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import IconButton from 'material-ui/IconButton';
import Header from './common/Header';
import {connect} from 'react-redux';

const muiTheme = getMuiTheme({
  palette: {
    primaryColor: '#016bc6'
  }
});

class App extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      open: false
    };

    this.handleToggle = this.handleToggle.bind(this);
  }

  getChildContext() {
    return {
      muiTheme: muiTheme
    };
  }

  handleToggle() {
    this.setState({open: !this.state.open});
  }

  render() {
		return (
				<div className="container-full">
          <AppBar title={"MyLifeApp"} onLeftIconButtonClick={this.handleToggle} />
					<Drawer docked={false} open={this.state.open} onRequestChange={(open) => this.setState({open})}>
            <AppBar showMenuIconButton={false}
                    iconElementRight={<IconButton><NavigationClose /></IconButton>}
                    onRightIconButtonClick={this.handleToggle}
            />
            <MenuItem onClick={this.handleToggle}><Link to="/persons" activeClassName="active">Persons</Link></MenuItem>
            <MenuItem onTouchTap={this.handleToggle}>details</MenuItem>
            <MenuItem onTouchTap={this.handleToggle}>Address</MenuItem>
            <MenuItem onTouchTap={this.handleToggle}>Empoyer</MenuItem>
            <MenuItem onTouchTap={this.handleToggle}>Education</MenuItem>
            <MenuItem onTouchTap={this.handleToggle}>Visa Status</MenuItem>
            <MenuItem onTouchTap={this.handleToggle}>Loans</MenuItem>
            <MenuItem onTouchTap={this.handleToggle}>Jobs</MenuItem>
            <MenuItem onTouchTap={this.handleToggle}>Insurances</MenuItem>
            <MenuItem onTouchTap={this.handleToggle}>Tickets</MenuItem>
            <MenuItem onTouchTap={this.handleToggle}>Medical</MenuItem>
            <MenuItem onTouchTap={this.handleToggle}>Tax</MenuItem>
          </Drawer>
          <div>
            {this.props.children}
          </div>
				</div>
    );
	}
}

App.propTypes = {
	children: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired
};

App.childContextTypes = {
  muiTheme: React.PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    loading: state.ajaxCallsInProgress > 0
  };
}

export default connect(mapStateToProps)(App);
