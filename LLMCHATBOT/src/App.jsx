import React from 'react'
import './index.css'

const App = () => {
  return (
    <div className="app">

     
      <header className="header">
        <div className="logo-section">
          <div className="logo-icon">△</div>

          <div>
            <h1>Trinity</h1>
            <p>MULTI-MODEL CONSOLE</p>
          </div>
        </div>

        <div className="header-buttons">
          <button>⚙</button>
          <button>⋮</button>
        </div>
      </header>


      
      <main className="main">

        <div className="model-grid">

          
          <div className="model-card">

            <div className="card-header">
              <div className="model-info">

                <div className="model-icon llama-icon">
                  ∞
                </div>

                <div>
                  <h2>Llama</h2>
                  <p>GROQ / META</p>
                </div>

              </div>

              <button className="card-button">▣</button>
            </div>

            <div className="card-body">
              <p className="empty-text">
                Waiting for prompt...
              </p>
            </div>

          </div>


           
          <div className="model-card">

            <div className="card-header">
              <div className="model-info">

                <div className="model-icon gemini-icon">
                  ✦
                </div>

                <div>
                  <h2>Gemini</h2>
                  <p>GOOGLE</p>
                </div>

              </div>

              <button className="card-button">▣</button>
            </div>

            <div className="card-body">
              <p className="empty-text">
                Waiting for prompt...
              </p>
            </div>

          </div>


          
          <div className="model-card">

            <div className="card-header">
              <div className="model-info">

                <div className="model-icon qwen-icon">
                  ✡
                </div>

                <div>
                  <h2>Qwen</h2>
                  <p>ALIBABA</p>
                </div>

              </div>

              <button className="card-button">▣</button>
            </div>

            <div className="card-body">
              <p className="empty-text">
                Waiting for prompt...
              </p>
            </div>

          </div>

        </div>


        
        <section className="bottom-section">

          <div className="model-tabs">

            <button>
              Llama <span>(Meta)</span>
            </button>

            <button>
              Gemini <span>(Google)</span>
            </button>

            <button>
              Qwen <span>(Alibaba)</span>
            </button>

            <div className="live">
              ● LIVE COMPARISON
            </div>

          </div>


          <div className="prompt-section">

            <input
              type="text"
              placeholder="Enter your prompt and see three viewpoints..."
            />

            <button className="generate-button">
              ➤ GENERATE
            </button>

          </div>

        </section>

      </main>

    </div>
  )
}

export default App