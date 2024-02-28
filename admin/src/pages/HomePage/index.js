/*
 *
 * HomePage
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
import pluginId from '../../pluginId';

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notificationPermission: Notification.permission
    };
    this.handleButtonClick = this.handleButtonClick.bind(this);
  }

  handleButtonClick() {
    if (this.state.notificationPermission !== 'granted') {
      Notification.requestPermission().then(permission => {
        this.setState({ notificationPermission: permission });
        if (permission === 'granted') {
          new Notification('Notificaciones activadas');
        }
      });
    } else {
      new Notification('Notificaciones ya están activadas');
    }
  }

  render() {
    const buttonStyle = {
      height: '2rem',
      background: '#4945ff',
      padding: '8px',
      paddingLeft: '16px',
      paddingRight: '16px',
      borderRadius: '4px',
      borderColor: '#4945ff',
      border: '1px solid #4945ff',
      cursor: 'pointer',
      color: 'white'
    };

    return (
      <button style={buttonStyle} onClick={this.handleButtonClick}>
        Activar Notificaciones
      </button>
    );
  }
}

export default HomePage;
