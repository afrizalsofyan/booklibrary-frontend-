import React from "react";

function Beranda({bookList}) {
  return (
    <div>
      <div className="container mt-3 w-75">
        <h1 className="text-center">Hello, Welcome to Our Store</h1>
        <div id="katalogBuku" className="mt-5">
          <h2>Katolog Buku</h2>
          <hr />
          <table className="table table-hover table-bordered">
            <thead>
              <tr>
                <th>No.</th>
                <th>Judul</th>
                <th>pengarang</th>
                <th>Harga</th>
                <th>Stok</th>
                
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
                
                </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Beranda;
