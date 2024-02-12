const appleProducts = [
  {
    name: "iPhone 13 Pro Max",
    type: "Smartphone",
    price: 1099,
    formerPrice: 1299,
    image:
      "https://www.apple.com/newsroom/images/product/iphone/standard/Apple_iPhone-13-Pro_iPhone-13-Pro-Max_09142021_inline.jpg.large.jpg",
  },
  {
    name: "MacBook Pro 16-inch",
    type: "Laptop",
    price: 2399,
    formerPrice: 2599,
    image:
      "data:image/jpeg;base64,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lWkoAUGocwVCUGocwQFCrCryrCgLSrSrirSgJdsVfKTfIzepdrXFNir5Sb5Gb1LtahkhERQAiIgCIiAIiIDk+yM74efJRetRkOUj2TmltuqRg6GMg8NC4H8lFQ5WRB6LyXlhvJeQGa8rJHYHmKsvKx5wPMgLi5Wlyxl3P0FULufoKAvJVhKtLufoKpe5+goCpKtJVCefoKoTz9BQFSVaSqE8/QVQnn6CgKko04DmCtr+6KoQFSVaUVCUBQq0qpKogJdsVfKTfIzepdrXFtieMnKNQMGQykngqWgekrtKhkhERQAiIgCIiAIiIDw5SyVBaWhs8bXgaqjFvMdYWifmFYicGkfaPapWiAifvBsfFPWKe8Gx8U9YqWIgIn7wbHxT1iqe8Cx8U9YqWogIl7wbHxT1invAsfFPWKlqICJdz+xcU9Yqnc/sXFPSVLkQER7n1i4vpKHY+sXF9JUuRARHue2LinrFU7nti4p6xUvRARDue2LinrFO55YeKese1S9EBEO55YeIese1U7ndh4h6x7VMEQEP7ndh4n4j2qrNjywA4sr9o9ql6IDX5KyPZ7K0sgiawGl66KFxGq8dZWwREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAf//Z",
  },
  {
    name: "iPad Air",
    type: "Tablet",
    price: 599,
    formerPrice: 799,
    image:
      "https://beyondthebox.ph/cdn/shop/products/iPadAir_5thGen_1_COLOR-PURPLE_CAPACITY-ALL_CONNECTIVITY-WIFI_700x700.png?v=1648537369",
  },
  {
    name: "Apple Watch Series 7",
    type: "Smartwatch",
    price: 399,
    formerPrice: 599,
    image:
      "data:image/jpeg;base64,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6tQc06yMjj5LC1x2g8GHeLiY1pUXQZk4asykMpKsrBlYcVYG4I7wZhAytWgTjsDfbD1MMatd1SpSUCuvaeTIOLBuwcDp3mMd7953xtXMbrTS4pU78B85u1j7uHedGGB0MtshHfGD4TKS0+M3drPgBgfFHbLiJeFp9s7LdDcqriytSoDTw/EtwaoOxB2fvcOy/Ki7uBuucVUFWov6im3WvwqVBqEHao4n2c9JomPhMLTpItOmoVVWyqOAEyZi1SIiAiIgIiICIiAiIgIiICIiAiIgIiIGHj9nUa6ZK1Nai9jKDY9o7D3icXtPovwj3NF3pHkD11HhchveZIEQIZxvRhjF9RqdQcrMVb2MLe+aivuPtBOOGf7OV/yEyfYl0ed33axi8cNWH/Df+UpGw8X/AGFX/lv/ACnoqI0ee6O7GOf1cPV80YD2kWm52d0cY+oeuEpDtZgTbuVL++0muI0cZsHo8wlAh6l67jUFhZAe5OB+1edkBPsSBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQP/Z",
  },
  {
    name: "AirPods Pro",
    type: "Wireless Earbuds",
    price: 249,
    formerPrice: 449,
    image:
      "data:image/jpeg;base64,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",
  },
  {
    name: "Mac mini",
    type: "Desktop",
    price: 699,
    formerPrice: 899,
    image:
      "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/mac-mini-hero-202301_FMT_WHH?wid=904&hei=840&fmt=jpeg&qlt=90&.v=1671503802341",
  },
  {
    name: "Apple TV 4K",
    type: "Media Player",
    price: 179,
    formerPrice: 379,
    image:
      "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/apple-tv-4k-hero-select-202210_FMT_WHH?wid=640&hei=600&fmt=jpeg&qlt=90&.v=1664896361164",
  },
  {
    name: "HomePod Mini",
    type: "Smart Speaker",
    price: 99,
    formerPrice: 299,
    image:
      "data:image/jpeg;base64,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",
  },
  //   {
  //     name: "iPad Pro",
  //     type: "Tablet",
  //     price: 799,
  //     image: "https://example.com/ipadpro.jpg",
  //   },
  //   {
  //     name: "MacBook Air",
  //     type: "Laptop",
  //     price: 999,
  //     image: "https://example.com/macbookair.jpg",
  //   },
  //   {
  //     name: "iMac 24-inch",
  //     type: "Desktop",
  //     price: 1299,
  //     image: "https://example.com/imac24.jpg",
  //   },
  //   {
  //     name: "Apple Pencil (2nd Generation)",
  //     type: "Stylus",
  //     price: 129,
  //     image: "https://example.com/applepencil2.jpg",
  //   },
  //   {
  //     name: "Magic Keyboard",
  //     type: "Keyboard",
  //     price: 299,
  //     image: "https://example.com/magickeyboard.jpg",
  //   },
  //   {
  //     name: "Beats Studio Buds",
  //     type: "Wireless Earbuds",
  //     price: 149,
  //     image: "https://example.com/beatsstudiobuds.jpg",
  //   },
  //   {
  //     name: "Apple Watch SE",
  //     type: "Smartwatch",
  //     price: 279,
  //     image: "https://example.com/applewatchse.jpg",
  //   },
  //   {
  //     name: "AirTag",
  //     type: "Tracker",
  //     price: 29,
  //     image: "https://example.com/airtag.jpg",
  //   },
  //   {
  //     name: "iPad mini",
  //     type: "Tablet",
  //     price: 499,
  //     image: "https://example.com/ipadmini.jpg",
  //   },
  //   {
  //     name: "Apple One",
  //     type: "Subscription",
  //     price: 14.95,
  //     image: "https://example.com/appleone.jpg",
  //   },
  //   {
  //     name: "AppleCare+",
  //     type: "Service",
  //     price: 79,
  //     image: "https://example.com/applecareplus.jpg",
  //   },
  //   {
  //     name: "iCloud Storage",
  //     type: "Service",
  //     price: 0.99,
  //     image: "https://example.com/icloudstorage.jpg",
  //   },
  //   {
  //     name: "iTunes Gift Card",
  //     type: "Gift Card",
  //     price: 25,
  //     image: "https://example.com/itunesgiftcard.jpg",
  //   },
];

export default appleProducts;
