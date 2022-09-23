import React from 'react';

interface IProps {
  children: React.ReactNode;
  a?: string;
}

function Wrapper({ children, a }: IProps) {
  return (
    <div
      className='wrapper'
      style={{ border: '1px solid red', marginBottom: '50px', padding: '20px' }}
    >
      {children}
    </div>
  );
}
export default Wrapper;
