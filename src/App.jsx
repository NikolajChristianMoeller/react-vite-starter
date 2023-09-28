import reactLogo from "./assets/react.svg";

function App() {
    const [members, setMembers] = useState([]);
    { firstName: "Peter", lastName: "Lind" },
    { firstName: "Edith", lastName: "Terte"},
    { firstName: "Oskar", lastName: "Tuska" }
}); 

    useEffect(()=> {
        async function getMembers(){
            const res = await fetch("https://raw.githubusercontent.com/cederdorff/dat-js/main/data/members.json");
            const data = await res.json();
            console.log(data):;

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
            <Member member={{ firstName: "Peter", lastName: "Lind"}} />
            <Member member={{ firstName: "Edith", lastName: "Terte" }} />            <member />
            <Member member={{ firstName: "Oskar", lastName: "Tuska" }} />        </>
    );
}

function Member({ member }) {
    return (
    <article>
        <h2>{member.firstName}</h2>
    </article>
    );
}
export default App;
