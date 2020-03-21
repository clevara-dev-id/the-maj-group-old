import React from 'react'
import Base from './Base'
import { 
    HeadComponent, 
    CardTextSecondary, 
    CarousellPrimary, 
    CardImage, 
    CardVideo, 
    FooterSecondary, 
} from '../components/base_components'

import { OnDesktop } from '../constants/Breakpoint'

import HeadBackground from '../Assets/tmp/headBg.png'
import background from '../Assets/tmp/CardImage.png'
import Poster from '../Assets/tmp/Portfolio.png'
import LoremVideo from '../Assets/tmp/LoremVideo.mp4'


export default class Offers extends Base {
    render() {
        return (
            <div id="offers">
                <OnDesktop>
                    <HeadComponent bg={HeadBackground} text="Offers" />
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
                                margin="174px 0 0 0"
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
                </OnDesktop>
                <footer>
                    <FooterSecondary
                        validated={this.state.footer.validated}
                        onSubmit={this._footer}
                        titleRef={this.footreftitle}
                        nameRef={this.footrefname}
                        emailRef={this.footrefemail}
                    />
                </footer>
            </div>
        )
    }
}