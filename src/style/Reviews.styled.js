import styled from "styled-components";

export const ReviewBackground = styled.div`
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    flex-direction: column;
    height: auto;
    border: 3px solid black;
`

export const SplitReview = styled.div`
    display:flex;
    flex-direction: row;

    @media only screen and (min-device-width: 320px) and (max-device-width: 768px){
        display: block;
        display: flex;
        flex-direction: column-reverse;
    }

    @media (min-width: 1440px){
        display:flex;
        flex-direction: row;
    }
`

export const LeftReview = styled.div`
    display:flex;
    justify-content: flex-end;
    align-content: center;
    width: 50%;
    padding: 10px;

    @media only screen and (min-device-width: 320px) and (max-device-width: 768px){
        display: block;
        width: 100%;
        text-align: center;
        align-content: center;
        margin: 0;
        padding: 0;
    }

    @media (min-width: 1440px){
        display:flex;
        justify-content: flex-end;
        align-content: center;
        width: 50%;
    }
`

export const RightReview = styled.div`
    width: 50%;
    display:flex;
    justify-content: flex-start;
    align-self: center;
    padding: 10px;

    @media only screen and (min-device-width: 320px) and (max-device-width: 768px){
        width: 100%;
        text-align: center;
        padding: 0;
        margin: 5px;
    }

    @media (min-width: 1440px){
        width: 50%;
        display:flex;
        justify-content: flex-start;
        align-self: center;
    }
`

export const ReviewImage = styled.img`
    width: 90%;
    margin: 5px;
    border: 15px double black; 
    background: white;
    object-fit: cover;

    @media only screen and (min-device-width: 320px) and (max-device-width: 768px){
        width: 90%;
        margin: 0;
        padding: 0;
    }

    @media (min-width: 1024px){

    }

    @media (min-width: 1440px){
        width: 80%;
    }
`

export const ReviewContent = styled.div`
    display: flex;
    flex-direction: column;
    width: 750px;
    height: 430px;
    border: 15px double black; 
    align-items: center;
    text-align: center;
    background: white;

    @media only screen and (min-device-width: 320px) and (max-device-width: 768px){
        width:auto;
    }

    @media (min-width: 1024px){

    }

    @media (min-width: 1440px){
        
    }
`

export const ForwardA = styled.div`
    display:flex;
    justify-content: flex-start;
    align-content: center;
    position: absolute;
    transform: translate(3600%, 275%);

    @media (min-width: 320px){
        position: absolute;
        transform: translate(465%, 460%);
    }

    @media (min-width: 375px){
        position: absolute;
        transform: translate(575%, 460%);
    }

    @media (min-width: 450px){
        position: absolute;
        transform: translate(730%, 460%);
    }

    @media (min-width: 768px){
        position: absolute;
        transform: translate(1270%, 420%);
    }

    @media (min-width: 1024px){
        position: absolute;
        transform: translate(1830%, 420%);
    }

    @media (min-width: 1440px){
        position: absolute;
        transform: translate(2600%, 420%);
    }
`

export const Forward = styled.div`
    font-size: 100px;
    width: 50px;
    &:hover {
        cursor: pointer;
    }

    @media (min-width: 320px){
        font-size: 80px;
    }

    @media (min-width: 375px){
        font-size: 80px;
    }

    @media (min-width: 450px){
    }

    @media (min-width: 768px){

    }

    @media (min-width: 1024px){

    }

    @media (max-width: 1440px){
        
    }
`

export const BackA = styled.div`
    display:flex;
    justify-content: flex-start;
    align-content: center;
    position: absolute;
    transform: translate(40%, 265%);

    @media (min-width: 320px){
        position: absolute;
        transform: translate(-5%, 460%);
    }

    @media (min-width: 375px){
        position: absolute;
        transform: translate(-5%, 460%);
    }

    @media (min-width: 450px){
        position: absolute;
        transform: translate(-5%, 460%);
    }

    @media (min-width: 768px){
        position: absolute;
        transform: translate(85%, 420%);
    }

    @media (min-width: 1024px){
        position: absolute;
        transform: translate(1050%, 420%);
    }

    @media (max-width: 1440px){
        position: absolute;
        transform: translate(1500%, 420%);
    }
`

export const Backward = styled.div`
    font-size: 100px;
    width: 50px;
    &:hover {
        cursor: pointer;
    }

    @media (min-width: 320px){
        font-size: 80px;
    }

    @media (min-width: 375px){
        font-size: 80px;

    }

    @media (min-width: 450px){

    }

    @media (min-width: 768px){

    }

    @media (min-width: 1024px){

    }

    @media (max-width: 1440px){
        
    }
`

export const ReviewHeader = styled.h2`
    display: felx;
    font-size: 45px;
    justify-content: center;
    padding: 15px 0px 0px 0px;

    @media (min-width: 320px){
        display: flex;
        text-align: center;
        font-size: 30px;
        outline: 1px solid white;
        margin: 5px;
        padding: 0px;
    }

    @media (min-width: 375px){
        display: flex;
        text-align: center;
        font-size: 32px;
        outline: 1px solid white;
        margin: 5px;
        padding: 0px;
    }

    @media (min-width: 450px){
        display: flex;
        text-align: center;
        font-size: 35px;
        outline: 1px solid white;
        margin: 5px;
        padding: 0px;
    }

    @media (min-width: 768px){

    }

    @media (min-width: 1024px){

    }

    @media (max-width: 1440px){
        
    }
`

export const ReviewText = styled.h3`
    padding: 30px 20px 5px 20px;
    font-size: 45px;

    @media (min-width: 320px){
        font-size: 25px;
    }

    @media (min-width: 375px){
        font-size: 30px;
    }

    @media (min-width: 450px){
        font-size: 33px;
    }

    @media (min-width: 768px){

    }

    @media (min-width: 1024px){

    }

    @media (max-width: 1440px){
        
    }
`

export const ReviewName = styled.h5`
    font-size: 25px;
    padding: 0px 0px 15px 0px;

    @media (min-width: 320px){
        font-size: 20px;
    }

    @media (min-width: 375px){
        font-size: 25px;
    }

    @media (min-width: 450px){
        font-size: 25px;
    }

    @media (min-width: 768px){

    }

    @media (min-width: 1024px){

    }

    @media (max-width: 1440px){
        
    }
`

export const ReviewDirect = styled.h5`
    text-align: center;
    padding: 5px 0px 5px 0px;
    font-size: 20px;

    @media (min-width: 320px){
        font-size: 15px;
    }

    @media (min-width: 375px){
        font-size: 18px;
    }

    @media (min-width: 450px){
        padding: 0px 5px;
        font-size: 20px;
    }

    @media (min-width: 768px){

    }

    @media (min-width: 1024px){

    }

    @media (max-width: 1440px){
        
    }
`

export const ReviewButtons = styled.button`
    text-align: center;
    padding: 10px;
    font-size: 15px;
    background-color: black;
    color: white;
    border: 8px double white;
    margin: 5px;
`
