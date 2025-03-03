import Link from 'next/link';
import dynamic from 'next/dynamic';

// Dynamic import for shake detection
const GlobalShakeDetection = dynamic(
  () => import('../app/components/GlobalShakeDetection'),
  { ssr: false }
);

export default function Custom404() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Add global shake detection */}
      <GlobalShakeDetection />
      
      {/* Header */}
      <header className="sticky top-0 z-50 p-4 bg-[#282828] bg-opacity-90 backdrop-blur-md shadow-lg border-b border-[#665c53]">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <h1 className="text-3xl font-bold text-[#ebdbb2]">
            <Link href="/">blog.dotMavriQ</Link>
          </h1>
        </div>
      </header>
      
      {/* Main content */}
      <main className="flex-grow flex items-center justify-center p-4 sm:p-8 md:p-16 bg-[#282828] text-[#ebdbb2]">
        <div className="max-w-lg w-full text-center space-y-6">
          <h1 className="text-6xl font-bold">404</h1>
          <h2 className="text-2xl font-semibold">Page Not Found</h2>
          <p className="text-lg">
            The page you are looking for doesn&apos;t exist or has been moved.
          </p>
          <div className="mt-8">
            <Link 
              href="/"
              className="px-6 py-3 rounded-lg bg-[#504945] hover:bg-[#665c54] transition-colors text-[#ebdbb2] font-medium focus:outline-none focus:ring-2 focus:ring-[#d5c4a1] focus:ring-opacity-50"
            >
              Go Home
            </Link>
          </div>
        </div>
      </main>
      
      {/* Footer */}
      <footer className="p-4 bg-[#282828] bg-opacity-90 backdrop-blur-md shadow-inner border-t border-[#665c53] text-center">
        <div className="max-w-6xl mx-auto">
          <p className="text-sm text-[#ebdbb2]">
            🄯 {new Date().getFullYear()} dotMavriQ. All base are belong to us.
          </p>
        </div>
      </footer>
    </div>
  );
}