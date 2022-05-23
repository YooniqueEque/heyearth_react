import JusoCallBack from './ZeroshopInsertForm';
import {useState} from 'react';
import { Navigate } from 'react-router-dom';

const JusoPopup = () => {

    const [comfmkey,SetComfmkey] = useState('');
    const [returnURL,SetreturnURL] = useState('');
    const [resulttype,Setresulttype] = useState('');
    const [actionUrl,SetactionUrl] = useState('');

    const search = window.location.search;
    const params = new URLSearchParams(search);
    const inputYn = params.get('inputYn');
    const roadFullAddr = params.get('roadFullAddr');
    let url = window.location.href;
    let confmKey = "devU01TX0FVVEgyMDIyMDQyMDAxNDYxNzExMjQ3ODg=";
	let resultType = "4"; // 도로명주소 검색결과 화면 출력내용, 1 : 도로명, 2 : 도로명+지번+상세보기(관련지번, 관할주민센터), 3 : 도로명+상세보기(상세건물명), 4 : 도로명+지번+상세보기(관련지번, 관할주민센터, 상세건물명)
	    
	if(inputYn != "Y"){
        alert(inputYn);
        SetComfmkey(confmKey);
        SetreturnURL(url);
        Setresulttype(resultType);
        SetactionUrl("https://www.juso.go.kr/addrlink/addrLinkUrl.do");
		//document.form.confmKey.value = confmKey;
		//document.form.returnUrl.value = url;
		//document.form.resultType.value = resultType;
		//document.form.action="https://www.juso.go.kr/addrlink/addrLinkUrl.do"; //인터넷망
		//document.form.action="https://www.juso.go.kr/addrlink/addrMobileLinkUrl.do"; //모바일 웹인 경우, 인터넷망
		//document.form.submit();
        
	}else{

		//JusoCallBack(roadFullAddr);
		window.close();
	}

    return(
        <form id="form" name="form" method="post" action={actionUrl}>
            <input type="hidden" id="confmKey" name="confmKey" value={comfmkey}/>
            <input type="hidden" id="returnUrl" name="returnUrl" value={returnURL}/>
            <input type="hidden" id="resultType" name="resultType" value={resulttype}/>
            <input type="submit" id="submit"></input>
	    </form>
    )
}

export default JusoPopup;