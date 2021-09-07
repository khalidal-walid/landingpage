import "./solutionsList.scss";

export default function SolutionsList({ id, title, desc, active, setSelected }) {
  return (
    <li
      className={active ? "solutionsList active" : "solutionsList"}
      onClick={() => setSelected(id)}
    >
      {title}
      {desc}
    </li>
  );
}
