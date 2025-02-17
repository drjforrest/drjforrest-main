import HomeContent from './home-content';

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
}

export const metadata = {
  title: 'Dr. Jamie I. Forrest',
  description: 'Global Health Research & Analytics',
}

export default function Page() {
  return <HomeContent />;
}
