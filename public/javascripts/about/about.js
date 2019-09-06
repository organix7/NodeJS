var about = (session)=>{var socket = io()

socket.on('connect',()=>{
  socket.emit('getStatus',session)
})}
