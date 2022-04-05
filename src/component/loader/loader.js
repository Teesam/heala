import './loader.css';
import { BounceLoader } from 'react-spinners';


const Loading = () => {
    return(
        <div className = 'Loading'>
            <div id = 'loading-overlay'>
                <BounceLoader size = { 50 } color = 'rgb(11, 86, 106)' />
            </div>
        </div>
    )
}


export default Loading;