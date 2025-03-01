export interface Destination {
  id: string;
  city: string;
  country: string;
  clues: string[];
  fun_fact: string[];
  trivia: string[];
}

export const destinations: Destination[] = [
  {
    id: "1",
    city: "Paris",
    country: "France",
    clues: [
      "This city is home to a famous tower that sparkles every night.",
      "Known as the 'City of Love' and a hub for fashion and art."
    ],
    fun_fact: [
      "The Eiffel Tower was supposed to be dismantled after 20 years but was saved because it was useful for radio transmissions!",
      "Paris has only one stop sign in the entire city—most intersections rely on priority-to-the-right rules."
    ],
    trivia: [
      "This city is famous for its croissants and macarons. Bon appétit!",
      "Paris was originally a Roman city called Lutetia."
    ]
  },
  {
    id: "2",
    city: "Tokyo",
    country: "Japan",
    clues: [
      "This city has the busiest pedestrian crossing in the world.",
      "You can visit an entire district dedicated to anime, manga, and gaming."
    ],
    fun_fact: [
      "Tokyo was originally a small fishing village called Edo before becoming the bustling capital it is today!",
      "More than 14 million people live in Tokyo, making it one of the most populous cities in the world."
    ],
    trivia: [
      "The city has over 160,000 restaurants, more than any other city in the world.",
      "Tokyo’s subway system is so efficient that train delays of just a few minutes come with formal apologies."
    ]
  },
  {
    id: "3",
    city: "New York",
    country: "USA",
    clues: [
      "Home to a green statue gifted by France in the 1800s.",
      "Nicknamed 'The Big Apple' and known for its Broadway theaters."
    ],
    fun_fact: [
      "The Statue of Liberty was originally a copper color before oxidizing to its iconic green patina.",
      "Times Square was once called Longacre Square before being renamed in 1904."
    ],
    trivia: [
      "New York City has 468 subway stations, making it one of the most complex transit systems in the world.",
      "The Empire State Building has its own zip code: 10118."
    ]
  },
  {
    id: "4",
    city: "London",
    country: "United Kingdom",
    clues: [
      "This city features a famous clock tower known worldwide.",
      "It is home to many royal landmarks and historic museums."
    ],
    fun_fact: [
      "The London Underground is the world's oldest metro system.",
      "Red double-decker buses are an iconic sight throughout the city."
    ],
    trivia: [
      "London boasts over 170 museums, including the British Museum.",
      "It was originally established by the Romans as Londinium."
    ]
  },
  {
    id: "5",
    city: "Rome",
    country: "Italy",
    clues: [
      "Known as the Eternal City with ancient ruins at every turn.",
      "Home to the Vatican, the Colosseum, and countless historical sites."
    ],
    fun_fact: [
      "Rome's historic center is a UNESCO World Heritage site.",
      "The city is famous for its gelato and pasta culture."
    ],
    trivia: [
      "Ancient Roman roads still influence modern infrastructure.",
      "The city has hidden underground catacombs and ancient tombs."
    ]
  },
  {
    id: "6",
    city: "Barcelona",
    country: "Spain",
    clues: [
      "Famous for its unique architecture and vibrant street life.",
      "Home to the iconic Sagrada Família basilica."
    ],
    fun_fact: [
      "Barcelona was a key center of the modernist movement led by Antoni Gaudí.",
      "The city has beautiful beaches right next to its bustling urban center."
    ],
    trivia: [
      "Barcelona hosted the 1992 Summer Olympics.",
      "The city's streets are alive with art, music, and festivals year-round."
    ]
  },
  {
    id: "7",
    city: "Berlin",
    country: "Germany",
    clues: [
      "This city is known for its modern history and cultural diversity.",
      "It features remnants of a divided past, including the Berlin Wall."
    ],
    fun_fact: [
      "Berlin has a vibrant street art scene and numerous creative spaces.",
      "The city has over 170 museums, making it a cultural hub."
    ],
    trivia: [
      "Berlin is home to the world’s longest open-air gallery, the East Side Gallery.",
      "It was once divided into East and West during the Cold War."
    ]
  },
  {
    id: "8",
    city: "Sydney",
    country: "Australia",
    clues: [
      "Famous for its stunning harbor and iconic opera house.",
      "Known for its beautiful beaches and outdoor lifestyle."
    ],
    fun_fact: [
      "Sydney hosted the 2000 Summer Olympics.",
      "The Sydney Opera House is one of the most photographed buildings in the world."
    ],
    trivia: [
      "The city is built around one of the world's largest natural harbors.",
      "It is a major global hub for arts, culture, and entertainment."
    ]
  },
  {
    id: "9",
    city: "Los Angeles",
    country: "USA",
    clues: [
      "The heart of the American film and entertainment industry.",
      "Home to famous Hollywood landmarks and studios."
    ],
    fun_fact: [
      "Los Angeles is known for its sprawling cityscape and diverse neighborhoods.",
      "The city is often featured in movies and TV shows worldwide."
    ],
    trivia: [
      "LA has one of the most extensive freeway systems in the world.",
      "It is renowned for its sunny weather and beach culture."
    ]
  },
  {
    id: "10",
    city: "Mumbai",
    country: "India",
    clues: [
      "A bustling metropolis on India's west coast.",
      "Famous for its film industry, Bollywood."
    ],
    fun_fact: [
      "Mumbai is the financial capital of India.",
      "The city is known for its vibrant street food and markets."
    ],
    trivia: [
      "It is home to the famous Gateway of India monument.",
      "Mumbai has a rich colonial history mixed with modern energy."
    ]
  },
  {
    id: "11",
    city: "Beijing",
    country: "China",
    clues: [
      "A city steeped in history and imperial architecture.",
      "Home to the Forbidden City and vast historical sites."
    ],
    fun_fact: [
      "Beijing hosted the 2008 Summer Olympics.",
      "It is known for its traditional cuisine and Peking duck."
    ],
    trivia: [
      "The Great Wall of China is accessible from Beijing.",
      "The city blends ancient heritage with rapid modern development."
    ]
  },
  {
    id: "12",
    city: "Cairo",
    country: "Egypt",
    clues: [
      "A city famous for its ancient pyramids and rich history.",
      "The Nile River flows through this bustling metropolis."
    ],
    fun_fact: [
      "Cairo is often referred to as 'The City of a Thousand Minarets.'",
      "The Egyptian Museum houses an extensive collection of ancient artifacts."
    ],
    trivia: [
      "The Great Pyramid of Giza is one of the Seven Wonders of the Ancient World.",
      "Cairo is a melting pot of cultures and traditions."
    ]
  },
  {
    id: "13",
    city: "Istanbul",
    country: "Turkey",
    clues: [
      "A city that straddles two continents, Europe and Asia.",
      "Known for its historic mosques and bustling bazaars."
    ],
    fun_fact: [
      "Istanbul was formerly known as Byzantium and Constantinople.",
      "The city's Grand Bazaar is one of the largest and oldest covered markets."
    ],
    trivia: [
      "Istanbul has over 3,000 years of history.",
      "It is home to architectural wonders like the Hagia Sophia."
    ]
  },
  {
    id: "14",
    city: "Dubai",
    country: "UAE",
    clues: [
      "A modern city known for its futuristic architecture.",
      "Famous for luxurious shopping and vibrant nightlife."
    ],
    fun_fact: [
      "Dubai is home to the world's tallest building, the Burj Khalifa.",
      "It hosts extravagant events and festivals throughout the year."
    ],
    trivia: [
      "Dubai's rapid development has transformed it in just a few decades.",
      "The city offers man-made islands and innovative urban designs."
    ]
  },
  {
    id: "15",
    city: "Singapore",
    country: "Singapore",
    clues: [
      "A small city-state known for its cleanliness and efficiency.",
      "Renowned for its impressive skyline and lush gardens."
    ],
    fun_fact: [
      "Singapore is one of the world's greenest cities with iconic garden attractions.",
      "The city-state is a major financial hub in Asia."
    ],
    trivia: [
      "Singapore’s Changi Airport is consistently ranked among the best in the world.",
      "It is a melting pot of cultures with diverse culinary delights."
    ]
  },
  {
    id: "16",
    city: "Hong Kong",
    country: "China",
    clues: [
      "A vibrant city known for its soaring skyscrapers and bustling harbor.",
      "Famous for its blend of Eastern traditions and Western influences."
    ],
    fun_fact: [
      "Hong Kong is one of the world's most important financial centers.",
      "The city hosts a famous light show every night over its skyline."
    ],
    trivia: [
      "It has a rich history as a British colony until 1997.",
      "Hong Kong's street markets are a major attraction for visitors."
    ]
  },
  {
    id: "17",
    city: "Amsterdam",
    country: "Netherlands",
    clues: [
      "A city renowned for its charming canals and bike-friendly streets.",
      "Famous for its vibrant arts and museum scene."
    ],
    fun_fact: [
      "Amsterdam has more than 1,200 bridges connecting its waterways.",
      "It is one of the most bicycle-friendly cities in the world."
    ],
    trivia: [
      "The city is home to the Van Gogh Museum and Anne Frank House.",
      "Amsterdam was a major trading hub during the Dutch Golden Age."
    ]
  },
  {
    id: "18",
    city: "Madrid",
    country: "Spain",
    clues: [
      "A lively city known for its art, culture, and nightlife.",
      "Home to world-class museums and historic plazas."
    ],
    fun_fact: [
      "Madrid is the third-largest city in the European Union.",
      "It has a famous tradition of late-night dining and socializing."
    ],
    trivia: [
      "The Prado Museum houses one of the finest art collections in the world.",
      "Madrid's historic center is a blend of old and new architecture."
    ]
  },
  {
    id: "19",
    city: "Chicago",
    country: "USA",
    clues: [
      "Known for its impressive skyline and groundbreaking architecture.",
      "Famous for its deep-dish pizza and vibrant arts scene."
    ],
    fun_fact: [
      "Chicago is known as the 'Windy City' due to its breezy conditions.",
      "It has been a hub for jazz and blues music for decades."
    ],
    trivia: [
      "The city is home to one of the largest free-admission museums, The Art Institute of Chicago.",
      "Chicago hosted the World's Fair in 1893, leaving a lasting cultural impact."
    ]
  },
  {
    id: "20",
    city: "San Francisco",
    country: "USA",
    clues: [
      "Famous for its iconic Golden Gate Bridge and hilly streets.",
      "Known for its eclectic neighborhoods and tech-savvy culture."
    ],
    fun_fact: [
      "San Francisco was the birthplace of the counterculture movement in the 1960s.",
      "The city is renowned for its historic cable cars."
    ],
    trivia: [
      "It is one of the most photographed cities in the world.",
      "San Francisco has a rich history in the tech industry and startups."
    ]
  },
  {
    id: "21",
    city: "Lisbon",
    country: "Portugal",
    clues: [
      "A coastal city known for its charming trams and historic quarters.",
      "Famous for its steep hills and panoramic views over the Atlantic."
    ],
    fun_fact: [
      "Lisbon is one of the oldest cities in Europe, predating even Rome.",
      "The city is known for its soulful Fado music."
    ],
    trivia: [
      "Lisbon's architecture blends Gothic, Baroque, and modern influences.",
      "It has a strong maritime history with explorers setting sail from its docks."
    ]
  },
  {
    id: "22",
    city: "Rio de Janeiro",
    country: "Brazil",
    clues: [
      "Famous for its stunning beaches and vibrant Carnival celebrations.",
      "Home to the iconic Christ the Redeemer statue."
    ],
    fun_fact: [
      "Rio de Janeiro's Carnival is one of the largest and most colorful in the world.",
      "The city is known for its lively samba music and dance culture."
    ],
    trivia: [
      "Rio is set between lush mountains and a sparkling ocean.",
      "It hosted the 2016 Summer Olympics, showcasing its vibrant culture."
    ]
  },
  {
    id: "23",
    city: "Mexico City",
    country: "Mexico",
    clues: [
      "A sprawling metropolis rich in history and modern culture.",
      "Home to ancient Aztec ruins alongside towering skyscrapers."
    ],
    fun_fact: [
      "Mexico City was built on the site of a former lake.",
      "It is one of the largest cities in the world by population."
    ],
    trivia: [
      "The city has a vibrant street food scene, including tacos and tamales.",
      "Mexico City is known for its colorful festivals and cultural heritage."
    ]
  },
  {
    id: "24",
    city: "Toronto",
    country: "Canada",
    clues: [
      "A diverse city known for its multicultural neighborhoods.",
      "Home to the iconic CN Tower and vibrant waterfront."
    ],
    fun_fact: [
      "Toronto is one of the most multicultural cities in the world.",
      "It hosts numerous international film and arts festivals."
    ],
    trivia: [
      "The city is a major hub for business and finance in Canada.",
      "Toronto's vibrant theater district is renowned for its performances."
    ]
  },
  {
    id: "25",
    city: "Vancouver",
    country: "Canada",
    clues: [
      "Nestled between mountains and the Pacific Ocean.",
      "Famous for its outdoor lifestyle and stunning natural scenery."
    ],
    fun_fact: [
      "Vancouver consistently ranks as one of the most livable cities in the world.",
      "The city is a gateway to numerous outdoor adventures like skiing and hiking."
    ],
    trivia: [
      "Vancouver was a major filming location for many blockbuster movies.",
      "It has a thriving arts and cultural scene all year long."
    ]
  },
  {
    id: "26",
    city: "Seoul",
    country: "South Korea",
    clues: [
      "A city where futuristic skyscrapers meet ancient palaces.",
      "Home to cutting-edge technology and dynamic street markets."
    ],
    fun_fact: [
      "Seoul is known for its high-speed internet and digital innovations.",
      "It beautifully blends traditional Korean culture with modern trends."
    ],
    trivia: [
      "The city is famous for its diverse street food offerings.",
      "Seoul is a major center for K-pop and entertainment."
    ]
  },
  {
    id: "27",
    city: "Kuala Lumpur",
    country: "Malaysia",
    clues: [
      "A city known for its iconic twin towers and modern skyline.",
      "A melting pot of cultures with bustling street markets."
    ],
    fun_fact: [
      "The Petronas Twin Towers were once the tallest buildings in the world.",
      "Kuala Lumpur showcases a rich mix of Malay, Chinese, and Indian influences."
    ],
    trivia: [
      "The city features a vibrant food scene with diverse culinary traditions.",
      "Modern architecture coexists with colonial heritage in Kuala Lumpur."
    ]
  },
  {
    id: "28",
    city: "Bangkok",
    country: "Thailand",
    clues: [
      "Famous for its ornate temples and lively street markets.",
      "Known for its vibrant nightlife and bustling urban life."
    ],
    fun_fact: [
      "Bangkok is often called the 'City of Angels.'",
      "The city is a major hub for traditional Thai cuisine."
    ],
    trivia: [
      "Bangkok has a rich cultural heritage with grand palaces and shrines.",
      "It is one of the world's most visited cities by tourists."
    ]
  },
  {
    id: "29",
    city: "Jakarta",
    country: "Indonesia",
    clues: [
      "A sprawling megacity on the island of Java.",
      "Known for its blend of modern high-rises and colonial architecture."
    ],
    fun_fact: [
      "Jakarta is the largest city in Southeast Asia by population.",
      "The city’s street food reflects its diverse cultural heritage."
    ],
    trivia: [
      "Jakarta is a melting pot of Indonesian traditions.",
      "Its rapid urbanization has given it a unique skyline."
    ]
  },
  {
    id: "30",
    city: "Melbourne",
    country: "Australia",
    clues: [
      "Renowned for its arts, culture, and legendary coffee scene.",
      "Home to numerous galleries, theaters, and cultural festivals."
    ],
    fun_fact: [
      "Melbourne is often dubbed the cultural capital of Australia.",
      "The city is famous for its vibrant laneways and street art."
    ],
    trivia: [
      "It has a thriving sports culture, hosting events like the Australian Open.",
      "Melbourne is celebrated for its diverse culinary scene."
    ]
  },
  {
    id: "31",
    city: "Vienna",
    country: "Austria",
    clues: [
      "A city celebrated for its classical music and imperial heritage.",
      "Home to grand palaces and world-famous concert halls."
    ],
    fun_fact: [
      "Vienna was once the center of the Habsburg Empire.",
      "The city is famous for its traditional coffee house culture."
    ],
    trivia: [
      "Vienna has produced many renowned classical composers.",
      "Its architecture combines imperial grandeur with modern innovation."
    ]
  },
  {
    id: "32",
    city: "Prague",
    country: "Czech Republic",
    clues: [
      "A fairy-tale city with stunning medieval architecture.",
      "Known for its charming bridges and winding cobblestone streets."
    ],
    fun_fact: [
      "Prague is often called 'The City of a Hundred Spires.'",
      "It has a history dating back to the Middle Ages."
    ],
    trivia: [
      "The city has a thriving cultural scene with theaters and galleries.",
      "Prague's old town is a UNESCO World Heritage site."
    ]
  },
  {
    id: "33",
    city: "Athens",
    country: "Greece",
    clues: [
      "The cradle of Western civilization and democracy.",
      "Home to ancient ruins like the Acropolis and Parthenon."
    ],
    fun_fact: [
      "Athens has been continuously inhabited for over 3,000 years.",
      "It is considered the birthplace of democracy and philosophy."
    ],
    trivia: [
      "The city is dotted with ancient temples and monuments.",
      "Athens hosted the first modern Olympic Games in 1896."
    ]
  },
  {
    id: "34",
    city: "Budapest",
    country: "Hungary",
    clues: [
      "A city divided by the Danube River with breathtaking architecture.",
      "Known for its relaxing thermal baths and historic bridges."
    ],
    fun_fact: [
      "Budapest was formed by the unification of Buda and Pest in 1873.",
      "The city is famous for its rejuvenating thermal baths."
    ],
    trivia: [
      "Budapest has a vibrant nightlife and cultural scene.",
      "It is often referred to as the 'Paris of the East.'"
    ]
  },
  {
    id: "35",
    city: "Stockholm",
    country: "Sweden",
    clues: [
      "A city built on 14 islands with a unique maritime charm.",
      "Known for its clean design and rich historical legacy."
    ],
    fun_fact: [
      "Stockholm is one of the greenest capitals in Europe.",
      "The city is renowned for its innovative technology and design."
    ],
    trivia: [
      "Stockholm boasts a vibrant arts and music scene.",
      "Its old town, Gamla Stan, is a well-preserved medieval district."
    ]
  },
  {
    id: "36",
    city: "Zurich",
    country: "Switzerland",
    clues: [
      "A global financial hub set against a scenic lake and mountains.",
      "Famous for its high quality of life and efficient public transport."
    ],
    fun_fact: [
      "Zurich is often ranked as one of the world's best cities for living.",
      "The city is a center for banking and finance."
    ],
    trivia: [
      "Zurich has a well-preserved historic center.",
      "It is known for its vibrant cultural festivals and events."
    ]
  },
  {
    id: "37",
    city: "Oslo",
    country: "Norway",
    clues: [
      "A city known for its modern architecture and stunning natural beauty.",
      "Situated by the Oslofjord with scenic waterfront views."
    ],
    fun_fact: [
      "Oslo is one of the most environmentally conscious capitals in the world.",
      "The city is a leader in electric vehicle adoption."
    ],
    trivia: [
      "Oslo hosts the Nobel Peace Prize ceremonies.",
      "It offers a blend of urban living and outdoor adventures."
    ]
  },
  {
    id: "38",
    city: "Brussels",
    country: "Belgium",
    clues: [
      "A city famous for its chocolate, beer, and European institutions.",
      "Home to the headquarters of the European Union."
    ],
    fun_fact: [
      "Brussels boasts over 800 different types of beer.",
      "The city is known for its quirky comic strip murals."
    ],
    trivia: [
      "It is famous for its delicious waffles and chocolates.",
      "Brussels' Grand Place is a UNESCO World Heritage site."
    ]
  },
  {
    id: "39",
    city: "Dublin",
    country: "Ireland",
    clues: [
      "A city known for its literary history and lively pub culture.",
      "Home to famous landmarks like Trinity College."
    ],
    fun_fact: [
      "Dublin is the birthplace of many renowned writers.",
      "The city hosts vibrant cultural festivals throughout the year."
    ],
    trivia: [
      "Dublin's Temple Bar area is famous for its nightlife and music.",
      "It has a rich history dating back to Viking times."
    ]
  },
  {
    id: "40",
    city: "Edinburgh",
    country: "United Kingdom",
    clues: [
      "Famed for its historic castle and world-renowned festivals.",
      "Known for its literary and cultural heritage."
    ],
    fun_fact: [
      "Edinburgh hosts the world-famous Fringe Festival every August.",
      "The city features both a medieval Old Town and a Georgian New Town."
    ],
    trivia: [
      "Edinburgh Castle sits atop an extinct volcano.",
      "It has been a major cultural center since the Enlightenment."
    ]
  },
  {
    id: "41",
    city: "Cape Town",
    country: "South Africa",
    clues: [
      "A city set against the dramatic backdrop of Table Mountain.",
      "Known for its stunning coastal views and cultural diversity."
    ],
    fun_fact: [
      "Cape Town is home to one of the New7Wonders of Nature, Table Mountain.",
      "The city boasts a rich blend of cultural influences."
    ],
    trivia: [
      "Cape Town is famous for its beautiful beaches and outdoor adventures.",
      "It was a major port in the historic spice trade."
    ]
  },
  {
    id: "42",
    city: "Marrakech",
    country: "Morocco",
    clues: [
      "A vibrant city known for its colorful souks and historic medina.",
      "Famous for its intricate architecture and lively markets."
    ],
    fun_fact: [
      "Marrakech has a history spanning over a thousand years.",
      "The city is celebrated for its traditional Moroccan cuisine."
    ],
    trivia: [
      "It was once the capital of an ancient empire.",
      "Marrakech’s Jemaa el-Fnaa square buzzes with activity day and night."
    ]
  },
  {
    id: "43",
    city: "Buenos Aires",
    country: "Argentina",
    clues: [
      "A city known for its passionate tango and vibrant street life.",
      "Home to historic neighborhoods and wide boulevards."
    ],
    fun_fact: [
      "Buenos Aires is often called the 'Paris of South America.'",
      "The city has a strong European architectural influence."
    ],
    trivia: [
      "It hosts one of the largest tango festivals in the world.",
      "Buenos Aires is famous for its steak and wine culture."
    ]
  },
  {
    id: "44",
    city: "Lima",
    country: "Peru",
    clues: [
      "A coastal city celebrated for its culinary delights and history.",
      "Famous for its fusion of indigenous and colonial cultures."
    ],
    fun_fact: [
      "Lima is considered the gastronomic capital of South America.",
      "The city has a rich pre-Columbian heritage."
    ],
    trivia: [
      "It is home to vibrant markets and ancient ruins.",
      "Lima’s historic center is a UNESCO World Heritage site."
    ]
  },
  {
    id: "45",
    city: "Bogota",
    country: "Colombia",
    clues: [
      "A high-altitude city known for its vibrant street art and culture.",
      "Home to numerous museums and a lively urban scene."
    ],
    fun_fact: [
      "Bogota is famous for its bustling art and music festivals.",
      "The city’s culinary scene reflects its diverse culture."
    ],
    trivia: [
      "Bogota is situated on a high plateau in the Andes.",
      "It is a hub for Colombia’s emerging creative industries."
    ]
  },
  {
    id: "46",
    city: "Santiago",
    country: "Chile",
    clues: [
      "A city set against the majestic backdrop of the Andes Mountains.",
      "Known for its modern architecture and thriving arts scene."
    ],
    fun_fact: [
      "Santiago is Chile's political, cultural, and financial center.",
      "The city has a history that stretches back to colonial times."
    ],
    trivia: [
      "Santiago boasts numerous museums and art galleries.",
      "It hosted several events during the 1962 FIFA World Cup."
    ]
  },
  {
    id: "47",
    city: "Montevideo",
    country: "Uruguay",
    clues: [
      "A coastal city known for its relaxed vibe and historic barrios.",
      "Famous for its scenic seaside promenade and festivals."
    ],
    fun_fact: [
      "Montevideo blends modernity with colonial charm.",
      "The city is celebrated for its strong literary and artistic traditions."
    ],
    trivia: [
      "It is the southernmost capital city in the Americas.",
      "Montevideo has a thriving music scene, especially in tango and candombe."
    ]
  },
  {
    id: "48",
    city: "Quito",
    country: "Ecuador",
    clues: [
      "A city nestled high in the Andes with a well-preserved historic center.",
      "Famous for its colonial architecture and panoramic mountain views."
    ],
    fun_fact: [
      "Quito is one of the highest official capital cities in the world.",
      "Its old town is recognized as a UNESCO World Heritage site."
    ],
    trivia: [
      "Quito is known for its colorful festivals and cultural events.",
      "The city is surrounded by active volcanoes and breathtaking scenery."
    ]
  },
  {
    id: "49",
    city: "Casablanca",
    country: "Morocco",
    clues: [
      "A modern city with deep historical roots on the Atlantic coast.",
      "Famous for its art deco architecture and bustling markets."
    ],
    fun_fact: [
      "Casablanca was the setting for the classic film of the same name.",
      "It is Morocco's largest city and a key economic hub."
    ],
    trivia: [
      "The city features a blend of modern design and traditional style.",
      "Casablanca's Hassan II Mosque is one of the largest in the world."
    ]
  },
  {
    id: "50",
    city: "Accra",
    country: "Ghana",
    clues: [
      "A coastal city known for its vibrant arts and cultural scene.",
      "Home to historic forts and lively local markets."
    ],
    fun_fact: [
      "Accra is one of West Africa's most dynamic cities.",
      "The city boasts a rich blend of tradition and modernity."
    ],
    trivia: [
      "It is known for its colorful festivals and art galleries.",
      "Accra serves as a gateway to exploring Ghana's rich heritage."
    ]
  },
  {
    id: "51",
    city: "Lagos",
    country: "Nigeria",
    clues: [
      "A bustling megacity known for its energetic vibe and music scene.",
      "Famous for its lively markets and thriving creative arts."
    ],
    fun_fact: [
      "Lagos is one of the fastest-growing cities in Africa.",
      "The city is a major hub for Nollywood, Nigeria's film industry."
    ],
    trivia: [
      "Lagos is home to numerous beaches and cultural festivals.",
      "It has a rich blend of traditional and modern lifestyles."
    ]
  },
  {
    id: "52",
    city: "Nairobi",
    country: "Kenya",
    clues: [
      "A city that uniquely blends urban life with wildlife.",
      "Home to a national park just minutes from the city center."
    ],
    fun_fact: [
      "Nairobi is the only capital city with a national park within its boundaries.",
      "The city serves as a gateway to safari adventures in Kenya."
    ],
    trivia: [
      "Nairobi hosts a vibrant arts and music scene.",
      "It is known for its diverse culinary offerings and cultural mix."
    ]
  },
  {
    id: "53",
    city: "New Delhi",
    country: "India",
    clues: [
      "The capital city known for its rich history and modern developments.",
      "Famous for its bustling markets and iconic monuments."
    ],
    fun_fact: [
      "New Delhi was designed by renowned architects in the 20th century.",
      "The city is home to grand government buildings and cultural landmarks."
    ],
    trivia: [
      "It features a blend of ancient and contemporary architecture.",
      "New Delhi hosts numerous cultural festivals throughout the year."
    ]
  },
  {
    id: "54",
    city: "Abu Dhabi",
    country: "UAE",
    clues: [
      "A modern city known for its impressive skyscrapers and cultural sites.",
      "Famous for luxurious shopping and futuristic urban design."
    ],
    fun_fact: [
      "Abu Dhabi is the capital of the UAE and a major oil producer.",
      "The city is investing heavily in sustainable energy and cultural projects."
    ],
    trivia: [
      "Abu Dhabi hosts international film and art festivals.",
      "It is renowned for its striking blend of modern and traditional architecture."
    ]
  },
  {
    id: "55",
    city: "Doha",
    country: "Qatar",
    clues: [
      "A rapidly developing city that marries modernity with tradition.",
      "Famous for its futuristic skyline and cultural museums."
    ],
    fun_fact: [
      "Doha is preparing to host major international sports events.",
      "The city has experienced rapid growth in recent decades."
    ],
    trivia: [
      "Doha is known for its luxury shopping and gourmet dining.",
      "It features a blend of traditional souks and modern malls."
    ]
  },
  {
    id: "56",
    city: "Tel Aviv",
    country: "Israel",
    clues: [
      "A vibrant coastal city known for its sunny beaches and bustling nightlife.",
      "Famous for its thriving tech scene and historic port area."
    ],
    fun_fact: [
      "Tel Aviv is often called 'The City that Never Sleeps.'",
      "The city is a major center for innovation and startups."
    ],
    trivia: [
      "It has a rich history dating back to ancient times.",
      "Tel Aviv's vibrant arts scene attracts creative minds from around the world."
    ]
  },
  {
    id: "57",
    city: "Helsinki",
    country: "Finland",
    clues: [
      "A city known for its modern design and maritime heritage.",
      "Famous for its traditional saunas and innovative architecture."
    ],
    fun_fact: [
      "Helsinki is one of the northernmost capitals in the world.",
      "The city is renowned for its high quality of life and design innovation."
    ],
    trivia: [
      "It has a vibrant arts scene with numerous cultural festivals.",
      "Helsinki is surrounded by beautiful archipelagos and nature reserves."
    ]
  },
  {
    id: "58",
    city: "Bern",
    country: "Switzerland",
    clues: [
      "A city with a well-preserved medieval old town.",
      "Famous for its historic clock tower and local legends."
    ],
    fun_fact: [
      "Bern's old town is a UNESCO World Heritage site.",
      "The city is known for its bear pit, symbolizing local folklore."
    ],
    trivia: [
      "Bern is the de facto capital of Switzerland.",
      "It has a rich tradition of precision watchmaking."
    ]
  },
  {
    id: "59",
    city: "Reykjavik",
    country: "Iceland",
    clues: [
      "A city known for its unique landscapes and geothermal wonders.",
      "Famous for its modern design and vibrant arts scene."
    ],
    fun_fact: [
      "Reykjavik is the northernmost capital of a sovereign state.",
      "The city is a hub for Iceland's music and cultural festivals."
    ],
    trivia: [
      "It serves as the gateway to Iceland's natural wonders.",
      "Reykjavik's nightlife is as dynamic as its daytime attractions."
    ]
  },
  {
    id: "60",
    city: "Wellington",
    country: "New Zealand",
    clues: [
      "A compact city known for its creative arts and vibrant culture.",
      "Famous for its picturesque harbor and hilly landscapes."
    ],
    fun_fact: [
      "Wellington is considered the cultural capital of New Zealand.",
      "The city is home to a thriving film industry."
    ],
    trivia: [
      "It is known for its coffee culture and craft breweries.",
      "Wellington boasts stunning views of the surrounding hills and coast."
    ]
  },
  {
    id: "61",
    city: "Auckland",
    country: "New Zealand",
    clues: [
      "A sprawling city famous for its waterfront and volcanic landscapes.",
      "Known for its multicultural vibe and outdoor adventures."
    ],
    fun_fact: [
      "Auckland is the largest city in New Zealand.",
      "The city is built on a landscape dotted with dormant volcanoes."
    ],
    trivia: [
      "Auckland's harbor is one of the largest natural harbors in the world.",
      "It offers a mix of urban attractions and natural escapes."
    ]
  },
  {
    id: "62",
    city: "Glasgow",
    country: "United Kingdom",
    clues: [
      "A city known for its rich industrial heritage and vibrant arts scene.",
      "Famous for its striking architecture and lively music festivals."
    ],
    fun_fact: [
      "Glasgow was named the 2008 European Capital of Culture.",
      "The city has a strong tradition in shipbuilding and design."
    ],
    trivia: [
      "Glasgow boasts a diverse culinary scene with traditional Scottish dishes.",
      "It is home to one of the largest collections of modern art in Europe."
    ]
  },
  {
    id: "63",
    city: "Manchester",
    country: "United Kingdom",
    clues: [
      "A city with a rich industrial past and a vibrant music culture.",
      "Famous for its football clubs and innovative spirit."
    ],
    fun_fact: [
      "Manchester played a key role in the Industrial Revolution.",
      "The city is known for its influential music scene, including bands like Oasis."
    ],
    trivia: [
      "Manchester has been a center for innovation and creativity.",
      "It hosts numerous annual cultural festivals and sports events."
    ]
  },
  {
    id: "64",
    city: "Birmingham",
    country: "United Kingdom",
    clues: [
      "A city known for its industrial heritage and modern regeneration.",
      "Famous for its cultural diversity and lively arts scene."
    ],
    fun_fact: [
      "Birmingham is the second-largest city in the UK by population.",
      "The city has a rich history in manufacturing and innovation."
    ],
    trivia: [
      "It is known for its extensive canal network, which is longer than that of Venice.",
      "Birmingham hosted the 2022 Commonwealth Games."
    ]
  },
  {
    id: "65",
    city: "Philadelphia",
    country: "USA",
    clues: [
      "A city steeped in American history and revolutionary heritage.",
      "Famous for its historic sites and delicious cheesesteaks."
    ],
    fun_fact: [
      "Philadelphia is known as the 'City of Brotherly Love.'",
      "It was the site where the Declaration of Independence was signed."
    ],
    trivia: [
      "The city has over 200 years of rich American history.",
      "Philadelphia is home to the Liberty Bell and Independence Hall."
    ]
  },
  {
    id: "66",
    city: "Boston",
    country: "USA",
    clues: [
      "A historic city known for its colonial architecture and universities.",
      "Famous for its pivotal role in the American Revolution."
    ],
    fun_fact: [
      "Boston is renowned for its prestigious educational institutions.",
      "The city played a pivotal role in shaping American history."
    ],
    trivia: [
      "It is home to the famous Boston Marathon.",
      "Boston's Freedom Trail guides visitors through its historic landmarks."
    ]
  },
  {
    id: "67",
    city: "Washington D.C.",
    country: "USA",
    clues: [
      "The capital city known for its iconic monuments and museums.",
      "Home to the U.S. government and numerous historic sites."
    ],
    fun_fact: [
      "Washington D.C. was planned by French engineers in the 18th century.",
      "The city is a hub for political events and international diplomacy."
    ],
    trivia: [
      "It hosts the Smithsonian museums, many of which offer free admission.",
      "The city is filled with monuments commemorating historical figures."
    ]
  },
  {
    id: "68",
    city: "Seattle",
    country: "USA",
    clues: [
      "A city known for its tech industry and vibrant coffee culture.",
      "Famous for its iconic Space Needle and waterfront views."
    ],
    fun_fact: [
      "Seattle is the birthplace of tech giants like Microsoft and Amazon.",
      "The city is celebrated for its innovative coffee culture."
    ],
    trivia: [
      "Seattle has a rich musical heritage, especially in grunge rock.",
      "It hosts numerous festivals that celebrate arts and technology."
    ]
  },
  {
    id: "69",
    city: "San Diego",
    country: "USA",
    clues: [
      "A coastal city known for its pleasant weather and beautiful beaches.",
      "Famous for its world-class zoo and maritime attractions."
    ],
    fun_fact: [
      "San Diego is nicknamed 'America's Finest City' for its quality of life.",
      "The city has a rich naval history and active maritime industry."
    ],
    trivia: [
      "San Diego's zoo is one of the most renowned in the world.",
      "The city offers a diverse cultural scene and outdoor lifestyle."
    ]
  },
  {
    id: "70",
    city: "Las Vegas",
    country: "USA",
    clues: [
      "A city famous for its dazzling nightlife and entertainment shows.",
      "Known for its glittering casinos and themed resorts."
    ],
    fun_fact: [
      "Las Vegas is often called the 'Entertainment Capital of the World.'",
      "The city is known for its over-the-top spectacles and performances."
    ],
    trivia: [
      "It hosts some of the world’s most renowned residencies and shows.",
      "Las Vegas is a major hub for conventions and trade shows."
    ]
  },
  {
    id: "71",
    city: "Orlando",
    country: "USA",
    clues: [
      "A city famous for its world-class theme parks and family attractions.",
      "Known for its magical experiences and entertainment complexes."
    ],
    fun_fact: [
      "Orlando is home to Walt Disney World Resort.",
      "The city attracts millions of tourists each year."
    ],
    trivia: [
      "It also features Universal Studios and other major attractions.",
      "Tourism and hospitality form the backbone of Orlando’s economy."
    ]
  },
  {
    id: "72",
    city: "Atlanta",
    country: "USA",
    clues: [
      "A city known for its pivotal role in the civil rights movement.",
      "Home to numerous cultural and historical landmarks."
    ],
    fun_fact: [
      "Atlanta hosted the 1996 Summer Olympics.",
      "The city is a major hub for transportation and media."
    ],
    trivia: [
      "It is home to one of the busiest airports in the world, Hartsfield-Jackson.",
      "Atlanta has a rich musical heritage, especially in hip hop and R&B."
    ]
  },
  {
    id: "73",
    city: "Detroit",
    country: "USA",
    clues: [
      "A city known for its automotive industry and musical legacy.",
      "Famous for its impact on Motown and soul music."
    ],
    fun_fact: [
      "Detroit was once dubbed the 'Motor City' for its auto industry.",
      "The city has experienced a cultural and artistic revival in recent years."
    ],
    trivia: [
      "It is home to the Motown Museum, celebrating its musical heritage.",
      "Detroit’s resurgence is often highlighted as a model of urban revitalization."
    ]
  },
  {
    id: "74",
    city: "Denver",
    country: "USA",
    clues: [
      "A city known for its proximity to the Rocky Mountains.",
      "Famous for its outdoor recreation and craft brewery scene."
    ],
    fun_fact: [
      "Denver is nicknamed the 'Mile-High City' because of its elevation.",
      "The city is a gateway to numerous ski resorts and mountain adventures."
    ],
    trivia: [
      "Denver has a thriving arts scene and hosts many music festivals.",
      "It is renowned for its craft beer culture and local breweries."
    ]
  },
  {
    id: "75",
    city: "Dallas",
    country: "USA",
    clues: [
      "A city known for its modern skyline and rich cultural heritage.",
      "Famous for its vibrant arts scene and business districts."
    ],
    fun_fact: [
      "Dallas is a major center for commerce and technology.",
      "The city boasts a strong sports culture with several professional teams."
    ],
    trivia: [
      "It is historically noted for the assassination of President John F. Kennedy.",
      "Dallas is celebrated for its diverse culinary scene, including Tex-Mex cuisine."
    ]
  },
  {
    id: "76",
    city: "Houston",
    country: "USA",
    clues: [
      "A city known for its energy industry and space exploration heritage.",
      "Famous for its NASA connections and space center."
    ],
    fun_fact: [
      "Houston is home to NASA's Johnson Space Center.",
      "The city plays a significant role in the oil and gas industry."
    ],
    trivia: [
      "Houston is one of the most diverse cities in the USA.",
      "It has a thriving culinary scene influenced by its multicultural population."
    ]
  },
  {
    id: "77",
    city: "Phoenix",
    country: "USA",
    clues: [
      "A city known for its expansive desert landscapes and warm climate.",
      "Famous for its vibrant Southwestern culture."
    ],
    fun_fact: [
      "Phoenix is one of the fastest-growing cities in the United States.",
      "The city is renowned for its stunning desert sunsets."
    ],
    trivia: [
      "It is surrounded by striking natural rock formations.",
      "Phoenix hosts numerous cultural festivals and outdoor events throughout the year."
    ]
  },
  {
    id: "78",
    city: "Montreal",
    country: "Canada",
    clues: [
      "A city celebrated for its bilingual culture and vibrant arts scene.",
      "Famous for its lively festivals and historic architecture."
    ],
    fun_fact: [
      "Montreal is one of the largest French-speaking cities in the world.",
      "The city has a robust music and arts culture."
    ],
    trivia: [
      "It is renowned for its annual jazz festival.",
      "Montreal's historic district blends old-world charm with modernity."
    ]
  },
  {
    id: "79",
    city: "Ottawa",
    country: "Canada",
    clues: [
      "The capital city of Canada known for its grand government buildings.",
      "Famous for its scenic waterways and cultural institutions."
    ],
    fun_fact: [
      "Ottawa is home to the iconic Parliament Hill.",
      "The city hosts a variety of festivals throughout the year."
    ],
    trivia: [
      "Ottawa is known for its winter carnival and ice sculpture displays.",
      "It features a mix of historic and contemporary architecture."
    ]
  },
  {
    id: "80",
    city: "Calgary",
    country: "Canada",
    clues: [
      "A city known for its proximity to the Rocky Mountains and western culture.",
      "Famous for its annual rodeo and vibrant arts scene."
    ],
    fun_fact: [
      "Calgary hosts the famous Calgary Stampede every year.",
      "The city is a gateway to some of Canada’s best outdoor adventures."
    ],
    trivia: [
      "It has a thriving oil and gas industry.",
      "Calgary beautifully blends modern urban life with a western charm."
    ]
  },
  {
    id: "81",
    city: "Edmonton",
    country: "Canada",
    clues: [
      "A city celebrated for its cultural diversity and numerous festivals.",
      "Famous for its expansive shopping centers and outdoor activities."
    ],
    fun_fact: [
      "Edmonton is home to one of the largest indoor shopping centers in North America.",
      "The city hosts an array of festivals year-round."
    ],
    trivia: [
      "It has a rich arts and theater scene.",
      "Edmonton is known for its lively community events and cultural celebrations."
    ]
  },
  {
    id: "82",
    city: "Winnipeg",
    country: "Canada",
    clues: [
      "A city known for its cold winters and vibrant arts scene.",
      "Famous for its historic architecture and annual festivals."
    ],
    fun_fact: [
      "Winnipeg is the capital of the province of Manitoba.",
      "The city has deep roots in the fur trade and exploration era."
    ],
    trivia: [
      "It is known for hosting the annual Festival du Voyageur.",
      "Winnipeg has a thriving local music and art culture."
    ]
  },
  {
    id: "83",
    city: "Quebec City",
    country: "Canada",
    clues: [
      "A city famed for its European charm and fortified old town.",
      "Famous for its winter carnival and historic narrow streets."
    ],
    fun_fact: [
      "Quebec City is one of the oldest cities in North America.",
      "Its old town is a UNESCO World Heritage site."
    ],
    trivia: [
      "It is celebrated for its winter festivities and cultural events.",
      "Quebec City seamlessly blends French heritage with North American influences."
    ]
  },
  {
    id: "84",
    city: "Bordeaux",
    country: "France",
    clues: [
      "A city famous for its wine and historic, elegant architecture.",
      "Known for its scenic riverfront and charming streets."
    ],
    fun_fact: [
      "Bordeaux is regarded as the wine capital of France.",
      "The city has a rich history in viticulture and trade."
    ],
    trivia: [
      "It is home to many renowned vineyards and wineries.",
      "Bordeaux has hosted several international wine exhibitions."
    ]
  },
  {
    id: "85",
    city: "Lyon",
    country: "France",
    clues: [
      "A city celebrated for its culinary excellence and historic sites.",
      "Famous for its vibrant silk industry and Renaissance architecture."
    ],
    fun_fact: [
      "Lyon is often considered the gastronomic capital of France.",
      "The city’s history dates back to Roman times."
    ],
    trivia: [
      "Lyon's old town is a UNESCO World Heritage site.",
      "It is well known for its traditional bouchon restaurants."
    ]
  },
  {
    id: "86",
    city: "Marseille",
    country: "France",
    clues: [
      "A coastal city known for its bustling port and diverse culture.",
      "Famous for its Mediterranean cuisine and dynamic neighborhoods."
    ],
    fun_fact: [
      "Marseille is one of the oldest cities in France.",
      "The city has been a melting pot of cultures for centuries."
    ],
    trivia: [
      "It is home to the historic Old Port.",
      "Marseille is known for its vibrant arts and music scene."
    ]
  },
  {
    id: "87",
    city: "Nice",
    country: "France",
    clues: [
      "A city on the French Riviera known for its stunning coastline.",
      "Famous for its sunny weather and thriving art scene."
    ],
    fun_fact: [
      "Nice has been a popular resort destination since the 19th century.",
      "The city is famous for its beautiful promenades along the Mediterranean."
    ],
    trivia: [
      "Nice hosts numerous international film and art festivals.",
      "It is a major center for luxury tourism and events."
    ]
  },
  {
    id: "88",
    city: "Nantes",
    country: "France",
    clues: [
      "A city known for its innovative arts scene and historical heritage.",
      "Famous for its unique mechanical attractions and scenic riverfront."
    ],
    fun_fact: [
      "Nantes is recognized for its creative urban art installations.",
      "The city has a deep maritime history."
    ],
    trivia: [
      "It is home to the whimsical 'Les Machines de l'île' exhibit.",
      "Nantes has a vibrant cultural calendar year-round."
    ]
  },
  {
    id: "89",
    city: "Toulouse",
    country: "France",
    clues: [
      "A city known for its aerospace industry and distinctive pink brick architecture.",
      "Famous for its dynamic student life and historical landmarks."
    ],
    fun_fact: [
      "Toulouse is often called 'La Ville Rose' because of its unique brick buildings.",
      "It is a major hub for European space and aviation industries."
    ],
    trivia: [
      "The city hosts numerous aerospace museums and exhibits.",
      "Toulouse has a thriving culinary scene with regional specialties."
    ]
  },
  {
    id: "90",
    city: "Strasbourg",
    country: "France",
    clues: [
      "A city known for its picturesque canals and blend of French-German influences.",
      "Famous for its charming half-timbered houses and historic center."
    ],
    fun_fact: [
      "Strasbourg is home to the European Parliament.",
      "Its historic center is recognized as a UNESCO World Heritage site."
    ],
    trivia: [
      "Strasbourg has a rich cultural heritage and culinary tradition.",
      "It is known for its vibrant Christmas markets."
    ]
  },
  {
    id: "91",
    city: "Bucharest",
    country: "Romania",
    clues: [
      "A city known for its eclectic architecture and lively nightlife.",
      "Famous for its mix of historical and communist-era buildings."
    ],
    fun_fact: [
      "Bucharest is often called 'Little Paris' due to its elegant architecture.",
      "The city has a layered history spanning several eras."
    ],
    trivia: [
      "Bucharest is home to one of the largest administrative buildings in the world.",
      "It hosts a vibrant arts and music scene."
    ]
  },
  {
    id: "92",
    city: "Kiev",
    country: "Ukraine",
    clues: [
      "A city with a deep history and stunning Orthodox churches.",
      "Famous for its expansive parks and vibrant cultural life."
    ],
    fun_fact: [
      "Kiev is one of the oldest cities in Eastern Europe.",
      "The city is known for its rich folklore and traditions."
    ],
    trivia: [
      "It has been a center of Slavic culture for centuries.",
      "Kiev features a blend of modern and historic architecture."
    ]
  },
  {
    id: "93",
    city: "Moscow",
    country: "Russia",
    clues: [
      "A sprawling metropolis known for its grandeur and historic sites.",
      "Famous for its Red Square and iconic Kremlin."
    ],
    fun_fact: [
      "Moscow is one of the largest cities in Europe by population.",
      "The city has a rich history intertwined with literature and art."
    ],
    trivia: [
      "It hosted the 1980 Summer Olympics.",
      "Moscow's metro stations are renowned for their ornate designs."
    ]
  },
  {
    id: "94",
    city: "Saint Petersburg",
    country: "Russia",
    clues: [
      "A city celebrated for its imperial palaces and cultural heritage.",
      "Famous for its elegant bridges and picturesque canals."
    ],
    fun_fact: [
      "Saint Petersburg was founded by Peter the Great.",
      "The city has a long-standing tradition in ballet and classical music."
    ],
    trivia: [
      "It is home to the Hermitage Museum, one of the largest in the world.",
      "Saint Petersburg hosts numerous international cultural festivals."
    ]
  },
  {
    id: "95",
    city: "Ankara",
    country: "Turkey",
    clues: [
      "The capital city known for its modern government buildings and ancient ruins.",
      "Famous for its blend of modernity with traditional Turkish culture."
    ],
    fun_fact: [
      "Ankara is the political center of Turkey.",
      "The city is known for the historic Atatürk Mausoleum."
    ],
    trivia: [
      "Ankara has grown from a small town to a bustling metropolis.",
      "It hosts numerous cultural and historical landmarks."
    ]
  },
  {
    id: "96",
    city: "Belgrade",
    country: "Serbia",
    clues: [
      "A city known for its energetic nightlife and historic fortresses.",
      "Famous for its riverside cafes and vibrant cultural scene."
    ],
    fun_fact: [
      "Belgrade is one of the oldest cities in Europe, with a history spanning millennia.",
      "The city blends Ottoman, Austro-Hungarian, and modern influences."
    ],
    trivia: [
      "It was once known as the 'White City' due to its historic buildings.",
      "Belgrade's bohemian quarter is a hub for artists and musicians."
    ]
  },
  {
    id: "97",
    city: "Sofia",
    country: "Bulgaria",
    clues: [
      "A city with a rich blend of ancient history and modern culture.",
      "Famous for its Eastern Orthodox churches and lively street scenes."
    ],
    fun_fact: [
      "Sofia is one of the oldest capital cities in Europe.",
      "The city is known for its mineral springs and expansive parks."
    ],
    trivia: [
      "It has been continuously inhabited for over 2,000 years.",
      "Sofia is home to numerous museums and cultural festivals."
    ]
  },
  {
    id: "98",
    city: "Zagreb",
    country: "Croatia",
    clues: [
      "A city known for its charming old town and lively street markets.",
      "Famous for its blend of Central European and Mediterranean influences."
    ],
    fun_fact: [
      "Zagreb is the cultural and economic heart of Croatia.",
      "The city hosts various annual music and film festivals."
    ],
    trivia: [
      "It features a mix of historic architecture and modern design.",
      "Zagreb's vibrant cafe culture is a draw for locals and visitors alike."
    ]
  },
  {
    id: "99",
    city: "Dubrovnik",
    country: "Croatia",
    clues: [
      "A fortified city known for its well-preserved medieval walls.",
      "Famous for its stunning Adriatic coastline and historic charm."
    ],
    fun_fact: [
      "Dubrovnik is often called the 'Pearl of the Adriatic.'",
      "The city has been featured in popular TV series and films."
    ],
    trivia: [
      "It is a UNESCO World Heritage site.",
      "Dubrovnik's historic center attracts millions of visitors each year."
    ]
  },
  {
    id: "100",
    city: "Porto",
    country: "Portugal",
    clues: [
      "A coastal city famous for its port wine and historic architecture.",
      "Known for its picturesque riverfront and colorful buildings."
    ],
    fun_fact: [
      "Porto is one of the oldest European centers for wine production.",
      "The city has a rich maritime history."
    ],
    trivia: [
      "It is home to the famous Dom Luís I Bridge.",
      "Porto's wine cellars are a major tourist attraction."
    ]
  },
  {
    id: "101",
    city: "Granada",
    country: "Spain",
    clues: [
      "A city celebrated for its stunning Moorish architecture and hilltop fortress.",
      "Home to the world-renowned Alhambra palace."
    ],
    fun_fact: [
      "Granada was the last Muslim stronghold in Spain.",
      "The city is famed for its vibrant flamenco culture."
    ],
    trivia: [
      "It blends Islamic art with Spanish Renaissance influences.",
      "Granada's narrow, winding streets are steeped in history and charm."
    ]
  },
  {
    id: "102",
    city: "Split",
    country: "Croatia",
    clues: [
      "A coastal city known for its Roman ruins and lively waterfront.",
      "Famous for the ancient Diocletian's Palace at its heart."
    ],
    fun_fact: [
      "Split is one of Croatia's oldest cities, with a history dating back to the Roman Empire.",
      "The city is a popular gateway to the Dalmatian islands."
    ],
    trivia: [
      "It features a unique blend of ancient history and modern Mediterranean life.",
      "Split is known for its vibrant local markets and cultural festivals."
    ]
  }
];
