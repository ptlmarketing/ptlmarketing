import React, { useEffect, useState } from "react";
import './PreLoader.css'

export default function Preloader({ loading: externalLoading, onFinish }) {
  const [internalProgress, setInternalProgress] = useState(0);
  const [visible, setVisible] = useState(true);

  // If parent controls loading, use that. Otherwise simulate.
  const isControlled = typeof externalLoading === "boolean";
  const isLoading = isControlled ? externalLoading : internalProgress < 100;

  useEffect(() => {
    if (isControlled) {
      // If parent says loading false, hide
      if (!externalLoading) {
        setVisible(false);
        onFinish && onFinish();
      } else {
        setVisible(true);
      }
      return;
    }

    // simulate progress for demo (replace with real progress)
    let raf;
    let last = performance.now();
    function tick(now) {
      const delta = now - last;
      last = now;
      // increment speed depending on current progress (fast at start, slower near 100)
      setInternalProgress((p) => {
        if (p >= 100) return 100;
        const speed = 0.02 + (1 - p / 100) * 0.6; // tuning
        const next = Math.min(100, p + delta * speed);
        if (next >= 100) {
          // small delay then hide for smoothness
          setTimeout(() => {
            setVisible(false);
            onFinish && onFinish();
          }, 220);
        }
        return next;
      });
      if (internalProgress < 100) raf = requestAnimationFrame(tick);
    }
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [externalLoading]);

  if (!visible && !isLoading) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center preloader-backdrop"
      role="status"
      aria-live="polite"
      aria-hidden={!isLoading}
    >
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        {/* subtle blurred gradient overlay */}
        <div className="absolute inset-0 opacity-40 bg-gradient-to-br from-orange-600 to-indigo-700 mix-blend-overlay"></div>
      </div>

      <div className="relative z-10 w-full max-w-3xl mx-4 p-8 rounded-3xl shadow-2xl bg-gradient-to-br from-[#060606]/70 to-[#0f0f12]/60 backdrop-blur-lg border border-white/6">
        <div className="flex flex-col lg:flex-row items-center gap-6">
          {/* Ring + Logo */}
          <div className="flex-shrink-0">
            <div className="relative rounded-full inline-flex items-center justify-center">
              <div className="preloader-ring"></div>
              {/* centered logo/text */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-white text-sm font-semibold tracking-wide float-anim" style={{ animation: "float 2.4s ease-in-out infinite" }}>
                  {/* Replace with <img src="/logo.png" /> if you have a logo */}
                  <span className="text-xl">⚡</span>
                </div>
              </div>
            </div>
          </div>

          {/* Title + progress */}
          <div className="flex-1">
            <h3 className="text-white text-2xl font-bold mb-1">Loading…</h3>
            <p className="text-gray-300 text-sm mb-4">
              Preparing your experience — hang tight. This should be quick.
            </p>

            {/* progress bar */}
            <div className="w-full">
              <div className="progress-track mb-2">
                <div
                  className="progress-fill"
                  style={{ width: `${Math.round(isControlled ? 100 : internalProgress)}%` }}
                />
              </div>

              <div className="flex justify-between text-xs text-gray-300">
                <span>{isControlled ? "Starting…" : `${Math.min(99, Math.round(internalProgress))}%`}</span>
                <span>{isControlled ? "Almost ready" : (internalProgress >= 100 ? "Done" : "Loading")}</span>
              </div>
            </div>
          </div>

          {/* small hints / cancel */}
          <div className="hidden md:flex flex-col items-end gap-2">
            <button
              onClick={() => {
                setVisible(false);
                onFinish && onFinish();
              }}
              className="text-xs px-3 py-1 rounded-md border border-white/10 text-white/90 hover:bg-white/6"
            >
              Skip
            </button>
            <span className="text-xs text-gray-400">Tip: Press <kbd className="bg-black/40 px-1 rounded">Esc</kbd> to skip</span>
          </div>
        </div>
      </div>
    </div>
  );
}
