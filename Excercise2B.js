function getBookingMessage(bookingDays) {
    
        let output = '';
        
        if (bookingDays > 30) {
            return output = 'Please contact for monthly bookings';

        } else if (bookingDays < 30) {
          return output = 'Your booking is being processed';

        }
        
        return output
        }