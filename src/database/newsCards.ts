/**
 * News data for LatestNews section
 * Tin mới nhất đầu tiên
 */

import NewYear2026 from '@/assets/images/news/new-year/happyNewYear2026.png';

export interface NewsCard {
    id: string;
    title: string;
    date: string;
    author: string;
    excerpt: string;
    image: string;
    content: string[];
    category: string;
}


const NEWS_IMAGES = {
    trends: 'https://images.unsplash.com/photo-1611501275019-9b5cda994e8d?w=800&q=80',
    aftercare: 'https://images.unsplash.com/photo-1598371839696-5c5bb00bdc28?w=800&q=80',
    hygiene: 'https://images.unsplash.com/photo-1579154204601-01588f351e67?w=800&q=80',
    workshop: 'https://images.unsplash.com/photo-1565058379802-bbe93b2f703a?w=800&q=80',
    colors: 'https://images.unsplash.com/photo-1542359649-31e03cd4d909?w=800&q=80',
    painLevel: 'https://images.unsplash.com/photo-1568515045052-f9a854d70bfd?w=800&q=80',
    history: 'https://images.unsplash.com/photo-1475403614135-5f1aa0eb5015?w=800&q=80',
    chooseArtist: 'https://images.unsplash.com/photo-1562962230-16e4623d36e6?w=800&q=80',
};

