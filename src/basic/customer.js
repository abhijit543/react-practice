const Mycustomer = () => {
  let customers = [
    { id: 101, name: "Alice Brown", email: "alice@example.com", phone: "123-456-7890" },
    { id: 102, name: "Bob White", email: "bob@example.com", phone: "987-654-3210" },
    { id: 103, name: "Charlie Green", email: "charlie@example.com", phone: "555-123-4567" },
  ];
  return (
    <div className="container mt-4">
      <h2 className="text-center">Customer List</h2>
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
          {customers.map((cust, index) => (
            <tr key={index}>
              <td>{cust.id}</td>
              <td>{cust.name}</td>
              <td>{cust.email}</td>
              <td>{cust.phone}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default Mycustomer;
