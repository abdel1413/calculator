

function getHistory(){
    return document.getElementById("history-value").innerHTML;
    
    
}

function displayHistory(num){
    document.getElementById("history-value").innerHTML = num;
}

function getOutput(){
    return document.getElementById("output-value").innerHTML
}

function displayOutput(num){
    if(num == ""){
        document.getElementById("output-value").innerHTML = num;
    }else{
    document.getElementById("output-value").innerHTML = getFormattedNumber(num)
    }
}

function getFormattedNumber(num){
    let n = Number(num);
    let value = n.toLocaleString("en");
    return value;
}

function reverseNumber(num){
    return Number(num.replace(/,/g,''));
}



//get every  opertor by its classname
let operator = document.getElementsByClassName("operator");

//loop through every single operator to listen to and retrieve it when clicked
for(let i = 0; i< operator.length; i++){
    operator[i].addEventListener('click', function(){
    //   alert("operator clicked "+ this.id)
        if(this.id === "clear"){
            displayHistory("");
            displayOutput("");

        }
        else{
            let output = getOutput();
            let history = getHistory();

            /* check the last input. 
              if it is an operator and you wish to change it with 
              another operator.
             */
            if(output ==="" && history !=""){
                if(isNaN(history[history.length -1])){
                    history = history.substr(0,history.length-1);

            }
           
            }
            if(output != "" || history !=""){
                output = output ===""? output: reverseNumber(output);
                
                //concatinate output to history
                history  = history+output;
                if(this.id === "="){
                    let result = eval(history);
                    displayOutput(result)
                    displayHistory("")
                }
                else{
                    history = history+this.id;
                    displayHistory(history);
                    displayOutput("")
                }
            }
        }
    });
}


   //get every  opertor by its classname
   let number = document.getElementsByClassName("number");

   //loop through every single operator to listen to and retrieve it when clicked
   for(let i = 0; i< number.length; i++){
       number[i].addEventListener('click', function(){
         
        //get the number and print its id into screen
        let output = reverseNumber(getOutput());

        //check if it empty or not
        if(output != NaN){
            output+=this.id;
        
            //call function displayOutput to display
            displayOutput(output);

        }

       })



       /////

       function findp(){
           let f = "mmm";
           let L ="yyy";
           let m = "sss"
           let mdIn = m.charAt(0);
           return console.log(f + mdIn + L)
           }
           
       
       findp(3,2);
   }
  


