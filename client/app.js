let socket = io();

$('form').submit(() => {
    let msg = $('#message').val();
    let initial = $('#initials').val();
    let message = {msg: msg, initial: initial};
    socket.emit('message', message);
    $('#message').val('');
    $('#initials').val('');
    return false;
});

socket.on('message', (msg) => {
    $('<li>').text(msg.initial + ': ' + msg.msg).appendTo('#history');
});