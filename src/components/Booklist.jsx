import React, { useState, useEffect } from 'react';

const Booklist = props => {
  const [bookData, setBookData] = useState(null);
  useEffect(() => {
    const result = props.getData?.(props.language).then(response => setBookData(response));
  }, [props])
  // `?`を使うことで、`getData`が存在する場合のみ関数を実行できる

  return (
    <div>
      <ul>
        {
          bookData === null
            ? <p>now loading...</p>
            : bookData.data.items.map
              ((x, index) =>
                <p key={index} >
                  <span style={{ fontSize: '20px' }} > {x.volumeInfo.title}</span>
                  <br />
                  <span style={{ color: '#7f7f7f' }}>["{x.volumeInfo.authors}"]</span>
                  &emsp;
                  <span style={{ color: '#7f7f7f' }}>{x.volumeInfo.publisher}</span>
                </p>

              )
        }
      </ul>
    </div >
  );
}

export default Booklist;

//props：呼び出し元の親コンポーネントから呼び出された子コンポーネントに渡されるデータの塊である
