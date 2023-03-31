// function App() {
import { useState } from "react";

const App = () => {
  const [count, setCount] = useState(/*초기값*/ 7);

  const onClickAdd = () => {
    setCount(count + 1);
  };

  const onClickSubtract = () => {
    // setCount((prev) => {
    //   return prev - 1;
    // });
    if (count <= 0) {
      alert("count의 값이 0보다 작을 수 없습니다!");
      return;
    }
    setCount(count - 1);
  };
  // noUseState = noUseState + 1;
  // noUseState += 1;

  return (
    <div className="bg-purple-100 min-h-screen flex flex-col justify-center items-center">
      <div>{count}</div>
      <button
        className="bg-green-300 w-12 h-12 rounded-full"
        onClick={onClickAdd}
      >
        +
      </button>
      <button
        className="bg-yellow-300 w-12 h-12 rounded-full"
        onClick={onClickSubtract}
      >
        +
      </button>
    </div>
  );
};

export default App;
