'use client';

import { useEffect } from 'react';

/**
 * DevErrorGuard catches and suppresses unhandled promise rejections that are
 * native DOM Event objects (like [object Event] from browser extensions,
 * aborted WebSocket connections, or image/media load error events).
 * This prevents Next.js devtools from popping up a false-positive red overlay.
 */
export default function DevErrorGuard() {
  useEffect(() => {
    const handleUnhandledRejection = (event: PromiseRejectionEvent) => {
      const reason = event.reason;
      // If the rejection reason is a DOM Event (e.g., ProgressEvent, ErrorEvent, isTrusted)
      // or not a standard Error with a stack/message
      if (
        reason instanceof Event ||
        (reason && typeof reason === 'object' && ('isTrusted' in reason || !reason.message))
      ) {
        event.stopImmediatePropagation();
        event.preventDefault();
        console.warn('[DevErrorGuard] Suppressed external DOM Event unhandled rejection:', reason);
      }
    };

    window.addEventListener('unhandledrejection', handleUnhandledRejection, true);
    return () => {
      window.removeEventListener('unhandledrejection', handleUnhandledRejection, true);
    };
  }, []);

  return null;
}

