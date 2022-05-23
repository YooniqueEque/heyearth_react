import './GuideMain.css';
import GuideList from './GuideMainList';
import axios from 'axios';
import {useState, useEffect} from 'react';

const GuideMain = () => {

     const [loading,setLoading] = useState(false);
     const [GList,setGList] = useState([]);

     const loadGuide = async () => {
         axios.get("/guidelistadmin")
         .then(({data}) => {
            //console.log(data);
            setLoading(true);
            setGList(data);
         })
         .catch(e => {
             console.error(e);
             setLoading(false);
         })
     }

     useEffect(() => {
         loadGuide();
     },[])


    function GuideInsert(){
        window.location.href = "http://localhost:8080/adminguideinsert";
    }

    return (
        <div>
            <h1 className='adminmain'>'이건 어떻게 버릴까?' 관리 페이지입니다.</h1><br />
            <div>
                <input className="addbtn" id='guideadd' type='button' value='등록하기' onClick={GuideInsert} />
            </div>

            <div className='admincontext'>
                <table className='adminlisttable'>
                    <thead>
                    <tr><th>분류</th><th>재활용품명</th><th> </th><th> </th></tr>
                    </thead>
                    <GuideList guidelist={GList}/>
                </table>
            </div>
            
        </div>
    );
}

export default GuideMain;