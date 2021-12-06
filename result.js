let result = new Results;


const s_info = [
    {
        roll    :  01,
        name    : 'Rasel',
        fName   : 'Ataur',
        mName   : 'Rubi',
        bn      : 55,
        en      : 45,
        mth     : 45,
        rel     : 45,
        sc      : 45,
        ict     : 45,
    }, 
    {
        roll    :  02,
        name    : 'Munna',
        fName   : 'Liyakot',
        mName   : 'amena',
        bn      : 75,
        en      : 85,
        mth     : 74,
        rel     : 98,
        sc      : 68,
        ict     : 75,
    },  
    {
        roll    :  03,
        name    : 'Rion',
        fName   : 'Rofiq',
        mName   : 'Rohima',
        bn      : 57,
        en      : 58,
        mth     : 47,
        rel     : 89,
        sc      : 75,
        ict     : 58,
    },
    {
        roll    :  04,
        name    : 'Rion',
        fName   : 'Rofiq',
        mName   : 'Rohima',
        bn      : 59,
        en      : 54,
        mth     : 42,
        rel     : 88,
        sc      : 77,
        ict     : 85,
    },
    {
        roll    :  05,
        name    : 'Kamal',
        fName   : 'Milon',
        mName   : 'Rokeya',
        bn      : 85,
        en      : 48,
        mth     : 95,
        rel     : 25,
        sc      : 77,
        ict     : 85,
    },
    {
        roll    :  06,
        name    : 'Shamim',
        fName   : 'Lichu',
        mName   : 'Kohinur',
        bn      : 85,
        en      : 98,
        mth     : 95,
        rel     : 98,
        sc      : 77,
        ict     : 85,
    },
    {
        roll    :  07,
        name    : 'Kuddus',
        fName   : 'Korim',
        mName   : 'Kohinur',
        bn      : 95,
        en      : 98,
        mth     : 95,
        rel     : 98,
        sc      : 97,
        ict     : 95,
    }, 
    {
        roll    :  08,
        name    : 'Rohima',
        fName   : 'Korim',
        mName   : 'Kohinur',
        bn      : 75,
        en      : 98,
        mth     : 85,
        rel     : 98,
        sc      : 97,
        ict     : 95,
    },
    {
        roll    :  09,
        name    : 'Jarin',
        fName   : 'Rohim',
        mName   : 'Rohima',
        bn      : 75,
        en      : 58,
        mth     : 85,
        rel     : 78,
        sc      : 97,
        ict     : 55,
    },
    {
        roll    :  10,
        name    : 'Tasnim',
        fName   : 'Rohim',
        mName   : 'Rohima',
        bn      : 75,
        en      : 68,
        mth     : 85,
        rel     : 78,
        sc      : 97,
        ict     : 55,
    },
];




s_info.map( data => {

    let roll = data.roll;
    let name = data.name;
    let fName = data.fName;
    let mName = data.mName;

    let bn = data.bn;
    let en = data.en;
    let mth = data.mth;
    let rel = data.rel;
    let sc = data.sc;
    let ict = data.ict;



    console.log(`

             Students Informations & Results

  *****************************************************

    Roll              : ${ roll }.
    Name              : ${ name }.
    Father's Name     : ${ fName }.
    Mather's Name     : ${ mName }.
    

    Bangla            : ${ bn }.    Your GPA IS ( ${ result.gpaGrade(bn).gpaCal} ) & Your Grade Is (${ result.gpaGrade(bn).gradeCal}). 
    English           : ${ en }.    Your GPA IS ( ${ result.gpaGrade(en).gpaCal} ) & Your Grade Is (${ result.gpaGrade(en).gradeCal}).
    Mathe             : ${ mth }.    Your GPA IS ( ${ result.gpaGrade(mth).gpaCal} ) & Your Grade Is (${ result.gpaGrade(mth).gradeCal}). 
    Religion          : ${ rel }.    Your GPA IS ( ${ result.gpaGrade(rel).gpaCal} ) & Your Grade Is (${ result.gpaGrade(rel).gradeCal}). 
    Science           : ${ sc }.    Your GPA IS ( ${ result.gpaGrade(sc).gpaCal} ) & Your Grade Is (${ result.gpaGrade(sc).gradeCal}).
    ICT               : ${ ict }.    Your GPA IS ( ${ result.gpaGrade(ict).gpaCal} ) & Your Grade Is (${ result.gpaGrade(ict).gradeCal}).
----------------------------------------------------------------------------------------------------
    Final CGPA = ${result.finalResult(bn, en, mth, rel, sc, ict).totalCgpa}.                      Final Grade = ${result.finalResult(bn, en, mth, rel, sc, ict).totalGrade}
    
    `);





});
