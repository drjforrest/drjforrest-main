// Simple analytics utility
// Replace this with your preferred analytics service (e.g., GA4, Plausible, etc.)

export interface AnalyticsEvent {
  name: string;
  properties?: Record<string, any>;
}

export const trackEvent = (event: AnalyticsEvent) => {
  if (typeof window !== 'undefined') {
    // Replace this with your analytics implementation
    console.log('Analytics Event:', event);
  }
};

export const trackPageView = (url: string) => {
  trackEvent({
    name: 'page_view',
    properties: {
      url,
      timestamp: new Date().toISOString(),
    },
  });
};

export const trackDownload = (fileName: string) => {
  trackEvent({
    name: 'file_download',
    properties: {
      fileName,
      timestamp: new Date().toISOString(),
    },
  });
};

export const trackFormSubmission = (formName: string, success: boolean) => {
  trackEvent({
    name: 'form_submission',
    properties: {
      formName,
      success,
      timestamp: new Date().toISOString(),
    },
  });
};

export const trackExternalLink = (url: string) => {
  trackEvent({
    name: 'external_link_click',
    properties: {
      url,
      timestamp: new Date().toISOString(),
    },
  });
};

export const trackProjectView = (projectTitle: string) => {
  trackEvent({
    name: 'project_view',
    properties: {
      projectTitle,
      timestamp: new Date().toISOString(),
    },
  });
};