import './GuideMain.css';
import axios from "axios";

const GuideForm = ({r_class,r_name,r_code}) => {

    function GuideMod(){
        window.location.href="http://localhost:8080/adminguidemod?code="+r_code;
    }

    function GuideDel(){
        axios.get('/guidedeladmin',{
            params : {
                code : r_code
            }
        }).then(function(){
            window.location.href = "http://localhost:3000/adminguide"
        })
    }

    return (
        <tr key={r_code}>
            <td className ='tabname'>{r_class}</td>
            <td className='tabname'>{r_name}</td>
            <td><input className='tabmodbtn' id='guidemod' type='button' value='수정' onClick={GuideMod}/></td>
            <td><input className='tabmodbtn' id='guidedel' type='button' value='삭제' onClick={GuideDel}/></td>
        </tr>
    )
}

export default GuideForm;