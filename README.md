# Thế Trung Tattoo Studio - Frontend

## Tổng quan
Ứng dụng web frontend cho Thế Trung Tattoo Studio, được xây dựng với React 19, TypeScript và Vite. Ứng dụng cung cấp giao diện hiện đại để khách hàng có thể khám phá các tác phẩm tattoo, đặt lịch hẹn và tương tác với AI assistant.

## Tính năng chính

### 🎨 Bộ sưu tập Tattoo
- **Hiển thị sản phẩm**: Grid layout responsive với hình ảnh chất lượng cao
- **Bộ lọc thông minh**: Filter theo danh mục với hiệu ứng animation mượt mà
- **Tương tác sản phẩm**: Like/unlike, xem chi tiết, chia sẻ
- **Tự động cập nhật**: Khi thêm data mới vào `colection.ts` sẽ tự động hiển thị

### 🤖 AI Assistant (Gemini)
- **Chat trực tiếp**: Tương tác với AI để tư vấn về sản phẩm
- **Thông tin sản phẩm**: Hiển thị đầy đủ chi tiết, hình ảnh, mô tả
- **Galerie hình ảnh**: Xem nhiều góc độ của từng tác phẩm
- **Rating & Tags**: Đánh giá sao, hashtag, lượt yêu thích

### 📱 Responsive Design
- **Mobile-first**: Tối ưu cho mọi thiết bị
- **Smooth animations**: Hiệu ứng chuyển động mượt mà
- **Modern UI/UX**: Giao diện đẹp, trực quan

## Công nghệ sử dụng

- **Frontend**: React 19, TypeScript, Vite
- **Styling**: SCSS Modules
- **Routing**: React Router DOM
- **AI Integration**: Google Gemini API
- **Build Tool**: Vite với HMR
- **Code Quality**: ESLint, TypeScript strict mode

## Cấu trúc dự án

```
src/
├── components/           # React components
│   ├── colections/      # Bộ sưu tập tattoo
│   │   ├── fullColection/  # Component chính
│   │   │   ├── fullColection.tsx
│   │   │   ├── MessageModal.tsx
│   │   │   └── styles.module.scss
│   │   ├── colection.tsx
│   │   └── styles.module.scss
│   ├── homePage/        # Trang chủ
│   ├── booking/         # Đặt lịch hẹn
│   ├── about-us/        # Giới thiệu
│   └── ...
├── assets/              # Tài nguyên tĩnh
│   ├── images/         # Hình ảnh
│   └── svg/           # SVG icons
├── services/           # API services
│   └── geminiService.ts
├── database/          # Dữ liệu mock
│   └── colection.ts
├── types/             # TypeScript types
├── config/            # Cấu hình
└── shared/            # Components dùng chung
```

## Cài đặt và chạy

### Yêu cầu
- Node.js 18+
- npm hoặc yarn

### Cài đặt
```bash
# Clone repository
git clone <repository-url>
cd tattoostudio-frontend

# Cài đặt dependencies
npm install

# Cấu hình environment variables
cp .env.example .env
# Thêm VITE_GEMINI_API_KEY vào .env
```

### Chạy development
```bash
npm run dev
```

### Build production
```bash
npm run build
```

### Lint & Type check
```bash
npm run lint
```

## Cấu hình

### Environment Variables
```env
VITE_GEMINI_API_KEY=your_gemini_api_key_here
```

### Studio Info
Cấu hình thông tin studio trong `src/config/studioInfo.ts`:
- Tên studio
- Địa chỉ, SĐT
- Dịch vụ chính
- Giá cả tham khảo
- Quy trình làm việc

## Tính năng nổi bật

### 1. Filter Animation
- Hiệu ứng chạy từ trái sang phải khi click filter button
- Smooth transition với cubic-bezier timing
- Responsive design cho mobile

### 2. Message Modal
- Modal trượt từ bên phải màn hình
- Chia đôi: Chat AI + Thông tin sản phẩm
- Real-time chat với Gemini API
- Galerie hình ảnh tương tác

### 3. Product Grid
- Grid layout tự động responsive
- Hover effects mượt mà
- Like/unlike với animation
- Auto-loading từ database

## API Integration

### Gemini Service
- Tích hợp Google Gemini API
- Chat context với lịch sử tin nhắn
- Error handling và fallback
- System prompt tùy chỉnh cho studio

## Performance

- **Code Splitting**: Tự động chia nhỏ bundle
- **Lazy Loading**: Load components khi cần
- **Image Optimization**: Tối ưu hình ảnh
- **Caching**: Cache API responses
- **Bundle Size**: Tối ưu kích thước bundle

## Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## Contributing

1. Fork repository
2. Tạo feature branch
3. Commit changes
4. Push và tạo Pull Request

## License

MIT License - Xem file LICENSE để biết thêm chi tiết.

## Liên hệ

- **Studio**: Thế Trung Tattoo Studio
- **Địa chỉ**: 52 Nguyễn Nhạc, Phường Quy Nhơn Đông, Tỉnh Gia Lai
- **SĐT**: 0378 927 665
- **Email**: contact@thetrungtattoo.com

---

**Lưu ý**: Dự án này được phát triển với mục đích học tập và thương mại. Vui lòng tuân thủ các quy định về bản quyền và sử dụng hợp lý.# thetrungtattoo
