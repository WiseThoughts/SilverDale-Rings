
import { Link } from 'react-router-dom';
import { ModalBackground, ModalButtons, ModalBox, ModalImage, TextBox } from './Modal.styling'
import ModalSlides from './ModalSlides';



const Modal = ({Modal, SetModal, RingImage, RingImage2, RingImage3, RingImage4, RingDes, ringArray}) => {


    function scroll(){
        document.body.style.overflow="";
    }

    const ringPicArray =[
        {Img: RingImage},
        {Img: RingImage2},
        {Img: RingImage3},
        {Img: RingImage4},
    ]

    return Modal ? (
    <div>
        <ModalBackground />
            <ModalBox>
                <ModalSlides {...{ringPicArray}} />
                    <TextBox>
                        <p>{RingDes}</p>
                        <ModalButtons><Link to={{pathname: '/contact'}}>Contact Me</Link></ModalButtons>
                        <ModalButtons>Shop</ModalButtons>
                        <ModalButtons onClick={()=>{SetModal(false); scroll()}}>Close</ModalButtons>
                    </TextBox>
            </ModalBox>

    </div>

) :null;
}

export default Modal


