"use client";
import { useEffect, useRef } from "react";

export default function MapPage() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    let map: { remove: () => void } | undefined;
    import("maplibre-gl").then((maplibre) => {
      if (!ref.current) return;
      map = new maplibre.Map({
        container: ref.current,
        style: "https://demotiles.maplibre.org/style.json",
        center: [-80.05, 26.7],
        zoom: 10,
      });
    });
    return () => map?.remove();
  }, []);
  return <div ref={ref} className="h-screen w-full" />;
}
