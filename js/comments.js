
    $(function() {
        $("#send").click(function(){
            var author = $("#author").val();
            var message = $("#message").val();
            $.ajax({
                type: "POST",
                url: "sendMessage.php",
                data: {"author": author, "message": message},
                cache: false,
                success: function(response){
                    var messageResp = new Array('Ваше сообщение отправлено','Сообщение не отправлено Ошибка базы данных','Нельзя отправлять пустые сообщения');
                    var resultStat = messageResp[Number(response)];
                    if(response == 0){
                        $("#author").val("");
                        $("#message").val("");
                        $("#commentBlock").append("<div class='comment'>Автор: <strong>"+author+"</strong><br>"+message+"</div>");
                    }
                    $("#resp").text(resultStat).show().delay(1500).fadeOut(800);

                }
            });
            return false;

        });
    });
