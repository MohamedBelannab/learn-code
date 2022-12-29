import React from 'react'

const EditorFront = () => {
  return (
    <>
        <div className="illustration-editor">
          <div className="code-blocks">
            <div className="code code-html">
              <header>
            
                <h1>HTML</h1>
                <svg
                  width={16}
                  height={8}
                  viewBox="0 0 16 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.7089 7.65105L14.8704 2.02908C15.1112 1.80937 15.2528 1.51212 15.2528 1.18902C15.2528 0.865913 15.1112 0.56866 14.8704 0.348951C14.6296 0.129241 14.3038 0 13.9497 0C13.5956 0 13.2698 0.129241 13.029 0.348951L7.75989 5.1567L2.49077 0.348951C2.24998 0.129241 1.9242 0 1.57009 0C1.21598 0 0.890202 0.129241 0.649409 0.336026C0.380287 0.568659 0.252808 0.878837 0.252808 1.18902C0.252808 1.48627 0.380286 1.78352 0.621079 2.02908C2.23581 3.51535 6.42844 7.3538 6.71173 7.6252L6.74006 7.65105C7.24998 8.11632 8.19898 8.11632 8.7089 7.65105Z"
                    fill="#4C4F5A"
                  />
                </svg>
              </header>
              <div className="code-content">
                <code>
                  <span className="c-r">&lt;div</span>{" "}
                  <span className="c-y">class</span>
                  <span className="c-w">=</span>
                  <span className="c-g">"rect"</span>
                  <span className="c-r">&gt;&lt;/div&gt;</span>
                </code>
              </div>
              <code></code>
            </div>
          </div>
          <div className="code code-css">
            <header>
              <h1>CSS</h1>
              <svg
                width={16}
                height={8}
                viewBox="0 0 16 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.7089 7.65105L14.8704 2.02908C15.1112 1.80937 15.2528 1.51212 15.2528 1.18902C15.2528 0.865913 15.1112 0.56866 14.8704 0.348951C14.6296 0.129241 14.3038 0 13.9497 0C13.5956 0 13.2698 0.129241 13.029 0.348951L7.75989 5.1567L2.49077 0.348951C2.24998 0.129241 1.9242 0 1.57009 0C1.21598 0 0.890202 0.129241 0.649409 0.336026C0.380287 0.568659 0.252808 0.878837 0.252808 1.18902C0.252808 1.48627 0.380286 1.78352 0.621079 2.02908C2.23581 3.51535 6.42844 7.3538 6.71173 7.6252L6.74006 7.65105C7.24998 8.11632 8.19898 8.11632 8.7089 7.65105Z"
                  fill="#4C4F5A"
                />
              </svg>
            </header>
            <div className="code-content">
              <code >
                <p className="line-1">
                  <span className="c-y">.rect</span> <span>{"{"}</span>
                </p>
                <br />
                <p className="line-2">
                  <span className="c-p">background</span>
                  <span>:</span> <span className="c-y">linear-gradient {'('}</span>
                </p>
                <br />
                <p className="line-3">
                  <span className="c-o">-119deg</span>,
                </p>
                <br />
                <p className="line-4">
                  <span className="c-y">$gray</span> <span className="c-o">0%</span>,
                </p>
                <br />
                <p className="line-5">
                  <span className="c-y">$dark-gray</span>
                  <span className="c-o">100%</span><span>{';  }'}</span>
                </p>
              </code>
            </div>
          </div>
          <div className="code code-js">
            <header>
              <h1>JS</h1>
              <svg
                width={16}
                height={8}
                viewBox="0 0 16 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.7089 7.65105L14.8704 2.02908C15.1112 1.80937 15.2528 1.51212 15.2528 1.18902C15.2528 0.865913 15.1112 0.56866 14.8704 0.348951C14.6296 0.129241 14.3038 0 13.9497 0C13.5956 0 13.2698 0.129241 13.029 0.348951L7.75989 5.1567L2.49077 0.348951C2.24998 0.129241 1.9242 0 1.57009 0C1.21598 0 0.890202 0.129241 0.649409 0.336026C0.380287 0.568659 0.252808 0.878837 0.252808 1.18902C0.252808 1.48627 0.380286 1.78352 0.621079 2.02908C2.23581 3.51535 6.42844 7.3538 6.71173 7.6252L6.74006 7.65105C7.24998 8.11632 8.19898 8.11632 8.7089 7.65105Z"
                  fill="#4C4F5A"
                />
              </svg>
            </header>
            <div className="code-content">
              <code>
                <span className="c-y">var</span> <span className="c-b">colors</span> = [
                <span className="c-g">“#74B087”</span>,{" "}
                <span className="c-g">“#DE7300”</span>,{" "}
                <span className="c-g">“#74B087”</span>];
                <br />
                <br />
                <span className="c-c">// Do the thing</span>
                <br />
                <span className="c-y">function</span>{" "}
                <span className="c-b">animate</span>() {"{"}
                {"}"}
              </code>
            </div>
          </div>
          <div className="editor-block" />
        </div>
    </>

  )
}

export default EditorFront