import React, {useMemo, useEffect} from "react";
import styles from "./MoneyList.module.css";
const MoneyList = (props) => {
  const questionNumber = props;
  const moneyList = useMemo(
    () =>
      [
        { id: 1, amount: "$ 100" },
        { id: 2, amount: "$ 200" },
        { id: 3, amount: "$ 300" },
        { id: 4, amount: "$ 500" },
        { id: 5, amount: "$ 1.000" },
        { id: 6, amount: "$ 2.000" },
        { id: 7, amount: "$ 4.000" },
        { id: 8, amount: "$ 8.000" },
        { id: 9, amount: "$ 16.000" },
        { id: 10, amount: "$ 32.000" },
        { id: 11, amount: "$ 64.000" },
        { id: 12, amount: "$ 125.000" },
        { id: 13, amount: "$ 250.000" },
        { id: 14, amount: "$ 500.000" },
        { id: 15, amount: "$ 1.000.000" },
      ].reverse(),
    []
  );

  useEffect(() => {
    questionNumber > 1 &&
      setEarned(moneyList.find((m) => m.id === questionNumber - 1).amount);
  }, [questionNumber, moneyList]);
  return (
    <div className={styles.money_list}>
        <ul className={styles.list}>

          {moneyList.map((m) =>(
            <li className={styles.list_item}>
              <span className={styles.list_item_no}>{m.id}</span>
              <span className={styles.list_item_amt}>{m.amount}</span>
            </li>
          ))}
          
        </ul>
    </div>
  );
};

export default MoneyList;
