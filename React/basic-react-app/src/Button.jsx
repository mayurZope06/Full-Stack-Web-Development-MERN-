function handleClick(event) {
  console.log("Hello World!");
  console.log(event);
}

function handleMouseOver() {
  console.log("bye!");
}

function handleDblClick() {
  console.log("you double clicked");
}

export default function Button() {
  return (
    <div>
      <button onClick={handleClick}>Click me!</button>
      <p onMouseOver={handleMouseOver}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
        excepturi nobis ut enim reprehenderit est exercitationem, cumque,
        repellat similique, repellendus distinctio architecto? Asperiores natus
        suscipit corrupti laboriosam odit totam commodi?
      </p>
      <button onDoubleClick={handleDblClick}>double click me!</button>
    </div>
  );
}
