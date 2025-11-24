#!/bin/bash

# Tạo SSH key mới
echo "Đang tạo SSH key mới..."
ssh-keygen -t ed25519 -C "thetrungtattoo@gmail.com" -f ~/.ssh/id_ed25519_tattoo -N ""

# Khởi động SSH agent
echo "Khởi động SSH agent..."
eval "$(ssh-agent -s)"

# Thêm key vào SSH agent
echo "Thêm key vào SSH agent..."
ssh-add ~/.ssh/id_ed25519_tattoo

# Hiển thị public key để copy vào GitHub
echo ""
echo "=========================================="
echo "Public key (copy và thêm vào GitHub):"
echo "=========================================="
cat ~/.ssh/id_ed25519_tattoo.pub
echo ""
echo "=========================================="
echo "Đã tạo SSH key thành công!"
echo "Bước tiếp theo:"
echo "1. Copy public key ở trên"
echo "2. Vào GitHub Settings > SSH and GPG keys"
echo "3. Click 'New SSH key' và paste key vào"
echo "=========================================="

