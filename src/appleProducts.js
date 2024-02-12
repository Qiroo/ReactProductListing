const appleProducts = [
  {
    name: "iPhone 13 Pro Max",
    type: "Smartphone",
    price: 1099,
    image:
      "https://www.apple.com/newsroom/images/product/iphone/standard/Apple_iPhone-13-Pro_iPhone-13-Pro-Max_09142021_inline.jpg.large.jpg",
  },
  {
    name: "MacBook Pro 16-inch",
    type: "Laptop",
    price: 2399,
    image:
      "data:image/jpeg;base64,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lWkoAUGocwVCUGocwQFCrCryrCgLSrSrirSgJdsVfKTfIzepdrXFNir5Sb5Gb1LtahkhERQAiIgCIiAIiIDk+yM74efJRetRkOUj2TmltuqRg6GMg8NC4H8lFQ5WRB6LyXlhvJeQGa8rJHYHmKsvKx5wPMgLi5Wlyxl3P0FULufoKAvJVhKtLufoKpe5+goCpKtJVCefoKoTz9BQFSVaSqE8/QVQnn6CgKko04DmCtr+6KoQFSVaUVCUBQq0qpKogJdsVfKTfIzepdrXFtieMnKNQMGQykngqWgekrtKhkhERQAiIgCIiAIiIDw5SyVBaWhs8bXgaqjFvMdYWifmFYicGkfaPapWiAifvBsfFPWKe8Gx8U9YqWIgIn7wbHxT1iqe8Cx8U9YqWogIl7wbHxT1invAsfFPWKlqICJdz+xcU9Yqnc/sXFPSVLkQER7n1i4vpKHY+sXF9JUuRARHue2LinrFU7nti4p6xUvRARDue2LinrFO55YeKese1S9EBEO55YeIese1U7ndh4h6x7VMEQEP7ndh4n4j2qrNjywA4sr9o9ql6IDX5KyPZ7K0sgiawGl66KFxGq8dZWwREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAf//Z",
  },
  {
    name: "iPad Air",
    type: "Tablet",
    price: 599,
    image:
      "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/ipad-air-finish-select-gallery-202211-pink-wifi_FMT_WHH?wid=1280&hei=720&fmt=p-jpg&qlt=95&.v=1670631579796",
  },
  {
    name: "Apple Watch Series 7",
    type: "Smartwatch",
    price: 399,
    image:
      "data:image/jpeg;base64,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6tQc06yMjj5LC1x2g8GHeLiY1pUXQZk4asykMpKsrBlYcVYG4I7wZhAytWgTjsDfbD1MMatd1SpSUCuvaeTIOLBuwcDp3mMd7953xtXMbrTS4pU78B85u1j7uHedGGB0MtshHfGD4TKS0+M3drPgBgfFHbLiJeFp9s7LdDcqriytSoDTw/EtwaoOxB2fvcOy/Ki7uBuucVUFWov6im3WvwqVBqEHao4n2c9JomPhMLTpItOmoVVWyqOAEyZi1SIiAiIgIiICIiAiIgIiICIiAiIgIiIGHj9nUa6ZK1Nai9jKDY9o7D3icXtPovwj3NF3pHkD11HhchveZIEQIZxvRhjF9RqdQcrMVb2MLe+aivuPtBOOGf7OV/yEyfYl0ed33axi8cNWH/Df+UpGw8X/AGFX/lv/ACnoqI0ee6O7GOf1cPV80YD2kWm52d0cY+oeuEpDtZgTbuVL++0muI0cZsHo8wlAh6l67jUFhZAe5OB+1edkBPsSBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQP/Z",
  },
  //   {
  //     name: "AirPods Pro",
  //     type: "Wireless Earbuds",
  //     price: 249,
  //     image: "https://example.com/airpodspro.jpg",
  //   },
  //   {
  //     name: "Mac mini",
  //     type: "Desktop",
  //     price: 699,
  //     image: "https://example.com/macmini.jpg",
  //   },
  //   {
  //     name: "Apple TV 4K",
  //     type: "Media Player",
  //     price: 179,
  //     image: "https://example.com/appletv4k.jpg",
  //   },
  //   {
  //     name: "HomePod Mini",
  //     type: "Smart Speaker",
  //     price: 99,
  //     image: "https://example.com/homepodmini.jpg",
  //   },
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
