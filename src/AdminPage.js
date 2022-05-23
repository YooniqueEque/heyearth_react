import {Routes,Route} from "react-router-dom";
import AdminMain from './AdminMain/AdminMain';
import JusoPopup from "./AdminZeroshop/JusoPopup";
import Zeroshop from './AdminZeroshop/Zeroshop';
import ZeroshopInsert from './AdminZeroshop/ZeroshopInsert'
import ZeroshopMod from './AdminZeroshop/ZeroshopMod'
import Mission from './AdminMission/Mission';
import Guide from './AdminGuide/Guide';

const AdminPage = () => {
    return(
        <Routes>
            <Route path="/adminmain" element={<AdminMain />} />
            <Route path="/adminzeroshop" element={<Zeroshop />} />
            <Route path="/adminzeroshopinsert" element={<ZeroshopInsert />} />
            <Route path="/jusoPopup" element={<JusoPopup />} />
            <Route path="/adminzeroshopmod" element={<ZeroshopMod />} />
            <Route path="/adminmission" element={<Mission />} />
            <Route path="/adminguide" element={<Guide />} />
        </Routes>
    )
}

export default AdminPage;