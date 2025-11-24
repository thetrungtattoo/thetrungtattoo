import { ROUTE_PATHS } from '@/config/path';

export interface DropdownItem {
    label: string;
    path: string;
}

export interface DropdownColumn {
    title: string;
    items: DropdownItem[];
}

export interface DropdownConfig {
    [key: string]: DropdownColumn[];
}

export const DROPDOWN_DELAY = 150;

export const DROPDOWN_CONFIG: DropdownConfig = {
    // collections: [
    //     {
    //         title: 'Phong cách',
    //         items: [
    //             { label: 'Hiện thực (Realism)', path: ROUTE_PATHS.COLLECTIONS.REALISTIC },
    //             { label: 'Đường nét (Linework)', path: ROUTE_PATHS.COLLECTIONS.LINEWORK },
    //             { label: 'Đen trắng (Black & Grey)', path: ROUTE_PATHS.COLLECTIONS.BLACK_GREY },
    //             { label: 'Màu nước (Watercolor)', path: ROUTE_PATHS.COLLECTIONS.WATERCOLOR },
    //             { label: 'Truyền thống (Traditional)', path: ROUTE_PATHS.COLLECTIONS.TRADITIONAL },
    //             { label: 'Nhật Bản (Japanese)', path: ROUTE_PATHS.COLLECTIONS.JAPANESE },
    //             { label: 'Tribal - Polynesian', path: ROUTE_PATHS.COLLECTIONS.TRIBAL_POLYNESIAN_MAORI },
    //         ]
    //     },
    //     {
    //         title: 'Khu vực trên cơ thể',
    //         items: [
    //             { label: 'Vị trí xăm cánh tay', path: ROUTE_PATHS.COLLECTIONS.ARM },
    //             { label: 'Vị trí xăm full lưng', path: ROUTE_PATHS.COLLECTIONS.BACK },
    //             { label: 'Vị trí xăm full chân', path: ROUTE_PATHS.COLLECTIONS.LEG },
    //             { label: 'Vị trí xăm ngực & vai', path: ROUTE_PATHS.COLLECTIONS.CHEST_SHOULDER },
    //             { label: 'Vị trí xăm cổ tay & cổ chân', path: ROUTE_PATHS.COLLECTIONS.ANKLE_WRIST_TATTOO },
    //             { label: 'Vị trí xăm ở bụng', path: ROUTE_PATHS.COLLECTIONS.BELLY_TATTOO },
    //             { label: 'Vị trí xăm sau gáy & cổ', path: ROUTE_PATHS.COLLECTIONS.NECK_TATTOO },

    //         ]
    //     }
    // ],
    services: [
        {
          title: '',
          items: [
            { label: 'Xăm nghệ thuật theo mẫu', path: ROUTE_PATHS.SERVICE_TATTOO.CUSTOM_TATTOOS },
            { label: 'Thiết kế và xăm theo yêu cầu', path: ROUTE_PATHS.SERVICE_TATTOO.PERSONALIZED_TATTOO },
            { label: 'Chăm sóc sau xăm & Xóa xăm', path: ROUTE_PATHS.SERVICE_TATTOO.TATTOO_CARE_REMOVAL },
            { label: 'Đào tạo & Workshop', path: ROUTE_PATHS.SERVICE_TATTOO.TRAINING_WORKSHOP },
          ],
        },
      ],
    pricing: [
        {
            title: '',
            items: [
                { label: 'Hình xăm full lưng', path: ROUTE_PATHS.BUSINESS.FULL_BACK },
                { label: 'Hình xăm full thân đến đùi', path: ROUTE_PATHS.BUSINESS.FULL_BODY },
                { label: 'Hình xăm full cánh tay', path: ROUTE_PATHS.BUSINESS.FULL_ARM },
                { label: 'Hình xăm nửa tay áo', path: ROUTE_PATHS.BUSINESS.HALF_SLEEVE },
                { label: 'Hình xăm full chân', path: ROUTE_PATHS.BUSINESS.FULL_LEG },
                { label: 'Hình xăm kích thước A4', path: ROUTE_PATHS.BUSINESS.A4_SIZE },
            ]
        }
    ],
    blog: [
        {
            title: 'Blog',
            items: [
                { label: 'Ý nghĩa những hình xăm', path: ROUTE_PATHS.BLOG_TATTOO.MEANING },
                { label: 'Câu chuyện khách hàng', path: ROUTE_PATHS.BLOG_TATTOO.STORIES },
                { label: 'Hướng dẫn chăm sóc sau xăm', path: ROUTE_PATHS.BLOG_TATTOO.AFTERCARE },
            ]
        },
        {
            title: 'Hỗ trợ khách hàng',
            items: [
                { label: 'Chăm sóc online với AI', path: ROUTE_PATHS.SUPPORT.CHAT },
                { label: 'Góp ý sản phẩm dịch vụ', path: ROUTE_PATHS.SUPPORT.FEEDBACK },
                { label: 'Câu hỏi thường gặp', path: ROUTE_PATHS.SUPPORT.FAQ },
                { label: 'Điều khoản & Điều kiện', path: ROUTE_PATHS.SUPPORT.TERMS },
                { label: 'Tiêu chuẩn cộng đồng', path: ROUTE_PATHS.SUPPORT.COMMUNITY_STANDARDS },
            ]
        }
    ]
};
