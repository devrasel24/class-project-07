
const my_club = [
    {
        name    : 'Kamal',
        age     : 40,
        address : 'Dinajpur',
    },
    {
        name    : 'kowsik',
        age     : 12,
        address : 'Rajshahi',
    },
    {
        name    : 'Momin',
        age     : 35,
        address : 'Dinajpur',
    },
    {
        name    : 'Momin',
        age     : 30,
        address : 'Dinajpur',
    },
    {
        name    : 'Emon',
        age     : 40,
        address : 'Dhaka',
    },
    {
        name    : 'Rana',
        age     : 30,
        address : 'Dhaka',
    },
    {
        name    : 'Badhon',
        age     : 25,
        address : 'Rangpur',
    },
    {
        name    : 'Mahim',
        age     : 17,
        address : 'Syleth',
    },
    
    {
        name    : 'Sumon',
        age     : 65,
        address : 'Syleth',
    },
    {
        name    : 'Rakibul',
        age     : 350,
        address : 'Dhormopur',
    },
    {
        name    : 'Mashiur',
        age     : 60,
        address : 'Faridpur',
    },

];

my_club.map( data => {

    let name = data.name;
    let age = data.age;

    if( age >= 0 && age <= 17 ){
        console.log(` 

            Hi, ${ name}, আপনার বয়স ${age} বছর। তাই আপনি আমাদের ক্লাবে জয়েন করতে পারবেন না।

        `);

    }else if( age >= 18 && age < 35 ) {
        console.log(` 

            Hi, ${ name}, আপনার বয়স ${ age} বছর। আপনি আমাদের ক্লাবে জয়েন করতে পারেন।
            
            `);

    }else if( age >= 35 && age <= 40 ) {
        console.log(` 
        
            Hi, ${ name}, আপনার বয়স ${ age} বছর।  আপনি অনেক অবিজ্ঞ বেক্তি, অনুগ্রহ করে আপনার অবিজ্ঞতা দিয়ে আমাদের ক্লাবটিকে এগিয়ে নিয়ে যাবেন। 
        
        `);

    }else if( age >= 41 && age < 70 ) {
        console.log(` 

            Hi, ${ name}, আপনার বয়স ${ age} বছর। আপনার বয়স অনেক বেশি, আপনি এখন বিশ্রাম নিন । 
        
        `);

    }else{
        console.log(` 

            Hi, ${ name},অনুগ্রহ করে আপনার সঠিক বয়সটি লিখুন।
        
        `);
    } 


});
