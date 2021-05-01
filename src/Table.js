import Row from "./Row";

const Table = ({ data }) => {
  return (
    <table>
      <thead>
        <tr>
          <th scope="col">id</th>
          <th scope="col" style={{ width: "20%" }}>
            Name
          </th>
          <th scope="col" style={{ width: "35%" }}>
            Address
          </th>
          <th scope="col" style={{ width: "15%" }}>
            Phone
          </th>
          <th scope="col" style={{ width: "15%" }}>
            Website
          </th>
        </tr>
      </thead>
      <tbody>
        {data.map((el, index) => (
          <Row {...el} index={index + 1} key={index} />
        ))}
      </tbody>
    </table>
  );
};

export default Table;
