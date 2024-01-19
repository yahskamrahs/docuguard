const chatMessages = document.getElementById('chat-messages');
const messageInput = document.getElementById('message-input');
const container = document.getElementById('container');
const urlParams = new URLSearchParams(window.location.search);
const loggedInUser = urlParams.get('user');
// Initial welcome message from the bot

// Define an object to store valid usernames, corresponding passwords, user names, and associated documents
const credentials = {
'user1': { id:'234',password: 'pass123', name: 'Shahid Deshmukh',icard:'user1_aadhar.jpg',aadharb:'user1_aadhar.jpg',aadhar: 'user1_aadhar.jpg', pan: 'user1_pan.jpg', passbook: 'user1_passbook.jpg', electricity: 'user1_electricity.jpg', passport: 'user1_passport.jpg', income: 'user1_income.jpg', caste: 'user1_caste.jpg', nationality: 'user1_nationality.jpg', resident: 'user1_resident.jpg', bonafide: 'user1_bonafide.jpg', tenthtc: 'user1_tenthtc.jpg', twelthtc: 'user1_twelthtc.jpg', tenthmark: 'user1_tenthmark.jpg', twelthmark: 'user1_twelthmark.jpg', firstsem: 'user1_firstsem.jpg', secsem: 'user1_secsem.jpg', mscit: 'user1_mscit.jpg', cheque: 'user1_cheque.jpg' },
'user2': { id:'876',password: 'pass456', name: 'Rizwan Quadri',aadhar: 'user1_aadhar.jpg', pan: 'user1_pan.jpg', passbook: 'user1_passbook.jpg', electricity: 'user1_electricity.jpg', passport: 'user1_passport.jpg', income: 'user1_income.jpg', caste: 'user1_caste.jpg', nationality: 'user1_nationality.jpg', resident: 'user1_resident.jpg', bonafide: 'user1_bonafide.jpg', tenthtc: 'user1_tenthtc.jpg', twelthtc: 'user1_twelthtc.jpg', tenthmark: 'user1_tenthmark.jpg', twelthmark: 'user1_twelthmark.jpg', firstsem: 'user1_firstsem.jpg', secsem: 'user1_secsem.jpg', mscit: 'user1_mscit.jpg', cheque: 'user1_cheque.jpg' },
'yahska': { id:'513',password: 'akshay@123', name: 'Akshay Sharma',icard:'akshay_icard.jpg',backadhar:'akshay_aadharb.jpg', aadhar: 'akshay_aadhar.jpg', pan: 'akshay_pan.jpg', passbook: 'akshay_passbook.jpg', electricity: 'akshay_electricity.jpg', passport: 'akshay_passport.jpg', income: 'akshay_income.jpg', caste: 'akshay_caste.jpg', nationality: 'akshay_nationality.jpg', resident: 'akshay_resident.jpg', bonafide: 'akshay_bonafide.jpg', tenthtc: 'akshay_tenthtc.jpg', twelthtc: 'akshay_twelthtc.jpg', tenthmark: 'akshay_tenthmark.jpg', twelthmark: 'akshay_twelthmark.jpg', firstsem: 'akshay_firstsem.jpg', secsem: 'akshay_secsem.jpg', mscit: 'akshay_mscit.jpg', cheque: 'akshay_cheque.jpg'},
// Add more username-password-name-document pairs as needed
};


simulateTyping('DocuGuard', `Welcome ${loggedInUser}! You are now logged in. How can I assist you with your document requests?`, 'bot-welcome');

// Store the current user and update the sidebar

