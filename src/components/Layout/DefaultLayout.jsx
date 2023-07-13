import Header from "../Shared/Header";

const DefaultLayout = ({ children }) => {
  return (
    <div>
      <tr className="border h-12">
        <td>12 may 2023</td>
        <td> 5 </td>
        <td>4</td>
        <td> 5</td>
        <td> 3 </td>
        <td> 7 </td>
        <td>3%</td>
        <td>85%</td>
        <td>11:30am</td>
        <td>2:37pm</td>
      </tr>
    </div>
  );
};

export default DefaultLayout;
