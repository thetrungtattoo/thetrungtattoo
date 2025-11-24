import { useState, useCallback } from 'react'

export const useFavorites = () => {
  const [favorites, setFavorites] = useState<Set<string>>(new Set())

  const toggleFavorite = useCallback((productId: string) => {
    setFavorites(prev => {
      const next = new Set(prev)
      next.has(productId) ? next.delete(productId) : next.add(productId)
      return next
    })
  }, [])

  const isFavorite = useCallback((productId: string) => favorites.has(productId), [favorites])

  return { isFavorite, toggleFavorite }
}

