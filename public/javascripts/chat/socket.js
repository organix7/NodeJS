var chatting = (session)=>
  {
    (($)=>{
      var socket = io()
      var color
      var textValue

      var items = document.querySelectorAll("li");
      var last = items[items.length-2];

      if(last)
        last.scrollIntoView();

      socket.on('connect',()=>{
        socket.emit('getStatus',session)
      })

      $('input').keypress((e)=>{
      	var keycode = e.keyCode

      	if(keycode == '13'){
          textValue = $('input').val().trim()===''?false:$('input').val()

          if(textValue){
            textValue=textValue.replace(/(.{100})(?=.)/g,"$1<br>")
            socket.emit('message',{mail: session,text: textValue})
            $('input').val('')
          }
        }
      });

      $('button').click((e)=> {
        textValue = $('input').val().trim()===''?false:$('input').val()

        if(textValue){
          textValue=textValue.replace(/(.{100})(?=.)/g,"$1<br>")
          socket.emit('message',{mail: session,text: textValue})
          $('input').val('')
        }
      })

      socket.on('broadcast',(message)=>{
        color = message.mail=== session?"green":"blue"
        display(color,message.text,message.mail)

        var items = document.querySelectorAll("li");
        var last = items[items.length-1];
        last.scrollIntoView();
      })

      var display=(color,text,mail)=>{
        if(color==="green")
          $('#main').append(' <li class="d-flex justify-content-between mb-4">'+
              '<div class="chat-body green p-3 z-depth-1">'+
                '<div class="header">'+
                  '<strong class="primary-font">'+filterXSS(mail)+'</strong>'+
                '</div>'+
                '<hr class="w-100">'+
                '<p class="mb-0">'+
                   filterXSS(text) +
                '</p>'+
              '</div>'+
            '</li>')
        else
        $('#main').append(' <li class="d-flex justify-content-between mb-4 pb-3">'+
          '<span class="ml-lg-5">'+
            '<div class="chat-body blue p-3 ml-2 z-depth-1">'+
              '<div class="header">'+
                '<strong class="primary-font">'+filterXSS(mail)+'</strong>'+
              '</div>'+
              '<hr class="w-100">'+
              '<p class="mb-0">'+
                 filterXSS(text) +
              '</p>'+
            '</div>'+
          '</li>')
      }
    })(jQuery)
  }
