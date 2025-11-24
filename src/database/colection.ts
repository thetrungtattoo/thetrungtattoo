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
        title: "Biểu tượng Samurai bảo hộ và sức mạnh bất diệt trong nghệ thuật Irezumi Nhật Bản",
        description: [
            {
                passage: 1,
                type: 'title',
                content: 'Azure Guardian - Biểu tượng Samurai bảo hộ và sức mạnh bất diệt trong nghệ thuật Irezumi Nhật Bản'
            },
            {
                passage: 2,
                type: 'text',
                content: 'Đây không chỉ là một hình xăm – mà là truyền thuyết sống, có những tác phẩm không chỉ đơn thuần là mực và da thịt - mà là linh hồn, là biểu tượng cho tinh thần, danh dự và niềm tin của người sở hữu. The Guardian of the Azure Dragon chính là một kiệt tác như vậy. Lấy cảm hứng từ truyền thuyết Nhật Bản cổ đại, hình xăm khắc họa hình ảnh vị Samurai uy nghiêm, mạnh mẽ, cùng linh thú Rồng Xanh (Seiryu) - biểu tượng của sức mạnh, trí tuệ và sự bảo hộ. Khi ánh sáng chạm vào từng lớp mực, ta như cảm nhận được luồng năng lượng sống động ẩn trong từng chi tiết - nơi chiến binh và thần thú hòa làm một thể thống nhất.'
            },
            {
                passage: 3,
                type: 'text',
                content: 'Được thực hiện bằng phong cách Japanese Traditional Irezumi, tác phẩm này là sự kết hợp hoàn hảo giữa kỹ thuật truyền thống và cảm quan hiện đại. Nghệ sĩ của The Thế Trung Tattoo Studio đã áp dụng kỹ thuật shading nhiều lớp và layering màu bảy tầng để tạo nên độ sâu tự nhiên, khiến từng vảy rồng như đang chuyển động theo hơi thở. Đường nét dứt khoát, sắc độ chuyển mượt, bố cục mạnh mẽ mà vẫn uyển chuyển - tất cả tạo nên một tổng thể vừa dữ dội, vừa trang nghiêm. Đây là tattoo dành cho những ai mang trong mình tinh thần chiến binh: bình tĩnh trong bão tố, kiên định giữa thách thức, và luôn giữ vững bản lĩnh trước mọi nghịch cảnh.'
            },
            {
                passage: 4,
                type: 'text',
                content: 'Ẩn sau hình xăm này là câu chuyện của niềm tin và sự tái sinh. Trước khi mang hình xăm lên cơ thể, chủ nhân chỉ đơn giản muốn thể hiện sức mạnh. Nhưng sau khi hoàn thiện, họ nhận ra mình đã thực sự thay đổi. Hình ảnh Samurai và Rồng Xanh không chỉ nằm trên da - mà trở thành biểu tượng sống, nhắc họ nhớ về sự cân bằng giữa lý trí và bản năng, giữa lòng trung thành và khát vọng tự do. Mỗi ánh nhìn vào gương là một lần họ cảm thấy bản thân được hồi sinh - như thể chiến binh bên trong vừa được đánh thức.'
            },
            {
                passage: 5,
                type: 'text',
                content: 'Tác phẩm The Guardian of the Azure Dragon không chỉ là minh chứng cho tay nghề đẳng cấp quốc tế của The Thế Trung Tattoo Studio, mà còn thể hiện triết lý sáng tạo: “Tattoo không chỉ là nghệ thuật thị giác - đó là hành trình tìm lại bản ngã.” Chúng tôi tin rằng mỗi người đều mang trong mình một câu chuyện đáng được kể, và hình xăm chính là cách mạnh mẽ nhất để khắc ghi câu chuyện ấy lên cơ thể - một cách sống động, vĩnh cửu và đầy tự hào.'
            },
            {
                passage: 6,
                type: 'text',
                content: 'Nếu bạn đang tìm kiếm một hình xăm mang ý nghĩa sâu sắc, thể hiện bản lĩnh và tinh thần chiến binh, The Guardian of the Azure Dragon sẽ là lựa chọn hoàn hảo. Hãy để The Thế Trung Tattoo Studio cùng bạn tạo nên một tác phẩm không chỉ đẹp về hình thức, mà còn chạm đến linh hồn. Bởi vì ở đây, mỗi đường kim, mỗi giọt mực - đều được thực hiện bằng trái tim của người nghệ sĩ và sự tôn trọng tuyệt đối dành cho câu chuyện của bạn.'
            },
            {
                passage: 7,
                type: 'text',
                content: 'Đặt lịch ngay hôm nay để bắt đầu hành trình biến cơ thể bạn thành một bức tranh sống động của danh dự, sức mạnh và niềm tin. Theo dõi The Thế Trung Tattoo Studio để khám phá thêm những kiệt tác tattoo mang linh hồn Nhật Bản - nơi nghệ thuật, văn hóa và con người hòa quyện thành một.'
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
        hashTag: ['#TheGuardianOfTheAzureDragon', '#IrezumiTattoo', '#JapaneseTattoo', '#SamuraiTattoo', '#DragonTattoo', '#TraditionalJapaneseTattoo', '#FullBackTattoo', '#TattooArt', '#TattooCulture', '#TattooArtist', '#TattooStudio', '#AsianTattooArt', '#JapaneseBodyArt', '#TattooStorytelling', '#TattooInspiration', '#TheTheTrungTattooStudio', '#VietnamTattooArtist', '#TattooCollector', '#TattooMasterpiece', '#BodyArtCulture', '#InkLife', '#TattooJourney', '#TattooMeaning', '#TattooDesign', '#TattooVietNam', '#TattooInternational'],
    },
    {
        name: "Inferno Dragon", // Tên sản phẩm
        title: "The Guardian of the Flame - Biểu tượng của sức mạnh và sự tái sinh",
        description: [
            {
                passage: 1,
                type: 'title',
                content: 'The Guardian of the Flame - Biểu tượng của sức mạnh và sự tái sinh'
            },
            {
                passage: 2,
                type: 'title',
                content: 'Khi nghệ thuật chạm đến giới hạn của da thịt, hình xăm trở thành tiếng nói của linh hồn. Inferno Dragon – tác phẩm full-back tattoo đến từ The Thế Trung Tattoo Studio – là minh chứng cho sự hòa quyện hoàn hảo giữa kỹ thuật, cảm xúc và triết lý sống.'
            },
            {
                passage: 3,
                type: 'text',
                content: 'Rồng - linh vật tượng trưng cho quyền năng, trí tuệ và sự tái sinh. Trong phiên bản Inferno Dragon, nghệ sĩ đã tái hiện linh hồn của ngọn lửa vĩnh cửu, nơi sức mạnh và bản lĩnh bừng cháy. Đôi mắt rực đỏ, nanh vuốt sắc bén cùng luồng năng lượng xoáy cuộn tựa lửa địa ngục - biểu trưng cho tinh thần chiến đấu không khuất phục, tái sinh từ tro tàn. \n Đây không chỉ là một hình xăm - mà là tuyên ngôn sống của những ai dám đối đầu với nghịch cảnh và bước ra mạnh mẽ hơn.'
            },
            {
                passage: 4,
                type: 'title',
                content: 'Inferno Dragon thuộc thể loại NEO-TRADITIONAL FANTASY TATTOO - phong cách nổi tiếng với đường nét mạnh mẽ, bảng màu rực rỡ và độ tương phản cao. \n Sự pha trộn giữa tông đỏ - vàng - đen - xanh ngọc được xử lý bằng kỹ thuật color layering và gradient saturation, giúp hình xăm đạt độ sâu và sống động hiếm thấy. Mỗi chi tiết đều được cân bằng hoàn hảo giữa realistic shadow và stylized linework, tạo nên tổng thể vừa huyền ảo vừa mạnh mẽ.'
            },
            {
                passage: 5,
                type: 'text',
                content: 'Tác phẩm được thực hiện bằng machine coil hybrid, kết hợp dynamic ink và eternal color series, đảm bảo độ bền và độ bóng màu cao. \n Đặc biệt, kỹ thuật skin tone blending giúp màu sắc bám sâu nhưng vẫn giữ độ tự nhiên, phản chiếu ánh sáng như lửa thật - một yếu tố cực kỳ khó đạt được trong dòng Neo-Traditional.'
            },
            {
                passage: 6,
                type: 'title',
                content: 'Chủ nhân của Inferno Dragon đã lựa chọn hình xăm này như một cách ghi dấu hành trình vượt qua khủng hoảng. Con Rồng Lửa tượng trưng cho bản ngã tái sinh, cho những lần vấp ngã và đứng dậy. Mỗi lần nhìn vào tấm lưng - là mỗi lần nhớ lại: “Không có ngọn lửa nào có thể thiêu rụi một tâm hồn biết bùng cháy.”'
            },
            {
                passage: 7,
                type: 'text',
                content: 'Từ bản phác thảo tay truyền thống đến bản màu digital proof, đội ngũ The Thế Trung Tattoo Studio đã làm việc cùng khách hàng trong suốt nhiều tuần để đạt độ chính xác hoàn hảo. Đây là minh chứng rõ ràng cho triết lý “Every Ink Tells a Story” mà studio theo đuổi.'
            },
            {
                passage: 8,
                type: 'title',
                content: 'Inferno Dragon đặc biệt bởi nó không chỉ là một hình xăm, mà là biểu tượng của bản lĩnh và khí chất cá nhân, dành cho những người hiểu rõ giá trị của sức mạnh nội tâm và dám sống thật với ngọn lửa bên trong mình. Với phong cách Neo-Traditional kết hợp Fantasy, tác phẩm vượt qua giới hạn của thời gian, nơi nghệ thuật và tâm linh giao hòa trong từng đường nét và sắc màu. Mỗi chi tiết được tạo nên bằng bàn tay và tâm huyết của nghệ sĩ hàng đầu tại The Thế Trung Tattoo Studio, nơi xăm hình không chỉ là một nghề, mà là ngọn lửa sống được truyền vào từng mũi kim và giọt mực.'
            },
            {
                passage: 9,
                type: 'text',
                content: 'Nếu bạn đang tìm kiếm một hình xăm mang năng lượng, sức mạnh và bản lĩnh như Inferno Dragon, hãy để The Thế Trung Tattoo Studio giúp bạn kể câu chuyện của chính mình qua từng đường mực. \n Đặt lịch ngay hôm nay để biến cơ thể bạn thành bức tranh sống động của niềm tin và sự tái sinh.'
            },
        ], // Mô tả sản phẩm
        author: "Admin",
        date: "22/02/2025",
        mainImage: Product2_4, // Hình ảnh chính hiển thị
        detailImages: [
            Product2_1,
            Product2_2,
            Product2_3,
            Product2_4,
        ], // Hình ảnh chi tiết sản phẩm
        category: ProductCategory.NEO_TRADITIONAL, // Danh mục sản phẩm
        size: ProductSize.LARGE, // Kích thước sản phẩm
        originalPrice: 0, // Giá gốc sản phẩm
        discountPercentage: 0, // Phần trăm giảm giá sản phẩm
        isActive: true, // Trạng thái sản phẩm
        isSectionNew: false, // Sản phẩm mới
        showNewIcon: true, // Hiển thị icon "New"
        displayOrder: 2, // Thứ tự hiển thị
        hashTag: ['#InfernoDragon', '#NeoTraditionalTattoo', '#FantasyTattooArt', '#BackTattoo', '#TattooMasterpiece', '#TattooCollector', '#InkCulture', '#TattooPassion', '#TattooStorytelling', '#TattooInspiration', '#TheTheTrungTattooStudio', '#VietnamTattooArt', '#FullBackTattoo', '#DragonTattooDesign', '#TattooLifestyle'],
    },
    {
        name: "Phượng Hoàng tái sinh",
        title: "Hồi sinh từ tro tàn, tái sinh trong ánh sáng",
        description: [
            {
                passage: 1,
                type: 'title',
                content: 'The Rebirth of the Phoenix - Hồi sinh từ tro tàn, tái sinh trong ánh sáng'
            },
            {
                passage: 2,
                type: 'text',
                content: 'Đứng giữa ánh sáng và tro tàn, có một biểu tượng luôn vươn mình sống dậy - Phượng Hoàng. The Rebirth of the Phoenix không chỉ là một hình xăm, mà là bản tuyên ngôn của những tâm hồn từng gục ngã và dám hồi sinh. Lấy cảm hứng từ linh điểu bất tử trong huyền thoại phương Đông, tác phẩm kể lại hành trình vượt qua đổ nát để tái sinh – rực rỡ hơn, mạnh mẽ hơn, và đầy kiêu hãnh.'
            },
            {
                passage: 3,
                type: 'title',
                content: 'Được thực hiện bằng phong cách Japanese Traditional Irezumi, tác phẩm là sự kết hợp hoàn hảo giữa nghệ thuật cổ điển và kỹ thuật đương đại. Nghệ sĩ tại The Thế Trung Tattoo Studio đã tái hiện từng lớp lông Phượng bằng kỹ thuật multi-layer color shading - nơi các sắc độ đỏ, vàng, cam, và tím hòa quyện tạo hiệu ứng chuyển sáng tự nhiên, khiến đôi cánh như đang bùng cháy trong ngọn lửa của chính nó. Mỗi đường nét, mỗi mảng màu đều được tính toán tỉ mỉ để tạo cảm giác chuyển động - như thể Phượng Hoàng đang vươn mình từ tro tàn, bay lên giữa bầu trời rực lửa.'
            },
            {
                passage: 4,
                type: 'text',
                content: 'Điều làm nên sự đặc biệt của The Rebirth of the Phoenix không chỉ là kỹ thuật, mà là ý nghĩa. Đây là tattoo dành cho những người từng vấp ngã, từng tổn thương, nhưng chưa bao giờ đánh mất ánh sáng nội tâm. Trong văn hóa Irezumi, Phượng Hoàng tượng trưng cho sự tái sinh, thanh lọc và danh dự. Khi mang hình xăm này trên cơ thể, chủ nhân như mang theo một lá bùa hộ mệnh - nhắc nhở họ rằng mọi đau đớn đều có thể hóa thành sức mạnh, mọi mất mát đều là khởi đầu cho một chương mới.'
            },
            {
                passage: 5,
                type: 'title',
                content: 'Nhìn vào hình xăm này, ta không chỉ thấy sự hòa quyện của sắc màu - mà thấy cả triết lý sống được khắc sâu trong từng lớp mực. Đó là sự tái sinh không ngừng, là khát khao cháy bỏng được sống đúng với bản chất thật của mình. Và đó cũng là tinh thần mà The Thế Trung Tattoo Studio luôn theo đuổi - biến mỗi tác phẩm thành một biểu tượng cá nhân, mang dấu ấn không thể trộn lẫn.'
            },
            {
                passage: 6,
                type: 'text',
                content: 'Tại The Thế Trung, chúng tôi tin rằng mỗi tattoo đều kể một câu chuyện. Với The Rebirth of the Phoenix, đó là câu chuyện về lòng dũng cảm, về nghị lực hồi sinh và về hành trình tìm lại chính mình. Đây không chỉ là một hình xăm - đây là một tuyên ngôn.'
            },
            {
                passage: 7,
                type: 'title',
                content: 'Nếu bạn đang tìm kiếm một tác phẩm thể hiện sức mạnh, sự tái sinh và bản lĩnh sống, The Rebirth of the Phoenix chính là lựa chọn hoàn hảo. Hãy để The Thế Trung Tattoo Studio giúp bạn viết nên chương mới của cuộc đời - nơi nghệ thuật và tâm hồn hòa làm một.'
            },
            {
                passage: 8,
                type: 'title',
                content: 'Đặt lịch ngay hôm nay để khởi đầu hành trình biến cơ thể bạn thành một kiệt tác sống động của nghệ thuật và ý chí. Theo dõi The Thế Trung Tattoo Studio để khám phá thêm những tác phẩm tattoo mang linh hồn Irezumi - nơi mực, da và cảm xúc hòa quyện thành câu chuyện không bao giờ phai.'
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
        hashTag: [
            '#TheRebirthOfThePhoenix', '#PhoenixTattoo', '#IrezumiTattoo', '#JapaneseTattoo', '#TraditionalJapaneseTattoo', '#FullBackTattoo', '#ColorTattoo', '#TattooArt', '#TattooMeaning', '#TattooCulture', '#BodyArt', '#TattooArtist', '#TattooStudio', '#TattooDesign', '#AsianTattooArt', '#JapaneseBodyArt', '#TheTheTrungTattooStudio', '#VietnamTattooArtist', '#TattooCollector', '#TattooMasterpiece', '#InkLife', '#TattooJourney', '#TattooInspiration', '#TattooInternational', '#TattooWorldWide', '#TattooVietNam'],
    },
    {
        name: "The Shadow Serpent", // Tên sản phẩm
        title: "Khi quyền lực được khắc bằng sự tĩnh lặng", // Tiêu đề sản phẩm
        description: [
            {
                passage: 1,
                type: 'title',
                content: 'The Shadow Serpent - Khi sức mạnh được khắc bằng sự tĩnh lặng'
            },
            {
                passage: 2,
                type: 'text',
                content: 'Có những hình xăm không cần màu sắc rực rỡ để gây ấn tượng - chỉ cần sự tinh tế của những mảng đen xám và chiều sâu của đường nét. The Shadow Serpent, tác phẩm được thực hiện tại The Thế Trung Tattoo Studio, là minh chứng cho nghệ thuật kiểm soát ánh sáng, chuyển sắc và cảm xúc trong từng đường kim - nơi “bóng tối” trở thành biểu tượng của bản lĩnh và quyền năng.'
            },
            {
                passage: 3,
                type: 'title',
                content: 'Rắn trong văn hóa phương Đông và phương Tây đều mang hai mặt đối lập - vừa là biểu tượng của trí tuệ và tái sinh, vừa là hình ảnh của quyền năng và kiểm soát bản thân. Trong The Shadow Serpent, nghệ sĩ đã khai thác khía cạnh “ẩn mình trong tĩnh lặng” của loài rắn - nơi sức mạnh thật sự nằm ở sự điềm tĩnh, quan sát và hành động chính xác. \n Hình xăm không chỉ thể hiện cá tính mạnh mẽ, mà còn phản ánh tâm thế của người sở hữu: kẻ làm chủ bản thân, không cần phô trương nhưng luôn khiến thế giới phải nể phục.'
            },
            {
                passage: 4,
                type: 'text',
                content: 'The Shadow Serpent thuộc thể loại BLACKWORK TATTOO, kết hợp kỹ thuật Grey Wash Blending - một trường phái nổi tiếng trong thế giới tattoo chuyên nghiệp.\n Bằng việc sử dụng dải sắc độ từ deep black đến soft grey, nghệ sĩ đã tạo nên hiệu ứng khối 3D chân thực, giúp từng lớp vảy rắn nổi bật như đang chuyển động dưới ánh sáng. Độ mượt mà của shading thể hiện trình độ kiểm soát máy xăm hoàn hảo, khi từng nét đậm - nhạt đều được tính toán chính xác.'
            },
            {
                passage: 5,
                type: 'title',
                content: 'Tác phẩm được thực hiện bằng Rotary Pen Machine với mực Grey Wash Black Bear Series, mang lại độ mịn, bám da và độ bền vượt trội. Kỹ thuật gradual saturation và dotwork layering được áp dụng để đạt hiệu ứng chuyển màu mượt mà, đồng thời tạo cảm giác “realistic motion” - khiến hình xăm dường như có linh hồn.'
            },
            {
                passage: 6,
                type: 'text',
                content: 'Người sở hữu The Shadow Serpent chọn rắn không chỉ vì sức mạnh, mà còn vì triết lý sống: “Im lặng là sức mạnh của kẻ thông tuệ.”\nMỗi đường nét uốn lượn trên cổ tay tượng trưng cho hành trình kiểm soát bản thân, vượt qua bản năng để đạt đến đỉnh cao của sự tự tại. Đó là năng lượng của người không chạy theo đám đông, mà chọn con đường riêng - chậm, sâu, và chắc.'
            },
            {
                passage: 7,
                type: 'title',
                content: 'Vì nó không chỉ là một hình xăm, mà là tuyên ngôn sống của người hiểu rõ giá trị của sự điềm tĩnh trong thế giới ồn ào. Với phong cách Blackwork kết hợp Grey Wash, tác phẩm đạt được sự cân bằng hoàn hảo giữa bóng tối và ánh sáng - giữa mạnh mẽ và tinh tế. Và hơn hết, đây là tác phẩm được tạo nên từ bàn tay và tâm huyết của nghệ sĩ The Thế Trung Tattoo Studio, nơi nghệ thuật xăm được nâng tầm thành một trải nghiệm tâm linh.'
            },
            {
                passage: 8,
                type: 'title',
                content: 'Mỗi tác phẩm tại The Thế Trung Tattoo Studio đều mang một linh hồn riêng - kể câu chuyện của người đeo nó. Nếu bạn đang tìm kiếm một thiết kế vừa mang tính biểu tượng, vừa thể hiện đẳng cấp cá nhân, The Shadow Serpent chính là lựa chọn hoàn hảo. \n Đặt lịch ngay hôm nay để biến tầm nhìn của bạn thành một tác phẩm nghệ thuật sống mãi cùng thời gian.'
            }
        ], // Mô tả sản phẩm
        author: "Admin",
        date: "22/02/2025",
        mainImage: Product4_1, // Hình ảnh chính hiển thị
        detailImages: [
            Product4_1,
            Product4_2,
            Product4_3,
            Product4_4
        ], // Hình ảnh chi tiết sản phẩm
        category: ProductCategory.BLACKWORK, // Danh mục sản phẩm
        size: ProductSize.MEDIUM, // Kích thước sản phẩm
        originalPrice: 0, // Giá gốc sản phẩm
        discountPercentage: 0, // Phần trăm giảm giá sản phẩm
        isActive: true, // Trạng thái sản phẩm
        isSectionNew: true, // Sản phẩm mới
        showNewIcon: true, // Hiển thị icon "New"
        displayOrder: 1, // Thứ tự hiển thị
        hashTag: ['#TheShadowSerpent', '#BlackworkTattoo', '#GreyWashTattoo', '#SnakeTattooDesign', '#TattooCulture', '#TattooMasterpiece', '#InkPassion', '#TattooArtistry', '#TattooStorytelling', '#TheTheTrungTattooStudio', '#VietnamTattooArtist', '#TattooCollector', '#MonochromeTattoo', '#BlackAndGreyTattoo', '#FineLineTattoo'],
    },
    {
        name: "The Red Warrior & The Koi",
        title: "Sức mạnh từ nghị lực và niềm tin",
        description: [
            {
                passage: 1,
                type: 'title',
                content: 'The Red Warrior & The Koi - Sức mạnh từ nghị lực và niềm tin'
            },
            {
                passage: 2,
                type: 'text',
                content: 'Trong thế giới tattoo Nhật Bản cổ điển, có những hình xăm không chỉ là nghệ thuật - mà còn là tuyên ngôn về tinh thần sống. The Red Warrior & The Koi là một trong những kiệt tác như vậy. Lấy cảm hứng từ truyền thuyết cổ về người anh hùng đánh cá Shōkichi - biểu tượng của sức mạnh, lòng dũng cảm và ý chí vượt khó, hình tattoo này tái hiện câu chuyện bất tử: con người có thể chiến thắng mọi định mệnh bằng niềm tin và nỗ lực của chính mình.'
            },
            {
                passage: 3,
                type: 'title',
                content: 'Người chiến binh đỏ tượng trưng cho lửa - năng lượng sống, và cá chép khổng lồ tượng trưng cho ước mơ, hoài bão và thử thách. Trong văn hóa Irezumi, hình ảnh này mang thông điệp: \n“Chỉ khi bạn dám đối mặt với dòng nước ngược, bạn mới có thể hóa rồng.”\n Sự kết hợp giữa nhân vật đỏ mạnh mẽ và cá chép xanh lục khổng lồ không chỉ là tương phản về sắc màu, mà còn là biểu tượng của hành trình đấu tranh nội tâm - nơi con người vượt qua nỗi sợ hãi, giới hạn và cả chính bản thân mình.'
            },
            {
                passage: 4,
                type: 'text',
                content: 'Tác phẩm này được thực hiện theo phong cách Japanese Traditional Irezumi (Wabori), sử dụng kỹ thuật Bold Linework - Color Saturation - Layered Shading chuẩn mực Nhật Bản.\n\ Nghệ sĩ của The Thế Trung Tattoo Studio đã áp dụng kỹ thuật multi- tone ink layering để làm nổi bật độ tương phản giữa màu đỏ da thịt và mảng xanh lục cá chép.Phần nền được xử lý bằng black - grey gradient smoke kết hợp với Momiji(lá phong đỏ), tạo cảm giác chuyển động mềm mại, đồng thời tôn lên sức mạnh của hình chính.\n Đây không chỉ là một full back tattoo - mà là một bức tranh sống động của tinh thần võ sĩ đạo(Bushido), nơi sự dũng cảm, trung thành và kiên định được khắc sâu trong từng lớp mực.'
            },
            {
                passage: 5,
                type: 'title',
                content: 'Tác phẩm “The Red Warrior & The Koi” - một kiệt tác Japanese Traditional toàn lưng, mang trong mình năng lượng nguyên thủy của sức mạnh, nghị lực và tinh thần bất khuất. Lấy cảm hứng từ truyền thuyết Shōkichi - người anh hùng đỏ tay không bắt cá chép, hình xăm này khắc họa khoảnh khắc con người đối đầu với thử thách, nơi sức mạnh không chỉ đến từ cơ thể mà còn từ ý chí và niềm tin mãnh liệt vào bản thân.'
            },
            {
                passage: 6,
                type: 'text',
                content: 'Sự hòa quyện giữa gam đỏ quyền lực và xanh lục sâu thẳm tạo nên một bản giao hưởng thị giác mạnh mẽ - biểu tượng cho sự đối lập giữa lửa và nước, giữa con người và định mệnh. Nghệ sĩ tại The Thế Trung Tattoo Studio đã sử dụng kỹ thuật Japanese Traditional Irezumi (Wabori) kết hợp bold outline - deep shading - color saturation chuẩn mực, tái hiện tinh thần võ sĩ đạo trong từng lớp mực. Nền khói đen (black-grey gradient) xen kẽ lá phong đỏ (Momiji) mang lại cảm giác chuyển động, làm nổi bật hình thể khỏe khoắn và quyết liệt của chiến binh.'
            },
            {
                passage: 7,
                type: 'title',
                content: 'Tại The Thế Trung Tattoo Studio, chúng tôi tin rằng mỗi tattoo là một bản tuyên ngôn cá nhân - một hành trình chạm đến bản ngã sâu thẳm nhất. Nếu bạn đang tìm kiếm một tác phẩm thể hiện ý chí và sức mạnh nội tâm, hãy để The Red Warrior & The Koi trở thành biểu tượng vĩnh cửu trên làn da của bạn.'
            },
            {
                passage: 8,
                type: 'title',
                content: 'Đặt lịch ngay hôm nay để biến câu chuyện của bạn thành một kiệt tác nghệ thuật sống. Theo dõi Studio để khám phá thêm những hình xăm mang linh hồn Nhật Bản, được tạo nên bởi bàn tay nghệ sĩ Việt đẳng cấp quốc tế.'
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
        hashTag: ['#TheRedWarriorAndTheKoi', '#JapaneseTattoo', '#Irezumi', '#Wabori', '#FullBackTattoo', '#KoiTattoo', '#SamuraiTattoo', '#TattooArt', '#BodyArt', '#TraditionalTattoo', '#TattooMeaning', '#TattooCulture', '#TattooDesign', '#TattooArtist', '#TheTheTrungTattooStudio', '#TattooVietnam', '#TattooWorldWide', '#InkCulture', '#TattooInspiration', '#TattooPassion', '#TattooJourney', '#JapaneseBodyArt', '#AsianTattoo', '#TattooMasterpiece'],
    },
    {
        name: "The Silent Koi",
        title: "Biểu tượng của sức mạnh tĩnh lặng",
        description: [
            {
                passage: 1,
                type: 'title',
                content: 'The Silent Koi - Biểu tượng của sức mạnh tĩnh lặng'
            },
            {
                passage: 2,
                type: 'text',
                content: 'Giữa thế giới ồn ào của nghệ thuật tattoo, nơi mỗi đường mực đều mang một câu chuyện, The Silent Koi nổi bật như một bản giao hưởng của sự tĩnh tại và kiên định. Hình xăm cá chép đen uốn lượn quanh vai và ngực, giữa những cánh hoa đỏ rực và làn sóng nước trừu tượng, không chỉ là một tác phẩm nghệ thuật - mà còn là biểu tượng của nghị lực vượt dòng đời, nơi con người tìm thấy sự cân bằng giữa nội tâm và thử thách.'
            },
            {
                passage: 3,
                type: 'title',
                content: 'Lấy cảm hứng từ triết lý Koi Nobori trong văn hóa Nhật Bản - loài cá chép bơi ngược dòng tượng trưng cho lòng dũng cảm và tinh thần bất khuất - tác phẩm The Silent Koi thể hiện hành trình thầm lặng của những người không cần ồn ào để chứng minh sức mạnh. Màu đen sâu thẳm của thân cá tượng trưng cho sự vững vàng và trí tuệ, trong khi những bông hoa đỏ cam Sakura & Ume Blossom tượng trưng cho niềm tin, khởi đầu và sự tái sinh.'
            },
            {
                passage: 4,
                type: 'text',
                content: 'Được thực hiện bởi đội ngũ nghệ sĩ tại The Thế Trung Tattoo Studio, tattoo này sử dụng kỹ thuật Japanese Traditional (Irezumi) với lối solid black shading, bold linework, và color blocking hoàn hảo giữa các tone đỏ - đen - xám. Sự phối hợp tinh tế này tạo nên chiều sâu và sức sống cho hình xăm, giúp từng chi tiết nổi bật mạnh mẽ trên làn da, vừa cổ điển vừa hiện đại - chuẩn phong cách Neo Traditional Irezumi.'
            },
            {
                passage: 5,
                type: 'title',
                content: 'Điểm đặc biệt trong The Silent Koi chính là sự cân đối giữa động và tĩnh. Dòng nước cuộn xoáy, những cánh hoa rơi và thân cá chuyển động thể hiện năng lượng liên tục của cuộc sống, trong khi ánh mắt cá hướng về phía trước lại gợi cảm giác bình tâm, kiên định. Nó nhắc nhở chúng ta rằng: “Đôi khi, sự mạnh mẽ nhất chính là khả năng giữ bình yên giữa bão tố.”'
            },
            {
                passage: 6,
                type: 'text',
                content: 'Tattoo này phù hợp cho những ai đang trên hành trình vượt qua thử thách cá nhân - những người hiểu rằng sức mạnh thật sự không cần phô trương, mà nằm ở sự bền bỉ và lòng tin vào chính mình. Mỗi đường kim, mỗi mảng màu trong The Silent Koi không chỉ là nghệ thuật - đó là một lời khẳng định: Bạn không cần nói to để thế giới biết bạn mạnh mẽ đến mức nào.'
            },
            {
                passage: 7,
                type: 'title',
                content: 'Tại The Thế Trung Tattoo Studio, chúng tôi không chỉ tạo nên hình xăm - chúng tôi tạo nên những câu chuyện khắc sâu trong tâm trí. Mỗi tác phẩm đều được thiết kế độc bản, mang dấu ấn của người sở hữu, để mỗi tattoo không chỉ đẹp - mà còn có linh hồn.'
            },
            {
                passage: 8,
                type: 'title',
                content: 'Hãy đặt lịch ngay hôm nay để mang biểu tượng “The Silent Koi” lên cơ thể bạn - biểu tượng của sức mạnh tĩnh lặng, của nghị lực và niềm tin không bao giờ tắt.\n Theo dõi Studio để khám phá thêm những tác phẩm Japanese Irezumi mang linh hồn Việt - nơi nghệ thuật chạm đến cảm xúc và kể lại câu chuyện của chính bạn.'
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
        hashTag: ['#TheSilentKoi', '#KoiTattoo', '#JapaneseTattoo', '#Irezumi', '#BlackAndGreyTattoo', '#TraditionalJapaneseTattoo', '#ShoulderTattoo', '#UpperArmTattoo', '#TattooArt', '#TattooDesign', '#TattooCulture', '#TattooMeaning', '#KoiFishTattoo', '#TattooArtist', '#TattooStudio', '#NeoTraditionalTattoo', '#TattooVietnam', '#TattooInspiration', '#BodyArt', '#TattooWorldWide', '#InkCulture', '#TattooJourney', '#TattooMasterpiece', '#TheTheTrungTattooStudio', '#TattooStorytelling', '#AsianTattooArt'],
    },
    {
        name: "Hòa Điệu Vĩnh Cửu",
        title: "",
        description: [
            {
                passage: 1,
                type: 'title',
                content: ' '
            },
            {
                passage: 2,
                type: 'text',
                content: 'Khi kim chạm mực, một bản giao hưởng của linh hồn được cất lên. The Eternal Harmony – full sleeve Japanese tattoo đến từ The Thế Trung Tattoo Studio – thể hiện sự hòa quyện hoàn hảo giữa nghệ thuật Irezumi cổ truyền và tinh thần đương đại, nơi cái đẹp, sức mạnh và triết lý sống cùng tồn tại trong một nhịp thở.'
            },
            {
                passage: 3,
                type: 'title',
                content: 'Hình xăm là sự kết hợp hài hòa của ba yếu tố biểu tượng: chim hạc (Crane) tượng trưng cho trường thọ và cao quý, hoa mẫu đơn (Peony) biểu trưng cho thịnh vượng và danh vọng, cùng nền mây - gió (Cloud & Wind) đại diện cho dòng chảy vô thường của cuộc sống. Ba yếu tố này hòa quyện tạo nên một tổng thể nghệ thuật tôn vinh vẻ đẹp của sự đối lập - mạnh mẽ nhưng thanh thoát, trầm lắng nhưng rực rỡ.'
            },
            {
                passage: 4,
                type: 'text',
                content: 'Về kỹ thuật, tác phẩm được hoàn thiện bằng Japanese Traditional Irezumi, với bold outlines, saturated color blending, gradient shading và perfect anatomical flow, giúp tattoo ôm trọn cấu trúc cánh tay một cách tự nhiên như thể nó sinh ra cùng cơ thể. Đây là trình độ thể hiện đặc trưng của các nghệ sĩ cấp quốc tế - những người không chỉ “xăm hình” mà đang vẽ linh hồn lên da thịt.'
            },
            {
                passage: 5,
                type: 'title',
                content: 'Triết lý ẩn sâu trong The Eternal Harmony là lời nhắc nhở về sự cân bằng giữa vinh quang và bình an, giữa sắc đẹp phù du và giá trị vĩnh hằng. Mỗi đường kim, mỗi gam màu đều kể lại câu chuyện của người mang nó - hành trình tìm về bản ngã, nơi tâm hồn chạm đến sự tĩnh tại giữa biến động của đời sống hiện đại.'
            },
            {
                passage: 6,
                type: 'text',
                content: 'Tác phẩm này không chỉ dành cho những ai yêu nghệ thuật xăm, mà còn cho những người đã từng bước qua thử thách, đã học được cách tìm bình yên trong sự đối lập, và mong muốn mang câu chuyện của mình theo cùng năm tháng.'
            },
            {
                passage: 7,
                type: 'title',
                content: 'The Thế Trung Tattoo Studio - nơi nghệ thuật và triết lý gặp nhau, nơi mỗi hình xăm không chỉ là tác phẩm, mà là dấu ấn của linh hồn. \n Đặt lịch ngay hôm nay để trải nghiệm nghệ thuật tattoo đẳng cấp quốc tế.'
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
        hashTag: ['#TheEternalHarmony', '#JapaneseTattoo', '#FullSleeveTattoo', '#IrezumiArt', '#LuxuryTattoo', '#TattooPhilosophy', '#TattooArt', '#BodyArt', '#JapaneseStyleTattoo', '#TraditionalTattoo', '#TattooMeaning', '#TattooCulture', '#TattooArtist', '#TattooVietnam', '#TheTheTrungTattooStudio', '#TattooWorldWide', '#InkCulture', '#TattooInspiration', '#TattooPassion', '#LuxuryBodyArt', '#TattooJourney', '#JapaneseBodyArt', '#TattooMasterpiece'],
    },
    // {
    //     name: "", // Tên sản phẩm
    //     title: "", // Tiêu đề sản phẩm
    //     description: [
    //             {
    //         passage: 1,
    //         type: 'title',
    //         content: ' '
    //     },
    //     {
    //         passage: 2,
    //         type: 'text',
    //         content: ' '
    //     },
    //     {
    //         passage: 3,
    //         type: 'title',
    //         content: ' '
    //     },
    //     {
    //         passage: 4,
    //         type: 'text',
    //         content: ' '
    //     },
    //     {
    //         passage: 5,
    //         type: 'title',
    //         content: ' '
    //     },
    //     {
    //         passage: 6,
    //         type: 'text',
    //         content: ' '
    //     },
    //     {
    //         passage: 7,
    //         type: 'title',
    //         content: ' '
    //     },
    // ], // Mô tả sản phẩm
    //     author: "Admin",
    //     date: "22/02/2025",
    //     mainImage: Product1_5, // Hình ảnh chính hiển thị
    //     detailImages: [], // Hình ảnh chi tiết sản phẩm
    //     category: ProductCategory.JAPANESE, // Danh mục sản phẩm
    //     size: ProductSize.LARGE, // Kích thước sản phẩm
    //     originalPrice: 0, // Giá gốc sản phẩm
    //     discountPercentage: 0, // Phần trăm giảm giá sản phẩm
    //     isActive: true, // Trạng thái sản phẩm
    //     isSectionNew: true, // Sản phẩm mới
    //     showNewIcon: true, // Hiển thị icon "New"
    //     displayOrder: 1 // Thứ tự hiển thị
    //     hashTag: [],
    // },
];