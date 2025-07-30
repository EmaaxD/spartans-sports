import React, { useRef, useEffect, useState, VideoHTMLAttributes } from "react";

interface LazyVideoProps extends VideoHTMLAttributes<HTMLVideoElement> {
  src: string;
  poster?: string;
}

export const LazyProdVideo: React.FC<LazyVideoProps> = ({
  src,
  poster,
  ...props
}) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const obs = new window.IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setShow(true);
    });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <div ref={ref}>
      {show && (
        <video
          className="absolute bottom-0 right-0 w-22 h-full object-cover rounded-t-lg"
          autoPlay
          loop
          muted
          playsInline
          poster={poster}
          {...props}
        >
          <source src={src} />
          Tu navegador no soporta la reproducción de videos.
        </video>
      )}
    </div>
  );
};

export const LazyLocalVideo: React.FC<LazyVideoProps> = ({
  src,
  poster,
  ...props
}) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const obs = new window.IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setShow(true);
    });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <div ref={ref}>
      {show && (
        <video
          className="w-full h-full object-cover rounded-full"
          autoPlay
          loop
          muted
          playsInline
          poster={poster}
          {...props}
        >
          <source src={src} />
          Tu navegador no soporta la reproducción de videos.
        </video>
      )}
    </div>
  );
};
