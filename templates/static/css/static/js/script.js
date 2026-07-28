function sendMessage() {

    let userInput = document.getElementById("user-input").value;
    let chatBox = document.getElementById("chat-box");

    if (userInput.trim() === "") {
        return;
    }

    // Display user message
    chatBox.innerHTML += 
        "<p><b>You:</b> " + userInput + "</p>";

    // Simple chatbot response (temporary)
    let response = getBotResponse(userInput);

    chatBox.innerHTML += 
        "<p><b>Assistant:</b> " + response + "</p>";

    // Clear input box
    document.getElementById("user-input").value = "";

    // Scroll to latest message
    chatBox.scrollTop = chatBox.scrollHeight;
}


function getBotResponse(message) {

    message = message.toLowerCase();

    if (message.includes("admission")) {
        return "Admissions information is available on the college admission portal.";
    }

    else if (message.includes("course")) {
        return "We offer various undergraduate and postgraduate courses.";
    }

    else if (message.includes("library")) {
        return "The library is open from 9 AM to 6 PM on working days.";
    }

    else if (message.includes("fee")) {
        return "Please contact the accounts department for fee details.";
    }

    else {
        return "Sorry, I don't have that information yet. Please ask another question.";
    }
}
