import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux'
import {getImages} from '../../../../selectors'

class ImagePreview extends Component {
    render() {
        const images = this.props.images; 
        return (
            <React.Fragment>
                {
                    images.map((item, key) => {
                        return <div key={key} className="gallery">
                            <img src={item} alt="" width="600" height="400"/>
                        </div>

                    })
                }
            </React.Fragment>
        );
    }
}

function mapStateToProps(state) {
    return {
        images: getImages(state)
    };
}

function dispatchInput(dispatch) {
    return bindActionCreators({
    }, dispatch);
}

export default connect(mapStateToProps, dispatchInput)(ImagePreview);
