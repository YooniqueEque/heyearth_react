import Header from '../Layout/AdminHeader';
import ZeroshopModForm from './ZeroshopModForm';
import Footer from '../Layout/AdminFooter';

const ZeroshopMod = () => {
    return(
        <div>
            <Header />
            <h1 className='adminmain'>'지구를 돕는 가게 찾기' 수정하기</h1><br />
            <ZeroshopModForm />
            <Footer />
        </div>
    )
}

export default ZeroshopMod;