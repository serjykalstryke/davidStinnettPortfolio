import React from 'react';
import Button from 'react-bootstrap/Button';

export const CardButton = ({ text, href }) => {
  return (
    <Button
      style={{ margin: '2%', background: '#143840', borderColor: '#143840' }}
    >
      <a
        href={href}
        target='_blank'
        rel='noreferrer noopener'
        style={{
          color: '#BFB2A3'
        }}
      >
        {text}
      </a>
    </Button>
  );
};

export default CardButton;