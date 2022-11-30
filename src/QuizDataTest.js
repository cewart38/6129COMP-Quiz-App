const questions = [
    {
        image: require('./images/1apple.jpg'),
        options: ["Apple","Bannana","Watermelon","Peach"],
        correct_option: "Apple"
    },
    {
        image: require('./images/2pear.jpg'),
        options: ["Grape","Orange","Pear","Raspberry"],
        correct_option: "Pear"
    },
    {
        image: require('./images/3grape.jpg'),
        options: ["Passionfruit","Grape","Apricot","Blueberry"],
        correct_option: "Grape"
    },
    {
        image: require('./images/4banana.jpg'),
        options: ["Apricot","Banana","Peach","Strawberry"],
        correct_option: "Banana"
    },
    {
        image: require('./images/5orange.jpg'),
        options: ["Apple","Bannana","Blueberry","Orange"],
        correct_option: "Orange"
    },
    {
        image: require('./images/6strawberry.jpg'),
        options: ["Raspberry","Strawberry","Watermelon","Peach"],
        correct_option: "Strawberry"
    },
    {
        image: require('./images/7raspberry.jpg'),
        options: ["Apple","Bannana","Raspberry","Peach"],
        correct_option: "Raspberry"
    },
    {
        image: require('./images/8blueberry.jpg'),
        options: ["Blueberry","Orange","Strawberry","Apricot"],
        correct_option: "Blueberry"
    },
    {
        image: require('./images/9passionfruit.jpg'),
        options: ["Passionfruit","Bannana","Apple","Peach"],
        correct_option: "Passionfruit"
    },
    {
        image: require('./images/10apricot.jpg'),
        options: ["Passionfruit","Apple","Strawberry","Apricot"],
        correct_option: "Apricot"
    },
    {
        image: require('./images/11plate.jpg'),
        options: ["Knife","Cup","Plate","Fork"],
        correct_option: "Plate"
    },
    {
        image: require('./images/12cup.jpg'),
        options: ["Plate","Bowl","Knife","Cup"],
        correct_option: "Cup"
    },
    {
        image: require('./images/13pot.jpg'),
        options: ["Spoon","Chair","Pot","Sofa"],
        correct_option: "Pot"
    },
    {
        image: require('./images/14fork.jpg'),
        options: ["Bowl","Jug","Fork","Bench"],
        correct_option: "Fork"
    },
    {
        image: require('./images/15knife.jpg'),
        options: ["Knife","Watch","Toaster","Microwave"],
        correct_option: "Knife"
    },
    {
        image: require('./images/16spoon.jpg'),
        options: ["Chair","TV","Table","Spoon"],
        correct_option: "Spoon"
    },
    {
        image: require('./images/18bowl.jpg'),
        options: ["Plate","Bowl","Knife","Fork"],
        correct_option: "Bowl"
    },
    {
        image: require('./images/19toaster.jpg'),
        options: ["Toaster","Microwave","Fridge","Sofa"],
        correct_option: "Toaster"
    },
    {
        image: require('./images/20jug.jpg'),
        options: ["Bench","TV","Jug","Sofa"],
        correct_option: "Jug"
    },
    {
        image: require('./images/21tv.jpg'),
        options: ["TV","Table","Knife","Fork"],
        correct_option: "TV"
    },    
    {
        image: require('./images/22table.jpg'),
        options: ["Table","TV","Microwave","Chair"],
        correct_option: "Table"
    },
    {
        image: require('./images/23sofa.jpg'),
        options: ["Toaster","Sofa","Chair","Bench"],
        correct_option: "Sofa"
    },
    {
        image: require('./images/24cushion.jpg'),
        options: ["Cushion","Sofa","Bench","Vase"],
        correct_option: "Cushion"
    },
    {
        image: require('./images/25speaker.jpg'),
        options: ["Lamp","Speaker","Drawer","Telephone"],
        correct_option: "Speaker"
    },
    {
        image: require('./images/26lamp.jpg'),
        options: ["Mirror","Bin","Lamp","Bed"],
        correct_option: "Lamp"
    },
    {
        image: require('./images/27clock.jpg'),
        options: ["TV","Sofa","Cushion","Clock"],
        correct_option: "Clock"
    },
    {
        image: require('./images/28fan.jpg'),
        options: ["Fan","Sofa","Chair","Lamp"],
        correct_option: "Fan"
    },
    {
        image: require('./images/29remote.jpg'),
        options: ["Remote","TV","Lamp","Fork"],
        correct_option: "Remote"
    },
    {
        image: require('./images/30fireplace.jpg'),
        options: ["Toaster","Fan","Fireplace","Chair"],
        correct_option: "Fireplace"
    },
        {
        image: require('./images/31plant.jpg'),
        options: ["Spoon","Sofa","Fan","Plant"],
        correct_option: "Plant"
    },    {
        image: require('./images/32vase.jpg'),
        options: ["Vase","Speaker","Fork","Plate"],
        correct_option: "Vase"
    },
    {
        image: require('./images/33ironingboard.jpg'),
        options: ["Bowl","Printer","Ironing Board","Chair"],
        correct_option: "Ironing Board"
    },
    {
        image: require('./images/34drawer.jpg'),
        options: ["Bin","Fridge","Drawer","Telephone"],
        correct_option: "Drawer"
    },
    {
        image: require('./images/35bed.jpg'),
        options: ["Bed","Sofa","Chair","Bench"],
        correct_option: "Bed"
    },
    {
        image: require('./images/36mirror.jpg'),
        options: ["Plate","Bowl","Fridge","Mirror"],
        correct_option: "Mirror"
    },
    {
        image: require('./images/37bin.jpg'),
        options: ["Spoon","Bin","Fork","Soap"],
        correct_option: "Bin"
    },
    {
        image: require('./images/38telephone.jpg'),
        options: ["Sink","Toilet","Remote","Telephone"],
        correct_option: "Telephone"
    },
    {
        image: require('./images/39printer.jpg'),
        options: ["Toilet","Printer","Soap","Bin"],
        correct_option: "Printer"
    },
    {
        image: require('./images/40wardrobe.jpg'),
        options: ["Fridge","Drawer","Wardrope","Sofa"],
        correct_option: "Wardrope"
    },    {
        image: require('./images/41sink.jpg'),
        options: ["Sink","Toilet","Bookcase","Key"],
        correct_option: "Sink"
    },
    {
        image: require('./images/42bathtub.jpg'),
        options: ["Towel","Rug","Bathtub","Sofa"],
        correct_option: "Bathtub"
    },
    {
        image: require('./images/43toilet.jpg'),
        options: ["Telephone","Bannana","Mirror","Bookcase"],
        correct_option: "Toilet"
    },
    {
        image: require('./images/44soap.jpg'),
        options: ["Towel","Toilet","Soap","Sink"],
        correct_option: "Soap"
    },
    {
        image: require('./images/45fridge.jpg'),
        options: ["Fridge","Microwave","TV","Fork"],
        correct_option: "Fridge"
    },
    {
        image: require('./images/46microwave.jpg'),
        options: ["Printer","Microwave","Sofa","Spoon"],
        correct_option: "Microwave"
    },
    {
        image: require('./images/47towel.jpg'),
        options: ["Key","Bookcase","Towel","Fridge"],
        correct_option: "Towel"
    },
    {
        image: require('./images/48rug.jpg'),
        options: ["Sink","Lemon","Shoes","Watch"],
        correct_option: "Rug"
    },
    {
        image: require('./images/49key.jpg'),
        options: ["Controller","Sofa","Raspberry","Key"],
        correct_option: "Key"
    },
    {
        image: require('./images/50bookcase.jpg'),
        options: ["Watch","Fridge","Bookcase","Phone"],
        correct_option: "Bookcase"
    },
    {
        image: require('./images/51computer.png'),
        options: ["Bookcase","Shoes","Computer","Peach"],
        correct_option: "Computer"
    },
    {
        image: require('./images/52laptop.png'),
        options: ["Laptop","Sofa","Backpack","Fridge"],
        correct_option: "Laptop"
    },
    {
        image: require('./images/53keyboard.png'),
        options: ["Knife","Keyboard","Plate","Football"],
        correct_option: "Keyboard"
    },
    {
        image: require('./images/54melon.png'),
        options: ["Plate","Bowl","Melon","Knife"],
        correct_option: "Melon"
    },
    {
        image: require('./images/55coconut.png'),
        options: ["Spoon","Apple","Banana","Coconut"],
        correct_option: "Coconut"
    },
    {
        image: require('./images/56lime.png'),
        options: ["Lemon","Lime","Watermelon","Peach"],
        correct_option: "Lime"
    },
    {
        image: require('./images/57lemon.png'),
        options: ["Banana","Raspberry","Lemon","Strawberry"],
        correct_option: "Lemon"
    },
    {
        image: require('./images/58dressingGown.png'),
        options: ["Dressing Gown","TV","Towel","Spoon"],
        correct_option: "Dressinng Gown"
    },
    {
        image: require('./images/59watch.png'),
        options: ["Bench","Phone","Knife","Watch"],
        correct_option: "Watch"
    },
    {
        image: require('./images/60phone.png'),
        options: ["Toaster","Phone","Scissors","Microwave"],
        correct_option: "Phone"
    },
    {
        image: require('./images/61headphones.png'),
        options: ["Headphones","Chair","Weights","Picture Frame"],
        correct_option: "Jug"
    },
    {
        image: require('./images/62controller.png'),
        options: ["Tabley","Folder","Knife","Controller"],
        correct_option: "Controller"
    },    
    {
        image: require('./images/63shoes.png'),
        options: ["Backpack","TV","Shoes","Chair"],
        correct_option: "Shoes"
    },
    {
        image: require('./images/64football.png'),
        options: ["Clothes","Microphone","Fork","Football"],
        correct_option: "Football"
    },
    {
        image: require('./images/65basketball.png'),
        options: ["Cushion","Wallet","Basketball","Football"],
        correct_option: "Basketball"
    },
    {
        image: require('./images/66pictureframe.png'),
        options: ["Lamp","Picture Frame","Drawer","Telephone"],
        correct_option: "Picture Frame"
    },
    {
        image: require('./images/67wallet.png'),
        options: ["Toilet","Bin","Shower","Wallet"],
        correct_option: "Wallet"
    },
    {
        image: require('./images/68backpack.png'),
        options: ["Backpack","Wallet","Toy Box","Bookcase"],
        correct_option: "Backpack"
    },
    {
        image: require('./images/69folder.png'),
        options: ["Dog Toy","Folder","Chair","Shower"],
        correct_option: "Folder"
    },
    {
        image: require('./images/70chair.png'),
        options: ["Chair","TV","Sofa","Weights"],
        correct_option: "Chair"
    },
    {
        image: require('./images/71clothes.png'),
        options: ["Deodorant","Fan","Clothes","Scissors"],
        correct_option: "Clothes"
    },
        {
        image: require('./images/72tablet.png'),
        options: ["Tablet","Shower","Fridge","TV"],
        correct_option: "Tablet"
    },    {
        image: require('./images/73microphone.png'),
        options: ["Vase","Microphone","Fork","Remote"],
        correct_option: "Microphone"
    },
    {
        image: require('./images/74scissors.png'),
        options: ["Bowl","Printer","Scissors","Bookcase"],
        correct_option: "Scissors"
    },
    {
        image: require('./images/75weights.png'),
        options: ["Weights","Sink","Drawer","Disc"],
        correct_option: "Weights"
    },
    {
        image: require('./images/76familyPicture.png'),
        options: ["Shower","Toy Box","Tablet","Family Picture"],
        correct_option: "Family Picture"
    },
    {
        image: require('./images/77deodorant.png'),
        options: ["Toilet","Bowl","Fridge","Deodorant"],
        correct_option: "Deodorant"
    },
    {
        image: require('./images/78disc.png'),
        options: ["Cupboard","Disc","Fork","Soap"],
        correct_option: "Disc"
    },
    {
        image: require('./images/79toyBox.png'),
        options: ["Toy Box","Fridge","Remote","TV"],
        correct_option: "Toy Box"
    },
    {
        image: require('./images/80bookcase.png'),
        options: ["Shower","Bookcase","Window","Coaster"],
        correct_option: "Bookcase"
    },
    {
        image: require('./images/81shower.png'),
        options: ["Toaster","Drawer","Spoon","Shower"],
        correct_option: "Shower"
    },    {
        image: require('./images/82dogBed.png'),
        options: ["Suitcase","Dog Bed","Car Key","Candle"],
        correct_option: "Dog Bed"
    },
    {
        image: require('./images/83dogToy.png'),
        options: ["Towel","Rug","Dog Toy","Microwave"],
        correct_option: "Dog Toy"
    },
    {
        image: require('./images/84cupboard.png'),
        options: ["Cupboard","Drawer","Controller","Toaster"],
        correct_option: "Cupboard"
    },
    {
        image: require('./images/85window.png'),
        options: ["Hair Dryer","Birthday Card","Window","Coaster"],
        correct_option: "Window"
    },
    {
        image: require('./images/86armchair.png'),
        options: ["Armchair","Key","Cushion","Toothbrush"],
        correct_option: "Armchair"
    },    {
        image: require('./images/87toothbrush.png'),
        options: ["Suitcase","Shower","Car Key","Toothbrush"],
        correct_option: "Toothbrush"
    },
    {
        image: require('./images/88cushion.png'),
        options: ["Towel","Rug","Dog Toy","Microwave"],
        correct_option: "Dog Toy"
    },
    {
        image: require('./images/89birthdayCard.png'),
        options: ["Bookcase","Controller","Birthday Card","Fireplace"],
        correct_option: "Birthday Card"
    },
    {
        image: require('./images/90coaster.png'),
        options: ["Toilet","Toothbrush","Window","Coaster"],
        correct_option: "Coaster"
    },
    {
        image: require('./images/91carKey.png'),
        options: ["Hair Dryer","Fireplace","Car Key","Vase"],
        correct_option: "Car Key"
    },    {
        image: require('./images/92hairDryer.png'),
        options: ["Football","Hairdryer","Dog Bed","Candle"],
        correct_option: "Hairdryer"
    },
    {
        image: require('./images/93toiletPaper.png'),
        options: ["Suitcase","Rug","Car Key","Toilet Paper"],
        correct_option: "Toilet Paper"
    },
    {
        image: require('./images/94safe.png'),
        options: ["Fireplace","Safe","Shower","Plate"],
        correct_option: "Safe"
    },
    {
        image: require('./images/95suitcase.png'),
        options: ["Suitcase","Bookcase","Tap","Kettle"],
        correct_option: "Suitcase"
    },
    {
        image: require('./images/96candle.png'),
        options: ["Hair Dryer","Toothbrush","Candle","Toilet"],
        correct_option: "Candle"
    },    {
        image: require('./images/97book.png'),
        options: ["Clock","Watch","Book","Mirror"],
        correct_option: "Book"
    },
    {
        image: require('./images/98tap.png'),
        options: ["Console","Controller","Tap","Microwave"],
        correct_option: "Tap"
    },
    {
        image: require('./images/99glue.png'),
        options: ["Glue","Mirror","Vase","Telephone"],
        correct_option: "Glue"
    },
    {
        image: require('./images/100pencilCase.png'),
        options: ["Basketball","Remote","Drawer","Microwave"],
        correct_option: "Pencil Case"
    }
  ]


  const shuffleArray = array => {
    for (let i = array.length - 1; i > 0; i--) {
      // Generate random number
      let j = Math.floor(Math.random() * (i + 1));

      let temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  };

  const shuffledArray = shuffleArray(questions);

  const getQuestions = shuffledArray.slice(0,20);

  export default data = getQuestions;
