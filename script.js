//Game Logics
let cScoreCount = 0;
let uScoreCount = 0;
let computerScore = document.getElementById('computerScore');
let userScore = document.getElementById('userScore');
computerScore.innerText = '0'
userScore.innerText = '0'
let myFunc1 = ()=>{
   
    let compNum = Math.floor(Math.random()*3)
    let userRock = document.getElementById('userImg').src = 'imgs/rock.png';
    if(compNum == 0){
        let compRock = document.getElementById('compImg').src = 'imgs/rock.png';
        if(userRock && compRock){
            document.getElementById('gameResult').innerText = 'Match Draw!';
        }
    }
    if(compNum == 1){
        let compPaper = document.getElementById('compImg').src = 'imgs/paper.png';
        if(userRock && compPaper){
            document.getElementById('gameResult').innerText = 'Oops You Lose!';
            cScoreCount += 1;
            computerScore.innerText = cScoreCount
        }
    }
    if(compNum == 2){
        let compScissor = document.getElementById('compImg').src = 'imgs/scissor.png';
        if(userRock && compScissor){
            document.getElementById('gameResult').innerText = ' Congratulaion You Wins'
            uScoreCount += 1;
            userScore.innerText = uScoreCount
        }
    }
}
let myFunc2 = ()=>{
    let compNum = Math.floor(Math.random()*3)
    let userPaper = document.getElementById('userImg').src = 'imgs/paper.png';
    if(compNum == 0){
        let compRock = document.getElementById('compImg').src = 'imgs/rock.png';
        if(userPaper && compRock){
            document.getElementById('gameResult').innerText = 'Congratulation You Win.'
            uScoreCount += 1;
            userScore.innerText = uScoreCount
        }
    }
    if(compNum == 1){
        let compPaper = document.getElementById('compImg').src = 'imgs/paper.png';
        if(userPaper && compPaper){
            document.getElementById('gameResult').innerText = 'Match Draw!'
        }
    }
    if(compNum == 2){
        let compScissor = document.getElementById('compImg').src = 'imgs/scissor.png';
        if(userPaper && compScissor){
            document.getElementById('gameResult').innerText = 'Oops You lose!'
            cScoreCount += 1;
            computerScore.innerText = cScoreCount
        }
    }
}
let myFunc3 = ()=>{
    let compNum = Math.floor(Math.random()*3)
    let userScissor = document.getElementById('userImg').src = 'imgs/scissor.png';
    if(compNum == 0){
        let compRock = document.getElementById('compImg').src = 'imgs/rock.png';
        if(userScissor && compRock){
            document.getElementById('gameResult').innerText = 'Oops You Lose!'
            cScoreCount += 1;
            computerScore.innerText = cScoreCount
        }
    }
    if(compNum == 1){
        let compPaper = document.getElementById('compImg').src = 'imgs/paper.png';
        if(userScissor && compPaper){
            document.getElementById('gameResult').innerText = 'Congratulation You Win.'
            uScoreCount += 1;
            userScore.innerText = uScoreCount
        }
    }
    if(compNum == 2){
        let compScissor = document.getElementById('compImg').src = 'imgs/scissor.png';
        if(userScissor && compScissor){
            document.getElementById('gameResult').innerText = 'Match Draw!'
        }
    }
}

function gameReset(){
    cScoreCount = 0;
    uScoreCount = 0;
    userScore.innerText = '0';
    computerScore.innerText = '0';

    document.getElementById('userImg').src = '';
    document.getElementById('compImg').src = '';
    document.getElementById('gameResult').innerText = '';
}
let startBtn = document.getElementById('startBtn');
startBtn.addEventListener('click', (e)=>{
   document.querySelector('.container').style.display = 'block';
   startBtn.style.display = 'none'
})
let exitBtn = document.getElementById('exit');
exitBtn.addEventListener('click', ()=>{
    document.querySelector('.container').style.display = 'none';
   startBtn.style.display = 'block'
   gameReset();
})