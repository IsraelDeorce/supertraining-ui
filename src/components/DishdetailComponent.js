import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

class DishDetail extends Component {

    componentDidMount(){
        console.log('Dishdetail Component componentDidMount is invoked');
    }

    componentDidUpdate(){
        console.log('Dishdetail Component componentDidUpdate is invoked');
    }

    render() {
        console.log('Dishdetail Component render is invoked');
        if (this.props != null) {
            console.log(this.props);
            return (
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12 col-md-5 m-1">
                            <Card>
                                <CardImg width="100%" src={this.props.dish.image} alt={this.props.dish.name} />
                                <CardBody>
                                    <CardTitle>{this.props.dish.name}</CardTitle>
                                    <CardText>{this.props.dish.description}</CardText>
                                </CardBody>
                            </Card>
                        </div>
                        <div className="col-xs-12 col-md-5 m-1">
                            <Card>
                                <CardBody>
                                    <CardTitle><h4>Comments</h4></CardTitle>
                                    <div> {this.renderComments(this.props.dish.comments)}
                                    </div>
                                </CardBody>
                            </Card>
                        </div>
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
                            <p>-- {comment.author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit' })
                                .format(new Date(Date.parse(comment.date)))}</p>
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