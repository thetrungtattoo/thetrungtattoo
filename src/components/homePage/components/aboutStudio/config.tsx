import React from 'react';
import { HandSparkles, Gem, HandsBrain, PuzzlePieceIntegration, HandsTogetherHeart } from '@/assets/svg/svg';
export interface TabItem {
    id: string;
    title: string;
    content: string;
    icon?: React.ReactElement;
  }
  
  export interface TabNavigationProps {
    tabs: TabItem[];
    activeTab: string;
    onTabChange: (tabId: string) => void;
  }
  
  export interface TabContentProps {
    activeTab: string;
    tabs: TabItem[];
  }
  
  export interface TabIndicatorProps {
    activeIndex: number;
  }

export const ABOUT_TABS: TabItem[] = [
    {
        id: 've-sinh',
        title: 'Vệ sinh – An toàn',
        content: 'Chúng tôi đặt yếu tố an toàn sức khỏe khách hàng lên hàng đầu. Toàn bộ kim xăm đều dùng một lần, dụng cụ được khử trùng bằng máy Autoclave chuẩn y tế. Không gian xăm luôn sạch sẽ, vô trùng tuyệt đối, giúp bạn hoàn toàn yên tâm trong suốt quá trình thực hiện.',
        icon: <HandSparkles />,
    },
    {
        id: 'muc-xam',
        title: 'Mực Xăm Cao Cấp',
        content: 'Sử dụng 100% mực chính hãng được FDA chứng nhận, an toàn tuyệt đối cho da và không gây kích ứng. Mực có độ bám cao, giữ màu bền đẹp nhiều năm. Bảng màu đa dạng, từ tông đen xám tinh tế đến màu sắc sống động, phù hợp với mọi phong cách và ý tưởng xăm.',
        icon: <Gem />,
    },
    {
        id: 'tay-nghe',
        title: 'Tay nghề & Kinh nghiệm',
        content: 'Đội ngũ nghệ nhân với hơn 10 năm kinh nghiệm, am hiểu nhiều trường phái xăm từ truyền thống đến hiện đại. Kỹ thuật đi nét, đổ bóng, phối màu được thực hiện tỉ mỉ, giúp mỗi hình xăm trở thành một tác phẩm nghệ thuật độc bản, tinh xảo và giàu cảm xúc.',
        icon: <HandsBrain />,
    },
    {
        id: 'thiet-ke',
        title: 'Thiết kế Cá nhân hóa',
        content: 'Chúng tôi không chỉ xăm hình, mà còn tạo nên tác phẩm mang dấu ấn riêng của bạn. Mỗi thiết kế đều được tư vấn, phác thảo và điều chỉnh theo mong muốn khách hàng, đảm bảo tính độc quyền – không trùng lặp, giúp hình xăm phản ánh cá tính và câu chuyện riêng biệt.',
        icon: <PuzzlePieceIntegration />,
    },
    {
        id: 'cham-soc',
        title: 'Chăm sóc & Bảo hành',
        content: 'Khách hàng sẽ được hướng dẫn chi tiết quy trình chăm sóc sau xăm để da hồi phục nhanh và lên màu chuẩn đẹp. Ngoài ra, chúng tôi có chính sách bảo hành và dặm lại khi cần, đảm bảo hình xăm của bạn luôn bền màu, sắc nét và hoàn hảo theo thời gian.',
        icon: <HandsTogetherHeart />,
    },
    
];

