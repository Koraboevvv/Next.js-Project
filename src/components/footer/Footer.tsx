import { memo } from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-gray-300 py-12 mt-12 ">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8 ">
        <div>
          <h2 className="text-2xl font-bold text-white mb-4">Loggoo</h2>
          <p className="text-sm text-gray-400">
            The best store for your shopping. Worldwide delivery.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Navigation</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
            <li><Link href="/" className="hover:text-white transition-colors">About Us</Link></li>
            <li><Link href="/" className="hover:text-white transition-colors">Contact</Link></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-12 pt-6 text-center text-sm text-gray-500">
        {new Date().getFullYear()} Loggoo. All rights reserved.
      </div>
    </footer>
  );
};

export default memo(Footer);
