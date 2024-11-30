let num1=10
let num2=20

if(num1>num2){
  console.log("The greatest number is num1")
}
else if(num2>num1){
  console.log("The greatest number is num2")
}

// // question 2

let nu1=10
let nu2=20
let nu3=30

if((nu1>nu2)&&(nu1>nu3)){
  console.log("The greatest number is num1")
}
else if((nu2>nu1)&&(nu2>nu3)){
  console.log("The greatest number is num2")
}
else if((nu3>nu1)&&(nu3>nu2)){
  console.log("The greatest number is num3")
}

// question 3

let value1=4

if(value1>0){
  console.log("The entered number is positive")
}
if(value1<0){
  console.log("The entered number is Negative")
}
if(value1==0){
  console.log("The entered number is 0")
}

// // question 4

let s=89

if(s%5==0&&s%11){
  console.log("The entered number is divisible by 5 and 11")
}
else if(s%5==0){
  console.log("The entered number is divisible by 5 ")
}
else if(s%11==0){
  console.log("The entered number is divisible by 11 ")
}
else{
  console.log("The entered number is not divisible by 5 and 11")
}

// // question 5

let n=0

if(n%2==0){
  console.log("The number is even")
}
else{
  console.log("The number is odd")
}

// // question 6

let year=2020

if(year%4==0){
  console.log("The Year is leap year")
}
else{
  console.log("The year is not leap year")
}

// // question 7

let alphabet="b"

if(alphabet>="a"&&alphabet<="z"){
  console.log("This is an alphabet")
}
else{
  console.log("This is not an alphabet")
}

// // question 8

let vowel="o"

if(vowel=="a"||vowel=="e"||vowel=="i"||vowel=="o"||vowel=="u"){
  console.log("This is a vowel")
}
else if(vowel>="a"&&vowel<="z"){
  console.log("This is not a vowel")
}

// // question 9

let sp="$"

if(sp>="a"&&sp<="z"){
  console.log("This is a character")
}
else if(sp>0&&sp<10000){
  console.log("This is digit")
}
else{
  console.log("This is a special character")
}

// // question 10

let up="J"

if(up>="A"&&up<="Z"){
  console.log("This is upper case alphabet")
}
else if(up>="a"&&up<="z"){
  console.log("This is lower case alphabet")
}

// // question 11

let week=5

if(week==1){
  console.log("The day is Sunday")
}
else if(week==2){
  console.log("The day is Monday")
}
else if(week==3){
  console.log("The day is Tuesday")
}
else if(week==4){
  console.log("The day is Wednesday")
}
else if(week==5){
  console.log("The day is Thursday")
}
else if(week==6){
  console.log("The day is Friday")
}
else if(week==7){
  console.log("The day is Saturday")
}


// // question 14

let x=60
let y=60
let z=60

add=x+y+z

if(add==180){
  console.log("It is a Triangle")
}
else{
  console.log("It is not a Triangle")
}

// // question 15

let a=70
let b=70
let c=40

if(a+b>c||a+c>b||b+c>a){
  console.log("Its triangle")
}
else{
  console.log("Its not triangle")
}

// // question 16

let val1= 50;
let val2= 50;
let val3= 80;

if(val1==val2&&val2==val3){
  console.log("Its equilateral triangle")
}
else if(val1==val2||val2==val3||val3==val1){
  console.log("Its isosceles triangle")
}
else{
  console.log("Its scalene triangle")
}

// // question 17

// question 18

let price=2000
let sell=2500

if(sell > price){
  let profit = sell - price
  console.log("The profit is " + profit)
}
else{
  let loss=sell-price
  console.log("The loss is "+ loss)
}

// question 19

 let marks={
          chemistry:90,
          biology:89,
          computer_science:60,
          physics:70,
          maths:95,
                  }
 let total=marks.chemistry+marks.biology+marks.computer_science+marks.physics+marks.maths
 let value=total/5
       
 if(value>=90){
 console.log("Grade A")
  }
 else if(value>=80){
 console.log("Grade B")
 }
 else if(value>=70){
 console.log("Grade C")
 }
 else if(value>=60){
 console.log("Grade D")
 }
 else if(value>=50){
 console.log("Grade E")
 }
 else if(value<40){
 console.log("Grade F")
 }
       

// // question 12

let month_name = 6

let month_details =[
  {
  name:"January",
  Days:31,
  },
  {
  name:"February",
  Days:28,
  },
  {
  name:"march",
   Days:31,
  },
  {
  name:"april",
   Days:30,
  },
  {
  name:"may",
   Days:31,
  },
  {
  name:"june",
   Days:30 ,
  },
  {
  name:"july",
   Days:31 ,
  },
  {
  name:"august",
   Days:31 ,
  },
  {
  name:"september",
   Days:30 ,
  },
  {
  name:"october",
   Days:31 ,
  },
  {
  name:"november",
   Days:30 ,
  },
  {
  name:"december",
   Days:31 ,
  },
]
console.log(month_details[month_name - 1].name)

// question 20

let basic_salary=10000
let hra=0
let da=0

if(basic_salary<=10000){
  hra= 20 
    da=80 
}
else if(basic_salary<=20000){
  hra=25 
    da=90
}
  else if(basic_salary>20000){
  hra=25
    da=90
}
hra=basic_salary*hra/100
da=basic_salary*da/100
let gross_salary= basic_salary+hra+da
console.log("The salary is "+ gross_salary)

// question 13

let amount =2285

if(amount>500){
  let no_notes=Math.floor(amount/500);
  console.log("No of 500 notes is "+ no_notes)
  amount=amount%500
}
if(amount>=200){
  no_notes=Math.floor(amount/200);
  console.log("No of 200 notes is "+ no_notes)
  amount=amount%200
}
if(amount>=100){
  no_notes=Math.floor(amount/500);
  console.log("No of 100 notes is "+ no_notes)
  amount=amount%100
}
if(amount>=50){
  no_notes=Math.floor(amount/50);
  console.log("No of 50 notes is "+ no_notes)
  amount=amount%50
}
if(amount>=20){
  no_notes=Math.floor(amount/20);
  console.log("No of 20 notes is "+ no_notes)
  amount=amount%20
}
if(amount>=10){
  no_notes=Math.floor(amount/10);
  console.log("No of 10 notes is "+ no_notes)
  amount=amount%10
}
if(amount>=5){
  no_notes=Math.floor(amount/5);
  console.log("No of 5 notes is "+ no_notes)
  amount=amount%5
}

// question 21

let unit = 670;
let price1=0;

if(unit>250){
  price1=25+75+120+(unit-250)*1.50
}
else if(unit>150){
  price1=25+75+(unit-150)*1.20
}
else if(unit>100){
  price1=25+(unit-50)*.75
}
else if(unit>50){
  price1=25+(unit-50)*.75
}
else{
  price1=unit+0.5
}

let sur=price1 * 20 /100

let final=price1+ sur
console.log(final)








