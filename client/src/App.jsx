import { useState } from "react";

function Form() {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch("http://localhost:8000/api/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ firstname, lastname }),
    });

    if (res.ok) {
      setSuccess(true);
      setFirstname("");
      setLastname("");
    }
  };

  return (
    <div>
      {success && (
        <p style={{ color: "green" }}>
          Thank you. Your details were submitted successfully.
        </p>
      )}

      <form onSubmit={handleSubmit}>
        <div>
          <label>First name:</label><br />
          <input
            value={firstname}
            onChange={(e) => setFirstname(e.target.value)}
            required
          />
        </div>

        <div>
          <label>Last name:</label><br />
          <input
            value={lastname}
            onChange={(e) => setLastname(e.target.value)}
            required
          />
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Form;
