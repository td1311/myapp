import React, { useState, useRef } from "react";
import './App.css';
import imgUrl from '../assets/pngaaa.com-8384218.png'

const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  const tapTimeout = useRef(null);

  const handleTap = () => {
    // ✅ Prevent rapid double toggle
    if (tapTimeout.current) return;

    setIsOpen((prev) => !prev);

    tapTimeout.current = setTimeout(() => {
      tapTimeout.current = null;
    }, 400); // slightly more than the animation duration
  };

  return (
    <main>
      <div className="container">
        <div className="mobile-layout">
          <div className="notification-header">
            <div className="necessities">
              <i className="fas fa-signal"></i>
              <i className="fas fa-wifi"></i>
              <i className="fas fa-battery-full"></i>
            </div>
          </div>
          <div className="actions">
            <i className="fas fa-chevron-left"></i>
            <i className="fas fa-bookmark"></i>
          </div>

          {/* ✅ Unified event handler using pointerdown */}
          <div
            className="book-interactive"
            onPointerDown={handleTap}
          >
            <div className="book-content">
              <img
                className="book-content-image"
                src={imgUrl}
                alt="book-content-image"
              />
            </div>
            <div className={`book-cover ${isOpen ? "open" : ""}`}>
              <img
                className="book-top"
                src="https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExeHV4ZjE1NmJpdmwwZGlycjZ1cG9jeTk2MzNieWoxNHZsbTljYXVtZCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/XdwYIsIZC4ebXmRPIE/giphy.gif"
                alt="book-top"
              />
            </div>

            <div className={`preface ${isOpen ? "open" : ""}`}>
              <div className="content">
                <div className="header">
                  <div className="title">Gửi em bé</div>
                  <div className="icon">
                    <i className="fas fa-chevron-down"></i>
                  </div>
                </div>
                <div className="author">Em đã khoẻ lên chưa, anh nhớ em nhiều lắm</div>
                <div className="body">
                  <p>
                    Em bé của anh, hôm nay em đỡ mệt chưa? Anh nhớ em nhiều lắm. Hôm nay giống như mọi ngày, anh cũng mong ngóng được về bên em, chỉ ước gì được ở bên để chăm sóc em lúc em mệt mỏi.
                  </p>
                  <p>
                    Ngày anh về sẽ dành hết tất cả thời gian cho em nhé, chỉ có em và anh thôi. Nhớ em và thương em rất nhiều.
                  </p>
                </div>
              </div>
            </div>
          </div> {/* End book-interactive */}
        </div>
      </div>
    </main>
  );
};

export default App;
