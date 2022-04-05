import './BlockText.css';

function BlockText({ data: { title, text } }) {
  return (
    <article className="block-text">
      <h3 className="block-text__title">{title}</h3>
      <p className="block-text__description">{text}</p>
    </article>
  );
}

export default BlockText;
