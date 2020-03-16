/*
    +================================================+
    =                 CAROUSEL                       =
    +================================================+

    1. make data with structure like this :
        ex :
        let dataCrousel=[];

        dataCrousel[0]={
            source      :`/assets/images/Rectangle45.png`,
            name        : 'Hotel',
            description : 'Esse tempor qui enim ut aute cupidatat in dolor magna irure voluptate consequat Lorem. Occaecat ad adipisicing enim Lorem minim ea elit exercitation dolor et ad consequat aliqua.',
            link        : '/homepage'
        }
        dataCrousel[1]={
            source      :`/assets/images/Rectangle45.png`,
            name        : 'Hotel',
            description : 'Esse tempor qui enim ut aute cupidatat in dolor magna irure voluptate consequat Lorem. Occaecat ad adipisicing enim Lorem minim ea elit exercitation dolor et ad consequat aliqua.',
            link        : '/profile'
        }
        dataCrousel[2]={
            source      :`/assets/images/Rectangle45.png`,
            name        : 'Hotel',
            description : 'Esse tempor qui enim ut aute cupidatat in dolor magna irure voluptate consequat Lorem. Occaecat ad adipisicing enim Lorem minim ea elit exercitation dolor et ad consequat aliqua.',
            link        : '/about'
        }
        dataCrousel[3]={
            source      :`/assets/images/Rectangle45.png`,
            name        : 'Hotel',
            description : 'Esse tempor qui enim ut aute cupidatat in dolor magna irure voluptate consequat Lorem. Occaecat ad adipisicing enim Lorem minim ea elit exercitation dolor et ad consequat aliqua.',
            link        : '/contact'
        }
    
    2.  To use left model use React tag like this :
        <CarousellPrimary dataCrousel={dataCrousel} orientation="left" />

    3.  To use right model use React tag like this :
        <CarousellPrimary dataCrousel={dataCrousel} />
    
    4.  To use Top model use React tag like this :
        <CarousellSecondary dataCrousel={dataCrousel} orientation="top"  />
    
    5.  To use bottom model use React tag like this :
        <CarousellSecondary dataCrousel={dataCrousel} />
*/