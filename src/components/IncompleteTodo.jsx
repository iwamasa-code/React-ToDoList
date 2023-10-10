import React from "react";

export const IncompleteTodo = (props) => {
  const { onClickComplete, onClickDelete, incompleteTodos } = props;
  return (
    <div className="incomplete-area">
      <p className="title">未完了のTODO</p>
      <ul>
        {incompleteTodos.map((todo, index) => {
          return (
            // ※key・・・mapなどを使用してレンダリングする際は設定必須。仮想DOMでも説明あり。
            <div key={todo} className="list-row">
              <li>{todo}</li>
              <button onClick={() => onClickComplete(index)}>完了</button>
              <button onClick={() => onClickDelete(index)}>削除</button>
            </div>
          );
        })}
      </ul>
    </div>
  );
};
