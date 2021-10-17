import React from "react";
import { useState } from "react";

export default function ManajemenBuku({ bookList, store, update, remove }) {
  //untuk menampilkan dan menyembunyikan form
  const [formShowAdd, setFromShowAdd] = useState(false);

  const [formShowUpdate, setFromShowUpdate] = useState(false);
  //untuk nangkep value input
  const [inputBook, setInputBook] = useState();
  function handleJudul(event) {
    setInputBook({ ...inputBook, judul: event.target.value });
  }
  function handlePengarang(event) {
    setInputBook({ ...inputBook, pengarang: event.target.value });
  }
  function handleHarga(event) {
    setInputBook({ ...inputBook, harga: event.target.value });
  }
  function handleStock(event) {
    setInputBook({ ...inputBook, stock: event.target.value });
  }
  //simpan data ke objek setelah submit
  function submitAdd(event) {
    event.preventDefault();
    store(inputBook);
  }
  function showUpdate(books) {
    setInputBook(books);
    setFromShowUpdate(!formShowUpdate);
  }
  function submitUpdate(event) {
    event.preventDefault();
    update(inputBook);
    setFromShowUpdate("");
  }
  function deleteData(books) {
    remove(books);
  }
  return (
    <div className="container mt-3">
      <h1 className="text-center">Manajemen Buku</h1>

      {formShowAdd && (
        <div id="FromTambah">
          <h5>Tambah Bukuu</h5>
          <hr />
          <form className="form row" onSubmit={submitAdd}>
            <div className="col-3">
              <input
                type="text"
                name="judul"
                className="form-control mx-2"
                placeholder="Judul"
                onChange={handleJudul}
              />
            </div>
            <div className="col-3">
              <input
                type="text"
                name="pengarang"
                className="form-control mx-2"
                placeholder="pengarang"
                onChange={handlePengarang}
              />
            </div>
            <div className="col-2">
              <input
                type="number"
                name="harga"
                className="form-control mx-2"
                placeholder="harga"
                onChange={handleHarga}
              />
            </div>
            <div className="col-2">
              <input
                type="number"
                name="stock"
                className="form-control mx-2"
                placeholder="stock"
                onChange={handleStock}
              />
            </div>
            <div className="col-2">
              <input
                type="submit"
                className="btn btn-success ms-5"
                value="simpan"
              />
            </div>
          </form>
        </div>
      )}

      {formShowUpdate && (
        <div id="formUbah">
          <h5>Ubah Data</h5>
          <hr />
          <form className="from row" onSubmit={submitUpdate}>
            <div className="col-3">
              <input
                type="text"
                name="judul"
                className="form-control mx-2"
                placeholder="Judul"
                onChange={handleJudul}
                value={inputBook.judul}
              />
            </div>
            <div className="col-3">
              <input
                type="text"
                name="pengarang"
                className="form-control mx-2"
                placeholder="pengarang"
                onChange={handlePengarang}
                value={inputBook.pengarang}
              />
            </div>
            <div className="col-2">
              <input
                type="number"
                name="harga"
                className="form-control mx-2"
                placeholder="harga"
                onChange={handleHarga}
                value={inputBook.harga}
              />
            </div>
            <div className="col-2">
              <input
                type="number"
                name="stock"
                className="form-control mx-2"
                placeholder="stock"
                onChange={handleStock}
                value={inputBook.stock}
              />
            </div>
            <div className="col-2">
              <input
                type="submit"
                className="btn btn-success ms-5"
                value="simpan"
              />
            </div>
          </form>
        </div>
      )}

      <div className="daftarBuku ">
        <h2 className="mt-3">Daftar Buku</h2>
        <hr />
        <button
          className="btn btn-warning m-4"
          onClick={() => setFromShowAdd(!formShowAdd)}
        >
          Tambah Buku
        </button>
        <table className="table table-bordered text-center">
          <thead>
            <tr>
              <th>No.</th>
              <th>Judul</th>
              <th>Pengarang</th>
              <th>Harga</th>
              <th>Stock</th>
              <th>Aksi</th>
            </tr>
          </thead>
          <tbody>
            {bookList.map((el, index) => (
              <tr key={el._id}>
                <td>{index + 1}</td>
                <td>{el.judul}</td>
                <td>{el.pengarang}</td>
                <td>{el.harga}</td>
                <td>{el.stock}</td>
                <td>
                  <button
                    className="btn btn-info me-4"
                    onClick={() => showUpdate(el)}
                  >
                    Edit
                  </button>
                  <button
                    className="btn btn-danger "
                    onClick={() => deleteData(el)}
                  >
                    Hapus
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
