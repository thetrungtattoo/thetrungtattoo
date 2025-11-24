import { useMemo } from 'react'
import type { ProductImage } from '@/types/product'

const calcReviewCount = (id: string): number => {
  const seed = id.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0)
  return Math.floor((seed % 200) + 50)
}

export const useReviewCounts = (products: ProductImage[]) => {
  return useMemo(() => {
    const counts = new Map<string, number>()
    products.forEach(p => counts.set(p.id, calcReviewCount(p.id)))
    return counts
  }, [products])
}

