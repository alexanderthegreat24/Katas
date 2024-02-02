let output = 'Please contact us for monthly bookings'
if (bookingDays > 30) {
    return output;
} else if (bookingDays < 30) {
  output = 'Your booking is being processed'
}
return output