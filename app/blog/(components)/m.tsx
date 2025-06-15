import 'katex/dist/katex.min.css';
import katex from 'katex';

export default function M(props:{math:string}) {
  const html = katex.renderToString(props.math, {
    throwOnError: false,
  });

  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}