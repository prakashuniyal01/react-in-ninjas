export default function App() {
  return (
    <form
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "1rem",
        margin: "auto",
        width: "250px",
        height: "225px",
        padding: "2rem"
      }}
    >
      <h1>Register Form</h1>
      <input
        type="text"
        placeholder="Name"
        style={{
          width: "100%",
          paddingBlock: "0.5rem",
          border: "1px solid black",
          borderRadius: "5px"
        }}
      />
      <input
        type="email"
        placeholder="Email"
        style={{
          width: "100%",
          paddingBlock: "0.5rem",
          border: "1px solid black",
          borderRadius: "5px"
        }}
      />
      <input
        type="password"
        placeholder="Password"
        style={{
          width: "100%",
          paddingBlock: "0.5rem",
          border: "1px solid black",
          borderRadius: "5px"
        }}
      />
      <button
        style={{
          width: "100%",
          backgroundColor: "black",
          color: "white",
          paddingBlock: "0.5rem",
          fontSize: "1.035rem"
        }}
      >
        Submit
      </button>
    </form>
  );
}




// This problem has only one correct answer
// The map method can be used to iterate over an array and return JSX
// The filter method can be used to filter an array based on a condition and return JSX
// The map method takes a callback function as an argument and returns a new array
The map method receives the array as the first argument to the callback function