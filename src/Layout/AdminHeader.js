import './AdminHeader.css';
import axios from 'axios';
import {useState} from 'react';

const Header = () => {

    function AlertMsg(){
        alert('로그아웃 되었습니다.');
    }

    function SessionId(){
        
        const [id,setId] = useState('');
        const headerStyle = {marginRight:'30px'};

        axios.get("/loginadmin")
        .then(function(response){
            let result = response.data;
            console.log(result);
            if(result != ""){
                setId(result);
            }else{
                window.location.href = "http://localhost:8080/";
            }
        });

        //sessionid == null
        if(id == null){
            return(
                <div className="JoinLogin" ><a className="header_j" href="http://localhost:8080/join">회원가입</a>&nbsp;<span>/</span>
		        <a className="header_j" href="http://localhost:8080/login">로그인</a></div>
            );
        }else{
        // sessionid !=null
            return(
                <div className="JoinLogin">
                <a className="header_j" style={headerStyle} href="http://localhost:8080/mypage">What's Up, <span className="whatsup_id">{id}</span> !</a>
                <a className="header_j" href="http://localhost:8080/adminmypage">마이페이지</a>&nbsp;/
                <a className="header_j" href="http://localhost:8080/logout" onClick={AlertMsg }>로그아웃</a>
                </div>
            );
        }
    }

    return (
        <header>
            <div className="JoinLoginAll">
                <SessionId />
            </div>
	        <a href="/adminmain"><img alt="heyearth" className="header_img" src="/img/logo.png" /></a>
	

            {/* 메뉴바 목록 */}
	        <nav className='nav'>
			    <ul className="aheader_ul">
				    <li className="aheader_li"><a className="aheader_a" href="/adminzeroshop">지구를 돕는 가게 찾기 관리</a></li>
				    <li className="aheader_li"><a className="aheader_a" href="/adminmission">환경지킴이 모집중 관리</a></li>
				    <li className="aheader_li"><a className="aheader_a" href="/adminguide">이건 어떻게 버릴까? 관리</a></li>
				    <li className="aheader_li"><a className="aheader_a" href="http://localhost:8080/adminboard">게시판 관리</a></li>
				    <li className="aheader_li"><a className="aheader_a" href="http://localhost:8080/adminmember">회원 관리</a></li>
		        </ul>
	        </nav>
        </header>
    )
}

export default Header