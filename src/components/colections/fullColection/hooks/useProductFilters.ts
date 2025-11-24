import { useState, useMemo } from 'react'
import type { ProductImage } from '@/types/product'

const FILTERS = [
  { label: 'Tất cả', value: 'all' },
  { label: 'Japanese', value: 'japanese' },
  { label: 'Traditional', value: 'traditional' },
  { label: 'Realistic', value: 'realistic' },
  { label: 'Blackwork', value: 'blackwork' },
  { label: 'Color', value: 'color' }
] as const

export const useProductFilters = (products: ProductImage[]) => {
  const [selectedFilter, setSelectedFilter] = useState<string>('all')

  const filteredProducts = useMemo(() => {
    if (selectedFilter === 'all') return products
    const filterLower = selectedFilter.toLowerCase()
    return products.filter(p => p.category.toLowerCase().includes(filterLower))
  }, [products, selectedFilter])

  return {
    filterOptions: FILTERS,
    selectedFilter,
    setSelectedFilter,
    filteredProducts
  }
}
