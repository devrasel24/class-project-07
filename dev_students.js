const dev_students = [
    {
        id          :  01,
        name        : 'Rasel',
        address     : 'Rangpur',
        skill       : 'MERN Stack',
        salary      :  100,
    },  
    {
        id          :  02,
        name        : 'Mamun',
        address     : 'Dhaka',
        skill       : 'Laravel',
        salary      :  200,
    },   
    {
        id          :  03,
        name        : 'Kamal',
        address     : 'Dhaka',
        skill       : 'Golan',
        salary      : 300,
    },  
    {
        id          :  04,
        name        : 'Rofiq',
        address     : 'Rajshahi',
        skill       : 'Django',
        salary      :  100,
    },    
    {
        id          :  05,
        name        : 'Ridoy',
        address     : 'Rangpur',
        skill       : 'WordPress',
        salary      :  200,
    },    
    {
        id          :  06,
        name        : 'Badhon',
        address     : 'Rangpur',
        skill       : 'Java',
        salary      :  200,
    },   
    {
        id          :  07,
        name        : 'Ripon',
        address     : 'Dinajpur',
        skill       : 'MERN Stack',
        salary      :  200,
    },
];



let t_salary = 0;


dev_students.map( data => { 

    console.log(`

                Dev Students List
    ---------------------------------------------
    
        Students Id    = ${ data.id }.
               Name    = ${ data.name }.
            Address    = ${ data.address }.
            Skills     = ${ data.skill }.
            Salary     = $ ${ data.salary }.
    
    `);
  
    t_salary += data.salary;
});

console.log(` Dev Students Total Salary $ ${ t_salary}`);
