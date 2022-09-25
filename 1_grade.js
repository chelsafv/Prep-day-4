// # Grade

// Buatlah script untuk menentukan suatu nilai dengan ketentuan berikut:

// 1) Jika nilai yang dimasukkan lebih besar dan sama dengan 90 maka output yang keluar adalah __A__.
// 2) Jika nilai yang dimasukkan lebih besar dan sama dengan 80; dan lebih kecil dan sama dengan 89, maka output yang keluar adalah __B__.
// 3) Jika nilai yang dimasukkan lebih besar dan sama dengan 70; dan lebih kecil dan sama dengan 79, maka output yang keluar adalah __C__.
// 4) Jika nilai yang dimasukkan lebih besar dan sama dengan 60; dan lebih kecil dan sama dengan 69, maka output yang keluar adalah __D__.
// 5) Jika nilai yang dimasukkan lebih kecil dan sama dengan 59 maka output yang keluar adalah __E__.

// ## Contoh:

// ```
// Input: 30
// Output: E

// Input: 75
// Output: C
// ```

function grade(number){
    if(number >=90){
        console.log("A");
    }else if(number >= 80 && number<= 89){
        console.log("B");
    }else if(number >= 70 && number<= 79){
        console.log("C");
    }else if(number >= 60 && number<= 69){
        console.log("D");
    }else if(number <= 59){
        console.log("E");
    }
}

grade(75);
grade(59);