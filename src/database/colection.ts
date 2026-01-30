import type { ProductImage } from "@/types/product";
import { ProductCategory, ProductSize } from "@/types/product";
import Product1_1 from "@/assets/images/colections/product/product1/product1.1.jpg";
import Product1_2 from "@/assets/images/colections/product/product1/product1.2.jpg";
import Product1_3 from "@/assets/images/colections/product/product1/product1.3.jpg";
import Product1_4 from "@/assets/images/colections/product/product1/product1.4.jpg";
import Product1_5 from "@/assets/images/colections/product/product1/product1.5.jpg";
import Product1_6 from "@/assets/images/colections/product/product1/product1.6.jpg";
import Product2_1 from "@/assets/images/colections/product/product2/product2.1.jpg";
import Product2_2 from "@/assets/images/colections/product/product2/product2.2.jpg";
import Product2_3 from "@/assets/images/colections/product/product2/product2.3.jpg";
import Product2_4 from "@/assets/images/colections/product/product2/product2.4.jpg";
import Product3_1 from "@/assets/images/colections/product/product3/product3.1.jpg";
import Product3_2 from "@/assets/images/colections/product/product3/product3.2.jpg";
import Product3_3 from "@/assets/images/colections/product/product3/product3.3.jpg";
import Product4_1 from "@/assets/images/colections/product/product4/product4.1.jpg";
import Product4_2 from "@/assets/images/colections/product/product4/product4.2.jpg";
import Product4_3 from "@/assets/images/colections/product/product4/product4.3.jpg";
import Product4_4 from "@/assets/images/colections/product/product4/product4.4.jpg";
import Product9_1 from "@/assets/images/colections/product/product9/product9.1.jpg";
import Product9_2 from "@/assets/images/colections/product/product9/product9.2.jpg";
import Product9_3 from "@/assets/images/colections/product/product9/product9.3.jpg";
import Product9_4 from "@/assets/images/colections/product/product9/product9.4.jpg";
import Product9_5 from "@/assets/images/colections/product/product9/product9.5.jpg";
import Product9_6 from "@/assets/images/colections/product/product9/product9.6.jpg";
import Product9_7 from "@/assets/images/colections/product/product9/product9.7.jpg";
import Product9_8 from "@/assets/images/colections/product/product9/product9.8.jpg";
import Product9_9 from "@/assets/images/colections/product/product9/product9.9.jpg";
import Product15_1 from "@/assets/images/colections/product/product15/product15.1.jpg";
import Product15_2 from "@/assets/images/colections/product/product15/product15.2.jpg";
import Product15_3 from "@/assets/images/colections/product/product15/product15.3.jpg";
import Product15_4 from "@/assets/images/colections/product/product15/product15.4.jpg";
import Product17_1 from "@/assets/images/colections/product/product17/product17.1.jpg";
import Product17_2 from "@/assets/images/colections/product/product17/product17.2.jpg";
import Product17_3 from "@/assets/images/colections/product/product17/product17.3.jpg";
import Product17_4 from "@/assets/images/colections/product/product17/product17.4.jpg";

const calculateDiscountedPrice = (originalPrice: number, discountPercentage: number): number => {
    return Math.round(originalPrice * (1 - discountPercentage / 100));
};

const generateColectionId = (name: string): string => {
    return name.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
};

const generateRandomRating = (productName: string): number => {
    const seed = productName.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
    const random = (seed % 6) / 10;
    return Math.round((4.5 + random) * 10) / 10;
};

export const getColectionItems = (): ProductImage[] => {
    const now = new Date();
    return COLECTION_ITEMS.map(product => ({
        ...product,
        id: generateColectionId(product.name),
        discountedPrice: calculateDiscountedPrice(product.originalPrice, product.discountPercentage),
        rating: generateRandomRating(product.name),
        createdAt: now,
        updatedAt: now
    }));
};

