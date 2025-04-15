import './Button.css';

const Button = ({ 
  children, 
  onClick, 
  variant = 'primary', 
  disabled = false,
  type = 'button'
}) => {
  return (
    <button
      className={`button ${variant}`}
      onClick={onClick}
      disabled={disabled}
      type={type}
    >
      {children}
    </button>
  );
};

export default Button;