let currentUser = credentials[loggedInUser];
updateSidebar();
if (!currentUser) {
    // No user is logged in, redirect to the login page
    window.location.href = 'index.html';
}
if (performance.navigation.type === 1) {
    // Page is being loaded for the first time
    // Redirect the user to the login page
    window.location.href = 'index.html';
   
}
else{
if (currentUser) {
    // Provide document suggestions to the logged-in user
    const documentSuggestion = `
        <p>You can ask for the following documents:</p>
        <ul>
        <li><a href="#" onclick="requestDocument('aadhar')"><span class="orange-text">Aadhar Card</span></a></li>
        <li><a href="#" onclick="requestDocument('aadharb')"><span class="orange-text">Backside Aadhar</span></a></li>          
        <li><a href="#" onclick="requestDocument('pan')"><span class="orange-text">PAN Card</span></a></li>
        <li><a href="#" onclick="requestDocument('passbook')"><span class="orange-text">Passbook</span></a></li>
        <li><a href="#" onclick="requestDocument('electricity')"><span class="orange-text">Electricity Bill</span></a></li>
        <li><a href="#" onclick="requestDocument('passport')"><span class="orange-text">Passport Photo</span></a></li>
        <li><a href="#" onclick="requestDocument('income')"><span class="orange-text">Income Certificate</span></a></li>
        <li><a href="#" onclick="requestDocument('caste')"><span class="orange-text">Caste Certificate</span></a></li>
        

        <li><a href="#" onclick="requestDocument('nationality')"><span class="orange-text">Nationality</span></a></li>
        <li><a href="#" onclick="requestDocument('resident')"><span class="orange-text">Resident</span></a></li>
        <li><a href="#" onclick="requestDocument('bonafide')"><span class="orange-text">Bonafide</span></a></li>
        <li><a href="#" onclick="requestDocument('tenthtc')"><span class="orange-text">10th TC</span></a></li>
        <li><a href="#" onclick="requestDocument('twelthtc')"><span class="orange-text">12th TC</span></a></li>
        <li><a href="#" onclick="requestDocument('tenthmark')"><span class="orange-text">10th Marksheet</span></a></li>
        <li><a href="#" onclick="requestDocument('twelthmark')"><span class="orange-text">12th Marksheet</span></a></li>
        <li><a href="#" onclick="requestDocument('firstsem')"><span class="orange-text">First Sem</span></a></li>
        <li><a href="#" onclick="requestDocument('secsem')"><span class="orange-text">Second Sem</span></a></li>
        <li><a href="#" onclick="requestDocument('mscit')"><span class="orange-text">MS-CIT</span></a></li>
        <li><a href="#" onclick="requestDocument('cheque')"><span class="orange-text">CAN Cheque</span></a></li>
        <li><a href="#" onclick="requestDocument('icard')"><span class="orange-text">I-Card (college)</span></a></li>
        
        </ul>
    `;
    simulateTypings('DocuGuard', documentSuggestion);
}
}

// ...

function handleBotResponse(userMessage) {
    // Check if the user is logged in
    if (currentUser !== null) {
        let botReply;

        const documentTypes = [
            'passport',
            'backadhar',
            'aadhar',
            'pan',
            'passbook',
            'electricity',
            'income',
            'caste',
            'nationality',
            'resident',
            'bonafide',
            'tenthtc',
            'twelthtc',
            'tenthmark',
            'twelthmark',
            'firstsem',
            'secsem',
            'mscit',
            'cheque',
            'icard',
        ];

        // Check if the user's message contains any document type
        const requestedDocument = documentTypes.find(type => userMessage.includes(type));

        if (requestedDocument) {
            // Show the user's associated document
            botReply = `<div class="image-response"><p>Sure, here is an image of your ${requestedDocument}:</p><img src="doc/${currentUser[requestedDocument]}" alt="${requestedDocument}"> <br><button class="download-button" onclick="downloadJPG(currentUser.${requestedDocument}, '${requestedDocument}')">Download Image</button></div>`;
        }  else {
            botReply = 'I do not understand that command.';
        }

        simulateTyping('DocuGuard', botReply);
        scrollToRecentBotMessage();
    } else {
        // Handle other scenarios for non-logged in users if needed
        // For example, you can provide a message asking the user to log in
        simulateTyping('DocuGuard', 'Welcome! Please log in to access document services.');
    }
}

// ...

