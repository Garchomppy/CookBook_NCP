import React, {
  useEffect,
  useRef,
  useImperativeHandle,
  forwardRef,
} from "react";
import { PageFlip } from "page-flip";

interface HTMLFlipBookProps {
  width: number;
  height: number;
  size?: "fixed" | "stretch";
  minWidth?: number;
  maxWidth?: number;
  minHeight?: number;
  maxHeight?: number;
  drawShadow?: boolean;
  flippingTime?: number;
  usePortrait?: boolean;
  startZIndex?: number;
  autoSize?: boolean;
  maxShadowOpacity?: number;
  showCover?: boolean;
  mobileScrollSupport?: boolean;
  className?: string;
  style?: React.CSSProperties;
  children: React.ReactNode;
  onFlip?: (e: { data: number }) => void;
  onChangeOrientation?: (e: { data: string }) => void;
  onChangeState?: (e: { data: string }) => void;
}

export interface FlipBookRef {
  pageFlip: () => PageFlip | null;
}

export const HTMLFlipBook = forwardRef<FlipBookRef, HTMLFlipBookProps>(
  (props, ref) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const pageFlipRef = useRef<PageFlip | null>(null);

    useImperativeHandle(ref, () => ({
      pageFlip: () => pageFlipRef.current,
    }));

    useEffect(() => {
      const timer = setTimeout(() => {
        if (!containerRef.current) return;
        const elements = containerRef.current.querySelectorAll('.page-item');
        if (!elements || elements.length === 0) return;

        const pf = new PageFlip(containerRef.current, {
          width: props.width,
          height: props.height,
          size: props.size || 'fixed',
          minWidth: props.minWidth || 300,
          maxWidth: props.maxWidth || 1000,
          minHeight: props.minHeight || 400,
          maxHeight: props.maxHeight || 1200,
          drawShadow: props.drawShadow ?? true,
          flippingTime: props.flippingTime || 800,
          usePortrait: props.usePortrait ?? true,
          startZIndex: props.startZIndex || 0,
          autoSize: props.autoSize ?? true,
          maxShadowOpacity: props.maxShadowOpacity || 0.4,
          showCover: props.showCover ?? true,
          mobileScrollSupport: props.mobileScrollSupport ?? false,
        });

        pf.loadFromHTML(elements);
        pageFlipRef.current = pf;

        if (props.onFlip) {
          pf.on('flip', (e: any) => props.onFlip?.({ data: e.data }));
        }
        if (props.onChangeOrientation) {
          pf.on('changeOrientation', (e: any) =>
            props.onChangeOrientation?.({ data: e.data }),
          );
        }
        if (props.onChangeState) {
          pf.on('changeState', (e: any) =>
            props.onChangeState?.({ data: e.data }),
          );
        }
      }, 50);

      return () => {
        clearTimeout(timer);
        if (pageFlipRef.current) {
          try {
            pageFlipRef.current.destroy();
          } catch (err) {
            // cleanup safe
          }
        }
      };
    }, []);

    return (
      <div ref={containerRef} className={props.className} style={props.style}>
        {props.children}
      </div>
    );
  },
);

HTMLFlipBook.displayName = "HTMLFlipBook";
