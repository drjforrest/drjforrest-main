'use client';

import Image from 'next/image';
import { useState } from 'react';
import { cn } from '@/lib/utils';

interface OptimizedImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
}

export function OptimizedImage({
  src,
  alt,
  width,
  height,
  className
}: OptimizedImageProps) {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className={cn(
      'overflow-hidden',
      isLoading ? 'animate-pulse bg-muted' : '',
      className
    )}>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={cn(
          'duration-700 ease-in-out',
          isLoading ? 'scale-110 blur-lg' : 'scale-100 blur-0'
        )}
        onLoadingComplete={() => setIsLoading(false)}
      />
    </div>
  );
}