/*
function handleBotResponse(userMessage) {
// Check if the user has provided a username and password
if (currentUser === null) {
// Split the user's input to extract username and password
const [username, password] = userMessage.split(' ');

// Check if the provided username and password are valid
if (credentials[username] && credentials[username].password === password) {
    currentUser = credentials[username];

    // Automatically send a suggestion message after successful login
    const documentSuggestion = `
        <p>You can ask for the following documents:</p>
        <ul>
            <li><a href="#" onclick="requestDocument('aadhar')"><span class="orange-text">Aadhar Card</span></a></li>
            <li><a href="#" onclick="requestDocument('aadharb')"><span class="orange-text">Backside Aadhar</span></a></li>          
            <li><a href="#" onclick="requestDocument('pan')"><span class="orange-text">PAN Card</span></a></li>
            <li><a href="#" onclick="requestDocument('passbook')"><span class="orange-text">Passbook</span></a></li>
            <li><a href="#" onclick="requestDocument('electricity')"><span class="orange-text">Electricity Bill</span></a></li>
            <li><a href="#" onclick="requestDocument('passport')"><span class="orange-text">Passport Photo</span></a></li>
            <li><a href="#" onclick="requestDocument('income')"><span class="orange-text">Income Certificate</span></a></li>
            <li><a href="#" onclick="requestDocument('caste')"><span class="orange-text">Caste Certificate</span></a></li>
            

            <li><a href="#" onclick="requestDocument('nationality')"><span class="orange-text">Nationality</span></a></li>
            <li><a href="#" onclick="requestDocument('resident')"><span class="orange-text">Resident</span></a></li>
            <li><a href="#" onclick="requestDocument('bonafide')"><span class="orange-text">Bonafide</span></a></li>
            <li><a href="#" onclick="requestDocument('tenthtc')"><span class="orange-text">10th TC</span></a></li>
            <li><a href="#" onclick="requestDocument('twelthtc')"><span class="orange-text">12th TC</span></a></li>
            <li><a href="#" onclick="requestDocument('tenthmark')"><span class="orange-text">10th Marksheet</span></a></li>
            <li><a href="#" onclick="requestDocument('twelthmark')"><span class="orange-text">12th Marksheet</span></a></li>
            <li><a href="#" onclick="requestDocument('firstsem')"><span class="orange-text">First Sem</span></a></li>
            <li><a href="#" onclick="requestDocument('secsem')"><span class="orange-text">Second Sem</span></a></li>
            <li><a href="#" onclick="requestDocument('mscit')"><span class="orange-text">MS-CIT</span></a></li>
            <li><a href="#" onclick="requestDocument('cheque')"><span class="orange-text">CAN Cheque</span></a></li>
            <li><a href="#" onclick="requestDocument('icard')"><span class="orange-text">I-Card (college)</span></a></li>
            
            <!-- Add more documents as needed -->
        </ul>
    `;
    simulateTyping('DocuGuard', documentSuggestion);

    updateSidebar();
} else {
    simulateTyping('DocuGuard', 'Invalid credentials. Please try again.');
}
} 
else {

    // ... (existing code for login check and initial suggestions)

    if (currentUser !== null) {
        let botReply;

        const documentTypes = [
            'passport',
            'backadhar',
            'aadhar',
            'pan',
            'passbook',
            'electricity',
            'income',
            'caste',
            'nationality',
            'resident',
            'bonafide',
            'tenthtc',
            'twelthtc',
            'tenthmark',
            'twelthmark',
            'firstsem',
            'secsem',
            'mscit',
            'cheque',
            
            'icard',

        ];

        // Check if the user's message contains any document type
        const requestedDocument = documentTypes.find(type => userMessage.includes(type));

        if (requestedDocument) {
            // Show the user's associated document
            botReply = `<div class="image-response"><p>Sure, here is an image of your ${requestedDocument}:</p><img src="doc/${currentUser[requestedDocument]}" alt="${requestedDocument}"> <br><button class="download-button" onclick="downloadJPG(currentUser.${requestedDocument}, '${requestedDocument}')">Download Image</button></div>`;
        } else if (userMessage.toLowerCase() === 'logout') {
            // Handle logout
            currentUser = null;
            botReply = 'You have been logged out. Please enter your username and password to log in again.';
            updateSidebar();
        } else if (userMessage.includes('12th tc')) {
    // Show the user's associated driving license
    botReply = `<div class="image-response"><p>Sure, here is an image of your 12th TC:</p><img src="doc/${currentUser.twelthtc}" alt="12th TC"> <br><button class="download-button" onclick="downloadJPG(currentUser.twelthtc, 'twelthtc')">Download Image</button></div>`;
        }else if (userMessage.includes('12th mark')) {
    // Show the user's associated driving license
    botReply = `<div class="image-response"><p>Sure, here is an image of your 12th Marksheet:</p><img src="doc/${currentUser.twelthmark}" alt="12th Marksheet"> <br><button class="download-button" onclick="downloadJPG(currentUser.twelthmark, 'twelthmark')">Download Image</button></div>`;
        }else if (userMessage.includes('10th tc')) {
    // Show the user's associated driving license
    botReply = `<div class="image-response"><p>Sure, here is an image of your 10th TC:</p><img src="doc/${currentUser.tenthtc}" alt="10th TC"> <br><button class="download-button" onclick="downloadJPG(currentUser.tenthtc, 'tenthtc')">Download Image</button></div>`;
        } else if (userMessage.includes('10th mark')) {
    // Show the user's associated driving license
    botReply = `<div class="image-response"><p>Sure, here is an image of your 10th Marksheet:</p><img src="doc/${currentUser.tenthmark}" alt="10th Marksheet"> <br><button class="download-button" onclick="downloadJPG(currentUser.tenthmark, 'tenthmark')">Download Image</button></div>`;
        } else if (userMessage.includes('backside aadhar')) {
            // Show the user's associated driving license
            botReply = `<div class="image-response"><p>Sure, here is an image of your Backside Aadhar:</p><img src="doc/${currentUser.backadhar}" alt="Aadhar Back"> <br><button class="download-button" onclick="downloadJPG(currentUser.backadhar, 'backadhar')">Download Image</button></div>`;
       }  else {
            botReply = 'I do not understand that command.';
        }

        simulateTyping('DocuGuard', botReply);
    }

    scrollToRecentBotMessage();
}
}
*/

