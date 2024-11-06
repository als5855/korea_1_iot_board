import React, { useState } from "react";
import useCountStore from "../stores/count.store";
import useCarStore from "../stores/cart.store";

export default function ZustandRender() {
  //*State//
  //# zustand: count 값을 전역 상태 관리//
  const { increment, decrement } = useCountStore();

  const [newItem, setNewItem] = useState({
    id: 0,
    name: "",
    price: 0,
    quantity: 1,
  });
  const { addItem, clearCart } = useCarStore();

  

  //* Event Handle//
  //# event handler: 새로운 장바구니 아이템 입력 변화에 대한 이벤트 핸들러 //
  // 하나의 핸들러로 관리
  const hadlerCartInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewItem((prevItem) => ({
      ...prevItem,
      [name]: name === "price" || name === "quantity" ? Number(value) : value,
    }));
  };

  //# envent handler: 새로운 장바구니 아이템 생성 버튼 클릭 이벤트 핸들러 //
  const handleAddItem = () => {
    if (newItem.name && newItem.price > 0) {
      addItem({
        ...newItem,
        id: Date.now(),
      }); // 임시로 현재 시간 기반 ID 생성

      setNewItem({
        id: 0,
        name: "",
        price: 0,
        quantity: 1,
      });
    }
  };

  return (
    <div
      style={{
        textAlign: "center",
        marginTop: "20px",
        backgroundColor: "lightblue",
      }}
    >
      <h2>Zustand Render: Count 상태를 변경하는 버튼</h2>
      <button
        onClick={increment}
        style={{
          marginRight: "10px",
          padding: "15px 20px",
        }}
      >
        증가
      </button>
      <button
        onClick={decrement}
        style={{
          marginRight: "10px",
          padding: "15px 20px",
        }}
      >
        감소
      </button>

      <h2>Zustand Render: Cart 상태를 변경하는 Input</h2>
      <div style={{ padding: "20px", maxWidth: "400px", margin: "0 auto" }}>
        <h3>Shopping Cart</h3>
        <div style={{ marginBottom: "20px" }}>
          <input
            type="text"
            placeholder="메뉴명"
            name="name"
            value={newItem.name}
            onChange={hadlerCartInputChange}
          />
          <br />
          <input
            type="text"
            placeholder="메뉴명"
            name="price"
            value={newItem.price}
            onChange={hadlerCartInputChange}
          />
          <br />
          <input
            type="number"
            placeholder="메뉴명"
            name="quantity"
            value={newItem.quantity}
            onChange={hadlerCartInputChange}
          />
            <br />
          <button 
          onClick={handleAddItem}
          style={{
            padding: '5px 10px',
            marginTop: '10px'
          }}
          >새로운 장바구니 아이템 추가</button>
          <button 
          onClick={clearCart}
          style={{
            padding: '5px 10px',
            marginTop: '10px',
            marginLeft: '10px'
          }}
          >장바구니 전체 삭제</button>
        </div>
      </div>
    </div>
  );
}
