const Row = ({ index, name, address, website, phone }) => {
  return (
    <tr>
      <th scope="row">{index}</th>
      <td>{name}</td>
      <td>{phone}</td>
      <td>{address}</td>
      <td>
        {website ? (
          <a href={website} target="_blank" rel="noreferrer">
            {name}
          </a>
        ) : (
          "N/A"
        )}
      </td>
    </tr>
  );
};

export default Row;
