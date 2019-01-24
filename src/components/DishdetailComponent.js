import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

class DishDetail extends Component {
    render() {
        if (this.props != null) {
            return (
                <div className="row">
                    <div className="col-xs-12 col-md-5 m-1">
                        <Card>
                            <CardImg width="100%" src={this.props.selectedDish.image} alt={this.props.selectedDish.name} />
                            <CardBody>
                                <CardTitle>{this.props.selectedDish.name}</CardTitle>
                                <CardText>{this.props.selectedDish.description}</CardText>
                            </CardBody>
                        </Card>
                    </div>
                    <div className="col-xs-12 col-md-5 m-1">
                        <Card>
                            <CardBody>
                                <CardTitle><h4>Comments</h4></CardTitle>
                                <div> {this.renderComments(this.props.selectedDish.comments)}
                                </div>
                            </CardBody>
                        </Card>
                    </div>
                </div>
            );
        }
        else {
            return (
                <div>nada</div>
            );
        }
    }

    renderComments = (comments) => {
        var result = comments.map(comment => {
            if (comment != null) {
                return (
                    <div key={comment.id}>
                        <CardText>
                            <div>
                                <p>{comment.comment}</p>
                            </div>
                            <p>-- {comment.author}</p>
                        </CardText>
                    </div>
                );
            } else {
                return null;
            }
        })
        return result;
    }
}

export default DishDetail;