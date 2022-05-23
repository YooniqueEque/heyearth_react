import './MissionMain.css';
import axios from "axios";

const MissionForm = ({m_name,m_code,m_date}) => {

    function MissionMod(){
        window.location.href="http://localhost:8080/adminmissionmod?code="+m_code;
    }

    function MissionDel(){
        axios.get('/missiondeladmin',{
            params : {
                m_code : m_code
            }
        }).then(function(){
            window.location.href = "http://localhost:3000/adminmission"
        })
    }

    function MissionReview(){
        window.location.href="http://localhost:8080/adminmissionreview?code="+m_code;
    }

    return (
        <tr key={m_code}>
            <td className='tabname'>{m_name}</td>
            <td className='tabname'>{m_date}</td>
            <td><input className='tabreviewbtn' id='missionreview' type='button' value='후기보러가기' onClick={MissionReview} /></td>
            <td><input className='tabmodbtn' id='missionmod' type='button' value='수정' onClick={MissionMod}/></td>
            <td><input className='tabmodbtn' id='missiondel' type='button' value='삭제' onClick={MissionDel}/></td>
        </tr>
    )
}

export default MissionForm;