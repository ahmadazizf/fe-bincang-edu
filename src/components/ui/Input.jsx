import React, { forwardRef } from 'react';
import { cn } from '../../utils/helpers';

const Input = forwardRef(function Input(
  {
    label,
    id,
    error,
    helperText,
    className = '',
    required = false,
    ...props
  },
  ref
) {
  return (
    <div className="w-full text-left">
      {label && (
        <label htmlFor={id} className="block text-sm font-semibold text-gray-700 mb-1.5">
          {label} {required && <span className="text-red-500">*</span>}
        </label>
      )}
      <input
        ref={ref}
        id={id}
        required={required}
        className={cn(
          'w-full px-3.5 py-2.5 bg-white border border-gray-300 rounded-lg text-gray-900 placeholder-gray-400 shadow-sm transition duration-150 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm',
          error && 'border-red-500 focus:ring-red-500 focus:border-red-500',
          className
        )}
        {...props}
      />
      {error && <p className="mt-1 text-xs text-red-600">{error}</p>}
      {helperText && !error && <p className="mt-1 text-xs text-gray-500">{helperText}</p>}
    </div>
  );
});

export default Input;
