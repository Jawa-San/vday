export const STEPS = [
  "breakfast",
  "morning_activity",
  "lunch",
  "afternoon_activity",
  "snack",
  "dinner",
] as const;

export const OPTIONS = {
  breakfast: [
    {
      id: "pancakes",
      title: "Fluffy Pancakes",
      description: "Enjoy some fluffy, savory pancakes :p",
      image: "https://images.unsplash.com/photo-1581782408905-12a1a453b10f",
    },
    {
      id: "pastries",
      title: "Tous Les Jours",
      description: "Indulge in fresh-baked goods and sweet treats",
      image: "https://images.unsplash.com/photo-1464306208223-e0b4495a5553",
    },
    {
      id: "brunch",
      title: "Briar Patch Brunch",
      description: "Take a stroll down Park Ave and enjoy a nice brunch",
      image: "https://images.unsplash.com/photo-1504708706948-13d6cbba4062",
    },
  ],
  lunch: [
    {
      id: "picnic",
      title: "Ramen Takagi",
      description: "Slurp up some tasty noodles",
      image: "https://images.unsplash.com/photo-1600326145359-3a44909d1a39?q=80&w=928&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: "cafe",
      title: "Sushiyama",
      description: "お寿司を食べましょう",
      image: "https://images.unsplash.com/photo-1615361200141-f45040f367be",
    },
    {
      id: "Cava",
      title: "Cava",
      description: "A mediterranean option if East Asian food isn't the vibe~",
      image: "https://images.unsplash.com/photo-1485963631004-f2f00b1d6606?q=80&w=1075&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }
  ],
  snack: [
    {
      id: "chocolate",
      title: "Snow Bean",
      description: "Enjoy a drink and sweet treat near the water",
      image: "https://images.unsplash.com/photo-1439066615861-d1af74d74000?q=80&w=1973&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: "dessert",
      title: "Sun Pearl Bakery",
      description: "Known for their Red Bean buns :p",
      image: "https://media.istockphoto.com/id/2167890583/photo/hand-holding-green-custard-and-red-bean-bun-green-background.jpg?s=2048x2048&w=is&k=20&c=6FqZfmlxNRM8Dr09fL5AqiylX9cUygqrx3stRta8oJM=",
    },
    {
      id: "candlelight",
      title: "Qi Dragon Bakery",
      description: "A new bakery with delicious items like red bean bun and egg tart",
      image: "https://media-cdn.tripadvisor.com/media/photo-s/0c/b5/c4/92/view-from-side-of-counter.jpg",
    }
  ],
  dinner: [
    {
      id: "candlelight",
      title: "Enzo's on the Lake",
      description: "Romantic dinner by the lake",
      image: "https://images.unsplash.com/photo-1635350644128-c8e41eb8b2a0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: "rooftop",
      title: "The Moderne",
      description: "Romantically feast on Asian and Mediterranean delights",
      image: "https://www.goldenbuzz.social/wp-content/uploads/2023/03/The-Moderne.jpeg",
    },
    {
      id: "homecooked",
      title: "Tori Tori",
      description: "Romantically enjoy Japanese finger foods with cocktails",
      image: "https://images.squarespace-cdn.com/content/v1/5fb01b2399168821c5c2a4dd/d7e643b1-217c-4857-b870-d8628a3af3db/Tori+Tori+Andrew+VT.jpg",
    },
  ],
  morning_activity: [
    {
      id: "walk",
      title: "Chess in the Park",
      description: "Start the day with a friendly chess match",
      image: "https://us.images.westend61.de/0001754585j/cheerful-senior-couple-playing-a-game-of-chess-in-a-park-happy-elderly-couple-spending-quality-time-together-after-retirement-mature-couple-enjoying-themselves-outdoors-JLPSF25071.jpg",
    },
    {
      id: "yoga",
      title: "Couples Yoga",
      description: "Connect as we get our bodies moving",
      image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773",
    },
  ],
  afternoon_activity: [
    {
      id: "art",
      title: "Mirai Arcade",
      description: "Play fun arcade games together and win some fun prizes",
      image: "https://media.istockphoto.com/id/1665243877/photo/claw-machine-game-arcade-entertainment-centre-colourful-background.jpg?s=1024x1024&w=is&k=20&c=BYAgwjGUhWxLIGsAguQ3bTQsmKojOLNUWgFsrgIEG9g=",
    },
    {
      id: "spa",
      title: "Bowling",
      description: "A friendly competition with the varsity team captain",
      image: "https://plus.unsplash.com/premium_photo-1679321795564-f73ec1c21fcd?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: "spa",
      title: "Ice Skating",
      description: "Another lesson for Joshua on how to stay on your feet",
      image: "https://media.istockphoto.com/id/1582530648/photo/couple-ice-skating-on-frozen-lake.jpg?s=2048x2048&w=is&k=20&c=YeG1UlS9N-ONJtQRiUeG5_5TVGwdxioVyw_5e9U9Dtk=",
    }
  ],
};

export const STEP_TITLES = {
  breakfast: "Choose Your Breakfast",
  morning_activity: "Morning Activity",
  lunch: "Plan some Lunch",
  afternoon_activity: "Afternoon Activity",
  snack: "Sweet Treats",
  dinner: "Romantic Dinner",
};
