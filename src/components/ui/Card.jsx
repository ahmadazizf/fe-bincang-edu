import React from 'react';
import { cn } from '../../utils/helpers';

export default function Card({
  children,
  className = '',
  hoverEffect = false,
  ...props
}) {
  return (
    <div
      className={cn(
        'bg-white rounded-xl border border-gray-100 shadow-md p-6 text-left transition duration-300',
        hoverEffect && 'hover:shadow-xl hover:-translate-y-1 hover:border-blue-200',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
