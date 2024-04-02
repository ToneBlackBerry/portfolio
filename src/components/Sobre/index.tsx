import Titulo from "../titulo";
import Paragrafo from "../Paragrafo";
import { GithubSecao } from "./styles";

const Sobre = () => (
  <section>
    <Titulo fontSize={16}>Sobre mim</Titulo>
    <Paragrafo tipo='principal'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint eligendi reprehenderit amet sequi unde. Aut cum inventore perferendis non odio exercitationem qui omnis voluptas error! Reprehenderit, repellat temporibus. Iste, cumque?</Paragrafo>
    <GithubSecao>
    <img  src="https://github-readme-stats.vercel.app/api?username=ToneBlackBerry&show_icons=true&theme=dracula&include_all_commits=true&count_private=true"/>
    <img  src="https://github-readme-stats.vercel.app/api/top-langs/?username=ToneBlackBerry&layout=compact&langs_count=7&theme=dracula"/>
    </GithubSecao>
  </section>
  
)
export default Sobre 