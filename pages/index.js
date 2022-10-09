import Script from "next/script";
import { useState } from "react";

export default function Home() {
  const [inlineAfterInteractiveReady, setAfterInteractiveReady] =
    useState(false);
  const [inlineAfterInteractiveLoaded, setAfterInteractiveLoaded] =
    useState(false);

  const [externalAfterInteractiveReady, setExternalAfterInteractiveReady] =
    useState(false);
  const [externalAfterInteractiveLoaded, setExternalAfterInteractiveLoaded] =
    useState(false);

  const [inlineLazyOnLoadReady, setInlineLazyOnLoadReady] = useState(false);
  const [inlineLazyOnLoadLoaded, setInlineLazyOnLoadLoaded] = useState(false);

  const [externalLazyOnLoadReady, setExternalLazyOnLoadReady] = useState(false);
  const [externalLazyOnLoadLoaded, setExternalLazyOnLoadLoaded] =
    useState(false);

  return (
    <div>
      <h1>Next.js inline script onLoad issue demo</h1>

      <hr />

      <ul>
        <li>
          inline afterInteractive onReady executed:{" "}
          {inlineAfterInteractiveReady ? "yes" : "no"}
        </li>
        <li>
          inline afterInteractive onLoad executed:{" "}
          {inlineAfterInteractiveLoaded ? "yes" : "no"}
        </li>
      </ul>

      <Script
        id="inline-after-interactive-script"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            console.log('inline afterInteractive script');
          `,
        }}
        onReady={() => setAfterInteractiveReady(true)}
        onLoad={() => setAfterInteractiveLoaded(true)}
      />

      <ul>
        <li>
          external afterInteractive onReady executed:{" "}
          {externalAfterInteractiveReady ? "yes" : "no"}
        </li>
        <li>
          external afterInteractive onLoad executed:{" "}
          {externalAfterInteractiveLoaded ? "yes" : "no"}
        </li>
      </ul>

      <Script
        id="external-after-interactive-script"
        strategy="afterInteractive"
        src="/sample-external-script-after-interactive.js"
        onReady={() => setExternalAfterInteractiveReady(true)}
        onLoad={() => setExternalAfterInteractiveLoaded(true)}
      />

      <hr />

      <ul>
        <li>
          inline lazyOnLoad onReady executed:{" "}
          {inlineLazyOnLoadReady ? "yes" : "no"}
        </li>
        <li>
          inline lazyOnLoad onLoad executed:{" "}
          {inlineLazyOnLoadLoaded ? "yes" : "no"}
        </li>
      </ul>

      <Script
        id="inline-lazy-on-load-script"
        strategy="lazyOnload"
        dangerouslySetInnerHTML={{
          __html: `
            console.log('inline lazyOnload script');
          `,
        }}
        onReady={() => setInlineLazyOnLoadReady(true)}
        onLoad={() => setInlineLazyOnLoadLoaded(true)}
      />

      <ul>
        <li>
          external lazyOnLoad onReady executed:{" "}
          {externalLazyOnLoadReady ? "yes" : "no"}
        </li>
        <li>
          external lazyOnLoad onLoad executed:{" "}
          {externalLazyOnLoadLoaded ? "yes" : "no"}
        </li>
      </ul>

      <Script
        id="external-lazy-on-load-script"
        strategy="lazyOnload"
        src="/sample-external-script-lazy-on-load.js"
        onReady={() => setExternalLazyOnLoadReady(true)}
        onLoad={() => setExternalLazyOnLoadLoaded(true)}
      />
    </div>
  );
}
