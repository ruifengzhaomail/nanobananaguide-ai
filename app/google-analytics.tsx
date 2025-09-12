// Google Analytics component for tracking website usage
import Script from 'next/script'

const GA_MEASUREMENT_ID = 'G-N43HLCBFK6'

export default function GoogleAnalytics() {
  // Debug log to ensure component is being rendered
  console.log('GoogleAnalytics component rendering, NODE_ENV:', process.env.NODE_ENV)
  
  return (
    <>
      {/* Debug comment to verify component is rendered */}
      {/* Google Analytics - GA_ID: G-N43HLCBFK6 */}
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          console.log('Google Analytics script executing');
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_MEASUREMENT_ID}', {
            page_title: document.title,
            page_location: window.location.href,
          });
          console.log('Google Analytics configured with ID: ${GA_MEASUREMENT_ID}');
        `}
      </Script>
    </>
  )
}