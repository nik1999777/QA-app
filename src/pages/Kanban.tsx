import ContainerLeft from '../shared/ui/Containers/ContainerLeft/ContainerLeft'
import ContainerRight from '../shared/ui/Containers/ContainerRight/ConteinerRight'

const Kanban: React.FC = () => {
	return (
		<>
			<ContainerLeft>
				<h1>Hello</h1>
			</ContainerLeft>
			<ContainerRight>
				<h1>World</h1>
			</ContainerRight>
		</>
	)
}

export default Kanban
