import React, {Component} from 'react';
import PropTypes from 'prop-types';

class ContactCard extends Component {
  render() {
    return <div>
        <h1> {this.props.name}</h1>
        <ul>
            <li>mobile: {this.props.mobile}</li>
            <li>work: {this.props.work}</li>
            <li>email: {this.props.email}</li>
        </ul>
    </div>;
  }
}

ContactCard.propTypes = {
    name: PropTypes.string,
    mobile: PropTypes.string,
    work: PropTypes.string,
    email: PropTypes.string,
};

export default ContactCard;
