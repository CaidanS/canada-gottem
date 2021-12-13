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

checkout = function(){
    stripe.redirectToCheckout({
        lineItems: [{price: 'price_1K64SVAHI4v7SeoPZ2qQEkQO', quantity: 1}],
        mode: 'payment',
        /*
         * Do not rely on the redirect to the successUrl for fulfilling
         * purchases, customers may not always reach the success_url after
         * a successful payment.
         * Instead use one of the strategies described in
         * https://stripe.com/docs/payments/checkout/fulfill-orders
         */
        successUrl: 'https://www.instagram.com/canada_gottem/success',
        cancelUrl: 'https://www.instagram.com/canada_gottem/canceled',
      })
      .then(function (result) {
        if (result.error) {
          /*
           * If `redirectToCheckout` fails due to a browser or network
           * error, display the localized error message to your customer.
           */
          var displayError = document.getElementById('error-message');
          displayError.textContent = result.error.message;
        }
      });
}

