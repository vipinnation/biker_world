import React from 'react';
import { FaCircleNotch } from 'react-icons/fa';

type Props = {
  className?: string;
  title: string;
  type?: 'button' | 'submit' | 'reset';
  loading?: boolean;
  onClick?: () => any;
};

const Button: React.FC<Props> = ({ title, className, type, loading, onClick }) => {
  return (
    <button
      onClick={onClick}
      type={type}
      disabled={loading}
      className={`block w-full mx-auto flex items-center justify-center ${
        loading == true ? 'bg-violet-400 cursor-not-allowed' : 'bg-primary hover:bg-violet-400'
      }  text-black rounded-lg p-3 font-semibold ${className}`}
    >
      {loading == true ? <FaCircleNotch className="text-white animate-spin mx-2" /> : null}
      {title}
    </button>
  );
};

export default Button;
