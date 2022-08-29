var x;
for(var i=1; i<=100;i++){
    if(i%3==0&&i%5==0){
        x="FizzBuzz"
    }
    else if(i%3==0){
        x="Fizz";
    }
    else if(i%5==0){
        x="Buzz";
    }
    else{
        x=i;
    }
    console.log(x);
}