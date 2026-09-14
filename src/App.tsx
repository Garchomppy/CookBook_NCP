import React, { useRef, useState } from "react";
import { recipes } from "./data/recipes";
import { HTMLFlipBook, type FlipBookRef } from "./components/HTMLFlipBook";
import coverImage from "./assets/Gemini_Generated_Image_3ean3n3ean3n3ean.png";
import {
  BookOpen,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  Search,
  Clock,
  Users,
  ChefHat,
  Flame,
  Volume2,
  VolumeX,
  X,
} from "lucide-react";
import confetti from "canvas-confetti";

export const App: React.FC = () => {
  const flipBookRef = useRef<FlipBookRef>(null);
  const [currentPage, setCurrentPage] = useState(0);
  const [checkedIngredients, setCheckedIngredients] = useState<
    Record<string, boolean>
  >({});
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [bookDimensions, setBookDimensions] = useState({ width: 440, height: 600 });

  // Responsive Book Size calculation
  React.useEffect(() => {
    const handleResize = () => {
      const windowWidth = window.innerWidth;
      const windowHeight = window.innerHeight;

      if (windowWidth < 640) {
        // Mobile screen (single portrait page)
        const w = Math.min(windowWidth - 28, 380);
        const h = Math.min(windowHeight - 160, 560);
        setBookDimensions({ width: w, height: h });
      } else if (windowWidth < 980) {
        // Tablet screen
        const w = Math.min(Math.floor((windowWidth - 40) / 2), 400);
        const h = Math.min(windowHeight - 180, 580);
        setBookDimensions({ width: w, height: h });
      } else {
        // Desktop / Large screen
        setBookDimensions({ width: 440, height: 600 });
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Audio synthesis effect for realistic crisp paper sound
  const playPageTurnSound = () => {
    if (!soundEnabled) return;
    try {
      const audioCtx = new (
        window.AudioContext || (window as any).webkitAudioContext
      )();
      const bufferSize = audioCtx.sampleRate * 0.12; // 120ms
      const buffer = audioCtx.createBuffer(1, bufferSize, audioCtx.sampleRate);
      const output = buffer.getChannelData(0);
      for (let i = 0; i < bufferSize; i++) {
        output[i] =
          (Math.random() * 2 - 1) * Math.exp(-i / (audioCtx.sampleRate * 0.03));
      }

      const whiteNoise = audioCtx.createBufferSource();
      whiteNoise.buffer = buffer;

      const filter = audioCtx.createBiquadFilter();
      filter.type = "bandpass";
      filter.frequency.setValueAtTime(1400, audioCtx.currentTime);
      filter.Q.setValueAtTime(1.5, audioCtx.currentTime);

      const gainNode = audioCtx.createGain();
      gainNode.gain.setValueAtTime(0.3, audioCtx.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(
        0.01,
        audioCtx.currentTime + 0.12,
      );

      whiteNoise.connect(filter);
      filter.connect(gainNode);
      gainNode.connect(audioCtx.destination);

      whiteNoise.start();
    } catch (e) {
      // Audio context fallback
    }
  };

  const handleFlip = (e: { data: number }) => {
    setCurrentPage(e.data);
    playPageTurnSound();
  };

  const flipNext = () => {
    flipBookRef.current?.pageFlip()?.flipNext();
  };

  const flipPrev = () => {
    flipBookRef.current?.pageFlip()?.flipPrev();
  };

  const turnToPage = (pageNum: number) => {
    flipBookRef.current?.pageFlip()?.turnToPage(pageNum);
    playPageTurnSound();
    setSearchOpen(false);
  };

  const toggleIngredient = (id: string) => {
    setCheckedIngredients((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const handleCelebrate = () => {
    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.8 },
      colors: ["#c85a32", "#d4a359", "#5e7055", "#fff4e3"],
    });
  };

  const filteredRecipes = recipes.filter(
    (r) =>
      r.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      r.vietnameseTitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
      r.category.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  return (
    <div className="app-container">
      {/* Top Vintage Bar */}
      <nav className="top-nav">
        <div className="brand-logo">
          <BookOpen className="w-6 h-6 text-amber-500" />
          <span>CookBook</span>
        </div>

        <div className="nav-actions">
          <button className="nav-btn" onClick={() => setSearchOpen(true)}>
            <Search size={15} />
            <span>Tìm kiếm công thức</span>
          </button>

          <button
            className="nav-btn"
            onClick={() => setSoundEnabled(!soundEnabled)}
          >
            {soundEnabled ? <Volume2 size={15} /> : <VolumeX size={15} />}
            <span>Âm thanh: {soundEnabled ? "Bật" : "Tắt"}</span>
          </button>

          <button className="nav-btn" onClick={handleCelebrate}>
            <Sparkles size={15} />
            <span>Nấu xong!</span>
          </button>
        </div>
      </nav>

      {/* Interactive 3D Flipbook */}
      <div className="book-wrapper">
        <HTMLFlipBook
          key={`${bookDimensions.width}-${bookDimensions.height}`}
          ref={flipBookRef}
          width={bookDimensions.width}
          height={bookDimensions.height}
          size="fixed"
          minWidth={280}
          maxWidth={500}
          minHeight={380}
          maxHeight={700}
          drawShadow={true}
          flippingTime={700}
          usePortrait={true}
          showCover={true}
          mobileScrollSupport={true}
          onFlip={handleFlip}
          className="cookbook-flipbook"
        >
          {/* PAGE 1: Hard Cover Front */}
          <div
            className="page-item cover-page front-cover"
            data-density="hard"
            style={{
              backgroundImage: `linear-gradient(rgba(20, 12, 8, 0.65), rgba(20, 12, 8, 0.75)), url(${coverImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="cover-border-frame">
              <span className="cover-badge-top">Thực đơn thủ công</span>
              <div>
                <h1 className="cover-title">NHỮNG MÓN GÀ NGON</h1>
                <p className="cover-subtitle">
                  Công thức siêu ngon của Nguyễn Chơn Phước
                </p>
              </div>

              <div className="cover-illustration">
                <img src={coverImage} alt="Cozy Kitchen" />
              </div>

              <div className="cover-footer">
                <span>✦ Tái bản lần thứ I • 2026 ✦</span>
              </div>
            </div>
          </div>

          {/* PAGE 2: Table of Contents */}
          <div className="page-item" data-density="hard">
            <div className="page-inner">
              <h2 className="toc-title">Mục Lục Thực Đơn</h2>
              <div className="toc-list">
                {recipes.map((recipe, idx) => {
                  const targetPage = 2 + idx * 2;
                  return (
                    <div
                      key={recipe.id}
                      className="toc-item"
                      onClick={() => turnToPage(targetPage)}
                    >
                      <span className="toc-item-title">
                        {recipe.vietnameseTitle}
                      </span>
                      <span className="toc-item-dots"></span>
                      <span className="toc-item-page">
                        Trang {targetPage + 1}
                      </span>
                    </div>
                  );
                })}
              </div>

              <div className="chef-note-card" style={{ marginTop: "auto" }}>
                <p>
                  💡{" "}
                  <em>
                    "Mỗi món ăn là một bản giao hưởng của ký ức và sự chăm chút.
                    Hãy chạm vào mép trang hoặc dùng nút điều hướng để lật
                    sách."
                  </em>
                </p>
              </div>

              <span className="page-footer-num page-footer-left">Trang 1</span>
            </div>
          </div>

          {/* RECIPE SPREADS (Left: Overview, Photo, Meta, Ingredients | Right: Instructions) */}
          {recipes.map((recipe, idx) => {
            const pageLeftNum = 2 + idx * 2;
            const pageRightNum = 3 + idx * 2;

            return [
              /* Left Page: Breathtaking Full Bleed Photo with Title Overlay */
              <div
                key={`${recipe.id}-left`}
                className="page-item full-photo-page"
                data-density="soft"
              >
                <img 
                  src={recipe.image} 
                  alt={recipe.vietnameseTitle} 
                  className="full-photo-bg" 
                />
                
                <div className="full-photo-overlay">
                  <div className="full-photo-header">
                    <span className="recipe-tag">{recipe.category}</span>
                    <h3 className="recipe-heading">{recipe.vietnameseTitle}</h3>
                    <p className="recipe-subheading">{recipe.title}</p>
                  </div>

                  <div className="full-photo-footer">
                    <div className="full-photo-meta-cards">
                      <div className="meta-pill-item">
                        <Clock size={16} className="text-gold-accent" />
                        <div className="meta-pill-text">
                          <span className="meta-pill-label">Thời gian</span>
                          <span className="meta-pill-value">{recipe.cookTime}</span>
                        </div>
                      </div>

                      <div className="meta-pill-item">
                        <Users size={16} className="text-gold-accent" />
                        <div className="meta-pill-text">
                          <span className="meta-pill-label">Khẩu phần</span>
                          <span className="meta-pill-value">{recipe.servings}</span>
                        </div>
                      </div>

                      <div className="meta-pill-item">
                        <Flame size={16} className="text-gold-accent" />
                        <div className="meta-pill-text">
                          <span className="meta-pill-label">Độ khó</span>
                          <span className="meta-pill-value">{recipe.difficulty}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <span className="page-footer-num page-footer-left full-photo-page-num">
                  Trang {pageLeftNum}
                </span>
              </div>,

              /* Right Page: Dedicated Ingredients & Instructions */
              <div
                key={`${recipe.id}-right`}
                className="page-item"
                data-density="soft"
              >
                <div className="page-inner recipe-content-page">
                  {/* Ingredients Section */}
                  <h4 className="section-title">
                    <ChefHat size={16} className="text-amber-700" />
                    <span>Nguyên liệu ({recipe.ingredients.length})</span>
                  </h4>
                  <ul className="ingredients-list">
                    {recipe.ingredients.map((ing, iIdx) => {
                      const itemKey = `${recipe.id}-${iIdx}`;
                      const isChecked = !!checkedIngredients[itemKey];
                      return (
                        <li
                          key={itemKey}
                          className={`ingredient-item ${isChecked ? "checked" : ""}`}
                          onClick={() => toggleIngredient(itemKey)}
                        >
                          <label
                            style={{
                              display: "flex",
                              alignItems: "center",
                              cursor: "pointer",
                              overflow: "hidden",
                              textOverflow: "ellipsis",
                              whiteSpace: "nowrap",
                              maxWidth: "220px"
                            }}
                          >
                            <input
                              type="checkbox"
                              checked={isChecked}
                              onChange={() => {}}
                            />
                            <span>{ing.name}</span>
                          </label>
                          <strong
                            style={{
                              color: "var(--ink-brown)",
                              fontSize: "0.78rem",
                              whiteSpace: "nowrap",
                              marginLeft: "6px"
                            }}
                          >
                            {ing.amount}
                          </strong>
                        </li>
                      );
                    })}
                  </ul>

                  {/* Instructions Section */}
                  <h4 className="section-title" style={{ marginTop: '8px' }}>
                    <BookOpen size={16} className="text-amber-700" />
                    <span>Các bước thực hiện</span>
                  </h4>
                  <div className="instructions-timeline">
                    {recipe.instructions.map((step) => {
                      // Split sentences and render bullet points with '-'
                      const sentences = step.description
                        .split(/(?<=[.?!])\s+/)
                        .map(s => s.trim())
                        .filter(s => s.length > 3);

                      return (
                        <div key={step.step} className="step-card">
                          <span className="step-badge">{step.step}</span>
                          <div style={{ flex: 1 }}>
                            <div className="step-content-title">{step.title}</div>
                            <div className="step-content-desc">
                              {sentences.length > 1 ? (
                                <ul className="step-bullets">
                                  {sentences.map((sentence, sIdx) => (
                                    <li key={sIdx} className="step-bullet-item">
                                      <span className="bullet-dash">–</span>
                                      <span>{sentence}</span>
                                    </li>
                                  ))}
                                </ul>
                              ) : (
                                <div className="step-bullet-item">
                                  <span className="bullet-dash">–</span>
                                  <span>{step.description}</span>
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  <div className="chef-note-card">
                    <p>
                      <strong>Bí quyết của Bếp:</strong> {recipe.chefNote}
                    </p>
                  </div>

                  <span className="page-footer-num page-footer-right">
                    Trang {pageRightNum}
                  </span>
                </div>
              </div>,
            ];
          })}

          {/* FINAL BACK COVER */}
          <div className="page-item cover-page" data-density="hard">
            <div className="cover-border-frame">
              <span className="cover-badge-top">Lời kết</span>
              <div>
                <h2 className="cover-title" style={{ fontSize: "1.8rem" }}>
                  Bữa Cơm Ấm Áp
                </h2>
                <p className="cover-subtitle">
                  Hạnh phúc bắt đầu từ gian bếp nhỏ
                </p>
              </div>

              <div
                style={{
                  textAlign: "center",
                  padding: "0 20px",
                  color: "#c4aa8b",
                  fontSize: "0.9rem",
                  lineHeight: "1.6",
                }}
              >
                <p>Cảm ơn bạn đã đồng hành cùng cuốn sách công thức.</p>
                <p>Chúc bạn luôn có những phút giây nấu ăn an lành!</p>
              </div>

              <div className="cover-footer">
                <span>✦ The End ✦</span>
              </div>
            </div>
          </div>
        </HTMLFlipBook>
      </div>

      {/* Bottom Navigation Controls */}
      <div className="bottom-controls">
        <button className="flip-btn" onClick={flipPrev}>
          <ChevronLeft size={18} />
          <span>Trang trước</span>
        </button>

        <div className="page-indicator-pill">
          Lật trang ({currentPage + 1} / {2 + recipes.length * 2})
        </div>

        <button className="flip-btn" onClick={flipNext}>
          <span>Trang kế</span>
          <ChevronRight size={18} />
        </button>
      </div>

      {/* Search Modal */}
      {searchOpen && (
        <div
          className="vintage-modal-overlay"
          onClick={() => setSearchOpen(false)}
        >
          <div
            className="vintage-modal-card"
            onClick={(e) => e.stopPropagation()}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <h3
                style={{ fontFamily: "var(--font-serif)", fontSize: "1.3rem" }}
              >
                Tìm món ăn
              </h3>
              <button
                onClick={() => setSearchOpen(false)}
                style={{
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                }}
              >
                <X size={20} />
              </button>
            </div>

            <input
              type="text"
              className="search-input-box"
              placeholder="Nhập tên món, nguyên liệu hoặc phân loại..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              autoFocus
            />

            <div
              style={{
                maxHeight: "240px",
                overflowY: "auto",
                display: "flex",
                flexDirection: "column",
                gap: "8px",
              }}
            >
              {filteredRecipes.length === 0 ? (
                <p
                  style={{
                    textAlign: "center",
                    color: "var(--ink-muted)",
                    padding: "16px",
                  }}
                >
                  Không tìm thấy món ăn phù hợp.
                </p>
              ) : (
                filteredRecipes.map((r) => {
                  const rIdx = recipes.findIndex((rec) => rec.id === r.id);
                  const targetPage = 2 + rIdx * 2;
                  return (
                    <div
                      key={r.id}
                      onClick={() => turnToPage(targetPage)}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        padding: "10px",
                        borderRadius: "6px",
                        background: "var(--paper-aged)",
                        cursor: "pointer",
                        border: "1px solid var(--paper-border)",
                      }}
                    >
                      <div>
                        <strong>{r.vietnameseTitle}</strong>
                        <div
                          style={{
                            fontSize: "0.8rem",
                            color: "var(--ink-muted)",
                          }}
                        >
                          {r.category} • {r.prepTime}
                        </div>
                      </div>
                      <span
                        style={{
                          color: "var(--accent-terracotta)",
                          fontWeight: 600,
                        }}
                      >
                        Xem →
                      </span>
                    </div>
                  );
                })
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
