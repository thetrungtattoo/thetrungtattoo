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
        title: "Khám phá ý nghĩa hình xăm Samurai Nhật Bản",
        date: "22/02/2025",
        author: "Admin",
        subtitle: "Hình xăm Samurai mang sức mạnh kiên cường, tinh thần chiến binh bất khuất và lòng trung thành tuyệt đối.",
        image: Samurai,
        imageUI: [SamuraiUI4, SamuraiUI5, SamuraiUI6],
        galleryImages: [Samurai, Samurai1, Samurai2, Samurai3, Samurai4, Samurai5, Samurai6, Samurai7, Samurai8, Samurai9, Samurai10, Samurai11, Samurai12, Samurai13, Samurai14, Samurai15],
        content: [
            {
                type: 'title',
                content: 'Ý nghĩa hình xăm Samurai trong văn hóa Nhật Bản'
            },
            {
                type: 'text',
                content: 'Hình xăm Samurai không chỉ mang vẻ đẹp mạnh mẽ mà còn là biểu tượng bất diệt của tinh thần chiến binh Nhật Bản. Samurai trong lịch sử không chỉ là những kiếm sĩ kiệt xuất, mà còn là hiện thân của triết lý sống đặt lòng trung thành, danh dự và dũng cảm lên trên tất cả. Với họ, cái chết chưa bao giờ đáng sợ bằng việc đánh mất danh dự.',
                content2: 'Ngày nay, khi Samurai bước vào nghệ thuật xăm, họ không còn chỉ là hình ảnh trong trang sử, mà trở thành dấu ấn sống động trên cơ thể con người. Một hình xăm Samurai không chỉ khắc họa vẻ oai phong, thanh kiếm sắc bén hay bộ giáp uy nghi, mà còn gửi gắm thông điệp: hãy sống trọn vẹn với lý tưởng, kiên định trước thử thách và giữ vững danh dự như cách Samurai từng làm.'
            },
            {
                type: 'image',
                content: 'Hình ảnh Samurai truyền thống',
                image: Samurai
            },
            {
                type: 'subtitle',
                content: 'Lịch sử và nguồn gốc'
            },
            {
                type: 'text',
                content: 'Samurai – những chiến binh huyền thoại của Nhật Bản – xuất hiện từ thế kỷ 12, gắn liền với thời kỳ các lãnh chúa phong kiến nắm quyền cai trị. Họ không chỉ là những kiếm sĩ thiện chiến, mà còn là biểu tượng của sức mạnh tinh thần, lòng trung thành tuyệt đối và kỷ luật thép. Điều làm nên sự vĩ đại của Samurai chính là Bushido – con đường của chiến binh, một bộ quy tắc sống cao quý đã trở thành linh hồn của tầng lớp này.',
                content2: 'Bushido không chỉ rèn luyện kỹ năng chiến đấu, mà còn hun đúc nên một nhân cách kiên định, thông qua bảy đức tính cốt lõi: Chính nghĩa, Dũng cảm, Nhân từ, Lễ phép, Thành thật, Danh dự và Trung thành. Với Samurai, danh dự còn quý hơn cả sinh mạng, bởi họ tin rằng chỉ có sống và chết trong tinh thần Bushido mới thực sự xứng đáng. Chính triết lý sống ấy đã biến Samurai trở thành một biểu tượng bất tử, khiến cả thế giới phải ngưỡng mộ và kính nể.'
            },
            {
                type: 'subtitle',
                content: 'Ý nghĩa hình xăm Samurai trong nghệ thuật xăm'
            },
            {
                type: 'text',
                content: 'Hình xăm Samurai không chỉ đơn thuần là một tác phẩm nghệ thuật trên da, mà còn là sự kết tinh tinh thần võ sĩ đạo đã tồn tại hàng trăm năm trong văn hóa Nhật Bản. Từng chi tiết – từ ánh mắt kiên định, thanh kiếm sắc bén cho đến bộ giáp uy nghi – đều mang trong mình một tầng ý nghĩa. Đó có thể là lời nhắc nhở về lòng trung thành, sự quả cảm hay khát vọng sống ngay thẳng, đặt danh dự lên trên tất cả.',
                content2: 'Trong nghệ thuật xăm hiện đại, Samurai còn được xem như biểu tượng bảo hộ, tiếp thêm sức mạnh tinh thần cho người sở hữu. Với nhiều người, hình xăm này không chỉ khẳng định cá tính mạnh mẽ và ý chí vượt qua thử thách, mà còn trở thành lá bùa hộ mệnh đồng hành trên hành trình cuộc sống. Chính bởi chiều sâu ấy, Samurai mãi giữ được vị trí đặc biệt trong nghệ thuật xăm Châu Á – vừa đẹp, vừa đầy ý nghĩa.'
            },
            {
                type: 'text',
                content: '• Kiếm Katana: Biểu tượng của sức mạnh và kỹ năng\n• Áo giáp: Sự bảo vệ và sức mạnh\n• Mặt nạ: Sự bí ẩn và quyền lực'
            }
        ],
        tags: ['Samurai', 'Nhật Bản', 'Chiến binh', 'Bushido', 'Truyền thống'],
        category: 'Văn hóa Nhật Bản',
        readTime: '5 phút',
        views: 1250
    },
    {
        id: 'skull-tattoo-symbolism-life-death-2025',
        slug: 'skull-tattoo-symbolism-life-death',
        title: "Hình xăm đầu lâu – Biểu tượng của sự sống",
        date: "20/08/2025",
        author: "Thế Trung",
        subtitle: "Đầu lâu trong xăm hình gợi nhắc sự sống mong manh, cái chết tất yếu nhưng vẫn khẳng định ý chí kiên cường.",
        image: DauLau,
        imageUI: DauLau,
        galleryImages: [DauLau],
        content: [
            {
                type: 'title',
                content: 'Ý nghĩa sâu sắc của hình xăm đầu lâu'
            },
            {
                type: 'text',
                content: 'Hình xăm đầu lâu không chỉ đơn thuần là biểu tượng của cái chết, mà còn mang nhiều ý nghĩa triết học sâu sắc về sự sống và cái chết.'
            },
            {
                type: 'image',
                content: 'Hình ảnh đầu lâu nghệ thuật',
                image: DauLau
            },
            {
                type: 'subtitle',
                content: 'Triết lý Memento Mori'
            },
            {
                type: 'text',
                content: 'Memento Mori - "Hãy nhớ rằng bạn sẽ chết" là một triết lý cổ xưa nhắc nhở con người về tính tạm thời của cuộc sống. Hình xăm đầu lâu thể hiện sự nhận thức về cái chết để sống có ý nghĩa hơn.'
            },
            {
                type: 'subtitle',
                content: 'Biểu tượng của sức mạnh'
            },
            {
                type: 'text',
                content: 'Trong nhiều nền văn hóa, đầu lâu còn là biểu tượng của sức mạnh và sự bất tử của tinh thần. Nó thể hiện ý chí kiên cường vượt qua mọi khó khăn.'
            }
        ],
        tags: ['Đầu lâu', 'Memento Mori', 'Triết học', 'Sức mạnh', 'Bất tử'],
        category: 'Triết học',
        readTime: '4 phút',
        views: 980
    },
    {
        id: 'geisha-japanese-beauty-tattoo-meaning-2025',
        slug: 'geisha-japanese-beauty-tattoo-meaning',
        title: "Hình xăm Geisha - Vẻ đẹp và bí ẩn Nhật Bản",
        date: "18/08/2025",
        author: "Minh Anh",
        subtitle: "Geisha tượng trưng cho vẻ đẹp tinh tế, sự duyên dáng và bí ẩn của văn hóa truyền thống Nhật Bản.",
        image: Geisha,
        imageUI: Geisha,
        galleryImages: [Geisha],
        content: [
            {
                type: 'title',
                content: 'Ý nghĩa hình xăm Geisha trong văn hóa Nhật'
            },
            {
                type: 'text',
                content: 'Geisha là biểu tượng của vẻ đẹp tinh tế và sự duyên dáng trong văn hóa Nhật Bản. Hình xăm Geisha thể hiện sự tôn trọng đối với nghệ thuật truyền thống và vẻ đẹp nữ tính.'
            },
            {
                type: 'image',
                content: 'Hình ảnh Geisha truyền thống',
                image: Geisha
            },
            {
                type: 'subtitle',
                content: 'Vẻ đẹp và bí ẩn'
            },
            {
                type: 'text',
                content: 'Geisha không chỉ là những nghệ sĩ giải trí mà còn là những người bảo tồn văn hóa truyền thống. Họ đại diện cho sự tinh tế, lịch lãm và bí ẩn của văn hóa Nhật Bản.'
            }
        ],
        tags: ['Geisha', 'Nhật Bản', 'Vẻ đẹp', 'Truyền thống', 'Nghệ thuật'],
        category: 'Văn hóa Nhật Bản',
        readTime: '3 phút',
        views: 856
    },
    {
        id: 'kylin-chinese-mythical-creature-tattoo-2025',
        slug: 'kylin-chinese-mythical-creature-tattoo',
        title: "Hình xăm Kỳ Lân - Linh vật may mắn Trung Hoa",
        date: "15/08/2025",
        author: "Hương Giang",
        subtitle: "Kỳ Lân là linh vật báo hiệu điềm lành, mang lại may mắn, thịnh vượng và bảo vệ cho người sở hữu.",
        image: KyLan,
        imageUI: KyLan,
        galleryImages: [KyLan],
        content: [
            {
                type: 'title',
                content: 'Ý nghĩa hình xăm Kỳ Lân trong văn hóa Trung Hoa'
            },
            {
                type: 'text',
                content: 'Kỳ Lân là một trong tứ linh của văn hóa Trung Hoa, tượng trưng cho sự may mắn, thịnh vượng và bảo vệ. Hình xăm Kỳ Lân mang lại năng lượng tích cực và bảo vệ cho người sở hữu.'
            },
            {
                type: 'image',
                content: 'Hình ảnh Kỳ Lân uy nghiêm',
                image: KyLan
            },
            {
                type: 'subtitle',
                content: 'Biểu tượng của may mắn'
            },
            {
                type: 'text',
                content: 'Theo truyền thuyết, Kỳ Lân chỉ xuất hiện khi có thánh nhân hoặc điềm lành. Hình xăm Kỳ Lân được tin là sẽ mang lại may mắn và bảo vệ khỏi những điều xấu.'
            }
        ],
        tags: ['Kỳ Lân', 'Trung Hoa', 'May mắn', 'Tứ linh', 'Bảo vệ'],
        category: 'Văn hóa Trung Hoa',
        readTime: '4 phút',
        views: 723
    },
    {
        id: 'daruma-japanese-wishing-doll-tattoo-2025',
        slug: 'daruma-japanese-wishing-doll-tattoo',
        title: "Hình xăm Daruma - Búp bê ước nguyện Nhật Bản",
        date: "12/08/2025",
        author: "Yuki Tanaka",
        subtitle: "Daruma tượng trưng cho sự kiên trì, quyết tâm và niềm tin vào việc thực hiện ước mơ.",
        image: Daruma,
        imageUI: Daruma,
        galleryImages: [Daruma],
        content: [
            {
                type: 'title',
                content: 'Ý nghĩa hình xăm Daruma trong văn hóa Nhật'
            },
            {
                type: 'text',
                content: 'Daruma là búp bê truyền thống Nhật Bản tượng trưng cho sự kiên trì và quyết tâm. Theo truyền thống, người ta vẽ một mắt khi đặt mục tiêu và vẽ mắt còn lại khi đạt được.'
            },
            {
                type: 'image',
                content: 'Hình ảnh Daruma truyền thống',
                image: Daruma
            },
            {
                type: 'subtitle',
                content: 'Biểu tượng của quyết tâm'
            },
            {
                type: 'text',
                content: 'Hình xăm Daruma thể hiện sự cam kết với mục tiêu và niềm tin vào khả năng vượt qua khó khăn để đạt được ước mơ.'
            }
        ],
        tags: ['Daruma', 'Nhật Bản', 'Ước nguyện', 'Kiên trì', 'Quyết tâm'],
        category: 'Văn hóa Nhật Bản',
        readTime: '3 phút',
        views: 645
    },
    {
        id: 'carp-fish-japanese-symbolism-tattoo-2025',
        slug: 'carp-fish-japanese-symbolism-tattoo',
        title: "Hình xăm Cá Chép - Biểu tượng vượt vũ môn",
        date: "10/08/2025",
        author: "Linh Chi",
        subtitle: "Cá Chép tượng trưng cho sự kiên trì, dũng cảm vượt qua khó khăn để đạt được thành công.",
        image: CaChep,
        imageUI: CaChep,
        galleryImages: [CaChep],
        content: [
            {
                type: 'title',
                content: 'Ý nghĩa hình xăm Cá Chép trong văn hóa Á Đông'
            },
            {
                type: 'text',
                content: 'Cá Chép là biểu tượng của sự kiên trì và dũng cảm trong văn hóa Á Đông. Truyền thuyết kể rằng cá chép bơi ngược dòng để vượt Vũ Môn và hóa rồng.'
            },
            {
                type: 'image',
                content: 'Hình ảnh Cá Chép vượt vũ môn',
                image: CaChep
            },
            {
                type: 'subtitle',
                content: 'Biểu tượng của thành công'
            },
            {
                type: 'text',
                content: 'Hình xăm Cá Chép thể hiện ý chí kiên cường, sẵn sàng đối mặt với thử thách để đạt được mục tiêu và thành công trong cuộc sống.'
            }
        ],
        tags: ['Cá Chép', 'Vượt vũ môn', 'Kiên trì', 'Thành công', 'Á Đông'],
        category: 'Văn hóa Á Đông',
        readTime: '3 phút',
        views: 589
    },
    {
        id: 'oni-hannya-japanese-demon-tattoo-2025',
        slug: 'oni-hannya-japanese-demon-tattoo',
        title: "Hình xăm Oni Hannya - Quỷ Nhật Bản",
        date: "08/08/2025",
        author: "Kenji Yamamoto",
        subtitle: "Oni Hannya đại diện cho sự bảo vệ, sức mạnh và khả năng xua đuổi tà ma.",
        image: OniHannya,
        imageUI: OniHannya,
        galleryImages: [OniHannya],
        content: [
            {
                type: 'title',
                content: 'Ý nghĩa hình xăm Oni Hannya trong văn hóa Nhật'
            },
            {
                type: 'text',
                content: 'Oni Hannya là quỷ trong thần thoại Nhật Bản, thường được mô tả với sừng và răng nanh. Mặc dù là quỷ nhưng Oni cũng có vai trò bảo vệ và xua đuổi tà ma.'
            },
            {
                type: 'image',
                content: 'Hình ảnh Oni Hannya uy nghiêm',
                image: OniHannya
            },
            {
                type: 'subtitle',
                content: 'Biểu tượng của sức mạnh'
            },
            {
                type: 'text',
                content: 'Hình xăm Oni Hannya thể hiện sức mạnh nội tại, khả năng bảo vệ bản thân và người thân khỏi những điều xấu xa.'
            }
        ],
        tags: ['Oni', 'Hannya', 'Nhật Bản', 'Quỷ', 'Bảo vệ'],
        category: 'Văn hóa Nhật Bản',
        readTime: '4 phút',
        views: 512
    },
    {
        id: 'phoenix-rising-from-ashes-tattoo-2025',
        slug: 'phoenix-rising-from-ashes-tattoo',
        title: "Hình xăm Phượng Hoàng - Tái sinh từ tro tàn",
        date: "05/08/2025",
        author: "Mai Phương",
        subtitle: "Phượng Hoàng tượng trưng cho sự tái sinh, đổi mới và vượt qua nghịch cảnh.",
        image: PhuongHoang,
        imageUI: PhuongHoang,
        galleryImages: [PhuongHoang],
        content: [
            {
                type: 'title',
                content: 'Ý nghĩa hình xăm Phượng Hoàng trong văn hóa toàn cầu'
            },
            {
                type: 'text',
                content: 'Phượng Hoàng là biểu tượng của sự tái sinh và đổi mới trong nhiều nền văn hóa. Theo truyền thuyết, Phượng Hoàng có thể tái sinh từ tro tàn của chính mình.'
            },
            {
                type: 'image',
                content: 'Hình ảnh Phượng Hoàng uy nghi',
                image: PhuongHoang
            },
            {
                type: 'subtitle',
                content: 'Biểu tượng của tái sinh'
            },
            {
                type: 'text',
                content: 'Hình xăm Phượng Hoàng thể hiện khả năng vượt qua khó khăn, tái sinh từ những thất bại và đạt được thành công mới.'
            }
        ],
        tags: ['Phượng Hoàng', 'Tái sinh', 'Đổi mới', 'Nghịch cảnh', 'Thành công'],
        category: 'Thần thoại',
        readTime: '4 phút',
        views: 478
    },
    {
        id: 'dreamcatcher-native-american-tattoo-2025',
        slug: 'dreamcatcher-native-american-tattoo',
        title: "Hình xăm Dream Catcher - Bắt giữ giấc mơ",
        date: "03/08/2025",
        author: "Sarah Johnson",
        subtitle: "Dream Catcher bảo vệ khỏi ác mộng và chỉ cho phép những giấc mơ đẹp đi qua.",
        image: DreamCatcher,
        imageUI: DreamCatcher,
        galleryImages: [DreamCatcher],
        content: [
            {
                type: 'title',
                content: 'Ý nghĩa hình xăm Dream Catcher trong văn hóa Native American'
            },
            {
                type: 'text',
                content: 'Dream Catcher là một vật dụng thiêng liêng của người Native American, được treo trên giường để bắt giữ ác mộng và chỉ cho phép những giấc mơ đẹp đi qua.'
            },
            {
                type: 'image',
                content: 'Hình ảnh Dream Catcher truyền thống',
                image: DreamCatcher
            },
            {
                type: 'subtitle',
                content: 'Biểu tượng của bảo vệ'
            },
            {
                type: 'text',
                content: 'Hình xăm Dream Catcher thể hiện mong muốn được bảo vệ khỏi những điều xấu và chỉ nhận những điều tốt đẹp trong cuộc sống.'
            }
        ],
        tags: ['Dream Catcher', 'Native American', 'Bảo vệ', 'Giấc mơ', 'Thiêng liêng'],
        category: 'Văn hóa Native American',
        readTime: '3 phút',
        views: 445
    },
    {
        id: 'temple-buddhist-symbolism-tattoo-2025',
        slug: 'temple-buddhist-symbolism-tattoo',
        title: "Hình xăm Đạo Chùa - Biểu tượng tâm linh",
        date: "01/08/2025",
        author: "Thích Minh Đức",
        subtitle: "Đạo Chùa tượng trưng cho sự thanh tịnh, giác ngộ và con đường tâm linh.",
        image: DaoChua,
        imageUI: DaoChua,
        galleryImages: [DaoChua],
        content: [
            {
                type: 'title',
                content: 'Ý nghĩa hình xăm Đạo Chùa trong Phật giáo'
            },
            {
                type: 'text',
                content: 'Đạo Chùa là biểu tượng của sự thanh tịnh và giác ngộ trong Phật giáo. Nó đại diện cho con đường tâm linh và sự tìm kiếm chân lý.'
            },
            {
                type: 'image',
                content: 'Hình ảnh Đạo Chùa thanh tịnh',
                image: DaoChua
            },
            {
                type: 'subtitle',
                content: 'Biểu tượng của giác ngộ'
            },
            {
                type: 'text',
                content: 'Hình xăm Đạo Chùa thể hiện mong muốn tìm kiếm sự thanh tịnh trong tâm hồn và con đường giác ngộ tâm linh.'
            }
        ],
        tags: ['Đạo Chùa', 'Phật giáo', 'Tâm linh', 'Giác ngộ', 'Thanh tịnh'],
        category: 'Tôn giáo',
        readTime: '4 phút',
        views: 412
    },
    {
        id: 'buddha-enlightenment-tattoo-2025',
        slug: 'buddha-enlightenment-tattoo',
        title: "Hình xăm Đạo Phật - Con đường giác ngộ",
        date: "30/07/2025",
        author: "Thích Tâm An",
        subtitle: "Đạo Phật tượng trưng cho sự giác ngộ, từ bi và con đường giải thoát khỏi khổ đau.",
        image: DaoPhat,
        imageUI: DaoPhat,
        galleryImages: [DaoPhat],
        content: [
            {
                type: 'title',
                content: 'Ý nghĩa hình xăm Đạo Phật trong tâm linh'
            },
            {
                type: 'text',
                content: 'Đạo Phật là con đường dẫn đến giác ngộ và giải thoát khỏi khổ đau. Hình xăm Đạo Phật thể hiện sự tôn kính đối với giáo lý nhà Phật.'
            },
            {
                type: 'image',
                content: 'Hình ảnh Đạo Phật thanh tịnh',
                image: DaoPhat
            },
            {
                type: 'subtitle',
                content: 'Biểu tượng của từ bi'
            },
            {
                type: 'text',
                content: 'Hình xăm Đạo Phật nhắc nhở về lòng từ bi, trí tuệ và con đường tu tập để đạt được hạnh phúc chân thật.'
            }
        ],
        tags: ['Đạo Phật', 'Giác ngộ', 'Từ bi', 'Tâm linh', 'Giải thoát'],
        category: 'Tôn giáo',
        readTime: '4 phút',
        views: 389
    },
    {
        id: 'maori-samoa-tribal-tattoo-2025',
        slug: 'maori-samoa-tribal-tattoo',
        title: "Hình xăm Maori Samoa - Nghệ thuật bộ lạc",
        date: "28/07/2025",
        author: "Tama Te Rangi",
        subtitle: "Maori Samoa thể hiện văn hóa bộ lạc, sức mạnh và danh tính của người Polynesia.",
        image: MaoriSamoa,
        imageUI: MaoriSamoa,
        galleryImages: [MaoriSamoa],
        content: [
            {
                type: 'title',
                content: 'Ý nghĩa hình xăm Maori Samoa trong văn hóa Polynesia'
            },
            {
                type: 'text',
                content: 'Maori Samoa là nghệ thuật xăm truyền thống của người Polynesia, thể hiện văn hóa bộ lạc, sức mạnh và danh tính của người sở hữu.'
            },
            {
                type: 'image',
                content: 'Hình ảnh Maori Samoa truyền thống',
                image: MaoriSamoa
            },
            {
                type: 'subtitle',
                content: 'Biểu tượng của sức mạnh'
            },
            {
                type: 'text',
                content: 'Mỗi hoa văn trong Maori Samoa đều có ý nghĩa riêng, thể hiện địa vị xã hội, sức mạnh và lịch sử gia đình.'
            }
        ],
        tags: ['Maori', 'Samoa', 'Polynesia', 'Bộ lạc', 'Truyền thống'],
        category: 'Văn hóa Polynesia',
        readTime: '5 phút',
        views: 356
    },
    {
        id: 'mandala-spiritual-symbolism-tattoo-2025',
        slug: 'mandala-spiritual-symbolism-tattoo',
        title: "Hình xăm Mandala - Biểu tượng tâm linh",
        date: "25/07/2025",
        author: "Priya Sharma",
        subtitle: "Mandala tượng trưng cho vũ trụ, sự cân bằng và hành trình tâm linh.",
        image: Mandala,
        imageUI: Mandala,
        galleryImages: [Mandala],
        content: [
            {
                type: 'title',
                content: 'Ý nghĩa hình xăm Mandala trong tâm linh'
            },
            {
                type: 'text',
                content: 'Mandala là biểu tượng thiêng liêng trong nhiều tôn giáo, đại diện cho vũ trụ và sự cân bằng. Hình xăm Mandala thể hiện hành trình tâm linh và sự tìm kiếm chân lý.'
            },
            {
                type: 'image',
                content: 'Hình ảnh Mandala thiêng liêng',
                image: Mandala
            },
            {
                type: 'subtitle',
                content: 'Biểu tượng của vũ trụ'
            },
            {
                type: 'text',
                content: 'Mandala với các hoa văn hình học phức tạp thể hiện sự hài hòa của vũ trụ và con đường dẫn đến giác ngộ.'
            }
        ],
        tags: ['Mandala', 'Tâm linh', 'Vũ trụ', 'Cân bằng', 'Thiêng liêng'],
        category: 'Tâm linh',
        readTime: '4 phút',
        views: 323
    },
    {
        id: 'lotus-flower-buddhist-symbolism-tattoo-2025',
        slug: 'lotus-flower-buddhist-symbolism-tattoo',
        title: "Hình xăm Hoa Bỉ Ngạn - Vẻ đẹp và bí ẩn",
        date: "22/07/2025",
        author: "Hoa Linh",
        subtitle: "Hoa Bỉ Ngạn tượng trưng cho sự chia ly, nhớ nhung và vẻ đẹp mong manh của cuộc sống.",
        image: HoaBiNgan,
        imageUI: HoaBiNgan,
        galleryImages: [HoaBiNgan],
        content: [
            {
                type: 'title',
                content: 'Ý nghĩa hình xăm Hoa Bỉ Ngạn trong văn hóa Á Đông'
            },
            {
                type: 'text',
                content: 'Hoa Bỉ Ngạn là loài hoa bí ẩn trong văn hóa Á Đông, tượng trưng cho sự chia ly và nhớ nhung. Theo truyền thuyết, hoa này nở ở ranh giới giữa cõi sống và cõi chết.'
            },
            {
                type: 'image',
                content: 'Hình ảnh Hoa Bỉ Ngạn bí ẩn',
                image: HoaBiNgan
            },
            {
                type: 'subtitle',
                content: 'Biểu tượng của chia ly'
            },
            {
                type: 'text',
                content: 'Hình xăm Hoa Bỉ Ngạn thể hiện nỗi nhớ nhung về người đã khuất hoặc những kỷ niệm đẹp đã qua.'
            }
        ],
        tags: ['Hoa Bỉ Ngạn', 'Chia ly', 'Nhớ nhung', 'Bí ẩn', 'Á Đông'],
        category: 'Văn hóa Á Đông',
        readTime: '3 phút',
        views: 290
    },
    {
        id: 'dragon-chinese-mythology-tattoo-2025',
        slug: 'dragon-chinese-mythology-tattoo',
        title: "Hình xăm Rồng - Linh vật quyền lực Trung Hoa",
        date: "20/07/2025",
        author: "Long Vũ",
        subtitle: "Rồng tượng trưng cho sức mạnh, quyền lực và sự may mắn trong văn hóa Trung Hoa.",
        image: Rong,
        imageUI: Rong,
        galleryImages: [Rong],
        content: [
            {
                type: 'title',
                content: 'Ý nghĩa hình xăm Rồng trong văn hóa Trung Hoa'
            },
            {
                type: 'text',
                content: 'Rồng là linh vật quan trọng nhất trong văn hóa Trung Hoa, tượng trưng cho sức mạnh, quyền lực và sự may mắn. Rồng được coi là biểu tượng của hoàng đế và sự thịnh vượng.'
            },
            {
                type: 'image',
                content: 'Hình ảnh Rồng uy nghiêm',
                image: Rong
            },
            {
                type: 'subtitle',
                content: 'Biểu tượng của quyền lực'
            },
            {       
                type: 'text',
                content: 'Hình xăm Rồng thể hiện khát khao về sức mạnh, quyền lực và sự thành công trong cuộc sống.'
            }
        ],
        tags: ['Rồng', 'Trung Hoa', 'Quyền lực', 'May mắn', 'Thịnh vượng'],
        category: 'Văn hóa Trung Hoa',
        readTime: '4 phút',
        views: 267
    },
    {
        id: 'celtic-knot-ancient-symbolism-tattoo-2025',
        slug: 'celtic-knot-ancient-symbolism-tattoo',
        title: "Hình xăm Celtic - Nghệ thuật cổ xưa Ireland",
        date: "18/07/2025",
        author: "Sean O'Connor",
        subtitle: "Celtic Knot tượng trưng cho sự vĩnh cửu, kết nối và vẻ đẹp của nghệ thuật cổ xưa.",
        image: Celtic,
        imageUI: Celtic,
        galleryImages: [Celtic],
        content: [
            {
                type: 'title',
                content: 'Ý nghĩa hình xăm Celtic trong văn hóa Ireland'
            },
            {
                type: 'text',
                content: 'Celtic Knot là nghệ thuật cổ xưa của người Ireland, với những đường nét phức tạp tượng trưng cho sự vĩnh cửu và kết nối. Mỗi nút thắt đều có ý nghĩa riêng.'
            },
            {
                type: 'image',
                content: 'Hình ảnh Celtic Knot cổ xưa',
                image: Celtic
            },
            {
                type: 'subtitle',
                content: 'Biểu tượng của vĩnh cửu'
            },
            {
                type: 'text',
                content: 'Hình xăm Celtic thể hiện sự kết nối với tổ tiên, văn hóa cổ xưa và niềm tin vào sự vĩnh cửu của tình yêu và tình bạn.'
            }
        ],
        tags: ['Celtic', 'Ireland', 'Cổ xưa', 'Vĩnh cửu', 'Kết nối'],
        category: 'Văn hóa Celtic',
        readTime: '4 phút',
        views: 244
    },
    {
        id: 'quan-cong-chinese-warrior-tattoo-2025',
        slug: 'quan-cong-chinese-warrior-tattoo',
        title: "Hình xăm Quan Công - Vị tướng trung nghĩa",
        date: "15/07/2025",
        author: "Trần Văn Minh",
        subtitle: "Quan Công tượng trưng cho lòng trung nghĩa, dũng cảm và sự bảo vệ trong văn hóa Trung Hoa.",
        image: QuanCong,
        imageUI: QuanCong,
        galleryImages: [QuanCong],
        content: [
            {
                type: 'title',
                content: 'Ý nghĩa hình xăm Quan Công trong văn hóa Trung Hoa'
            },
            {
                type: 'text',
                content: 'Quan Công là một trong những nhân vật nổi tiếng nhất trong lịch sử Trung Hoa, được tôn thờ như vị thánh bảo vệ. Ông tượng trưng cho lòng trung nghĩa, dũng cảm và sự công bằng.'
            },
            {
                type: 'image',
                content: 'Hình ảnh Quan Công uy nghiêm',
                image: QuanCong
            },
            {
                type: 'subtitle',
                content: 'Biểu tượng của trung nghĩa'
            },
            {
                type: 'text',
                content: 'Hình xăm Quan Công thể hiện mong muốn được bảo vệ và thể hiện những phẩm chất cao đẹp như trung nghĩa, dũng cảm.'
            }
        ],
        tags: ['Quan Công', 'Trung Hoa', 'Trung nghĩa', 'Dũng cảm', 'Bảo vệ'],
        category: 'Văn hóa Trung Hoa',
        readTime: '4 phút',
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
