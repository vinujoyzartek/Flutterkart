import {
    MDBCarousel,
    MDBCarouselCaption,
    MDBCarouselInner,
    MDBCarouselItem,
    MDBCarouselElement
} from 'mdb-react-ui-kit';
import Image from 'next/image';

function Carousel(props) {
    const { images } = props;
    console.log("images", images);
    return (
        // <MDBCarousel showIndicators showControls dark touch pause>
        //     <MDBCarouselInner>
        //         {images.map(({ src, description, title }, idx) => {
        //             return (
        //                 <MDBCarouselItem itemID={idx} key={idx}>
        //                     <Image
        //                         src={src}
        //                         layout="responsive"
        //                         width={1200}
        //                         height={400}
        //                         alt={title}
        //                     />

        //                     {/* {(title || description) && (
        //                         <MDBCarouselCaption>
        //                             {title && <h5>{title}</h5>}
        //                             {description && <p>{description}</p>}
        //                         </MDBCarouselCaption>
        //                     )} */}
        //                 </MDBCarouselItem>
        //             );
        //         })}
        //     </MDBCarouselInner>
        // </MDBCarousel>
        <MDBCarousel showIndicators showControls fade>
            <MDBCarouselInner>
                <MDBCarouselItem className='active'>
                    <MDBCarouselElement src='https://mdbootstrap.com/img/Photos/Slides/img%20(15).jpg' alt='...' />
                    <MDBCarouselCaption>
                        <h5>First slide label</h5>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </MDBCarouselCaption>
                </MDBCarouselItem>

                <MDBCarouselItem>
                    <MDBCarouselElement src='https://mdbootstrap.com/img/Photos/Slides/img%20(22).jpg' alt='...' />
                    <MDBCarouselCaption>
                        <h5>Second slide label</h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </MDBCarouselCaption>
                </MDBCarouselItem>

                <MDBCarouselItem>
                    <MDBCarouselElement src='https://mdbootstrap.com/img/Photos/Slides/img%20(23).jpg' alt='...' />
                    <MDBCarouselCaption>
                        <h5>Third slide label</h5>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </MDBCarouselCaption>
                </MDBCarouselItem>
            </MDBCarouselInner>
        </MDBCarousel>
    );
}

export default Carousel;