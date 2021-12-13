cart = {
    'patch': 1,
    'sticker': 1
}
adjustValue = function(direction, item_id){
    item_counter = document.getElementById(item_id + "-count");
    value = cart[item_id];
    if(direction == "up"){
        if(cart[item_id] < 100){
            cart[item_id] += 1;
        }
    }
    if(direction == "down"){
        if(cart[item_id] > 0){
            cart[item_id] -= 1;
        }
    }
    item_counter.innerHTML = "<h1>" + cart[item_id] + "</h1>";
    prices = {
        'patch': 8,
        'sticker': 3
    }
    document.getElementById("total").innerHTML = (cart['patch'] * prices['patch']) + (cart['sticker'] * prices['sticker']);
}

var stripe = Stripe('pk_test_TYooMQauvdEDq54NiTphI7jx');
