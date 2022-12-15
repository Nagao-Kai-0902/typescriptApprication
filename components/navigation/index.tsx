import styles from '../navigation/navigation.module.css'
import Image from "next/image"


const Navigation = () =>{
    return(
        <>
    <div className={styles.list}>
        <a className={styles.navAnchor} href=""><Image src="/Images/favicon.ico" width={32} height={32} alt={''} /></a>
        <a className={styles.navAnchor} href="/live">ライブステージ</a>
        <a className={styles.navAnchor}  href="/velcel">ヴェルセルステージ</a>
        <a className={styles.navAnchor}  href="/100MS">100MSステージ</a>
        <a className={styles.navAnchor}  href="/schedule">スケジュール</a>
        <a className={styles.navAnchor}  href="/speker">スピーカー</a>
        <a className={styles.navAnchor}  href="/museum">博覧会</a>
        <a className={styles.navAnchor}  href="/job">ジョブ</a>
        <a className={styles.navAnchor}  href="/invite">招待</a>
        <a className={styles.navAnchor}  href="/rollChange">役割の変更</a>
    </div></>
    )
}

export default Navigation