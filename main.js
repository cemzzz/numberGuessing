// 랜덤번호 지정
// 사용자가 번호를 입력 그리고 go 버튼 클릭하면 게임 시작
// 랜덤 번호를 맞추면 맞췄습니다.
// 랜덤번호가 유저번호보다 작다 Down 알림
// 랜덤번호가 유저번호보다 크면 Up 알림
// 리셋 버튼 클릭 시 게임 리셋
// 게임의 기회는 총 5회 (5회 이내로 못맞출 시 게임 진행 불가)
// ㄴ> go 버튼 비활성화


// 예외사항
// 1~100 범위 밖에 숫자 입력시 알려줌 / 기회 횟수 깎이지 않음
// 입력한 숫자 또 입력 시 알림 출력 / 기회 횟수 깎이지 않음

let randomNum = 0; // 랜덤번호
let playButton = document.getElementById('play-Button')
let userNumber = document.getElementById('user-Number') //유저가 입력한 번호
let resultCheck = document.getElementById('result-Check')
let resetButton = document.getElementById('reset-Button')
let opportunity = 5; // 기회 숫자
let gameOver = false;
let opportunityCheck = document.getElementById('opportunity-Check') // 남은 기회 횟수

playButton.addEventListener('click', playGame)
resetButton.addEventListener('click', resetGame)

function comRandomNum() {
    randomNum = Math.floor(Math.random() * 100) + 1;
    console.log(randomNum);
}

//게임 진행
function playGame(){
    let userValue = userNumber.value;

    opportunity--;
    opportunityCheck.textContent= `남은 횟수: ${opportunity}`

    console.log('기회 횟수' + opportunity)
    
    if(userValue == randomNum) {
        resultCheck.textContent = '맞추셨습니다! 축하합니다.'
    } else if (userValue >= randomNum) {
        resultCheck.textContent = 'Up!'
    } else if (userValue <= randomNum) {
        resultCheck.textContent = 'Down!'
    }

    if(opportunity < 1) {
        gameOver = true
    }

    if (gameOver == true) {
        playButton.disabled = true
        resultCheck.textContent = 'GameOver 못맞췄찌롱~'
    }
}

//게임 리셋 
function resetGame(){
    userNumber.value = ''
    comRandomNum()
    resultCheck.textContent = '결과가 여기 나옵니다.'
}

comRandomNum()