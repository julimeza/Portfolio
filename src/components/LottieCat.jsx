import React from 'react';
import Lottie from 'lottie-react';
import catAnimation from '../assets/gatocodigo.json'; // ajusta la ruta si es necesario

export default function LottieCat({ className, style }) {
  return (
    <div className={className} style={style}>
      <Lottie
        animationData={catAnimation}
        loop
        style={{ width: '100%', height: '100%' }}
      />
    </div>
  );
}
