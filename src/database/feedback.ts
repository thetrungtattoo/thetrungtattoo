/**
 * Dữ liệu đánh giá từ khách hàng
 * Định dạng địa chỉ: "Phường/Xã - Tỉnh" (không ghi chữ "Phường" hoặc "Xã")
 */

export interface Feedback {
    id: string;
    avatar: string;
    name: string;
    address: string;
    rating: number;
    content: string;
    date: string;
    service?: string;
    verified?: boolean;
}

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
        content: 'Đã tìm hiểu khá lâu trước khi quyết định làm kín tay đầu tiên. Chọn The Thế Trung vì danh mục tác phẩm ấn tượng và quy trình tư vấn chuyên nghiệp. Nghệ sĩ hiểu chính xác điều tôi muốn và còn đề xuất những cải tiến mà tôi không nghĩ tới. 3 buổi xăm, mỗi buổi 5 tiếng, kết quả vượt xa mong đợi. Xứng đáng từng đồng.',
        date: '15/12/2024',
        service: 'Kín tay phong cách Nhật',
        verified: true
    },
    {
        id: '2',
        avatar: 'https://i.pravatar.cc/150?img=5',
        name: 'Trần Thị Bình',
        address: formatAddress('Phường Pleiku - Gia Lai'),
        rating: 5,
        content: 'Lần đầu xăm, hồi hộp lắm. Đội ngũ rất kiên nhẫn, giải thích từng bước, không vội vàng. Quá trình thiết kế mất 2 tuần vì tôi hay thay đổi ý, họ không phàn nàn một lời. Tác phẩm cuối cùng – một bông hồng chân thực trên cổ tay – hoàn hảo. Hướng dẫn chăm sóc rõ ràng, quá trình lành da suôn sẻ. Rất khuyến khích cho người mới.',
        date: '10/12/2024',
        service: 'Hoa hồng nét mảnh',
        verified: true
    },
    {
        id: '3',
        avatar: 'https://i.pravatar.cc/150?img=12',
        name: 'Lê Minh Cường',
        address: formatAddress('Phường Nghĩa Lộ - Quảng Ngãi'),
        rating: 5,
        content: 'Che phủ một hình xăm cũ bị nhòe từ tiệm khác. Tưởng hết cách nhưng nghệ sĩ ở đây biến nó thành tuyệt phẩm. Họ thật thà về giới hạn, không hứa hẹn quá mức. Quá trình thiết kế mất thời gian nhưng kết quả đáng chờ đợi. Giờ tự hào khoe thay vì phải giấu.',
        date: '08/12/2024',
        service: 'Che phủ Blackwork',
        verified: true
    },
    {
        id: '4',
        avatar: 'https://i.pravatar.cc/150?img=20',
        name: 'Phạm Thị Dung',
        address: formatAddress('Phường Sơn Trà - Đà Nẵng'),
        rating: 5,
        content: 'Quy trình đặt lịch rõ ràng, không cần đến tận nơi cho buổi tư vấn đầu tiên – gọi video được. Nghệ sĩ gửi 3 phương án thiết kế, tôi chọn 1 và yêu cầu điều chỉnh nhỏ, xong. Ngày xăm thoải mái, studio sạch sẽ, nhiệt độ mát mẻ. Lành đẹp. Quy trình đơn giản nhưng hiệu quả.',
        date: '05/12/2024',
        service: 'Hình học tối giản',
        verified: true
    },
    {
        id: '5',
        avatar: 'https://i.pravatar.cc/150?img=33',
        name: 'Hoàng Văn Đức',
        address: formatAddress('Xã Biển Hồ - Gia Lai'),
        rating: 5,
        content: 'Bay từ Gia Lai xuống đặc biệt cho hình kín lưng. Đáng chuyến đi. Nghệ sĩ có tầm nhìn cho các tác phẩm lớn mà tiệm địa phương không sánh được. 4 buổi xăm trong 6 tháng, chất lượng đồng đều xuyên suốt. Liên lạc giữa các buổi xuất sắc – họ nhớ chính xác chỗ dừng lại mỗi lần.',
        date: '03/12/2024',
        service: 'Kín lưng phong cách Nhật',
        verified: true
    },
    {
        id: '6',
        avatar: 'https://i.pravatar.cc/150?img=47',
        name: 'Võ Thị Hương',
        address: formatAddress('Phường Cẩm Thành - Quảng Ngãi'),
        rating: 5,
        content: 'Phong cách màu nước khó tìm nghệ sĩ làm tốt ở Việt Nam. Tìm thấy The Thế Trung qua mạng xã hội, danh mục tác phẩm thuyết phục được tôi. Thực tế đúng như hình – không phải trường hợp "hình thì đẹp, làm thì khác". Màu hòa quyện mượt mà, không bị loang sau khi lành. Ấn tượng.',
        date: '01/12/2024',
        service: 'Phượng hoàng màu nước',
        verified: true
    },
    {
        id: '7',
        avatar: 'https://i.pravatar.cc/150?img=51',
        name: 'Đặng Văn Hùng',
        address: formatAddress('Phường Hòa Khánh - Đà Nẵng'),
        rating: 5,
        content: 'Hình tưởng niệm cho ba tôi – chân dung siêu thực. Dự án mang nhiều cảm xúc, nghệ sĩ xử lý rất tinh tế. Không vội vàng, cho thời gian để tôi lấy lại bình tĩnh khi cần. Tác phẩm cuối cùng nắm bắt chính xác thần thái trong ảnh gốc. Hơn cả hình xăm, đây là một sự tri ân. Biết ơn vô cùng.',
        date: '28/11/2024',
        service: 'Chân dung siêu thực',
        verified: true
    },
    {
        id: '8',
        avatar: 'https://i.pravatar.cc/150?img=58',
        name: 'Bùi Thị Lan',
        address: formatAddress('Xã Ia Grai - Gia Lai'),
        rating: 4.5,
        content: 'Trải nghiệm tổng thể tuyệt vời. Trừ 0.5 sao vì thời gian chờ lịch hẹn hơi lâu – 6 tuần. Có thể hiểu được với chất lượng và danh tiếng của studio, nhưng nói để ai cần gấp biết. Khi vào buổi xăm thì mọi thứ suôn sẻ. Thiết kế đẹp, thực hiện sạch sẽ.',
        date: '25/11/2024',
        service: 'Truyền thống Mỹ',
        verified: true
    },
    {
        id: '9',
        avatar: 'https://i.pravatar.cc/150?img=68',
        name: 'Ngô Văn Minh',
        address: formatAddress('Xã Sơn Tịnh - Quảng Ngãi'),
        rating: 4.5,
        content: 'Tay nghề chắc, dịch vụ chuyên nghiệp. Nghệ sĩ tỉ mỉ, đường nét sạch, tô bóng mượt. Không gian studio thoải mái nhưng gọn gàng. Giá hợp lý với chất lượng nhận được. Chỉ lưu ý: chỗ đậu xe hơi hạn chế, nên tính trước. Chắc chắn sẽ quay lại cho hình tiếp theo.',
        date: '22/11/2024',
        service: 'Kín tay Blackwork',
        verified: true
    },
    {
        id: '10',
        avatar: 'https://i.pravatar.cc/150?img=70',
        name: 'Sarah Johnson',
        address: 'Brooklyn, New York, Hoa Kỳ',
        rating: 5,
        content: 'Du lịch qua Việt Nam và có The Thế Trung trong danh sách phải ghé. Không thất vọng. Giao tiếp tiếng Anh trôi chảy, quy trình thiết kế hiệu quả dù thời gian hạn chế. Xăm được một hình cỡ trung trong một buổi. Chất lượng ngang ngửa các tiệm hàng đầu ở New York với giá phải chăng hơn nhiều. Nếu bạn đến Việt Nam và đang cân nhắc xăm hình – hãy đến đây.',
        date: '20/11/2024',
        service: 'Thiết kế trang trí riêng',
        verified: true
    },
    {
        id: '11',
        avatar: 'https://i.pravatar.cc/150?img=11',
        name: 'Phan Văn Nam',
        address: formatAddress('Phường Ngũ Hành Sơn - Đà Nẵng'),
        rating: 5,
        content: 'Sưu tầm hình xăm từ 2019, đây là studio thứ 5 tôi thử ở Việt Nam. Tốt nhất không bàn cãi. Chất lượng đồng đều qua nhiều buổi xăm, nghệ sĩ thực sự quan tâm đến việc hình xăm sẽ như thế nào sau nhiều năm, không chỉ lúc mới xong. Tư duy dài hạn hiếm có trong ngành này. Nể phục.',
        date: '18/11/2024',
        service: 'Kín tay Tân truyền thống',
        verified: true
    },
    {
        id: '12',
        avatar: 'https://i.pravatar.cc/150?img=25',
        name: 'Lý Thị Oanh',
        address: formatAddress('Xã Chư Prông - Gia Lai'),
        rating: 5,
        content: 'Hình Mandala chấm điểm – 8 tiếng liên tục. Sức bền của nghệ sĩ ấn tượng, độ đều từ giờ thứ 1 đến giờ thứ 8 như nhau. Các chấm đều, khoảng cách chính xác. Không phải phong cách dễ làm, họ thực hiện xuất sắc. Quá trình như thiền định cho cả hai. Trải nghiệm đẹp, kết quả đẹp.',
        date: '15/11/2024',
        service: 'Mandala chấm điểm',
        verified: true
    },
    {
        id: '13',
        avatar: 'https://i.pravatar.cc/150?img=39',
        name: 'Trương Văn Phong',
        address: formatAddress('Phường Trương Quang Trọng - Quảng Ngãi'),
        rating: 5,
        content: 'Sau 5 năm với hình xăm cũ không ưng, cuối cùng cũng tìm được người che phủ đúng cách. Nghệ sĩ dành thời gian phân tích mực cũ, đề xuất các phương án thực tế, thực hiện hoàn hảo. Hình cũ giờ hoàn toàn biến mất. Lẽ ra nên đến đây từ đầu. Bài học kinh nghiệm.',
        date: '12/11/2024',
        service: 'Che phủ phong cách Nhật',
        verified: true
    },
    {
        id: '14',
        avatar: 'https://i.pravatar.cc/150?img=45',
        name: 'Đinh Thị Quỳnh',
        address: formatAddress('Phường An Hải - Đà Nẵng'),
        rating: 5,
        content: 'Hình xăm chữ làm quà sinh nhật cho mẹ. Khó vì việc chọn font rất quan trọng với chữ viết. Nghệ sĩ đề xuất điều chỉnh để chữ chảy đẹp hơn trên da – những điều tôi không nghĩ đến. Chuyên môn tinh tế tạo nên sự khác biệt. Mẹ rất thích, nhiệm vụ hoàn thành.',
        date: '10/11/2024',
        service: 'Chữ viết nghệ thuật',
        verified: true
    },
    {
        id: '15',
        avatar: 'https://i.pravatar.cc/150?img=55',
        name: 'Vũ Văn Sơn',
        address: formatAddress('Xã Ia Krái - Gia Lai'),
        rating: 5,
        content: 'Chân dung siêu thực của con gái. Rủi ro cao – xăm khuôn mặt người thân không có chỗ cho sai sót. Nghệ sĩ dành thêm thời gian chỉnh tỷ lệ cho đúng trước khi bắt đầu. Kết quả: Nắm bắt hoàn hảo thần thái của con bé. Khoảnh khắc đầy cảm xúc khi vợ tôi nhìn thấy. Đây là lý do tôi chọn người chuyên nghiệp.',
        date: '08/11/2024',
        service: 'Chân dung siêu thực',
        verified: true
    },
    {
        id: '16',
        avatar: 'https://i.pravatar.cc/150?img=62',
        name: 'James Wilson',
        address: 'London, Vương quốc Anh',
        rating: 5,
        content: 'Đây là hình xăm thứ ba từ các studio châu Á, lần đầu tiên ở Việt Nam. The Thế Trung sánh ngang với các tiệm hàng đầu ở Bangkok và Tokyo. Cơ sở sạch sẽ, nghệ sĩ tay nghề cao, giá hợp lý. Xăm một mặt nạ Quỷ Nhật – chi tiết đáng kinh ngạc. Đã lên kế hoạch quay lại để xăm thêm. Rất khuyến khích cho du khách.',
        date: '05/11/2024',
        service: 'Mặt nạ Quỷ Nhật Bản',
        verified: true
    },
    {
        id: '17',
        avatar: 'https://i.pravatar.cc/150?img=15',
        name: 'Lê Thị Thanh',
        address: formatAddress('Xã Sơn Hà - Quảng Ngãi'),
        rating: 4.5,
        content: 'Hình hoa lá nét mảnh ở mặt trong cánh tay. Công việc tinh xảo đòi hỏi tay vững, nghệ sĩ đã làm được. Đường nét sau khi lành vẫn sắc nét – dấu hiệu của kỹ thuật đúng. Đặt lịch mất vài tuần (studio đông khách) nhưng đáng chờ. Trừ 0.5 sao vì muốn có thêm lựa chọn thiết kế trong buổi tư vấn đầu tiên.',
        date: '03/11/2024',
        service: 'Hoa lá nét mảnh',
        verified: true
    },
    {
        id: '18',
        avatar: 'https://i.pravatar.cc/150?img=28',
        name: 'Hoàng Văn Tuấn',
        address: formatAddress('Phường Hòa Cường - Đà Nẵng'),
        rating: 5,
        content: 'Kín ngực – Cá chép và sóng. Cam kết lớn, studio đối xử tương xứng. Nhiều buổi tư vấn, sửa thiết kế cho đến khi hoàn hảo, thời gian và giá rõ ràng ngay từ đầu. Không bất ngờ. Thực hiện đúng như kế hoạch. Đây là cách các dự án lớn nên được xử lý.',
        date: '01/11/2024',
        service: 'Kín ngực phong cách Nhật',
        verified: true
    },
    {
        id: '19',
        avatar: 'https://i.pravatar.cc/150?img=36',
        name: 'Phạm Thị Uyên',
        address: formatAddress('Xã Mang Yang - Gia Lai'),
        rating: 5,
        content: 'Hình xăm đôi với bạn thân. Tưởng hình nhỏ thì đơn giản, nhưng thực ra đòi hỏi sự chính xác cao. Hai nghệ sĩ phối hợp để đảm bảo hai hình giống hệt nhau. Sự chu đáo đáng quý. Cả hai đều hài lòng với kết quả. Cột mốc tình bạn hoàn hảo.',
        date: '30/10/2024',
        service: 'Hình đôi tối giản',
        verified: true
    },
    {
        id: '20',
        avatar: 'https://i.pravatar.cc/150?img=42',
        name: 'Nguyễn Văn Vinh',
        address: formatAddress('Phường Đức Phổ - Quảng Ngãi'),
        rating: 5,
        content: 'Hình Samurai kín lưng bắt đầu từ 2 năm trước, vừa hoàn thành. Nghệ sĩ bắt đầu từ đầu vẫn nhớ mọi chi tiết khi tôi quay lại. Sự liên tục qua các dự án dài hạn thật ấn tượng. Tác phẩm cuối cùng thống nhất dù được thực hiện qua nhiều buổi. Đây mới là tay nghề thực thụ.',
        date: '28/10/2024',
        service: 'Samurai kín lưng',
        verified: true
    }
];
