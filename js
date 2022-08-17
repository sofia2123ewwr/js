function makeNegative(num) {
  if(num<=0){
  return num;
  }else{
  return -num;
  }
}

function goals (laLigaGoals, copaDelReyGoals, championsLeagueGoals) {
  return laLigaGoals + copaDelReyGoals + championsLeagueGoals;
}

function move (position, roll) {
  return position + roll + roll;
}

function greet (name, owner) {
  if(name === owner){
  return "Hello boss";
  }else{
  return "Hello guest";
  }
}

function litres(time) {
  return Math.floor(0.5 * time);
}

function lovefunc(flower1, flower2){
  if((flower1+flower2) % 2 === 0){
    return false;
  }else{
    return true;
  }
  
}
