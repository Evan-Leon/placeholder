import React, {useState} from 'react';
// import MyCalendar from './calendar';
import Calendar from 'react-calendar';
import MyDateRange from './date_range';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faHome, faUsers, faClipboardList, faHandSparkles } from '@fortawesome/free-solid-svg-icons';
import ListingMap from '../listings_map/listing_map';


class ListingShow extends React.Component {
    constructor(props){
        super(props);
        // this.changeDate = this.changeDate.bind(this)
        this.state = {
            checkin: new Date(),
            checkout:new Date()
        }
    }

    componentDidMount(){
        this.props.fetchListing(this.props.match.params.listingId);
    }

    // changeDate(date){
    //     date => {debugger}
    // }



    render(){
        const { listing } = this.props;
        // const [value, onChange] = useState(new Date());
        if (!listing) return null;
        return(
            <div className= "listing-show-box">
                <div className="top-show">
                    <h3 className="listing-title">{listing.title}</h3>

                    <p className="reviews">[REVIEW SCORE] Location</p>
                    <br />
                    <div className="photo-box">
                        <p>[PlaceHolderPhoto]</p>
                    </div>
                </div>
                <br />
                <div className="info-box">
                    <h3 className="host-title">Home hosted by {listing.hostId}</h3>
                    <div className="border-line"></div>
                    <br />
                    <p> <FontAwesomeIcon icon={faHome}  />  Number of beds: {listing.numBeds}</p>
                    <p> <FontAwesomeIcon icon={faUsers}  />  Number of guests: {listing.guestNum}</p>
                    <p> <FontAwesomeIcon icon={faClipboardList}  />     House Rules</p>
                    <p> <FontAwesomeIcon icon={faHandSparkles}  /> Enhanced Clean </p>
                    <br />
                </div>
                
                {/* <p>${listing.price}/night</p> */}

                <div className='description-box-show'>
                    <p className="show-description"> {listing.description}</p>
                </div>

                <div className="calendar-box">
                    <h3>Select check-in date</h3>
                    <br />
                    < MyDateRange onChange={(e) => {debugger}}   className="calendar" />
                </div>

                <div className="review-container">
                    <h3>Score [5/5]</h3>
                    <div className="review-box">
                        <p>Loved it!</p>
                        <p>Didn't want to Leave!</p>
                        <p>The host was the BEST!</p>
                        <p>Beautiful Location!</p>
                        <p>Felt Like Home!</p>
                        <p>Take me back!</p>
                    </div>
                </div>

                <div className="show-map">
                    {/* < ListingMap /> */}
                    [Map Place Holder]
                </div>

               

            </div>
        )
    }
}

export default ListingShow;