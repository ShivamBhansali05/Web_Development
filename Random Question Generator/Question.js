const button = document.querySelector(".btn");
const text = document.querySelector(".text h1");
button.addEventListener("click",()=>{
    const myQuestion = [
        '"Write a program to swap two numbers without using third variable."',
        '"Write a program to convert total days into years and months."',
        '"Write a program to count the number of digits in given number."',
        '"Write a program to find the given number is positive or negative.”',
        '“Write a program to find if the given number is prime or not.”',
        '“Write a program to find maximum of three numbers.”',
        '“Write a program to find factorial of number.”',
        '“Write a program to check if the given alphabet is vowel or not.”',
        '“Write a program to check if the given year is leap year or not.”',
        '“Write a program to display the multiplication table.”',
        '“Write a program to create the pyramid pattern.”',
        '“Write a program to find sum of odd numbers present between 1 to N.”',
        '"Write a program to find sum of even numbers present between 1 to N."'
        
    ]
    const question = myQuestion[Math.floor(Math.random()*myQuestion.length)];
    text.textContent = question;
})