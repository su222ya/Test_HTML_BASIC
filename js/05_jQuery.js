

// jQuery CDN응 이용했기 때문에 jQuery code를 사용할 수 있어요!

//button을 클릭하면 아래의 함수가 호출되요!
function my_func() {
    // 0. jQuery를 공부할 때 가장 먼저 배워야 하는건... selector

    // 1. 전체 선택자(universal selector)
    //$("*").css("color","red")  //$("selector"), 모든 element를 다 선택(*)해서 css를 이용해 빨간색으로 바꿔라

    // 2. 태그 선택자(tag selector)
    //$("li").remove()           //li 태그만 싹 다 선택

    // 3. 아이디 선택자(id selector)   // id는 동일한 이름이면 안된다!
    //$("#haha").text()  //인자가 없으면 값을 알아오라는 의미
    //$("#haha").text("제주")   // 인자가 있으면 값을 변경하라는 의미

    // 4. 클래스 선택자(class selector)     //class 이름이 같아도 된다!
    //$(".region").css("background-color","yellow")     //선택된 class를 찾아서 색을 바꿔라

    // 5.구조 선택자(자식 선택자 후손 선택자)
    //$("ol > *")          //ol의 자식으로 있는 것 싹 다 선택해라
    // $("ol > li").css("color","steelblue")        //ol의 자식으로 있는 것 중 li
                                                   // > 자식 선택자
    // $("div li").css("color","pink")     // div의 후손으로 있는 li

    // 6. 구조 선택자 (형제 선택자)
    //$("#haha + li").remove() //아이디가 haha인것 찾고 그다음에 나오는 거 찾아
    //$("#hong ~ li").remove()   //아이디가 hong인걸 찾아서 그 뒤에 모든 형제 찾아

    // 7. 속성 선택자
    //$("[id]").css("color","yellow")   // []가 속성의 의미
    //$("[id=haha]").css("color","yellow")  // 더 자세히 찾을 수 있다

    //이 7가지를 조합하면 왠만한 element는 지정하는게 가능!!

}