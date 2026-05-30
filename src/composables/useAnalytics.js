/**
 * useAnalytics — thin wrapper around GA4 + Clarity
 *
 * Usage:
 *   const { track, trackWA, trackEmail, trackShop } = useAnalytics()
 *   track('click', 'fab_whatsapp')
 */
export function useAnalytics() {

  function track(eventName, label, extra = {}) {
    // GA4
    if (window.gtag) {
      window.gtag('event', eventName, {
        event_label:    label,
        event_category: 'engagement',
        ...extra,
      })
    }
    // Clarity custom tag
    if (window.clarity) {
      window.clarity('set', eventName, label)
    }
  }

  // Shorthand helpers
  function trackWA(source = 'unknown') {
    track('whatsapp_click', source)
    if (window.gtag) {
      window.gtag('event', 'conversion', { send_to: 'G-XXXXXXXXXX/whatsapp' })
    }
  }

  function trackEmail(source = 'unknown') {
    track('email_click', source)
  }

  function trackShop(platform) {
    track('shop_click', platform)
  }

  function trackFormSubmit() {
    track('form_submit', 'contact_form')
    if (window.gtag) {
      window.gtag('event', 'generate_lead', {
        event_category: 'contact',
        event_label:    'contact_form_submit',
      })
    }
  }

  function trackScroll(percent, page) {
    if ([25, 50, 75, 90].includes(percent)) {
      track('scroll', `${page}_${percent}pct`, { value: percent })
    }
  }

  return { track, trackWA, trackEmail, trackShop, trackFormSubmit, trackScroll }
}
