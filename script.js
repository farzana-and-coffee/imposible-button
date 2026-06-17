//Getting references from index.html
const introScreen = document.getElementById('intro');
const gameScreen = document.getElementById('game'); 

//after the intro, dispaly game screen
setTimeout(() => {
    introScreen.style.display = 'none';
    gameScreen.style.display = 'block';
}, 4300);

//get button
const button = document.getElementById('imp-button');

//game state
const gameState = [
    {bg: '#D15F43', btnColor: '#CDDB03' },   
    {bg: '#367091', btnColor: '#E4AFC2' },  
    {bg: '#43D15D', btnColor: '#E7CC00' },   
    {bg: '#FF7A0D', btnColor: '#FF7A0D' },   
    {bg: '#FFFFFF', btnColor: '#FF0000' },  
    {bg: '#004DFF', btnColor: '#03E1C7' },  
    {bg: '#FFE500', btnColor: '#FA7407' },  
    {bg: '#A14468', btnColor: '#FF8623' },   
    {bg: '#4DB9C5', btnColor: '#EE383B' },   
    {bg: '#701112', btnColor: '#FFFFFF' },   
    {bg: '#2D7C1D', btnColor: '#E3783F' },  
    {bg: '#FF88D5', btnColor: '#A0F190' },   
    {bg: '#72350F', btnColor: '#7687FB' },   
    {bg: '#F58D43', btnColor: '#DB41E4' }, 
    {bg: '#0F2459', btnColor: '#EBA972' },   
    {bg: '#199C54', btnColor: '#5D8BFF' },  
    {bg: '#AC29CD', btnColor: '#F7C26C' },  
    {bg: '#FFFFFF', btnColor: '#FFE500' },  
    {bg: '#7687FB', btnColor: '#FFE500' },  
    {bg: '#D980FF', btnColor: '#ED0202' },   
    {bg: '#B0F296', btnColor: '#F4BCF7' },   
    {bg: '#E75E08', btnColor: '#FBFF00' },  
    {bg: '#8B4141', btnColor: '#FFACDD' },
];

//track frame
let currentFrame = 0;

//function that moves the button to random spot
function moveButton(){
    const randomTop = Math.random() *80+10;
    const randomLeft =Math.random() *80+10;
    button.style.top = randomTop + '%';
    button.style.left = randomLeft+ '%';

}

// button run when the mouse hover the button
//button.addEventListener('mouseover', moveButton);

//ragbaiting messages
const messages = [
    "HAHAHA...LOSER🤣",
    "MY GRANDMA MOVES FASTER THAN YOU 🤪",
    "FINE I AM RIGHT HERE 👋🏻.",
    "WAIT !! \n WHERE AM I?? ",
    "Is that the best you've got? 😂👿 ",
    "TRY TRY BUT DONT CRY 😭",
    "Getting tired yet? I'm not 💅👿 ",
    "CLICK ME 🤪",
    "Pathetic. Again. 😤",
    "The audacity to keep trying 😂",
    "Your cursor needs glasses BUT your determination doesn't 👓",
    "Did you even TRY?? Do it again! 😂",
    "I'm insulted by how slow you are. CATCH ME 💅",
    "Your ancestors are CRINGING. Redeem yourself! 💀",
    "Your reaction time is a myth at this point 😂",
    "Your aim is somewhere in another dimension. Go get it! 🌌",
    "Eyes open. CLICK ME. 👀",
    "HAVEN’T YOU LEARNED YOUR LESSON YET, BOI",
    "Tragic aim. Legendary retry. GO. 🔥",
    "Threatening now. Catch me then. 😨",
    "You absolute menace. CLICK. 😈",
    "Getting warmer. Still bad. CLOSER. 🔥",
    "Horrible aim. GO. 😂"
];


//button click
function handleClick() {
    button.removeEventListener('click', handleClick);
    //button.removeEventListener('mouseover', moveButton);
    gameScreen.style.backgroundColor= gameState[currentFrame].bg;
    button.style.backgroundColor = gameState[currentFrame].btnColor;
    button.textContent = messages[currentFrame];
    currentFrame++;
    moveButton();

    if (currentFrame >= gameState.length){
        showWinScreen();
    } else{
        setTimeout(() => {
            button.addEventListener('click', handleClick);
            //button.addEventListener('mouseover',moveButton);
        }, 500);

    }
}

//click sounds
button.addEventListener('click', handleClick);

//show win screen 
function showWinScreen(){
    gameScreen.style.display ='none';
    const winScreen= document.getElementById('win');
    winScreen.style.display='flex';
    typeWriter("..WOW 😶. You actually did it😑. I'm not impressed. Ok maybe a little😏. NO I'M NOT 😤", "win-message");
}

//animation effect for win message
function typeWriter(text, elementID){
    const element = document.getElementById(elementID);
    element.textContent = '';
    let index =0;
    const interval= setInterval(() => {
        element.textContent += text[index];
        index++;
        if(index >= text.length) {
            clearInterval(interval)
        }
    }, 67);
}
