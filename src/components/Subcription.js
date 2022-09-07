import React from 'react';
import styles from "../styles/Buycredits.module.css";
import Drawer from '@mui/material/Drawer';

const credits = [
    {
        noc: "5000",
        coc: "$0.0050"
    },
    {
        noc: "50000",
        coc: "$0.0040"
    },
    {
        noc: "200000",
        coc: "$0.0030"
    },
    {
        noc: "500000",
        coc: "$0.0020"
    },
    {
        noc: "1000000",
        coc: "$0.0010"
    },
    {
        noc: "200000",
        coc: "$0.0030"
    },
    {
        noc: "500000",
        coc: "$0.0020"
    },
    {
        noc: "1000000",
        coc: "$0.0010"
    },
]

const Subcription = () => {
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
                                <div className={`${styles.subscriptioncreditbox} ${styles.creditbox}`}>
                                    <div className={styles.numberofcredit}>
                                        <p>Credits</p>
                                        <span>{noc}</span>
                                    </div>
                                    <br></br>
                                    <div className={styles.costpercredit}>
                                        
                                        <span><strong>{coc}</strong></span>
                                        <p>For 1 Month</p>
                                    </div>
                                </div>
                            </>)

                        })
                    }


                </div>
                
                <div className={`${styles.buy5kcredits} m-20`}>
                    <div className='creditamount'>
                        <p>Buy 50000 Credits for</p>
                        <span>$45</span>
                        <p>billed monthly</p>
                    </div>


                    {['right'].map((anchor) => (
                        <React.Fragment key={anchor}>
                            <button className={`${styles.orangebtn} orange-btn`} onClick={toggleDrawer(anchor, true)}>Subscribe</button>
                            <Drawer
                                anchor={anchor}
                                open={state[anchor]}
                                onClose={toggleDrawer(anchor, false)}
                            >
                               <div className={styles.buycreditdrawer}>
                               <h1>Subscribe</h1>
                               <p className={styles.costprcredit}><span>10000</span> (For 1 Month $45)</p>
                               <table className={styles.creditcarddetailstable}>
                                <tr>
                                    <th>Plan:</th>
                                    <td>1000 Credits / Month</td>
                                </tr>
                                <tr>
                                    <th>Billed:</th>
                                    <td>Monthly</td>
                                </tr>
                                <tr>
                                    <th className={styles.total}>Total Price:</th>
                                    <td>$45</td>
                                </tr>
                               </table>
                               <button className={`${styles.orangebtn} ${styles.paybuybtn} orange-btn`}>Pay and Buy</button>
                               <p>Note: Unused credits will be carried forward. <br></br>1 Credit = 1 Phone Number Validation</p>
                               </div>
                            </Drawer>
                        </React.Fragment>
                    ))}
                </div>
            </div>

        </>
    )
}

export default Subcription;