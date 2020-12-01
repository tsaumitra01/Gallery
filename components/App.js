import React from 'react';
import {PhotoSwipe} from 'react-photoswipe';
import {PhotoSwipeGallery} from 'react-photoswipe';

class App extends React.Component {
    state = {
      isOpen: false,
      items: [
      ],
      galleryItems: [
      ],
      options: {}
    };
  
    openPhotoSwipe = (e) => {
      e.preventDefault();
      this.setState({
        isOpen: true,
        options: {
          closeOnScroll: false
        }
      });
    };
  
    handleClose = () => {
      this.setState({
        isOpen: false
      });
    };
  
    getThumbnailContent = (item) => {
      return (
        <img src={item.thumbnail} with={120} height={90}/>
      );
    };

    componentDidMount = () => {
        this.props.data.children.forEach(image => {
            const item = {
                src : image.data.url ,
                thumbnail : image.data.thumbnail,
                w : 1200,
                h : 900
            }
            this.setState({
                galleryItems : [...this.state.galleryItems, item]
            });
        })
    }

    render() {

        return ( 
            <div className='layout-page'>
            <main className='layout-main'>
                <div className='container'>
                    <hr/>
                    <PhotoSwipe isOpen={this.state.isOpen} items={this.state.items}
                    options={this.state.options}
                    onClose={this.handleClose}/>
                    <hr/>
                    <hr/>
                    <PhotoSwipeGallery items={this.state.galleryItems}
                    thumbnailContent={this.getThumbnailContent}/>
                </div>
            </main>
            </div>
      );
    }
  }
  export default App;





