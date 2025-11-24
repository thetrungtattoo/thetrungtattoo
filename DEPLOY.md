# Hướng dẫn Deploy

## 📋 Tổng quan

Project này được deploy lên **Firebase Hosting** với 2 cách:
1. **Deploy tự động** qua GitHub Actions (khi push lên branch `develop`)
2. **Deploy thủ công** từ local machine

## 🚀 Deploy tự động (GitHub Actions)

### Bước 1: Thêm GitHub Secret

1. Vào repository trên GitHub
2. Vào **Settings** → **Secrets and variables** → **Actions**
3. Nhấn **New repository secret**
4. Thêm secret với:
   - **Name**: `VITE_GEMINI_API_KEY`
   - **Value**: API key của bạn (ví dụ: `AIzaSyAqfskjIY3qUeb1rducXt1ityYUB4ACuUA`)
5. Nhấn **Add secret**

### Bước 2: Push code lên branch `develop`

```bash
git add .
git commit -m "Prepare for deployment"
git push origin develop
```

GitHub Actions sẽ tự động:
- Build project với environment variable
- Deploy lên Firebase Hosting
- Website sẽ có tại: `https://thetrunginked.web.app` (hoặc domain bạn đã config)

## 🛠️ Deploy thủ công (Local)

### Bước 1: Đảm bảo có file `.env`

File `.env` trong thư mục root phải chứa:

```env
VITE_GEMINI_API_KEY=your_actual_api_key_here
```

### Bước 2: Cài đặt Firebase CLI (nếu chưa có)

```bash
npm install -g firebase-tools
```

### Bước 3: Login Firebase

```bash
firebase login
```

### Bước 4: Build và Deploy

**Cách 1: Dùng script có sẵn**
```bash
npm run deploy
```

**Cách 2: Build và deploy riêng**
```bash
# Build project
npm run build

# Deploy lên Firebase
firebase deploy --only hosting
```

### Bước 5: Kiểm tra

Sau khi deploy xong, Firebase sẽ hiển thị URL:
- Production: `https://thetrunginked.web.app`
- Hoặc domain custom của bạn

## ⚠️ Lưu ý quan trọng

### Environment Variables

**Vite chỉ đọc environment variables khi BUILD, không phải khi runtime!**

- ✅ Đúng: Set `VITE_GEMINI_API_KEY` khi chạy `npm run build`
- ❌ Sai: Set sau khi build xong

### Khi nào cần rebuild?

Cần rebuild và redeploy khi:
- Thay đổi code
- Thay đổi environment variables (API keys)
- Cập nhật dependencies

### Bảo mật

- ✅ **KHÔNG** commit file `.env` lên Git (đã có trong `.gitignore`)
- ✅ Sử dụng GitHub Secrets cho CI/CD
- ✅ Không chia sẻ API keys công khai
- ✅ Rotate API keys định kỳ

## 🔍 Troubleshooting

### Lỗi: "API key not configured" sau khi deploy

**Nguyên nhân**: Environment variable không được set khi build

**Giải pháp**:
1. Kiểm tra GitHub Secret đã được set chưa
2. Với deploy thủ công: Đảm bảo file `.env` tồn tại và có API key
3. Rebuild và redeploy

### Lỗi: "403 Forbidden" hoặc "API key leaked"

**Nguyên nhân**: API key đã bị Google thu hồi

**Giải pháp**:
1. Tạo API key mới từ [Google AI Studio](https://aistudio.google.com/app/apikey)
2. Cập nhật trong `.env` hoặc GitHub Secrets
3. Rebuild và redeploy

### Kiểm tra build có chứa API key không

**⚠️ CẢNH BÁO**: Không nên check API key trong build output vì lý do bảo mật. Nhưng để debug:

```bash
# Build và kiểm tra
npm run build
grep -r "VITE_GEMINI_API_KEY" dist/ || echo "API key không có trong build (đúng)"
```

## 📝 Checklist trước khi deploy

- [ ] File `.env` có API key hợp lệ (cho deploy thủ công)
- [ ] GitHub Secret đã được set (cho deploy tự động)
- [ ] Đã test local với `npm run dev`
- [ ] Build thành công với `npm run build`
- [ ] Đã login Firebase CLI (cho deploy thủ công)
- [ ] Code đã được commit và push (cho deploy tự động)

## 🎯 Quick Deploy Commands

```bash
# Deploy thủ công nhanh
npm run deploy

# Hoặc từng bước
npm run build
firebase deploy --only hosting

# Xem preview trước khi deploy
npm run build
npm run preview
# Mở http://localhost:4173 để xem preview
```

