import React, { Component } from 'react';
import { SlidebarComponent } from '../components/base_components/base'

export default class Home extends Component {
    render() {
        const button123 = [{
            "name" :"DESTINATION",
           "link" : "/destination",
        },{
            "name" : "FORTOFOLIO",
            "link" : "/fortofolio"
        }
        ,{
            "name" : "OCCASIONS",
            "link" : "/occasions"
        }
        ,{
            "name" : "OFFERS",
            "link" : "/offers"
        }
        ,{
            "name" : "ABOUT US",
            "link" : "/about"
        }
        ,{
            "name" : "BOOK",
            "link" : "/book"
        }];
        return (
            <div>
                <SlidebarComponent store={button123} booklink="/book2"
                    search={event =>{
                      if(event.key==="Enter")
                      {
                          // Use function in here
                          console.log(event.target.value)
                    }}} 
                />
            </div>
        );
    }
}