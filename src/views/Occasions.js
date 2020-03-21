import React from 'react'
import { connect } from 'react-redux'
import Base from './Base'

import { setHeadBackground, setFooter } from '../redux/action/actionCreators'
import { OnDesktop } from '../constants/Breakpoint'
import { 
    CardTextSecondary, 
    CardImageTopDown, 
    CarousellPrimary, 
    CardImage, 
    CardVideo 
} from '../components/base_components'

// dummy image, video
import HeadBackground from '../Assets/tmp/headBg.png'
import background from '../Assets/tmp/CardImage.png'
import LoremVideo from '../Assets/tmp/LoremVideo.mp4'
import Poster from '../Assets/tmp/Portfolio.png'

const mapDispatchToProps = dispatch => ({
    dispatchHeadBackground: args => (
        dispatch(setHeadBackground(args))
    ),
    
    dispatchFooter: args => (
        dispatch(setFooter(args))
    )
})

class connectOccasions extends Base {
    render() {
        this.props.dispatchHeadBackground({image: HeadBackground, text: "Occasions"})
        this.props.dispatchFooter("secondary")
        return (
            <div id="occasions">
                <OnDesktop>
                    <section>
                        <div className="container">
                            <CardTextSecondary
                                className="text-center"
                                caption={false}
                                title="lorem ipsum dolor sit amet"
                                text="Ea voluptate pariatur sit laborum mollit veniam voluptate velit velit elit. Esse ut sit aute commodo voluptate. Duis qui deserunt sit est reprehenderit eu ut occaecat. Proident eiusmod cupidatat voluptate deserunt commodo ipsum cillum duis."
                                width="100%"
                                margin="0 auto"
                            />
                        </div>
                    </section>

                    <section>
                        <div className="container">
                            <CardImageTopDown
                                button
                                store={[
                                    {
                                        id: 1,
                                        head: "Golf Events",
                                        desc: "Hemmed by jungle and lulled by the lap of the Indian Ocean, the hotel is rich in island spirit",
                                        image: background,
                                        link: "#link1"
                                    },{
                                        id: 2,
                                        head: "Meetings",
                                        desc: "Hemmed by jungle and lulled by the lap of the Indian Ocean, the hotel is rich in island spirit",
                                        image: background,
                                        link: "#link2"
                                    },{
                                        id: 3,
                                        head: "Weddings",
                                        desc: "Hemmed by jungle and lulled by the lap of the Indian Ocean, the hotel is rich in island spirit",
                                        image: background,
                                        link: "#link3"
                                    }
                                ]}
                            />
                        </div>
                    </section>

                    <section>
                        <div className="container">
                            <CarousellPrimary
                                orientation="left"
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
                                title="Meeting"
                                text="Hemmed by jungle and lulled by the lap of the Indian Ocean, the hotel is rich in island spirit"
                                link="#linkTo"
                                buttonName="View More"
                                btnClassName="float-right"
                                background={background}
                                containerMargin="147px 0 0 0"
                                reverse
                            />
                        </div>
                    </section>

                    <section>
                        <div className="container">
                            <CardVideo
                                containerPadding="100px 0 0 0"
                                store={[{
                                    id: 1,
                                    caps: null,
                                    title: "Weddings",
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
                </OnDesktop>
            </div>
        )
    }
}

const Occasions = connect(null, mapDispatchToProps)(connectOccasions)
export default Occasions