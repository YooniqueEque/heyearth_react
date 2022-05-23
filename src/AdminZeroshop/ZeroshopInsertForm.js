import './ZeroshopInsertModForm.css';
import {useState} from 'react';
import {GoPopUp, ZeroshopBack, ZeroshopInsertEnd} from './ZeroshopInsertModFunc';

const ZeroshopInsertForm = () => {

    const [imagefile,Setimagefile] = useState('');
    const [previewURL,SetpreviewURL] = useState('');
    const [location,Setlocation] = useState('');
    const [name,Setname] = useState('');
    let preview = null;
    const params = new URLSearchParams(window.location.search);
    const roadFullAddr = params.get("roadFullAddr");
    alert(roadFullAddr);


    function ImagePreview(event){
        let reader = new FileReader();
        let file = event.target.files[0];
        reader.onloadend = () => {
            Setimagefile(file);
            SetpreviewURL(reader.result);
        }
        reader.readAsDataURL(file);
    }

    if(imagefile !== ''){
        preview = <img alt='제로샵 미리보기' id="previewimg" src={previewURL}/>
    }

    function JusoCallBack(props){
        Setlocation(props.roadFullAddr);
    }

    function NameChange(e){
        Setname(e.target.value);
    }

    return(
        <form action='adminzeroshopinsertinfo' method='post' encType="multipart/form-data">
            <div className='admincontext'>
                <table className='adminmodinserttable'>
                    <thead></thead>
                    <tbody>
                        <tr><td>이름</td><td><input id="s_name" name="s_name" className="admintd" type="text" required defaultValue={name} onChange={NameChange} /></td></tr>
                        <tr><td>웹사이트</td><td><input id="s_url" name="s_url" className="admintd" type="url" required /></td></tr>
                        <tr><td>분류</td><td><input id="s_inform" name="s_inform" className="admintd" type="text" required /></td></tr>
                        <tr>
                            <td>위치</td>
                            <td>   
                                <input id="s_location" className="admintd" type="text" defaultValue={roadFullAddr} readOnly />
                                <input id="s_locnotview" name="s_location" className="admintd" type="text" defaultValue={roadFullAddr} required />
                                <input type="button" onClick={GoPopUp} value="주소 검색하기"/>
                            </td>
                        </tr>
                        <tr><td>전화번호</td><td><input id="s_call" name="s_call" className="admintd" type="text" pattern="[0-9]{2,4}-[0-9]{3,4}-[0-9]{4}" maxLength="14" /></td></tr>
                        <tr><td>휴무일</td><td><input id="s_close" name="s_close" className="admintd" type="text" /></td></tr>
                        <tr><td>영업시간</td><td><input id="s_hour" name="s_hour" className="admintd" type="text" /></td></tr>
                        <tr><td>사진</td>
                        <td>
                        {preview}
                        <input name="image" id="input-image" className="admintd" type="file" accept="image/*" required onChange={ImagePreview} /></td></tr>
                    </tbody>
                </table>
            </div>
            <div className='adminbtni'>
                <input className="adminback" id="zeroshopback" type="button" value="취소" onClick={ZeroshopBack}/>
                <input className="adminend" id="zeroshopend" type="submit" value="등록하기" onClick={ZeroshopInsertEnd}/>
            </div>
        </form>
    )
}

export default ZeroshopInsertForm;