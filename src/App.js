import "./styles.css";
import SellerManageGrid from "./SellerManageGrid";

export default function App() {
  return (
    <div className="App">
      <h1 style={{ margin: 50, marginTop: 80 }}>
        Welcome to mui-datagrid-full-edit !
      </h1>
      <pre style={{ fontSize: 15, margin: 30 }}>
        This is a example of mui-datagrid-full-edit module.
        mui-datagrid-full-edit is a full functioned grid component with CRUD.
        But you can use it very simply with few props settings.
        <br />
        You do not need to set complex props to manage datagrid.
        <br />
        <b>
          Please read{" "}
          <a
            href="https://www.npmjs.com/package/mui-datagrid-full-edit"
            target="_blank"
            rel="noreferrer"
          >
            HERE
          </a>{" "}
          to know mui-datagrid-full-edit in detail.
        </b>
        <br />
        It's good for bussiness and dashboard UIs.
        <br />
        <br />
        Please{" "}
        <h4 style={{ display: "inline-block" }}>
          npm i mui-datagrid-full-edit
        </h4>{" "}
        and enjoy it!!!
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
            GitHub
          </button>
        </a>
        <a
          href="https://form.jotform.com/230442827812353"
          target="_blank"
          rel="noreferrer"
        >
          <button style={{ width: 150, height: 40, fontSize: 20, margin: 10 }}>
            Contact
          </button>
        </a>
      </pre>
    </div>
  );
}
