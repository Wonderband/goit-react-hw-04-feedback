import PropTypes from 'prop-types';
// import styles from './Notification.module.css';
export const Notification = ({ showMessage, message }) =>
  showMessage && <p>{message}</p>;

Notification.propTypes = {
  showMessage: PropTypes.bool.isRequired,
  message: PropTypes.string.isRequired,
};
