import reactLogo from "./assets/react.svg";

function App() {
    const [members, setMembers] = useState([]);

    useEffect(()=> {
        async function getMembers(){
            const res = await fetch("https://raw.githubusercontent.com/cederdorff/dat-js/main/data/members.json");
            const data = await res.json();
            console.log(data);
            setMembers(data);
        }

        getMembers();
    }, []);

    return (
        <>
            <header>
                <a href="https://react.dev" target="_blank" rel="noreferrer">
                    <img src={reactLogo} className="logo react" alt="React logo" />
                </a>
                <h1>RACE Your React 🎉</h1>
            </header>
            {members.map(member => {
                <Member member={member} key={member.id} />
            })}
        </>
    );
}
export default App;