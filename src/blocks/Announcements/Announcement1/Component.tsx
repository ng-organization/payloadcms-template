'use client'

import { useState } from 'react'
import { Announcement1Block as Announcement1BlockProps } from '@/payload-types'
import RichText from '@/components/RichText'

export function Announcement1Block({ announcement }: Announcement1BlockProps) {
  const [isVisible, setIsVisible] = useState(true)

  const handleDismiss = () => {
    setIsVisible(false)
  }

  if (!isVisible) {
    return null
  }

  return (
    <div className="flex items-center justify-between border-b border-gray-200 bg-gray-100 px-4 py-2 text-gray-900">
      <span> </span>

      <RichText data={announcement} enableGutter={false} />

      <button
        type="button"
        aria-label="Dismiss"
        className="rounded border border-gray-300 bg-white p-1.5 shadow-sm transition-colors hover:bg-gray-50 hover:cursor-pointer"
        onClick={handleDismiss}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="size-5"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
        </svg>
      </button>
    </div>
  )
}
