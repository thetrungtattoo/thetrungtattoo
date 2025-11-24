import { useState, useEffect } from 'react'
import { getColectionItems } from '@/database/colection'
import type { ProductImage } from '@/types/product'

interface UseProductsResult {
  products: ProductImage[]
  loading: boolean
  error: string | null
}

export const useProducts = (): UseProductsResult => {
  const [products, setProducts] = useState<ProductImage[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    try {
      setLoading(true)
      setError(null)
      
      const data = getColectionItems()
      setProducts(data)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to load products')
      setProducts([])
    } finally {
      setLoading(false)
    }
  }, [])

  return { products, loading, error }
}
