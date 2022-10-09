$("#profissoes").focusin(function(){
    var urlStr = "http://localhost/lista-profissoes/json.php";
    $.ajax({
      url : urlStr,
      type : "get",
      dataType : "json",
      success : function(data){
        console.log(data);
        if (data.length > 0){
             var option = '';
             $('#profissoes').empty();
             $.each(data, function(i, obj){
                   option += '<option value="'+obj.dados+'">'+obj.dados+'</option>';
             })
           $('#profissoes').html(option).show();
        }else{
             $('#profissoes').empty();
              $('#profissoes').html("<option>sem funções no momento</optinon>");
             $('#mensagem_select').html('<span>Funções não encontradas!</span>').show();
        }
      },
      error : function(erro){
        console.log(erro);
      }
    });
   });