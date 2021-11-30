export const getSavedTournamentIds = () => {
    const savedBookingIds = localStorage.getItem('saved_tournaments')
      ? JSON.parse(localStorage.getItem('saved_tournaments'))
      : [];
  
    return savedBookingIds;
  };
  
  export const saveTournamentIds = (bookingIdArr) => {
    if (bookingIdArr.length) {
      localStorage.setItem('saved_tournaments', JSON.stringify(bookingIdArr));
    } else {
      localStorage.removeItem('saved_tournaments');
    }
  };
  
  export const removeBookingId = (bookingId) => {
    const savedBookingIds = localStorage.getItem('saved_tournaments')
      ? JSON.parse(localStorage.getItem('saved_tournaments'))
      : null;
  
    if (!savedBookingIds) {
      return false;
    }
  
    const updatedSavedBookingIds = savedBookingIds?.filter((savedBookingId) => savedBookingId !== bookingId);
    localStorage.setItem('saved_tournaments', JSON.stringify(updatedSavedBookingIds));
  
    return true;
  };