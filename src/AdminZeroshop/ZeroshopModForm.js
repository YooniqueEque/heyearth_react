import './ZeroshopInsertModForm.css';
import {useState, useEffect} from 'react';
import {GoPopUp, ZeroshopBack, ZeroshopInsertEnd , ZeroshopModEnd} from './ZeroshopInsertModFunc';
import axios from 'axios';

const ZeroshopModForm = () => {
    const params = new URLSearchParams(window.location.search);
    const code = params.get("code");

    const [imagefile,Setimagefile] = useState('');
    const [previewURL,SetpreviewURL] = useState('');
    const [location,Setlocation] = useState('');
    let preview = null;
    const [Shopdetail,setShopdetail] = useState({s_code : code,s_name : '',s_url : '',s_inform : '',s_location : '',s_call :'',s_close : '',s_hour : '',s_photo : ''});
    
    const loadShopdetail = async () => {
        axios.get("/zeroshopdetailadmin?s_code="+code)
        .then(({data}) => {
            //console.log(data);
            setShopdetail(data);
            SetpreviewURL('img/'+data.s_photo);
        })
        .catch(e => {
            console.error(e);
        })
    }

    useEffect(() => {
        loadShopdetail();
    },[])

    function ImagePreview(event){
        let reader = new FileReader();
        let file = event.target.files[0];
        if(file !== null){
            reader.onloadend = () => {
                Setimagefile(file);
                SetpreviewURL(reader.result);
            }
            reader.readAsDataURL(file);
        }
    }

    if(previewURL !== ''){
        preview = <img alt='제로샵 미리보기' id="previewimg" src={previewURL}/>
    }

    function JusoCallBack(props){
        Setlocation(props.roadFullAddr);
    }

    return(
        <form action='adminzeroshopmodinfo' method='post' encType="multipart/form-data">
            <input name="s_code" type="hidden" defaultValue={code} />
            <div className='admincontext'>
                <table className='adminmodinserttable'>
                    <tbody>
                        <tr><td>이름</td><td><input id="s_name" name="s_name" className="admintd" type="text" defaultValue={Shopdetail.s_name} required /></td></tr>
                        <tr><td>웹사이트</td><td><input id="s_url" name="s_url" className="admintd" type="url" defaultValue={Shopdetail.s_url} required /></td></tr>
                        <tr><td>분류</td><td><input id="s_inform" name="s_inform" className="admintd" type="text" defaultValue={Shopdetail.s_inform} required /></td></tr>
                        <tr><td>위치</td><td><input id="s_location" className="admintd" type="text" defaultValue={Shopdetail.s_location} readOnly />
                            <input id="s_locnotview" name="s_location" className="admintd" defaultValue={Shopdetail.s_location} type="text" required />
                            <input type="button" onClick={GoPopUp} value="주소 검색하기"/>
                        </td></tr>
                        <tr><td>전화번호</td><td><input id="s_call" name="s_call" className="admintd" type="text" pattern="[0-9]{2,4}-[0-9]{3,4}-[0-9]{4}" maxLength="14" defaultValue={Shopdetail.s_call} /></td></tr>
                        <tr><td>휴무일</td><td><input id="s_close" name="s_close" className="admintd" type="text" defaultValue={Shopdetail.s_close} /></td></tr>
                        <tr><td>영업시간</td><td><input id="s_hour" name="s_hour" className="admintd" type="text" defaultValue={Shopdetail.s_hour} /></td></tr>
                        <tr><td>사진</td>
                        <td>
                        {preview}
                        <input name="s_photo" type="hidden" defaultValue={Shopdetail.s_photo} />
                        <input name="image" id="input-image" className="admintd" type="file" accept="image/*" onChange={ImagePreview} /></td></tr>
                    </tbody>
                </table>
            </div>
            <div className='adminbtni'>
                <input onClick={ZeroshopBack} className="adminback" id="zeroshopback" type="button" value="취소" />
                <input onClick={ZeroshopModEnd} className="adminend" id="zeroshopend" type="submit" value="수정완료하기" />
            </div>
        </form>
    )
}

export default ZeroshopModForm;