/*
    +================================================+
    =                 SLIDEBAR                       =
    +================================================+

    1. make variable with data and structure like this :
        const button123 = [{
            name :"DESTINATION",
            link : "/destination",
        },{
            name : "FORTOFOLIO",
            link : "/fortofolio"
        }
        ,{
            name : "OCCASIONS",
            link : "/occasions"
        }
        ,{
            name : "OFFERS",
            link : "/offers"
        }
        ,{
            name : "ABOUT US",
            link : "/about"
        }
        ,{
            name : "BOOK",
            link : "/book"
        }];
    2.  To use left model use React tag like this :
        <SlidebarComponent store={button123} search={event =>{
            if(event.key==="Enter")
            {
                // Use function in here
                console.log(event.target.value)
            }}} 
        />
*/