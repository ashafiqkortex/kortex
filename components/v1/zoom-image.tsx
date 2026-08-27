"use client";

import { useRef } from "react";

// Click-to-zoom image: renders the inline image plus a native <dialog>
// lightbox. Esc closes it natively; any click closes it too.
export function ZoomImage({ src, alt }: { src: string; alt: string }) {
  const ref = useRef<HTMLDialogElement>(null);
  return <>
    <img src={src} alt={alt} onClick={() => ref.current?.showModal()} />
    <dialog ref={ref} className="img-zoom" aria-label={`${alt} (enlarged)`} onClick={() => ref.current?.close()}>
      <img src={src} alt={alt} />
    </dialog>
  </>;
}
