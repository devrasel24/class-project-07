
function Results(){


/**
 * 
 * GPA & Grade Calculetor
 * 
 */


    this.gpaGrade = function(marks){

        let gpa;
        let grade;

        if(marks >= 0 && marks < 40){
            gpa = 0;
            grade = 'F';
        }else if(marks >= 32 && marks < 40){
            gpa = 1;
            grade = 'D';       
       }else if(marks >= 40 && marks < 50){
            gpa = 2;
            grade = 'C';       
       }else if(marks >= 50 && marks < 60){
            gpa = 3;
            grade = 'C+';       
       }else if(marks >= 60 && marks < 70){
            gpa = 3.5;
            grade = 'B';       
       }else if(marks >= 70 && marks < 80){
            gpa = 4;
            grade = 'A';       
       }else if(marks >= 80 && marks <= 100){
            gpa = 5;
            grade = 'A+';       
       }else{
           gpa = 'Invalid'
           grade = 'Invalid'
       }

       return {

           gpaCal : gpa,
           gradeCal : grade,
       }

    }



/**
 * 
 * Total Grade & CGPA
 * 
 */

  
    this.finalResult = function(bn, en, mth, rel, sc, ict){

        let cgpa;
        let tgrade;

        let totalGpa = result.gpaGrade(bn).gpaCal + result.gpaGrade(en).gpaCal + result.gpaGrade(mth).gpaCal + result.gpaGrade(rel).gpaCal + result.gpaGrade(sc).gpaCal + result.gpaGrade(ict).gpaCal ;

        cgpa =  totalGpa / 6;


        if(bn < 33 || en < 33 || mth < 33 ||  rel < 33 || sc < 33 || ict < 33){
            tgrade = 'F';
        }else if( cgpa >= 0 && cgpa < 1 ){
            tgrade = 'F';
        }else if( cgpa >= 1 && cgpa < 2 ){
            tgrade = 'D';
        }else if( cgpa >= 2 && cgpa < 3 ){
            tgrade = 'C';
        }else if( cgpa >= 3 && cgpa < 4 ){
            tgrade = 'B';
        }else if( cgpa >= 4 && cgpa < 5 ){
            tgrade = 'A';
        }else if( cgpa == 5 ){
            tgrade = 'A+';
        }
        
        return {
            totalCgpa : tgrade == 'F' ? 'You Failed The Exam' : cgpa.toFixed(2),
            totalGrade : tgrade
        }

    }

}