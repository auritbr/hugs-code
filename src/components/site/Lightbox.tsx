import { useEffect } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

export function Lightbox({
  photos, index, onClose, onPrev, onNext,
}: {
  photos: { src: string; caption?: string }[];
  index: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose, onPrev, onNext]);

  const photo = photos[index];
  if (!photo) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4" onClick={onClose} role="dialog" aria-modal="true">
      <button onClick={onClose} className="absolute top-4 right-4 rounded-full bg-white/10 p-2 text-white hover:bg-white/20" aria-label="Fechar galeria">
        <X className="h-5 w-5" />
      </button>
      <button onClick={(e) => { e.stopPropagation(); onPrev(); }} className="absolute left-4 rounded-full bg-white/10 p-2 text-white hover:bg-white/20" aria-label="Foto anterior">
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button onClick={(e) => { e.stopPropagation(); onNext(); }} className="absolute right-4 rounded-full bg-white/10 p-2 text-white hover:bg-white/20" aria-label="Próxima foto">
        <ChevronRight className="h-6 w-6" />
      </button>
      <figure className="max-h-[85vh] max-w-5xl" onClick={(e) => e.stopPropagation()}>
        <img src={photo.src} alt={photo.caption ?? ""} className="max-h-[75vh] w-auto rounded-lg" />
        <figcaption className="mt-3 flex items-center justify-between gap-4 text-sm text-white/80">
          <span>{photo.caption}</span>
          <span className="opacity-70">{index + 1} / {photos.length}</span>
        </figcaption>
      </figure>
    </div>
  );
}