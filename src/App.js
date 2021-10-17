import Beranda from "./components/beranda";
import "./App.css";
import Navbar from "./components/navbar";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import ManajemenBuku from "./components/manajemenBuku";
import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [books, setBooks] = useState([])
  // const [places, setPlaces] = useState([])
  useEffect(() => {
    retrieveData();
  }, []);


  // useEffect(()=>{
  //   gettingData()
  // }, [])


  // function gettingData() {
  //   axios
  //     .get("http://localhost:4000/place")
  //     .then((response) => {
  //       setPlaces(response.data);
        
  //     })
  //     .catch(function (error) {
  //       console.log(error);
  //     });
  // }
  function retrieveData() {
    axios
      .get("http://localhost:4000/book")
      .then((response) => {
        setBooks(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  function storeData(inputBooks) {
    // console.log(inputBooks);
    // alert("Data berhasil ditambahkan");
    axios
      .post("http://localhost:4000/book/add/", inputBooks)
      .then((res) => {
        setBooks((prevBooks) => [...prevBooks, inputBooks])
        alert("Data berhasil ditambahkan !!")
      })
      .catch((error) => {
        console.log(error.response.message);
      });
  }

  function updateData(inputBooks) {
    // console.log(inputBooks._id);
    // alert("Data telah di update");
    axios
      .put("http://localhost:4000/book/update/" + inputBooks._id, inputBooks)
      .then((res) => {
        retrieveData()
        alert("Data berhasil di perbarui")
      })
      .catch((error) => {
        console.log(error.response.message);
      });
  }
  function removeData(book) {
    // console.log(book);
    // alert("Data berhasil di hapus");
    axios
      .delete("http://localhost:4000/book/delete/" + book._id)
      .then((res) => {
        retrieveData();
        alert("Data berhasil di hapus")
      })
      .catch((error) => {
        console.log(error.response.message);
      });
  }
  return (
    <div className="">
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route path="/" exact>
            <Beranda bookList={books} />
          </Route>
          <Route path="/manajemenBuku" exact>
            <ManajemenBuku
              bookList={books}
              store={storeData}
              update={updateData}
              remove={removeData}
            />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