export const COLECTION_ITEMS: (Omit<ProductImage, 'id' | 'discountedPrice' | 'createdAt' | 'updatedAt'> & { originalPrice: number })[] = [
    {
        name: "Azure Guardian",
        title: "Full Back Irezumi – Samurai & Thanh Long Seiryu | Tác phẩm di sản đỉnh cao",
        description: [
            {
                passage: 1,
                type: 'title',
                content: 'Khi Samurai Gặp Thanh Long – Một Câu Chuyện Được Khắc Trên Da'
            },
            {
                passage: 2,
                type: 'text',
                content: 'Sau 15 năm trong ngành, tôi đã chứng kiến hàng trăm dự án full back đến và đi. Phần lớn bị lãng quên sau vài mùa. Nhưng có những tác phẩm – như Azure Guardian – thuộc về nhóm còn lại: những kiệt tác được nhắc đến trong các cuộc trò chuyện giữa collector, được chia sẻ không phải vì viral, mà vì respect. Sự kết hợp giữa Samurai và Seiryu ở đây không phải ngẫu nhiên – đó là cuộc đối thoại giữa hai biểu tượng quyền lực nhất trong văn hóa võ sĩ đạo Nhật Bản.'
            },
            {
                passage: 3,
                type: 'title',
                content: 'Kỹ Thuật Seven-Layer Saturation – Vì Sao Màu Mực Này Sống Cả Đời'
            },
            {
                passage: 4,
                type: 'text',
                content: 'Điều khiến Azure Guardian khác biệt nằm ở kỹ thuật seven-layer color saturation. Đây không phải marketing speak – mà là quy trình thực tế đòi hỏi 6-8 sessions riêng biệt. Mỗi layer được đợi heal hoàn toàn trước khi apply layer tiếp theo. Kết quả: độ bão hòa màu đạt 85% retention sau 10 năm – một con số mà hầu hết tattoo color chỉ giữ được 60-65%. Phần Seiryu sử dụng gradient từ deep cobalt đến azure highlight, tạo hiệu ứng 3D khiến vảy rồng như đang thở theo chuyển động cơ thể.'
            },
            {
                passage: 5,
                type: 'title',
                content: 'Bushido Gặp Guardian Spirit – Ý Nghĩa Sâu Xa Đằng Sau Nét Mực'
            },
            {
                passage: 6,
                type: 'text',
                content: 'Samurai trong tác phẩm là hiện thân của bảy đức tính Bushido: Gi (chính nghĩa), Yuu (dũng cảm), Jin (nhân từ), Rei (lễ nghĩa), Makoto (thành thật), Meiyo (danh dự), Chuugi (trung thành). Seiryu – Thanh Long phương Đông – là thần thú bảo hộ, biểu tượng của trí tuệ và mùa xuân tái sinh. Khi hai biểu tượng hợp nhất, Azure Guardian trở thành lời tuyên ngôn: người mang nó là chiến binh thời đại mới – kiên định trong nguyên tắc, mạnh mẽ trong hành động, được bảo vệ bởi sức mạnh vượt thời gian.'
            },
            {
                passage: 7,
                type: 'title',
                content: 'Dành Cho Ai – Và Tại Sao Đây Là Investment Piece'
            },
            {
                passage: 8,
                type: 'text',
                content: 'Azure Guardian không phải cho người mới bước vào thế giới Irezumi. Đây là tác phẩm cho collector đã hiểu giá trị của traditional craftsmanship, đang tìm kiếm một legacy piece – một di sản trên da. Thời gian thực hiện: 40-60 giờ qua 6-8 sessions. Yêu cầu tối thiểu 2 buổi tư vấn trước khi bắt đầu. Đặt lịch consultation qua DM hoặc hotline studio để bắt đầu hành trình.'
            },
        ],
        author: "Admin",
        date: "22/02/2025",
        mainImage: Product1_5,
        detailImages: [
            Product1_1,
            Product1_2,
            Product1_3,
            Product1_4,
            Product1_5,
            Product1_6,
        ],
        category: ProductCategory.JAPANESE,
        size: ProductSize.LARGE,
        originalPrice: 0,
        discountPercentage: 0,
        isActive: true,
        isSectionNew: true,
        showNewIcon: true,
        displayOrder: 1,
        hashTag: ['#AzureGuardian', '#IrezumiMasterpiece', '#JapaneseTattoo', '#SamuraiTattoo', '#SeiryuDragon', '#FullBackTattoo', '#TraditionalIrezumi', '#TattooCollector', '#BushidoSpirit', '#AsianTattooArt', '#JapaneseBodyArt', '#TattooArtistry', '#TheTheTrungTattoo', '#VietnamTattooArtist', '#LuxuryTattoo', '#TattooInvestment', '#BodyArtCulture', '#InkMasterpiece', '#TattooHeritage', '#OrientalTattoo'],
    },
    {
        name: "Inferno Dragon",
        title: "Neo-Traditional Dragon Full Back – Bản Giao Hưởng Lửa & Sự Tái Sinh",
        description: [
            {
                passage: 1,
                type: 'title',
                content: 'Rồng Lửa – Khi Phương Đông Gặp Neo-Traditional Phương Tây'
            },
            {
                passage: 2,
                type: 'text',
                content: 'Trong 5 năm gần đây, tôi quan sát một xu hướng rõ ràng: collector 25-35 tuổi đang dịch chuyển từ minimalist sang statement pieces. Họ không muốn tattoo chỉ để có – họ muốn tác phẩm vừa bold về visual, vừa sâu về meaning. Inferno Dragon ra đời từ insight đó: một full back piece kết hợp mythology rồng Á Đông với palette màu Neo-Traditional đương đại. Không phải fusion ngẫu nhiên – mà là cuộc hội thoại có chủ đích giữa hai trường phái.'
            },
            {
                passage: 3,
                type: 'title',
                content: 'Fire Spectrum Technique – Bí Mật Đằng Sau Mỗi Ngọn Lửa'
            },
            {
                passage: 4,
                type: 'text',
                content: 'Điểm nhấn kỹ thuật của Inferno Dragon nằm ở cách xử lý fire spectrum – từ deep crimson qua orange burst đến golden highlight. Kỹ thuật color layering đòi hỏi 4-5 pass trên cùng vùng da để đạt độ sâu màu mong muốn mà không gây trauma. Phần mắt rồng sử dụng whip shading để tạo hiệu ứng phát sáng từ bên trong – một kỹ thuật mà chỉ khoảng 5% artist trong ngành thực sự master được. Kết quả: mỗi ngọn lửa trông như đang thực sự cháy trên da.'
            },
            {
                passage: 5,
                type: 'title',
                content: 'Rebirth Through Fire – Ý Nghĩa Thực Sự Của Rồng Lửa'
            },
            {
                passage: 6,
                type: 'text',
                content: 'Rồng lửa trong mythology Á Đông không phải biểu tượng của destruction – mà là purification và transformation. Lửa đốt cháy những gì cũ kỹ, mở đường cho sự tái sinh. Chủ nhân đầu tiên của Inferno Dragon đến studio sau một giai đoạn khủng hoảng cá nhân. Con rồng trở thành reminder thường trực: mọi thử thách đều là cơ hội để emerge mạnh mẽ hơn. Đó là giá trị core mà tác phẩm này mang lại – không chỉ đẹp, mà còn meaningful.'
            },
            {
                passage: 7,
                type: 'title',
                content: 'Blend East-West Mà Không Mất Essence – Tại Sao Đây Là Piece Đặc Biệt'
            },
            {
                passage: 8,
                type: 'text',
                content: 'Inferno Dragon là proof of concept: blend East-West aesthetics mà không sacrifice essence của cả hai. Bold nhưng không vulgar. Meaningful nhưng không pretentious. Session time: 35-45 giờ. Nếu bạn đang tìm kiếm tác phẩm statement đủ mạnh để định nghĩa cá tính – đây là reference point. Liên hệ consultation để discuss vision của bạn.'
            },
        ],
        author: "Admin",
        date: "22/02/2025",
        mainImage: Product2_4,
        detailImages: [
            Product2_1,
            Product2_2,
            Product2_3,
            Product2_4,
        ],
        category: ProductCategory.NEO_TRADITIONAL,
        size: ProductSize.LARGE,
        originalPrice: 0,
        discountPercentage: 0,
        isActive: true,
        isSectionNew: false,
        showNewIcon: true,
        displayOrder: 2,
        hashTag: ['#InfernoDragon', '#NeoTraditionalTattoo', '#DragonTattoo', '#FullBackTattoo', '#ColorTattoo', '#TattooArtistry', '#FireDragon', '#TattooCollector', '#AsianDragon', '#TattooMasterpiece', '#TheTheTrungTattoo', '#VietnamTattooArt', '#LuxuryInk', '#TattooTransformation', '#BoldTattoo', '#StatementPiece'],
    },
    {
        name: "Phoenix Rebirth",
        title: "Phượng Hoàng Hō-ō Full Back – Irezumi Truyền Thống với Multi-Layer Shading",
        description: [
            {
                passage: 1,
                type: 'title',
                content: 'Hō-ō – Không Phải Phoenix Nào Cũng Giống Nhau'
            },
            {
                passage: 2,
                type: 'text',
                content: 'Phoenix là motif được request nhiều nhất trong Japanese tattoo – và cũng bị làm sai nhiều nhất. Vấn đề phổ biến: hầu hết phoenix trên thị trường trông như gà lửa cartoon. Phoenix Rebirth giải quyết vấn đề này bằng cách quay về nguồn gốc Irezumi authentic – nơi Hō-ō (Phượng Hoàng Nhật Bản) được thể hiện với uy nghiêm và trang trọng xứng đáng. Đây không phải bird-on-fire generic – đây là linh điểu của hoàng gia, chỉ xuất hiện trong thời thái bình.'
            },
            {
                passage: 3,
                type: 'title',
                content: 'Multi-Layer Gradient – Khi Mỗi Sợi Lông Đều Sống'
            },
            {
                passage: 4,
                type: 'text',
                content: 'Điều làm nên sự khác biệt của Phoenix Rebirth nằm ở cách render từng lớp lông. Thay vì block color như phần lớn artist, tác phẩm này apply kỹ thuật multi-layer gradient – mỗi sợi lông được build up từ 3-4 layers với saturation tăng dần. Kết quả: hiệu ứng luminous khiến đôi cánh như đang phát sáng từ bên trong. Palette màu được giới hạn trong fire spectrum: vermillion, cadmium orange, golden yellow – với strategic touches của purple cho depth. Không hơn, không kém.'
            },
            {
                passage: 5,
                type: 'title',
                content: 'Creation, Không Phải Destruction – Ý Nghĩa Văn Hóa Thực Sự'
            },
            {
                passage: 6,
                type: 'text',
                content: 'Trong văn hóa Nhật Bản, Hō-ō chỉ xuất hiện khi thiên hạ thái bình và có minh quân trị vì. Đây là linh vật của sự thanh cao, virtue và renewal. Khác với phoenix phương Tây (tái sinh từ destruction), Hō-ō mang năng lượng của creation và prosperity. Chọn motif này là chọn embrace một giai đoạn mới với lạc quan – không phải vượt qua trauma, mà là bước vào chapter tiếp theo với confidence.'
            },
            {
                passage: 7,
                type: 'title',
                content: 'Full Back Masterpiece – Không Phải Quyết Định Nhẹ Nhàng'
            },
            {
                passage: 8,
                type: 'text',
                content: 'Phoenix Rebirth là full back piece yêu cầu 50-65 giờ thực hiện. Đây không phải quyết định nhẹ nhàng – và không nên là. Một tác phẩm ở cấp độ này cần commitment từ cả artist và collector. Consultation trước bắt buộc để discuss concept, placement, và expectations. Portfolio review available upon request. Bắt đầu conversation – không bắt buộc commit ngay.'
            },
        ],
        author: "Admin",
        date: "22/02/2025",
        mainImage: Product3_1,
        detailImages: [
            Product3_1,
            Product3_2,
            Product3_3,
        ],
        category: ProductCategory.JAPANESE,
        size: ProductSize.LARGE,
        originalPrice: 0,
        discountPercentage: 0,
        isActive: true,
        isSectionNew: true,
        showNewIcon: true,
        displayOrder: 3,
        hashTag: ['#PhoenixRebirth', '#HoOuTattoo', '#IrezumiArt', '#JapaneseTattoo', '#FullBackTattoo', '#PhoenixTattoo', '#TraditionalJapanese', '#TattooMasterpiece', '#ColorIrezumi', '#AsianTattooArt', '#TheTheTrungTattoo', '#TattooCollector', '#JapaneseBodyArt', '#LuxuryTattoo', '#TattooHeritage', '#MythologicalTattoo'],
    },
    {
        name: "Shadow Serpent",
        title: "Blackwork Snake – Grey Wash Mastery | Khi Sức Mạnh Được Thể Hiện Qua Tĩnh Lặng",
        description: [
            {
                passage: 1,
                type: 'title',
                content: 'Blackwork Đang Có Renaissance Moment – Nhưng 90% Vẫn Làm Sai'
            },
            {
                passage: 2,
                type: 'text',
                content: 'Thực tế mà ít người nói: 90% blackwork trên thị trường chỉ là solid black fills không có depth. Đen thì đen, nhưng flat như mặt bàn. Shadow Serpent thuộc 10% còn lại – nơi grey wash được sử dụng như medium nghệ thuật thực sự, tạo illusion of three-dimensionality chỉ với một màu duy nhất. Đây là blackwork cho người hiểu rằng restraint cũng là một hình thức của mastery.'
            },
            {
                passage: 3,
                type: 'title',
                content: 'Seven-Gradient Grey Wash – Từ Deep Black Đến Soft Grey'
            },
            {
                passage: 4,
                type: 'text',
                content: 'Kỹ thuật grey wash trong Shadow Serpent sử dụng 7 gradients – từ solid black (100%) xuống soft grey (15%). Mỗi layer được apply với needle depth và speed khác nhau để đạt texture mong muốn. Phần scales của rắn được render bằng dotwork layering – hàng nghìn dots với density thay đổi tạo hiệu ứng realistic scale texture mà không cần color. Kết quả: con rắn trông như đang thực sự cuộn mình trên da, không phải vẽ phẳng lên da.'
            },
            {
                passage: 5,
                type: 'title',
                content: 'Wisdom & Transformation – Ý Nghĩa Mà Ít Người Biết'
            },
            {
                passage: 6,
                type: 'text',
                content: 'Rắn trong biểu tượng học không mang negative connotation như nhiều người nghĩ. Đây là biểu tượng của wisdom (rắn trong Rod of Asclepius – biểu tượng y học), healing, và transformation (lột xác để trưởng thành). Shadow Serpent được thiết kế cho những người understand sự phức tạp này – những người không cần giải thích cho thế giới về choices của mình, nhưng muốn mang một reminder thường trực về sức mạnh của sự tái sinh.'
            },
            {
                passage: 7,
                type: 'title',
                content: 'Medium Piece – Perfect Entry Point Cho Blackwork Lover'
            },
            {
                passage: 8,
                type: 'text',
                content: 'Shadow Serpent là medium piece, phù hợp forearm hoặc calf. Session time: 8-12 giờ. Đây là perfect entry point cho ai muốn experience blackwork ở level cao mà chưa sẵn sàng commit vào large-scale project. Walk-in welcome cho consultation. Final quote sau khi xác định size và placement – vì mỗi body anatomy đều unique.'
            },
        ],
        author: "Admin",
        date: "22/02/2025",
        mainImage: Product4_1,
        detailImages: [
            Product4_1,
            Product4_2,
            Product4_3,
            Product4_4
        ],
        category: ProductCategory.BLACKWORK,
        size: ProductSize.MEDIUM,
        originalPrice: 0,
        discountPercentage: 0,
        isActive: true,
        isSectionNew: true,
        showNewIcon: true,
        displayOrder: 4,
        hashTag: ['#ShadowSerpent', '#BlackworkTattoo', '#GreyWash', '#SnakeTattoo', '#MonochromeTattoo', '#TattooArtistry', '#BlackAndGrey', '#SerpentTattoo', '#DotworkTattoo', '#TheTheTrungTattoo', '#TattooCollector', '#MinimalBlackwork', '#TattooMasterpiece', '#VietnamTattooArt', '#RealisticBlackwork'],
    },
    {
        name: "Crimson Warrior & Koi",
        title: "Full Back Irezumi – Huyền Thoại Shōkichi & Koi | Wabori Truyền Thống",
        description: [
            {
                passage: 1,
                type: 'title',
                content: 'Shōkichi vs Koi – Một Trong Những Motif Cổ Điển Nhất Của Irezumi'
            },
            {
                passage: 2,
                type: 'text',
                content: 'Đây là một trong những motif Irezumi cổ điển nhất – người anh hùng Shōkichi tay không đấu với cá chép khổng lồ. Nhưng vấn đề với hầu hết renditions hiện đại: chúng mất đi dynamic energy của original ukiyo-e prints từ thời Edo. Crimson Warrior & Koi được design để recapture energy đó – với composition dựa trên nguyên tắc của Utagawa Kuniyoshi, master of warrior prints. Không phải interpretation – mà là continuation của một di sản.'
            },
            {
                passage: 3,
                type: 'title',
                content: 'Wabori Technique – Bold Lines & Saturated Colors'
            },
            {
                passage: 4,
                type: 'text',
                content: 'Tác phẩm sử dụng Wabori technique – phong cách Irezumi truyền thống với bold outlines và saturated colors. Điểm khác biệt nằm ở cách handle skin tones của nhân vật: thay vì flat red như nhiều artist, chúng tôi apply multi-tone layering để tạo illusion của musculature và movement. Phần koi được render với green-blue spectrum, tạo chromatic contrast với warm tones của warrior. Kết quả: composition động như đang kể một câu chuyện, không phải static image.'
            },
            {
                passage: 5,
                type: 'title',
                content: 'Human Struggle Against Overwhelming Odds – Câu Chuyện Phía Sau'
            },
            {
                passage: 6,
                type: 'text',
                content: 'Câu chuyện Shōkichi là metaphor cho human struggle against overwhelming odds. Con cá chép khổng lồ đại diện cho những thử thách tưởng như impossible – và người anh hùng naked, weaponless, represent inner strength thuần túy. Không vũ khí, không giáp, chỉ có ý chí. Đây là tác phẩm cho những người đã face their own "giant koi" – và emerged stronger. Nếu bạn hiểu feeling đó, bạn hiểu tại sao piece này đặc biệt.'
            },
            {
                passage: 7,
                type: 'title',
                content: 'Long-Term Project – Commitment Từ Cả Hai Phía'
            },
            {
                passage: 8,
                type: 'text',
                content: 'Crimson Warrior & Koi là full back masterpiece. Session time: 55-70 giờ. Đây là long-term project yêu cầu commitment từ cả artist và collector – không phải cho người "thử xem sao". Consultation mandatory trước khi bắt đầu. Payment plan available cho những dự án lớn. Liên hệ studio để schedule buổi tư vấn đầu tiên.'
            },
        ],
        author: "Admin",
        date: "22/02/2025",
        mainImage: Product9_9,
        detailImages: [
            Product9_1,
            Product9_2,
            Product9_3,
            Product9_4,
            Product9_5,
            Product9_6,
            Product9_7,
            Product9_8,
            Product9_9,
        ],
        category: ProductCategory.JAPANESE,
        size: ProductSize.LARGE,
        originalPrice: 0,
        discountPercentage: 0,
        isActive: true,
        isSectionNew: true,
        showNewIcon: true,
        displayOrder: 9,
        hashTag: ['#CrimsonWarrior', '#KoiTattoo', '#ShokichiLegend', '#IrezumiArt', '#WaboriTattoo', '#FullBackTattoo', '#JapaneseTattoo', '#TraditionalIrezumi', '#TattooMasterpiece', '#TheTheTrungTattoo', '#AsianTattooArt', '#TattooCollector', '#JapaneseWarrior', '#TattooHeritage', '#LuxuryIrezumi'],
    },
    {
        name: "Silent Koi",
        title: "Black Koi với Cherry Blossom – Japanese Traditional | Modern Execution",
        description: [
            {
                passage: 1,
                type: 'title',
                content: 'Koi Được Request Nhiều Nhất – Và Bị Làm Sai Nhiều Nhất'
            },
            {
                passage: 2,
                type: 'text',
                content: 'Koi là motif request nhiều nhất trong Japanese tattoo. Cũng là motif bị làm sai nhiều nhất. Vấn đề phổ biến: koi trông như goldfish từ pet shop – cute nhưng thiếu presence. Silent Koi giải quyết vấn đề này bằng cách reference trực tiếp từ ukiyo-e prints và koi specimens từ Japanese koi farms. Kết quả: một con koi có gravitas, có weight, có presence – không phải cartoon fish màu cam.'
            },
            {
                passage: 3,
                type: 'title',
                content: 'Solid Black Base – Một Approach Khác Biệt'
            },
            {
                passage: 4,
                type: 'text',
                content: 'Silent Koi sử dụng solid black làm base – một approach khác biệt với majority of koi tattoos thường rely on orange/gold. Điều này tạo visual weight và presence mà color koi thiếu. Cherry blossoms được add như chromatic accents – vermillion và coral tones contrast với black body, tạo dynamic visual tension. Đây không phải safe choice – nhưng đó chính là point: người chọn piece này không tìm kiếm safe.'
            },
            {
                passage: 5,
                type: 'title',
                content: 'Perseverance & Inner Strength – Ý Nghĩa Sâu Xa'
            },
            {
                passage: 6,
                type: 'text',
                content: 'Koi bơi ngược dòng để vượt vũ môn hóa rồng – legend ai cũng biết. Nhưng điều ít người nhắc: phần lớn koi fail. Chỉ những con với exceptional perseverance mới thành công. Silent Koi represent những người hiểu rằng success không đến từ talent alone – mà từ relentless effort khi không ai đang xem. Nó dành cho những người làm việc trong silence và để results speak.'
            },
            {
                passage: 7,
                type: 'title',
                content: 'Half Sleeve Hoặc Chest Piece – Phù Hợp Cả First-Timer'
            },
            {
                passage: 8,
                type: 'text',
                content: 'Silent Koi phù hợp làm half sleeve hoặc chest piece. Session time: 15-20 giờ. Đây là piece phù hợp cho cả first-time collectors lẫn seasoned enthusiasts – đủ sophisticated để impress, đủ accessible để không overwhelm. Consultation welcome, không commitment required. Drop by studio hoặc DM để bắt đầu conversation.'
            },
        ],
        author: "Admin",
        date: "22/02/2025",
        mainImage: Product15_2,
        detailImages: [
            Product15_1,
            Product15_2,
            Product15_3,
            Product15_4,
        ],
        category: ProductCategory.JAPANESE,
        size: ProductSize.MEDIUM,
        originalPrice: 0,
        discountPercentage: 0,
        isActive: true,
        isSectionNew: false,
        showNewIcon: false,
        displayOrder: 15,
        hashTag: ['#SilentKoi', '#KoiTattoo', '#JapaneseTattoo', '#IrezumiArt', '#BlackKoi', '#CherryBlossom', '#TraditionalJapanese', '#TattooArtistry', '#HalfSleeve', '#TheTheTrungTattoo', '#TattooCollector', '#AsianTattooArt', '#KoiNobori', '#TattooMasterpiece', '#JapaneseBodyArt'],
    },
    {
        name: "Eternal Harmony",
        title: "Full Sleeve Irezumi – Crane, Peony & Clouds | Bố Cục Cổ Điển Đỉnh Cao",
        description: [
            {
                passage: 1,
                type: 'title',
                content: 'Full Sleeve – Ultimate Test Cho Một Irezumi Artist'
            },
            {
                passage: 2,
                type: 'text',
                content: 'Full sleeve là ultimate test cho một Irezumi artist. Không phải vì size – mà vì composition. Bạn phải wrap một 2D design xung quanh 3D cylinder, đảm bảo nó reads well từ mọi angle, và maintain flow từ shoulder đến wrist. Eternal Harmony là demonstration của mastery này – với ba classic motifs: Crane (Tsuru), Peony (Botan), và Cloud work (Kumo). Không random combination – mà là symbolic trinity được calculate đến từng chi tiết.'
            },
            {
                passage: 3,
                type: 'title',
                content: 'Anatomical Flow & Visual Hierarchy – Tại Sao Flow Quan Trọng'
            },
            {
                passage: 4,
                type: 'text',
                content: 'Crane được placed ở upper arm – focal point của sleeve. Peonies cascade xuống forearm, with size diminishing để maintain perspective. Cloud work fills negative space và creates visual continuity. Mọi element được design để flow theo muscle groups – khi arm move, tattoo move with it, không against it. Đây là difference giữa tattoo tốt và tattoo exceptional: có move cùng body, hay fight against body.'
            },
            {
                passage: 5,
                type: 'title',
                content: 'Symbolic Trinity – Longevity, Prosperity, Transience'
            },
            {
                passage: 6,
                type: 'text',
                content: 'Crane symbolizes longevity và high virtue – theo legend, chúng sống 1000 năm. Peony là "king of flowers" trong Japanese culture, representing prosperity và good fortune. Clouds remind us về impermanence – rằng cả good times và bad times đều pass. Combination này creates balanced message: enjoy prosperity, maintain virtue, accept change. Đó là philosophy sống được encode vào da.'
            },
            {
                passage: 7,
                type: 'title',
                content: 'Commitment Piece – Không Phải Cho "Thử Xem Sao"'
            },
            {
                passage: 8,
                type: 'text',
                content: 'Eternal Harmony là full sleeve project. Session time: 30-40 giờ. Đây là commitment piece – không phải cho những người "thử xem sao". Khi bạn commit vào một full sleeve, bạn commit vào một relationship với tác phẩm đó suốt đời. Consultation required để discuss design direction và realistic expectations. Schedule buổi tư vấn đầu tiên để xem vision của bạn có match với approach của studio không.'
            },
        ],
        author: "Admin",
        date: "22/02/2025",
        mainImage: Product17_3,
        detailImages: [
            Product17_1,
            Product17_2,
            Product17_3,
            Product17_4,
        ],
        category: ProductCategory.JAPANESE,
        size: ProductSize.MEDIUM,
        originalPrice: 0,
        discountPercentage: 0,
        isActive: true,
        isSectionNew: false,
        showNewIcon: false,
        displayOrder: 17,
        hashTag: ['#EternalHarmony', '#FullSleeveTattoo', '#IrezumiArt', '#JapaneseTattoo', '#CraneTattoo', '#PeonyTattoo', '#TraditionalJapanese', '#TattooMasterpiece', '#JapaneseBodyArt', '#TheTheTrungTattoo', '#TattooCollector', '#SleeveTattoo', '#AsianTattooArt', '#LuxuryIrezumi', '#TattooHeritage'],
    },
];
