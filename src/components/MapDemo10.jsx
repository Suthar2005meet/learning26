
export const MapDemo10 = () => {
    const programmingLanguages = [
    {
        id: 1,
        name: "JavaScript",
        type: "Web Development",
        difficulty: "Medium",
        year: 1995,
        imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png"
    },
    {
        id: 2,
        name: "Python",
        type: "AI / Data Science",
        difficulty: "Easy",
        year: 1991,
        imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg"
    },
    {
        id: 3,
        name: "Java",
        type: "Backend Development",
        difficulty: "Hard",
        year: 1995,
        imageUrl:
        "https://upload.wikimedia.org/wikipedia/en/3/30/Java_programming_language_logo.svg"
    },
    {
        id: 4,
        name: "C++",
        type: "System Programming",
        difficulty: "Hard",
        year: 1985,
        imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/1/18/ISO_C%2B%2B_Logo.svg"
    },
    {
        id: 5,
        name: "PHP",
        type: "Web Backend",
        difficulty: "Medium",
        year: 1995,
        imageUrl: null
    },
    {
        id: 6,
        name: "C",
        type: "System Programming",
        difficulty: "Hard",
        year: 1972,
        imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/1/19/C_Logo.png"
    },
    {
        id: 7,
        name: "Go",
        type: "Backend / Cloud",
        difficulty: "Medium",
        year: 2009,
        imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/0/05/Go_Logo_Blue.svg"
    }
];

    return (
        <div>
        <h2>Programming Languages Table</h2>

        <table className="table">
        <thead>
            <tr>
            <th>ID</th>
            <th>Logo</th>
            <th>Language</th>
            <th>Type</th>
            <th>Difficulty</th>
            <th>Release Year</th>
            </tr>
        </thead>

        <tbody>
            {programmingLanguages.map((lang) => (
            <tr key={lang.id}>
                <td>{lang.id}</td>

                <td>
                {lang.imageUrl ? (
                    <img
                    src={lang.imageUrl}
                    alt={lang.name}
                    style={{ width: "50px", height: "50px" }}
                    />
                ) : (
                    <span style={{ color: "red" }}>Image Not Found</span>
                )}
                </td>

                <td style={{backgroundColor:lang.name=='JavaScript' && 'pink'}}>{lang.name}</td>
                <td>{lang.type}</td>
                <td style={{backgroundColor:lang.difficulty=='Easy' && 'yellowgreen'}}>{lang.difficulty}</td>
                <td style={{backgroundColor:lang.year>1990 && 'yellow'}}>{lang.year}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};