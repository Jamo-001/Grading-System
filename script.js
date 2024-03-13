function checkScore() {
    var userScore = Number(score.value)
    // console.log(userScore);
if (userScore >= 0 && userScore < 40) {
    console.log('F-Fail');
    result.innerHTML = 'F-Fail'
    var songFail = new Audio('Audio/jesus.mp3')
    songFail.play()
} else if (userScore <45){
    console.log('E-Pass');
    result.innerHTML = 'E-Pass'
    var songPass = new Audio('Audio/play.mp3')
    songPass.play()
} else if (userScore <50) {
    console.log('D-Average');
    result.innerHTML = 'D-Average'
    var songAverage = new Audio('Audio/sorry.mp3')
    songAverage.play()
} else if (userScore <60) {
    console.log('C-Credit');
    result.innerHTML = 'C-Credit'
    var songCredit = new Audio('Audio/goodresult.mp3')
    songCredit.play()
} else if (userScore <70) {
    console.log('B-Good');
    result.innerHTML = 'B-Good'
    var songGood = new Audio('Audio/small.wav')
    songGood.play()
} else if (userScore >= 70 && userScore <=100){
    console.log('A-Excellent');
    result.innerHTML = 'A-Excellent'
    var songExcellent = new Audio('Audio/tadaa.mp3')
    songExcellent.play()
} else if (userScore>100){
    console.log('Invalid Answer');
    result.innerHTML = 'Invalid Answer'
    var songInvalid = new Audio('Audio/Fail-2.mp3')
    songInvalid.play()
} else if (userScore<0){
    console.log('Invalid Answer');
    result.innerHTML = 'Invalid Answer'
    var songInvalid = new Audio('Audio/Fail-2.mp3')
    songInvalid.play()
}
}