function requestDocument(documentType) {
let documentImage;
let documentAlt;

// Determine the document image and alt text based on the requested document
switch (documentType) {
case 'passport':
    documentImage = currentUser.passport;
    documentAlt = 'Passport';
    break;
case 'aadhar':
    documentImage = currentUser.aadhar;
    documentAlt = 'Aadhar';
    break;
case 'pan':
    documentImage = currentUser.pan;
    documentAlt = 'PAN';
    break;
case 'aadharb':
    documentImage = currentUser.backaadhar;
    documentAlt = 'Backside Aadhar';
    break;
case 'icard':
    documentImage = currentUser.icard;
    documentAlt = 'icard';
    break;
case 'passbook':
    documentImage = currentUser.passbook;
    documentAlt = 'Passbook';
    break;
case 'electricity':
    documentImage = currentUser.electricity;
    documentAlt = 'Electricity';
    break;
case 'income':
    documentImage = currentUser.income;
    documentAlt = 'Income';
    break;
case 'caste':
    documentImage = currentUser.caste;
    documentAlt = 'caste';
    break;
case 'nationality':
    documentImage = currentUser.nationality;
    documentAlt = 'Nationality';
    break;
case 'resident':
    documentImage = currentUser.resident;
    documentAlt = 'Resident';
    break;
case 'bonafide':
    documentImage = currentUser.bonafide;
    documentAlt = 'Bonafide';
    break;
case 'tenthtc':
    documentImage = currentUser.tenthtc;
    documentAlt = '10th TC';
    break;
case 'twelthtc':
    documentImage = currentUser.twelthtc;
    documentAlt = '12th TC';
    break;
case 'tenthmark':
    documentImage = currentUser.tenthmark;
    documentAlt = '10th Mark';
    break;
case 'twelthmark':
    documentImage = currentUser.twelthmark;
    documentAlt = '12th Mark';
    break;
case 'firstsem':
    documentImage = currentUser.firstsem;
    documentAlt = 'First Sem';
    break;
case 'secsem':
    documentImage = currentUser.secsem;
    documentAlt = 'Second Sem';
    break;
case 'mscit':
    documentImage = currentUser.mscit;
    documentAlt = 'MS-CIT';
    break;
case 'cheque':
    documentImage = currentUser.cheque;
    documentAlt = 'CAN cheque';
    break;

// Add more cases for additional documents as needed
default:
    // Handle unknown document types
    simulateTyping('DocuGuard', `I don't have information about ${documentType}.`);
    return;
}

// Respond with the image of the requested document
const documentResponse = `
<div class="image-response">
    <p>Here is an image of your ${documentAlt}:</p>
    <img src="doc/${documentImage}" alt="${documentAlt}">
    <br>
    <button class="download-button" onclick="downloadJPG('${documentImage}', '${documentType}')">Download Image</button>
</div>
`;

// Simulate typing for the bot's response
simulateTyping('DocuGuard', documentResponse);

// Scroll to the recent bot message after a user message is sent
scrollToRecentBotMessage();
}




