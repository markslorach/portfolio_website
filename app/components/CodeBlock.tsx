import hljs from "highlight.js";
import "highlight.js/styles/atom-one-dark.css";

const CodeBlock = ({ language, children }: any) => {
  const highlightedCode = hljs.highlight(children, { language }).value;

  return (
    <div className="highlight">
      <pre className={`language-${language} bg-slate-800`}>
        <code
          className={`language-${language}`}
          dangerouslySetInnerHTML={{ __html: highlightedCode }}
        />
      </pre>
    </div>
  );
};

export default CodeBlock;
