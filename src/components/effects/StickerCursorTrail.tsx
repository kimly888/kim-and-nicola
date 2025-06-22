"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Image from "next/image";

function lerp(a: number, b: number, n: number): number {
  return (1 - n) * a + n * b;
}

function getMouseDistance(p1: { x: number; y: number }, p2: { x: number; y: number }): number {
  const dx = p1.x - p2.x;
  const dy = p1.y - p2.y;
  return Math.hypot(dx, dy);
}

class StickerItem {
  public DOM: { el: HTMLDivElement; img: HTMLImageElement | null };
  public defaultStyle: gsap.TweenVars;
  public rect: DOMRect | null;
  constructor(DOM_el: HTMLDivElement) {
    this.DOM = {
      el: DOM_el,
      img: DOM_el.querySelector("img"),
    };
    this.defaultStyle = { scale: 1, x: 0, y: 0, opacity: 0 };
    this.rect = null;
    this.getRect();
    this.initEvents();
  }

  private initEvents() {
    const resize = () => {
      gsap.set(this.DOM.el, this.defaultStyle);
      this.getRect();
    };
    window.addEventListener("resize", resize);
  }

  private getRect() {
    this.rect = this.DOM.el.getBoundingClientRect();
  }
}

class StickerCursorTrailLogic {
  private container: HTMLDivElement;
  private stickers: StickerItem[];
  private stickersTotal: number;
  private stickerPosition: number;
  private zIndexVal: number;
  private activeStickersCount: number;
  private isIdle: boolean;
  private threshold: number;
  private mousePos: { x: number; y: number };
  private lastMousePos: { x: number; y: number };
  private cacheMousePos: { x: number; y: number };
  private enabled: boolean;

  constructor(container: HTMLDivElement) {
    this.container = container;
    this.stickers = [...container.querySelectorAll(".sticker-item")].map(
      (sticker) => new StickerItem(sticker as HTMLDivElement)
    );
    this.stickersTotal = this.stickers.length;
    this.stickerPosition = 0;
    this.zIndexVal = 1;
    this.activeStickersCount = 0;
    this.isIdle = true;
    this.threshold = 120;
    this.mousePos = { x: 0, y: 0 };
    this.lastMousePos = { x: 0, y: 0 };
    this.cacheMousePos = { x: 0, y: 0 };
    this.enabled = false;

    this.initEvents();
  }

  private initEvents() {
    const handlePointerMove = (ev: MouseEvent | TouchEvent) => {
      if (!this.enabled) return;
      
      let clientX = 0, clientY = 0;
      if ("touches" in ev && ev.touches.length > 0) {
        clientX = ev.touches[0].clientX;
        clientY = ev.touches[0].clientY;
      } else if ("clientX" in ev) {
        clientX = ev.clientX;
        clientY = ev.clientY;
      }
      
      this.mousePos = { x: clientX, y: clientY };
    };

    const initRender = (ev: MouseEvent | TouchEvent) => {
      if (!this.enabled) return;
      
      let clientX = 0, clientY = 0;
      if ("touches" in ev && ev.touches.length > 0) {
        clientX = ev.touches[0].clientX;
        clientY = ev.touches[0].clientY;
      } else if ("clientX" in ev) {
        clientX = ev.clientX;
        clientY = ev.clientY;
      }
      
      this.mousePos = { x: clientX, y: clientY };
      this.cacheMousePos = { ...this.mousePos };
      requestAnimationFrame(() => this.render());
      document.removeEventListener("mousemove", initRender as EventListener);
      document.removeEventListener("touchmove", initRender as EventListener);
    };

    // Enable trail on hero section or specific areas
    const handleScroll = () => {
      const heroSection = document.querySelector("[data-hero-section]");
      if (heroSection) {
        const rect = heroSection.getBoundingClientRect();
        this.enabled = rect.top < window.innerHeight && rect.bottom > 0;
      }
    };

    document.addEventListener("mousemove", handlePointerMove);
    document.addEventListener("touchmove", handlePointerMove);
    document.addEventListener("mousemove", initRender as EventListener);
    document.addEventListener("touchmove", initRender as EventListener);
    window.addEventListener("scroll", handleScroll);
    
    // Check initial state
    handleScroll();
  }

  public setEnabled(enabled: boolean) {
    this.enabled = enabled;
  }

  private render() {
    if (!this.enabled) {
      requestAnimationFrame(() => this.render());
      return;
    }

    const distance = getMouseDistance(this.mousePos, this.lastMousePos);
    this.cacheMousePos.x = lerp(this.cacheMousePos.x, this.mousePos.x, 0.1);
    this.cacheMousePos.y = lerp(this.cacheMousePos.y, this.mousePos.y, 0.1);

    if (distance > this.threshold) {
      this.showNextSticker();
      this.lastMousePos = { ...this.mousePos };
    }
    if (this.isIdle && this.zIndexVal !== 1) {
      this.zIndexVal = 1;
    }
    requestAnimationFrame(() => this.render());
  }

  private showNextSticker() {
    ++this.zIndexVal;
    this.stickerPosition = this.stickerPosition < this.stickersTotal - 1 ? this.stickerPosition + 1 : 0;
    const sticker = this.stickers[this.stickerPosition];

    gsap.killTweensOf(sticker.DOM.el);
    gsap
      .timeline({
        onStart: () => this.onStickerActivated(),
        onComplete: () => this.onStickerDeactivated(),
      })
      .fromTo(
        sticker.DOM.el,
        {
          opacity: 1,
          scale: 1,
          zIndex: this.zIndexVal,
          x: this.cacheMousePos.x - (sticker.rect?.width ?? 0) / 2,
          y: this.cacheMousePos.y - (sticker.rect?.height ?? 0) / 2,
        },
        {
          duration: 0.4,
          ease: "power1",
          x: this.mousePos.x - (sticker.rect?.width ?? 0) / 2,
          y: this.mousePos.y - (sticker.rect?.height ?? 0) / 2,
        },
        0
      )
      .to(
        sticker.DOM.el,
        {
          duration: 0.4,
          ease: "power3",
          opacity: 0,
          scale: 0.2,
        },
        0.4
      );
  }

  private onStickerActivated() {
    this.activeStickersCount++;
    this.isIdle = false;
  }

  private onStickerDeactivated() {
    this.activeStickersCount--;
    if (this.activeStickersCount === 0) {
      this.isIdle = true;
    }
  }
}

export function StickerCursorTrail() {
  const containerRef = useRef<HTMLDivElement>(null);
  const trailLogicRef = useRef<StickerCursorTrailLogic | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    trailLogicRef.current = new StickerCursorTrailLogic(containerRef.current);

    return () => {
      // Cleanup if needed
    };
  }, []);

  // Generate 46 sticker items (same as original)
  const stickerNumbers = Array.from({ length: 46 }, (_, i) => i + 1);

  return (
    <div className="fixed inset-0 pointer-events-none z-50" ref={containerRef}>
      {stickerNumbers.map((stickerNum) => (
        <div
          key={stickerNum}
          className="sticker-item w-8 h-8 md:w-fit md:h-fit absolute top-0 left-0 opacity-0"
          style={{ willChange: "transform, opacity" }}
        >
          <Image
            src={`/images/stickers/Subject ${stickerNum}.png`}
            alt=""
            width={100}
            height={100}
            className="w-full h-full"
          />
        </div>
      ))}
    </div>
  );
}
