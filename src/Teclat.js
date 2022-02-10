import "./teclat.css";

function Teclat({ passarValor }) {
  const numTeclat = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  return (
    <>
      {numTeclat.map((n) => (
        <button className="teclatNums" onClick={() => passarValor(n)} key={n}>
          {n}
        </button>
      ))}

      {/* <div className="teclatNumsContainer">
        <button className="teclatNums" onClick={() => passarValor(1)}>
          1
        </button>
        <button className="teclatNums" onClick={() => passarValor(2)}>
          2
        </button>
        <button className="teclatNums" onClick={() => passarValor(3)}>
          3
        </button>
      </div>
      <div className="teclatNumsContainer">
        <button className="teclatNums" onClick={() => passarValor(4)}>
          4
        </button>
        <button className="teclatNums" onClick={() => passarValor(5)}>
          5
        </button>
        <button className="teclatNums" onClick={() => passarValor(6)}>
          6
        </button>
      </div>
      <div className="teclatNumsContainer">
        <button className="teclatNums" onClick={() => passarValor(7)}>
          7
        </button>
        <button className="teclatNums" onClick={() => passarValor(8)}>
          8
        </button>
        <button className="teclatNums" onClick={() => passarValor(9)}>
          9
        </button>
      </div>
      <div className="teclatNumsContainer">
        <button className="teclatNumsFinal" onClick={() => passarValor(0)}>
          0
        </button>
      </div> */}
      <div className="butonOperadors">
        <button className="teclatNumsFinal">
          <h2> + </h2>
        </button>
        <button className="teclatNumsFinal">
          <h2> - </h2>
        </button>
      </div>
    </>
  );
}

export default Teclat;
