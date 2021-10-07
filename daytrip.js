//userInput = prompt('Select a Destination');


let places = ['HI','TX','CA','NY','FL'];

//let Y = true;
//let N = false;
//let opt1 = dayTripLoc;

function dayTripLoc(dest){
//    for (let d = 0; d < dest.length; d++) {
        let d = (Math.floor(Math.random() * 4));     
        let userInput = prompt(`Would you like to go to ${dest[d]}? Y or N`);
            if(userInput == 'Y'){
                
            //try to call next function dayTripRes;
             //   console.log(`You are headed to ${dest[d]}`);
            }
            else if(userInput == 'N'){
                let opt1 = dayTripLoc;
            }   
            let result = `you're headed to ${dest[d]}`;
            return result;
            console.log(result);

}

dayTripLoc(places);
 
// let rstrnt = ['POKE','BBQ','STEAK','SUSHI','RAMEN'];

function dayTripRes(food){
    let f = (Math.floor(Math.random() * 4));     
    userInput = prompt(`Would you like ${food[f]} to eat? Y or N`);
        if(userInput === Y){
            dayTripRes;
            console.log(`You will be eating ${food}`)
        }
        else if(userInput === N){
            dayTripLoc;
        }
}

dayTripRes(rstrnt);
// //     for (let f = 0; f < food.length; f++) {}

       
        
// //     }
    
// let entrtn = ['BAR','CLUB','THEATER','MOVIE','SURF','RODEO'];

// function dayTripEnt(entr){
//     let e = (Math.floor(Math.random() * 4));     
//     userInput = prompt(`Would you like ${entr[e]} to eat? Y or N`);
//         if(userInput === Y){
//             dayTripTrans;
//             console.log(`You will go to the ${entr} for a good time!`)
//         }
//         else if(userInput === N){
//             dayTripLoc;
//         }
//  }   //let transpo = ['CAR','LIMO','BUS','PLANE','HELO'];
// //     for (let f = 0; f < fun.length; f++) {



// // function dayTripTrans(whip){
//  //   let entrtn = ['BAR','CLUB','THEATER','MOVIE','SURF','RODEO'];
// //     for (let w = 0; w < whip.length; w++) {
       
        
// //     }
    
// // }

        
        
// //     }
    
// // 