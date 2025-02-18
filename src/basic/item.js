const Myitem = () => {
  let items = [
    { id: "A001", name: "Laptop", price: 1000, category: "Electronics" },
    { id: "A002", name: "Phone", price: 700, category: "Electronics" },
    { id: "A003", name: "Table", price: 150, category: "Furniture" },
  ];
  return (
    <div className="container mt-4">
      <h2 className="text-center">Item List</h2>
      <table className="table table-striped table-bordered table-hover mt-3">
        <thead>
          <tr>
            <th>Key</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
          </tr>
        </thead>
        <tbody>
          {items.map((itemlists, index) => (
            <tr key={index}>
              <td>{itemlists.id}</td>
              <td>{itemlists.name}</td>
              <td>{itemlists.price}</td>
              <td>{itemlists.category}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default Myitem;
