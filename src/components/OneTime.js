import React from 'react';
import styles from "../styles/Buycredits.module.css";
import Drawer from '@mui/material/Drawer';

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
    const [state, setState] = React.useState({
        right: false,
    });

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };

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
                <h3 className='m-20'>Calculate Your Cost (In USD)</h3>
                <div className={styles.numofcredits}>
                    <div className={styles.numberofcredit}>
                        <p className='m-20'>Number of Credits</p>
                        <span >50000</span>
                    </div>
                </div>
                <div className={`${styles.buy5kcredits} m-20`}>
                    <div className='creditamount'>
                        <p>Buy 50000 Credits for $200</p>
                        <span>$200</span>
                    </div>


                    {['right'].map((anchor) => (
                        <React.Fragment key={anchor}>
                            <button className={`${styles.orangebtn} orange-btn`} onClick={toggleDrawer(anchor, true)}>Buy Credits</button>
                            <Drawer
                                anchor={anchor}
                                open={state[anchor]}
                                onClose={toggleDrawer(anchor, false)}
                            >
                               <div className={styles.buycreditdrawer}>
                               <h1>Buy credits</h1>
                               <p className={styles.costprcredit}><span>50000</span> (Cost per Credit $0.0040)</p>
                               <table className={styles.creditcarddetailstable}>
                                <tr>
                                    <th>Unit Price Per Credit:</th>
                                    <td>$0.0040</td>
                                </tr>
                                <tr>
                                    <th>Credits:</th>
                                    <td>50000</td>
                                </tr>
                                <tr>
                                    <th className={styles.total}>Total Price:</th>
                                    <td>$200</td>
                                </tr>
                               </table>
                               <button className={`${styles.orangebtn} ${styles.paybuybtn} orange-btn`}>Pay and Buy</button>
                               <p>Note: Minimum credits for purchase should be 5,000 <br></br>1 Credit = 1 Phone Number Validation</p>
                               </div>
                            </Drawer>
                        </React.Fragment>
                    ))}
                </div>
            </div>

        </>
    )
}

export default OneTime