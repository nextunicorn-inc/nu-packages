import React from 'react';
import { SVG } from './Select.styled';

export const LoadingIcon = ({ size = 24 }) => (
  <span
    style={{
      width: size,
      marginRight: '0.2rem',
    }}
  >
    <SVG
      width={size}
      height={size}
      viewBox="0 0 50 50"
      style={{ display: 'inline', verticalAlign: 'middle' }}
    >
      <circle cx="25" cy="25" r="20" fill="none"></circle>
    </SVG>
  </span>
);

export const ArrowIcon = ({ expanded = false }) => (
  <svg
    width="16"
    height="16"
    transform={expanded ? 'rotate(0)' : 'rotate(180)'}
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M13 11L3 11L8 4L13 11Z" fill="#202020" />
  </svg>
);

export const CrossIcon = () => (
  <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
    <line x1="18" y1="6" x2="6" y2="18"></line>
    <line x1="6" y1="6" x2="18" y2="18"></line>
  </svg>
);

export const CheckIcon = ({ selected = false }) => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    {selected ? (
      <>
        <rect x="2" y="2" width="16" height="16" rx="2" fill="#202020" />
        <path d="M5 8.91041L9.05329 13L15 7.00002" stroke="#FDFDFD" strokeWidth="1.2" />
      </>
    ) : (
      <rect x="2" y="2" width="16" height="16" rx="2" stroke="#CDCDCD" />
    )}
  </svg>
);
