// dummy image About
import ArticleImage from '../Assets/Image/About/Article.png';
import ImageSixt1 from '../Assets/Image/About/SixPart1.png';
import ImageSixt2 from '../Assets/Image/About/SixPart2.png';
import ImageSixt3 from '../Assets/Image/About/SixPart3.png';
import ImageSixt4 from '../Assets/Image/About/SixPart4.png';
import ImageSixt5 from '../Assets/Image/About/SixPart5.png';
import ImageSixt6 from '../Assets/Image/About/SixPart6.png';
import ImagePhilosophy from '../Assets/Image/About/philosophy.png';
import ImageSustainability from '../Assets/Image/About/philosophy.png';

//dummy image Occasions
import background from '../Assets/tmp/CardImage.png';
import ImageCardTopdown1 from '../Assets/Image/Occasions/imageTopDown1.png';
import ImageCardTopdown2 from '../Assets/Image/Occasions/imageTopDown2.png';
import ImageCardTopdown3 from '../Assets/Image/Occasions/imageTopDown3.png';
import ImageCarousel from '../Assets/Image/Occasions/imageCarousel.png';
import ImageMeeting from '../Assets/Image/Occasions/ImageCardMeeting.png';
import Poster from '../Assets/tmp/Portfolio.png';
import LoremVideo from '../Assets/tmp/LoremVideo.mp4'

const dataAboutPage = [{
    article :{
        title : "lorem ipsum Tester",
        firstParagraph : "Sint anim sunt incididunt aute labore. Cupidatat incididunt aliquip cillum minim sunt reprehenderit nostrud elit qui minim laboris. Aliquip pariatur laborum officia mollit mollit cillum esse. Culpa incididunt veniam sint ex. Deserunt et id anim culpa ullamco nostrud laborum ea consequat est et pariatur eu. Non Lorem sint nulla Lorem dolor et occaecat pariatur magna proident aliqua ut proident id. Amet pariatur veniam non Lorem sunt aliquip. Aute ipsum adipisicing sint proident ad nostrud minim labore ex adipisicing voluptate occaecat aliqua. Dolor ea reprehenderit occaecat dolore sunt.",
        image : ArticleImage,
        secondParagraph : "Sint anim sunt incididunt aute labore. Cupidatat incididunt aliquip cillum minim sunt reprehenderit nostrud elit qui minim laboris. Aliquip pariatur laborum officia mollit mollit cillum esse. Culpa incididunt veniam sint ex. Deserunt et id anim culpa ullamco nostrud laborum ea consequat est et pariatur eu. Non Lorem sint nulla Lorem dolor et occaecat pariatur magna proident aliqua ut proident id. Amet pariatur veniam non Lorem sunt aliquip. Aute ipsum adipisicing sint proident ad nostrud minim labore ex adipisicing voluptate occaecat aliqua. Dolor ea reprehenderit occaecat dolore sunt. Sint anim sunt incididunt aute labore. Cupidatat incididunt aliquip cillum minim sunt reprehenderit nostrud elit qui minim laboris. Aliquip pariatur laborum officia mollit mollit cillum esse. Culpa incididunt veniam sint ex. Deserunt et id anim culpa ullamco nostrud laborum ea consequat est et pariatur eu. Non Lorem sint nulla Lorem dolor et occaecat pariatur magna proident aliqua ut proident id.",
    },
    siximage :{
        image1 : ImageSixt1,
        image2 : ImageSixt2,
        image3 : ImageSixt3,
        image4 : ImageSixt4,
        image5 : ImageSixt5,
        image6 : ImageSixt6,
    },
    philosophy : {
        title : "Idyllic Honeymoons",
        text : "Reprehenderit enim exercitation eu laboris ea deserunt sunt proident. Ut officia aliqua voluptate commodo magna officia Lorem dolor consectetur eiusmod do enim est exercitation.",
        image : ImagePhilosophy,
    },
    sustainability : {
        title : "Idyllic Honeymoons",
        text : "Reprehenderit enim exercitation eu laboris ea deserunt sunt proident. Ut officia aliqua voluptate commodo magna officia Lorem dolor consectetur eiusmod do enim est exercitation.",
        image : ImageSustainability,
    }
}];

const dataOccasionsPage = [{
    cardtext : {
        title : "Lorem Ipsum Dolor Amet",
        text  : "From timeless icons in buzzing cities to tranquil retreats in hidden corners, The maj offers unforgettable travel experiences in pioneering destinations across the globe."
    },
    cardImageTopDown :[{
          id: 1,
          caps: "Jakarta",
          head: "GOLF EVENT",
          desc: "Hemmed by jungle and lulled by the lap of the Indian Ocean, the hotel is rich in island spirit",
          image: ImageCardTopdown1,
          link: "#link1"
        },{
          id: 2,
          caps: "Bandung",
          head: "MEETING",
          desc: "Hemmed by jungle and lulled by the lap of the Indian Ocean, the hotel is rich in island spirit",
          image: ImageCardTopdown2,
          link: "#link2"
        },{
          id: 3,
          caps: "Bali",
          head: "WEDDINGS",
          desc: "Hemmed by jungle and lulled by the lap of the Indian Ocean, the hotel is rich in island spirit",
          image: ImageCardTopdown3,
          link: "#link3"
    }],
    carousel :[
        {
          id: 1,
          source: ImageCarousel,
          name: "Golf Event",
          description: "Esse tempor qui enim ut aute cupidatat in dolor magna irure voluptate consequat Lorem. Occaecat ad adipisicing enim Lorem minim ea elit exercitation dolor et ad consequat aliqua.",
          link: "#linkTo"
        },
        {
          id: 2,
          source: ImageCarousel,
          name: "Meetings",
          description: "Esse tempor qui enim ut aute cupidatat in dolor magna irure voluptate consequat Lorem. Occaecat ad adipisicing enim Lorem minim ea elit exercitation dolor et ad consequat aliqua.",
          link: "#linkTo"
        },
        {
          id: 3,
          source: ImageCarousel,
          name: "Weddings",
          description: "Esse tempor qui enim ut aute cupidatat in dolor magna irure voluptate consequat Lorem. Occaecat ad adipisicing enim Lorem minim ea elit exercitation dolor et ad consequat aliqua.",
          link: "#linkTo"
        }
    ],
    meetings : {
        title : "Meeting",
        text  : "Hemmed by jungle and lulled by the lap of the Indian Ocean, the hotel is rich in island spirit",
        image : ImageMeeting
    },
    weddings :{
        video : [{
            id: 1,
            caps: null,
            title: "Weddings",
            text: "Book in advance and enjoy great savings. It’s the perfect excuse for an unforgettable adventure.",
            list: ["Luxury accommodation", "Booking conditions apply"],
            link: "#linkTo",
            video: LoremVideo
        }],
        poster : Poster,
    }
}]

export{
    dataAboutPage,
    dataOccasionsPage
}