// 함수
function showContent(num) {
    $('article h2').html(data[num].content);
    $('article p').html(data[num].author);
  }

  // 내용을 더 추가해 보세요. -> 3개 추가(총6개)
  // 시작할때 첫 번째 명언이 표시됨
  var num = 0;
   function nextContent(){
       num++;
       //마지막 체크
       if(num > 2) {num = 0;}
       showContent(num);
       console.log(num);
   }
   function prevContent(){
    num++;
    //마지막 체크
    if(num < 0 ) {num = data.length - 1 ;}
    showContent(num);
    console.log(num);
}


