var statusUsers = (session) => {
  (($)=>{
    var socket = io()
    var tabMail=[]

    socket.on('connect', function(){
      socket.emit('getStatus',session)

      socket.on('userConnected',(usersOnline)=>{
          for (user of usersOnline) {
            $('td[name="'+user+'"]').addClass("green").text("Online")
          }
      })

      socket.on('userDisconnected',(user)=>{
          $('td[name="'+user+'"]').removeClass("green").addClass("red").text("Offline")
      })
    })
  })(jQuery)
}
