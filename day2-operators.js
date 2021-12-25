function solve(meal_cost, tip_percent, tax_percent) {
    // Write your code here 
     var meal=parseFloat(meal_cost);
     var tip=((meal_cost/100)*tip_percent);
     var tax=((tax_percent/100)*meal_cost);
     var total_cost=tip+tax+meal_cost;
     total_cost=Math.round(total_cost)
     console.log(total_cost)
}
