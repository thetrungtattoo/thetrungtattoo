import type { CounterItem } from '@/shared';

/**
 * Dữ liệu về các con số thống kê của Studio
 * Sắp xếp theo thứ tự từ trái sang phải, từ trên xuống dưới
 */

export const COMPANY_FACTS: readonly CounterItem[] = [
  {
    id: 1,
    number: 10,
    label: 'Năm hoạt động',
    suffix: '+',
    duration: 2500
  },
  {
    id: 2,
    number: 30471,
    label: 'Khách hàng',
    suffix: '+',
    duration: 4000
  },
  {
    id: 3,
    number: 98,
    label: 'Khách hàng hài lòng',
    suffix: '%',
    duration: 2500
  },
  {
    id: 4,
    number: 30465,
    label: 'Dự án hoàn thành',
    suffix: '+',
    duration: 3000
  }
] as const;

/**
 * Hình ảnh thường nhật tại Studio
 * Sắp xếp theo thứ tự từ trái sang phải, từ trên xuống dưới
 */

export const TEAM_IMAGES = [
  '/src/assets/images/teams/teams1.jpg',
  '/src/assets/images/teams/teams2.jpg',
  '/src/assets/images/teams/teams3.jpg',
  '/src/assets/images/teams/teams4.jpg',
  '/src/assets/images/teams/teams5.jpg',
  '/src/assets/images/teams/teams6.jpg',
  '/src/assets/images/teams/teams7.jpg',
  '/src/assets/images/teams/teams8.jpg',
  '/src/assets/images/teams/teams9.jpg',
  '/src/assets/images/teams/teams10.jpg'
] as const;

/**
 * Hệ số tốc độ của các animation
 * Hiệu ứng này sử dụng cho các animation stagger
 */

export const ANIMATION_TIMING = {
  STAGGER_DELAY: 150,
  TEAM_IMAGE_DELAY: 100,
  HERO_DELAY: 200,
  SECTION_DELAY: 100
} as const;
