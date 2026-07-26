import { Highlight, themes } from "prism-react-renderer";
import type { CodeSnippet } from "@/types";


const customTheme = {
  ...themes.nightOwl,
  plain: {
    color: "#EAE6E1", // parchment
    backgroundColor: "transparent",
  },
  styles: [
    ...themes.nightOwl.styles,
    { types: ["comment", "prolog", "doctype", "cdata"], style: { color: "#EAE6E180" } }, // muted parchment
    { types: ["keyword", "builtin"], style: { color: "#D4B884" } }, // gold-accent
    { types: ["string", "char", "attr-value"], style: { color: "#8B7FD4" } }, // dusty-violet
    { types: ["number", "boolean"], style: { color: "#8B7FD4" } }, // dusty-violet
    { types: ["function"], style: { color: "#EAE6E1" } }, // parchment
    { types: ["operator", "punctuation"], style: { color: "#AAAAAA" } } // slightly muted parchment
  ]
};

export function CodeWindow({ snippet }: { snippet: CodeSnippet }) {
  return (
    <div className="my-8 border border-dusty-violet/20 bg-ink-violet rounded-md overflow-hidden shadow-2xl shadow-black/50 max-w-xl">
      <div className="flex justify-between items-center px-4 py-2 border-b border-dusty-violet/20 bg-dusty-violet/5">
        <span className="font-mono text-xs text-parchment/60">{snippet.title}</span>
        <span className="font-mono text-xs text-parchment/40">{snippet.fileName}</span>
      </div>

      <Highlight theme={customTheme} code={snippet.code.trim()} language={snippet.language || 'typescript'}>
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <pre className={`${className} p-4 text-xs font-mono leading-relaxed overflow-x-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden`} style={style}>
            <code>
              {tokens.map((line, i) => (
                <div key={i} {...getLineProps({ line })}>
                  {line.map((token, key) => (
                    <span key={key} {...getTokenProps({ token })} />
                  ))}
                </div>
              ))}
            </code>
          </pre>
        )}
      </Highlight>

      {snippet.footerStats && (
        <div className="font-mono mt-4 pt-4 border-t border-dusty-violet/10 text-xs space-y-2 p-5">
          {snippet.footerStats.map((stat, index) => (
            <div
              key={stat.label}
              className={`flex justify-between ${index === snippet.footerStats!.length - 1 ? 'mt-2 pt-2 border-t border-dusty-violet/10' : ''}`}
            >
              <span className="text-parchment/50">{stat.label}:</span>
              <span className="text-parchment/80">{stat.value}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}