
// function print_text() {
    // //버튼을 눌렀을 때 실행할 코드를 기술 해요!!
    // alert("호출되요!")
    //
    // //id 호출
    // console.log($("#apple").text())
    // console.log($("#pineapple").text())
    //
    // //class 호출
    // console.log($("ul > li.myList") .text())   //ul찾고 그 안의 li찾고 그 안의 class인 myList 찾아라
    // console.log($("ul > li[class]").text())    //ul찾고 그 안의 li중에 class 속성 찾아라
    //                                               //.text()는 태그와 태그 사이엥 있는 글자 땡겨옴
//
//     console.log($("input[type=text]").val())      //input 태그중에 타입이 텍스트인거 찾아봐
//                                                    // .val()은 사용사가 체크한 양식을 땡길 때
//
//         console.log($("ol > li.myList:first").text())      //:first는 선택된 것중에 첫번째
//         console.log($("ol > li.myList:last").text())        //:last는 선택된 것중에 마지막
//         console.log($("ol > li.myList:first + li").text())    //:first 다음 li
//         console.log($("ol > li.myList:nth-child(2)").text())    //:nth-child()는 몇번째 자식(순번)이냐
//
//     $("input[type=text]").attr("size",50)   //.attr("")는 속성 중에 사이즈라는 속성을 찾아 크기를 50으로 바꾼다
//
// }
//
// function my_func() {
//      //alert("과일이 바뀌었어요!")
//      //select box에서 과일이 바뀌면 실핼되요!
//      var fruit = $("select > option:selected").text()    //:selected는 내가 선택한 옵션을 지정해서 실행해라
//      var my_list = $("ul > li")
//
//      my_list.each(function(idx, item) {
//        // console.log($(item).text())
//          if($(item).text() == fruit) {
//              $(item).css("color","red")
//          } else {
//              $(item).css("color","black")
//          }
//      })     //.each는 for문 도는 매소드!, 자바스크립트에서 람다 함수는 함수의 이름이 없으므로 function()
//             //idx는 순번, item은 지금 뽑아서 순번을 돌리는 객체
//
//
// }









