let cart = [];
let totalAmount = 0;
let visitorCount = localStorage.getItem('visitorCount') || 0;


document.getElementById('visitorCount').innerText = ++visitorCount;
localStorage.setItem('visitorCount', visitorCount);


function addToCart(itemName, price) {
    cart.push({ itemName, price });
    totalAmount += price;
    updateCart();
}


function updateCart() {
    let cartItems = document.getElementById('cartItems');
    cartItems.innerHTML = cart.map(item => `<p>${item.itemName} - $${item.price}</p>`).join('');
    document.getElementById('totalAmount').innerText = totalAmount;
}


function checkout() {
    if (cart.length === 0) {
        alert("Your cart is empty!");
    } else {
        alert("Order Placed Successfully!");
        document.getElementById('cart').style.display = 'none';
        document.getElementById('feedbackForm').style.display = 'block';
    }
}


function classifyFeedback() {
    const feedback = document.getElementById('feedback').value;

    if (!feedback) {
        alert('Please enter feedback!');
        return;
    }

   
    let classification = classifyFeedbackUsingOpenAI(feedback);
    alert(`Feedback classified as: ${classification}`);
}


function classifyFeedbackUsingOpenAI(feedback) {
    if (feedback.includes('good') || feedback.includes('excellent')) {
        return 'Positive';
    } else if (feedback.includes('okay') || feedback.includes('average')) {
        return 'Neutral';
    } else {
        return 'Negative';
    }
}
