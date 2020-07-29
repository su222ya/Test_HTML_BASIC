
function search_image(){
    //enter key를 입력하면.
    if (event.keyCode == 13){

        //alert("검색 시작!")
        //AJAX를 이용해서 다음쪽 Open API를 호출
        $.ajax({
            async : true,    //동기 or 비동기
            url : "https://dapi.kakao.com/v2/search/image",         //호출할 서버쪽 프로그램 URL
            data : {
                query : $("#movie_name").val() + " 포스터 ",   //아이디가 movie_name인 것을 찾아서 얘가 갖고있는 값
                sort : "accuracy"
            },
            beforeSend : function(xhr) {
                xhr.setRequestHeader("Authorization",
                    "KakaoAK 6f677ee6d9d13ab783818747f0eba75c")
            },
            type : "GET",
            timeout : 3000,
            dataType : "json",
            success : function (result) {
                var immg_list = result.documents
                var li = $("<li></li>")
                var img = $("<img />").attr("src", immg_list[0].thumbnail_url)
                    .addClass("myImage")
                li.append(img)
                $("ul").append(li)



            },
            error : function (error) {
                alert("실패@")
            }

        })

    }
}