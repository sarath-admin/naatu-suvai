export const siteData = {
  restaurantName: "Naatu Suvai",
  tagline: "Taste of the Native Land",
  description: "Authentic, warm, traditional Tamil/Kerala home-style cooking with a modern premium finish.",
  whatsappNumber: "97469204928",
  address: "123 Heritage Lane, Culinary District, City 45678",
  phone: "+91 97469204928",
  hours: "Mon-Sun: 11:00 AM - 11:00 PM",
  socials: {
    instagram: "https://instagram.com/naatusuvai",
    facebook: "https://facebook.com/naatusuvai",
  },
  
  menuCategories: [
    "Breakfast", "Meals", "Biryani & Rice", "Non-Veg Specials", "Starters", "Snacks", "Beverages", "Desserts"
  ],

  menuItems: [
    {
      id: "1",
      name: "Classic Idli Sambar",
      description: "Soft, fluffy idlis served with our signature homestyle sambar and three chutneys.",
      price: "₹80",
      category: "Breakfast",
      isVeg: true,
      image: "/idli.png"
    },
    {
      id: "2",
      name: "Masala Dosa",
      description: "Crispy crepe made from rice and lentils, filled with spiced potato curry.",
      price: "₹120",
      category: "Breakfast",
      isVeg: true,
      image: "/dosa.png"
    },
    {
      id: "3",
      name: "Kerala Parotta & Kurma",
      description: "Flaky, layered parottas served with rich vegetable kurma.",
      price: "₹150",
      category: "Breakfast",
      isVeg: true,
      image: "/parotta.png"
    },
    {
      id: "4",
      name: "Naatu Suvai Special Thali",
      description: "Traditional banana leaf meal with rice, sambar, rasam, kootu, poriyal, appalam, and payasam.",
      price: "₹250",
      category: "Meals",
      isVeg: true,
      image: "/thali.png"
    },
    {
      id: "5",
      name: "Chettinad Chicken Curry",
      description: "Spicy and aromatic chicken curry made with roasted spices and coconut.",
      price: "₹320",
      category: "Non-Veg Specials",
      isVeg: false,
      image: "/mutton.png"
    },
    {
      id: "6",
      name: "Mutton Sukka",
      description: "Tender chunks of mutton pan-roasted with pepper, fennel, and curry leaves.",
      price: "₹450",
      category: "Non-Veg Specials",
      isVeg: false,
      image: "/mutton.png"
    },
    {
      id: "7",
      name: "Dindigul Thalappakatti Biryani",
      description: "Fragrant seeraga samba rice cooked with tender mutton and traditional spices.",
      price: "₹380",
      category: "Biryani & Rice",
      isVeg: false,
      image: "/biryani.png"
    },
    {
      id: "8",
      name: "Karimeen Pollichathu",
      description: "Pearl spot fish marinated in spices, wrapped in a banana leaf, and grilled.",
      price: "₹480",
      category: "Non-Veg Specials",
      isVeg: false,
      image: "/thali.png"
    },
    {
      id: "9",
      name: "Pazham Pori",
      description: "Crispy fried ripe plantain fritters, a classic Kerala tea-time snack.",
      price: "₹60",
      category: "Snacks",
      isVeg: true,
      image: "/dosa.png"
    },
    {
      id: "10",
      name: "Filter Coffee",
      description: "Authentic South Indian degree coffee brewed to perfection.",
      price: "₹50",
      category: "Beverages",
      isVeg: true,
      image: "/coffee.png"
    },
    {
      id: "11",
      name: "Elaneer Payasam",
      description: "A refreshing dessert made with tender coconut pulp, coconut milk, and jaggery.",
      price: "₹180",
      category: "Desserts",
      isVeg: true,
      image: "/idli.png"
    }
  ],

  specials: [
    {
      name: "Weekend Special: Nalli Nihari",
      description: "Slow-cooked mutton bone marrow curry, meltingly tender and rich.",
      image: "/mutton.png"
    },
    {
      name: "Seasonal: Mango Pachadi",
      description: "Sweet, sour, and spicy dish made with raw mangoes, jaggery, and neem flowers.",
      image: "/hero.png"
    }
  ],

  reviews: [
    {
      id: 1,
      name: "Priya Rajan",
      rating: 5,
      text: "The Chettinad Chicken was incredibly authentic. It felt like eating at my grandmother's house. Highly recommended!"
    },
    {
      id: 2,
      name: "Arjun Krishnan",
      rating: 5,
      text: "Best Karimeen Pollichathu in the city! The ambiance is wonderful, and the service is very warm."
    },
    {
      id: 3,
      name: "Meera Menon",
      rating: 4,
      text: "Loved the Elaneer Payasam. The menu has a great balance of classic and unique dishes."
    }
  ],

  gallery: [
    "/hero.png",
    "/idli.png",
    "/dosa.png",
    "/mutton.png",
    "/parotta.png",
    "/thali.png",
    "/biryani.png",
    "/coffee.png"
  ]
};
