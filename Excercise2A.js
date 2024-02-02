
function checkLottery(ticketNumber, winningTicket) {
    var message = 'Winner';
    if (ticketNumber === winningTicket) {
        return message
    } else {
        return 'Loser';
    } 
};
