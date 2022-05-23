/*import axios from 'axios';
import {useState} from 'react';*/
import './AdminMain.css';
import Header from '../Layout/AdminHeader';
import Footer from '../Layout/AdminFooter';


function AdminMain(){

    function Zeroshop(event){
        //window.location.href = "http://localhost:8080/adminzeroshop"
        window.location.href = "/adminzeroshop";
    }

    function Mission(event){
        window.location.href = "/adminmission";
    }

    function Guide(event){
        window.location.href = "/adminguide"
    }

    function Board(event){
        window.location.href = "http://localhost:8080/adminboard"
    }

    function Member(event){
        window.location.href = "http://localhost:8080/adminmember"
    }

    return (
        <div>
            <Header />
            <h1 className='adminmain'>관리자 페이지입니다.</h1><br />
            <div className='adminbtnall'>
                <input onClick={Zeroshop} type='button' className='adminbtn' id='adminzeroshopbtn' value='지구를 돕는 가게 찾기 관리' /> <br />
                <input onClick={Mission} type='button' className='adminbtn' id='adminmissionbtn' value='환경 지킴이 모집중 관리' /><br />
                <input onClick={Guide} type='button' className='adminbtn' id='adminguidebtn' value='이건 어떻게 버릴까? 관리' /><br />
                <input onClick={Board} type='button' className='adminbtn' id='adminboardbtn' value='게시판 관리' /><br />
                <input onClick={Member} type='button' className='adminbtn' id='adminmemberbtn' value='회원 관리' /><br />
            </div> 
            <Footer />     
        </div>
    )
}

export default AdminMain;