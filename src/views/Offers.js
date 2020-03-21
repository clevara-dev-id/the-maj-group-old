import React from 'react'
import { connect } from 'react-redux'
import Base from './Base'
import { setHeadBackground, setFooter } from '../redux/action/actionCreators'
import { 
    CardTextSecondary, 
    CarousellPrimary, 
    CardImage, 
    CardVideo, 
    FooterSecondary, 
    ContentLoader
} from '../components/base_components'

import { OnDesktop } from '../constants/Breakpoint'

import HeadBackground from '../Assets/tmp/headBg.png'
import background from '../Assets/tmp/CardImage.png'
import Poster from '../Assets/tmp/Portfolio.png'
import LoremVideo from '../Assets/tmp/LoremVideo.mp4'


const mapDispatchToProps = dispatch => ({
    dispatchHeadBackground: args => (
        dispatch(setHeadBackground(args))
    ),

    dispatchFooter: args => (
        dispatch(setFooter(args))
    )
})

class connectOffers extends Base {
    render() {
        this.props.dispatchHeadBackground({image: HeadBackground, text: "Offers"})
        this.props.dispatchFooter("secondary")
        return (
            <div id="offers">
                <OnDesktop>
                    <section>
                        <div className="container">
                            <CardTextSecondary
                                caption={false}
                                title="lorem ipsum dolor sit amet"
                                text="Ea voluptate pariatur sit laborum mollit veniam voluptate velit velit elit. Esse ut sit aute commodo voluptate. Duis qui deserunt sit est reprehenderit eu ut occaecat. Proident eiusmod cupidatat voluptate deserunt commodo ipsum cillum duis."
                                className="text-center"
                                width="920px"
                                margin="6px auto"
                            />

                            <CarousellPrimary
                                orientation="left"
                                margin="80px auto 96px auto"
                                store={[
                                {
                                    id: 1,
                                    source: background,
                                    name: "Hotel",
                                    description: "Esse tempor qui enim ut aute cupidatat in dolor magna irure voluptate consequat Lorem. Occaecat ad adipisicing enim Lorem minim ea elit exercitation dolor et ad consequat aliqua.",
                                    link: "#linkTo"
                                },
                                {
                                    id: 2,
                                    source: background,
                                    name: "Rumah",
                                    description: "Esse tempor qui enim ut aute cupidatat in dolor magna irure voluptate consequat Lorem. Occaecat ad adipisicing enim Lorem minim ea elit exercitation dolor et ad consequat aliqua.",
                                    link: "#linkTo"
                                },
                                {
                                    id: 3,
                                    source: background,
                                    name: "Restaurant",
                                    description: "Esse tempor qui enim ut aute cupidatat in dolor magna irure voluptate consequat Lorem. Occaecat ad adipisicing enim Lorem minim ea elit exercitation dolor et ad consequat aliqua.",
                                    link: "#linkTo"
                                }
                                ]}
                            />
                        </div>
                    </section>

                    <section>
                        <div className="container">
                            <CardImage
                                containerPadding="75px 0 75px 0"
                                caps="Destination"
                                title="RAJA AMPAT ISLAND"
                                text="Hemmed by jungle and lulled by the lap of the Indian Ocean, the hotel is rich in island spirit"
                                link="#linkTo"
                                buttonName="View More"
                                btnClassName="float-right"
                                background={background}
                                containerMargin="174px 0 0 0"
                                reverse
                            />
                        </div>
                    </section>

                    <section>
                        <div className="container">
                            <CardVideo
                                containerPadding="100px auto 142px auto"
                                store={[{
                                    id: 1,
                                    caps: null,
                                    title: "Amet Ipsum",
                                    text: "Book in advance and enjoy great savings. It’s the perfect excuse for an unforgettable adventure.",
                                    list: ["Luxury accommodation", "Booking conditions apply"],
                                    link: "#linkTo",
                                    video: LoremVideo
                                }]} 
                                textAlign="left"
                                buttonName="View More"
                                poster={Poster}
                            />
                        </div>
                    </section>
                    
                    {/* <ContentLoader>
                        <rect x="0" y="0" rx="5" ry="5" width="70" height="70" />
                        <rect x="80" y="17" rx="4" ry="4" width="300" height="13" />
                        <rect x="80" y="40" rx="3" ry="3" width="250" height="10" />
                    </ContentLoader> */}
                </OnDesktop>
            </div>
        )
    }
}

const Offers = connect(null, mapDispatchToProps)(connectOffers)
export default Offers