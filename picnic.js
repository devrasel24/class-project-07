const picnic_mem = [
    {
        sl          :  01,
        name        : 'Rasel',
        address     : 'Rangpur',
        fees        :  500,
    },  
    {
        sl          :  02,
        name        : 'Mamun',
        address     : 'Dhaka',
        fees        :  600,
    },   
    {
        sl          :  03,
        name        : 'Kamal',
        address     : 'Dhaka',
        fees        : 700,
    },  
    {
        sl          :  04,
        name        : 'Rofiq',
        address     : 'Rajshahi',
        fees        :  600,
    },    
    {
        sl          :  05,
        name        : 'Ridoy',
        address     : 'Rangpur',
        fees        :  920,
    },    
    {
        sl          :  06,
        name        : 'Badhon',
        address     : 'Rangpur',
        fees        :  700,
    },   
    {
        sl          :  07,
        name        : 'Ripon',
        address     : 'Dinajpur',
        fees        :  690,
    },
    {
        sl          :  08,
        name        : 'Rohima',
        address     : 'Mirpur',
        fees        :  650,
    },
    {
        sl          :  09,
        name        : 'Korim',
        address     : 'Uttara',
        fees        :  400,
    },
    {
        sl          :  10,
        name        : 'Almas',
        address     : 'Mogbazar',
        fees        :  410,
    },
];

let tFees = 0;

picnic_mem.map(data => {

    let sl = data.sl;
    let name = data.name;
    let add = data.address;
    let fees = data.fees;

   

    console.log(`
        Picnic Member Information
------------------------------------------------

    SL         : ${ sl },
    Name       : ${ name },
    Address    : ${ add },
    Fees       : ${ fees },
    
    `);

    tFees += data.fees;
});

console.log(`Total Fees Of Picnic = ${ tFees } Tk.`);