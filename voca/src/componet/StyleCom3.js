import styles from "./StyleCom3.module.css";


const StyleCom3 = () =>{
    return(
        <>
            <h2>CSS 모듈 활용</h2>
            <div className={styles.box2}>
                ComponetName.modul.css형식으로 파일명 생성
            </div>
        </>
    )
}

export default StyleCom3;