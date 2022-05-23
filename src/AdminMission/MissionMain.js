import './MissionMain.css';
import MissionList from './MissionMainList';
import axios from 'axios';
import {useState, useEffect} from 'react';

const ZeroshopMain = () => {

    const [type,setType] = useState('group');
    const [loading,setLoading] = useState(false);
    const [MissList,setMissList] = useState([]);
   

    const loadMission = async (ttype) => {
        
        axios.get("/missionlistadmin?m_type="+ttype)
        .then(({data}) => {
           //console.log(data);
           setType(ttype);
           setLoading(true);
           setMissList(data);
        })
        .catch(e => {
            console.error(e);
            setLoading(false);
        })
    }

    useEffect(() => {
        loadMission('group');
    },[])


    function MissionInsert(){
        window.location.href = "http://localhost:8080/adminmissioninsert";
    }

    function GroupMission(){
        //setType("group");
        loadMission("group");
    }

    function SoloMission(){
        //setType("solo");
        loadMission("solo");

    }

    return (
        <div>
            <h1 className='adminmain'>'환경 지킴이 모집중' 관리 페이지입니다.</h1><br />
            <div>
                <input className='addbtn' id='zeroshopadd' type='button' value='등록하기' onClick={MissionInsert} />
            </div>
            <div className="mission_choose">
                <input type="button" id="groupmission" className={`${type === 'group' ? 'groupmission' : 'solomission'}`} name="findid" value = "단체미션" onClick={GroupMission} autoFocus />
                
                <input type="button" id="solomission" className={`${type === 'solo' ? 'groupmission' : 'solomission'}`} name="findid" value = "상시미션" onClick={SoloMission} />
            </div>
            <br />
            <br />
            <div className="mission_body">
                <table className='adminlisttable' id='admingroupmissiontable'>
                    <thead>
                    <tr><th>미션명</th><th>날짜</th><th> </th><th> </th><th> </th></tr>
                    </thead>
                    <MissionList missionlist={MissList} />
                </table>
            </div>
        </div>
  
    );
}

export default ZeroshopMain;