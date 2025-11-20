import React, { ImgHTMLAttributes } from 'react';

interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement> {
  fallback?: string;
  size?: 'sm' | 'md' | 'lg';
}

export const Avatar: React.FC<AvatarProps> = ({ className = '', src, fallback, size = 'md', alt = "Avatar", ...props }) => {
  const sizes = {
    sm: "h-8 w-8",
    md: "h-10 w-10",
    lg: "h-14 w-14",
  };

  return (
    <div className={`relative flex shrink-0 overflow-hidden rounded-full ${sizes[size]} ${className}`}>
      {src ? (
        <img
          className="aspect-square h-full w-full object-cover"
          src={src}
          alt={alt}
          {...props}
        />
      ) : (
        <div className="flex h-full w-full items-center justify-center rounded-full bg-muted text-muted-foreground border border-border">
          {fallback || alt.charAt(0).toUpperCase()}
        </div>
      )}
    </div>
  );
};