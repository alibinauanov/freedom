import React from 'react';

const Picture = ({ 
  src, 
  alt, 
  className = '', 
  width, 
  height,
  loading = 'lazy',
  sizes = '100vw'
}) => {
  return (
    <img
      src={src}
      alt={alt}
      className={className}
      width={width}
      height={height}
      loading={loading}
      sizes={sizes}
      style={{
        width: width ? 'auto' : '100%',
        height: height ? 'auto' : 'auto',
        maxWidth: '100%'
      }}
    />
  );
};

export default Picture;