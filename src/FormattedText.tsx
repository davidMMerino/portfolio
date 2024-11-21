import React from 'react';

interface FormattedTextProps {
  text: string | undefined;
}

const FormattedText: React.FC<FormattedTextProps> = React.memo(({text}) => {
  if (!text) {
    return <>{text}</>; // Si text es undefined o null, lo devolvemos tal cual
  }

  // Utilizamos una expresión regular para encontrar las palabras entre asteriscos
  const regex = /\*(.*?)\*/g;

  // Si el texto no tiene palabras entre asteriscos, no se hace nada especial
  const parts = [];
  let lastIndex = 0;
  let match;

  // Mientras encontremos coincidencias con el regex, las procesamos
  while ((match = regex.exec(text)) !== null) {
    // Push la parte antes del asterisco, si existe
    if (match.index > lastIndex) {
      parts.push(text.slice(lastIndex, match.index));
    }
    // Push la parte entre asteriscos, envuelta en <i>
    parts.push(<i key={match.index}>{match[1]}</i>);
    lastIndex = regex.lastIndex;
  }

  // Si hay texto después del último asterisco, lo añadimos
  if (lastIndex < text.length) {
    parts.push(text.slice(lastIndex));
  }

  // Devolvemos el texto procesado (si no hay asteriscos, simplemente se retorna el texto original)
  return <>{parts.length > 0 ? parts : text}</>;
});

export default FormattedText;
