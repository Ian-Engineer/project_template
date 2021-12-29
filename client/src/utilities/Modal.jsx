import React from 'react';
import ReactDOM from 'react-dom';

export default class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.el = document.createElement('div');
  }

  componentDidMount() {
    document.body.appendChild(this.el);
  }

  componentWillUnmount() {
    document.body.removeChild(this.el);
  }

  render() {
    if (this.props.value) { // conditional rendering - if display is true
      this.el.setAttribute('class', 'ModalForm');
      return (
        <div className="Modal">
          {ReactDOM.createPortal(
            this.props.children,
            this.el,
          )}
        </div>
      );
    }
    this.el.setAttribute('class', '');
    return null;
  }
}