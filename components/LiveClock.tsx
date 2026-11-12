'use client';

import { useState, useEffect } from 'react';

export default function LiveClock({ showSeconds = true }: { showSeconds?: boolean }) {
  const [timeStr, setTimeStr] = useState<string>('');
  const [dateStr, setDateStr] = useState<string>('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      // Format to WIB (Asia/Jakarta, UTC+7)
      const optionsTime: Intl.DateTimeFormatOptions = {
        timeZone: 'Asia/Jakarta',
        hour: '2-digit',
        minute: '2-digit',
        ...(showSeconds ? { second: '2-digit' } : {}),
        hour12: false
      };
      const optionsDate: Intl.DateTimeFormatOptions = {
        timeZone: 'Asia/Jakarta',
        year: 'numeric',
        month: 'short',
        day: '2-digit'
      };

      setTimeStr(now.toLocaleTimeString('en-GB', optionsTime));
      setDateStr(now.toLocaleDateString('en-GB', optionsDate));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, [showSeconds]);

  return (
    <span
      className="tabular-nums font-mono tracking-tight"
      title={`WIB (UTC+7)${dateStr ? ` · ${dateStr}` : ''}`}
      suppressHydrationWarning
    >
      {timeStr || '08:45:00'} WIB
    </span>
  );
}
