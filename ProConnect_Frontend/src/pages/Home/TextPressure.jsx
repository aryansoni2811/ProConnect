import React, { useEffect, useRef } from 'react';

const TextPressure = ({
  text,
  flex = true,
  alpha = false,
  stroke = false,
  width = true,
  weight = true,
  italic = true,
  textColor = "#ffffff",
  strokeColor = "#ff0000",
  minFontSize = 36
}) => {
  const containerRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const textElement = textRef.current;
    if (!container || !textElement) return;

    const updateTextProperties = (e) => {
      const rect = container.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = (e.clientY - rect.top) / rect.height;
      const distance = Math.sqrt(Math.pow(x - 0.5, 2) + Math.pow(y - 0.5, 2));
      const pressure = Math.max(0, 1 - distance * 2);

      if (flex) textElement.style.setProperty('font-variation-settings', `"wght" ${100 + pressure * 900}`);
      if (alpha) textElement.style.opacity = 0.25 + pressure * 0.75;
      if (stroke) textElement.style.webkitTextStroke = `${pressure * 3}px ${strokeColor}`;
      if (width) textElement.style.fontStretch = `${100 + pressure * 100}%`;
      if (weight) textElement.style.fontWeight = 100 + pressure * 900;
      if (italic) textElement.style.fontStyle = `oblique ${pressure * 20}deg`;
    };

    container.addEventListener('mousemove', updateTextProperties);
    container.addEventListener('mouseleave', () => {
      textElement.style = '';
    });

    return () => {
      container.removeEventListener('mousemove', updateTextProperties);
      container.removeEventListener('mouseleave', () => {
        textElement.style = '';
      });
    };
  }, [flex, alpha, stroke, width, weight, italic, strokeColor]);

  return (
    <div
      ref={containerRef}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden'
      }}
    >
      <span
        ref={textRef}
        style={{
          color: textColor,
          fontSize: `${minFontSize}px`,
          fontFamily: 'Inter, sans-serif',
          transition: 'all 0.1s ease-out'
        }}
      >
        {text}
      </span>
    </div>
  );
};

export default TextPressure;