import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux'
import {getImagesOfSelectedUser} from '../../../../selectors'

class ImagePreview extends Component {
    constructor(props) {
        super(props);

        this.state = {
            renderableImages: []
        }
    }

    readImages(images) {
        const readerList = []
        for (let i = 0; i < images.length; i++) {
            let newReader = new FileReader();
            readerList.push(newReader);
            newReader.onload = (e) => {
                const image = newReader.result;
                const copyImages =  this.state.renderableImages;
                copyImages.push(image);
                this.setState({
                    renderableImages: copyImages
                })
            }
            newReader.readAsDataURL(images[i]);
        }
    }

    componentWillReceiveProps(newProps) {
        this.setState({
            renderableImages: []
        })
        const images = newProps.images; 
        this.readImages(images)
    }

    render() {
        return (
            <React.Fragment>
            {
                   this.state.renderableImages.map((item, key) => {
                    return <div className="responsiveGallery">
                          <div className="gallery">
                          <img src={item} alt="" width="300" height="200"/>
                        </div>
                    </div>
                })
            }
            <div className="clearfix"></div>
            </React.Fragment>
        );
        /*return (
            <React.Fragment>
                {
                    this.state.renderableImages.map((item, key) => {
                        return <div key={key} className="gallery">
                            <img src={item} alt="" width="600" height="400"/>
                        </div>
                    })
                }
            </React.Fragment>
        );*/
    }
}

function mapStateToProps(state) {
    return {
        images: getImagesOfSelectedUser(state)
    };
}

function dispatchInput(dispatch) {
    return bindActionCreators({
    }, dispatch);
}

export default connect(mapStateToProps, dispatchInput)(ImagePreview);
