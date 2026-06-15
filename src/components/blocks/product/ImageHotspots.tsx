'use client';
import Icon from "@/components/icons";
import MediaImage from "@/components/ui/MediaImage";
import { ImageHotspots as ImageHotspotsType } from "@/payload-types"
import Image from "next/image";
import { useEffect, useRef, useState, useCallback } from "react";

type Hotspot = {
  name: string;
  body: string;
  position: { x: number; y: number };
    modalPosition: {
        top: boolean,
        bottom: boolean,
        left: boolean,
        right: boolean,
    }
}

type Line = {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
}

type Props = {
  content: ImageHotspotsType['content']
  image: ImageHotspotsType['image']
}

const hotspots: Hotspot[] = [
  {
    name: '1. Ergonomic lifting handle',
    body: 'Folding the scooter is a breeze with the easy-to-reach handle and smooth folding mechanism.',
    position: { x: 62, y: 22 },
    modalPosition: {
        top: true,
        bottom: false,
        left: false,
        right: true,
    }
  },
  {
    name: '2. Ergonomic lifting handle',
    body: 'Folding the scooter is a breeze with the easy-to-reach handle and smooth folding mechanism.',
    position: { x: 32, y: 26 },
      modalPosition: {
        top: true,
        bottom: false,
        left: true,
        right: false,
    }
  },
  {
    name: '3. Ergonomic lifting handle',
    body: 'Folding the scooter is a breeze with the easy-to-reach handle and smooth folding mechanism.',
    position: { x: 28, y: 32 },
      modalPosition: {
        top: true,
        bottom: false,
        left: true,
        right: false,
    }
  },
  {
    name: '4. Ergonomic lifting handle',
    body: 'Folding the scooter is a breeze with the easy-to-reach handle and smooth folding mechanism.',
    position: { x: 42, y: 70 },
      modalPosition: {
        top: false,
        bottom: true,
        left: true,
        right: false,
    }
  },
  {
    name: '5. Ergonomic lifting handle',
    body: 'Folding the scooter is a breeze with the easy-to-reach handle and smooth folding mechanism.',
    position: { x: 62, y: 47 },
      modalPosition: {
        top: true,
        bottom: false,
        left: false,
        right: true,
    }
  },
  {
    name: '6. Ergonomic lifting handle',
    body: 'Folding the scooter is a breeze with the easy-to-reach handle and smooth folding mechanism.',
    position: { x: 63, y: 56 },
      modalPosition: {
        top: false,
        bottom: true,
        left: false,
        right: true,
    }
  },
  {
    name: '7. Ergonomic lifting handle',
    body: 'Folding the scooter is a breeze with the easy-to-reach handle and smooth folding mechanism.',
    position: { x: 69, y: 80 },
      modalPosition: {
        top: false,
        bottom: true,
        left: false,
        right: true,
    }
  },
];

export function ImageHotspots({ content, image }: Props) {
  const [hotspotSelected, setHotspotSelected] = useState<Hotspot | null>(null);
  const [lines, setLines] = useState<(Line | null)[]>([]);
  const lastHotspot = useRef<Hotspot | null>(null);

  // Keep lastHotspot in sync so content stays mounted during fade out
  if (hotspotSelected) {
    lastHotspot.current = hotspotSelected;
  }

  const wrapperRef = useRef<HTMLDivElement>(null);
  const dotRefs = useRef<(HTMLDivElement | null)[]>([]);
  const nameRef = useRef<HTMLDivElement>(null);

  const { heading, body } = content;

    const calculateLines = useCallback(() => {
  if (!wrapperRef.current || !nameRef.current) return;

  const wrapRect = wrapperRef.current.getBoundingClientRect();
  const nameRect = nameRef.current.getBoundingClientRect();

  const next = hotspots.map((hotspot, i) => {
    const dot = dotRefs.current[i];
    if (!dot) return null;

    const dotRect = dot.getBoundingClientRect();
    const { modalPosition } = hotspot;

    // x2 — pin to left or right edge of the name
    const x2 = modalPosition.right
      ? nameRect.left - wrapRect.left
      : nameRect.right - wrapRect.left;

    // y2 — pin to top or bottom edge of the name
    const y2 = modalPosition.top
      ? nameRect.bottom - wrapRect.top
      : nameRect.top - wrapRect.top;

    return {
      x1: dotRect.left - wrapRect.left + dotRect.width / 2,
      y1: dotRect.top - wrapRect.top + dotRect.height / 2,
      x2,
      y2,
    };
  });

  setLines(next);
}, []);

  useEffect(() => {
    calculateLines();
    window.addEventListener('resize', calculateLines);
    return () => window.removeEventListener('resize', calculateLines);
  }, [calculateLines, hotspotSelected]);

  const selectedIndex = hotspotSelected
    ? hotspots.indexOf(hotspotSelected)
    : -1;

  return (
    <section className="section">
      <div className="container">
        <h2 className="font-extrabold text-5xl text-center">{heading}</h2>

        <div className="hotspots-wrapper" ref={wrapperRef}>
          <MediaImage image={image} />

          {/* SVG connector lines — overflow visible so lines reach outside the image */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none"
            style={{ overflow: 'visible' }}
          >
            {lines.map((line, i) => {
              if (!line) return null;
              return (
                <line
                  key={i}
                  x1={line.x1}
                  y1={line.y1}
                  x2={line.x2}
                  y2={line.y2}
                  stroke="#ef4444"
                  strokeWidth={1}
                  style={{
                    opacity: selectedIndex === i ? 0.6 : 0,
                    transition: 'opacity 0.2s ease-in-out',
                  }}
                />
              );
            })}
          </svg>

          {hotspots.map((hotspot, index) => (
            <div
              key={index}
              ref={el => { dotRefs.current[index] = el; }}
              className={`hotspot bg-red-500 ${hotspot === hotspotSelected ? 'active' : ''}`}
              style={{ top: hotspot.position.y + '%', left: hotspot.position.x + '%' }}
              onClick={() => setHotspotSelected(hotspot === hotspotSelected ? null : hotspot)}
            />
          ))}

         <div className="hotspots-modals" 
            style={{
            top: lastHotspot.current?.modalPosition.top ? '0' : 'unset',
            bottom: lastHotspot.current?.modalPosition.bottom ? '0' : 'unset',
            left: lastHotspot.current?.modalPosition.left ? '0' : 'unset',
            right: lastHotspot.current?.modalPosition.right ? '0' : 'unset',
            }}>
            <div className={`hotspot-modal ${!hotspotSelected ? 'empty' : ''}`}>
              <div className="hotspot-modal__image-wrapper mb-6">
                <span className="icon bg-red-500">
                  <Icon name="ScanEye" />
                </span>
                <div className="hotspot-modal__image">
                  {lastHotspot.current && (
                    <Image
                      src="/api/media/file/lifting-handle.jpg"
                      alt="Lifting Handles"
                      width={100}
                      height={100}
                    />
                  )}
                </div>
              </div>

              <p className="font-extrabold text-xl text-accent-foreground" ref={nameRef}>
                {lastHotspot.current?.name}
              </p>
              <p className="text-muted-foreground">
                {lastHotspot.current?.body}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}