function updateSidebar() {
    const sidebar = document.getElementById('sidebar');
    if (currentUser) {
        sidebar.innerHTML = `
            <p>User: ${currentUser.name} (UserID: ${currentUser.id})</p>
            <button class="logout-button" onclick="logout()">Logout</button>
        `;
    } else {
        sidebar.innerHTML = 'User Information';
    }
}

// ...

function logout() {
    currentUser = null;
    // Redirect to the login page
    window.location.href = 'index.html';
}
function simulateTypings(sender, message, additionalClass = '') {
    const messageElement = document.createElement('div');
    messageElement.className = `message ${sender.toLowerCase()}-message bot-message ${additionalClass} typing`;
    chatMessages.appendChild(messageElement);
    
    // Use setTimeout to simulate faster typing effect
    let index = 0;
    const typingInterval = setInterval(() => {
    messageElement.innerHTML = `<strong>${sender}:</strong><br>${message.slice(0, index)}`;
    index++;
    
    if (index > message.length) {
        clearInterval(typingInterval);
        messageElement.classList.remove('typing');
        // Scroll to the bottom of the chat interface
        scrollToBottom();
    }
    }, 0.1); // Reduced interval time to make typing faster (change this value as needed)
    }


function simulateTyping(sender, message, additionalClass = '') {
const messageElement = document.createElement('div');
messageElement.className = `message ${sender.toLowerCase()}-message bot-message ${additionalClass} typing`;
chatMessages.appendChild(messageElement);

// Use setTimeout to simulate faster typing effect
let index = 0;
const typingInterval = setInterval(() => {
messageElement.innerHTML = `<strong>${sender}:</strong><br>${message.slice(0, index)}`;
index++;

if (index > message.length) {
    clearInterval(typingInterval);
    messageElement.classList.remove('typing');
    // Scroll to the bottom of the chat interface
    scrollToBottom();
}
}, 10); // Reduced interval time to make typing faster (change this value as needed)
}


function sendMessage() {
const userMessage = messageInput.value.trim();
if (userMessage !== '') {
    appendMessage('You', userMessage);
    handleBotResponse(userMessage.toLowerCase());
    messageInput.value = '';
    
    // Scroll to the recent bot message after a user message is sent
    scrollToRecentBotMessage();
}
}

function scrollToRecentBotMessage() {
const botMessages = document.querySelectorAll('.bot-message');
if (botMessages.length > 0) {
    const lastBotMessage = botMessages[botMessages.length - 1];
    lastBotMessage.scrollIntoView({ behavior: 'smooth' });
}
}







function downloadJPG(documentPath, documentType) {
if (currentUser && documentPath && documentType) {
const imgLink = document.createElement('a');
imgLink.href = `doc/${documentPath}`;
imgLink.download = `${currentUser.name}_${documentType}.jpg`;

// Append the link to the document
document.body.appendChild(imgLink);

// Trigger a click event on the link to start the download
imgLink.click();

// Remove the link from the document
document.body.removeChild(imgLink);
}
}











function appendMessage(sender, message, additionalClass = '') {
    const messageElement = document.createElement('div');
    messageElement.className = `message ${sender.toLowerCase()}-message ${additionalClass}`;
    messageElement.innerHTML = `<strong>${sender}:</strong><br>${message}`;
    chatMessages.appendChild(messageElement);

    // Scroll to the bottom of the chat interface
    scrollToBottom();
}

function scrollToBottom() {
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

function handleKeyPress(event) {
    if (event.key === 'Enter') {
        sendMessage();
    }
}

function toggleSidebar() {
    container.classList.toggle('open-sidebar');
    container.classList.toggle('open-sidebar-footer');
}

// Close sidebar when clicking outside of it
window.addEventListener('click', function (event) {
    if (!event.target.matches('#menu-btn') && container.classList.contains('open-sidebar') && container.classList.contains('open-sidebar-footer')) {
        container.classList.remove('open-sidebar');
        container.classList.remove('open-sidebar-footer');
    }
});
