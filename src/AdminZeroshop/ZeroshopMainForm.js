import './ZeroshopMain.css';
import axios from "axios";

const ZeroshopForm = ({s_name,s_code}) => {

    function ZeroshopMod(){
        window.location.href="http://localhost:8080/adminzeroshopmod?code="+s_code;
    }

    function ZeroshopDel(){
        axios.get('/zeroshopdeladmin',{
            params : {
                s_code : s_code
            }
        }).then(function(){
            window.location.href = "http://localhost:3000/adminzeroshop"
        })
    }

    return (
        <tr key={s_code}>
            <td className='tabname'>{s_name}</td>
            <td><input className='tabmodbtn' id='zeroshopmod' type='button' value='수정' onClick={ZeroshopMod}/></td>
            <td><input className='tabmodbtn' id='zeroshopdel' type='button' value='삭제' onClick={ZeroshopDel}/></td>
        </tr>
    )
}

export default ZeroshopForm;