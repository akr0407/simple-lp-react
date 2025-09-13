import { Heart } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="py-8 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-slate-800 border-t border-gray-200 dark:border-slate-700">
      <div className="max-w-4xl mx-auto text-center">
        <p className="flex items-center justify-center text-gray-600 dark:text-gray-400 text-sm">
          Made with <Heart className="w-4 h-4 mx-1 text-red-500" /> by Alex Johnson
          <span className="mx-2">•</span>
          © 2024 All rights reserved
        </p>
        <p className="mt-2 text-xs text-gray-500 dark:text-gray-500">
          Built with React, Tailwind CSS, shadcn/ui & anime.js
        </p>
      </div>
    </footer>
  )
}