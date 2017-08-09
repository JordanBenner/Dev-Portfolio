import React, {Component} from 'react';
import './App.css';

// Material UI
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {green400} from 'material-ui/styles/colors';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import MenuItem from 'material-ui/MenuItem';
import Drawer from 'material-ui/Drawer';


var BASE_URL = '';
if (process.env.PUBLIC_URL) {
  BASE_URL = '/tgp1'
}

class App extends Component {
  constructor(props) {
    super(props);

    this.full_nda = [/nda.docx];
    this.state = {
      show: this.filter(),
      showNda: ''
    };
  }

  // Checking for an NDA to verify ability to show
  searchUpdated(nda) {
    console.log(nda);
    this.setState({showNda: nda});

    var filter_contacts = this.filter(nda);
    this.setState({show: filter_nda});
  }

  filter (nda) {
    var verify = [];
    this.full_nda.forEach(function (nda) {
      c.index = index;
      if (nda === true) {
        return promt('Unable to view due to unfortunate restrictions!')
      } else
      return prompt('Welcome Back Timbergrove, Please sign in.');
