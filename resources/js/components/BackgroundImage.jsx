import  React from 'react';
import  Image from '../../../public/images/sigmaimage.png'

class BackgroundImage extends React.Component{
   render(){
       return(
           <img className="img-fluid backgroundimg"  src={Image} alt="BackgroundImage"/>
       )
    }
}
export default BackgroundImage;
