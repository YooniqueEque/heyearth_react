import ZeroshopForm from './ZeroshopMainForm'

const ZeroshopList = (props) => {
    const ShopList = props.shoplist;
    console.log(props.shoplist);
    console.log(props.msg);
    return(
        <tbody>
            {ShopList && ShopList.map((shopdata) => {
                return (
                    <ZeroshopForm
                        key = {shopdata.s_code}
                        s_name={shopdata.s_name}
                        s_code={shopdata.s_code}
                    />
                )
            })}
        </tbody>
    );
}

export default ZeroshopList;