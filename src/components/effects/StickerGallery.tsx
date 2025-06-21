"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { textColor } from "@/lib/theme";
import { Dictionary } from "@/dictionaries";

interface StickerGalleryProps {
  className?: string;
  dictionary: Dictionary;
}

export function StickerGallery({ className = "", dictionary }: StickerGalleryProps) {
  const [selectedSticker, setSelectedSticker] = useState<number | null>(null);
  const [visibleStickers, setVisibleStickers] = useState(12);

  // Generate array of all sticker numbers
  const allStickers = Array.from({ length: 46 }, (_, i) => i + 1);

  const loadMoreStickers = () => {
    setVisibleStickers(prev => Math.min(prev + 12, 46));
  };

  const stickerTexts = dictionary.gallery.stickerGallery;

  return (
    <div className={`py-20 ${className}`}>
      <div className={`container mx-auto px-4 ${textColor.lightTaupe}`}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-5xl md:text-7xl mb-4 font-bold">{stickerTexts.title}</h2>
          <p className="max-w-2xl mx-auto">
            {stickerTexts.description}
          </p>
        </motion.div>

        <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4 mb-8">
          {allStickers.slice(0, visibleStickers).map((stickerNum, index) => (
            <motion.div
              key={stickerNum}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ 
                opacity: 1, 
                scale: 1,
                transition: { delay: index * 0.05 }
              }}
              whileHover={{ 
                scale: 1.1,
                rotate: [0, -5, 5, 0],
                transition: { duration: 0.3 }
              }}
              whileTap={{ scale: 0.95 }}
              className="aspect-square bg-muted/20 rounded-lg p-2 cursor-pointer hover:bg-muted/40 transition-colors"
              onClick={() => setSelectedSticker(stickerNum)}
            >
              <Image
                src={`/images/stickers/Subject ${stickerNum}.png`}
                alt={`${stickerTexts.modal.title}${stickerNum}`}
                width={80}
                height={80}
                className="w-full h-full object-contain"
              />
            </motion.div>
          ))}
        </div>

        {visibleStickers < 46 && (
          <div className="text-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={loadMoreStickers}
              className="px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
            >
              {stickerTexts.loadMore} ({46 - visibleStickers} {stickerTexts.remaining})
            </motion.button>
          </div>
        )}
      </div>

      {/* Modal for selected sticker */}
      <AnimatePresence>
        {selectedSticker && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
            onClick={() => setSelectedSticker(null)}
          >
            <motion.div
              initial={{ scale: 0.5, rotate: -10 }}
              animate={{ scale: 1, rotate: 0 }}
              exit={{ scale: 0.5, rotate: 10 }}
              className="bg-white rounded-xl p-8 max-w-sm w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="text-center">
                <Image
                  src={`/images/stickers/Subject ${selectedSticker}.png`}
                  alt={`${stickerTexts.modal.title}${selectedSticker}`}
                  width={200}
                  height={200}
                  className="mx-auto mb-4"
                />
                <h3 className="text-xl font-bold mb-2">{stickerTexts.modal.title}{selectedSticker}</h3>
                <p className="text-muted-foreground mb-4">
                  {stickerTexts.modal.description}
                </p>
                <button
                  onClick={() => setSelectedSticker(null)}
                  className="px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
                >
                  {stickerTexts.modal.close}
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
} 