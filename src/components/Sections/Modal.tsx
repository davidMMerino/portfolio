import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import { ModalProps } from '../../data/dataDef';

const Modal: React.FC<ModalProps> = React.memo(({ item, onClose }) => {
  const { title, deepDescription, images } = item;

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [dragStart, setDragStart] = useState<number | null>(null);

  // Si `images` no está definido o no tiene elementos, evita errores
  if (!images || images.length === 0) return null;

  const handleBackgroundClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.currentTarget === e.target) {
      onClose();
    }
  };

  const handleDragStart = (e: React.TouchEvent | React.MouseEvent) => {
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    setDragStart(clientX);
  };

  const handleDragEnd = (e: React.TouchEvent | React.MouseEvent) => {
    if (dragStart === null) return;

    const clientX = 'changedTouches' in e ? e.changedTouches[0].clientX : e.clientX;
    const dragDistance = clientX - dragStart;

    if (dragDistance > 50) {
      setCurrentImageIndex(currentIndex => (currentIndex - 1 + images.length) % images.length);
    } else if (dragDistance < -50) {
      setCurrentImageIndex(currentIndex => (currentIndex + 1) % images.length);
    }
    setDragStart(null);
  };

  useEffect(() => {
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70"
      onClick={handleBackgroundClick}>
      {/* Contenedor del modal */}
      <div className="relative w-3/4 max-w-3xl p-6 bg-white rounded-lg max-h-[80vh] overflow-hidden">
        {/* Contenedor desplazable */}
        <div className="overflow-y-auto max-h-[70vh] no-scrollbar">
          {/* Título y descripción */}
          <h3 className="text-2xl font-bold mb-4">{title}</h3>
          <p className="mb-4">{deepDescription}</p>

          {/* Imagen principal */}
          <div
            className="flex justify-center mb-4"
            onMouseDown={handleDragStart}
            onMouseUp={handleDragEnd}
            onTouchEnd={handleDragEnd}
            onTouchStart={handleDragStart}>
            <Image
              alt={`${title} main image`}
              className="object-contain max-h-[60vh] max-w-full"
              height={400}
              src={images[currentImageIndex]}
              width={600}
            />
          </div>

          {/* Condicional: Renderizar barra lateral si hay más de una imagen */}
          {images.length > 1 && (
            <div className="flex justify-center gap-4 mt-4">
              {images.map((imageSrc, idx) => (
                <div
                  className={`cursor-pointer rounded-lg overflow-hidden flex items-center justify-center w-20 h-16 ${
                    idx === currentImageIndex ? 'border-2 border-blue-500' : ''
                  }`}
                  key={idx}
                  onClick={() => setCurrentImageIndex(idx)}>
                  <Image
                    alt={`${title} thumbnail ${idx + 1}`}
                    className="object-cover"
                    height={60}
                    src={imageSrc}
                    width={80}
                  />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
});

export default Modal;
