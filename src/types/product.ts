export const ProductCategory = {
  FINE_LINE: 'Fine Line',
  JAPANESE: 'Japanese Traditional',
  BLACKWORK: 'Blackwork',
  REALISM: 'Realism',
  NEO_TRADITIONAL: 'Neo Traditional',
  MINIMALIST: 'Minimalist',
  GEOMETRIC: 'Geometric',
  TRIBAL: 'Tribal',
  WATER_COLOR: 'Watercolor',
  DOTWORK: 'Dotwork',
  ILLUSTRATIVE: 'Illustrative',
  SURREALISM: 'Surrealism',
  ABSTRACT: 'Abstract',
  BIOMECHANICAL: 'Biomechanical',
  CHICANO: 'Chicano',
  LETTERING: 'Lettering / Script',
  ORNAMENTAL: 'Ornamental',
  PORTRAIT: 'Portrait',
  ANIME: 'Anime / Manga',
  FANTASY: 'Fantasy / Mythical',
} as const;

export const ProductSize = {
  SMALL: 'Small', // nhỏ
  MEDIUM: 'Medium', // trung bình
  LARGE: 'Large' // lớn
} as const;

export type ProductCategory = typeof ProductCategory[keyof typeof ProductCategory];
export type ProductSize = typeof ProductSize[keyof typeof ProductSize];

export interface ContentSection {
  passage: number;
  type: 'text' | 'image' | 'title' | 'subtitle';
  content: string;
  image?: string;
  content2?: string;
}

export interface ProductImage {
  id: string;
  name: string;
  title: string;
  date: string;
  author: string;
  description: ContentSection[];
  mainImage: string;
  detailImages: string[];
  category: ProductCategory;
  size: ProductSize;
  discountPercentage: number;
  discountedPrice: number;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
  isSectionNew: boolean; // danh sách "sản phẩm mới"
  showNewIcon: boolean; // gắn icon "New" vào sản phẩm
  displayOrder: number; // Sắp xếp thứ tự
  rating?: number; // đánh giá sao (1-5)
  reviewCount?: number; // số lượng lượt đánh giá
  hashTag?: string[]; // hash tag sản phẩm
}

export interface ProductFilter {
  category?: ProductCategory;
  size?: ProductSize;
  priceRange?: {
    min: number;
    max: number;
  };
  isOnSale?: boolean;
}

export interface ProductState {
  products: ProductImage[];
  filteredProducts: ProductImage[];
  loading: boolean;
  error: string | null;
  selectedProduct: ProductImage | null;
  filter: ProductFilter;
}

export interface ProductActions {
  setFilter: (filter: ProductFilter) => void;
  clearFilter: () => void;
  selectProduct: (product: ProductImage | null) => void;
  loadProducts: () => Promise<void>;
}

// Cart and Modal Types
export interface CartItem {
  id: string;
  product: ProductImage;
  quantity: number;
  customizations: ProductCustomization;
  comments: Comment[];
}

export interface ProductCustomization {
  size?: string;
  color?: string;
  specialRequests?: string;
}

export interface Comment {
  id: string;
  text: string;
  author: string;
  createdAt: Date;
}

export interface CartState {
  items: CartItem[];
  isModalOpen: boolean;
  selectedItem: CartItem | null;
  loading: boolean;
  error: string | null;
}

export interface CartActions {
  addToCart: (product: ProductImage, customizations?: ProductCustomization, itemId?: string) => void;
  removeFromCart: (itemId: string) => void;
  updateQuantity: (itemId: string, quantity: number) => void;
  updateCustomizations: (itemId: string, customizations: ProductCustomization) => void;
  addComment: (itemId: string, comment: Omit<Comment, 'id' | 'createdAt'>) => void;
  openModal: (item: CartItem) => void;
  closeModal: () => void;
  clearCart: () => void;
  cartTotals: {
    itemCount: number;
    totalPrice: number;
  };
}

// Pricing Types
export interface PricingTier {
  id: string;
  name: string;
  description?: string;
  blackWhite: PricingOption;
  color: PricingOption;
  outline: PricingOption;
  isPopular?: boolean;
  displayOrder: number;
}

export interface PricingOption {
  price: string;
  isAvailable: boolean;
  isOnSale?: boolean;
  discountPercentage?: number;
  saleIcon?: boolean;
  priceRange?: {
    min: number;
    max: number;
  };
}

export interface PricingData {
  tiers: PricingTier[];
  additionalServices: AdditionalService[];
  disclaimer: string;
  disclaimer2: string;
  lastUpdated: Date;
}

export interface AdditionalService {
  id: string;
  name: string;
  price: string;
  isFree: boolean;
  icon?: string;
  description?: string;
}