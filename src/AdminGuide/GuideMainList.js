import GuideForm from './GuideMainForm'

const GuideList = (props) => {
    const GuideList = props.guidelist;
    //console.log(props.shoplist);
    //console.log(props.msg);
    return(
        <tbody>
            {GuideList && GuideList.map((guidedata) => {
                return (
                    <GuideForm
                        key = {guidedata.r_code}
                        r_class = {guidedata.r_class}
                        r_name={guidedata.r_name}
                        r_code={guidedata.r_code}
                    />
                )
            })}
        </tbody>
    );
}

export default GuideList;