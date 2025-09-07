import React from "react";

interface ImageWithFallbackProps {
  src: string;
  alt: string;
  className?: string;
  fallbackTitle?: string;
  fallbackDescription?: string;
  fallbackIcon?: string;
}

const ImageWithFallback: React.FC<ImageWithFallbackProps> = ({
  src,
  alt,
  className = "w-full h-full object-cover",
  fallbackTitle,
  fallbackDescription,
  fallbackIcon,
}) => {
  const handleError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.style.display = "none";
    const parent = e.currentTarget.parentElement;
    if (parent) {
      parent.innerHTML = `
        <div class="h-full w-full flex flex-col items-center justify-center p-4 bg-blue-50">
          ${
            fallbackTitle
              ? `<span class="text-xl font-bold">${fallbackTitle}</span>`
              : ""
          }
          ${
            fallbackDescription
              ? `<p class="text-center mt-2 text-gray-600">${fallbackDescription}</p>`
              : ""
          }
          ${
            fallbackIcon
              ? `<div class="mt-3 text-center text-xl">${fallbackIcon}</div>`
              : ""
          }
        </div>
      `;
    }
  };

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      onError={handleError}
      loading="lazy"
    />
  );
};

export default ImageWithFallback;
