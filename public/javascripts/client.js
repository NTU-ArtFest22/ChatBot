var socket = io();

var f = function () {
    var msg = $('#message-box').val();
    if(!msg)
      return false;
    socket.emit('chat', msg);
    $('#messages').append($('<p>').text(msg).css('text-align','right'));
    $('#message-box').val('');
    return false;
};

document.getElementById('message-box').onkeydown = function(e){
  if(e.keyCode == 13){
    f(); 
  }
};
$('#send-message-btn').click(f());
socket.on('chat', function (msg) {
  $('#messages').append($('<p>').text(msg));
});
