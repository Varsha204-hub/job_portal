import Button from './Button';
import './Error.css';

const Error = ({ message, onRetry }) => {
  return (
    <div className="error-container">
      <div className="error-message">{message}</div>
      {onRetry && (
        <Button onClick={onRetry}>Retry</Button>
      )}
    </div>
  );
};

export default Error;