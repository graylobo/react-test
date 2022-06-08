import { useEffect, useState } from "react";

export default function App() {
  const [loading, setLoading] = useState(false);

  
  return (
    <div className="App">
      <h1>test</h1>
      {loading && <h1>로딩중</h1>}
    </div>
  );
}
