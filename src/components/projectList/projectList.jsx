import "./projectList.scss"

export default function ProjectList({ title, id, active, setSelected} ) {
    return (
        <li
            className={active ? "projectList active" : "projectList"}
            onClick={() => setSelected(id)}>
            {title}
        </li>
    )
}