import React, { lazy, Suspense } from 'react';

const LazyCodeTyping = lazy(() => import('./CodeTyping'));

const CodeTyping = props => (
  <Suspense fallback={null}>
    <LazyCodeTyping {...props} />
  </Suspense>
);

export default CodeTyping;
