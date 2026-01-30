import Samurai from '@/assets/images/Meaning/summurai.jpg';
import DauLau from '@/assets/images/Meaning/daulau.png';
import Geisha from '@/assets/images/Meaning/Geisha.jpg';
import KyLan from '@/assets/images/Meaning/KyLan.jpg';
import Daruma from '@/assets/images/Meaning/Daruma.jpg';
import CaChep from '@/assets/images/Meaning/CaChep.jpg';
import OniHannya from '@/assets/images/Meaning/OniHannya.jpg';
import PhuongHoang from '@/assets/images/Meaning/PhuongHoang.jpg';
import DreamCatcher from '@/assets/images/Meaning/DreamCatcher.jpg';
import DaoChua from '@/assets/images/Meaning/DaoChua.jpg';
import DaoPhat from '@/assets/images/Meaning/DaoPhat.jpg';
import MaoriSamoa from '@/assets/images/Meaning/MaoriSamoa.jpg';
import Mandala from '@/assets/images/Meaning/Mandala.png';
import HoaBiNgan from '@/assets/images/Meaning/HoaBiNgan.jpg';
import Rong from '@/assets/images/Meaning/Rong.jpg';
import Celtic from '@/assets/images/Meaning/Celtic.jpg';
import QuanCong from '@/assets/images/Meaning/QuanCong.jpg';

// Samurai gallery images
import Samurai1 from '@/assets/images/Meaning/Samurai/download.jfif';
import Samurai2 from '@/assets/images/Meaning/Samurai/download (1).jfif';
import Samurai3 from '@/assets/images/Meaning/Samurai/download (2).jfif';
import Samurai4 from '@/assets/images/Meaning/Samurai/download (3).jfif';
import Samurai5 from '@/assets/images/Meaning/Samurai/download (4).jfif';
import Samurai6 from '@/assets/images/Meaning/Samurai/download (5).jfif';
import Samurai7 from '@/assets/images/Meaning/Samurai/download (6).jfif';
import Samurai8 from '@/assets/images/Meaning/Samurai/download (7).jfif';
import Samurai9 from '@/assets/images/Meaning/Samurai/download (8).jfif';
import Samurai10 from '@/assets/images/Meaning/Samurai/download (9).jfif';
import Samurai11 from '@/assets/images/Meaning/Samurai/download (10).jfif';
import Samurai12 from '@/assets/images/Meaning/Samurai/download (11).jfif';
import Samurai13 from '@/assets/images/Meaning/Samurai/download (12).jfif';
import Samurai14 from '@/assets/images/Meaning/Samurai/download (13).jfif';
import Samurai15 from '@/assets/images/Meaning/Samurai/Fearless Samurai.jfif';

import SamuraiUI4 from '@/assets/images/Meaning/Samurai/samurai/4.svg';
import SamuraiUI5 from '@/assets/images/Meaning/Samurai/samurai/5.svg';
import SamuraiUI6 from '@/assets/images/Meaning/Samurai/samurai/6.svg';

export interface ContentSection {
    type: 'text' | 'image' | 'title' | 'subtitle';
    content: string;
    image?: string;
    content2?: string;
}

export interface MeaningCard {
    id: string;
    slug: string;
    title: string;
    date: string;
    author: string;
    subtitle: string;
    image: string;
    imageUI: string[] | string;
    galleryImages: string[];
    content: ContentSection[];
    tags: string[];
    category: string;
    readTime: string;
    views: number;
}

