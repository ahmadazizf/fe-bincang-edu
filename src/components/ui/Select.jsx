import React from 'react';
import { cn } from '../../utils/helpers';

export default function Select({
  label,
  id,
  options = [],
  error,
  helperText,
  className = '',
  required = false,
  ...props
}) {
  return (
    <div className="w-full text-left">
      {label && (
        <label htmlFor={id} className="block text-sm font-semibold text-gray-700 mb-1.5">
          {label} {required && <span className="text-red-500">*</span>}
        </label>
      )}
      <select
        id={id}
        required={required}
        className={cn(
          'w-full px-3.5 py-2.5 bg-white border border-gray-300 rounded-lg text-gray-900 shadow-sm transition duration-150 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm cursor-pointer',
          error && 'border-red-500 focus:ring-red-500 focus:border-red-500',
          className
        )}
        {...props}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {error && <p className="mt-1 text-xs text-red-600">{error}</p>}
      {helperText && !error && <p className="mt-1 text-xs text-gray-500">{helperText}</p>}
    </div>
  );
}
