import { useState, useCallback, useEffect, useRef } from 'react'

export const useFilterDropdown = () => {
  const [isExpanded, setIsExpanded] = useState(false)
  const filterRef = useRef<HTMLDivElement>(null)

  const toggleExpanded = useCallback(() => setIsExpanded(prev => !prev), [])
  const closeDropdown = useCallback(() => setIsExpanded(false), [])

  useEffect(() => {
    if (!isExpanded) return

    const handleClickOutside = (e: MouseEvent) => {
      if (filterRef.current && !filterRef.current.contains(e.target as Node)) {
        closeDropdown()
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [isExpanded, closeDropdown])

  return { isExpanded, filterRef, toggleExpanded, closeDropdown }
}

