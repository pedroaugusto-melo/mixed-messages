const messages = ['Success is not final, failure is not fatal: it is the courage to continue that counts. WINSTON CHURCHILL', 
'What you get by achieving your goals is not as important as what you become by achieving your goals. ZIG ZIGLAR', 
'Life is like riding a bicycle. To keep your balance, you must keep moving. ALBERT EINSTEIN', 
'You must do the things you think you cannot do. ELEANOR ROOSEVELT', 
'Be the change that you wish to see in the world. MAHATMA GHANDI', 
'If I cannot do great things, I can do small things in a great way. MARTIN LUTHER KING JR', 
'You are enough just as you are. MEGHAN MARKLE', 
'The bad news is time flies. The good news is you\'re the pilot. MICHAEL ALTSHULER', 
'The best way to get started is to quit talking and begin doing. WALT DISNEY', 
'We generate fears while we sit. We overcome them by action. DR HENRY LINK'];

let randomMessageParts = [];

const selectRandomMessages = () => {
    do{
        randomMessageParts = [];

        for(let i = 0; i< 3; i++){
            randomMessageParts.push(messages[Math.floor(10 * Math.random())]);
        }
    } while(isRepeatedMessages(randomMessageParts));
};

const isRepeatedMessages = inputMessage => {
    let isRepeated = false;

    for(let i = 0; i< inputMessage.length && isRepeated === false; i++){
        for(let j = 0; j < inputMessage.length && isRepeated === false; j++){
            if(i == j) j++;
            if(inputMessage[i] == inputMessage[j]) isRepeated = true;
        }
    }

    return isRepeated;
};

selectRandomMessages();

const randomMessage = randomMessageParts.join('\n');

console.log("You random message is: \n")
console.log(randomMessage);