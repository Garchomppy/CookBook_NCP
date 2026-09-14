export interface Recipe {
  id: string;
  title: string;
  vietnameseTitle: string;
  category: 'Gà Nướng' | 'Gà Hầm / Nấu Nước' | 'Gà Chiên & Xào' | 'Gỏi & Khai Vị';
  prepTime: string;
  cookTime: string;
  servings: string;
  difficulty: 'Dễ' | 'Vừa' | 'Nâng cao';
  image: string;
  description: string;
  chefNote: string;
  ingredients: {
    name: string;
    amount: string;
  }[];
  instructions: {
    step: number;
    title: string;
    description: string;
  }[];
}

export const recipes: Recipe[] = [
  {
    "id": "uc-ga-1",
    "title": "Healthy Ức gà áp chảo sốt chanh",
    "vietnameseTitle": "Ức gà áp chảo sốt chanh",
    "category": "Gà Chiên & Xào",
    "prepTime": "15 - 20 phút",
    "cookTime": "20 - 30 phút",
    "servings": "2 người",
    "difficulty": "Dễ",
    "image": "https://images.unsplash.com/photo-1598103442097-8b74394b95c6?auto=format&fit=crop&w=1000&q=80",
    "description": "Món Ức gà áp chảo sốt chanh thơm ngon, giàu dinh dưỡng, rất thích hợp cho thực đơn eat clean và bữa cơm gia đình.",
    "chefNote": "Nên dùng khăn giấy bếp thấm thật khô miếng ức gà trước khi ướp để gia vị ngấm sâu và khi áp chảo/nướng da sẽ vàng thơm.",
    "ingredients": [
      {
        "name": "Ức gà",
        "amount": "2 miếng"
      },
      {
        "name": "Cà chua",
        "amount": "2 quả"
      },
      {
        "name": "Hành tây",
        "amount": "1/2 củ"
      },
      {
        "name": "Sả",
        "amount": "1 cây"
      },
      {
        "name": "Ớt sừng",
        "amount": "1 quả"
      },
      {
        "name": "Gừng",
        "amount": "1 củ"
      },
      {
        "name": "Hành tím",
        "amount": "3 củ"
      },
      {
        "name": "Tỏi",
        "amount": "30 gr"
      },
      {
        "name": "Muối",
        "amount": "1/3 muỗng cà phê"
      },
      {
        "name": "Tiêu",
        "amount": "1/4 muỗng cà phê"
      },
      {
        "name": "Dầu ăn",
        "amount": "1 muỗng canh"
      },
      {
        "name": "Hạt nêm",
        "amount": "1/2 muỗng cà phê"
      },
      {
        "name": "Bột ngọt",
        "amount": "1 muỗng cà phê"
      },
      {
        "name": "Dầu hào",
        "amount": "1 muỗng canh"
      },
      {
        "name": "Chanh",
        "amount": "1/2 quả"
      },
      {
        "name": "Mật ong",
        "amount": "1 muỗng canh"
      }
    ],
    "instructions": [
      {
        "step": 1,
        "title": "Sơ chế và ướp ức gà",
        "description": "Ức gà bạn mua về bỏ da, rửa với nước sau đó dùng muối chà xát đều lên miếng ức rồi rửa lại bằng nước sạch để khử mùi tanh, để ráo nước hoặc dùng khăn sạch thấm khô. Ướp gà với 1/3 muỗng cà phê muối, 1/2 muỗng cà phê bột ngọt, 1/4 muỗng cà phê tiêu. Ướp cho gà thấm đều gia vị ở 2 mặt. Vỗ nhẹ miếng thịt cho gia vị thấm. Sau đó ướp gà 20 phút cho gà thấm. Mẹo sơ chế ức gà không còn mùi hôi: Sau khi đã chà xát với muối, bạn có thể dùng hỗn hợp rượu và gừng cắt lát, đập dập vừa chà vừa bóp toàn miếng ức một lần nữa, giúp khử sạch mùi hôi và chất bẩn. Rửa sạch, chờ ráo nước là được. Ngoài ra, bạn cũng có thể cho chanh vào trong nước, cho ức gà vào ngâm trong 15 - 20 phút. Sau đó vớt ra, xả lại nước lạnh và để cho ráo."
      },
      {
        "step": 2,
        "title": "Áp chảo ức gà",
        "description": "Bắc chảo lên bếp, bật bếp lửa vừa và nhỏ, cho vào 1/2 muỗng canh dầu ăn, dầu nóng thì cho gà vào áp chảo. Bạn chờ khoảng Cho vào chảo thêm sả đập dập, 20gr tỏi và 1 củ hành tím đã bóc vỏ. Áp chảo và trở gà thường xuyên cho 2 mặt gà chín vàng như hình thì tắt bếp."
      },
      {
        "step": 3,
        "title": "Sơ chế rau củ",
        "description": "Cà chua, hành tây làm sạch, để ráo, sau đó đem cắt hạt lựu vừa ăn như hình. Gừng, hành tím còn lại cũng lột bỏ vỏ, cắt lát. Ớt bỏ hạt, cắt nhỏ."
      },
      {
        "step": 4,
        "title": "Làm sốt",
        "description": "Bắc chảo lên bếp, cho vào 1/2 muỗng canh dầu ăn, cho cà chua, hành tím, gừng đã chuẩn bị vào chảo và đảo đều tay trên lửa vừa. Cà chua chín sơ rồi thì cho tiếp hành tây vào, đảo đều. Nêm thêm 1 muỗng canh dầu hào, 1/2 muỗng cà phê hạt nêm, 1/2 muỗng cà phê bột ngọt, tiếp tục đảo cho thấm gia vị. Sau đó bạn cho khoảng 100ml nước vào, khuấy đều và nấu sôi, cho thêm vào nước cốt 1/2 quả chanh, 1 muỗng canh mật ong. Khuấy đều."
      },
      {
        "step": 5,
        "title": "Hoàn thành",
        "description": "Nước sốt sánh lại thì bạn cho gà đã áp chảo vào nấu thêm 5 phút cho gà thấm sốt. Sau đó bạn có thể trang trí bằng cách cho thêm 1 vài lát chanh cắt mỏng, một ít ngò rí vào cho món ăn thêm hấp dẫn."
      },
      {
        "step": 6,
        "title": "Thành phẩm",
        "description": "Ức gà áp chảo sốt chanh thơm ngon với thịt gà dai ngon, thơm thơm vị chanh, nước sốt đậm đà chua chua ngọt ngọt thật hấp dẫn đúng không nào? Bạn có thể ăn kèm món ăn này với dưa leo, cơm trắng sẽ rất ngon."
      }
    ]
  },
  {
    "id": "uc-ga-2",
    "title": "Healthy Salad ức gà sốt mè rang",
    "vietnameseTitle": "Salad ức gà sốt mè rang",
    "category": "Gỏi & Khai Vị",
    "prepTime": "15 - 20 phút",
    "cookTime": "20 - 30 phút",
    "servings": "2 người",
    "difficulty": "Dễ",
    "image": "https://images.unsplash.com/photo-1532550907401-a500c9a57435?auto=format&fit=crop&w=1000&q=80",
    "description": "Món Salad ức gà sốt mè rang thơm ngon, giàu dinh dưỡng, rất thích hợp cho thực đơn eat clean và bữa cơm gia đình.",
    "chefNote": "Nên dùng khăn giấy bếp thấm thật khô miếng ức gà trước khi ướp để gia vị ngấm sâu và khi áp chảo/nướng da sẽ vàng thơm.",
    "ingredients": [
      {
        "name": "Thịt ức gà",
        "amount": "300 gr"
      },
      {
        "name": "Rau xà lách",
        "amount": "2 cây"
      },
      {
        "name": "Cà chua",
        "amount": "2 quả"
      },
      {
        "name": "hoặc cà chua bi",
        "amount": "6 - 7 quả"
      },
      {
        "name": "Dưa leo",
        "amount": "1 quả"
      },
      {
        "name": "Trứng cút",
        "amount": "10 quả"
      },
      {
        "name": "Nước sốt mè rang",
        "amount": "4 muỗng canh"
      }
    ],
    "instructions": [
      {
        "step": 1,
        "title": "Sơ chế nguyên liệu",
        "description": "Rau xà lách mua về bạn rửa sạch nhiều lần với nước, sau đó vớt ra để ráo rồi trình bày sẵn ra đĩa. Cà chua rửa sạch, sau đó cắt thành từng miếng vừa ăn, nếu là cà chua bi thì bạn rửa sạch, sau đó bổ đôi. Dưa chuột bạn sơ chế bằng cách bào vỏ, cắt thành từng miếng mỏng. Trứng cút mang luộc với nước, sau đó bóc vỏ, bổ đôi, xếp lên đĩa rau xà lách. Mẹo: Cách lột vỏ trứng cút dễ dàng và nhanh chóng hơn Cách 1: Cho vào nồi nước luộc một ít muối trắng Cách 2: Sau khi luộc, ngâm trứng vào thau nước lạnh hoặc nước đá để giúp trứng mau nguội và dễ lột vỏ hơn."
      },
      {
        "step": 2,
        "title": "Luộc thịt gà",
        "description": "Thịt ức gà bạn sơ chế sạch, sau đó mang luộc rồi vớt ra, để ráo nước. Chờ cho thịt nguội bớt rồi bạn cắt thành từng miếng vừa ăn, sau đó xếp lên đĩa rau xà lách đã bày sẵn. Mẹo: Cách sơ chế thịt gà không hôi Cách 1: Sử dụng hỗn hợp giấm hòa với muối rồi thoa lên mình gà hoặc ngâm gà vào hỗn hợp từ 3 – 5 phút rồi rửa lại với nước sạch. Cách 2: Sử dụng nước cốt chanh pha với muối rồi thoa lên mình gà hoặc ngâm gà từ 3 – 5 phút, sau đó rửa lại với nước sạch"
      },
      {
        "step": 3,
        "title": "Trộn salad",
        "description": "Trước khi thưởng thức, bạn rưới thêm 4 muỗng canh sốt mè rang lên đĩa salad nhé. Mẹo: Để salad ngon hơn, trước khi thưởng thức bạn có thể trộn đều đĩa salad rồi chờ khoảng 5 phút để các nguyên liệu được thấm vị sốt."
      },
      {
        "step": 4,
        "title": "Thành phẩm",
        "description": "Salad ức gà sốt mè rang có vị chua chua ngọt ngọt màu sắc bắt mắt, là sự kết hợp hoàn hảo giữa các loại rau xanh, cà chua, trứng luộc và hương vị sốt mè rang thơm lừng đặc trưng rất dễ ăn. Món ăn tuy đơn giản nhưng chắc chắn sẽ làm thực đơn bữa cơm thêm phần ngon miệng."
      }
    ]
  },
  {
    "id": "uc-ga-3",
    "title": "Healthy Salad gà áp chảo trộn bơ xoài",
    "vietnameseTitle": "Salad gà áp chảo trộn bơ xoài",
    "category": "Gỏi & Khai Vị",
    "prepTime": "15 - 20 phút",
    "cookTime": "20 - 30 phút",
    "servings": "4 người",
    "difficulty": "Dễ",
    "image": "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=1000&q=80",
    "description": "Món Salad gà áp chảo trộn bơ xoài thơm ngon, giàu dinh dưỡng, rất thích hợp cho thực đơn eat clean và bữa cơm gia đình.",
    "chefNote": "Nên dùng khăn giấy bếp thấm thật khô miếng ức gà trước khi ướp để gia vị ngấm sâu và khi áp chảo/nướng da sẽ vàng thơm.",
    "ingredients": [
      {
        "name": "Ức gà",
        "amount": "2 miếng"
      },
      {
        "name": "Rau xà lách",
        "amount": "1 cây"
      },
      {
        "name": "rau diếp",
        "amount": "Vừa đủ"
      },
      {
        "name": "Xoài",
        "amount": "1 quả"
      },
      {
        "name": "Bơ",
        "amount": "1 quả"
      },
      {
        "name": "Dưa leo",
        "amount": "1 quả"
      },
      {
        "name": "Cà chua bi",
        "amount": "10 quả"
      },
      {
        "name": "Hành tím",
        "amount": "1/2 củ"
      },
      {
        "name": "Rau ngò",
        "amount": "20 gr"
      },
      {
        "name": "Tỏi",
        "amount": "3 tép"
      },
      {
        "name": "Dầu ô liu",
        "amount": "8 muỗng canh"
      },
      {
        "name": "Giấm táo",
        "amount": "3 muỗng canh"
      },
      {
        "name": "Mù tạt vàng",
        "amount": "2 muỗng cà phê"
      },
      {
        "name": "Mật ong",
        "amount": "2 muỗng cà phê"
      },
      {
        "name": "Hạnh nhân lát",
        "amount": "5 gr"
      },
      {
        "name": "tùy chọn",
        "amount": "Vừa đủ"
      },
      {
        "name": "Muối/ tiêu",
        "amount": "1 ít"
      }
    ],
    "instructions": [
      {
        "step": 1,
        "title": "Sơ chế và áp chảo ức gà",
        "description": "Ức gà mua về lọc bỏ da (nếu có) rửa sạch với nước muối pha loãng rồi xả lại với nước sạch. Sau đó cắt đôi theo chiều dọc, ướp với 1 muỗng cà phê muối và 1/2 muỗng cà phê tiêu. Bắc chảo lên bếp, cho vào 1 muỗng canh dầu ô liu rồi để lửa vừa rồi cho ức gà vào áp chảo. Mỗi mặt miếng ức gà áp chảo khoảng 3 phút sao cho gà miếng gà hay cháy xém, có màu vàng rượm là được. Tiếp theo, gắp ức ra, đợi nguội rồi cắt thành những miếng vừa ăn."
      },
      {
        "step": 2,
        "title": "Sơ chế các loại rau củ quả",
        "description": "Rau xà lách mua về rửa sạch, cắt bỏ gốc và nhặt bỏ các phần bị héo úa, cắt nhỏ ra sao cho vừa ăn. Bơ, xoài mua về gọt bỏ vỏ chỉ lấy phần thịt, cắt thành những lát motng nhỏ. Dưa leo, cà chua bi rửa sạch. Dưa leo bạn cắt hạt lựu, cà chua bi cắt đôi Hành tím và tỏi thì bạn lột vỏ, rửa sạch, sau đó cắt mỏng phần hành tím và băm nhuyễn phần tỏi. Rau ngò bỏ rễ, rửa sạch rồi cắt nhuyễn."
      },
      {
        "step": 3,
        "title": "Làm sốt trộn salad",
        "description": "Bạn pha sốt trộn salad gồm 7 muỗng canh dầu ô liu, 3 muỗng canh giấm táo, 2 muỗng cà phê mù tạt vàng, 2 muỗng cà phê mật ong, 1 muỗng cà phê muối và 1/4 muỗng cà phê tiêu cùng phần tỏi đã băm nhuyễn. Sau đó bạn khuấy đều để cho hỗn hợp tan đều vào nhau."
      },
      {
        "step": 4,
        "title": "Trộn salad gà",
        "description": "Cho rau xà lách ra tô rồi xếp từng miếng ức gà cùng bơ, xoài, dưa leo, cà chua bi, hành tím, rau mùi lên trên, rắc vào thêm 5gr hạnh nhân lát. Tiếp đến, bạn rưới đều nước sốt lên salad rồi trộn thật đều để các nguyên liệu thấm đều nước sốt là hoàn thành."
      },
      {
        "step": 5,
        "title": "Thành phẩm",
        "description": "Món salad gà áp chảo trộn bơ xoài với đầy đủ màu sắc của bơ, xoài và rau củ trông thật hấp dẫn. Khi thưởng thức bạn vừa cảm nhận được vị ức gà mềm mềm thơm ngon vừa cảm nhận được đa dạng các hương vị của các loại trái cây, rau củ, kết hợp thêm với nước sốt đậm đà hấp dẫn. Đảm bảo đây sẽ là món salad gỏi trộn mà cả nhà bạn sẽ yêu thích đấy!"
      }
    ]
  },
  {
    "id": "uc-ga-4",
    "title": "Healthy Salad ức gà vị Nhật",
    "vietnameseTitle": "Salad ức gà vị Nhật",
    "category": "Gỏi & Khai Vị",
    "prepTime": "15 - 20 phút",
    "cookTime": "20 - 30 phút",
    "servings": "3 người",
    "difficulty": "Dễ",
    "image": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=1000&q=80",
    "description": "Món Salad ức gà vị Nhật thơm ngon, giàu dinh dưỡng, rất thích hợp cho thực đơn eat clean và bữa cơm gia đình.",
    "chefNote": "Nên dùng khăn giấy bếp thấm thật khô miếng ức gà trước khi ướp để gia vị ngấm sâu và khi áp chảo/nướng da sẽ vàng thơm.",
    "ingredients": [
      {
        "name": "Ức gà",
        "amount": "200 gr"
      },
      {
        "name": "Xà lách lolo xanh",
        "amount": "50 gr"
      },
      {
        "name": "Xà lách lolo tím",
        "amount": "50 gr"
      },
      {
        "name": "Xà lách frise",
        "amount": "50 gr"
      },
      {
        "name": "Hành tây tím",
        "amount": "30 gr"
      },
      {
        "name": "Đậu đỏ",
        "amount": "30 gr"
      },
      {
        "name": "Hạt bắp Mỹ",
        "amount": "30 gr"
      },
      {
        "name": "Củ cải đỏ",
        "amount": "30 gr"
      },
      {
        "name": "Mè rang",
        "amount": "5 gr"
      },
      {
        "name": "Dầu ô liu",
        "amount": "1 muỗng canh"
      },
      {
        "name": "Gia vị nướng Nhật Yakiniku Barona",
        "amount": "40 ml"
      },
      {
        "name": "Nước",
        "amount": "15 ml"
      },
      {
        "name": "Nước cốt chanh vàng",
        "amount": "10 ml"
      },
      {
        "name": "Mè rang",
        "amount": "1 muỗng cà phê"
      }
    ],
    "instructions": [
      {
        "step": 1,
        "title": "Sơ chế ức gà",
        "description": "Ức gà mua về bạn nên ngâm với nước muối pha loãng khoảng 7 - 10 phút, dùng tay mát xa nhẹ nhàng để thịt gà sạch chất bẩn. Sau đó đem rửa sạch, cắt khúc nhỏ vừa ăn."
      },
      {
        "step": 2,
        "title": "Chiên ức gà",
        "description": "Ướp 200g ức gà với 40ml gia vị nướng Nhật Yakiniku Barona trong 15 phút. Bắc chảo lên bếp cùng 1 muỗng canh dầu ô liu. Khi dầu nóng, bạn cho ức gà vào chiên đến khi chín vàng. Cuối cùng, rắc thêm khoảng 5g mè rang rồi tắt bếp."
      },
      {
        "step": 3,
        "title": "Sơ chế các nguyên liệu khác",
        "description": "Rửa sạch và cắt khúc ngắn vừa ăn 50g xà lách lô lô xanh, 50g xà lách lô tím, 50g xà lách fries. Hành tây tím lột vỏ, cắt sợi. Mẹo gọt hành tây tím không cay mắt và giảm vị hăng: Ướp lạnh hành tây trong ngăn đá từ 10-15 phút trước khi cắt. Sau khi cắt sợi, bạn cho phần hành vào thau nước đá trong 10 phút để giảm bớt vị hăng của hành. Cà chua bi rửa sạch, cắt đôi. Luộc chín 30g hạt bắp Mỹ. Rửa sạch 30g củ cải đỏ và thái lát. Pha hỗn hợp nước sốt Yakiniku trong chén nhỏ gồm 40ml gia vị nướng Nhật Yakiniku Barona, 15ml nước lọc, 1 muỗng cà phê dầu oliu, 10ml nước cốt chanh vàng, 1 muỗng cà phê mè rang và khuấy đều."
      },
      {
        "step": 4,
        "title": "Trộn salad",
        "description": "Cho vào tô toàn bộ rau xà lách, hành tây tím, cà chua bi, bắp Mỹ, củ cải đỏ, 30g đậu đỏ đóng hộp. Sau đó rưới toàn bộ nước trộn salad vào rồi trộn lên thật đều."
      },
      {
        "step": 5,
        "title": "Thành phẩm",
        "description": "Cho salad ra dĩa, xếp ức gà chiên sốt Nhật lên trên là có thể thưởng thức rồi! Món salad được kết hợp từ nhiều loại rau củ bổ dưỡng, ăn cùng ức gà chiên sốt Nhật mềm đậm vị, không những hỗ trợ giảm cân mà còn giúp đẹp da nữa đấy!"
      }
    ]
  },
  {
    "id": "uc-ga-5",
    "title": "Healthy Ức gà xào nấm hương (nấm đông cô)",
    "vietnameseTitle": "Ức gà xào nấm hương (nấm đông cô)",
    "category": "Gà Chiên & Xào",
    "prepTime": "15 - 20 phút",
    "cookTime": "20 - 30 phút",
    "servings": "4 người",
    "difficulty": "Dễ",
    "image": "https://images.unsplash.com/photo-1562967914-608f82629710?auto=format&fit=crop&w=1000&q=80",
    "description": "Món Ức gà xào nấm hương (nấm đông cô) thơm ngon, giàu dinh dưỡng, rất thích hợp cho thực đơn eat clean và bữa cơm gia đình.",
    "chefNote": "Nên dùng khăn giấy bếp thấm thật khô miếng ức gà trước khi ướp để gia vị ngấm sâu và khi áp chảo/nướng da sẽ vàng thơm.",
    "ingredients": [
      {
        "name": "Ức gà",
        "amount": "500 gr"
      },
      {
        "name": "Nấm hương",
        "amount": "10 cái"
      },
      {
        "name": "nấm đông cô",
        "amount": "Vừa đủ"
      },
      {
        "name": "Gừng",
        "amount": "1/2 củ"
      },
      {
        "name": "nhỏ",
        "amount": "Vừa đủ"
      },
      {
        "name": "Tỏi",
        "amount": "2 tép"
      },
      {
        "name": "Hành tây tím",
        "amount": "1 củ"
      },
      {
        "name": "Hạt nêm",
        "amount": "1 muỗng cà phê"
      },
      {
        "name": "Muối",
        "amount": "1 ít"
      },
      {
        "name": "Bột năng",
        "amount": "1.5 muỗng canh"
      },
      {
        "name": "Dầu hào",
        "amount": "1 muỗng cà phê"
      },
      {
        "name": "Dầu ăn",
        "amount": "1 muỗng canh"
      },
      {
        "name": "Nấm hương tươi",
        "amount": "Vừa đủ"
      },
      {
        "name": "Nấm hương khô",
        "amount": "Vừa đủ"
      }
    ],
    "instructions": [
      {
        "step": 1,
        "title": "Sơ chế nguyên liệu",
        "description": "Nấm hương mua về các bạn xả sạch qua nước lạnh cho nấm sạch bụi bẩn, sau đó mang ngâm nấm với nước khoảng 30 phút - 1 tiếng cho nấm nở mềm. Cắt bỏ chân nấm rồi cắt nấm làm 4 phần. Cách ngâm nấm hương khô đúng cách Nếu sử dụng nấm đông cô khô nấu ăn, bạn ngâm nấm trong 30 phút đến vài tiếng để nấm mềm, không ngâm ít hơn 30 phút để tránh nấm chưa mềm đều, nấu ăn không ngon. Để nấm nhanh mềm, bạn nên ngâm nguyên cây nấm, không thái lát, cắt nhỏ trước khi ngâm. Sau khi ngâm nên để nấm trong rổ để nấm nhanh ráo nước, khi nấu nấm sẽ giữ nguyên được hình dáng, kết cấu, không bị nhão, mềm quá mức. Gừng rửa sạch, cạo bỏ vỏ sau đó thái sợi. Tỏi lột vỏ, băm nhuyễn. Hành tây tím bỏ vỏ, cắt múi cau. Cách cắt hành tây không bị cay mắt Nên cắt hành ra thành các miếng vừa ăn trước rồi mới loại bỏ phần gốc và đầu hành vì các hợp chất lưu huỳnh gây cay tập trung nhiều hơn ở gần gốc. Bạn có thể ngâm nước muối sẽ giúp hành giữ được độ trắng đồng thời các ion trong muối sẽ làm biến tính các enzyme có trong hành, làm giảm mùi hăng cay."
      },
      {
        "step": 2,
        "title": "Sơ chế ức gà",
        "description": "Để khử mùi tanh của ức gà, bạn dùng dao loại bỏ phần da, rửa với nước sau đó dùng muối chà xát đều lên miếng ức rồi rửa lại bằng nước sạch. Sau đó để ráo nước hoặc dùng khăn sạch thấm khô, rồi cắt miếng vừa ăn."
      },
      {
        "step": 3,
        "title": "Ướp ức gà",
        "description": "Ướp thịt gà với 1 muỗng cà phê hạt nêm, 1/2 muỗng cà phê muối sau đó trộn đều và để cho thịt gà thấm gia vị khoảng 30 phút."
      },
      {
        "step": 4,
        "title": "Xào ức gà",
        "description": "Bắc chảo lên bếp, cho 1 muỗng canh dầu ăn vào và đun nóng sau đó cho toàn bộ phần gừng cắt sợi và tỏi băm vào phi thơm. Khi gừng, tỏi đã dậy mùi, cho toàn bộ phần ức gà và nấm hương vào, đảo đều ở lửa lớn cho các nguyên liệu săn lại. Kế đên, thêm 1 muỗng cà phê dầu hào, 1 muỗng cà phê nước lọc vào chảo và đảo đều thêm 3 phút nữa cho các nguyên liệu ngấm gia vị và chín đều. Cho vào chảo phần hành tây cắt múi cau, đảo đều tay ở lửa lớn khoảng 2 phút. Lấy 1.5 muỗng canh bột năng hoà với 3 muỗng canh nước rồi cho vào phần thịt gà xào rồi đảo thật đều và tiếp tục nấu cho đến khi phần nước sánh và sệt lại thì tắt bếp."
      },
      {
        "step": 5,
        "title": "Thành phẩm",
        "description": "Vậy là chúng ta đã hoàn thành món ức gà xào nấm hương thơm ngon, đậm đà lại hấp dẫn, bổ dưỡng rồi. Ức gà mềm, ngọt, đậm đà ăn cùng với nấm hương dai dai thấm vị vô cùng. Món này các bạn có thể dùng nóng với cơm trắng và một ít nước tương tỏi ớt sẽ rất tuyệt vời đó."
      }
    ]
  },
  {
    "id": "uc-ga-6",
    "title": "Healthy Ức gà xào sả ớt",
    "vietnameseTitle": "Ức gà xào sả ớt",
    "category": "Gà Chiên & Xào",
    "prepTime": "15 - 20 phút",
    "cookTime": "20 - 30 phút",
    "servings": "4 người",
    "difficulty": "Dễ",
    "image": "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=1000&q=80",
    "description": "Món Ức gà xào sả ớt thơm ngon, giàu dinh dưỡng, rất thích hợp cho thực đơn eat clean và bữa cơm gia đình.",
    "chefNote": "Nên dùng khăn giấy bếp thấm thật khô miếng ức gà trước khi ướp để gia vị ngấm sâu và khi áp chảo/nướng da sẽ vàng thơm.",
    "ingredients": [
      {
        "name": "Ức gà",
        "amount": "500 gr"
      },
      {
        "name": "Sả",
        "amount": "5 nhánh"
      },
      {
        "name": "Cà rốt",
        "amount": "1/2 củ"
      },
      {
        "name": "Hành tây",
        "amount": "1/2 củ"
      },
      {
        "name": "Ớt",
        "amount": "3 quả"
      },
      {
        "name": "Hành lá",
        "amount": "10 nhánh"
      },
      {
        "name": "Hành tím",
        "amount": "3 củ"
      },
      {
        "name": "Tỏi",
        "amount": "2 tép"
      },
      {
        "name": "Nước mắm",
        "amount": "1 muỗng canh"
      },
      {
        "name": "Dầu màu điều",
        "amount": "1/2 muỗng canh"
      },
      {
        "name": "Dầu hào",
        "amount": "1/2 muỗng canh"
      },
      {
        "name": "Sữa tươi không đường",
        "amount": "2 muỗng canh"
      },
      {
        "name": "Gia vị thông dụng",
        "amount": "1 ít"
      },
      {
        "name": "Đường/muối/hạt nêm/bột ngọt/tiêu",
        "amount": "Vừa đủ"
      },
      {
        "name": "Mè trắng rang",
        "amount": "1 muỗng canh"
      }
    ],
    "instructions": [
      {
        "step": 1,
        "title": "Sơ chế ức gà",
        "description": "Để khử mùi tanh của ức gà, bạn dùng dao loại bỏ phần da, rửa với nước sau đó dùng muối và gừng đập dập chà xát đều lên miếng ức rồi rửa lại bằng nước sạch. Sau đó để ráo nước hoặc dùng khăn sạch thấm khô, rồi cắt lát vừa ăn dày khoảng 1/3 lóng tay. Cách khử mùi hôi ức gà Bạn có thể dùng hỗn hợp rượu và gừng cắt lát, đập dập vừa chà vừa bóp toàn miếng ức một lần nữa, giúp khử sạch mùi hôi và chất bẩn. Rửa sạch, chờ ráo nước là được. Ngoài ra, bạn cũng có thể cho chanh vào trong nước, cho ức gà vào ngâm trong 15 - 20 phút. Sau đó vớt ra, xả lại nước lạnh và để cho ráo."
      },
      {
        "step": 2,
        "title": "Ướp ức gà",
        "description": "Cho phần ức gà đã cắt nhỏ vào tô to, thêm 1 muỗng cà phê hạt nêm, 1 muỗng cà phê hạt đường, 1 muỗng canh nước mắm, 1/2 muỗng canh dầu màu điều, 1 ít tiêu, 1/2 muỗng canh dầu hào, 2 muỗng canh sữa tươi không đường. Bạn trộn đều và để ướp khoảng 30 phút cho ức gà thấm gia vị. Mách nhỏ: Thêm sữa tươi không đường vào ướp giúp ức gà thơm hơn khi xào."
      },
      {
        "step": 3,
        "title": "Sơ chế các nguyên liệu khác",
        "description": "Hành lá rửa sạch, cắt khúc, để riêng đầu hành. Hành tây bỏ vỏ, cắt miếng vừa ăn khoảng 2 lóng tay. Sả rửa sạch, cắt nhỏ. Ớt 1 nửa bạn băm nhỏ, 1 nửa cắt lát. Hành tím, tỏi bóc bỏ vỏ, băm nhỏ. Cà rốt gọt bỏ vỏ, rửa sạch rồi cắt que nhỏ dài khoảng 2 lóng tay."
      },
      {
        "step": 4,
        "title": "Xào ức gà",
        "description": "Bắc chảo lên bếp mở lửa vừa, thêm 1 muỗng canh dầu ăn, dầu nóng bạn phi thơm hành tím, tỏi, sả, ớt băm. Tiếp đó khi các gia vị tỏa mùi thơm thì thêm ức gà vào xào khoảng 1 phút cho thịt gà săn lại thì cho cà rốt vào chung, xào thêm 5 phút. Thêm đầu hành lá, hành tây vào đảo đều và nêm gia vị với 1/2 muỗng canh bột ngọt, 1/2 muỗng canh hạt nêm, nêm nếm gia vị lại cho vừa ăn. Bạn xào thêm 3 phút, thêm hành lá, ớt cắt lát vào và tắt bếp. Múc ra dĩa và thêm 1 ít tiêu, 1 muỗng canh mè trắng rang, thưởng thức thôi. Mách nhỏ: Để tránh cà rốt, hành tây bị nhũn nát bạn không nên mở lửa quá nhỏ và xào quá lâu."
      },
      {
        "step": 5,
        "title": "Thành phẩm",
        "description": "Vậy là chúng ta đã hoàn thành món ức gà xào sả ớt thơm ngon, đậm đà lại hấp dẫn, bổ dưỡng rồi. Ức gà thấm đẫm vị đậm đà, cùng cà rốt, hành tây tươi ngọt, thơm mùi sả và vị cay của ớt. Đây là món ăn đậm đà không những rất đưa cơm và lại còn cực kì tốt cho sức khoẻ, phù hợp với thực đơn bữa cơm gia đình của mọi nhà!"
      }
    ]
  },
  {
    "id": "uc-ga-7",
    "title": "Healthy Ức gà xào chua ngọt",
    "vietnameseTitle": "Ức gà xào chua ngọt",
    "category": "Gà Chiên & Xào",
    "prepTime": "15 - 20 phút",
    "cookTime": "20 - 30 phút",
    "servings": "4 người",
    "difficulty": "Dễ",
    "image": "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?auto=format&fit=crop&w=1000&q=80",
    "description": "Món Ức gà xào chua ngọt thơm ngon, giàu dinh dưỡng, rất thích hợp cho thực đơn eat clean và bữa cơm gia đình.",
    "chefNote": "Nên dùng khăn giấy bếp thấm thật khô miếng ức gà trước khi ướp để gia vị ngấm sâu và khi áp chảo/nướng da sẽ vàng thơm.",
    "ingredients": [
      {
        "name": "Ức gà",
        "amount": "3 miếng"
      },
      {
        "name": "Ớt chuông xanh",
        "amount": "1 trái"
      },
      {
        "name": "Ớt chuông đỏ",
        "amount": "1 trái"
      },
      {
        "name": "Hành tây",
        "amount": "1 củ"
      },
      {
        "name": "Cà chua",
        "amount": "4 trái"
      },
      {
        "name": "Thơm",
        "amount": "1/4 trái"
      },
      {
        "name": "dứa",
        "amount": "Vừa đủ"
      },
      {
        "name": "Trứng gà",
        "amount": "1 quả"
      },
      {
        "name": "Tương cà/ Giấm trắng",
        "amount": "1 muỗng canh"
      },
      {
        "name": "Bột bắp/ bột mì",
        "amount": "1 muỗng canh"
      },
      {
        "name": "Gia vị thông dụng",
        "amount": "1 ít"
      },
      {
        "name": "muối/đường/tiêu",
        "amount": "Vừa đủ"
      },
      {
        "name": "Dầu ăn",
        "amount": "200 ml"
      },
      {
        "name": "Gừng",
        "amount": "1 ít"
      }
    ],
    "instructions": [
      {
        "step": 1,
        "title": "Sơ chế rau củ",
        "description": "Đầu tiên, bạn đem cà chua, ớt chuông rửa sạch với nước muối. Cà chua bỏ cuống, cắt hạt lựu. Ớt chuông cắt bỏ cuống đầu và đuôi, chẻ đôi lóc bỏ toàn bộ phần hạt và lõi bên trong. Hành tây cắt bỏ 2 đầu, bóc vỏ. Thơm gọt vỏ, bỏ mắt. Cắt hành tây, ớt chuông và thơm thành những miếng vuông vừa ăn."
      },
      {
        "step": 2,
        "title": "Sơ chế ức gà",
        "description": "Để khử mùi tanh của ức gà, bạn dùng dao loại bỏ phần da, rửa với nước sau đó dùng muối và gừng đập dập chà xát đều lên miếng ức rồi rửa lại bằng nước sạch. Sau đó để ráo nước hoặc dùng khăn sạch thấm khô, rồi cắt miếng vuông vừa ăn. Cách khử mùi hôi ức gà Bạn có thể dùng hỗn hợp rượu và gừng cắt lát, đập dập vừa chà vừa bóp toàn miếng ức một lần nữa, giúp khử sạch mùi hôi và chất bẩn. Rửa sạch, chờ ráo nước là được. Ngoài ra, bạn cũng có thể cho chanh vào trong nước, cho ức gà vào ngâm trong 15 - 20 phút. Sau đó vớt ra, xả lại nước lạnh và để cho ráo."
      },
      {
        "step": 3,
        "title": "Ướp ức gà",
        "description": "Cho phần ức gà đã cắt nhỏ vào tô to, thêm 1 chút gia vị (muối và tiêu), trộn đều cho gà thấm gia vị. Cho 1 quả trứng gà vào tô, trộn đều để trứng áo đều lên gà. Thêm 1 muỗng canh bột bắp hoặc bột mì vào trộn đều. Mách nhỏ: Để khi chiên ức gà không bị khô, bạn thêm một ít bột bắp/ bột mì vào trộn đều. Trứng và bột tạo một lớp áo thật mỏng bảo vệ gà không bị mất nước bởi nhiệt và tăng độ giòn cho gà."
      },
      {
        "step": 4,
        "title": "Nấu sốt",
        "description": "Cho chảo lên bếp, bật nóng chảo (không dầu). Khi hơ tay trên bề mặt chảo đã nóng, bạn cho cà chua đã cắt hạt lựu vào xào nhanh tay cho chín mềm. Cho cà chua đã nấu chín vào một rây nhỏ nghiền mịn để lấy nước sốt và loại bỏ hạt cà chua. Thêm vào nước sốt một muỗng canh tương cà, nêm nếm thêm một chút nước tương, giấm và gia vị. Thêm một ít nước cho sốt không quá đặc, khuấy đều trên lửa nhỏ cho đến khi nước sốt hoà quyện."
      },
      {
        "step": 5,
        "title": "Chiên ức gà",
        "description": "Bắc xoong/ chảo lên bếp, cho ngập dầu và mở lửa lớn cho dầu sôi. Khi thấy dầu bắt đầu nổi khí lăn tăn thì cho từng viên gà đã ướp vào. Mách nhỏ: Để gà chiên rời thành từng viên và không bị dính vào nhau, bạn nên thả từng viên gà vào chậm, cách nhau vài giây để lớp bột áo của gà kịp khô trước khi cho miếng kế tiếp vào chảo. Khi gà đã vàng giòn đều, vớt gà ra rổ để ráo dầu."
      },
      {
        "step": 6,
        "title": "Xào ức gà",
        "description": "Cho phần nước sốt vào chảo lửa lớn nấu cho sệt lại. Sau đó cho tiếp phần rau củ đã sơ chế vào xảo nhanh tay tầm 1 - 2 phút cho chín tới. Mách nhỏ: Để tránh rau củ bị nhũn nát, không mở lửa quá nhỏ và xào rau củ quá lâu. Cho gà đã chiên giòn để ráo dầu vào xóc nhanh cho phần nước sốt áo đều lên miếng gà. Cuối cùng, tắt bếp và cho thành phẩm ra đĩa thôi nào."
      },
      {
        "step": 7,
        "title": "Thành phẩm",
        "description": "Vậy là chúng ta đã hoàn thành món ức gà xào chua ngọt thơm ngon, đậm đà lại hấp dẫn, bổ dưỡng rồi. Ức gà giòn rụm, thấm đẫm vị sốt chua chua, ngọt ngọt ăn cùng rau củ quả tươi giòn, thơm mùi ớt chuông và vị ngọt nhè nhẹ của hành tây. Đây là món ăn đậm đà không những rất đưa cơm và lại còn cực kì tốt cho sức khoẻ, phù hợp với thực đơn bữa cơm gia đình của mọi nhà!"
      }
    ]
  },
  {
    "id": "uc-ga-8",
    "title": "Healthy Ức gà nướng phô mai sốt cam cay",
    "vietnameseTitle": "Ức gà nướng phô mai sốt cam cay",
    "category": "Gà Nướng",
    "prepTime": "15 - 20 phút",
    "cookTime": "20 - 30 phút",
    "servings": "2 người",
    "difficulty": "Dễ",
    "image": "https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=1000&q=80",
    "description": "Món Ức gà nướng phô mai sốt cam cay thơm ngon, giàu dinh dưỡng, rất thích hợp cho thực đơn eat clean và bữa cơm gia đình.",
    "chefNote": "Nên dùng khăn giấy bếp thấm thật khô miếng ức gà trước khi ướp để gia vị ngấm sâu và khi áp chảo/nướng da sẽ vàng thơm.",
    "ingredients": [
      {
        "name": "Ức gà",
        "amount": "100 gr"
      },
      {
        "name": "Cam",
        "amount": "1/2 quả"
      },
      {
        "name": "Bột ớt paprika",
        "amount": "2 muỗng cà phê"
      },
      {
        "name": "hoặc bột ớt thường",
        "amount": "Vừa đủ"
      },
      {
        "name": "Phô mai mozzarella",
        "amount": "50 gr"
      },
      {
        "name": "Mật ong",
        "amount": "2 muỗng cà phê"
      },
      {
        "name": "Ngò tây",
        "amount": "5 gr"
      },
      {
        "name": "Dầu hào",
        "amount": "2 muỗng cà phê"
      },
      {
        "name": "Dầu oliu",
        "amount": "1 muỗng cà phê"
      },
      {
        "name": "Gia vị",
        "amount": "1 ít"
      },
      {
        "name": "Muối/tiêu",
        "amount": "Vừa đủ"
      },
      {
        "name": "Lò nướng, chổi phết, dao,...",
        "amount": "Vừa đủ"
      }
    ],
    "instructions": [
      {
        "step": 1,
        "title": "Sơ chế ức gà",
        "description": "Ức gà bạn mua về bỏ da, rửa với nước sau đó dùng muối và gừng đập dập chà xát đều lên miếng ức rồi rửa lại bằng nước sạch để khử mùi tanh, để ráo nước hoặc dùng khăn sạch thấm khô. Sau đó, bạn cắt ức gà thành từng miếng lớn có độ dày khoảng 2 cm."
      },
      {
        "step": 2,
        "title": "Ướp gà",
        "description": "Bạn dùng cây dần thịt dần nhẹ lên miếng ức hoặc dùng nĩa hoặc tăm ghim nhẹ lên miếng ức để gà thấm gia vị nhanh và đều. Cho 1 muỗng cà phê muối, 2 muỗng cà phê mật ong, 1 muỗng cà phê tiêu xay và 2 muỗng cà phê bột ớt Paprika vào chung 1 chén rồi trộn đều. Bạn dùng hỗn hợp này phết đều lên các miếng ức gà, ướp trong vòng 15 - 30 phút."
      },
      {
        "step": 3,
        "title": "Làm nước sốt",
        "description": "Cam bạn vắt lấy nước trộn đều với 2 muỗng cà phê dầu hào và 1 muỗng cà phê dầu oliu."
      },
      {
        "step": 4,
        "title": "Nướng gà",
        "description": "Bật lò nướng ở nhiệt độ 260 độ C trước 10 phút cho lò nóng ổn định. Ức gà sau khi ướp xong bạn đặt lên khay, phết sốt cam lên trên rồi cho vào lò nướng ở nhiệt độ 260 độ C trong 10 phút. Bạn lấy ra phết sốt cam thêm một lần nữa và bào nhỏ 50 gr phô mai mozzarella rắc đều lên trên miếng ức rồi nướng thêm 5 phút. Sau khi nướng xong bạn lấy ức gà bày ra đĩa, khi thưởng thức thì rắc lên trên một ít ngò tây băm nhuyễn."
      },
      {
        "step": 5,
        "title": "Thành phẩm",
        "description": "Thịt ức gà khi chế biến thường bị khô, tuy nhiên với cách nướng trên ức gà dai mềm, thấm nước sốt chua chua, cay cay, ngọt ngọt thật hấp dẫn. Bạn có thể thưởng thức món ức gà nướng phô mai sốt cam riêng hoặc dùng cùng bánh mì tùy sở thích nhé! Ức gà nướng phủ phô mai Chuẩn bị 15 phút Chế biến 35 phút Độ khó Trung bình"
      }
    ]
  },
  {
    "id": "uc-ga-9",
    "title": "Healthy Ức gà nướng phủ phô mai",
    "vietnameseTitle": "Ức gà nướng phủ phô mai",
    "category": "Gà Nướng",
    "prepTime": "15 - 20 phút",
    "cookTime": "20 - 30 phút",
    "servings": "4 người",
    "difficulty": "Dễ",
    "image": "https://images.unsplash.com/photo-1598103442097-8b74394b95c6?auto=format&fit=crop&w=1000&q=80",
    "description": "Món Ức gà nướng phủ phô mai thơm ngon, giàu dinh dưỡng, rất thích hợp cho thực đơn eat clean và bữa cơm gia đình.",
    "chefNote": "Nên dùng khăn giấy bếp thấm thật khô miếng ức gà trước khi ướp để gia vị ngấm sâu và khi áp chảo/nướng da sẽ vàng thơm.",
    "ingredients": [
      {
        "name": "Ức gà",
        "amount": "400 gr"
      },
      {
        "name": "4 miếng",
        "amount": "Vừa đủ"
      },
      {
        "name": "Phô mai mozzarella",
        "amount": "100 gr"
      },
      {
        "name": "Bột mì đa dụng",
        "amount": "50 gr"
      },
      {
        "name": "Trứng gà",
        "amount": "3 quả"
      },
      {
        "name": "Bột chiên xù",
        "amount": "100 gr"
      },
      {
        "name": "Thịt hun khói",
        "amount": "100 gr"
      },
      {
        "name": "4 lát",
        "amount": "Vừa đủ"
      },
      {
        "name": "Sốt cà chua",
        "amount": "60 gr"
      },
      {
        "name": "Chanh vàng",
        "amount": "1 quả"
      },
      {
        "name": "Lá Thyme",
        "amount": "5 gr"
      },
      {
        "name": "cỏ xạ hương",
        "amount": "Vừa đủ"
      },
      {
        "name": "Gia vị",
        "amount": "1 ít"
      },
      {
        "name": "Muối/tiêu",
        "amount": "Vừa đủ"
      },
      {
        "name": "Gừng đập dập",
        "amount": "1 ít"
      },
      {
        "name": "Dầu ăn",
        "amount": "200 ml"
      },
      {
        "name": "Hình nguyên liệu",
        "amount": "Vừa đủ"
      },
      {
        "name": "Lò nướng, chày, dao,...",
        "amount": "Vừa đủ"
      }
    ],
    "instructions": [
      {
        "step": 1,
        "title": "Sơ chế ức gà",
        "description": "Ức gà bạn mua về bỏ da, rửa với nước sau đó dùng muối và gừng đập dập chà xát đều lên miếng ức rồi rửa lại bằng nước sạch để khử mùi tanh, để ráo nước hoặc dùng khăn sạch thấm khô. Sau đó, bạn dùng dao khứa đôi (không cắt rời), rồi dùng chày đập dập để miếng ức gà được mềm."
      },
      {
        "step": 2,
        "title": "Nhúng bột và chiên gà",
        "description": "Bạn cho bột mì đa dụng vào tô, thêm 1 muỗng cà phê muối, 1 muỗng cà phê tiêu, dùng đồ bào bào 1 ít vỏ chanh vào tô, và thêm 5 gr lá thyme (nếu thích), trộn đều hỗn hợp bột mì. Bạn đập bỏ vỏ 3 quả trứng gà vào tô và cho bột chiên xù vào 1 tô khác. Tiếp đến áo miếng gà lần lượt qua 1 lớp bột mì, 1 lớp trứng gà, 1 lớp bột chiên xù. Sau đó bắc chảo lên bếp mở lửa vừa, thêm vào 200ml dầu ăn, đợi dầu nóng cho từng miếng ức gà vào chiên vàng đều 2 mặt rồi vớt ra để ráo dầu."
      },
      {
        "step": 3,
        "title": "Phủ nhân",
        "description": "Khi miếng ức gà đã ráo dầu, bạn cho 1 lát thịt hun khói lên trên miếng gà, quết đều 15 gr sốt cà chua và rải phần phô mai mozzarella lên."
      },
      {
        "step": 4,
        "title": "Đút lò ức gà",
        "description": "Bạn làm nóng lò trước ở nhiệt độ 180 độ C trong 20 phút để nhiệt độ trong lò được ổn định. Sau đó bạn cho ức gà vào nướng ở nhiệt độ 180 độ C trong 15 phút."
      },
      {
        "step": 5,
        "title": "Thành phẩm",
        "description": "Ức gà nướng phủ phô mai khi vừa ra lò mang đến hương thơm vô cùng quyến rũ. Phần phô mai bên ngoài tan chảy và hấp dẫn, lớp vỏ bọc chiên xù giòn rụm, bên trong phần thịt gà mềm và ngọt rất ngon miệng, bạn có thể chấm kèm tương ớt, ăn chơi hoặc ăn kèm cơm đều ngon, mời gia đình cùng thưởng thức thôi nào."
      }
    ]
  },
  {
    "id": "uc-ga-10",
    "title": "Healthy Ức gà chiên giòn",
    "vietnameseTitle": "Ức gà chiên giòn",
    "category": "Gà Chiên & Xào",
    "prepTime": "15 - 20 phút",
    "cookTime": "20 - 30 phút",
    "servings": "2 người",
    "difficulty": "Dễ",
    "image": "https://images.unsplash.com/photo-1532550907401-a500c9a57435?auto=format&fit=crop&w=1000&q=80",
    "description": "Món Ức gà chiên giòn thơm ngon, giàu dinh dưỡng, rất thích hợp cho thực đơn eat clean và bữa cơm gia đình.",
    "chefNote": "Nên dùng khăn giấy bếp thấm thật khô miếng ức gà trước khi ướp để gia vị ngấm sâu và khi áp chảo/nướng da sẽ vàng thơm.",
    "ingredients": [
      {
        "name": "Bột chiên xù",
        "amount": "300 gr"
      },
      {
        "name": "Bột sư tử",
        "amount": "20 gr"
      },
      {
        "name": "Ức gà",
        "amount": "500 gr"
      },
      {
        "name": "Bột mì",
        "amount": "120 gr"
      },
      {
        "name": "Tiêu",
        "amount": "1/2 muỗng cà phê"
      },
      {
        "name": "Muối",
        "amount": "1/2 muỗng cà phê"
      },
      {
        "name": "Trứng",
        "amount": "2 quả"
      },
      {
        "name": "Hình nguyên liệu",
        "amount": "Vừa đủ"
      }
    ],
    "instructions": [
      {
        "step": 1,
        "title": "Sơ chế nguyên liệu",
        "description": "Cho 300gr bột chiên xù và 20gr bột sư tử vào cối xay nhuyễn hỗn hợp. Ức gà rửa sạch, cắt quân cờ. Cho vào tô 120gr bột mì, 1/2 muỗng cà phê tiêu, 1/2 muỗng cà phê muối, sau đó dùng phới trộn đều. Tiếp tục cho 2 quả trứng vào một tô khác và dùng phới đảo đều."
      },
      {
        "step": 2,
        "title": "Nhúng gà qua bột",
        "description": "Nhúng lần lượt miếng gà qua bột mì rồi đến trứng và sau cùng là hỗn hợp bột chiên xù, bột sư tử."
      },
      {
        "step": 3,
        "title": "Chiên ức gà",
        "description": "Bắc chảo dầu lên bếp, đợi dầu sôi, cho gà vào chiên ngập dầu với lửa vừa phải. Khi miếng gà đã vàng đều dùng vá vớt gà ra và để ráo dầu."
      },
      {
        "step": 4,
        "title": "Thành phẩm",
        "description": "Miếng ức gà giòn rụm, thơm ngon ăn kèm với tương ớt cay cay khiến cho mùa hè này trở nên thú vị và tuyệt vời vô cùng. Ức gà chiên xù giòn (công thức chia sẻ từ người dùng) Chuẩn bị 15 phút Chế biến 30 phút Độ khó Dễ"
      }
    ]
  },
  {
    "id": "uc-ga-11",
    "title": "Healthy Ức gà chiên xù giòn (công thức chia sẻ từ người dùng)",
    "vietnameseTitle": "Ức gà chiên xù giòn (công thức chia sẻ từ người dùng)",
    "category": "Gà Chiên & Xào",
    "prepTime": "15 - 20 phút",
    "cookTime": "20 - 30 phút",
    "servings": "2 người",
    "difficulty": "Dễ",
    "image": "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=1000&q=80",
    "description": "Món Ức gà chiên xù giòn (công thức chia sẻ từ người dùng) thơm ngon, giàu dinh dưỡng, rất thích hợp cho thực đơn eat clean và bữa cơm gia đình.",
    "chefNote": "Nên dùng khăn giấy bếp thấm thật khô miếng ức gà trước khi ướp để gia vị ngấm sâu và khi áp chảo/nướng da sẽ vàng thơm.",
    "ingredients": [
      {
        "name": "Thịt ức gà",
        "amount": "300 gr"
      },
      {
        "name": "Trứng gà đánh tan",
        "amount": "1 quả"
      },
      {
        "name": "Bột chiên gà giòn",
        "amount": "1/2 gói"
      },
      {
        "name": "Bột chiên xù",
        "amount": "1/2 gói"
      },
      {
        "name": "Dầu ăn",
        "amount": "300 ml"
      },
      {
        "name": "Hạt nêm/ tiêu xay",
        "amount": "1 ít"
      },
      {
        "name": "Hình nguyên liệu",
        "amount": "Vừa đủ"
      }
    ],
    "instructions": [
      {
        "step": 1,
        "title": "Sơ chế gà và ướp gà",
        "description": "Ức gà mua về rửa sạch, để ráo, sau đó thái lát dày khoảng 1/2 lóng tay. Tiếp đến, bạn ướp gà cùng 1 muỗng cà phê hạt nêm và 1/2 muỗng cà phê tiêu xay, để ướp tầm 15 phút cho thịt thấm gia vị. Cho trứng gà đã đánh tan và các loại bột ra các tô lớn để chuẩn bị nhúng thịt gà chiên."
      },
      {
        "step": 2,
        "title": "Nhúng ức gà",
        "description": "Lần lượt nhúng ức gà đã ướp thấm gia vị vào các nguyên liệu khác theo thứ tự: bột chiên gà giòn, trứng, bột chiên xù cho đến khi các nguyên liệu bao phủ đều các mặt miếng gà."
      },
      {
        "step": 3,
        "title": "Chiên xù ức gà",
        "description": "Bắc chảo dầu lên bếp, cho 300ml dầu ăn vào chảo đảm bảo lượng dầu có thể ngập miếng ức gà. Đun đến khi dầu sôi lăn tăn thì cho ức gà đã tẩm bột vào và chiên khoảng 10 - 15 phút. Trở đều 2 mặt và chiên thêm khoảng 15 phút cho đến khi gà vàng đều như ý. Gắp ra cho vào giấy thấm dầu để hút hết lượng dầu dư thừa. Sau đó trình bày ra dĩa và thưởng thức."
      },
      {
        "step": 4,
        "title": "Thành phẩm",
        "description": "Vậy là chỉ sau vài bước đơn giản, bạn đã hoàn thành món ức gà chiên xù giòn ngon hấp dẫn rồi. Miếng gà chiên màu vàng đặt trên vài lá rau xà lách xanh xanh nhìn thích thú biết mấy. Miếng ức gà chiên béo giòn bạn có thể ăn cùng với tương ớt cay cay đánh thức tất cả các giác quan của con người, không tin hãy thử xem nhé!"
      }
    ]
  },
  {
    "id": "uc-ga-12",
    "title": "Healthy Ức gà chiên nước mắm",
    "vietnameseTitle": "Ức gà chiên nước mắm",
    "category": "Gà Chiên & Xào",
    "prepTime": "15 - 20 phút",
    "cookTime": "20 - 30 phút",
    "servings": "2 người",
    "difficulty": "Dễ",
    "image": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=1000&q=80",
    "description": "Món Ức gà chiên nước mắm thơm ngon, giàu dinh dưỡng, rất thích hợp cho thực đơn eat clean và bữa cơm gia đình.",
    "chefNote": "Nên dùng khăn giấy bếp thấm thật khô miếng ức gà trước khi ướp để gia vị ngấm sâu và khi áp chảo/nướng da sẽ vàng thơm.",
    "ingredients": [
      {
        "name": "Ức gà",
        "amount": "300 gr"
      },
      {
        "name": "Bột ngô",
        "amount": "1 muỗng canh"
      },
      {
        "name": "Ớt bột",
        "amount": "2 muỗng cà phê"
      },
      {
        "name": "Gia vị",
        "amount": "10 gr"
      },
      {
        "name": "nước mắm/ đường/ giấm/ muối...",
        "amount": "Vừa đủ"
      }
    ],
    "instructions": [
      {
        "step": 1,
        "title": "Sơ chế ức gà",
        "description": "Ức gà mua về bạn nên ngâm với nước muối pha loãng khoảng 7 - 10 phút, dùng tay mát xa nhẹ nhàng để thịt gà sạch chất bẩn. Sau đó rửa sạch ức gà lại với nước sạch và để ráo. Chờ cho thịt gà ráo nước thì cho thịt gà ra dĩa, ướp vào đó 1 muỗng canh muối và 1 muỗng canh giấm ăn. Dùng tay thoa đều muối và giấm lên khắp mặt thịt, rồi để yên khoảng 10 - 15 phút cho thịt gà thấm vị."
      },
      {
        "step": 2,
        "title": "Chiên ức gà",
        "description": "Bắc chảo lên bếp và cho vào chảo 1 chén dầu ăn, rồi tiến hành đun nóng. Dầu ăn nóng lên thì bạn cho ức gà đã ướp gia vị vào chảo và chiên ở lửa vừa để ức gà chín đều và đẹp mắt nhé. Tiếp tục chiên cho đến khi gà vàng đều 2 mặt là được. Có thể đậy nắp trong khi chiên để không bị bắn dầu."
      },
      {
        "step": 3,
        "title": "Làm nước sốt",
        "description": "Bắc chảo lên bếp, cho vào chảo 1 muỗng cà phê dầu ăn rồi đun nóng. Sau đó cho vào chảo 3 muỗng canh nước mắm, 3 muỗng canh giấm rồi khuấy đều. Cho thêm bột ngô đã pha loãng với 1 muỗng cà phê nước lọc. Tiếp tục đun cho đến khi hỗn hợp sệt lại là được."
      },
      {
        "step": 4,
        "title": "Thành phẩm",
        "description": "Ức gà chiên theo công thức này sẽ vô cùng thơm ngon và hấp dẫn. Ức gà chiên bên ngoài vàng giòn, bên trong thì mềm và giữ được độ ngọt đặc trưng, kết hợp với nước sốt chua chua ngọt ngọt. Bạn có thể ăn kèm với tương ớt và nhâm nhi vào những ngày cuối tuần thì rất tuyệt vời."
      }
    ]
  },
  {
    "id": "uc-ga-13",
    "title": "Healthy Ức gà hấp nước tương",
    "vietnameseTitle": "Ức gà hấp nước tương",
    "category": "Gà Hầm / Nấu Nước",
    "prepTime": "15 - 20 phút",
    "cookTime": "20 - 30 phút",
    "servings": "2 người",
    "difficulty": "Dễ",
    "image": "https://images.unsplash.com/photo-1562967914-608f82629710?auto=format&fit=crop&w=1000&q=80",
    "description": "Món Ức gà hấp nước tương thơm ngon, giàu dinh dưỡng, rất thích hợp cho thực đơn eat clean và bữa cơm gia đình.",
    "chefNote": "Nên dùng khăn giấy bếp thấm thật khô miếng ức gà trước khi ướp để gia vị ngấm sâu và khi áp chảo/nướng da sẽ vàng thơm.",
    "ingredients": [
      {
        "name": "Ức gà",
        "amount": "150 gr"
      },
      {
        "name": "Nước tương",
        "amount": "1 muỗng canh"
      },
      {
        "name": "Dầu hào",
        "amount": "1 muỗng canh"
      },
      {
        "name": "Nấm kim châm",
        "amount": "50 gr"
      },
      {
        "name": "Nấm đùi gà",
        "amount": "50 gr"
      },
      {
        "name": "Nấm linh chi nâu",
        "amount": "50 gr"
      },
      {
        "name": "Hành lá",
        "amount": "3 nhánh"
      },
      {
        "name": "Gừng",
        "amount": "1/2 củ"
      },
      {
        "name": "Tiêu",
        "amount": "1 ít"
      },
      {
        "name": "Muối",
        "amount": "1 ít"
      },
      {
        "name": "Xửng hấp, dao, thớt",
        "amount": "Vừa đủ"
      }
    ],
    "instructions": [
      {
        "step": 1,
        "title": "Sơ chế ức gà",
        "description": "Để khử mùi tanh của ức gà, bạn dùng dao loại bỏ phần da, rửa với nước sau đó dùng muối và gừng đập dập chà xát đều lên miếng ức rồi rửa lại bằng nước sạch. Sau đó để ráo nước hoặc dùng khăn sạch thấm khô. Khi ức gà đã ráo, bạn dùng dao cắt gà thành từng miếng vừa ăn khoảng 1 lóng tay lớn."
      },
      {
        "step": 2,
        "title": "Sơ chế các nguyên liệu khác",
        "description": "Bạn ngâm 3 loại nấm trong muối loãng 15 phút rồi rửa lại qua 2 - 3 lần nước sạch và để ráo. Đối với nấm đùi gà, bạn cắt nấm thành lát mỏng vừa ăn. Hành lá cắt gốc, rửa sạch và cắt thành đoạn dài cỡ 2 lóng tay lớn."
      },
      {
        "step": 3,
        "title": "Pha sốt ướp",
        "description": "Bạn cho 1 muỗng canh dầu hào, 1 muỗng canh nước tương cùng 1 muỗng canh nước lọc vào chén rồi khuấy đều hỗn hợp. Sau đó, bạn cho 1 ít tiêu vào rồi đảo đều lần nữa."
      },
      {
        "step": 4,
        "title": "Hấp ức gà",
        "description": "Trước tiên, bạn làm nóng xửng hấp trên lửa lớn trong 10 phút. Sau đó, bạn cho nấm kim châm vào dĩa trước, tiếp theo là nấm linh chi nâu và nấm đùi gà ở xung quanh rồi đặt ức gà lên trên. Cuối cùng, bạn rưới nước sốt xung quanh các nguyên liệu và cho hành lá, 1 ít tiêu lên trên cùng. Để ức gà chín đều, không bị khô, bạn hấp gà trên lửa lớn trong 15 phút. Khi hấp ức gà xong, bạn lấy ra khỏi xửng và để nguội 2 phút là được."
      },
      {
        "step": 5,
        "title": "Thành phẩm",
        "description": "Tuy đơn giản, sốt nước tương và dầu hào đã giúp cho ức gà được đậm đà, dễ ăn hơn. Ngoài ra, các loại nấm ngọt thanh, dai dai sẽ khiến cho món ăn hấp dẫn hơn nhiều nữa đó! Ức gà hấp lá chanh Chuẩn bị 30 phút Chế biến 30 phút Độ khó Dễ"
      }
    ]
  },
  {
    "id": "uc-ga-14",
    "title": "Healthy Ức gà hấp lá chanh",
    "vietnameseTitle": "Ức gà hấp lá chanh",
    "category": "Gà Hầm / Nấu Nước",
    "prepTime": "15 - 20 phút",
    "cookTime": "20 - 30 phút",
    "servings": "2 người",
    "difficulty": "Dễ",
    "image": "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=1000&q=80",
    "description": "Món Ức gà hấp lá chanh thơm ngon, giàu dinh dưỡng, rất thích hợp cho thực đơn eat clean và bữa cơm gia đình.",
    "chefNote": "Nên dùng khăn giấy bếp thấm thật khô miếng ức gà trước khi ướp để gia vị ngấm sâu và khi áp chảo/nướng da sẽ vàng thơm.",
    "ingredients": [
      {
        "name": "Ức gà",
        "amount": "300 gr"
      },
      {
        "name": "Sả",
        "amount": "2 cây"
      },
      {
        "name": "Gừng",
        "amount": "1 củ"
      },
      {
        "name": "Lá chanh",
        "amount": "5 lá"
      },
      {
        "name": "Ớt",
        "amount": "1 trái"
      },
      {
        "name": "Hành tây",
        "amount": "1 củ"
      },
      {
        "name": "Gia vị thông dụng",
        "amount": "1 ít"
      },
      {
        "name": "bột ngọt/ bột nêm/ muối/ tiêu",
        "amount": "Vừa đủ"
      },
      {
        "name": "Hình nguyên liệu",
        "amount": "Vừa đủ"
      },
      {
        "name": "Xửng hấp, chén, dĩa",
        "amount": "Vừa đủ"
      }
    ],
    "instructions": [
      {
        "step": 1,
        "title": "Sơ chế các nguyên liệu",
        "description": "Bạn rửa sạch sả, đập dập, phần gốc màu trắng bạn băm nhuyễn, phần đầu sả bạn cắt khúc và sử dụng khi hấp nhé! Lá chanh rửa sạch, cắt nhuyễn. Gừng bào vỏ, đập dập, băm nhuyễn. Hành tây bóc vỏ rồi cắt làm hai nửa, một nửa bạn cắt hạt lựu, nửa thứ hai hấp cùng với ức gà. Ớt bỏ cuống, cắt khúc. Xem thêm: Bỏ túi 10 tuyệt chiêu cắt hành tây không cay mắt"
      },
      {
        "step": 2,
        "title": "Sơ chế ức gà",
        "description": "Bạn rửa sơ ức gà, sau đó ngâm với nước muối loãng trong 15 phút rồi rửa lại qua 2 - 3 lần nước sạch và để ráo. Khi gà đã ráo nước, bạn trộn 1/3 muỗng cà phê hạt nêm, 1/3 muỗng cà phê bột ngọt, 1/3 muỗng cà phê tiêu, 1/3 muỗng cà phê muối với nhau rồi cho lên ức gà, xoa bóp đều và ướp trong 15 phút. Ức gà đã thấm gia vị sau khi ướp, bạn khứa chính giữa ức gà rồi cho hỗn hợp hành tây, gừng, lá chanh, sả, ớt lên thịt gà cũng như ở xung quanh."
      },
      {
        "step": 3,
        "title": "Hấp ức gà",
        "description": "Bạn làm nóng xửng trong 5 phút, sau đó, cho ức gà vào và hấp trên lửa lớn từ 30 - 40 phút. Để gà được thơm hơn, bạn cho nửa củ hành tây và cuống sả vào xung quanh xửng và hấp cùng. Cứ mỗi 15 phút, bạn mở nắp nồi và kiểm tra độ chín của ức gà nhé!"
      },
      {
        "step": 4,
        "title": "Thành phẩm",
        "description": "Khói bốc nghi ngút, ức gà nóng hổi thơm lừng đã ra lò, mùi lá chanh, hành tây, gừng, sả thơm nức, ức gà lại mềm, đậm đà, không bị khô. Không chỉ là món ăn thông thường, những bạn đang ăn kiêng hay tập thể hình cũng rất nên thử nhé! Ức gà hấp gừng tỏi Chuẩn bị 30 phút Chế biến 30 phút Độ khó Dễ"
      }
    ]
  },
  {
    "id": "uc-ga-15",
    "title": "Healthy Ức gà hấp gừng tỏi",
    "vietnameseTitle": "Ức gà hấp gừng tỏi",
    "category": "Gà Hầm / Nấu Nước",
    "prepTime": "15 - 20 phút",
    "cookTime": "20 - 30 phút",
    "servings": "2 người",
    "difficulty": "Dễ",
    "image": "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?auto=format&fit=crop&w=1000&q=80",
    "description": "Món Ức gà hấp gừng tỏi thơm ngon, giàu dinh dưỡng, rất thích hợp cho thực đơn eat clean và bữa cơm gia đình.",
    "chefNote": "Nên dùng khăn giấy bếp thấm thật khô miếng ức gà trước khi ướp để gia vị ngấm sâu và khi áp chảo/nướng da sẽ vàng thơm.",
    "ingredients": [
      {
        "name": "Ức gà",
        "amount": "300 gr"
      },
      {
        "name": "Nước cốt chanh",
        "amount": "1 muỗng canh"
      },
      {
        "name": "Dầu oliu",
        "amount": "1 muỗng canh"
      },
      {
        "name": "Nước tương",
        "amount": "1/4 muỗng canh"
      },
      {
        "name": "Hành boaro",
        "amount": "1 cây"
      },
      {
        "name": "Gừng",
        "amount": "1 củ"
      },
      {
        "name": "Tỏi",
        "amount": "2 tép"
      },
      {
        "name": "Muối",
        "amount": "1 ít"
      },
      {
        "name": "Tiêu",
        "amount": "1/2 muỗng cà phê"
      },
      {
        "name": "Hình nguyên liệu",
        "amount": "Vừa đủ"
      },
      {
        "name": "Xửng hấp, giấy nến, giấy bạc,...",
        "amount": "Vừa đủ"
      }
    ],
    "instructions": [
      {
        "step": 1,
        "title": "Sơ chế ức gà",
        "description": "Để ức gà không còn mùi tanh, bạn rửa sơ qua nước rồi ngâm ức gà trong muối loãng khoảng 15 phút. Sau đó, bạn rửa sạch ức qua 2 - 3 lần nước và để ráo. Để ức gà thấm đều và mềm thịt, bạn khứa ức gà thành hình cánh bướm rồi ướp với 1/2 muỗng cà phê muối ở cả hai mặt. Tiếp theo, bạn cho ức gà vào túi zip hoặc hộp kín và ướp trong ngăn mát tủ lạnh 30 phút. Khi ướp xong, bạn dùng khăn sạch thấm khô gà, rắc 1/2 muỗng cà phê tiêu lên đều cả hai mặt."
      },
      {
        "step": 2,
        "title": "Cuộn và hấp ức gà",
        "description": "Bạn cho hành boaro cắt nhuyễn, gừng cắt lát, tỏi cắt lát lên giấy nến và cuối cùng đặt ức gà đã được cuộn chặt lên trên rồi gói giấy nến lại. Tiếp theo, bạn bọc 1 lớp giấy bạc bên ngoài và đem hấp. Để tránh làm hơi nước rơi vào ức gà, bạn lưu ý cuốn phần giấy nến cũng như giấy bạc ở hai bên lại thật chắc chắn. Bạn làm nóng xửng ở lửa lớn, sau đó, cho ức gà vào xửng và hấp ở lửa nhỏ trong 30 phút. Khi ức gà đã chín, bạn để nguội tự nhiên trong nồi 10 phút rồi cho ức gà vào tủ lạnh thêm 30 phút nữa. Sau đó lấy ức gà ra cắt thành từng miếng tròn vừa ăn."
      },
      {
        "step": 3,
        "title": "Pha nước sốt ăn kèm",
        "description": "Bạn cho 1 muỗng canh nước cốt chanh, 1 muỗng canh dầu oliu, 1/4 muỗng canh nước tương, 1/4 muỗng canh muối vào chén rồi trộn đều hỗn hợp."
      },
      {
        "step": 4,
        "title": "Thành phẩm",
        "description": "Bạn cho ức gà ra đĩa, rưới lớp sốt lên và thưởng thức ức gà hấp dẫn, thấm vị, lại thơm nức mùi gừng cùng nước sốt giúp món ăn hài hoà hơn. Ngoài ra, bạn dùng ức gà hấp chung với cơm nóng cũng rất ngon đó!"
      }
    ]
  }
];
