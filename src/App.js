import { birtdayList } from "./birthday";
import React from "react";

const App = () => {
  const [list, setList] = React.useState(birtdayList);
  const removeBtnHandler = (id) => {
    let listAfterRemove = list.filter((item) => item.id !== id);
    setList(listAfterRemove);
  };
  return (
    <section>
      <h1>Birthday Buddy App</h1>
      {list.map((item, index) => {
        return (
          <article key={index}>
            <Friend item={item} />
            <button
              className="remove_btn"
              onClick={() => removeBtnHandler(item.id)}
            >
              Remove
            </button>
          </article>
        );
      })}
      <button className="clear_all_btn" onClick={() => setList([])}>
        Remove All
      </button>
    </section>
  );
};

const Friend = (props) => {
  const { img, name, age } = props.item;

  return (
    <>
      <div>
        <img src={img} alt="birthday"></img>
        <div>
          <h1>{name}</h1>
          <p>{age} Years</p>
        </div>
      </div>
    </>
  );
};

export default App;
