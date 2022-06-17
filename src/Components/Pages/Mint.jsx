import React from 'react'
import MintLeft from '../mint/MintLeft'
import MintRight from '../mint/MintRight'
import styles from './../../styles/MintPage.module.css'


const Mint = () => {
console.log("Mint")
	return (
		<main className={styles.container}>
			<div className={styles.container__mint}>
			<div><a target="noreferrer" href= "https://smolkongzreborn.com/" > <h3>Back To Home</h3> </a></div>
				<div className={styles.container__mintBox}>
					<MintLeft />
					<MintRight />
				</div>
				<div className={styles.footer}>
					{/* <a target="noreferrer" href= "URL HERE" > ADDRESS HERE </a> */}
					<p>Smol Kongz Reborn Smart Contract</p>
				</div>
			</div>
		</main>
	)
}

export default Mint