export const meaningCards: MeaningCard[] = [
    {
        id: 'samurai-japanese-warrior-tattoo-meaning-2025',
        slug: 'samurai-japanese-warrior-tattoo-meaning',
        title: "Samurai Tattoo – Khi Bushido Khắc Trên Da",
        date: "22/02/2025",
        author: "The Trung",
        subtitle: "Trong 15 năm làm việc với hàng nghìn khách hàng quốc tế, tôi nhận thấy một điều: những người chọn Samurai không tìm kiếm một hình xăm – họ tìm kiếm một lời thề.",
        image: Samurai,
        imageUI: [SamuraiUI4, SamuraiUI5, SamuraiUI6],
        galleryImages: [Samurai, Samurai1, Samurai2, Samurai3, Samurai4, Samurai5, Samurai6, Samurai7, Samurai8, Samurai9, Samurai10, Samurai11, Samurai12, Samurai13, Samurai14, Samurai15],
        content: [
            {
                type: 'title',
                content: 'Vì Sao Samurai Là Biểu Tượng Bất Tử Trong Nghệ Thuật Xăm?'
            },
            {
                type: 'text',
                content: 'Có một câu hỏi tôi thường nhận được từ khách hàng mới: "Samurai có ý nghĩa gì?" Câu trả lời ngắn gọn là: Samurai không chỉ là một hình xăm – đó là một tuyên ngôn về cách bạn chọn sống.',
                content2: 'Từ kinh nghiệm tại The Thế Trung Tattoo Studio, khoảng 70% khách hàng chọn Samurai đều đang ở giai đoạn chuyển giao quan trọng trong cuộc sống – một cuộc chia tay, một sự nghiệp mới, hoặc đơn giản là quyết định sống đúng với giá trị của mình. Samurai không dành cho những người muốn "có một hình đẹp". Samurai dành cho những người sẵn sàng cam kết.'
            },
            {
                type: 'image',
                content: 'Samurai – Tinh thần Bushido khắc trên da',
                image: Samurai
            },
            {
                type: 'subtitle',
                content: 'Bushido: Bảy Đức Tính Định Hình Một Chiến Binh'
            },
            {
                type: 'text',
                content: 'Bushido – con đường của chiến binh – không phải là một khái niệm trừu tượng. Đó là bộ quy tắc sống được đúc kết qua hàng thế kỷ, bao gồm: Gi (Chính nghĩa), Yu (Dũng cảm), Jin (Nhân từ), Rei (Lễ phép), Makoto (Thành thật), Meiyo (Danh dự), và Chugi (Trung thành).',
                content2: 'Khi bạn mang hình Samurai trên da, bạn đang mang theo những giá trị này. Mỗi lần nhìn vào tác phẩm, đó là lời nhắc nhở: bạn đã chọn con đường nào, và bạn sẽ đi đến cùng như thế nào.'
            },
            {
                type: 'subtitle',
                content: 'Kỹ Thuật Thực Hiện: Japanese Traditional vs. Neo-Japanese'
            },
            {
                type: 'text',
                content: 'Tại studio, chúng tôi thực hiện Samurai theo hai hướng chính: Japanese Traditional (Irezumi) với đường nét bold, màu sắc flat, tuân thủ quy tắc cổ điển; và Neo-Japanese kết hợp realism hiện đại, tạo chiều sâu và chi tiết cao hơn.',
                content2: 'Một tác phẩm Samurai full sleeve thường cần 3-5 sessions, mỗi session 4-6 tiếng. Đây không phải là hình xăm bạn làm trong một buổi chiều – đó là hành trình, và chúng tôi đồng hành cùng bạn từng bước.'
            },
            {
                type: 'subtitle',
                content: 'Ai Phù Hợp Với Hình Xăm Samurai?'
            },
            {
                type: 'text',
                content: 'Samurai không dành cho tất cả mọi người – và điều đó hoàn toàn ổn. Nếu bạn đang tìm kiếm một biểu tượng của kỷ luật, danh dự, và sự cam kết với giá trị sống của mình, Samurai là lựa chọn đúng đắn.',
                content2: 'Tại The Thế Trung Tattoo Studio, chúng tôi không chỉ xăm – chúng tôi lắng nghe câu chuyện của bạn và biến nó thành tác phẩm nghệ thuật độc bản. Đặt lịch tư vấn để cùng chúng tôi thiết kế Samurai của riêng bạn.'
            }
        ],
        tags: ['SamuraiTattoo', 'JapaneseTattoo', 'Irezumi', 'BushidoSpirit', 'WarriorTattoo', 'TheTheTrungTattoo', 'TattooArt', 'InkCulture'],
        category: 'Japanese Traditional',
        readTime: '6 phút',
        views: 1250
    },
    {
        id: 'skull-tattoo-symbolism-life-death-2025',
        slug: 'skull-tattoo-symbolism-life-death',
        title: "Skull Tattoo – Memento Mori Và Nghệ Thuật Của Sự Sống",
        date: "20/08/2025",
        author: "The Trung",
        subtitle: "Đầu lâu không phải về cái chết. Đó là về việc sống – sống trọn vẹn, sống có ý thức, sống như thể mỗi ngày đều quan trọng.",
        image: DauLau,
        imageUI: DauLau,
        galleryImages: [DauLau],
        content: [
            {
                type: 'title',
                content: 'Skull Tattoo: Hiểu Lầm Lớn Nhất Trong Nghệ Thuật Xăm'
            },
            {
                type: 'text',
                content: 'Trong hơn một thập kỷ làm việc với khách hàng từ khắp nơi trên thế giới, tôi đã chứng kiến sự chuyển đổi đáng kể trong cách mọi người nhìn nhận hình xăm đầu lâu. Từ biểu tượng "rebel" của thập niên 90s, skull đã trở thành một trong những chủ đề được yêu cầu nhiều nhất bởi các CEO, bác sĩ, luật sư – những người thành đạt hiểu rằng thời gian là hữu hạn.',
                content2: 'Memento Mori – "Hãy nhớ rằng bạn sẽ chết" – không phải là lời đe dọa. Đó là lời mời gọi sống trọn vẹn hơn.'
            },
            {
                type: 'image',
                content: 'Skull Tattoo – Biểu tượng của Memento Mori',
                image: DauLau
            },
            {
                type: 'subtitle',
                content: 'Từ Triết Học La Mã Đến Nghệ Thuật Xăm Đương Đại'
            },
            {
                type: 'text',
                content: 'Memento Mori xuất phát từ La Mã cổ đại – nơi các tướng lĩnh chiến thắng được nhắc nhở về sự hữu hạn của vinh quang. Trong nghệ thuật xăm, skull mang theo triết lý này: mỗi ngày đều đáng sống, mỗi khoảnh khắc đều quý giá.',
                content2: 'Tại The Thế Trung Tattoo Studio, chúng tôi thực hiện skull theo nhiều phong cách: từ Realism chi tiết đến cực điểm, Blackwork bold với contrast mạnh, hay kết hợp với hoa để tạo nên sự cân bằng giữa sống và chết, đẹp và tàn phai.'
            },
            {
                type: 'subtitle',
                content: 'Sugar Skull, Realistic Skull, hay Geometric Skull?'
            },
            {
                type: 'text',
                content: 'Sugar Skull (Día de los Muertos) mang ý nghĩa tôn vinh người đã khuất, phổ biến trong văn hóa Mexico. Realistic Skull thể hiện sự đối diện trực tiếp với mortality. Geometric Skull mang tính triết học, trừu tượng hơn.',
                content2: 'Chọn phong cách nào phụ thuộc vào câu chuyện của bạn. Trong buổi tư vấn, chúng tôi sẽ cùng bạn tìm ra hướng đi phù hợp nhất.'
            },
            {
                type: 'subtitle',
                content: 'Kết Hợp Và Placement'
            },
            {
                type: 'text',
                content: 'Skull thường được kết hợp với hoa hồng (tình yêu và cái chết), đồng hồ (thời gian trôi), rắn (tái sinh), hoặc bướm (sự chuyển hóa). Placement phổ biến: cánh tay, ngực, lưng – những vị trí cho phép detail và size phù hợp.',
                content2: 'Nếu bạn đang tìm kiếm một tác phẩm skull có chiều sâu, không chỉ đẹp mà còn mang ý nghĩa cá nhân, hãy đặt lịch tư vấn với chúng tôi.'
            }
        ],
        tags: ['SkullTattoo', 'MementoMori', 'RealismTattoo', 'BlackworkTattoo', 'SugarSkull', 'TheTheTrungTattoo', 'TattooArt', 'InkMaster'],
        category: 'Blackwork & Realism',
        readTime: '5 phút',
        views: 980
    },
    {
        id: 'geisha-japanese-beauty-tattoo-meaning-2025',
        slug: 'geisha-japanese-beauty-tattoo-meaning',
        title: "Geisha Tattoo – Vẻ Đẹp Bất Diệt Của Nghệ Thuật Sống",
        date: "18/08/2025",
        author: "The Trung",
        subtitle: "Geisha không phải về vẻ đẹp bề ngoài. Đó là về sự hoàn thiện bản thân qua nghệ thuật – từng cử chỉ, từng ánh mắt đều là kết quả của hàng thập kỷ rèn luyện.",
        image: Geisha,
        imageUI: Geisha,
        galleryImages: [Geisha],
        content: [
            {
                type: 'title',
                content: 'Geisha: Hiểu Đúng Trước Khi Khắc Lên Da'
            },
            {
                type: 'text',
                content: 'Một trong những hiểu lầm phổ biến nhất mà tôi gặp: Geisha bị nhầm với courtesan. Thực tế, Geisha là nghệ sĩ biểu diễn – họ dành cả đời để hoàn thiện các nghệ thuật như trà đạo, múa truyền thống, chơi đàn shamisen, và nghệ thuật giao tiếp.',
                content2: 'Khi một khách hàng đến studio yêu cầu hình Geisha, câu hỏi đầu tiên của tôi luôn là: "Bạn muốn thể hiện điều gì?" Vẻ đẹp? Sự kiên nhẫn? Sự hoàn thiện không ngừng? Hay bí ẩn và quyền lực mềm?'
            },
            {
                type: 'image',
                content: 'Geisha – Nghệ thuật sống hóa thành hình xăm',
                image: Geisha
            },
            {
                type: 'subtitle',
                content: 'Biểu Tượng Của Sự Hoàn Thiện Không Ngừng'
            },
            {
                type: 'text',
                content: 'Để trở thành Geisha, một Maiko (học viên) phải trải qua ít nhất 5 năm đào tạo khắt khe. Mỗi chi tiết – từ cách đi, cách rót trà, đến góc nghiêng của đầu khi cười – đều được rèn luyện đến mức hoàn hảo.',
                content2: 'Hình xăm Geisha vì thế không chỉ đẹp về thị giác – nó mang theo triết lý về sự kiên nhẫn, kỷ luật, và niềm tin rằng vẻ đẹp đích thực đến từ nỗ lực không ngừng.'
            },
            {
                type: 'subtitle',
                content: 'Kỹ Thuật Thực Hiện Và Placement'
            },
            {
                type: 'text',
                content: 'Geisha đòi hỏi độ chi tiết cao – đặc biệt ở phần khuôn mặt, tóc, và kimono. Tại studio, chúng tôi thường thực hiện Geisha theo phong cách Neo-Japanese để tận dụng kỹ thuật shading hiện đại, giữ nguyên tinh thần truyền thống.',
                content2: 'Placement lý tưởng: cánh tay (half sleeve trở lên), lưng, hoặc đùi – những vị trí cho phép độ chi tiết cần thiết. Thời gian thực hiện: 2-4 sessions tùy kích thước và complexity.'
            },
            {
                type: 'subtitle',
                content: 'Ai Nên Chọn Hình Xăm Geisha?'
            },
            {
                type: 'text',
                content: 'Geisha phù hợp với những người trân trọng nghệ thuật sống, tin vào sự hoàn thiện bản thân, và có gu thẩm mỹ tinh tế. Đây không phải hình xăm "xu hướng" – đây là tuyên ngôn về cách bạn nhìn nhận cuộc sống.',
                content2: 'Nếu bạn muốn sở hữu một tác phẩm Geisha thực sự có hồn, hãy đến The Thế Trung Tattoo Studio để được tư vấn và thiết kế riêng.'
            }
        ],
        tags: ['GeishaTattoo', 'JapaneseTattoo', 'NeoJapanese', 'Irezumi', 'JapaneseArt', 'TheTheTrungTattoo', 'TattooInspiration', 'InkArt'],
        category: 'Japanese Traditional',
        readTime: '5 phút',
        views: 856
    },
    {
        id: 'kylin-chinese-mythical-creature-tattoo-2025',
        slug: 'kylin-chinese-mythical-creature-tattoo',
        title: "Kỳ Lân Tattoo – Linh Vật Của Những Người Chính Trực",
        date: "15/08/2025",
        author: "The Trung",
        subtitle: "Trong văn hóa Á Đông, Kỳ Lân không chọn ai để xuất hiện – nó chỉ đến với những người có đức độ. Đó là lý do hình xăm này không dành cho tất cả.",
        image: KyLan,
        imageUI: KyLan,
        galleryImages: [KyLan],
        content: [
            {
                type: 'title',
                content: 'Kỳ Lân: Linh Vật Hiền Lành Nhất Trong Tứ Linh'
            },
            {
                type: 'text',
                content: 'Khác với Rồng (quyền lực), Phượng Hoàng (cao quý), hay Rùa (trường thọ), Kỳ Lân đại diện cho sự nhân từ và chính trực. Theo truyền thuyết, Kỳ Lân chỉ xuất hiện khi thiên hạ thái bình hoặc khi có bậc thánh nhân ra đời.',
                content2: 'Trong nghệ thuật xăm, Kỳ Lân thu hút những người tin vào karma, sống đúng với giá trị bản thân, và mong muốn được bảo vệ bởi năng lượng thiện lành.'
            },
            {
                type: 'image',
                content: 'Kỳ Lân – Linh vật của đức độ và may mắn',
                image: KyLan
            },
            {
                type: 'subtitle',
                content: 'Ý Nghĩa Sâu Xa: Không Chỉ Là May Mắn'
            },
            {
                type: 'text',
                content: 'Nhiều người chọn Kỳ Lân vì tin vào khả năng mang lại may mắn. Nhưng ý nghĩa thực sự sâu hơn: Kỳ Lân nhắc nhở rằng may mắn đến với những người sống chính trực.',
                content2: 'Tại studio, khoảng 60% khách hàng chọn Kỳ Lân là những người đang bắt đầu giai đoạn mới – khởi nghiệp, kết hôn, hoặc bước vào vị trí lãnh đạo. Họ không chỉ muốn may mắn – họ muốn một lời nhắc nhở về cách sống để xứng đáng với may mắn đó.'
            },
            {
                type: 'subtitle',
                content: 'Kỹ Thuật: Oriental Style Với Màu Sắc Truyền Thống'
            },
            {
                type: 'text',
                content: 'Kỳ Lân thường được thực hiện theo Oriental style với màu sắc đặc trưng: xanh lá (hòa bình), vàng gold (thịnh vượng), và đỏ (may mắn). Kỹ thuật shading gradient tạo chiều sâu, trong khi line work bold giữ sự rõ ràng theo thời gian.',
                content2: 'Placement phổ biến: lưng (full back hoặc half back), ngực, hoặc đùi. Thời gian thực hiện: 3-6 sessions tùy kích thước và chi tiết.'
            },
            {
                type: 'subtitle',
                content: 'Kỳ Lân vs. Các Linh Vật Khác'
            },
            {
                type: 'text',
                content: 'Nếu bạn muốn thể hiện quyền lực → chọn Rồng. Nếu bạn muốn thể hiện sự cao quý và tái sinh → chọn Phượng Hoàng. Nhưng nếu bạn tin vào sức mạnh của đức độ và muốn được bảo vệ bởi năng lượng thiện lành → Kỳ Lân là lựa chọn đúng đắn.',
                content2: 'Đặt lịch tư vấn tại The Thế Trung Tattoo Studio để cùng chúng tôi thiết kế Kỳ Lân độc bản cho riêng bạn.'
            }
        ],
        tags: ['KyLinTattoo', 'ChineseTattoo', 'OrientalTattoo', 'MythicalCreature', 'AsianArt', 'TheTheTrungTattoo', 'LuckyTattoo', 'InkCulture'],
        category: 'Oriental Traditional',
        readTime: '5 phút',
        views: 723
    },
    {
        id: 'daruma-japanese-wishing-doll-tattoo-2025',
        slug: 'daruma-japanese-wishing-doll-tattoo',
        title: "Daruma Tattoo – Ngã Bảy Lần, Đứng Dậy Tám",
        date: "12/08/2025",
        author: "The Trung",
        subtitle: "Nanakorobi yaoki – triết lý Nhật Bản về sự kiên cường. Daruma không có chân để ngã, nhưng nếu có, nó sẽ đứng dậy. Luôn luôn.",
        image: Daruma,
        imageUI: Daruma,
        galleryImages: [Daruma],
        content: [
            {
                type: 'title',
                content: 'Daruma: Từ Thiền Sư Đến Biểu Tượng Quyết Tâm'
            },
            {
                type: 'text',
                content: 'Daruma được tạo ra theo hình ảnh Bodhidharma – thiền sư đã ngồi thiền suốt 9 năm đến mức chân tay teo lại. Hình dáng tròn không chân của búp bê Daruma tượng trưng cho khả năng "tự đứng dậy" – đẩy nó ngã theo hướng nào, nó cũng trở về vị trí thẳng đứng.',
                content2: 'Trong nghệ thuật xăm, Daruma không dành cho những người "muốn thử". Nó dành cho những người đã quyết định – và sẵn sàng đi đến cùng.'
            },
            {
                type: 'image',
                content: 'Daruma – Biểu tượng của sự kiên cường',
                image: Daruma
            },
            {
                type: 'subtitle',
                content: 'Nghi Thức Một Mắt – Và Ý Nghĩa Trong Tattoo'
            },
            {
                type: 'text',
                content: 'Truyền thống Nhật Bản: khi đặt mục tiêu, bạn vẽ một mắt cho Daruma. Khi đạt được, bạn hoàn thành mắt còn lại. Nhiều khách hàng tại studio chọn xăm Daruma với một mắt – như một lời hứa với bản thân về mục tiêu đang theo đuổi.',
                content2: 'Một số quay lại sau vài tháng, vài năm để "hoàn thành" mắt còn lại khi đã đạt được mục tiêu. Đó là những moment đặc biệt nhất trong nghề của tôi.'
            },
            {
                type: 'subtitle',
                content: 'Phong Cách Và Kỹ Thuật'
            },
            {
                type: 'text',
                content: 'Daruma có thể được thực hiện theo nhiều phong cách: Traditional Japanese với màu đỏ đặc trưng, Neo-Japanese với chi tiết cao hơn, hoặc kết hợp với các element khác như hoa anh đào, sóng, hoặc kanji.',
                content2: 'Size linh hoạt từ nhỏ (cổ tay, mắt cá) đến lớn (bắp tay, bắp chân). Daruma nhỏ thường phù hợp với người mới xăm hoặc như một phần của bộ sưu tập Japanese.'
            },
            {
                type: 'subtitle',
                content: 'Ai Nên Chọn Daruma?'
            },
            {
                type: 'text',
                content: 'Daruma phù hợp với những người đang theo đuổi một mục tiêu cụ thể – khởi nghiệp, học tập, vượt qua một thử thách cá nhân. Nó là lời nhắc nhở hàng ngày: bạn có thể ngã, nhưng bạn sẽ đứng dậy.',
                content2: 'Tại The Thế Trung Tattoo Studio, chúng tôi sẽ cùng bạn thiết kế Daruma phù hợp với câu chuyện và mục tiêu của riêng bạn.'
            }
        ],
        tags: ['DarumaTattoo', 'JapaneseTattoo', 'NeverGiveUp', 'Perseverance', 'JapaneseArt', 'TheTheTrungTattoo', 'TattooMeaning', 'InkInspiration'],
        category: 'Japanese Traditional',
        readTime: '5 phút',
        views: 645
    },
    {
        id: 'carp-fish-japanese-symbolism-tattoo-2025',
        slug: 'carp-fish-japanese-symbolism-tattoo',
        title: "Koi Fish Tattoo – Vượt Vũ Môn Và Hóa Rồng",
        date: "10/08/2025",
        author: "The Trung",
        subtitle: "Truyền thuyết kể rằng cá Koi bơi ngược dòng Hoàng Hà, vượt qua Vũ Môn và hóa Rồng. Đó không chỉ là câu chuyện – đó là triết lý sống.",
        image: CaChep,
        imageUI: CaChep,
        galleryImages: [CaChep],
        content: [
            {
                type: 'title',
                content: 'Koi: Biểu Tượng Của Sự Chuyển Hóa Qua Nỗ Lực'
            },
            {
                type: 'text',
                content: 'Trong nghệ thuật xăm Nhật Bản, Koi là một trong những chủ đề được yêu cầu nhiều nhất – và cũng bị hiểu sai nhiều nhất. Nhiều người chọn Koi vì "đẹp" hoặc "may mắn", nhưng ý nghĩa thực sự sâu hơn nhiều.',
                content2: 'Koi tượng trưng cho sự chuyển hóa thông qua nỗ lực – không phải may mắn ngẫu nhiên, mà là thành công đến từ việc không ngừng bơi ngược dòng, vượt qua mọi trở ngại.'
            },
            {
                type: 'image',
                content: 'Koi – Biểu tượng của sự kiên trì và chuyển hóa',
                image: CaChep
            },
            {
                type: 'subtitle',
                content: 'Hướng Bơi Và Ý Nghĩa'
            },
            {
                type: 'text',
                content: 'Chi tiết quan trọng mà nhiều người bỏ qua: hướng bơi của Koi mang ý nghĩa khác nhau. Koi bơi lên (upstream) thể hiện đang trong quá trình chinh phục thử thách. Koi bơi xuống (downstream) thể hiện đã vượt qua khó khăn, đang trong giai đoạn thảnh thơi.',
                content2: 'Tại studio, chúng tôi luôn hỏi khách hàng: "Bạn đang ở giai đoạn nào trong hành trình của mình?" Câu trả lời sẽ định hướng thiết kế.'
            },
            {
                type: 'subtitle',
                content: 'Màu Sắc Và Ý Nghĩa'
            },
            {
                type: 'text',
                content: 'Đỏ: Tình yêu, sức mạnh, nam tính. Vàng/Gold: Thịnh vượng, thành công tài chính. Đen: Vượt qua nghịch cảnh, sự chuyển hóa. Xanh dương: Sinh sản, nam tính (con trai). Trắng với đỏ (Kohaku): May mắn, sự nghiệp.',
                content2: 'Kết hợp màu sắc cho phép tạo ra những tác phẩm độc đáo, mang ý nghĩa cá nhân hóa cao.'
            },
            {
                type: 'subtitle',
                content: 'Kết Hợp Phổ Biến'
            },
            {
                type: 'text',
                content: 'Koi thường được kết hợp với: Hoa sen (sự thanh khiết, giác ngộ), Sóng nước (khó khăn, thử thách), Hoa anh đào (vẻ đẹp tạm thời, sự trân trọng khoảnh khắc), hoặc Rồng (sự chuyển hóa hoàn thành).',
                content2: 'Placement lý tưởng: cánh tay (sleeve), lưng, hoặc đùi – những vị trí cho phép movement và flow tự nhiên của cá trong nước. Đặt lịch tư vấn tại The Thế Trung Tattoo Studio để bắt đầu hành trình của bạn.'
            }
        ],
        tags: ['KoiTattoo', 'JapaneseTattoo', 'KoiFish', 'Irezumi', 'AsianArt', 'TheTheTrungTattoo', 'TattooMeaning', 'ColorTattoo'],
        category: 'Japanese Traditional',
        readTime: '6 phút',
        views: 589
    },
    {
        id: 'oni-hannya-japanese-demon-tattoo-2025',
        slug: 'oni-hannya-japanese-demon-tattoo',
        title: "Oni & Hannya Tattoo – Bóng Tối Bảo Vệ Ánh Sáng",
        date: "08/08/2025",
        author: "The Trung",
        subtitle: "Oni và Hannya không phải là ác quỷ cần sợ hãi. Trong văn hóa xăm Nhật Bản, chúng là những guardian – bảo vệ người sở hữu khỏi những điều xấu xa.",
        image: OniHannya,
        imageUI: OniHannya,
        galleryImages: [OniHannya],
        content: [
            {
                type: 'title',
                content: 'Oni vs. Hannya: Hai Thực Thể Khác Biệt'
            },
            {
                type: 'text',
                content: 'Một trong những nhầm lẫn phổ biến nhất: Oni và Hannya là một. Thực tế, chúng hoàn toàn khác biệt. Oni là quỷ (demon) – thường đại diện cho sức mạnh bảo vệ. Hannya là mặt nạ thể hiện một người phụ nữ đã biến thành quỷ dữ vì ghen tuông và đau khổ.',
                content2: 'Trong Noh theater, Hannya mang cả sự đáng sợ lẫn nỗi buồn. Đó là sự phức tạp của cảm xúc con người – và chính sự phức tạp ấy làm nên sức hút của hình xăm này.'
            },
            {
                type: 'image',
                content: 'Oni & Hannya – Sức mạnh bảo vệ từ bóng tối',
                image: OniHannya
            },
            {
                type: 'subtitle',
                content: 'Oni: Guardian Từ Địa Ngục'
            },
            {
                type: 'text',
                content: 'Oni thường được mô tả với da xanh hoặc đỏ, sừng, răng nanh, và gậy Kanabō. Trong văn hóa xăm, Oni đóng vai trò bảo vệ – xua đuổi những điều xấu xa, bệnh tật, và vận rủi.',
                content2: 'Nhiều Yakuza chọn Oni không phải để khoe sự hung dữ, mà để thể hiện vai trò bảo vệ gia đình và tổ chức. Ngày nay, ý nghĩa này đã mở rộng cho bất kỳ ai muốn mang theo "guardian" của riêng mình.'
            },
            {
                type: 'subtitle',
                content: 'Hannya: Vẻ Đẹp Trong Nỗi Đau'
            },
            {
                type: 'text',
                content: 'Hannya phù hợp với những người đã trải qua đau khổ, chuyển hóa nó thành sức mạnh. Màu sắc của Hannya cũng mang ý nghĩa: Trắng – quý tộc, tinh tế. Đỏ – tầng lớp thấp, cảm xúc mãnh liệt. Đỏ đậm (gần đen) – quỷ thực sự, không còn nhân tính.',
                content2: 'Nhiều khách hàng nữ tại studio chọn Hannya như một cách embrace bóng tối trong bản thân – và biến nó thành power.'
            },
            {
                type: 'subtitle',
                content: 'Kỹ Thuật Và Placement'
            },
            {
                type: 'text',
                content: 'Oni và Hannya đòi hỏi kỹ thuật shading phức tạp để tạo chiều sâu và expression. Thường được thực hiện theo Japanese Traditional hoặc Neo-Japanese style. Placement phổ biến: bắp tay, ngực, lưng, hoặc đùi.',
                content2: 'Tại The Thế Trung Tattoo Studio, chúng tôi có expertise đặc biệt với Oni và Hannya – đặt lịch tư vấn để khám phá design phù hợp với câu chuyện của bạn.'
            }
        ],
        tags: ['OniTattoo', 'HannyaTattoo', 'JapaneseTattoo', 'DemonTattoo', 'Irezumi', 'TheTheTrungTattoo', 'DarkArt', 'ProtectorTattoo'],
        category: 'Japanese Traditional',
        readTime: '6 phút',
        views: 512
    },
    {
        id: 'phoenix-rising-from-ashes-tattoo-2025',
        slug: 'phoenix-rising-from-ashes-tattoo',
        title: "Phoenix Tattoo – Tái Sinh Từ Tro Tàn",
        date: "05/08/2025",
        author: "The Trung",
        subtitle: "Phoenix không chỉ sống sót – nó cháy rụi hoàn toàn, rồi tái sinh mạnh mẽ hơn. Đó là biểu tượng của những người đã mất tất cả, và xây dựng lại từ đầu.",
        image: PhuongHoang,
        imageUI: PhuongHoang,
        galleryImages: [PhuongHoang],
        content: [
            {
                type: 'title',
                content: 'Phoenix: Biểu Tượng Mạnh Mẽ Nhất Về Sự Tái Sinh'
            },
            {
                type: 'text',
                content: 'Trong hơn 15 năm làm nghề, tôi nhận thấy một pattern thú vị: những người chọn Phoenix thường đang ở – hoặc vừa qua – giai đoạn khó khăn nhất trong đời. Ly hôn, phá sản, bệnh tật, mất mát người thân.',
                content2: 'Phoenix không dành cho những người "muốn mạnh mẽ". Nó dành cho những người đã bị đốt cháy hoàn toàn – và vẫn chọn đứng dậy.'
            },
            {
                type: 'image',
                content: 'Phoenix – Tái sinh từ tro tàn',
                image: PhuongHoang
            },
            {
                type: 'subtitle',
                content: 'Phoenix Trong Các Nền Văn Hóa'
            },
            {
                type: 'text',
                content: 'Greek Phoenix: Cháy và tái sinh từ tro, biểu tượng của immortality. Chinese Fenghuang: Vua của các loài chim, biểu tượng của harmony và virtue (thường đi cặp với Rồng). Japanese Hō-ō: Biểu tượng của sun, justice, và obedience.',
                content2: 'Mỗi văn hóa mang đến một góc nhìn khác về Phoenix – và tại studio, chúng tôi có thể blend các element để tạo ra tác phẩm phù hợp với câu chuyện của bạn.'
            },
            {
                type: 'subtitle',
                content: 'Màu Sắc Và Phong Cách'
            },
            {
                type: 'text',
                content: 'Phoenix thường được thực hiện với màu đỏ, cam, vàng – gợi lên ngọn lửa. Tuy nhiên, Blue Phoenix (symbolizing peace) hoặc Black Phoenix (rising from darkness) cũng ngày càng phổ biến.',
                content2: 'Phong cách phổ biến: Japanese Traditional (bold lines, flat colors), Neo-Japanese (more detail, gradient), hoặc Watercolor (soft, flowing – nhưng đòi hỏi artist có expertise).'
            },
            {
                type: 'subtitle',
                content: 'Placement Và Size'
            },
            {
                type: 'text',
                content: 'Phoenix là subject lớn – cánh, đuôi, lửa đều cần không gian. Placement lý tưởng: full back (classic), rib-to-hip (dramatic), hoặc sleeve (flowing around arm). Phoenix nhỏ có thể mất đi impact và detail.',
                content2: 'Nếu bạn đã trải qua ngọn lửa và vẫn đứng đây – Phoenix là tác phẩm kể câu chuyện của bạn. Đặt lịch tư vấn tại The Thế Trung Tattoo Studio.'
            }
        ],
        tags: ['PhoenixTattoo', 'Rebirth', 'JapaneseTattoo', 'ColorTattoo', 'SymbolicTattoo', 'TheTheTrungTattoo', 'TattooArt', 'RisingFromAshes'],
        category: 'Mythological',
        readTime: '5 phút',
        views: 478
    },
    {
        id: 'dreamcatcher-native-american-tattoo-2025',
        slug: 'dreamcatcher-native-american-tattoo',
        title: "Dreamcatcher Tattoo – Bảo Vệ Giấc Mơ, Lọc Đi Ác Mộng",
        date: "03/08/2025",
        author: "The Trung",
        subtitle: "Trong văn hóa Ojibwe, Dreamcatcher không chỉ bắt ác mộng – nó bảo vệ linh hồn người ngủ. Đó là lý do nó trở thành một trong những biểu tượng bảo hộ phổ biến nhất trong nghệ thuật xăm.",
        image: DreamCatcher,
        imageUI: DreamCatcher,
        galleryImages: [DreamCatcher],
        content: [
            {
                type: 'title',
                content: 'Dreamcatcher: Từ Ojibwe Đến Nghệ Thuật Xăm Toàn Cầu'
            },
            {
                type: 'text',
                content: 'Dreamcatcher bắt nguồn từ bộ tộc Ojibwe ở Bắc Mỹ. Theo truyền thuyết, Spider Woman (Asibikaashi) bảo vệ trẻ em trong giấc ngủ. Khi bộ tộc mở rộng, bà không thể bảo vệ tất cả, nên dạy phụ nữ làm dreamcatcher – mạng nhện bắt giữ ác mộng, để giấc mơ đẹp trượt qua.',
                content2: 'Trong nghệ thuật xăm, Dreamcatcher đã vượt qua ranh giới văn hóa để trở thành biểu tượng universal về sự bảo vệ và hy vọng.'
            },
            {
                type: 'image',
                content: 'Dreamcatcher – Guardian trong giấc ngủ',
                image: DreamCatcher
            },
            {
                type: 'subtitle',
                content: 'Các Element Và Ý Nghĩa'
            },
            {
                type: 'text',
                content: 'Vòng tròn: Chu kỳ cuộc sống, mặt trời và mặt trăng. Mạng nhện: Bẫy bắt giữ negative energy. Lông vũ: Dẫn đường cho giấc mơ đẹp xuống người ngủ. Hạt cườm: Giấc mơ đẹp đã được giữ lại.',
                content2: 'Nhiều người thêm các element cá nhân: hoa (vẻ đẹp), chim (tự do), hoặc tên/ngày tháng quan trọng.'
            },
            {
                type: 'subtitle',
                content: 'Phong Cách Và Kỹ Thuật'
            },
            {
                type: 'text',
                content: 'Dreamcatcher có thể được thực hiện theo nhiều phong cách: Traditional (bold lines, limited colors), Realistic (chi tiết lông vũ, texture mạng nhện), Watercolor (soft, dreamy), hoặc Geometric (modern interpretation).',
                content2: 'Placement phổ biến: lưng, đùi, cánh tay, hoặc rib. Size linh hoạt từ nhỏ (sau tai, cổ tay) đến lớn (full back).'
            },
            {
                type: 'subtitle',
                content: 'Ai Phù Hợp Với Dreamcatcher?'
            },
            {
                type: 'text',
                content: 'Dreamcatcher phù hợp với những người tìm kiếm sự bảo vệ tinh thần, đang trải qua giai đoạn khó khăn, hoặc đơn giản muốn mang theo một "guardian" trong hành trình cuộc sống.',
                content2: 'Tại The Thế Trung Tattoo Studio, chúng tôi sẽ giúp bạn thiết kế Dreamcatcher cá nhân hóa, kết hợp các element có ý nghĩa riêng với bạn.'
            }
        ],
        tags: ['DreamcatcherTattoo', 'NativeAmerican', 'ProtectionTattoo', 'BohoTattoo', 'SpiritualTattoo', 'TheTheTrungTattoo', 'FeatherTattoo', 'TattooArt'],
        category: 'Native American',
        readTime: '5 phút',
        views: 445
    },
    {
        id: 'temple-buddhist-symbolism-tattoo-2025',
        slug: 'temple-buddhist-symbolism-tattoo',
        title: "Buddhist Temple Tattoo – Kiến Trúc Tâm Linh Trên Da",
        date: "01/08/2025",
        author: "The Trung",
        subtitle: "Ngôi chùa không chỉ là kiến trúc – đó là biểu tượng của sự tĩnh lặng giữa hỗn loạn, điểm neo đậu trong hành trình tâm linh.",
        image: DaoChua,
        imageUI: DaoChua,
        galleryImages: [DaoChua],
        content: [
            {
                type: 'title',
                content: 'Temple Tattoo: Mang Theo Sự Tĩnh Lặng'
            },
            {
                type: 'text',
                content: 'Trong thế giới náo nhiệt, nhiều người tìm đến hình xăm chùa như một anchor – một lời nhắc nhở về sự tĩnh lặng mà họ cần duy trì. Đây không nhất thiết là biểu tượng tôn giáo – nhiều khách hàng tại studio không theo Phật giáo nhưng vẫn chọn temple vì giá trị triết học.',
                content2: 'Temple tattoo phổ biến với những người thực hành mindfulness, meditation, hoặc đơn giản là những người tìm kiếm inner peace trong cuộc sống busy.'
            },
            {
                type: 'image',
                content: 'Buddhist Temple – Biểu tượng của sự thanh tịnh',
                image: DaoChua
            },
            {
                type: 'subtitle',
                content: 'Phong Cách Kiến Trúc Và Ý Nghĩa'
            },
            {
                type: 'text',
                content: 'Japanese Temple (Pagoda): Sự tinh tế, harmony với thiên nhiên. Thai Temple: Chi tiết phức tạp, sự trang nghiêm. Tibetan Temple: Spirituality mạnh mẽ, mystical. Chinese Temple: Prosperity, ancestor worship.',
                content2: 'Mỗi phong cách kiến trúc mang theo một layer ý nghĩa khác nhau – và tại studio, chúng tôi sẽ giúp bạn chọn style phù hợp nhất.'
            },
            {
                type: 'subtitle',
                content: 'Kết Hợp Và Placement'
            },
            {
                type: 'text',
                content: 'Temple thường được kết hợp với: Hoa sen (purity, enlightenment), Mây (heavenly realm), Núi (stability, eternal), hoặc Buddha (direct spiritual reference). Placement: forearm, calf, back – những vị trí cho phép detail kiến trúc.',
                content2: 'Đặt lịch tư vấn tại The Thế Trung Tattoo Studio để thiết kế temple tattoo độc bản cho riêng bạn.'
            }
        ],
        tags: ['TempleTattoo', 'BuddhistTattoo', 'SpiritualTattoo', 'JapaneseTattoo', 'ZenTattoo', 'TheTheTrungTattoo', 'MindfulTattoo', 'AsianArt'],
        category: 'Spiritual',
        readTime: '4 phút',
        views: 412
    },
    {
        id: 'buddha-enlightenment-tattoo-2025',
        slug: 'buddha-enlightenment-tattoo',
        title: "Buddha Tattoo – Giác Ngộ Qua Từng Đường Kim",
        date: "30/07/2025",
        author: "The Trung",
        subtitle: "Buddha không phải là thần để thờ – đó là con người đã giác ngộ, và hình xăm này nhắc nhở rằng giác ngộ có thể đạt được bởi bất kỳ ai.",
        image: DaoPhat,
        imageUI: DaoPhat,
        galleryImages: [DaoPhat],
        content: [
            {
                type: 'title',
                content: 'Buddha Tattoo: Không Chỉ Là Biểu Tượng Tôn Giáo'
            },
            {
                type: 'text',
                content: 'Điều thú vị: phần lớn khách hàng chọn Buddha tattoo tại studio không phải Phật tử. Họ bị thu hút bởi triết lý – sự tĩnh lặng, từ bi, và niềm tin rằng mọi khổ đau đều có nguồn gốc và có thể được giải quyết.',
                content2: 'Buddha tattoo không phải về tôn giáo – nó về mindset. Đó là lý do nó phổ biến với entrepreneurs, executives, và những người đang trên hành trình self-improvement.'
            },
            {
                type: 'image',
                content: 'Buddha – Biểu tượng của sự giác ngộ',
                image: DaoPhat
            },
            {
                type: 'subtitle',
                content: 'Các Hình Thức Buddha Trong Tattoo'
            },
            {
                type: 'text',
                content: 'Meditating Buddha: Tĩnh lặng, inner peace. Laughing Buddha (Budai): Abundance, happiness. Reclining Buddha: Moment trước khi nhập Niết bàn, sự buông bỏ. Buddha Head: Focus vào wisdom và enlightenment.',
                content2: 'Mỗi form mang một energy khác nhau – chọn theo message bạn muốn truyền tải.'
            },
            {
                type: 'subtitle',
                content: 'Lưu Ý Quan Trọng Về Buddha Tattoo'
            },
            {
                type: 'text',
                content: 'Tại một số quốc gia Phật giáo (Thái Lan, Sri Lanka), Buddha tattoo bị coi là thiếu tôn trọng nếu đặt ở vị trí thấp (như chân, mông). Placement an toàn: từ thắt lưng trở lên. Đây là điều chúng tôi luôn tư vấn cho khách hàng có plan du lịch.',
                content2: 'Tại The Thế Trung Tattoo Studio, chúng tôi approach Buddha tattoo với sự tôn trọng văn hóa, đồng thời tạo ra tác phẩm nghệ thuật đẹp và ý nghĩa.'
            }
        ],
        tags: ['BuddhaTattoo', 'SpiritualTattoo', 'ZenTattoo', 'MeditationTattoo', 'EnlightenmentTattoo', 'TheTheTrungTattoo', 'AsianArt', 'MindfulTattoo'],
        category: 'Spiritual',
        readTime: '5 phút',
        views: 389
    },
    {
        id: 'maori-samoa-tribal-tattoo-2025',
        slug: 'maori-samoa-tribal-tattoo',
        title: "Polynesian Tattoo – Ta Moko, Pe'a Và Nghệ Thuật Bộ Lạc",
        date: "28/07/2025",
        author: "The Trung",
        subtitle: "Trong văn hóa Polynesia, tattoo không phải là decoration – đó là identity. Mỗi đường nét kể một câu chuyện, mỗi pattern mang một ý nghĩa cụ thể.",
        image: MaoriSamoa,
        imageUI: MaoriSamoa,
        galleryImages: [MaoriSamoa],
        content: [
            {
                type: 'title',
                content: 'Polynesian Tattoo: Không Chỉ Là Hoa Văn'
            },
            {
                type: 'text',
                content: 'Ta Moko (Maori, New Zealand), Pe-a (Samoa), Tatau (Tahiti) – mỗi vùng Polynesia có truyền thống xăm riêng với ý nghĩa sâu sắc. Trong văn hóa truyền thống, tattoo thể hiện: dòng dõi gia đình, địa vị xã hội, thành tích cá nhân, và hành trình tâm linh.',
                content2: 'Tại studio, chúng tôi approach Polynesian tattoo với sự tôn trọng văn hóa – không random chọn pattern, mà thiết kế có ý nghĩa cho từng khách hàng.'
            },
            {
                type: 'image',
                content: 'Polynesian Tattoo – Nghệ thuật kể chuyện trên da',
                image: MaoriSamoa
            },
            {
                type: 'subtitle',
                content: 'Các Element Và Ý Nghĩa'
            },
            {
                type: 'text',
                content: 'Enata (human figures): Gia đình, bạn bè, ancestors. Shark teeth: Protection, guidance, strength. Spearhead: Courage, warrior spirit. Ocean (waves): Life, change, continuity. Turtle shell: Longevity, peace, fertility.',
                content2: 'Kết hợp các element tạo nên "bài thơ" trên da – kể câu chuyện của người sở hữu.'
            },
            {
                type: 'subtitle',
                content: 'Cultural Sensitivity'
            },
            {
                type: 'text',
                content: 'Polynesian tattoo đang trở nên phổ biến toàn cầu, nhưng quan trọng là approach với sự tôn trọng. Chúng tôi không sao chép Ta Moko khuôn mặt truyền thống (dành riêng cho người Maori) nhưng có thể thiết kế Polynesian-inspired với các element có ý nghĩa cá nhân.',
                content2: 'Đặt lịch tư vấn tại The Thế Trung Tattoo Studio để cùng thiết kế Polynesian tattoo kể câu chuyện của riêng bạn.'
            }
        ],
        tags: ['PolynesianTattoo', 'MaoriTattoo', 'SamoanTattoo', 'TribalTattoo', 'TatauArt', 'TheTheTrungTattoo', 'CulturalTattoo', 'BlackworkTattoo'],
        category: 'Tribal & Polynesian',
        readTime: '6 phút',
        views: 356
    },
    {
        id: 'mandala-spiritual-symbolism-tattoo-2025',
        slug: 'mandala-spiritual-symbolism-tattoo',
        title: "Mandala Tattoo – Vũ Trụ Trong Một Vòng Tròn",
        date: "25/07/2025",
        author: "The Trung",
        subtitle: "Mandala là bản đồ của vũ trụ, là hành trình từ hỗn loạn bên ngoài đến tĩnh lặng bên trong. Mỗi đường nét đều có mục đích.",
        image: Mandala,
        imageUI: Mandala,
        galleryImages: [Mandala],
        content: [
            {
                type: 'title',
                content: 'Mandala: Geometry Gặp Spirituality'
            },
            {
                type: 'text',
                content: 'Mandala – từ Sanskrit có nghĩa "vòng tròn" – là biểu tượng thiêng liêng trong Hindu và Buddhist traditions. Nhưng trong nghệ thuật xăm hiện đại, Mandala đã vượt qua ranh giới tôn giáo để trở thành biểu tượng của balance, harmony, và self-reflection.',
                content2: 'Điều làm Mandala đặc biệt: nó vừa là meditation tool (tập trung vào pattern), vừa là artwork với giá trị thẩm mỹ cao.'
            },
            {
                type: 'image',
                content: 'Mandala – Vũ trụ trong một vòng tròn',
                image: Mandala
            },
            {
                type: 'subtitle',
                content: 'Cấu Trúc Và Ý Nghĩa'
            },
            {
                type: 'text',
                content: 'Vòng tròn bên ngoài: Universe, cosmos. Các layer bên trong: Journey từ chaos đến peace. Tâm điểm: The self, enlightenment, Buddha nature. Patterns lặp lại: Interconnectedness of all things.',
                content2: 'Mandala không cần phải symmetric hoàn hảo – một số artist thêm asymmetrical elements để thể hiện imperfection của cuộc sống.'
            },
            {
                type: 'subtitle',
                content: 'Phong Cách Và Placement'
            },
            {
                type: 'text',
                content: 'Dotwork Mandala: Tạo texture độc đáo, meditative feel. Ornamental Mandala: Thêm floral, decorative elements. Geometric Mandala: Clean lines, modern. Watercolor Mandala: Soft, feminine.',
                content2: 'Placement phổ biến: sternum (underboob), back, knee, elbow. Mandala sleeve cũng là trend đang lên. Đặt lịch tại The Thế Trung Tattoo Studio để thiết kế Mandala độc bản.'
            }
        ],
        tags: ['MandalaTattoo', 'GeometricTattoo', 'DotworkTattoo', 'SpiritualTattoo', 'SacredGeometry', 'TheTheTrungTattoo', 'OrnamentalTattoo', 'ZenTattoo'],
        category: 'Geometric & Spiritual',
        readTime: '5 phút',
        views: 323
    },
    {
        id: 'lotus-flower-buddhist-symbolism-tattoo-2025',
        slug: 'lotus-flower-buddhist-symbolism-tattoo',
        title: "Higanbana Tattoo – Hoa Bỉ Ngạn Và Biên Giới Hai Thế Giới",
        date: "22/07/2025",
        author: "The Trung",
        subtitle: "Higanbana nở đỏ rực vào mùa thu, đúng dịp lễ Obon khi người Nhật tưởng nhớ tổ tiên. Không lá khi có hoa, không hoa khi có lá – vĩnh viễn không gặp nhau.",
        image: HoaBiNgan,
        imageUI: HoaBiNgan,
        galleryImages: [HoaBiNgan],
        content: [
            {
                type: 'title',
                content: 'Higanbana: Hoa Của Sự Chia Ly Vĩnh Viễn'
            },
            {
                type: 'text',
                content: 'Higanbana (彼岸花) – nghĩa đen là "hoa bên kia bờ" – nở dọc đường đến nghĩa trang, bờ ruộng, và những nơi ranh giới giữa sống và chết mờ nhòa. Trong truyền thuyết Nhật Bản, hoa này dẫn lối cho linh hồn người chết đến thế giới bên kia.',
                content2: 'Đặc điểm độc đáo: lá và hoa không bao giờ xuất hiện cùng lúc – lá rụng khi hoa nở, hoa tàn khi lá mọc. Đó là biểu tượng của những người yêu nhau nhưng không thể ở bên nhau.'
            },
            {
                type: 'image',
                content: 'Higanbana – Hoa của sự chia ly',
                image: HoaBiNgan
            },
            {
                type: 'subtitle',
                content: 'Ý Nghĩa Trong Nghệ Thuật Xăm'
            },
            {
                type: 'text',
                content: 'Higanbana phổ biến với những người: Tưởng nhớ người đã khuất. Đánh dấu sự kết thúc của một giai đoạn cuộc sống. Chấp nhận sự chia ly như một phần tất yếu của cuộc sống. Hoặc đơn giản yêu thích vẻ đẹp bi tráng của loài hoa này.',
                content2: 'Trong anime và manga Nhật Bản, Higanbana xuất hiện ở những scene emotionally charged – và nhiều fan chọn nó làm tattoo đầu tiên.'
            },
            {
                type: 'subtitle',
                content: 'Kỹ Thuật Và Màu Sắc'
            },
            {
                type: 'text',
                content: 'Higanbana đỏ là classic, nhưng white spider lily (Lycoris albiflora) cũng đẹp và mang ý nghĩa khác – sự thanh khiết, tái sinh. Thường được thực hiện theo Japanese style với background clouds hoặc đứng độc lập.',
                content2: 'Placement: cánh tay, đùi, lưng, hoặc rib. Đặt lịch tại The Thế Trung Tattoo Studio để thiết kế Higanbana mang ý nghĩa cá nhân của bạn.'
            }
        ],
        tags: ['HiganbanaTattoo', 'SpiderLilyTattoo', 'JapaneseTattoo', 'FloralTattoo', 'MemorialTattoo', 'TheTheTrungTattoo', 'RedInk', 'AsianArt'],
        category: 'Japanese Floral',
        readTime: '5 phút',
        views: 290
    },
    {
        id: 'dragon-chinese-mythology-tattoo-2025',
        slug: 'dragon-chinese-mythology-tattoo',
        title: "Dragon Tattoo – Rồng Châu Á Vs. Rồng Phương Tây",
        date: "20/07/2025",
        author: "The Trung",
        subtitle: "Trong khi Western dragon là quái vật cần chinh phục, Asian dragon là divine being – mang mưa, may mắn, và wisdom. Hai triết lý hoàn toàn khác biệt.",
        image: Rong,
        imageUI: Rong,
        galleryImages: [Rong],
        content: [
            {
                type: 'title',
                content: 'Rồng: Biểu Tượng Mạnh Mẽ Nhất Trong Nghệ Thuật Xăm'
            },
            {
                type: 'text',
                content: 'Dragon là một trong những chủ đề được yêu cầu nhiều nhất tại mọi tattoo studio trên thế giới. Nhưng ý nghĩa thay đổi hoàn toàn tùy thuộc vào văn hóa: Western dragon (có cánh, thở lửa) là adversary cần chinh phục. Asian dragon (dài, không cánh, bay nhờ magic) là divine protector.',
                content2: 'Tại studio, câu hỏi đầu tiên với khách hàng muốn dragon: "Bạn muốn truyền tải điều gì?" Câu trả lời sẽ định hướng thiết kế.'
            },
            {
                type: 'image',
                content: 'Dragon – Biểu tượng của quyền lực và may mắn',
                image: Rong
            },
            {
                type: 'subtitle',
                content: 'Asian Dragon: Chinese vs. Japanese'
            },
            {
                type: 'text',
                content: 'Chinese Dragon (Long): 5 móng (imperial), thân dài hơn, thường đi với pearl (wisdom/enlightenment). Symbolizes: power, prosperity, good fortune. Japanese Dragon (Ryū): 3 móng, body coiled hơn, thường đi với clouds và waves. Symbolizes: strength, courage, protection.',
                content2: 'Về kỹ thuật: Chinese dragon thường có màu sắc rực rỡ (đỏ, vàng, xanh). Japanese dragon theo Irezumi tradition với palette hạn chế hơn nhưng bold.'
            },
            {
                type: 'subtitle',
                content: 'Hướng Và Ý Nghĩa'
            },
            {
                type: 'text',
                content: 'Dragon hướng lên: Đang ascending, đạt được mục tiêu, ambition. Dragon hướng xuống: Đã đạt được, đang "share wisdom", hoặc descending to earth để protect. Dragon cuộn: Balance, potential energy chờ giải phóng.',
                content2: 'Placement: Full back (classic), sleeve, chest, hoặc thigh. Dragon cần space để "live" – avoid quá nhỏ. Đặt lịch tại The Thế Trung Tattoo Studio để thiết kế dragon độc bản.'
            }
        ],
        tags: ['DragonTattoo', 'ChineseDragon', 'JapaneseDragon', 'Irezumi', 'AsianTattoo', 'TheTheTrungTattoo', 'PowerTattoo', 'MythicalCreature'],
        category: 'Asian Traditional',
        readTime: '6 phút',
        views: 267
    },
    {
        id: 'celtic-knot-ancient-symbolism-tattoo-2025',
        slug: 'celtic-knot-ancient-symbolism-tattoo',
        title: "Celtic Tattoo – Nút Thắt Vĩnh Cửu Từ Ireland",
        date: "18/07/2025",
        author: "The Trung",
        subtitle: "Celtic knots không có điểm bắt đầu, không có điểm kết thúc – tượng trưng cho eternity, interconnectedness, và cycle của sự sống. Đó là triết học được đan vào từng đường nét.",
        image: Celtic,
        imageUI: Celtic,
        galleryImages: [Celtic],
        content: [
            {
                type: 'title',
                content: 'Celtic Art: Hơn 2000 Năm Và Vẫn Timeless'
            },
            {
                type: 'text',
                content: 'Celtic art xuất hiện từ thời Iron Age ở Ireland, Scotland, và Wales. Điều làm nó đặc biệt: những đường nét interlocking không có điểm bắt đầu hay kết thúc – symbolizing eternity, continuity, và interconnection của mọi thứ trong vũ trụ.',
                content2: 'Trong nghệ thuật xăm hiện đại, Celtic patterns phổ biến với những người có heritage từ các vùng này, hoặc đơn giản bị thu hút bởi meaning và aesthetics.'
            },
            {
                type: 'image',
                content: 'Celtic Knot – Vĩnh cửu trong từng đường nét',
                image: Celtic
            },
            {
                type: 'subtitle',
                content: 'Các Loại Celtic Knot Phổ Biến'
            },
            {
                type: 'text',
                content: 'Trinity Knot (Triquetra): Ba góc tượng trưng cho Father-Son-Holy Spirit (Christian), hoặc Land-Sea-Sky (Pagan). Dara Knot: Strength, wisdom (từ oak tree roots). Shield Knot: Protection. Spiral: Growth, eternal life. Celtic Cross: Faith, heritage.',
                content2: 'Mỗi knot có ý nghĩa riêng – tại studio, chúng tôi sẽ giúp bạn chọn pattern phù hợp với message.'
            },
            {
                type: 'subtitle',
                content: 'Kỹ Thuật Và Style'
            },
            {
                type: 'text',
                content: 'Celtic tattoo đòi hỏi precision cao – một sai sót nhỏ trong interlocking pattern sẽ phá vỡ visual flow. Thường được thực hiện blackwork, nhưng có thể thêm color (green cho Irish heritage). Dotwork shading tạo depth mà không làm mất clarity của lines.',
                content2: 'Placement: arm band, forearm, back, chest. Celtic cross thường larger scale. Đặt lịch tại The Thế Trung Tattoo Studio để thiết kế Celtic tattoo với precision và meaning.'
            }
        ],
        tags: ['CelticTattoo', 'IrishTattoo', 'KnotworkTattoo', 'TribalTattoo', 'BlackworkTattoo', 'TheTheTrungTattoo', 'HeritageInk', 'AncientArt'],
        category: 'Celtic & Tribal',
        readTime: '5 phút',
        views: 244
    },
    {
        id: 'quan-cong-chinese-warrior-tattoo-2025',
        slug: 'quan-cong-chinese-warrior-tattoo',
        title: "Quan Công Tattoo – Thần Hộ Mệnh Của Nghĩa Khí",
        date: "15/07/2025",
        author: "The Trung",
        subtitle: "Quan Công không chỉ là tướng quân – ông là biểu tượng của lòng trung nghĩa đã được thần thánh hóa. Hình xăm này không dành cho những người thiếu commitment với giá trị của mình.",
        image: QuanCong,
        imageUI: QuanCong,
        galleryImages: [QuanCong],
        content: [
            {
                type: 'title',
                content: 'Quan Công: Từ Tướng Quân Đến Thần Hộ Mệnh'
            },
            {
                type: 'text',
                content: 'Quan Vũ (160-220 AD) – tướng quân thời Tam Quốc – đã trở thành một trong những nhân vật được thờ phụng rộng rãi nhất trong văn hóa Trung Hoa. Ông được tôn làm Quan Đế (Hoàng Đế), Quan Thánh Đế Quân, và là patron saint của police, triad, business owners.',
                content2: 'Điều làm Quan Công đặc biệt: ông không được thờ vì chiến thắng quân sự (Liu Bei thực tế thua nhiều trận). Ông được thờ vì LÒNG TRUNG NGHĨA – giữ lời hứa với anh em kết nghĩa đến chết.'
            },
            {
                type: 'image',
                content: 'Quan Công – Biểu tượng của trung nghĩa',
                image: QuanCong
            },
            {
                type: 'subtitle',
                content: 'Ý Nghĩa Trong Văn Hóa Xăm'
            },
            {
                type: 'text',
                content: 'Quan Công tattoo phổ biến với: Doanh nhân (bảo vệ tài sản, may mắn trong business). Cảnh sát, quân nhân (protection, righteousness). Những người coi trọng loyalty và brotherhood.',
                content2: 'Một số người trong giới underground cũng chọn Quan Công – nhưng ý nghĩa thực sự là về code of honor, không phải violence. Đây là điều quan trọng cần hiểu trước khi chọn.'
            },
            {
                type: 'subtitle',
                content: 'Các Hình Thức Quan Công Trong Tattoo'
            },
            {
                type: 'text',
                content: 'Reading (đọc sách): Wisdom, strategy. Battle stance với Thanh Long Yển Nguyệt Đao: Warrior, protection. Stroking beard: Contemplation, confidence. Kết hợp với Chu Long (Red Hare horse): Complete loyalty.',
                content2: 'Detail đặc trưng: Mặt đỏ (righteousness shows through), râu dài (wisdom), áo xanh (scholar-warrior). Những detail này không thể bỏ qua nếu muốn tác phẩm authentic.'
            },
            {
                type: 'subtitle',
                content: 'Lưu Ý Khi Chọn Quan Công'
            },
            {
                type: 'text',
                content: 'Quan Công là hình xăm "nặng" về mặt văn hóa. Tại một số cộng đồng, mang hình Quan Công mà không sống đúng với giá trị của ông (trung, nghĩa, dũng) được coi là bất kính.',
                content2: 'Tại The Thế Trung Tattoo Studio, chúng tôi tư vấn kỹ trước khi thực hiện – không chỉ về design, mà còn về meaning và responsibility đi kèm. Đặt lịch để bắt đầu hành trình.'
            }
        ],
        tags: ['QuanCongTattoo', 'GuanYuTattoo', 'ChineseTattoo', 'WarriorTattoo', 'LoyaltyTattoo', 'TheTheTrungTattoo', 'ProtectionTattoo', 'OrientalArt'],
        category: 'Chinese Traditional',
        readTime: '6 phút',
        views: 221
    }
];

export const getMeaningCardById = (id: string): MeaningCard | undefined => {
    return meaningCards.find(card => card.id === id);
};

export const getMeaningCardBySlug = (slug: string): MeaningCard | undefined => {
    return meaningCards.find(card => card.slug === slug);
};

export const getAllMeaningCards = (): MeaningCard[] => {
    return meaningCards;
};
