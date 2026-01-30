import type { ProductImage } from '@/types/product'
import { CATEGORY_DISPLAY_ORDER } from '../config/categoryConfig'

export interface CategoryGroup {
  category: string
  products: ProductImage[]
}

export function getCategoryGroups(products: ProductImage[]): CategoryGroup[] {
  const groupMap = new Map<string, ProductImage[]>()

  products.forEach((product) => {
    if (!product.isActive) return
    const category = product.category
    const existing = groupMap.get(category) || []
    groupMap.set(category, [...existing, product])
  })

  const sortedGroups: CategoryGroup[] = []

  CATEGORY_DISPLAY_ORDER.forEach((category) => {
    const categoryProducts = groupMap.get(category)
    if (categoryProducts && categoryProducts.length > 0) {
      sortedGroups.push({ category, products: categoryProducts })
      groupMap.delete(category)
    }
  })

  groupMap.forEach((categoryProducts, category) => {
    if (categoryProducts.length > 0) {
      sortedGroups.push({ category, products: categoryProducts })
    }
  })

  return sortedGroups
}
