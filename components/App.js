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





//   {
//     src: 'http://lorempixel.com/1200/900/sports/1',
//     w: 1200,
//     h: 900,
//   //   title: 'Image 1'
//   },
//   {
//     src: 'http://lorempixel.com/1200/900/sports/2',
//     w: 1200,
//     h: 900,
//   //   title: 'Image 2'
//   },
//   {
//     src: 'http://lorempixel.com/1200/900/sports/3',
//     w: 1200,
//     h: 900,
//   //   title: 'Image 3'
//   }



// {
//     src: 'http://lorempixel.com/1200/900/nightlife/1',
//     thumbnail: 'http://lorempixel.com/120/90/nightlife/1',
//     w: 1200,
//     h: 900,
//   //   title: 'Image 1'
//   },
//   {
//     src: 'http://lorempixel.com/1200/900/nightlife/2',
//     thumbnail: 'http://lorempixel.com/120/90/nightlife/2',
//     w: 1200,
//     h: 900,
//   //   title: 'Image 2'
//   },
//   {
//     src: 'http://lorempixel.com/1200/900/nightlife/3',
//     thumbnail: 'http://lorempixel.com/120/90/nightlife/3',
//     w: 1200,
//     h: 900,
//   //   title: 'Image 3'
//   },
//   {
//     src: 'http://lorempixel.com/1200/900/nightlife/4',
//     thumbnail: 'http://lorempixel.com/120/90/nightlife/4',
//     w: 1200,
//     h: 900,
//   //   title: 'Image 4'
//   }








// class Prices extends React.Component {
//     render() {
//         const images = this.props.data.children;
//         const list   = images.map(image => {
//             return(  
//                 <div className="thumbnail">
//                     <p><img src={image.data.url }></img></p>
//                 </div>
//             )
//         })
//         return (
//             <div>
//                 {list}
//             </div>
//         )
//     }
// }

// export default Prices;