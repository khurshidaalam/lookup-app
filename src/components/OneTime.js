import React from 'react';
import styles from "../styles/Buycredits.module.css";

const credits = [
    {
        noc: "5000 to 49999",
        coc: "$0.0050"
    },
    {
        noc: "50000 to 199999",
        coc: "$0.0040"
    },
    {
        noc: "200000 to 499999",
        coc: "$0.0030"
    },
    {
        noc: "500000 to 999999",
        coc: "$0.0020"
    },
    {
        noc: "1000000 to 4999999",
        coc: "$0.0010"
    },
]

const OneTime = () => {
    return (
        <>
        <div className={styles.onetimepage}>
            <div className={styles.allcreditcards}>
                {
                    credits.map((credit, index) => {
                        const { noc, coc } = credit;
                        return (<>
                            <div className={styles.creditbox}>
                                <div className={styles.numberofcredit}>
                                    <p>Number of Credits</p>
                                    <span>{noc}</span>
                                </div>
                                <br></br>
                                <div className={styles.costpercredit}>
                                    <p>Cost per Credit</p>
                                    <span><strong>{coc}</strong></span>
                                </div>
                            </div>
                        </>)

                    })
                }
                

            </div>
            <h3>Calculate Your Cost (In USD)</h3>
                <div className={styles.creditbox}>
                    <div className={styles.numberofcredit}>
                        <p>Number of Credits</p>
                        <span>50000</span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default OneTime