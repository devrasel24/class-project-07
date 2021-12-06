const phone_book = [
    {
        id        : 01,
        name      : 'Rasel',
        phone     : '01745858595',
        gender    : 'Male',
        location  : 'Rangpur'
        
    },
    {
        id        : 02,
        name      : 'Jarin',
        phone     : '01896541021',
        gender    : 'Female',
        location  : 'Dhaka'
        
    },
    {
        id        : 03,
        name      : 'Rokeya',
        phone     : '01965854785',
        gender    : 'Female',
        location  : 'Dhaka'
        
    },
    {
        id        : 04,
        name      : 'Robiul',
        phone     : '01785985854',
        gender    : 'Male',
        location  : 'Dinajpur'
        
    },
    {
        id        : 05,
        name      : 'Badhon',
        phone     : '01785985854',
        gender    : 'Male',
        location  : 'Rangpur'
        
    },
    {
        id        : 06,
        name      : 'Biplob',
        phone     : '01785985858',
        gender    : 'Male',
        location  : 'lalbag'
        
    },
    {
        id        : 07,
        name      : 'Momin',
        phone     : '01785985365',
        gender    : 'Male',
        location  : 'Mirpur'
        
    },
    {
        id        : 08,
        name      : 'Habib',
        phone     : '01785989587',
        gender    : 'Male',
        location  : 'Parkmor'
        
    },
    {
        id        : 09,
        name      : 'Pollob',
        phone     : '01598585968',
        gender    : 'Male',
        location  : 'Payra'
        
    },
    {
        id        : 10,
        name      : 'Pollobi',
        phone     : '01896547896',
        gender    : 'Female',
        location  : 'Chakbazar'
        
    },
]
 




phone_book.map( data => {

    let id = data.id;
    let name = data.name;
    let phone = data.phone;
    let gender = data.gender;
    let location = data.location;

    console.log(`
    
            Contact Informations
    ------------------------------------
    
    ID         = ${ id }.
    Name       = ${ name }
    Phone      = ${ phone }
    Gender     = ${ gender }
    Location   = ${ location }


    `);
} );