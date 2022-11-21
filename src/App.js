import "./App.scss";
import Header from "./components/Header";
import TableUsers from "./components/TableUsers";
import Container from "react-bootstrap/Container";
import { ModalAddNew } from "./components/ModalAddNew";
import { useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <div className="app-container">
        <Header />
        <Container>
          <div className="my-3 add-new">
            <span>
              <b>List Users:</b>
              <button
                className="btn btn-primary"
                onClick={() => setIsShowModalAddNew(true)}
              >
                Add new
              </button>
            </span>
          </div>
          <TableUsers />
        </Container>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
}

export default App;
