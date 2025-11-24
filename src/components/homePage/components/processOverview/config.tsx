import { YTuong, ThietKe, XacNhan, ThucHien, HoanThien, TheoDoi } from '@/assets/svg/svg';

export interface ProcedureStep {
  id: number;
  stepNumber: string;
  title: string;
  subtitle: string;
  icon: () => React.ReactNode;
}

export const procedureSteps: ProcedureStep[] = [
  {
    id: 1,
    stepNumber: 'Bước 1',
    title: 'Tư vấn & lên ý tưởng',
    subtitle: 'Chúng tôi lắng nghe câu chuyện và phong cách cá nhân của bạn, cùng khám phá cảm hứng nghệ thuật để tạo nên bản phác thảo hình xăm độc bản, mang đậm dấu ấn riêng và ý nghĩa cá nhân sâu sắc.',
    icon: () => <YTuong />
  },
  {
    id: 2,
    stepNumber: 'Bước 2',
    title: 'Thiết kế & Phác thảo hình xăm',
    subtitle: 'Từ ý tưởng đã thống nhất, nghệ sĩ của chúng tôi tạo nên bản thiết kế độc bản, tinh chỉnh tỉ mỉ từng chi tiết để đạt bố cục, tỷ lệ và phong cách hoàn hảo, phản ánh trọn vẹn cá tính bạn.',
    icon: () => <ThietKe />
  },
  {
    id: 3,
    stepNumber: 'Bước 3',
    title: 'Xác Nhận Thiết Kế & Đặt Cọc',
    subtitle: 'Sau khi hoàn thiện bản phác thảo, chúng tôi cùng bạn thống nhất chi tiết cuối cùng, xác nhận thiết kế và tiến hành đặt cọc để chuẩn bị dụng cụ, mực xăm và không gian chuyên nghiệp riêng biệt.',
    icon: () => <XacNhan />
  },
  {
    id: 4,
    stepNumber: 'Bước 4',
    title: 'Thực hiện hình xăm',
    subtitle: 'Nghệ sĩ chuyên nghiệp của chúng tôi thực hiện từng đường kim chính xác, an toàn và tinh tế, biến bản thiết kế thành tác phẩm nghệ thuật sống động, thể hiện cá tính và phong cách độc đáo của bạn.',
    icon: () => <ThucHien />
  },
  {
    id: 5,
    stepNumber: 'Bước 5',
    title: 'Hoàn thiện & chăm sóc',
    subtitle: 'Sau khi hoàn tất, chúng tôi kiểm tra kỹ lưỡng từng chi tiết, đảm bảo độ hoàn thiện hoàn hảo và hướng dẫn bạn quy trình chăm sóc da sau xăm để giúp hình xăm mau lành, bền màu lâu dài.',
    icon: () => <HoanThien />
  },
  {
    id: 6,
    stepNumber: 'Bước 6',
    title: 'Theo dõi & bảo hành',
    subtitle: 'Chúng tôi theo dõi quá trình hồi phục để đảm bảo hình xăm lên màu chuẩn, đường nét rõ và tự nhiên. Dịch vụ bảo hành chuyên nghiệp giúp tác phẩm của bạn luôn giữ vẻ đẹp bền vững theo thời gian.',
    icon: () => <TheoDoi />
  }
];

