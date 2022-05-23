import './ZeroshopMain.css';
import ZeroshopList from './ZeroshopMainList';
import axios from 'axios';
import {useState, useEffect} from 'react';

const ZeroshopMain = () => {

     const [loading,setLoading] = useState(false);
     const [ShopList,setShopList] = useState([]);

     const loadShop = async () => {
         axios.get("/zeroshoplistadmin")
         .then(({data}) => {
            //console.log(data);
            setLoading(true);
            setShopList(data);
         })
         .catch(e => {
             console.error(e);
             setLoading(false);
         })
     }

     useEffect(() => {
         loadShop();
     },[])


    function ZeroshopInsert(){
        window.location.href = "http://localhost:8080/adminzeroshopinsert";
    }

    return (
        <div>
            <h1 className='adminmain'>'지구를 돕는 가게 찾기' 관리 페이지입니다.</h1><br />
            <div>
                <input className='addbtn' id='zeroshopadd' type='button' value='등록하기' onClick={ZeroshopInsert} />
            </div>
            <div className='admincontext'>
                <table className='adminlisttable'>
                    <thead>
                        <tr><th>가게명</th><th> </th><th> </th></tr>
                    </thead>
                    <ZeroshopList shoplist={ShopList} msg="출력확인"/>
                </table>
            </div>
        </div>
    );
}

export default ZeroshopMain;