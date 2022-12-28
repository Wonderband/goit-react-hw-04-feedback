import PropTypes from 'prop-types';
import css from './Notification.module.css';
export const Notification = ({ showMessage, message }) =>
  showMessage && <p className={css.warning}>{message}</p>;

Notification.propTypes = {
  showMessage: PropTypes.bool.isRequired,
  message: PropTypes.string.isRequired,
};
