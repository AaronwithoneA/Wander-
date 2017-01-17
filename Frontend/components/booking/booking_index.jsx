import React from 'react';

class BookingIndex extends React.Component {

  componentDidMount () {
    this.props.fetchBookings();
  }


  // formatDate (d) {
  //   return (
  //     d.getDate()  + "-" + (d.getMonth()+1) + "-" + d.getFullYear() + " " +
  //     d.getHours() + ":" + d.getMinutes()
  //   );
  // }

  render () {
    const bookings =  <div>
                        <ul className="booking-index-container">
                        {this.props.bookings.map((booking, idx) =>(
                          <li className="booking-box" key={idx}>
                            <img className="booking-image"src={booking.dwellingImage}></img>
                            <div className="booking-info">
                              <div className="booking-location">
                                {booking.dwellingLocation}
                              </div>
                              <div className="booking-dates-guest">
                                {booking.start_date} -- {booking.end_date.toString()}
                              </div>
                              <div className="booking-dates-guest">
                                {booking.guest_number} guests
                              </div>
                              <h4 className="booking-title">
                                {booking.dwellingTitle}
                              </h4>
                            </div>
                          </li>
                        ))}
                        </ul>
                      </div>;
    console.log(this.props);
    return (this.props.bookings ? bookings : <div></div>);
  }
}

export default BookingIndex;