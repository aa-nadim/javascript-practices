//https://github.com/aa-nadim/javascript_tutorial

function kilometerToMeter(kilometer){
    if(kilometer<0){
        return "Distance cannot be negative";
    }
    else{
        return kilometer * 1000; // 1 kilometer = 1000 meters
    }
}

function budgetCalculator(watch,phone,laptop){
    if(Math.ceil(watch) != Math.floor(watch) || Math.ceil(phone) != Math.floor(phone) || Math.ceil(laptop) != Math.floor(laptop)){
        return "Watch or Phone or Laptop cannot be fraction";
    }
    else if(watch<0 || phone<0 || laptop<0){
        return "Watch or Phone or Laptop cannot be negative";
    }
    else{
        var total_watchPrice = watch * 50; // given that a watch costs 50 taka,
        var total_phonePrice = phone * 100; // a phone costs 100 taka,
        var total_laptopPrice = laptop * 500; // a laptop costs 500 taka.
        return total_watchPrice + total_phonePrice + total_laptopPrice; // total Budget.
     }
}

function hotelCost(days){
    if(days<0){
        return "Days cannot be negative";
    }
    else{
        var numberOfDays = Math.ceil(days);
        if(days<11){
            // given that the cost of one day is 100 taka.
            return numberOfDays * 100; 
        }
        else if(days<21){
            // the cost of 10 days = 10 X 100 = 1000 taka + From 11th day to 20th day, the cost of one day is 80 taka.
            // 1000 + From 11th day to 20th day, the cost of one day is 80 taka.
            return 1000 + (numberOfDays-10)*80; 
        }
        else{
            // the cost of 10 days = 10 X 100 = 1000 taka + the cost of 10 days(20-10) = 10 X 80 = 800 taka + From 21th day, the cost of one day is 50 taka.
            // (1000 + 800 = 1800) + From 21th day, the cost of one day is 50 taka.
            return 1800+(numberOfDays-20)*50; 
        }
    }
}

function megaFriend(friends){
    var mega_friend = friends[0]; // assin 1st friend as a max_length friend.
    for(var i=0; i<friends.length; i++){
        if(mega_friend.length < friends[i].length){
            mega_friend = friends[i];
        }
    }
    return mega_friend;
}


// var meter = kilometerToMeter(8);
// console.log(meter);

// var totalBudget = budgetCalculator(4,3,1);
// console.log(totalBudget);

// var totalCost = hotelCost(8.9);
// console.log(totalCost);

// var friends = ["nadim","raj","dorjoy","akib","sakib"];
// var bigFriend = megaFriend(friends);
// console.log(bigFriend);