import Avatar from "../../components/Avatar"
import Paragrafo from "../../components/Paragrafo"
import Titulo from "../../components/titulo"
import {Descricao, BotaoTema, SidebarContainer} from "./styles"

const Sidebar = () => (
  <aside>
    <SidebarContainer>
      <Avatar/>
      <Titulo fontSize={18}>Renato Batista</Titulo>
      <Paragrafo tipo="secundario" fontSize={16}>renato batista</Paragrafo>
      <Descricao tipo="principal" fontSize={12}>Front-end</Descricao>
      <BotaoTema>Trocar tema</BotaoTema>
    </SidebarContainer>
  </aside>
)
export default Sidebar