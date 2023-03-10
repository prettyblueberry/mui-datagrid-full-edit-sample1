import "./styles.css";
import SellerManageGrid from "./SellerManageGrid";

export default function App() {
  return (
    <div className="App">
      <h1 style={{ margin: 50, marginTop: 80 }}>
        Welcome to mui-datagrid-full-edit !
      </h1>
      <h4>
        You can experience the best mui-datagrid
        <br />
        which is very simple to use but with full functions.
      </h4>
      <pre style={{ fontSize: 15, margin: 30 }}>
        You do not need to set complex props to manage datagrid.
        <br />
        But you can customize everything you want on it.
        <br />
        The component is optimized for recent status of database.
        <br />
        It's good for bussiness and dashboard UIs.
      </pre>
      <div style={{ margin: 10 }}>
        <SellerManageGrid />
      </div>
      <img
        style={{ width: 300, margin: 40, marginBottom: 0 }}
        src="https://raw.githubusercontent.com/prettyblueberry/prettyblueberry/master/logos/01_flyblueberry_std_remove_whitespace.svg"
        alt="Blueberry's logo"
      />
      <pre style={{ fontSize: 20 }}>
        <a
          href="https://github.com/prettyblueberry"
          target="_blank"
          rel="noreferrer"
        >
          <button style={{ width: 150, height: 40, fontSize: 20, margin: 10 }}>
            My GitHub
          </button>
        </a>
        <a
          href="https://form.jotform.com/230442827812353"
          target="_blank"
          rel="noreferrer"
        >
          <button style={{ width: 150, height: 40, fontSize: 20, margin: 10 }}>
            Contact Me
          </button>
        </a>
      </pre>
    </div>
  );
}
