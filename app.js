const wrapper= document.querySelector(".sliderWrapper") //this is going to access all the elements within the sliderWrapper div element
//Now we are going to add the slider effect where we will just simply move the position of the items in trhe x-axis

/*console.log(wrapper)
wrapper.style.transform="translateX(-200vw)"//this is going to move the elements on the left sidentaking up 100 view of the screen*/
const menuitem= document.querySelectorAll(".menuitem") //here we are goin to add the click function to all the types of shoes or items

const products = [   //here we added all the different types of the product 
    {
      id: 1,
      title: "Air Force",
      price: 119,
      colors: [
        {
          code: "black",
          img: "./images/air.png",
        },
        {
          code: "darkblue",
          img: "./images/air2.png",
        },
      ],
    },
    {
      id: 2,
      title: "Air Jordan",
      price: 149,
      colors: [
        {
          code: "lightgray",
          img: "./images/jordan.png",
        },
        {
          code: "green",
          img: "./images/jordan2.png",
        },
      ],
    },
    {
      id: 3,
      title: "Blazer",
      price: 109,
      colors: [
        {
          code: "lightgray",
          img: "./images/blazer.png",
        },
        {
          code: "green",
          img: "./images/blazer2.png",
        },
      ],
    },
    {
      id: 4,
      title: "Crater",
      price: 129,
      colors: [
        {
          code: "black",
          img: "./images/crater.png",
        },
        {
          code: "lightgray",
          img: "./images/crater2.png",
        },
      ],
    },
    {
      id: 5,
      title: "Hippie",
      price: 99,
      colors: [
        {
          code: "gray",
          img: "./images/hippie.png",
        },
        {
          code: "black",
          img: "./images/hippie2.png",
        },
      ],
    },
  ];


let choosenProduct=products[0];

const currentProductImg=document.querySelector(".productImg")
const currentProductTitle=document.querySelector(".productTitle")
const currentProductPrice=document.querySelector(".productPrice")
const currentProductColors=document.querySelectorAll(".color")
const currentProductSizes=document.querySelectorAll(".size")

menuitem.forEach((item,index)=>{
    item.addEventListener("click",()=>{
        //console.log("You clicked!"+index)
        wrapper.style.transform=`translateX(${-100*index}vw)`//this will switch the item in -X axis ... basically multiphying the view with 100 each time when we click on any of the option on the nav bar

        //this will change the choosen product
        choosenProduct=products[index]

        //change text of the current product
        currentProductTitle.textContent=choosenProduct.title //it is goin to take the title from the above and put in the place
        currentProductPrice.textContent="$"+choosenProduct.price // same
        currentProductImg.src=choosenProduct.colors[0].img //this will chage the image when we click on the menu title 
        
        //assigning new background color according to the index 
        currentProductColors.forEach((color,index)=>{
            color.style.backgroundColor=choosenProduct.colors[index].code;
        });
    });
}); //here this whole fucntion is for the navigation bar in which we have mentioned the different types of shoes .. so when we click on them it will work

//Therefore this part is over .. the above whole function will add a smooth transition from left to right 

//this will change the color of the shoes or the image of the shoes when clicked on the color palets 
currentProductColors.forEach((color,index)=>{
    color.addEventListener("click",()=>{
        currentProductImg.src=choosenProduct.colors[index].img
    });
});

//this will change the color of the size button .. when clicked one it will also change the color of the previous button
currentProductSizes.forEach((size,index)=>{
    size.addEventListener("click",()=>{
        currentProductSizes.forEach(size=>{
            size.style.backgroundColor="white"
            size.style.color="black"
        });
        size.style.backgroundColor="black"
        size.style.color="white"
    });
});

//now let us create a fucnction for the ayment option 
const productButton=document.querySelector(".productButton ");
const payment=document.querySelector(".payment");
const close=document.querySelector(".close");

productButton.addEventListener("click",()=>{
  payment.style.display="flex"
})
close.addEventListener("click",()=>{
  payment.style.display="none"
})