import React from 'react';
import {hashHistory} from 'react-router';

class ReviewForm extends React.Component {
  constructor (props) {

    super(props);
    this.state = {
    body: "",
    rating: "",
    error: "",
    dwelling_id: this.props.dwellingId
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.clickedStar = this.clickedStar.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    if (!this.props.currentUser) {
      return hashHistory.push('/login');
    }
    e.preventDefault();
    const review = Object.assign({}, this.state);
    if (this.state.body === "") {
      this.setState({
        error: "Please submit a review"
      });
    } else if (this.state.rating === "") {
        this.setState({
          error: "Please submit a rating"
        });
    } else {
        this.setState({
          body: "",
          rating: "",
          error: ""
        });
      }
    this.props.createReview(review);
    this.forceUpdate();
  }


  clickedStar (num) {
    if (num <= this.state.rating) {
      return "clicked-star";
    }
    else {
      return "unclicked-star";
    }
  }

  render () {
    return (
      <div className="review-form-container" >
        <form onSubmit={this.handleSubmit} className="review-form">
          <div className="review-rating-and-errors">
            <div className="review-rating-box">
              <img src='http://res.cloudinary.com/dg8v2pvxf/image/upload/v1484359474/star-icon_cqaeqo.png'
                            className={this.clickedStar(1)}
                            onClick={() => this.setState({rating: 1})}/>
              <img src='http://res.cloudinary.com/dg8v2pvxf/image/upload/v1484359474/star-icon_cqaeqo.png'
                           className={this.clickedStar(2)}
                           onClick={() => this.setState({rating: 2})}/>
              <img src='http://res.cloudinary.com/dg8v2pvxf/image/upload/v1484359474/star-icon_cqaeqo.png'
                            className={this.clickedStar(3)}
                            onClick={() => this.setState({rating: 3})}/>
              <img src='http://res.cloudinary.com/dg8v2pvxf/image/upload/v1484359474/star-icon_cqaeqo.png'
                           className={this.clickedStar(4)}
                           onClick={() => this.setState({rating: 4})}/>
              <img src='http://res.cloudinary.com/dg8v2pvxf/image/upload/v1484359474/star-icon_cqaeqo.png'
                          className={this.clickedStar(5)}
                          onClick={() => this.setState({rating: 5})}/>
            </div>
            <div className="review-errors">{this.state.error}</div>
          </div>
          <textarea
            type="text"
            value={this.state.body}
            onChange={this.update("body")}
            className="review-input"></textarea>
          <button className="review-form-button"
            onClick={this.handleSubmit}>Sonorus!</button>
        </form>
      </div>
    );
  }
}

export default ReviewForm;
