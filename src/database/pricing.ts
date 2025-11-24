import type { PricingData } from '@/types/product';

export const PRICING_DATA: PricingData = {
  tiers: [
    {
      id: 'full-back',
      name: 'Full lưng',
      description: 'Xăm toàn bộ vùng lưng',
      blackWhite: {
        price: '8000000',
        isAvailable: true,
        isOnSale: true,
        discountPercentage: 20,
        saleIcon: true,
      },
      color: {
        price: '10000000',
        isAvailable: true,
        isOnSale: false,
      },
      outline: {
        price: '1500000',
        isAvailable: true,
        isOnSale: false,
      },
      displayOrder: 1,
    },
    {
      id: 'full-body-thigh',
      name: 'Full thân đến đùi',
      description: 'Xăm từ thân trên xuống đùi',
      blackWhite: {
        price: '15000000',
        priceRange: { min: 15000000, max: 17000000 },
        isAvailable: true,
        isOnSale: false,
      },
      color: {
        price: '0',
        isAvailable: false,
        isOnSale: false,
      },
      outline: {
        price: '2000000',
        isAvailable: true,
        isOnSale: false,
      },
      displayOrder: 2,
    },
    {
      id: 'full-arm',
      name: 'Full cánh tay',
      description: 'Xăm toàn bộ cánh tay',
      blackWhite: {
        price: '6000000',
        isAvailable: true,
        isOnSale: false,
      },
      color: {
        price: '8000000',
        isAvailable: true,
        isOnSale: false,
      },
      outline: {
        price: '1500000',
        isAvailable: true,
        isOnSale: false,
      },
      displayOrder: 3,
    },
    {
      id: 'half-sleeve',
      name: 'Nửa tay áo',
      description: 'Xăm từ vai đến khuỷu tay',
      blackWhite: {
        price: '5000000',
        isAvailable: true,
        isOnSale: false,
      },
      color: {
        price: '7000000',
        isAvailable: true,
        isOnSale: false,
      },
      outline: {
        price: '1000000',
        isAvailable: true,
        isOnSale: false,
      },
      displayOrder: 4,
    },
    {
      id: 'full-leg',
      name: 'Full chân',
      description: 'Xăm toàn bộ chân',
      blackWhite: {
        price: '10000000',
        isAvailable: true,
        isOnSale: false,
      },
      color: {
        price: '12000000',
        isAvailable: true,
        isOnSale: false,
      },
      outline: {
        price: '2000000',
        isAvailable: true,
        isOnSale: false,
      },
      displayOrder: 5,
    },
    {
      id: 'a4-size',
      name: 'A4',
      description: 'Kích thước A4 (21x29.7cm)',
      blackWhite: {
        price: '2000000'  ,
        isAvailable: true,
        isOnSale: false,
      },
      color: {
        price: '2500000',
        isAvailable: true,
        isOnSale: false,
      },
      outline: {
        price: '0',
        isAvailable: false,
        isOnSale: false,
      },
      displayOrder: 6,
    },
  ],
  additionalServices: [
    {
      id: 'warranty',
      name: 'Bảo hành hình & mực lên tới 1 năm',
      price: 'Miễn phí',
      isFree: true,
      icon: 'sparkles',
    },
    {
      id: 'consultation',
      name: 'Tư vấn thiết kế 1 : 1 cùng Artist',
      price: 'Miễn phí',
      isFree: true,
      icon: 'sparkles',
    },
    {
      id: 'aftercare',
      name: 'Chăm sóc sau xăm cùng chuyên gia',
      price: 'Miễn phí',
      isFree: true,
      icon: 'sparkles',
    },
    {
      id: 'touchup',
      name: 'Kiểm tra & sửa chi tiết nhỏ trong 3 tháng đầu',
      price: 'Miễn phí',
      isFree: true,
      icon: 'sparkles',
    },
    {
      id: 'refresh',
      name: 'Dặm mực & hoàn thiện hình trong 6 tháng đầu',
      price: 'Miễn phí',
      isFree: true,
      icon: 'sparkles',
    },
  ],
  disclaimer: 'Giá thực tế có thể thay đổi tùy theo từng thời điểm thực hiện, vị trí xăm và kích thước của hình.',
  disclaimer2: 'Giá hiển thị đã bao gồm đầy đủ thuế, phí và đã áp dụng chương trình khuyến mãi đang diễn ra.',
  lastUpdated: new Date('2024-01-15'),
};

export const formatPrice = (price: string | number): string => {
  const numPrice = typeof price === 'string' ? parseFloat(price) : price;
  return new Intl.NumberFormat('vi-VN', {
    style: 'currency',
    currency: 'VND',
    minimumFractionDigits: 0,
  }).format(numPrice);
};

export const formatPriceRange = (min: number, max: number): string => {
  const formattedMin = formatPrice(min);
  const formattedMax = formatPrice(max);
  return `${formattedMin} - ${formattedMax}`;
};