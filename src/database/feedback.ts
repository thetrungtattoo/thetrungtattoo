/**
 * Dữ liệu feedback/đánh giá từ khách hàng
 * Format địa chỉ: "Phường/Xã - Tỉnh" (không ghi chữ "Phường" hoặc "Xã")
 */

export interface Feedback {
    id: string;
    avatar: string;
    name: string;
    address: string;
    rating: number; // 1-5 sao (có thể dùng số thập phân như 4.5, 4.8, v.v.)
    content: string;
    date: string; // Format: "DD/MM/YYYY"
    service?: string; // Dịch vụ đã sử dụng (tùy chọn)
    verified?: boolean; // Đã xác minh (tùy chọn)
}

// Helper function để format địa chỉ (bỏ chữ "Phường" hoặc "Xã")
const formatAddress = (address: string): string => {
    return address
        .replace(/^Phường\s+/i, '')
        .replace(/^Xã\s+/i, '')
        .trim();
};

export const FEEDBACK_DATA: Feedback[] = [
    {
        id: '1',
        avatar: 'https://i.pravatar.cc/150?img=1',
        name: 'Nguyễn Văn An',
        address: formatAddress('Phường Hải Châu - Đà Nẵng'),
        rating: 5,
        content: 'Trải nghiệm tuyệt vời tại The Thế Trung Tattoo Studio! Nghệ sĩ rất chuyên nghiệp, tư vấn nhiệt tình và thiết kế hình xăm đúng như mong muốn. Không gian studio sạch sẽ, đảm bảo vệ sinh an toàn. Hình xăm lên màu đẹp, đường nét sắc nét. Chắc chắn sẽ quay lại cho lần xăm tiếp theo!',
        date: '15/12/2024',
        service: 'Hình xăm Realism',
        verified: true
    },
    {
        id: '2',
        avatar: 'https://i.pravatar.cc/150?img=5',
        name: 'Trần Thị Bình',
        address: formatAddress('Phường Pleiku - Gia Lai'),
        rating: 5,
        content: 'Studio tattoo uy tín nhất mà tôi từng biết. Quy trình làm việc rất chuyên nghiệp từ khâu tư vấn đến hoàn thiện. Nghệ sĩ có tay nghề cao, thái độ phục vụ tận tâm. Hình xăm của tôi đã lành hoàn toàn và trông rất đẹp. Giá cả hợp lý so với chất lượng dịch vụ. Highly recommended!',
        date: '10/12/2024',
        service: 'Hình xăm Japanese Style',
        verified: true
    },
    {
        id: '3',
        avatar: 'https://i.pravatar.cc/150?img=12',
        name: 'Lê Minh Cường',
        address: formatAddress('Phường Nghĩa Lộ - Quảng Ngãi'),
        rating: 5,
        content: 'Đã xăm tại nhiều nơi nhưng The Thế Trung là nơi tốt nhất. Đội ngũ nghệ sĩ giàu kinh nghiệm, hiểu rõ về nghệ thuật tattoo. Studio có đầy đủ thiết bị hiện đại, môi trường làm việc vô cùng chuyên nghiệp. Hình xăm của tôi nhận được rất nhiều lời khen. Cảm ơn team đã tạo ra tác phẩm tuyệt vời!',
        date: '08/12/2024',
        service: 'Full Sleeve Tattoo',
        verified: true
    },
    {
        id: '4',
        avatar: 'https://i.pravatar.cc/150?img=20',
        name: 'Phạm Thị Dung',
        address: formatAddress('Phường Sơn Trà - Đà Nẵng'),
        rating: 5,
        content: 'Lần đầu xăm hình và tôi rất hài lòng! Nhân viên tư vấn rất chu đáo, giải thích rõ ràng về quy trình và cách chăm sóc sau xăm. Nghệ sĩ vẽ thiết kế trước khi xăm để tôi xem và chỉnh sửa. Hình xăm đẹp hơn cả mong đợi, màu sắc tươi sáng và bền. Studio rất sạch sẽ, đảm bảo an toàn vệ sinh.',
        date: '05/12/2024',
        service: 'Hình xăm Minimalist',
        verified: true
    },
    {
        id: '5',
        avatar: 'https://i.pravatar.cc/150?img=33',
        name: 'Hoàng Văn Đức',
        address: formatAddress('Xã Biển Hồ - Gia Lai'),
        rating: 5,
        content: 'The Thế Trung Tattoo Studio thực sự là địa chỉ đáng tin cậy cho những ai yêu thích nghệ thuật tattoo. Nghệ sĩ có phong cách riêng, sáng tạo và tỉ mỉ trong từng chi tiết. Tôi đã xăm 3 hình tại đây và tất cả đều xuất sắc. Giá cả minh bạch, không phát sinh thêm chi phí. Chắc chắn sẽ giới thiệu cho bạn bè!',
        date: '03/12/2024',
        service: 'Hình xăm Geometric',
        verified: true
    },
    {
        id: '6',
        avatar: 'https://i.pravatar.cc/150?img=47',
        name: 'Võ Thị Hương',
        address: formatAddress('Phường Cẩm Thành - Quảng Ngãi'),
        rating: 5,
        content: 'Studio tattoo chuyên nghiệp với đội ngũ nghệ sĩ tài năng. Tôi rất ấn tượng với cách họ lắng nghe ý tưởng và biến nó thành tác phẩm nghệ thuật đẹp mắt. Quy trình làm việc khoa học, đúng giờ hẹn. Hình xăm của tôi đã lành hoàn toàn và trông rất tự nhiên. Cảm ơn team đã mang đến trải nghiệm tuyệt vời!',
        date: '01/12/2024',
        service: 'Hình xăm Watercolor',
        verified: true
    },
    {
        id: '7',
        avatar: 'https://i.pravatar.cc/150?img=51',
        name: 'Đặng Văn Hùng',
        address: formatAddress('Phường Hòa Khánh - Đà Nẵng'),
        rating: 5,
        content: 'Tuyệt vời từ A đến Z! Từ lúc đặt lịch đến khi hoàn thành, mọi thứ đều suôn sẻ. Nghệ sĩ rất kiên nhẫn, tư vấn kỹ lưỡng về vị trí xăm và kích thước phù hợp. Hình xăm của tôi có ý nghĩa đặc biệt và được thực hiện một cách hoàn hảo. Studio có không gian thoải mái, nhạc nhẹ nhàng giúp thư giãn trong quá trình xăm.',
        date: '28/11/2024',
        service: 'Hình xăm Memorial',
        verified: true
    },
    {
        id: '8',
        avatar: 'https://i.pravatar.cc/150?img=58',
        name: 'Bùi Thị Lan',
        address: formatAddress('Xã Ia Grai - Gia Lai'),
        rating: 4.5,
        content: 'Chất lượng dịch vụ tốt! Nghệ sĩ có tay nghề cao, đường nét chính xác và màu sắc đẹp. Studio tuân thủ nghiêm ngặt các tiêu chuẩn vệ sinh, sử dụng kim và mực chất lượng cao. Hình xăm của tôi đã lành nhanh chóng và trông rất đẹp. Giá cả hợp lý, xứng đáng với chất lượng. Sẽ quay lại!',
        date: '25/11/2024',
        service: 'Hình xăm Traditional',
        verified: true
    },
    {
        id: '9',
        avatar: 'https://i.pravatar.cc/150?img=68',
        name: 'Ngô Văn Minh',
        address: formatAddress('Xã Sơn Tịnh - Quảng Ngãi'),
        rating: 4.5,
        content: 'The Thế Trung là studio tattoo hàng đầu! Đội ngũ nghệ sĩ không chỉ giỏi về kỹ thuật mà còn rất am hiểu về nghệ thuật tattoo. Họ giúp tôi chọn được phong cách phù hợp và thiết kế độc đáo. Quá trình xăm diễn ra nhẹ nhàng, ít đau hơn tôi nghĩ. Hình xăm hoàn hảo, đúng như thiết kế. Rất hài lòng!',
        date: '22/11/2024',
        service: 'Hình xăm Blackwork',
        verified: true
    },
    {
        id: '10',
        avatar: 'https://i.pravatar.cc/150?img=70',
        name: 'Sarah Johnson',
        address: 'Brooklyn, New York, USA',
        rating: 5,
        content: 'Amazing tattoo studio! I traveled to Vietnam and found The Thế Trung Tattoo Studio. The artist was incredibly skilled and professional. The studio was clean and modern. My tattoo turned out perfect - the lines are crisp and the colors are vibrant. The aftercare instructions were clear and helpful. Highly recommend this place to anyone looking for quality tattoos in Vietnam!',
        date: '20/11/2024',
        service: 'Custom Design Tattoo',
        verified: true
    },
    {
        id: '11',
        avatar: 'https://i.pravatar.cc/150?img=11',
        name: 'Phan Văn Nam',
        address: formatAddress('Phường Ngũ Hành Sơn - Đà Nẵng'),
        rating: 5,
        content: 'Studio tattoo đẳng cấp quốc tế ngay tại Việt Nam! Nghệ sĩ có phong cách riêng biệt, sáng tạo và chuyên nghiệp. Tôi đã xăm một bộ hình xăm lớn và rất hài lòng với kết quả. Quy trình làm việc chuyên nghiệp, đúng giờ, không để khách hàng chờ đợi. Hình xăm lên màu đẹp, bền màu. Đây là địa chỉ đáng tin cậy cho mọi người yêu thích tattoo!',
        date: '18/11/2024',
        service: 'Back Piece Tattoo',
        verified: true
    },
    {
        id: '12',
        avatar: 'https://i.pravatar.cc/150?img=25',
        name: 'Lý Thị Oanh',
        address: formatAddress('Xã Chư Prông - Gia Lai'),
        rating: 5,
        content: 'Lần đầu tiên xăm hình và tôi không thể hài lòng hơn! Nhân viên tư vấn rất nhiệt tình, giúp tôi chọn được thiết kế phù hợp. Nghệ sĩ rất tỉ mỉ, từng đường nét đều được thực hiện cẩn thận. Studio có không gian đẹp, thoải mái. Hình xăm của tôi nhận được rất nhiều lời khen. Cảm ơn team đã tạo ra tác phẩm tuyệt vời!',
        date: '15/11/2024',
        service: 'Hình xăm Floral',
        verified: true
    },
    {
        id: '13',
        avatar: 'https://i.pravatar.cc/150?img=39',
        name: 'Trương Văn Phong',
        address: formatAddress('Phường Trương Quang Trọng - Quảng Ngãi'),
        rating: 5,
        content: 'The Thế Trung Tattoo Studio thực sự xứng đáng với danh tiếng! Nghệ sĩ có kinh nghiệm lâu năm, tay nghề điêu luyện. Tôi đã xăm một hình xăm phức tạp và kết quả vượt ngoài mong đợi. Studio sử dụng mực và thiết bị chất lượng cao, đảm bảo an toàn. Quy trình chăm sóc sau xăm được hướng dẫn chi tiết. Rất hài lòng!',
        date: '12/11/2024',
        service: 'Hình xăm Portrait',
        verified: true
    },
    {
        id: '14',
        avatar: 'https://i.pravatar.cc/150?img=45',
        name: 'Đinh Thị Quỳnh',
        address: formatAddress('Phường An Hải - Đà Nẵng'),
        rating: 5,
        content: 'Studio tattoo chuyên nghiệp với đội ngũ nghệ sĩ tài năng! Tôi rất ấn tượng với cách họ làm việc - tỉ mỉ, cẩn thận và sáng tạo. Hình xăm của tôi có ý nghĩa đặc biệt và được thực hiện một cách hoàn hảo. Studio có không gian đẹp, thoải mái, nhạc nhẹ nhàng. Giá cả minh bạch, không phát sinh thêm chi phí. Highly recommended!',
        date: '10/11/2024',
        service: 'Hình xăm Script',
        verified: true
    },
    {
        id: '15',
        avatar: 'https://i.pravatar.cc/150?img=55',
        name: 'Vũ Văn Sơn',
        address: formatAddress('Xã Ia Krái - Gia Lai'),
        rating: 5,
        content: 'Tuyệt vời! Đã xăm tại nhiều studio nhưng The Thế Trung là nơi tốt nhất. Nghệ sĩ có phong cách riêng, sáng tạo và chuyên nghiệp. Quy trình làm việc khoa học, đúng giờ hẹn. Hình xăm của tôi đã lành hoàn toàn và trông rất đẹp. Studio tuân thủ nghiêm ngặt các tiêu chuẩn vệ sinh. Chắc chắn sẽ quay lại cho lần xăm tiếp theo!',
        date: '08/11/2024',
        service: 'Hình xăm Neo-traditional',
        verified: true
    },
    {
        id: '16',
        avatar: 'https://i.pravatar.cc/150?img=62',
        name: 'James Wilson',
        address: 'London, UK',
        rating: 5,
        content: 'Outstanding tattoo studio! I was visiting Vietnam and decided to get a tattoo at The Thế Trung Tattoo Studio. The artist was professional, skilled, and spoke good English. The studio was clean and well-equipped. My tattoo exceeded my expectations - the design was perfect and the execution was flawless. The pricing was fair and transparent. I would definitely come back!',
        date: '05/11/2024',
        service: 'Hình xăm Dotwork',
        verified: true
    },
    {
        id: '17',
        avatar: 'https://i.pravatar.cc/150?img=15',
        name: 'Lê Thị Thanh',
        address: formatAddress('Xã Sơn Hà - Quảng Ngãi'),
        rating: 4.5,
        content: 'Studio tattoo uy tín và chuyên nghiệp! Nghệ sĩ rất kiên nhẫn, tư vấn kỹ lưỡng về thiết kế và vị trí xăm. Hình xăm của tôi có ý nghĩa đặc biệt và được thực hiện một cách hoàn hảo. Studio có không gian đẹp, thoải mái. Quy trình chăm sóc sau xăm được hướng dẫn chi tiết. Hình xăm đã lành nhanh chóng và trông rất đẹp. Rất hài lòng!',
        date: '03/11/2024',
        service: 'Hình xăm Mandala',
        verified: true
    },
    {
        id: '18',
        avatar: 'https://i.pravatar.cc/150?img=28',
        name: 'Hoàng Văn Tuấn',
        address: formatAddress('Phường Hòa Cường - Đà Nẵng'),
        rating: 5,
        content: 'The Thế Trung Tattoo Studio là địa chỉ đáng tin cậy cho những ai yêu thích nghệ thuật tattoo! Nghệ sĩ có tay nghề cao, đường nét chính xác và màu sắc đẹp. Studio sử dụng mực và thiết bị chất lượng cao, đảm bảo an toàn. Tôi đã xăm một bộ hình xăm lớn và rất hài lòng với kết quả. Giá cả hợp lý, xứng đáng với chất lượng. Sẽ quay lại!',
        date: '01/11/2024',
        service: 'Full Sleeve Tattoo',
        verified: true
    },
    {
        id: '19',
        avatar: 'https://i.pravatar.cc/150?img=36',
        name: 'Phạm Thị Uyên',
        address: formatAddress('Xã Mang Yang - Gia Lai'),
        rating: 5,
        content: 'Trải nghiệm tuyệt vời! Từ lúc đặt lịch đến khi hoàn thành, mọi thứ đều suôn sẻ. Nghệ sĩ rất chuyên nghiệp, hiểu rõ về nghệ thuật tattoo. Hình xăm của tôi nhận được rất nhiều lời khen. Studio có đầy đủ thiết bị hiện đại, môi trường làm việc vô cùng chuyên nghiệp. Quy trình làm việc khoa học, đúng giờ hẹn. Cảm ơn team!',
        date: '30/10/2024',
        service: 'Hình xăm Realism',
        verified: true
    },
    {
        id: '20',
        avatar: 'https://i.pravatar.cc/150?img=42',
        name: 'Nguyễn Văn Vinh',
        address: formatAddress('Phường Đức Phổ - Quảng Ngãi'),
        rating: 5,
        content: 'Studio tattoo đẳng cấp! Nghệ sĩ có phong cách riêng biệt, sáng tạo và chuyên nghiệp. Tôi rất ấn tượng với cách họ lắng nghe ý tưởng và biến nó thành tác phẩm nghệ thuật đẹp mắt. Hình xăm của tôi đã lành hoàn toàn và trông rất tự nhiên. Studio tuân thủ nghiêm ngặt các tiêu chuẩn vệ sinh. Highly recommended!',
        date: '28/10/2024',
        service: 'Hình xăm Japanese Style',
        verified: true
    }
];

