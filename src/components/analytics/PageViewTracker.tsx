'use client';

import { usePathname } from 'next/navigation';
import { useEffect, useRef } from 'react';
import { analytics } from '@/lib/analytics';

export default function PageViewTracker() {
  const pathname = usePathname();
  const lastPath = useRef('');

  useEffect(() => {
    if (pathname && pathname !== lastPath.current) {
      lastPath.current = pathname;
      analytics.pageView(pathname);
    }
  }, [pathname]);

  return null;
}
