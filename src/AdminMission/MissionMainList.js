import MissionForm from './MissionMainForm'

const MissionList = (props) => {
    const MissionList = props.missionlist;
    console.log(props.missionlist);
    //console.log(props.msg);
    return(
        <tbody>
            {MissionList && MissionList.map((missiondata) => {
                return (
                    <MissionForm
                        key = {missiondata.m_code}
                        m_name={missiondata.m_name}
                        m_code={missiondata.m_code}
                        m_date={missiondata.m_date}
                    />
                )
            })}
        </tbody>
    );
}

export default MissionList;