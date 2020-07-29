
function call_ajax() {
    // 입력 텍스트 상자에서 키보드로 입력이 들어갔을 때 호출
    // 모든 키에 대해서 처리하는게 아니라 엔터키일 때만 처리
    if ( event.keyCode == 13){
        //만약 입려된 키가 엔터키이면 이 부분을 수행하게 되요!
        //서버쪽 프로그램을 호출해서 결과를 받아와요!
        //jquery를 이용해서 AJAX를 호출해 처리해 보아요!!
        //ajax의 인자로 javascript 객체를 인자로 넣어줘요!
        //javascript 객체는 => { key : value, key : value,....}
        //data : 서버프로그램에게 넘겨줄 데이터들...
        $.ajax({
            async : true,     //비동기 방식의 호출(default)
            url : "http://192.168.0.200:8080/bookSearch/search",
            data : {
                keyword : $("input[type=text]").val()              //key와 value의 쌍의 객체로 넘겨줌
            },
            type : "GET",      //호출하는 타입은 GET
            timeout : 3000,   //만약 3초안에 서버로부터 결과가 안오면 잘못된 호출로 인식하겠어!!
            dataType : "json",    //결과 json을 javascript객체로 변환.
            success : function (result) {

                $("tbody").empty()


               //each함수 사용해서 반복문 처리
                $.each(result,function (idx,item) {
                    var tr = $("<tr></tr>")   //<tr></tr>
                    var imgTd = $("<td></td>")    //<td></td>
                    var img = $("<img />").attr("src", item.img)    //<img src=~~~>
                    imgTd.append(img)    //자식으로 만들기
                    var titleTd = $("<td></td>").text(item.title)
                    var authorTd = $("<td></td>").text(item.author)
                    var priceTd = $("<td></td>").text(item.price)
                    var delTd = $("<td></td>")
                    var delBtn = $("<input />").attr("type","button").attr("value","삭제")   // <input type="button" value="삭제"~~>
                    delBtn.on("click", function () {
                        // 현재 클릭된 버튼에 대한 책 정보를 찾아서 화면에서 삭제
                        // this :  현재 이벤트가 발생된 객체를 지칭!
                        $(this).parent().parent().remove()      // td(parent) => tr(parent)



                    })    //on()은 ~할 때
                    delTd.append(delBtn)


                    tr.append(imgTd)     //자식으로 만들기
                    tr.append(titleTd)
                    tr.append(authorTd)
                    tr.append(priceTd)
                    tr.append(delTd)

                    $("tbody").append(tr)

                })


               //for문 이용해서 반복문 처리
               /* for(i=0; i<result.length; i++) {

                    var tr = $("<tr></tr>")   //<tr></tr>
                    var imgTd = $("<td></td>")    //<td></td>
                    var img = $("<img />").attr("src", result[i].img)    //<img src=~~~>
                    imgTd.append(img)    //자식으로 만들기
                    var titleTd = $("<td></td>").text(result[i].title)
                    var authorTd = $("<td></td>").text(result[i].author)
                    var priceTd = $("<td></td>").text(result[i].price)
                    var buttTd = $("<td></td>")
                    var butt = $("<button />").text("del")
                    buttTd.append(butt)


                    tr.append(imgTd)     //자식으로 만들기
                    tr.append(titleTd)
                    tr.append(authorTd)
                    tr.append(priceTd)
                    tr.append(buttTd)

                    $("tbody").append(tr)

                }  */

                //alert(result[0].title)    // 제목

            },
            error : function (error) {
                alert("서버 호출 실패!!")
            }

        })

    }
}