export const newsCards: NewsCard[] = [
    {
        id: 'thong-bao-nghi-tet-nguyen-dan-2026',
        title: 'Thông báo lịch nghỉ Tết Nguyên Đán 2026',
        date: '02/02/2026',
        author: 'The Trung Tattoo',
        excerpt: 'Studio xin thông báo lịch nghỉ Tết Nguyên Đán 2026 từ ngày 26/01 đến hết ngày 02/02/2026.',
        image: NewYear2026,
        content: [
            'Kính gửi Quý khách hàng thân mến,',
            'Tết là khoảng thời gian để chậm lại — không phải để mất đà, mà để giữ nhịp, giữ lực và sẵn sàng tăng tốc đúng thời điểm, đây cũng là thời gian để đội ngũ tạm rời khỏi nhịp làm việc liên tục, tái tạo năng lượng sáng tạo và chuẩn bị cho những concept, những tác phẩm có chiều sâu hơn cho năm mới.',
            'Studio kính gửi tới quý khách hàng lịch nghĩ lễ Âm lịch 2026 như sau: bắt đầu từ 12/02/2026 (25 tháng Chạp) đến hết 22/02/2026 (mùng 6 Tết) và chính thức mở cửa trở lại từ 23/02/2026 (mùng 7 Tết)',
            'Trong thời gian này, toàn bộ lịch hẹn sẽ được tự động sắp xếp lại sau ngày hoạt động. Đội ngũ studio vẫn duy trì hỗ trợ qua Zalo và Facebook để đảm bảo mọi kế hoạch tattoo — từ concept đến session planning — đều đã được chuẩn bị kỹ lưỡng trước khi bắt đầu.',
            'Với chúng tôi, năm mới không đơn thuần là một mốc thời gian. Đó là điểm khởi đầu cho những tác phẩm được thiết kế để tồn tại lâu dài - cả về thẩm mỹ, kỹ thuật và giá trị cá nhân.',
            'Cảm ơn bạn đã chọn Studio là một phần trong hành trình ghi dấu thời gian của mình.',
            'Chúc bạn bước vào năm 2026 với nội lực vững vàng, hướng đi rõ ràng và tự do theo chất rất riêng.',
        ],
        category: 'Thông báo'
    },
    {
        id: 'xu-huong-tattoo-2026',
        title: 'Xu hướng hình xăm nổi bật năm 2026',
        date: '10/01/2026',
        author: 'Thế Trung',
        excerpt: 'Khám phá những xu hướng hình xăm được dự đoán sẽ thống trị năm 2026.',
        image: NEWS_IMAGES.trends,
        content: [
            'Năm 2026 hứa hẹn sẽ là một năm bùng nổ của nghệ thuật xăm với nhiều xu hướng mới mẻ và độc đáo.',
            'Fine Line Tattoo tiếp tục giữ vững vị thế với những đường nét tinh tế, mảnh mai nhưng đầy ý nghĩa. Phong cách này đặc biệt phù hợp với những ai yêu thích sự tối giản.',
            'Micro-Realism đang dần trở thành lựa chọn hàng đầu cho những ai muốn có một tác phẩm nghệ thuật thu nhỏ trên da. Kỹ thuật này đòi hỏi tay nghề cao và sự tỉ mỉ đến từng chi tiết.',
            'Watercolor Tattoo với màu sắc tươi sáng, tự nhiên như tranh vẽ sẽ tiếp tục thu hút giới trẻ. Phong cách này mang đến cảm giác nhẹ nhàng, bay bổng.',
            'Geometric và Dotwork kết hợp tạo nên những tác phẩm độc đáo với các hình học và kỹ thuật chấm điểm tinh xảo.',
            'Tại The Trung Tattoo, chúng tôi luôn cập nhật và nắm bắt các xu hướng mới nhất để mang đến cho khách hàng những tác phẩm chất lượng và đẳng cấp nhất.'
        ],
        category: 'Xu hướng'
    },
    {
        id: 'huong-dan-cham-soc-sau-xam',
        title: 'Hướng dẫn chăm sóc hình xăm sau khi xăm',
        date: '05/01/2026',
        author: 'The Trung Tattoo',
        excerpt: 'Những lưu ý quan trọng để hình xăm của bạn luôn đẹp và bền màu theo thời gian.',
        image: NEWS_IMAGES.aftercare,
        content: [
            'Việc chăm sóc hình xăm đúng cách sau khi xăm là yếu tố quyết định đến chất lượng và độ bền của hình xăm.',
            '24 giờ đầu tiên: Giữ nguyên lớp màng bảo vệ do artist đắp. Không chạm tay vào vùng xăm. Tránh vận động mạnh làm đổ mồ hôi.',
            'Từ ngày 2-14: Rửa nhẹ nhàng bằng nước ấm và xà phòng dịu nhẹ. Thoa một lớp mỏng kem dưỡng chuyên dụng. Không gãi, không bóc vảy.',
            'Tránh tiếp xúc nước lâu: Không ngâm mình trong bồn tắm, bể bơi hoặc biển trong ít nhất 2-3 tuần đầu.',
            'Bảo vệ khỏi ánh nắng: Tránh tiếp xúc trực tiếp với ánh nắng mặt trời. Sau khi hình xăm lành hẳn, luôn sử dụng kem chống nắng.',
            'Nếu có bất kỳ dấu hiệu bất thường như sưng tấy, đỏ kéo dài, hoặc có mủ, hãy liên hệ ngay với studio để được tư vấn.'
        ],
        category: 'Kiến thức'
    },
    {
        id: 'the-trung-tattoo-dat-chung-chi-ve-sinh',
        title: 'The Trung Tattoo đạt chứng chỉ vệ sinh an toàn',
        date: '28/12/2025',
        author: 'The Trung Tattoo',
        excerpt: 'Studio vinh dự đạt chứng nhận vệ sinh an toàn theo tiêu chuẩn Bộ Y tế.',
        image: NEWS_IMAGES.hygiene,
        content: [
            'The Trung Tattoo vinh dự thông báo đã chính thức được cấp chứng nhận vệ sinh an toàn theo tiêu chuẩn của Bộ Y tế Việt Nam.',
            'Đây là kết quả của quá trình nỗ lực không ngừng trong việc nâng cao chất lượng dịch vụ và đảm bảo an toàn tuyệt đối cho khách hàng.',
            'Studio sử dụng máy Autoclave hiện đại để khử trùng dụng cụ, mực xăm nhập khẩu đạt chuẩn FDA và CE, cùng với quy trình vệ sinh nghiêm ngặt.',
            'Mỗi khách hàng đều được sử dụng bộ dụng cụ mới hoàn toàn, kim xăm sử dụng một lần và được xử lý đúng quy trình sau khi hoàn thành.',
            'Chứng nhận này là minh chứng cho cam kết của The Trung Tattoo trong việc mang đến dịch vụ xăm nghệ thuật an toàn, chất lượng và chuyên nghiệp nhất.'
        ],
        category: 'Tin Studio'
    },
    {
        id: 'workshop-tattoo-cho-nguoi-moi-bat-dau',
        title: 'Workshop xăm nghệ thuật cho người mới bắt đầu',
        date: '20/12/2025',
        author: 'Thế Trung',
        excerpt: 'Cơ hội tham gia workshop học xăm cơ bản với artist chuyên nghiệp.',
        image: NEWS_IMAGES.workshop,
        content: [
            'The Trung Tattoo tổ chức workshop xăm nghệ thuật dành cho những ai đam mê và muốn tìm hiểu về nghề xăm.',
            'Workshop kéo dài 3 ngày với nội dung bao gồm: Lịch sử và văn hóa xăm hình, Kiến thức về da và vệ sinh an toàn, Kỹ thuật vẽ và thiết kế mẫu xăm, Thực hành trên da giả.',
            'Học viên sẽ được trang bị kiến thức nền tảng vững chắc và có cơ hội thực hành dưới sự hướng dẫn trực tiếp của các artist giàu kinh nghiệm.',
            'Số lượng học viên giới hạn chỉ 10 người mỗi khóa để đảm bảo chất lượng đào tạo.',
            'Đăng ký ngay để nhận ưu đãi 20% cho 5 học viên đầu tiên. Liên hệ hotline hoặc inbox fanpage để biết thêm chi tiết.'
        ],
        category: 'Sự kiện'
    },
    {
        id: 'y-nghia-mau-sac-trong-hinh-xam',
        title: 'Ý nghĩa của màu sắc trong nghệ thuật xăm',
        date: '15/12/2025',
        author: 'Thế Trung',
        excerpt: 'Tìm hiểu ý nghĩa sâu xa của từng màu sắc được sử dụng trong hình xăm.',
        image: NEWS_IMAGES.colors,
        content: [
            'Màu sắc trong hình xăm không chỉ mang tính thẩm mỹ mà còn chứa đựng những ý nghĩa sâu sắc.',
            'Màu đen: Tượng trưng cho sức mạnh, bí ẩn và sự vĩnh cửu. Đây là màu cơ bản và phổ biến nhất trong nghệ thuật xăm.',
            'Màu đỏ: Đại diện cho tình yêu, đam mê và năng lượng. Thường được sử dụng trong các hình xăm về tình cảm hoặc sức mạnh.',
            'Màu xanh dương: Biểu tượng của sự bình yên, trí tuệ và lòng trung thành. Phù hợp với các hình xăm mang tính tâm linh.',
            'Màu vàng/vàng kim: Tượng trưng cho sự giàu có, may mắn và ánh sáng. Thường xuất hiện trong các hình xăm phương Đông.',
            'Việc lựa chọn màu sắc phù hợp sẽ giúp hình xăm của bạn không chỉ đẹp mà còn mang ý nghĩa sâu sắc hơn.'
        ],
        category: 'Kiến thức'
    },
    {
        id: 'vi-tri-xam-va-cam-giac-dau',
        title: 'Vị trí xăm và mức độ cảm giác đau',
        date: '10/12/2025',
        author: 'Thế Trung',
        excerpt: 'Hướng dẫn chọn vị trí xăm phù hợp dựa trên ngưỡng chịu đau của bạn.',
        image: NEWS_IMAGES.painLevel,
        content: [
            'Cảm giác đau khi xăm phụ thuộc rất nhiều vào vị trí trên cơ thể. Hiểu rõ điều này sẽ giúp bạn chuẩn bị tốt hơn.',
            'Vùng ít đau nhất: Bắp tay ngoài, đùi, bắp chân, vai. Những vùng này có lớp cơ và mỡ dày, giúp giảm cảm giác đau đáng kể.',
            'Vùng đau vừa phải: Cẳng tay, lưng trên, ngực (nam), hông. Phù hợp cho người mới bắt đầu hoặc có ngưỡng chịu đau trung bình.',
            'Vùng đau nhiều: Xương sườn, cổ tay trong, mắt cá chân, bàn chân, đầu gối. Cần có sự chuẩn bị tâm lý tốt.',
            'Vùng đau nhất: Cột sống, khuỷu tay, đầu ngón tay, ngực (nữ). Chỉ khuyến khích cho người có kinh nghiệm và ngưỡng chịu đau cao.',
            'Lời khuyên: Nếu đây là hình xăm đầu tiên, hãy chọn vị trí ít đau để có trải nghiệm tích cực và tự tin hơn cho những lần tiếp theo.'
        ],
        category: 'Kiến thức'
    },
    {
        id: 'lich-su-nghe-thuat-xam-hinh',
        title: 'Lịch sử nghệ thuật xăm hình qua các thời kỳ',
        date: '05/12/2025',
        author: 'Thế Trung',
        excerpt: 'Hành trình phát triển của nghệ thuật xăm từ thời cổ đại đến hiện đại.',
        image: NEWS_IMAGES.history,
        content: [
            'Xăm hình là một trong những hình thức nghệ thuật lâu đời nhất của nhân loại, với lịch sử hơn 5000 năm.',
            'Thời cổ đại: Xác ướp Ötzi (3300 TCN) được phát hiện có hơn 60 hình xăm, chứng minh xăm hình đã tồn tại từ rất sớm. Người Ai Cập, Polynesia, Nhật Bản đều có truyền thống xăm hình đặc trưng.',
            'Thời trung cổ: Xăm hình bị kỳ thị ở phương Tây do ảnh hưởng tôn giáo, nhưng vẫn phát triển mạnh ở châu Á và các đảo Thái Bình Dương.',
            'Thế kỷ 18-19: Các thủy thủ phương Tây mang nghệ thuật xăm từ Polynesia về châu Âu. Máy xăm điện đầu tiên được phát minh năm 1891.',
            'Thế kỷ 20-21: Xăm hình trở thành xu hướng văn hóa đại chúng, được công nhận là một loại hình nghệ thuật đích thực với nhiều phong cách đa dạng.',
            'Ngày nay, nghệ thuật xăm không chỉ là trang trí mà còn là phương tiện thể hiện bản sắc cá nhân và câu chuyện cuộc sống.'
        ],
        category: 'Kiến thức'
    },
    {
        id: 'cach-chon-artist-phu-hop',
        title: 'Cách chọn artist phù hợp cho hình xăm của bạn',
        date: '01/12/2025',
        author: 'The Trung Tattoo',
        excerpt: 'Những tiêu chí quan trọng để tìm được artist xăm phù hợp với phong cách của bạn.',
        image: NEWS_IMAGES.chooseArtist,
        content: [
            'Chọn đúng artist là yếu tố quyết định chất lượng hình xăm. Dưới đây là những tiêu chí bạn nên cân nhắc.',
            'Xem portfolio: Đánh giá qua các tác phẩm đã thực hiện. Chú ý đến sự đồng đều về chất lượng, độ chi tiết và phong cách. Mỗi artist thường có thế mạnh riêng.',
            'Kiểm tra vệ sinh: Studio phải có giấy phép hoạt động, sử dụng kim và mực một lần, có quy trình khử trùng thiết bị rõ ràng.',
            'Đọc đánh giá: Tìm hiểu feedback từ khách hàng trước. Chú ý đến trải nghiệm tổng thể, không chỉ kết quả hình xăm.',
            'Buổi tư vấn: Artist chuyên nghiệp sẽ lắng nghe ý tưởng, đưa ra góp ý xây dựng và giải thích rõ quy trình. Tránh những nơi vội vàng hoặc không quan tâm đến mong muốn của bạn.',
            'Tại The Thế Trung Tattoo, chúng tôi luôn đặt sự hài lòng của khách hàng lên hàng đầu với quy trình tư vấn minh bạch và chuyên nghiệp.'
        ],
        category: 'Kiến thức'
    }
];

export const getNewsCardById = (id: string): NewsCard | undefined => {
    return newsCards.find(card => card.id === id);
};
