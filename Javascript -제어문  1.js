//토글이란 하나의 버튼으로 현재 상태에 변화를 주는 기능을 가지도록 하는 것이다 . 
//예를 들어 하나의 버튼으로 현재 상태가 night라면 day모드로 day모드라면 night모드로 바꿔주는 기증을 가지는 것

//불리언과 비교연산자 
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>Comparison operator & Boolean</h1>
    <h2>===</h2>
    <h3>1===1</h3>
    <script>
        document.write(1===1);
    </script> 

    <h3>1===2</h3>
    <script>
        document.write(1===2);
    </script> 

    <h3>1&lt;2</h3>
    <script>
        document.write(1<2);
    </script> 

    <h3>1&lt;1</h3>
    <script>
        document.write(1<1);
    </script> 
</body>
</html>

//조건문
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title></title>
</head>
<body>
    <h1>Conditional statements</h1>
    <h2>Program</h2>
    <script>
        document.write("1<br>");
        document.write("2<br>");
        document.write("3<br>");
        document.write("4<br>");
    </script>
    <h2>IF-true</h2>
    <script>
        document.write("1<br>");
        if(true){
            document.write("2<br>");
        }else{
            document.write("3<br>");
        }
        document.write("4<br>");
    </script>

    <h2>IF-Flase</h2>
    <script>
        document.write("1<br>");
        if(false){
            document.write("2<br>");
        }else{
            document.write("3<br>");
        }
        document.write("4<br>");
    </script>
</body>
</html>


//조건문을 활용한 토글 만들기 
// JavaScript  
<input id = "night_day" type ="button" vlaue = "night" onclick="
  if(document.querySelector('#night_day').value === 'night'){
    document.querySelector('body').style.background = 'black'
    document.querySelector('body').style.color = 'white'
    document.querySelector('#night_day').value === 'day'
  }  else{
    document.querySelector('body').style.background = 'white
    document.querySelector('body').style.color = 'black'
    document.querySelector('#night_day').value === 'night'
  }
  

//리팩토링(중복의 제거)
<input id = "night_day" type ="button" vlaue = "night" onclick="
  if(document.querySelector('#night_day').value === 'night'){
    document.querySelector('body').style.background = 'black'
    document.querySelector('body').style.color = 'white'
    document.querySelector('#night_day').value === 'day'
  }  else{
    document.querySelector('body').style.background = 'white
    document.querySelector('body').style.color = 'black'
    document.querySelector('#night_day').value === 'night'
  }
  
  <input id = "night_day2" type ="button" vlaue = "night" onclick="
  if(document.querySelector('#night_day2').value === 'night'){
    document.querySelector('body').style.background = 'black'
    document.querySelector('body').style.color = 'white'
    document.querySelector('#night_day2').value === 'day'
  }  else{
    document.querySelector('body').style.background = 'white
    document.querySelector('body').style.color = 'black'
    document.querySelector('#night_day2').value === 'night'
  }
  
//this 사용하기.
  <input type ="button" vlaue = "night" onclick="
  if(this.value === 'night'){
    document.querySelector('body').style.background = 'black'
    document.querySelector('body').style.color = 'white'
    this.value === 'day'
  }  else{
    document.querySelector('body').style.background = 'white
    document.querySelector('body').style.color = 'black'
    this.value === 'night'
  }
  
  //target 사용하기.
  <input type ="button" vlaue = "night" onclick="
  var target = document.querySelector('body')
  if(this.value === 'night'){
    target.style.background = 'black'
    target.style.color = 'white'
    this.value === 'day'
  }  else{
    target.style.background = 'white
    target.style.color = 'black'
    this.value === 'night'
  }
  
  //반복문 예고
  
  같은 작업을 반복적으로 실행해주는 자바스크립트의 문법이다. 
















































