const programmingLanguage = [
    {lang: 'Python', id: 1},
    {lang: 'Javascript', id: 2},
    {lang: 'C#', id: 3},
    {lang: 'Java', id: 4},
    {lang: 'Ruby', id: 5},
];

export default function Lang() {
    const   lang = programmingLanguage.map(elem => <li key={elem.id}>{elem.lang}</li>);
    return (
        <ul>{lang}</ul>
    )
}