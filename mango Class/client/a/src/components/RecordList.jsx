import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Record = (props) => (
  <tr>
    <td>{props.record.name}</td>
    <td>{props.record.position}</td>
    <td>{props.record.level}</td>
    <td>
      <Link to={`/edit/${props.record._id}`}>Edit</Link>
      <button
        type="button"
        onClick={() => props.deleteRecord(props.record._id)}
      >
        Delete
      </button>
    </td>
  </tr>
);

export default function RecordList() {
  const [records, setRecords] = useState([]);

  // Fetch records from backend
  useEffect(() => {
    async function getRecords() {
      try {
        const response = await fetch("http://localhost:5050/record/");
        if (!response.ok) {
          throw new Error(`An error occurred: ${response.statusText}`);
        }
        const data = await response.json();
        setRecords(data);
      } catch (error) {
        console.error(error.message);
      }
    }

    getRecords();
  }, [records.length]);

  // Delete record by ID
  async function deleteRecord(id) {
    await fetch(`http://localhost:5050/record/${id}`, {
      method: "DELETE",
    });

    const updatedRecords = records.filter((record) => record._id !== id);
    setRecords(updatedRecords);
  }

  // Render records in table
  function recordList() {
    return records.map((record) => (
      <Record
        record={record}
        deleteRecord={deleteRecord}
        key={record._id}
      />
    ));
  }

  return (
    <div>
      <h3>Employee Records</h3>
      <table border="1">
        <thead>
          <tr>
            <th>Name</th>
            <th>Position</th>
            <th>Level</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>{recordList()}</tbody>
      </table>
    </div>
  );
}
