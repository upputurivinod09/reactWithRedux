import React, {PropTypes} from 'react';
import Header from './common/Header';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

const muiTheme = getMuiTheme({
  palette: {
    primaryColor: '#016bc6'
  }
});

class App extends React.Component {
	getChildContext() {
    return {  muiTheme: muiTheme  };
  }

  render () {
		return (
				<div className="container-fluid">
					<Header/>
					{this.props.children}
				</div>
			);
	}
}

App.propTypes = {
	children: PropTypes.object.isRequired
};

App.childContextTypes = {
  muiTheme: React.PropTypes.object.isRequired
};

export default App;
