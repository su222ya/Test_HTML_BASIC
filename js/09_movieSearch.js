

function box_office() {

   var search_date = $("input[type=date]").val()
    search_date = search_date.replace(/-/gi,"")

        $.ajax({
            async: true,     //비동기 방식의 호출(default)
            url: "http://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?",
            data: {
                key: "6b69b6b4860939cddfcd92960fb5e428",
                targetDt: search_date            //key와 value의 쌍의 객체로 넘겨줌
            },
            type: "GET",      //호출하는 타입은 GET
            timeout: 3000,   //만약 3초안에 서버로부터 결과가 안오면 잘못된 호출로 인식하겠어!!
            dataType: "json",    //결과 json을 javascript객체로 변환.
            success: function (result) {


                $("tbody").empty()

                var tmp = result["boxOfficeResult"]["dailyBoxOfficeList"]

                $.each(tmp, function (idx, item) {
                    var tr = $("<tr></tr>")   //<tr></tr>
                    var imgTd = $("<td></td>")    //<td></td>
                    var rankTd = $("<td></td>").text(item.rank)
                    var movieNmTd = $("<td></td>").text(item.movieNm)
                    var salesAccTd = $("<td></td>").text(item.salesAcc)
                    var audiAccTd = $("<td></td>").text(item.audiAcc)
                    var buttTd = $("<td></td>")
                    var butt = $("<input />").attr("type", "button").attr("value", "상세정보")
                    var code = item.movieCd
                    butt.on("click", function () {

                        $.ajax({
                            async: true,     //비동기 방식의 호출(default)
                            url: "http://www.kobis.or.kr/kobisopenapi/webservice/rest/movie/searchMovieInfo.json",
                            data: {
                                key: "6b69b6b4860939cddfcd92960fb5e428",
                                movieCd: code            //key와 value의 쌍의 객체로 넘겨줌
                            },
                            type: "GET",      //호출하는 타입은 GET
                            timeout: 3000,   //만약 3초안에 서버로부터 결과가 안오면 잘못된 호출로 인식하겠어!!
                            dataType: "json",    //결과 json을 javascript객체로 변환.
                            success: function (result) {

                                var tmp2 = result["movieInfoResult"]["movieInfo"]

                                var gen1=""
                                var direc1=""
                                var act1=""

                                $.each(tmp2["genres"], function (idx, item) {
                                    gen1 += item.genreNm

                                })

                                $.each(tmp2["directors"], function (idx, item) {
                                    direc1 += item.peopleNm

                                })

                                $.each(tmp2["actors"], function (idx, item) {
                                    act1 += item.peopleNm

                                })

                                alert(tmp2["movieNm"]+"\n"+
                                    tmp2["prdtYear"]+"\n"
                                    +gen1+"\n"
                                    +direc1+"\n"
                                    +act1)



                            },
                            error : function (error) {
                                alert("서버 호출 실패!!")
                            }


                        })
                })



                        $.ajax({
                            async : true,    //동기 or 비동기
                            url : "https://dapi.kakao.com/v2/search/image",         //호출할 서버쪽 프로그램 URL
                            data : {
                                query : movieNmTd.text() + " 공식 포스터 ",   //아이디가 movie_name인 것을 찾아서 얘가 갖고있는 값
                                sort : "accuracy"
                            },
                            beforeSend : function(xhr) {
                                xhr.setRequestHeader("Authorization",
                                    "KakaoAK 6f677ee6d9d13ab783818747f0eba75c")
                            },
                            type : "GET",
                            timeout : 3000,
                            daxtaType : "json",
                            success : function (result) {
                                //alert("gfgsfsfd")
                                var img_list = result.documents
                                var img = $("<img />").attr("src", img_list[0].thumbnail_url)
                                imgTd.append(img)


                            },
                            error : function (error) {
                                alert("실패@")
                            }

                        })


                buttTd.append(butt)


                tr.append(rankTd)     //자식으로 만들기
                tr.append(imgTd)
                tr.append(movieNmTd)
                tr.append(salesAccTd)
                tr.append(audiAccTd)
                tr.append(buttTd)


                $("tbody").append(tr)

                })
            }
        })








}

function search_image() {

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
            var img = $("<img />").attr("src", immg_list[0].thumbnail_url)


        },
        error : function (error) {
            alert("실패@")
        }

    })

}






