cart = {
    'patch': 1,
    'sticker': 1
}
adjustValue = function(direction, item_id){
    item_counter = document.getElementById(item_id + "-count");
    item_value_form = document.getElementById(item_id + "_counter")
    sticker_counter = document.getElementById("sticker_counter")
    patch_counter = document.getElementById("patch_counter")
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
    item_value_form.value = cart[item_id];
    prices = {
        'patch': 8,
        'sticker': 3
    }
    submit_button = document.getElementById("checkout-button")
    if (sticker_counter.value == 0 && patch_counter.value == 0){
        submit_button.disabled = true;
    } else {
        submit_button.disabled = false;
    }
    document.getElementById("total").innerHTML = (cart['patch'] * prices['patch']) + (cart['sticker'] * prices['sticker']);
}

var stripe = Stripe('pk_test_TYooMQauvdEDq54NiTphI7jx');

// update_cart = function(){
//     form = document.getElementById("action_form")
//     action_string = "https://us-central1-canadagottem.cloudfunctions.net/stripe_charge?patch=" + cart["patch"] + "&sticker=" + cart["sticker"]
//     form.action = action_string
// }