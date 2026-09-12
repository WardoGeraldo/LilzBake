import React from 'react';

interface BreadDoodleProps {
  type: 'roti-sisir' | 'roti-bantal' | 'croissant' | 'wheat' | 'sparkle' | 'cupcake';
  className?: string;
  size?: number;
  strokeColor?: string;
  strokeWidth?: number;
}

export const BreadDoodle: React.FC<BreadDoodleProps> = ({
  type,
  className = '',
  size = 48,
  strokeColor = '#a16c37',
  strokeWidth = 1.5,
}) => {
  switch (type) {
    case 'roti-sisir':
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 64 64"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={className}
          aria-hidden="true"
        >
          {/* Base rounded loaf */}
          <path
            d="M10 44C10 32 16 22 32 22C48 22 54 32 54 44C54 48 50 50 46 50H18C14 50 10 48 10 44Z"
            stroke={strokeColor}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* Sisir comb ridges */}
          <path
            d="M18 29V49M25 24V49M32 22V49M39 24V49M46 29V49"
            stroke={strokeColor}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          {/* Subtle bottom curve */}
          <path
            d="M12 45C18 47 46 47 52 45"
            stroke={strokeColor}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
        </svg>
      );

    case 'roti-bantal':
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 64 64"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={className}
          aria-hidden="true"
        >
          {/* Pillow bun body */}
          <path
            d="M12 36C12 24 20 18 32 18C44 18 52 24 52 36C52 44 46 48 32 48C18 48 12 44 12 36Z"
            stroke={strokeColor}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* Pillow quilted indentations */}
          <path
            d="M20 28C26 34 38 34 44 28"
            stroke={strokeColor}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            d="M24 35C28 39 36 39 40 35"
            stroke={strokeColor}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          {/* Steam/aroma lines */}
          <path
            d="M26 12C26 10 28 8 28 6M34 13C34 11 36 9 36 7M42 12C42 10 44 8 44 6"
            stroke={strokeColor}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
        </svg>
      );

    case 'croissant':
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 64 64"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={className}
          aria-hidden="true"
        >
          <path
            d="M12 42C10 38 12 32 18 28C24 24 38 24 46 28C52 32 54 38 52 42C48 45 44 43 40 38C36 33 28 33 24 38C20 43 16 45 12 42Z"
            stroke={strokeColor}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M26 26C27 31 29 36 30 39M38 26C37 31 35 36 34 39"
            stroke={strokeColor}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            d="M20 31C22 34 23 38 23 40M44 31C42 34 41 38 41 40"
            stroke={strokeColor}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
        </svg>
      );

    case 'wheat':
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 64 64"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={className}
          aria-hidden="true"
        >
          {/* Main stem */}
          <path
            d="M16 54C28 44 40 32 48 14"
            stroke={strokeColor}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          {/* Wheat grains */}
          <path
            d="M48 14C44 14 41 18 42 22C46 22 49 18 48 14Z"
            stroke={strokeColor}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M41 22C37 20 33 23 33 27C37 28 41 26 41 22Z"
            stroke={strokeColor}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M44 26C45 30 43 34 39 35C38 31 40 27 44 26Z"
            stroke={strokeColor}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M34 31C30 30 27 33 27 37C31 38 34 35 34 31Z"
            stroke={strokeColor}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M36 36C37 40 35 44 31 45C30 41 32 37 36 36Z"
            stroke={strokeColor}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );

    case 'sparkle':
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={className}
          aria-hidden="true"
        >
          <path
            d="M16 4C16 10.6 10.6 16 4 16C10.6 16 16 21.4 16 28C16 21.4 21.4 16 28 16C21.4 16 16 10.6 16 4Z"
            stroke={strokeColor}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );

    case 'cupcake':
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 64 64"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={className}
          aria-hidden="true"
        >
          <path
            d="M18 36L22 52H42L46 36"
            stroke={strokeColor}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M26 36L28 52M38 36L36 52"
            stroke={strokeColor}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            d="M16 36C14 36 12 33 13 31C14 27 19 26 21 28C22 24 28 21 32 21C36 21 42 24 43 28C45 26 50 27 51 31C52 33 50 36 48 36H16Z"
            stroke={strokeColor}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle cx="32" cy="17" r="3" stroke={strokeColor} strokeWidth={strokeWidth} />
        </svg>
      );

    default:
      return null;
  }
};
