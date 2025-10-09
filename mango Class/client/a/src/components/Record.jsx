import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

export default function Record() {
  const [form, setForm] = useState({
    name: "",
    position: "",
    level: "",
  });
  const [isNew, setIsNew] = useState(true);
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchData() {
      const id = params.id?.toString() || undefined;
      if (!id) return;
      setIsNew(false);

      const response = await fetch(`http://localhost:5050/record/${id}`);
      if (!response.ok) {
        console.error(`An error has occurred: ${response.statusText}`);
        return;
      }

      const record = await response.json();
      if (!record) {
        console.warn(`Record with id ${id} not found`);
        navigate("/");
        return;
      }
      setForm(record);
    }
    fetchData();
  }, [params.id, navigate]);

  // Update form fields
  function updateForm(value) {
    return setForm((prev) => ({ ...prev, ...value }));
  }

  // Handle form submission
  async function onSubmit(e) {
    e.preventDefault();
    const person = { ...form };

    try {
      let response;
      if (isNew) {
        response = await fetch("http://localhost:5050/record", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(person),
        });
      } else {
        response = await fetch(`http://localhost:5050/record/${params.id}`, {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(person),
        });
      }

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
    } catch (error) {
      console.error("A problem occurred with your fetch operation:", error);
    } finally {
      setForm({ name: "", position: "", level: "" });
      navigate("/");
    }
  }

  return (
    <div>
      <h3>Create/Update Employee Record</h3>
      <form onSubmit={onSubmit}>
        <div>
          <h4>Employee Info</h4>
          <p>This information will be displayed publicly, so be careful what you share.</p>

          <div>
            <label htmlFor="name">Name</label><br />
            <input
              type="text"
              id="name"
              placeholder="First Last"
              value={form.name}
              onChange={(e) => updateForm({ name: e.target.value })}
            />
          </div>

          <div>
            <label htmlFor="position">Position</label><br />
            <input
              type="text"
              id="position"
              placeholder="Developer Advocate"
              value={form.position}
              onChange={(e) => updateForm({ position: e.target.value })}
            />
          </div>

          <div>
            <p>Level:</p>
            <label>
              <input
                type="radio"
                name="level"
                value="Intern"
                checked={form.level === "Intern"}
                onChange={(e) => updateForm({ level: e.target.value })}
              />{" "}
              Intern
            </label>
            <label>
              <input
                type="radio"
                name="level"
                value="Junior"
                checked={form.level === "Junior"}
                onChange={(e) => updateForm({ level: e.target.value })}
              />{" "}
              Junior
            </label>
            <label>
              <input
                type="radio"
                name="level"
                value="Senior"
                checked={form.level === "Senior"}
                onChange={(e) => updateForm({ level: e.target.value })}
              />{" "}
              Senior
            </label>
          </div>
        </div>

        <input type="submit" value="Save Employee Record" />
      </form>
    </div>
  );
}
