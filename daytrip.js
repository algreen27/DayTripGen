
let places = ['HI','TX','CA','NY','FL'];


function dayTripLoc(dest){
//    for (let d = 0; d < dest.length; d++) {
        let d = (Math.floor(Math.random() * 4));     
        let userInput = prompt(`Would you like to go to ${dest[d]}? 1 for Y ,2 for N`);
        for (let index = 0; index < 2; index++) {
            if(userInput === 1){
                //     let result = `you're headed to ${dest[d]}`;
               console.log(`you're headed to ${dest[d]}`);
                  //   return result;
                     
                 }   
            else if(userInput === N){
                dayTripLoc;

               
               
        }
            

}

dayTripLoc(places);
 
let rstrnt = ['POKE','BBQ','STEAK','SUSHI','RAMEN'];

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



let entrtn = ['BAR','CLUB','THEATER','MOVIE','SURF','RODEO'];

function dayTripEnt(entr){
    let e = (Math.floor(Math.random() * 4));     
    userInput = prompt(`Would you like ${entr[e]} to eat? Y or N`);
        if(userInput === Y){
            dayTripTrans;
            console.log(`You will go to the ${entr} for a good time!`)
        }
        else if(userInput === N){
            dayTripLoc;
        }
}   


dayTripEnt(entrtn);



let transpo = ['CAR','LIMO','BUS','PLANE','HELO'];


function dayTripTrans(whip){
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

dayTripTrans(transpo);



