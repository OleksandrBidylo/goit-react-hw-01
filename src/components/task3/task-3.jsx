import tab from "../../jsons/table.json";
import s from "./task3.module.css";

const Task3 = () => {
  return (
    <div className={s.wrap}>
      <table>
        <thead>
          <tr>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
          </tr>
        </thead>
        <tbody>
          {tab.map((info) => (
            <tr key={info.id}>
              <td>{info.type}</td>
              <td>{info.amount}</td>
              <td>{info.currency}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Task3;
