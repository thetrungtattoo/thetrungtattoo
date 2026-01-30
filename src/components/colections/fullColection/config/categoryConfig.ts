import { ProductCategory } from '@/types/product'

export interface CategoryDisplayInfo {
  id: string
  label: string
  title: string
  description: string
}

export const CATEGORY_DISPLAY_MAP: Record<string, CategoryDisplayInfo> = {
  [ProductCategory.JAPANESE]: {
    id: 'japanese',
    label: 'BỘ SƯU TẬP',
    title: 'Nhật Bản (Japanese)',
    description: 'Dragon, Koi, Samurai, Phoenix - Irezumi truyền thống',
  },
  [ProductCategory.NEO_TRADITIONAL]: {
    id: 'neo-traditional',
    label: 'BỘ SƯU TẬP',
    title: 'Neo Traditional',
    description: 'Bold colors, modern interpretation of classic motifs',
  },
  [ProductCategory.BLACKWORK]: {
    id: 'blackwork',
    label: 'BỘ SƯU TẬP',
    title: 'Đen trắng (Blackwork)',
    description: 'Black & grey, linework-heavy designs',
  },
  [ProductCategory.REALISM]: {
    id: 'realism',
    label: 'BỘ SƯU TẬP',
    title: 'Hiện thực (Realism)',
    description: 'Photorealistic tattoo art',
  },
  [ProductCategory.FINE_LINE]: {
    id: 'fine-line',
    label: 'BỘ SƯU TẬP',
    title: 'Đường nét mảnh (Fine Line)',
    description: 'Delicate, precise linework',
  },
  [ProductCategory.MINIMALIST]: {
    id: 'minimalist',
    label: 'BỘ SƯU TẬP',
    title: 'Tối giản (Minimalist)',
    description: 'Simple, clean designs',
  },
  [ProductCategory.GEOMETRIC]: {
    id: 'geometric',
    label: 'BỘ SƯU TẬP',
    title: 'Hình học (Geometric)',
    description: 'Sacred geometry and patterns',
  },
  [ProductCategory.TRIBAL]: {
    id: 'tribal',
    label: 'BỘ SƯU TẬP',
    title: 'Tribal - Polynesian',
    description: 'Traditional tribal patterns',
  },
  [ProductCategory.WATER_COLOR]: {
    id: 'watercolor',
    label: 'BỘ SƯU TẬP',
    title: 'Màu nước (Watercolor)',
    description: 'Painterly, flowing color designs',
  },
  [ProductCategory.DOTWORK]: {
    id: 'dotwork',
    label: 'BỘ SƯU TẬP',
    title: 'Dotwork',
    description: 'Intricate dot-based designs',
  },
}

export const getCategoryDisplayInfo = (category: string): CategoryDisplayInfo => {
  return CATEGORY_DISPLAY_MAP[category] || {
    id: category.toLowerCase().replace(/\s+/g, '-'),
    label: 'BỘ SƯU TẬP',
    title: category,
    description: '',
  }
}

export const CATEGORY_DISPLAY_ORDER: string[] = [
  ProductCategory.JAPANESE,
  ProductCategory.NEO_TRADITIONAL,
  ProductCategory.BLACKWORK,
  ProductCategory.REALISM,
  ProductCategory.FINE_LINE,
  ProductCategory.MINIMALIST,
  ProductCategory.GEOMETRIC,
  ProductCategory.TRIBAL,
  ProductCategory.WATER_COLOR,
  ProductCategory.DOTWORK,
]
