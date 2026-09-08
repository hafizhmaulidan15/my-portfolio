// @ts-check
import { cloneElement, useLayoutEffect, useRef, useState } from 'react';

export default function MeasuredChartGate({ children, className, style }) {
  const ref = useRef(null);
  const [size, setSize] = useState(null);

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;

    const measure = () => {
      const width = el.clientWidth;
      const height = el.clientHeight;
      if (width > 0 && height > 0) {
        setSize((prev) =>
          prev && prev.width === width && prev.height === height ? prev : { width, height }
        );
      }
    };

    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  return (
    <div ref={ref} className={className} style={{ width: '100%', height: '100%', ...style }}>
      {size ? cloneElement(children, { width: size.width, height: size.height }) : null}
    </div>
  );
}