import './AdminFooter.css';

const Footer = () => {
    return (
        <footer>

            {/*푸터 왼쪽*/}
            <div className="footer_left">
	            <h3>Hey, Earth</h3>		
            </div>

            {/* 푸터 오른쪽 */}
            <div className="footer_right">
	            <strong>Multicampus</strong><br />
                <span>HeyEarth Project</span>&nbsp;&nbsp; <i>2022.04.01 - 2022.04.28</i><br />
                <span >지구용사 5인조</span> - 문소영 박희영 신미래 윤이나 이민아
            </div>

            {/* 인스타그램 벡터로고/연결 */}
            <div className="insta">
	            
            </div>
        </footer>
    )
}

export default Footer