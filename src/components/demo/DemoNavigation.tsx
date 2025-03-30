'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';

export default function DemoNavigation() {
  const pathname = usePathname();
  
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-4 left-4 right-4 z-50 flex justify-between bg-black/30 backdrop-blur-md rounded-lg p-4"
    >
      <Link href="/" className="text-white font-medium">
        Back to Home
      </Link>
      
      <div className="flex gap-4">
        <Link 
          href="/demo/mask-transition" 
          className={`font-medium ${pathname === '/demo/mask-transition' ? 'text-white' : 'text-white/70 hover:text-white'}`}
        >
          Mask Transition
        </Link>
        {/* Add more demo links here */}
      </div>
    </motion.div>
  );
} 