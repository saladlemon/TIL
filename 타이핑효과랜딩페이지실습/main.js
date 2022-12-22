 let target = document.querySelector("#dynamic"); //dynamic을 가지고 있는 문서 객체를 선택해라
 let stringArr = ["Learn to HTML","Learn to CSS","Learn to Javascript","Learn to Python","Learn to Ruby"];
 let selectString = stringArr[Math.floor(Math.random()*stringArr.length)];
 //Math.floor: 소수점을 없앤다. Math.random: 랜덤의 숫자
 let selectStringArr = selectString.split("");//해당 문자열을 기준에 맞춰 분리해라


 function randomString(){
    let stringArr = ["Learn to HTML","Learn to CSS","Learn to Javascript","Learn to Python","Learn to Ruby"];
    let selectString = stringArr[Math.floor(Math.random()*stringArr.length)];
    let selectStringArr = selectString.split("");

    return selectStringArr;
 }


 //타이핑 리셋
 function resetTyping(){
    target.textContent = "";
    dynamic(randomString());
 }

 //한글자씩 텍스트 출력함수
function dynamic(randomArr){

    if(randomArr.length > 0){
        target.textContent += randomArr.shift();//배열 맨 앞부터 출력한다
        setTimeout(function(){
            dynamic(randomArr);
        },80);
    }else{
        setTimeout(resetTyping, 3000);
    }
}
dynamic(randomString());//dynamic을 호출할 때 랜덤배열을 매개변수로 전달할 것 입니다.

 //커서 깜빡임 효과
 function blink(){
    target.classList.toggle("active");
 }
 setInterval(blink, 500);