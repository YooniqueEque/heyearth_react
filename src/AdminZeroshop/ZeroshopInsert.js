import Header from '../Layout/AdminHeader';
import ZeroshopInsertForm from './ZeroshopInsertForm';
import Footer from '../Layout/AdminFooter';

const ZeroshopInsert = () => {
    return(
        <div>
            <Header />
            <h1 className='adminmain'>'지구를 돕는 가게 찾기' 등록하기</h1><br />
            <ZeroshopInsertForm />
            <Footer />
        </div>
    )
}

export default ZeroshopInsert;